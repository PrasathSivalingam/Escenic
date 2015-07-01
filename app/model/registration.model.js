var app;
(function (app) {
    var web;
    (function (web) {
        var model;
        (function (model) {
            var Registration = (function () {
                function Registration() {
                }
                return Registration;
            })();
            model.Registration = Registration;
        })(model = web.model || (web.model = {}));
    })(web = app.web || (app.web = {}));
})(app || (app = {}));
