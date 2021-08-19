import { NgModule } from "@angular/core";
import { ParseTimePipe } from "./pipes/parse-time.pipe";
import { TrimTextPipe } from "./pipes/trim-text.pipe";

@NgModule({
    declarations: [
        TrimTextPipe,
        ParseTimePipe
    ],
    exports: [
        TrimTextPipe,
        ParseTimePipe
    ]
})
export class UtilsModule {

}