  

var modules: string[] = ['app.web.controllers', 'app.web.services'];
modules.forEach((mod) => angular.module(mod, []));

// Angular modules 
modules.push("ngAnimate");
modules.push("ngCookies");
modules.push('ngResource');
modules.push("ngRoute");
modules.push("ngSanitize");
modules.push("ngTouch");
modules.push("ngMaterial");
modules.push('app.web');

angular.module('app.web', modules); 

module app.web {
    export module controllers {null;}
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
