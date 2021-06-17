import { City } from "./city.model";

export class Agency {
    id: Number;
    creationDate: Date;
    updateDate: Date;
    deleted:boolean;
    agencyWording: string;
    city:City;
}
