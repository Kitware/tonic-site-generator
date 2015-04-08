var handlebars = require('handlebars'),
    fs = require('fs'),
    fsx = require('fs.extra'),
    docco = require('docco'),
    path = require('path'),
    themePath, outputDir, srcDir, configObj;


function configure(baseDir, config) {
    configObj = config;
    themePath = __dirname + '/../themes/' + config.theme + '/docco';
    outputDir = path.join(baseDir, config.output, 'source');
    srcDir = path.join(baseDir, config.src);
}

function applyTemplate(next) {
    var handleBarTemplateFile = path.normalize(themePath + '/docco.hbs');
    if(fs.existsSync(handleBarTemplateFile)) {
        // Need to generate the JST file
        console.log(" - Template the docco template");
        var tplFn = handlebars.compile(fs.readFileSync(handleBarTemplateFile, 'utf-8'));
        configObj.ctx.logo = 'img/logo.png';
        fs.writeFileSync(handleBarTemplateFile.replace(/docco.hbs/g, 'docco.jst'), tplFn({ ctx: configObj.ctx }));
    }
        
    next();
}

function run(next) {
    console.log("docco tasks:");
    var walker = fsx.walk(srcDir),
        files = [],
        logFn = console.log;

    // Unbind console.log();
    console.log = function() {};
 
    // file, files, directory, directories 
    walker.on("file", function (root, stat, next) {
        files.push(path.join(root, stat.name));
        next();
    });
    walker.on("end", function(){
        files.sort();
        configObj.ctx.sourceURL = path.basename(files[0], '.js') + '.html';
        docco.document({
            layout      : 'linear',
            output      : outputDir,
            template    : themePath + '/docco.jst',
            css         : themePath + '/docco.css',
            extension   : null,
            languages   : {},
            marked      : null,
            args        : files
        }, 
        function(err) {
            // Get the log function back
            console.log = logFn;

            if(err) {
                console.log(err);
            }
            
            console.log(" - done");
            console.log();

            next();
        });
    });
}

module.exports = configure;
module.exports.actions = [ applyTemplate, run ];
