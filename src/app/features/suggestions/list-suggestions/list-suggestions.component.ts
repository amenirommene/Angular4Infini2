import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-list-suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrl: './list-suggestions.component.css',
  //imports:[FormsModule] si mon composant est standalone çad n'appartient pas à un module
})
export class ListSuggestionsComponent {

constructor(private sugService:SuggestionService){}
suggestions: Suggestion[] = [];
titre : string = "Liste des suggestionssss";
placeHolderText : string = "Rechercher une suggestions";
Masfavoris : Suggestion[] = [];
ngOnInit(){ //méthode hook appelée après la création du composant
//this.suggestions=this.sugService.getSuggestionsList();
this.sugService.getAllSuggestions().subscribe(
  {
  next:res=>this.suggestions=res,
  error:err=>console.log(err),
  complete:()=>console.log("suggestions chargées")});
}
addToFavoris(s:Suggestion){
  this.Masfavoris.push(s);
  console.log(this.Masfavoris)
}
serachT="";
like(s:Suggestion){
  if (s.nbLikes != null){
  s.nbLikes = s.nbLikes + 1;
  } else{
    s.nbLikes=0;
  }
}

}
