
var fs = require('fs');
var path = require('path');
var reload = require('require-reload')(require);

var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var ruleFilePath = path.join(homePath, '/.nep/rule.js');

exports.loadRule = function(){
    
    if(fs.existsSync(ruleFilePath)){
        return reload(ruleFilePath);
    }
    else{
        return [];
    }
};

exports.getRuleFileContent = function(){
    if(fs.existsSync(ruleFilePath)){
        return fs.readFileSync(ruleFilePath).toString();
    }
    return '';
};

exports.setRuleFileContent = function(content){
    fs.writeFileSync(ruleFilePath, content);
};