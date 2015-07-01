/**
 * @ngdoc function
 * @name app.web:Common
 * @description
 *
 * common module to define registration functions, that can be used on controller, services, directives and filters
 */
var app;
(function (app) {
    var web;
    (function (web) {
        var controllers;
        (function (controllers) {
            null;
        })(controllers = web.controllers || (web.controllers = {}));
        var services;
        (function (services) {
            null;
        })(services = web.services || (web.services = {}));
        /**
         * Register new controller.
         *
         * @param className
         * @param services
         */
        function registerController(className, services) {
            if (services === void 0) { services = []; }
            var controller = 'app.web.controllers.' + className;
            services.push(app.web.controllers[className]);
            angular.module('app.web').controller(controller, services);
        }
        web.registerController = registerController;
        /**
         * Register new service.
         *
         * @param className
         * @param services
         */
        function registerService(className, services) {
            if (services === void 0) { services = []; }
            var service = className[0].toLowerCase() + className.slice(1);
            services.push(app.web.services[className]);
            angular.module('app.web.services').service(service, services);
        }
        web.registerService = registerService;
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
