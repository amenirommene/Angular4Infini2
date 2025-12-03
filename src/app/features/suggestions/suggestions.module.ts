import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionsComponent } from './list-suggestions/list-suggestions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionsComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuggestionsModule { }
