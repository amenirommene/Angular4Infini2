import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionsComponent } from './list-suggestions/list-suggestions.component';
import { FormsModule } from '@angular/forms';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionsComponent,
    SuggestionDetailsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule
  ]
})
export class SuggestionsModule { }
