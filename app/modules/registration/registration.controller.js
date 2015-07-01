/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
/**
 * @ngdoc function
 * @name app.web.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the registration module
 */
var app;
(function (app) {
    var web;
    (function (web) {
        var controllers;
        (function (controllers) {
            var RegistrationCtrl = (function () {
                function RegistrationCtrl($scope, datacontext) {
                    this.$scope = $scope;
                    this.datacontext = datacontext;
                    this.steps = [];
                    this.cities = [];
                    //define viewModel
                    this.$scope.viewModel = this;
                    //define steps and content
                    this.steps = [
                        {
                            title: 'Step 1',
                            templateUrl: 'modules/registration/step1.html'
                        }, {
                            title: 'Step 2',
                            templateUrl: 'modules/registration/step2.html'
                        }, {
                            title: 'Step 3',
                            templateUrl: 'modules/registration/step3.html'
                        }, {
                            title: 'Step 4',
                            templateUrl: 'modules/registration/step4.html'
                        }
                    ];
                    this.addWatch();
                    this.initializeRegistartion();
                }
                //add scope watches
                RegistrationCtrl.prototype.addWatch = function () {
                    var _this = this;
                    this.$scope.$watch('viewModel.selectedStep', function (current, old) {
                        if (current === undefined)
                            return;
                        // enable/disable buttons
                        _this.isFirstStep = current === 0;
                        _this.isLastStep = current === _this.steps.length - 1;
                    });
                };
                //initialization on variables and data loads
                RegistrationCtrl.prototype.initializeRegistartion = function () {
                    //initialize variables
                    this.selectedStep = 0;
                    this.isFirstStep = true;
                    this.isLastStep = false;
                    //initialize registration
                    this.registration = new app.web.model.Registration();
                    //load data
                    this.cities = this.datacontext.getCities();
                };
                //controls the navigation of the previous and next buttons
                RegistrationCtrl.prototype.goToStep = function (direction) {
                    this.selectedStep = this.selectedStep + direction;
                };
                RegistrationCtrl.$inject = ['$scope', 'datacontext'];
                return RegistrationCtrl;
            })();
            controllers.RegistrationCtrl = RegistrationCtrl;
        })(controllers = web.controllers || (web.controllers = {}));
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
app.web.registerController("RegistrationCtrl", ['$scope', 'datacontext']);
