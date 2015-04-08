var mdoc = require('mdoc'),
    fsx = require('fs.extra'),
    path = require('path'),
    themePath, apiDir, title, mdocConfig;


function configure(baseDir, config) {
    themePath = __dirname + '/../themes/' + config.theme + '/mdoc';
    title = config.title;
    apiDir = path.join(baseDir, config.api);
    outputDir = path.join(baseDir, config.output);

    mdocConfig = {

        // === required settings === //

        inputDir : apiDir,
        outputDir : outputDir + '/api',

        // === optional settings === //

        exclude: '_.md',
        templatePath: themePath,
        baseTitle : title,
        headingLevel : 2,

        // === optional new feature === //

        ctx: config.ctx

    };

    mdocConfig.ctx.logo = 'img/logo.png';

    // Check if index page available and add it
    // indexContentPath : '_.md',
}

function start(next) {
    console.log("mdoc tasks:");
    mdoc.run(mdocConfig);
    next();
}

function end(next) {
    console.log();
    next();
}

module.exports = configure;
module.exports.actions = [ start, end ];
