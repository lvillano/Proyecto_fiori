/*global QUnit*/

sap.ui.define([
	"sapui5/employees/controller/v1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("v1 Controller");

	QUnit.test("I should test the v1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
