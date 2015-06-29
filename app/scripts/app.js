var modules = ['app.web.controllers'];
modules.forEach(function (mod) { return angular.module(mod, []); });
// Angular modules 
modules.push("ngAnimate");
modules.push("ngCookies");
modules.push('ngResource');
modules.push("ngRoute");
modules.push("ngSanitize");
modules.push("ngTouch");
modules.push("ngMaterial");
modules.push('app.web');
angular.module('app.web', modules).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'modules/registration/registration.html',
        controller: 'RegistrationCtrl'
    })
        .otherwise({
        redirectTo: '/'
    });
});
;
var app;
(function (app) {
    var web;
    (function (web) {
        var controllers;
        (function (controllers) {
            null;
        })(controllers = web.controllers || (web.controllers = {}));
        function registerController(className, services) {
            if (services === void 0) { services = []; }
            var controller = 'app.web.controllers.' + className;
            services.push(app.web.controllers[className]);
            angular.module('app.web').controller(controller, services);
        }
        web.registerController = registerController;
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
