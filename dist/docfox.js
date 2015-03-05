var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.docfox = factory();
})(this, function () {
    "use strict";

    //
    // Always be sure to define variables.
    // Never export directly, as 6to5 strips
    // all import and export lines.
    //

    var File = function File(name, content) {
        _classCallCheck(this, File);

        this.fileMeta = {
            name: name,
            raw: content
        };
    };

    var docfox = {};

    var app = docfox;

    return app;
});
//# sourceMappingURL=./docfox.js.map