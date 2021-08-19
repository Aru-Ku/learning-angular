import { NgModule } from "@angular/core";
import { ParseTimePipe } from "./pipes/parse-time.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trim-text.pipe";

@NgModule({
    declarations: [
        TrimTextPipe,
        ParseTimePipe,
        SortPipe
    ],
    exports: [
        TrimTextPipe,
        ParseTimePipe,
        SortPipe
    ]
})
export class UtilsModule {

}