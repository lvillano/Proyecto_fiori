//@ts-nocheck
sap.ui.define([
    "../localService/mockServer",
    "sap/m/MessageBox"

    /** 
     * @param{typeof sap.m.MessageBox } MessageBox
     * 
     */

], function (mockServer, MessageBox) {
    "use strict";
    var aMockServers = [];

    //iniciar mock 
    aMockServers.push(mockServer.init());

    Promise.all(aMockServers).catch(function (oError) {
        MessageBox.error(oError.message);
    }).finally(function () {
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    });//fin promesa finally


});