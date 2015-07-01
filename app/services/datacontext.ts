module app.web.services {
    export interface IDatacontext {
        getCities():string[];
    }

    export class Datacontext implements IDatacontext {
        constructor() {
            
        }

        public getCities() {
            return ["Oslo","Bergan","Florø"];
        }
    }
}

app.web.registerService('Datacontext');