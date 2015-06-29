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
                function RegistrationCtrl($scope) {
                    this.$scope = $scope;
                }
                RegistrationCtrl.$inject = ['$scope'];
                return RegistrationCtrl;
            })();
            controllers.RegistrationCtrl = RegistrationCtrl;
        })(controllers = web.controllers || (web.controllers = {}));
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
app.web.registerController("RegistrationCtrl", app.web.controllers.RegistrationCtrl.$inject);
