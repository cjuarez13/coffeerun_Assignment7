(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var Checklist = App.Checklist;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var checkList  = new Checklist(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
    //console.log(formHandler);
    formHandler.decafHandler(Validation.isDecaf);
    formHandler.addInputHandler(Validation.isCompanyEmail);


})(window);
