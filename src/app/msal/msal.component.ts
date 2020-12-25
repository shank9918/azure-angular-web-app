import {Component} from '@angular/core';
import {MsalService} from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  template: ''
})
export class MsalComponent {

  constructor(private Msal: MsalService) {
  }

}
