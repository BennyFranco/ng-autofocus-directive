import * as $ from 'jquery';
import { setTimeout } from 'timers';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  isGenerated = false;
  generateInput() {
    this.isGenerated = true;
  }
}
