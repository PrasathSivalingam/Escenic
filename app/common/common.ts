/**
 * @ngdoc function
 * @name app.web:Common
 * @description
 *
 * common module to define registration functions, that can be used on controller, services, directives and filters
 */

module app.web {
    export module controllers { null; }
    export module services { null; }

    /**
     * Register new controller.
     *
     * @param className
     * @param services
     */

    export function registerController(className: string, services = []) {
        var controller = 'app.web.controllers.' + className;
        services.push(app.web.controllers[className]);
        angular.module('app.web').controller(controller, services);
    }

    /**
     * Register new service.
     *
     * @param className
     * @param services
     */
    export function registerService(className: string, services = []) {
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(app.web.services[className]);
        angular.module('app.web.services').service(service, services);
    }
}