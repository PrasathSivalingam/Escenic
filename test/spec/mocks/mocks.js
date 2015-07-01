var app;
(function (app) {
    var tests;
    (function (tests) {
        var base;
        (function (base) {
            var Mocks = (function () {
                function Mocks() {
                    this.datacontextMock = {
                        'initialize': function () {
                        },
                        getCities: function () {
                            return ["Oslo", "Bergan", "Florø"];
                        }
                    };
                }
                return Mocks;
            })();
            base.Mocks = Mocks;
        })(base = tests.base || (tests.base = {}));
    })(tests = app.tests || (app.tests = {}));
})(app || (app = {}));
