var sourceref = require("./sourceref");

/**
 * @module {function} bit-docs-tag-sourceref
 * @parent plugins
 *
 * @description Adds a `@sourceref` tag for use in `bit-docs`.
 *
 * @body
 *
 * `@sourceref` will load the file indicated like:
 *
 * `@sourceref ./relative/path/something.js`
 *
 * And wrap it with triple \` so it shows up as a code block.
 */
module.exports=  function(bitDocs) {
    bitDocs.register("tags",{
        sourceref: sourceref
    });
};
