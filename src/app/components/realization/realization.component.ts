import { Component, OnInit } from '@angular/core';
import { Realization } from 'src/app/shared/realization';
import { RealizationService } from 'src/app/shared/realization.service';

@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.scss']
})
export class RealizationComponent implements OnInit {

  realizations: Realization[];

  constructor(private realizationService: RealizationService) { }

  ngOnInit() {
    this.realizationService.getRealization().subscribe(
      response => { this.realizations = response;
        console.log(this.realizations)
    });
  }



}
