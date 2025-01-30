import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from "../../../shared/components/map/map.component";

@Component({
    selector: 'app-login',
    imports: [MapComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

}
