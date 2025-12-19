import { SuggestionService } from './../../../core/services/suggestion.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {

  id! : number;
  suggestion! : Suggestion;
constructor(private sugService:SuggestionService,private ac:ActivatedRoute,
  private _router:Router){
  console.log("constructor");
}

ngOnInit(){
//  this.id=this.ac.snapshot.params['id'];
/*this.ac.paramMap.subscribe({
  next : data=>{this.id=Number(data.get('id'));console.log(data)},
  error :  err=> console.log(err)});*/
  this.ac.params.subscribe({
  next : data=>{
    this.id=data['id'];
    console.log(data['id']);
    this.sugService.getSuggestionById(this.id).subscribe(
      res=>this.suggestion=res.suggestion
    );
    /*this._router.navigateByUrl("suggestions")*/},
  error :  err=> console.log(err)});
console.log(this.ac.snapshot);
console.log("ngOnInit")
}


}
