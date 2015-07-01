/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
describe('Controller: RegistrationCtrl', function () {
    var expect = chai.expect;
    var $controller;
    var scope;
    var $rootScope;
    var datacontextServiceMock;
    beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $controller = _$controller_;
        var mocks = new app.tests.base.Mocks();
        datacontextServiceMock = mocks.datacontextMock;
    }));
    var createRegisterController = function () {
        var controller = $controller(app.web.controllers.RegistrationCtrl, { $scope: scope, datacontext: datacontextServiceMock });
        return controller;
    };
    describe("when constructed", function () {
        it('should check no of steps', function () {
            var controller = createRegisterController();
            expect(controller.steps.length).to.be.equal(4);
        });
    });
    describe("when initialized", function () {
        it('should check no of cities', function () {
            var controller = createRegisterController();
            expect(controller.cities.length).to.be.equal(3);
        });
        it('should check if registration undefined', function () {
            var controller = createRegisterController();
            expect(controller.registration).to.be.not.equal(undefined);
        });
        it('should check if selectedStep is set to 0', function () {
            var controller = createRegisterController();
            expect(controller.selectedStep).to.be.equal(0);
        });
        it('should set isFirstStep true and isLastStepFalse', function () {
            var controller = createRegisterController();
            expect(controller.isFirstStep).to.be.equal(true);
            expect(controller.isLastStep).to.be.equal(false);
        });
    });
    describe("when navigating", function () {
        it('should increase on moveing forward', function () {
            var controller = createRegisterController();
            //move forward
            controller.goToStep(1);
            expect(controller.selectedStep).to.be.equal(1);
        });
        it('should decrease on moveing backward', function () {
            var controller = createRegisterController();
            //move forward
            controller.goToStep(1);
            //move backward
            controller.goToStep(-1);
            expect(controller.selectedStep).to.be.equal(0);
        });
        it('should set isFirstStep true on first step and false otherwise when on firstStep', function () {
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
        it('should set isLastStep true on last step and false otherwise when on firstStep', function () {
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
