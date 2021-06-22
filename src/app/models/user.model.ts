import { Account } from "./account.model";
import { Agency } from "./agency.model";

export class User {
    id?: number;
    email: string;
    lastName: string;
    firstName: string;
    accounts?: Account[];
    picture?: string;
    phoneNumber?: string;
    agency: Agency;
    codePostale:string;
    city:string;
    adress:string;
  
    _2FaEnabled: boolean;
}
