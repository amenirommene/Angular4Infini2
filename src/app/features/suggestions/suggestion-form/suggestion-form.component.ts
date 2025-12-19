import { Suggestion } from './../../../models/suggestion';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SuggestionService } from '../../../core/services/suggestion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {
constructor(private ac:ActivatedRoute,private fb:FormBuilder,private sugService:SuggestionService, private _router:Router) {}
myForm!: FormGroup;
categories: string[] = [
'Infrastructure et bâtiments',
'Technologie et services numériques',
'Restauration et cafétéria',
'Hygiène et environnement',
'Transport et mobilité',
'Activités et événements',
'Sécurité',
'Communication interne',
'Accessibilité',
'Autre'
];
id!:number;
ngOnInit(){
 /* this.myForm=this.fb.({
    title:["", [Validators.required,
      Validators.minLength(5),Validators.pattern("^[A-Z][a-zA-Z]*$")]]
  })*/
  this.myForm=new FormGroup({
    title:new FormControl("", [Validators.required,
      Validators.minLength(5),Validators.pattern("^[A-Z][a-zA-Z]*$")]),
    description : new FormControl("",[Validators.required,Validators.minLength(30)]),
    status:new FormControl("en attente"),
    category:new FormControl("",Validators.required),
    date:new FormControl(new Date())
  })
  this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    if (res.has('id')){
      this.sugService.getSuggestionById(this.id).subscribe(res=>{
        this.myForm.patchValue(res.suggestion)
      })
    }

  })
}
submit(){
  if (this.id){
this.sugService.updateSuggestion(this.id,this.myForm.value).subscribe(
    ()=>this._router.navigateByUrl("/suggestions"))
  }else{


  console.log(this.myForm.value);
  this.sugService.addSuggestion(this.myForm.value).subscribe(
    ()=>this._router.navigateByUrl("/suggestions"))
  }
}
}
