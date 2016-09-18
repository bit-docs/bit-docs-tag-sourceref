var sourceref = require("./sourceref");

module.exports=  function(bitDocs) {
    bitDocs.register("tags",{
        sourceref: sourceref
    });
};
