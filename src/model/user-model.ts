import { BaseModel } from "./base-model";

export class UserModel extends BaseModel {
    name: string;
    surname: string;
    birth: string;
    email: string;
    password: string;
    active: Boolean;
}