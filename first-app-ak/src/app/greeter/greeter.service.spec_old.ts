import { TestBed } from "@angular/core/testing";
import { GreeterService } from "./greeter.service";
import { TimeService } from "./time.service";

/* 
class FakeTimeServiceForMorning implements TimeService {
    getCurrent(): Date {
        return new Date(2021, 7, 20, 9, 0 , 0)
    }
}

class FakeTimeServiceForAfterMorning implements TimeService {
    getCurrent(): Date {
        return new Date(2021, 7, 20, 13, 0 , 0)
    }
} 
*/

/* class FakeTimeService implements TimeService {
    constructor(private currentTime : Date){

    }
    getCurrent(): Date {
        return this.currentTime;
    }

} */

fdescribe('Greeter Service', () => {
    it("should greet the user with [good morning] when greeted in the morning", () => {
        //Arrange
        //const greeterService: GreeterService = new GreeterService(new FakeTimeServiceForMorning());
        const fakeTimeService = jasmine.createSpyObj('fakeTimeService', {
            getCurrent:  new Date(2021, 7, 20, 9, 0 , 0)
        })
        const greeterService: GreeterService = new GreeterService(fakeTimeService);
        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh, Have a good morning!'

        //Act
        const actualResult = greeterService.greet(userName);

        //Assert
        expect(fakeTimeService.getCurrent).toHaveBeenCalledTimes(1);
        expect(actualResult).toBe(expectedResult);
    })

    it("should greet the user with [good day] when greeted after the morning", () => {
        //Arrange
        //const greeterService: GreeterService = new GreeterService(new FakeTimeServiceForAfterMorning());
        // const fakeTimeService = new FakeTimeService(new Date(2021, 7, 20, 13, 0 , 0));
        const fakeTimeService = jasmine.createSpyObj('TimeService', {
            getCurrent:  new Date(2021, 7, 20, 13, 0 , 0)
        })
        // const greeterService: GreeterService = new GreeterService(fakeTimeService);
        TestBed.configureTestingModule({
            providers: [
                GreeterService,
                { provide: TimeService, useValue: fakeTimeService }
            ]
        })
        const greeterService: GreeterService = TestBed.inject(GreeterService);
        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh, Have a good day!'

        //Act
        const actualResult = greeterService.greet(userName);

        //Assert
        expect(fakeTimeService.getCurrent).toHaveBeenCalledTimes(1);
        expect(actualResult).toBe(expectedResult);
    })
})