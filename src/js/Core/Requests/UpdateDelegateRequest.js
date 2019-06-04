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
var MeetingRequestsDeliveryScope_1 = require("../../Enumerations/MeetingRequestsDeliveryScope");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var EwsUtilities_1 = require("../EwsUtilities");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var DelegateManagementResponse_1 = require("../Responses/DelegateManagementResponse");
var DelegateManagementRequestBase_1 = require("./DelegateManagementRequestBase");
/**
 * @internal Represents an UpdateDelegate request.
 */
var UpdateDelegateRequest = /** @class */ (function (_super) {
    __extends(UpdateDelegateRequest, _super);
    /**
     * @internal Initializes a new instance of the **UpdateDelegateRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function UpdateDelegateRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.delegateUsers = [];
        _this.meetingRequestsDeliveryScope = null; //Nullable
        return _this;
    }
    Object.defineProperty(UpdateDelegateRequest.prototype, "MeetingRequestsDeliveryScope", {
        /**
         * Gets or sets the meeting requests delivery scope.
         *
         * @value   The meeting requests delivery scope.
         */
        get: function () {
            return this.meetingRequestsDeliveryScope;
        },
        set: function (value) {
            this.meetingRequestsDeliveryScope = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateDelegateRequest.prototype, "DelegateUsers", {
        /**
         * Gets the delegate users.
         *
         * @value   The delegate users.
         */
        get: function () {
            return this.delegateUsers;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the response
     *
     * @return  {DelegateManagementResponse}		Response object.
     */
    UpdateDelegateRequest.prototype.CreateResponse = function () {
        return new DelegateManagementResponse_1.DelegateManagementResponse(true, this.delegateUsers);
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    UpdateDelegateRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateDelegateRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateDelegateResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateDelegateRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateDelegate;
    };
    /**
     * @internal Validate request.
     */
    UpdateDelegateRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.DelegateUsers, "DelegateUsers");
        for (var _i = 0, _a = this.DelegateUsers; _i < _a.length; _i++) {
            var delegateUser = _a[_i];
            delegateUser.ValidateUpdateDelegate();
        }
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UpdateDelegateRequest.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.DelegateUsers);
        for (var _i = 0, _a = this.DelegateUsers; _i < _a.length; _i++) {
            var delegateUser = _a[_i];
            delegateUser.WriteToXml(writer, XmlElementNames_1.XmlElementNames.DelegateUser);
        }
        writer.WriteEndElement(); // DelegateUsers
        if (this.MeetingRequestsDeliveryScope) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.DeliverMeetingRequests, MeetingRequestsDeliveryScope_1.MeetingRequestsDeliveryScope[this.MeetingRequestsDeliveryScope]);
        }
    };
    return UpdateDelegateRequest;
}(DelegateManagementRequestBase_1.DelegateManagementRequestBase));
exports.UpdateDelegateRequest = UpdateDelegateRequest;
