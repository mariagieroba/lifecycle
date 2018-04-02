import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee} from './onchanges/employee';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    emp = new Employee('Anna', 20);
    msg = 'Have a good day!';

    onFormSubmit(empForm: NgForm) {
        let name = empForm.controls['name'].value;
        let age = empForm.controls['age'].value;
        this.emp = new Employee(name, age);
    }
}
