var fs = require('fs'),
    fsx = require('fs.extra'),
    path = require('path'),
    themePath, newsDir, siteDir, outputDir, configObj;

function configure(baseDir, config) {
    themePath = __dirname + '/../themes/' + config.theme;
    newsDir = path.join(baseDir, config.news);
    siteDir = path.join(baseDir, config.doc);
    outputDir = path.join(baseDir, config.output, 'tmp');
    configObj = config;

    [themePath, newsDir, siteDir, outputDir].map(mkdirIfMissing);
}

function start(next) {
    console.log("Jekyll tasks:");
    next();
}

function end(next) {
    console.log();
    next();
}

function mkdirIfMissing(folder) {
    if (!fs.existsSync(folder)){
        console.log('Folder: ' + folder +' does not exist, creating it...');
        fs.mkdirSync(folder);
    }
}

function copyJekyllTemplate(next) {
    fsx.copyRecursive(themePath + '/jekyll', outputDir, function(err){
        if (err) {
            throw err;
        }
        console.log(" - Template");
        next();
    });
}

function copyJekyllNews(next) {
    var destinationFolder = path.join(outputDir, '_posts');
    fsx.mkdirpSync(destinationFolder);
    fsx.copyRecursive(newsDir, destinationFolder, function(err){
        if (err) {
            throw err;
        }

        console.log(" - News");
        next();
    });
}

function copyJekyllData(next) {
    var destinationFolder = path.join(outputDir, '_data');
    fsx.mkdirpSync(destinationFolder);
    fsx.copy(siteDir + '/docs.yml', destinationFolder+'/docs.yml', { replace: true }, function(err){
        if (err) {
            throw err;
        }

        console.log(" - Data");
        next();
    });
}

function copyJekyllPages(next) {
    var destinationFolder = path.join(outputDir, '_docs');
    fsx.mkdirpSync(destinationFolder);
    var walker = fsx.walk(siteDir);
    walker.on("file", function(root, stat, next) {
        if(stat.name === 'index.html') {
            fsx.copy(path.join(root, stat.name), path.join(outputDir, stat.name), { replace: true });
        } else if(stat.name !== 'docs.yml') {
            fsx.copy(path.join(root, stat.name), path.join(destinationFolder, stat.name));
        }

        // Next file not action
        next();
    });
    walker.on("end", function() {
        console.log(" - Pages");
        next();
    });
}


function generateConfigYML(next) {
    var buffer = [
        "# Site settings",
        "logo: img/logo.png",
        "collections:",
        "  docs:",
        "    output: true",
        "markdown: redcarpet"
    ];
    for(var key in configObj.ctx) {
        buffer.push(key + ": " + configObj.ctx[key]);
    }
    console.log(" - Generate config.yml");

    var fd = fs.openSync(outputDir + '/_config.yml', 'w');
    fs.writeSync(fd, buffer.join('\n'));
    fs.closeSync(fd);
    next();
}

function runJekyll(next) {
    var proc = require('child_process').spawn('jekyll', [ 'build', '--source', outputDir, '--destination', outputDir + '/_site' ], {});
    proc.on('exit', function(code, signal) {
        console.log(" - Site Generation");
        next();
    });
}

module.exports = configure;
module.exports.actions = [ start, copyJekyllTemplate, copyJekyllNews, copyJekyllData, copyJekyllPages, generateConfigYML, runJekyll, end ];
