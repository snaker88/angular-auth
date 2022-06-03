import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs';


export interface User{
  name: string
  surname: string
  date?: string 
  id?: string
}

export interface City{
  name: string
  userId?: string
  id?: string
}

export interface Ticket {
  title: string
  id?: string
  cityID?: string
  userID?: string
}

@Injectable({
  providedIn: 'root'
})

export class HttpFirebaseService {
  userUrl = 'https://angular-spa-f9725-default-rtdb.firebaseio.com/users.json'
  sityUrl = 'https://angular-spa-f9725-default-rtdb.firebaseio.com/sity.json'
  ticketUrl = 'https://angular-spa-f9725-default-rtdb.firebaseio.com/tickets.json'

  user: User[] = []

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
    .pipe(delay(100))
  }
  fetchCity(): Observable<City[]> {
    return this.http.get<City[]>(this.sityUrl)
    .pipe(delay(100))
  }
  fetchTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketUrl)
    .pipe(delay(100))
  }

  addUser(commetn: User[]): Observable<User> {
    return this.http.post<User>(this.userUrl, commetn)
  }
  addSity(commetn: City[]): Observable<City> {
    return this.http.post<City>(this.sityUrl, commetn)
  }
  addTicket(commetn: Ticket[]): Observable<Ticket> {
    return this.http.post<Ticket>(this.ticketUrl, commetn)
  }

}
