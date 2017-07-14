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

/**
 * @parent bit-docs-tag-sourceref/tags
 * @module {bit-docs/types/tag} bit-docs-tag-sourceref/tags/sourceref @sourceref
 * 
 * @description Loads a file and wraps it with markdown for code block.
 * 
 * @signature `@sourceref PATH`
 * 
 * Wraps file contents with triple \` so it shows up as a code block.
 * 
 * @param {String} PATH The path to any kind of file.
 * 
 * @body
 * 
 * An example file might look like:
 * 
 * ```js
 * var foo = 'bar';
 * ```
 * 
 * That gets used like:
 * 
 * ```js
 * @@sourceref ./demos/something.js
 * ```
 * 
 * And renders like:
 * 
 * @@sourceref ./demos/something.js
 */
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
