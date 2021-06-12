sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

     

       var main =  Controller.extend("sapui5.employees.controller.v1", {});
         
        var main;//
            main.prototype.onChange = function() {
                       var input1 = this.getView().byId("input1");
            var input1value = input1.getValue();

            if (input1value.length === 6) {
                // input1.setDesc"ription("Ok");
                this.getView().byId("label2").setVisible(true);
                this.getView().byId("select2").setVisible(true);
            } else {
                //input1.setDescription(" not Ok");
                this.getView().byId("label2").setVisible(false);
                this.getView().byId("select2").setVisible(false);
            };

           }

            return main;





       
    });
