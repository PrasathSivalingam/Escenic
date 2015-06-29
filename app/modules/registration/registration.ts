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
        //viewModel: RegistrationCtrl;
    }

    export interface IRegistrationCtrl {
        selectedStep:number;
        steps: any;
        goToStep(direction:number):any;
    }

    export class RegistrationCtrl implements IRegistrationCtrl {
        static $inject = [];
        public selectedStep:number = 0;
        public steps : any =[];
        constructor() {
            
            this.steps = [
                {
                    title: 'Step 1',
                    templateUrl: 'modules/registration/step1.html'
                }, {
                    title: 'Step 2',
                    templateUrl: 'modules/registration/step2.html'
                },{
                    title: 'Step 3',
                    templateUrl: 'modules/registration/step3.html'
                },{
                    title: 'Step 4',
                    templateUrl: 'modules/registration/step4.html'
                }
            ];
        }

        public goToStep(direction:number) {
            this.selectedStep = this.selectedStep + direction;
        }


    }
}

app.web.registerController("RegistrationCtrl", app.web.controllers.RegistrationCtrl.$inject); 