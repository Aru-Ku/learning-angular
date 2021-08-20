import { TestBed } from "@angular/core/testing";
import { GreeterService } from "./greeter.service";
import { TimeService } from "./time.service";

fdescribe('Greeter Service', () => {
    let fakeTimeService : jasmine.SpyObj<TimeService> ;

    beforeEach(()=>{
        console.log('beforeEach');
        fakeTimeService = jasmine.createSpyObj('TimeService', ['getCurrent']);
        TestBed.configureTestingModule({
            providers: [
                GreeterService,
                { provide: TimeService, useValue: fakeTimeService }
            ]
        })
    })

    it("should greet the user with [good morning] when greeted in the morning", () => {
        
        fakeTimeService.getCurrent.and.returnValue(new Date(2021, 7, 20, 9, 0, 0));
        const greeterService: GreeterService = new GreeterService(fakeTimeService);
        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh, Have a good morning!'

        //Act
        const actualResult = greeterService.greet(userName);

        //Assert
        expect(actualResult).toBe(expectedResult);
    })

    it("should greet the user with [good day] when greeted after the morning", () => {
        
        fakeTimeService.getCurrent.and.returnValue(new Date(2021, 7, 20, 14, 0, 0));
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