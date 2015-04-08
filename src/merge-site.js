var fs = require('fs'),
    fsx = require('fs.extra'),
    path = require('path'),
    outputDir, logoSrc, configObj;

function configure(baseDir, config) {
    outputDir = path.join(baseDir, config.output);
    logoSrc = path.join(baseDir, config.icon);
    configObj = config;
}

function mergeJekyll(next) {
    fsx.copyRecursive( outputDir + '/tmp/_site', outputDir, function (err) {
        if (err) {
          throw err;
        }
        console.log("Site cleanup:");
        console.log(" - jekyll contribution");
        fsx.rmrfSync(outputDir + '/tmp');
        console.log(" - remove tmp site");

        next();
    });
}

function addLogo(next) {
    fsx.mkdirpSync(outputDir + '/img');
    fsx.copy(logoSrc, outputDir+'/img/logo.png', { replace: true }, function(err){
        if (err) {
            throw err;
        }
     
        console.log(" - add logo");
        console.log();
        next();
    });
}

function gitDir(next) {
    if(configObj.gitdir) {
        var fd = fs.openSync(outputDir + '/.git', 'w');
        fs.writeSync(fd, "gitdir: " + configObj.gitdir + "\n");
        fs.closeSync(fd);
        next();
    }
}

module.exports = configure;
module.exports.actions = [ mergeJekyll, addLogo, gitDir ];

