var path = require("path");
var fs = require("fs");

var typeConverters = {
  stache: 'html',
  mustache: 'html',
  component: 'html'
};
var convertType = function(type) {
  return typeConverters[type] || type;
};

module.exports = {
    add: function(line, curData) {

        var file;
        if(this.src.path) {
            file = path.join(path.dirname(this.src.path), line.replace("@sourceref", "").trim());
        } else {
            file = line.replace("@sourceref", "").trim()
        }

        var type = convertType(path.extname(file).substring(1));
        var validCurData = (curData && curData.length !== 2);
        var useCurData = validCurData && (typeof curData.description === "string") && !curData.body;
        var markdown = '\n```' + type + '\n' + fs.readFileSync(file).toString() + '\n```\n';

        if (useCurData) {
            curData.description += markdown;
        } else {
            this.body += markdown;
        }
    }
};
