import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        CommonService
    ],
    declarations: [NavComponent, HeaderComponent]
})
export class CoreModule {

}
