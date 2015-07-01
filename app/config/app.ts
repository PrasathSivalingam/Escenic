  
// add app.web modules 
var modules: string[] = ['app.web.controllers', 'app.web.services'];
modules.forEach((mod) => angular.module(mod, []));

// Angular modules and 3rd party modules
modules.push("ngAnimate");
modules.push("ngCookies");
modules.push('ngResource');
modules.push("ngRoute");
modules.push("ngSanitize");
modules.push("ngTouch");
modules.push("ngMaterial");
modules.push('app.web');

angular.module('app.web', modules); 


