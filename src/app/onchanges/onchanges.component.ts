import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css']
})
export class OnchangesComponent implements OnChanges {
    @Input() employee: Employee;
    @Input() message: string;

    allMsgChangeLogs: string[] = [];
    allEmployeeChangeLogs: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let change = changes[propName];

            let curVal = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);
            let firstChange = JSON.stringify(change.firstChange);
            let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}, is first? : ${firstChange}`;

            if (propName === 'message') {
                this.allMsgChangeLogs.push(changeLog);
            } else if (propName === 'employee') {
                this.allEmployeeChangeLogs.push(changeLog);
            }
        }
    }
}

