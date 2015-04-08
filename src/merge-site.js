var fsx = require('fs.extra'),
    path = require('path'),
    outputDir, logoSrc;

function configure(baseDir, config) {
    outputDir = path.join(baseDir, config.output);
    logoSrc = path.join(baseDir, config.icon);
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

module.exports = configure;
module.exports.actions = [ mergeJekyll, addLogo ];

