/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
/**
 * @ngdoc function
 * @name app.web.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the registration module
 */

module app.web.controllers {
    export interface IRegistrationScope extends ng.IScope {
        viewModel: RegistrationCtrl;
    }

    export interface IRegistrationCtrl {
        selectedStep:number;
        steps: any;
        cities:string[];
        registration : app.web.model.Registration;
        goToStep(direction: number): any;
        isFirstStep: boolean;
        isLastStep: boolean;
    }

    export class RegistrationCtrl implements IRegistrationCtrl {
        static $inject = ['$scope','datacontext'];
        public isFirstStep: boolean;
        public isLastStep: boolean;
        public selectedStep: number;
        public steps: any = [];
        public cities: string[] = [];
        public registration: app.web.model.Registration;

        constructor(public $scope: IRegistrationScope,public datacontext:app.web.services.IDatacontext) {
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
                },{
                    title: 'Step 3',
                    templateUrl: 'modules/registration/step3.html'
                },{
                    title: 'Step 4',
                    templateUrl: 'modules/registration/step4.html'
                }
            ];

            this.addWatch();
            this.initializeRegistartion();

        }

        //add scope watches
        private addWatch() {
            this.$scope.$watch('viewModel.selectedStep', (current, old) =>{
                if (current===undefined) return;
                // enable/disable buttons
                this.isFirstStep = current === 0;
                this.isLastStep = current === this.steps.length - 1;
            });

        }

        //initialization on variables and data loads
        private initializeRegistartion() {
            //initialize variables
            this.selectedStep = 0;
            this.isFirstStep = true;
            this.isLastStep = false;

            //initialize registration
            this.registration = new app.web.model.Registration();

            //load data
            this.cities = this.datacontext.getCities();
        }


        //controls the navigation of the previous and next buttons
        public goToStep(direction:number) {
            this.selectedStep = this.selectedStep + direction;
        }


    }
}

app.web.registerController("RegistrationCtrl", ['$scope', 'datacontext']); 