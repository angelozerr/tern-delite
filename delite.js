(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
  "use strict";
    
  tern.registerPlugin("delite", function(server, options) {
    return { defs : defs };
  });
    
  var defs = {
    "!name": "delite",
    "!define": {
      "!requirejs": {
        "delite/register": {
          "!type": "fn(tag: string, superclasses: [], props: ?) -> fn()",
          "!doc": "Declare a widget and register it as a custom element.",
          "parse": {
            "!type": "fn(root: +Element)",
            "!doc": "Parse the given DOM tree for any Elements that need to be upgraded to widgets. Searches all descendants of the specified node, but does not upgrade the node itself."
          }
        },
        "delite/Widget": {
          "!type": "fn()"	            
        }
      }
    }
  };
  
})
