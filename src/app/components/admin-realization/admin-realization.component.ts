import { Component, OnInit } from '@angular/core';
import { RealizationService } from 'src/app/shared/realization.service';
import { Realization } from 'src/app/shared/realization';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-realization',
  templateUrl: './admin-realization.component.html',
  styleUrls: ['./admin-realization.component.scss']
})
export class AdminRealizationComponent implements OnInit {

  realizations: Realization[];
  modify: Boolean= false;
  create: Boolean= false;
  realizationToPut :Realization;
  private newRealization : Realization = new Realization();
  visibility: number;

  modifyrealizationForm = this.fb.group({
    title: [''],
    image: [''],
    description: [''],
    link: [''],
    visibility:['']
  });

  createrealizationForm = this.fb.group({
    title: [''],
    image: [''],
    description: [''],
    link: [''],
    visibility:['']
  });

  constructor(private realizationService: RealizationService ,private fb: FormBuilder) { }

  ngOnInit() {
    this.realizationService.getRealization().subscribe(
      response => { this.realizations = response;
        console.log(this.realizations)
      
    });
  }

  putRealization(realization){
    this.modify= true;
    this.create=false;
    this.realizationToPut = realization;

  }

  createNew(){
    this.modify=false;
    this.create=true;
  }

  return(){
    this.modify=false;
    this.create=false;
  }

  changeVisibility(event){
    this.visibility =  event;
    console.log(this.visibility)
  }

  submitCreateRealization(){
    
    this.newRealization.title= this.createrealizationForm.value.title;
    console.log(this.newRealization)
    this.newRealization.image= this.createrealizationForm.value.image;
    this.newRealization.description= this.createrealizationForm.value.description;
    this.newRealization.link= this.createrealizationForm.value.link;
    this.newRealization.visibility= this.visibility;
    this.newRealization.user_id = 1;
    this.realizationService.postRealization(this.newRealization).subscribe(
      newRealization => {
       console.log(newRealization)
       }
    )
  }


deleteRealization(realization: Realization){
    this.realizationService.deleteRealization(realization.id).subscribe(
      (error) => {
        if (!error) {
          console.log("ok")
          location.reload();
        }
      }
    )
  }


  submitModifyRealization(){

    if (this.modifyrealizationForm.value.title != '') {
      this.realizationToPut.title = this.modifyrealizationForm.value.title
    };
    if (this.modifyrealizationForm.value.image) {
      this.realizationToPut.image = this.modifyrealizationForm.value.image;
    };
    if (this.modifyrealizationForm.value.description) {
      this.realizationToPut.description = this.modifyrealizationForm.value.description;
    };
    if (this.modifyrealizationForm.value.link) {
      this.realizationToPut.link = this.modifyrealizationForm.value.link;
    };
    if (this.modifyrealizationForm.value.visibility) {
      this.realizationToPut.visibility = this.modifyrealizationForm.value.visibility;
    };
    this.realizationToPut.user_id=1;
    this.realizationService.putRealization(this.realizationToPut).subscribe(
      realization => {
        console.log(realization)
        location.reload();
      });
  
    (err) => console.log(err)
  }
  


}
