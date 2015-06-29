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

module app.web.controllers {
    export interface IRegistrationScope extends ng.IScope {
        //viewModel: AccessControlController;
    }

    export interface IRegistrationCtrl {
    //    $scope: IAccessControlScope;
    }

    export class RegistrationCtrl implements IRegistrationCtrl {
        static $inject = ['$scope'];

        constructor(public $scope: IRegistrationScope) {
            
        }

    }
}

app.web.registerController("RegistrationCtrl", app.web.controllers.RegistrationCtrl.$inject); 