import { ComponentStore } from "@ngrx/component-store";
import { User } from "./user.model";
import { Injectable } from "@angular/core";


export interface UsersState {
    users: User[];
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
    constructor() {
        super({users: []})
    }
}

