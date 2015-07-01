module app.web.model {

    export class Registration {
        public fullName: string;
        public email: string;
        public gender: string;
        public dateOfBirth: Date;
        public favouriteCity: string;
        public likeTraveling: boolean;

        constructor(){}
    }
}