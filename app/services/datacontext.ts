"use strict";
/**
 * @ngdoc function
 * @name app.web.services:Datacontext
 * @description
 * # Datacontext
 * Service class to serve data to registration module
 */
module app.web.services {
    export interface IDatacontext {
        getCities():string[];
    }

    export class Datacontext implements IDatacontext {
        constructor() {
            
        }

        // returns a list of cities
        public getCities() {
            return ["Oslo","Bergan","Florø"];
        }
    }
}

app.web.registerService('Datacontext');