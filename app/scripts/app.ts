  

var modules: string[] = ['app.web.controllers'];
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
    export module controllers {
        null;
    }

    export function registerController(className: string, services = []) {
        var controller = 'app.web.controllers.' + className;
        services.push(app.web.controllers[className]);
        angular.module('app.web').controller(controller, services);
    }
}
