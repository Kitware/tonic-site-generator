var fs = require('fs'),
    fsx = require('fs.extra'),
    path = require('path'),
    outputDir;

function configure(baseDir, config) {
    outputDir = path.join(baseDir, config.output);
}

function clearWebSite(next) {
    console.log("Site init:");
    if(fs.existsSync(outputDir)) {
        fsx.rmrfSync(outputDir);   
        console.log(" - Delete previous directory: " + outputDir);
    }
    fsx.mkdirpSync(outputDir);
    console.log(" - Create destination directory: " + outputDir);
    console.log();

    next();
}


module.exports = configure;
module.exports.actions = [ clearWebSite ];

