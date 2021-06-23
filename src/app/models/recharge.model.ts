import { Account } from "./account.model";

export interface Recharge {
    id ?: number;
    account: Account;
    operatorr: string;
    amount: string;
    dateOfRecharge: Date;
    phoneNumber: string
}
