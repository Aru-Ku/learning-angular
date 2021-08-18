export class SalaryCalculatorModel {
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;

    setValue(attrName: string, value: number): void {
        this[attrName] = + value
    }

    calculate(): void{
        const gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
        console.log(this);
    }
}