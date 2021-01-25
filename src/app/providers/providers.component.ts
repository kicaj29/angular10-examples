import { Component, OnInit } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  constructor(ts: TimeService) {
    ts.doNothing('providers module');
   }

  ngOnInit(): void {
  }

}
