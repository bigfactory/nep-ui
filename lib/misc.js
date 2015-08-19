
var fs = require('fs');
var path = require('path');

var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var ruleFilePath = path.join(homePath, '/.nep/rule.js');

exports.loadRule = function(){
    
    if(fs.existsSync(ruleFilePath)){
        return require(ruleFilePath);
    }
    else{
        return [];
    }
};