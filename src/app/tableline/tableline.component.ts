import {Component, Input} from '@angular/core';

@Component({
  selector: "tableline",
  templateUrl: './tableline.component.html',
  styleUrls: ['./tableline.component.css']
})
export class TablelineComponent {
  @Input() idLine: string = '0';
  @Input() username: string = '';
  @Input() emailaddress: string = '';


  odd() {

  }
}
