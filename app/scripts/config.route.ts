var application = angular.module('app.web');

application.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'modules/registration/registration.html',
        controller: 'app.web.controllers.RegistrationCtrl',
        controllerAs : 'viewModel'
    })
        .otherwise({
        redirectTo: '/'
    });
});