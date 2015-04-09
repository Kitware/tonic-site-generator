#!/usr/bin/env node
 
var path = require('path'),
    confPath = process.cwd() + '/' + process.argv[2],
    config = require( confPath ),
    baseDir = path.dirname(confPath),
    resetWeb = require('../src/reset-site'),
    jekyll = require('../src/jekyll'),
    mdoc = require('../src/mdoc'),
    docco = require('../src/docco'),
    merge = require('../src/merge-site'),
    taskManager = require('../src/task-manager');

// Check if we need to override the baseurl
process.argv.forEach(function(val, index, array) {
    if(val === '--local-test') {
        config.baseurl = "";
    }
});


// Configure tasks
resetWeb(baseDir, config);
mdoc(baseDir, config);
docco(baseDir, config);
jekyll(baseDir, config);
merge(baseDir, config);

// Register tasks
taskManager.register(resetWeb);
taskManager.register(mdoc);
taskManager.register(docco);
taskManager.register(jekyll); // Need soureURL from docco
taskManager.register(merge);

// Execute tasks
taskManager.process();
