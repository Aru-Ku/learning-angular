import { Pipe, PipeTransform } from '@angular/core';

interface Comparer {
    (t1: any, t2: any): number
}

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    private getCompaper(attName: string): Comparer {
        return (t1: any, t2: any) => {
            if(t1[attName] < t2[attName]) return -1;
            if(t1[attName] > t2[attName]) return 1;
            return 0;
        }
    }

    private getDescComparer(comparer: Comparer): Comparer {
        return (t1: any, t2: any) => comparer(t1, t2) * -1;
    }

    transform(data: any[], attrName: string, isDescending: boolean = false): any[] {
        if (!data || !data.length || !attrName) return data;
        let compaper = this.getCompaper(attrName);
        if(isDescending) {
            compaper = this.getDescComparer(compaper);
        }
        return data.sort(compaper);
    }

}
