var app;
(function (app) {
    var web;
    (function (web) {
        var services;
        (function (services) {
            var Datacontext = (function () {
                function Datacontext() {
                }
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
