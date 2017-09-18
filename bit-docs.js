var sourceref = require("./sourceref");

/**
 * @parent plugins
 * @module {function} bit-docs-tag-sourceref
 * @group bit-docs-tag-sourceref/tags tags
 *
 * @description Adds a `@sourceref` tag for use in `bit-docs`.
 *
 * @body
 *
 * This plugin registers onto the `tags` hook to add the
 * [bit-docs-tag-sourceref/tags/sourceref] tag.
 */
module.exports=  function(bitDocs) {
    bitDocs.register("tags",{
        sourceref: sourceref
    });
};
