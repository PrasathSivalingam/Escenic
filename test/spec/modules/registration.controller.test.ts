/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

describe('Controller: RegistrationCtrl', ()=> {
    var expect = chai.expect;
    var $controller: ng.IControllerService;
    var scope: app.web.controllers.IRegistrationScope;
    var $rootScope: any;

    var datacontextServiceMock: any;

    beforeEach(
        angular.mock.inject((
            _$rootScope_: app.web.controllers.IRegistrationScope,
            _$controller_: ng.IControllerService
            
            ) => {
            $rootScope = _$rootScope_;
            scope = <app.web.controllers.IRegistrationScope>$rootScope.$new();

            $controller = _$controller_;

            var mocks = new app.tests.base.Mocks();

            datacontextServiceMock = mocks.datacontextMock;

        }));

    var createRegisterController = () => {
        var controller = $controller(app.web.controllers.RegistrationCtrl,{$scope: scope,datacontext:datacontextServiceMock});

        return <app.web.controllers.RegistrationCtrl>controller;

    }

    describe("when constructed",() => {
        it('should check no of steps',() => {

            var controller = createRegisterController();

            expect(controller.steps.length).to.be.equal(4);

        });
        
    });

    describe("when initialized",() => {
        it('should check no of cities',() => {

            var controller = createRegisterController();

            expect(controller.cities.length).to.be.equal(3);

        });

        it('should check if registration undefined',() => {

            var controller = createRegisterController();
            
            expect(controller.registration).to.be.not.equal(undefined);

        });

        it('should check if selectedStep is set to 0',() => {

            var controller = createRegisterController();
            
            expect(controller.selectedStep).to.be.equal(0);

        });

        it('should set isFirstStep true and isLastStepFalse',() => {

            var controller = createRegisterController();
            
            expect(controller.isFirstStep).to.be.equal(true);
            expect(controller.isLastStep).to.be.equal(false);

        });

    });

    describe("when navigating",() => {
        it('should increase on moveing forward',() => {

            var controller = createRegisterController();
            //move forward
            controller.goToStep(1);
            expect(controller.selectedStep).to.be.equal(1);

        });

        it('should decrease on moveing backward',() => {

            var controller = createRegisterController();
            //move forward
            controller.goToStep(1);
            //move backward
            controller.goToStep(-1);
            expect(controller.selectedStep).to.be.equal(0);

        });

        it('should set isFirstStep true on first step and false otherwise when on firstStep',() => {

            var controller = createRegisterController();
            //move forward
            controller.goToStep(1);
            scope.$apply();
            expect(controller.isFirstStep).to.be.equal(false);
            //move backward
            controller.goToStep(-1);
            scope.$apply();
            expect(controller.isFirstStep).to.be.equal(true);

        });

        it('should set isLastStep true on last step and false otherwise when on firstStep',() => {

            var controller = createRegisterController();
            //move forward
            controller.goToStep(1);
            scope.$apply();
            expect(controller.isLastStep).to.be.equal(false);
            controller.goToStep(1);
            expect(controller.selectedStep).to.be.equal(2);
            controller.goToStep(1);
            expect(controller.selectedStep).to.be.equal(3);
            
            scope.$apply();
            expect(controller.isLastStep).to.be.equal(true);

        });
    });

});