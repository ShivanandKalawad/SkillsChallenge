import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  fetch() {
    return this.http.get<any[]>(this.baseUrl + 'api/people');
  }
}
