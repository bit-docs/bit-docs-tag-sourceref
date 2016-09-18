var processTags = require("bit-docs-process-tags");
var sourceref = require("../sourceref");
var path = require("path");
var assert = require("assert");

describe("sourceref", function(){

    it("adds to parent",function(){
		var docMap = {};

		processTags({
			comment: "@constructor\n@sourceref ./js/hello-world.js",
			scope: {},
			docMap: docMap,
			docObject: {
                src: {
                    path: path.join(__dirname, "code","test.js")
                }
            },
			tags: {
                sourceref: sourceref,
                constructor: {
    				add : function(){
    					this.name = "constructed";
    					this.type = "constructor";
    					return ["scope",this];
    				}
    			}
            }
		},function(newDoc, newScope){
            assert.ok(newDoc.description.indexOf("console.log(") >= 0);
		});
	});

});
