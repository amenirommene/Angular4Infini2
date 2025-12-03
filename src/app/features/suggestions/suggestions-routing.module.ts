import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionsComponent } from './list-suggestions/list-suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', component: SuggestionsComponent,children:[
    { path: 'add', component: SuggestionFormComponent},
    { path: '', component: ListSuggestionsComponent,children:[
      // { path: ':id', component: SuggestionDetailsComponent}
    ]},
    { path: ':id', component: SuggestionDetailsComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
