import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TimeService implements ITimeService {
    getCurrent(){
        return new Date();
    }
}

export interface ITimeService{
    getCurrent():Date;
}