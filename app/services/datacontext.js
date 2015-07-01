"use strict";
/**
 * @ngdoc function
 * @name app.web.services:Datacontext
 * @description
 * # Datacontext
 * Service class to serve data to registration module
 */
var app;
(function (app) {
    var web;
    (function (web) {
        var services;
        (function (services) {
            var Datacontext = (function () {
                function Datacontext() {
                }
                // returns a list of cities
                Datacontext.prototype.getCities = function () {
                    return ["Oslo", "Bergan", "Florø"];
                };
                return Datacontext;
            })();
            services.Datacontext = Datacontext;
        })(services = web.services || (web.services = {}));
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
app.web.registerService('Datacontext');
