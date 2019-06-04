"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceLocalException_1 = require("./ServiceLocalException");
var ServiceXmlSerializationException = /** @class */ (function (_super) {
    __extends(ServiceXmlSerializationException, _super);
    function ServiceXmlSerializationException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        return _super.call(this, message, innerException) || this;
    }
    return ServiceXmlSerializationException;
}(ServiceLocalException_1.ServiceLocalException));
exports.ServiceXmlSerializationException = ServiceXmlSerializationException;
