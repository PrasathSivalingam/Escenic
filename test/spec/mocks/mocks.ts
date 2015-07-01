module app.tests.base {
    export class Mocks {
        constructor() { }

        public datacontextMock = {
            'initialize': () => { },
            getCities: (): string[] => {
                return ["Oslo", "Bergan", "Florø"];
            }
        }
    }
}