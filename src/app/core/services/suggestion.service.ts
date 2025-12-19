import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  //Décorateur Injectable pour marquer une classe comme disponible pour l'injection de dépendances
  providedIn: 'root' //une seule intance pour tout le monde
})
export class SuggestionService {
constructor(private _http:HttpClient) { }
 suggestionList: Suggestion[] = [
{
id: 1,
title: 'Organiser une journée team building',
description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
category: 'Événements',
date: new Date('2025-01-20'),
status: 'acceptee'
},
{
id: 2,
title: 'Améliorer le système de réservation',
description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
category: 'Technologie',
date: new Date('2025-01-15'),
status: 'refusee'
},
{
id: 3,
title: 'Créer un système de récompenses',
description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
category: 'Ressources Humaines',
date: new Date('2025-01-25'),
status: 'refusee'
},
{
id: 4,
title: 'Moderniser l\'interface utilisateur',
description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
category: 'Technologie',
date: new Date('2025-01-30'),
status: 'en_attente',
nbLikes : 2
},
{
id: 5,
title: 'Formation à la sécurité informatique',
description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
category: 'Formation',
date: new Date('2025-02-05'),
status:'acceptee',
nbLikes : 3
}];

apiUrl:string="http://localhost:3000/suggestions";
  getSuggestionsList(): Suggestion[] {
    return this.suggestionList;
  }

  getAllSuggestions():Observable<Suggestion[]>{
    return this._http.get<Suggestion[]>(this.apiUrl);
  }

  getSuggestionById(id:number):Observable<any>{
    return this._http.get<any>(this.apiUrl+"/"+id);
  }

  addSuggestion(suggestion:Suggestion):Observable<Suggestion>{
    return this._http.post<Suggestion>(this.apiUrl,suggestion);
  }
  updateSuggestion(id:number,suggestion:Suggestion):Observable<Suggestion>{
    return this._http.put<Suggestion>(this.apiUrl+"/"+id,suggestion);
  }
  deleteSuggestion(id:number):Observable<Suggestion>{
    return this._http.delete<Suggestion>(this.apiUrl+"/"+id);
  }



}
