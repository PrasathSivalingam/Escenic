/// <reference path="../../../typings/tsd.d.ts" />
/**
 * @ngdoc function
 * @name escenicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the escenicApp
 */
//angular.module('escenicApp')
//    .controller('RegistrationCtrl', function ($scope) {
//    $scope.awesomeThings = [
//        'HTML5 Boilerplate',
//        'AngularJS',
//        'Karma'
//    ];
//    });
var app;
(function (app) {
    var web;
    (function (web) {
        var controllers;
        (function (controllers) {
            var RegistrationCtrl = (function () {
                function RegistrationCtrl() {
                    this.selectedStep = 0;
                    this.steps = [];
                    this.steps = [
                        {
                            title: 'Step 1',
                            templateUrl: 'modules/registration/step1.html'
                        },
                        {
                            title: 'Step 2',
                            templateUrl: 'modules/registration/step2.html'
                        },
                        {
                            title: 'Step 3',
                            templateUrl: 'modules/registration/step3.html'
                        },
                        {
                            title: 'Step 4',
                            templateUrl: 'modules/registration/step4.html'
                        }
                    ];
                }
                RegistrationCtrl.prototype.goToStep = function (direction) {
                    this.selectedStep = this.selectedStep + direction;
                };
                RegistrationCtrl.$inject = [];
                return RegistrationCtrl;
            })();
            controllers.RegistrationCtrl = RegistrationCtrl;
        })(controllers = web.controllers || (web.controllers = {}));
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
app.web.registerController("RegistrationCtrl", app.web.controllers.RegistrationCtrl.$inject);
