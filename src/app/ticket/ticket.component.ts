import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpFirebaseService, Ticket, City} from '../http-firebase.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  city: City[]
  ticket: Ticket[]

  constructor(private auth: AngularFireAuth, private router: Router, private httpfirebase: HttpFirebaseService) { }

  ngOnInit(): void {
    this.httpfirebase.fetchCity().subscribe(city=> this.city = Object.values(city))
    this.httpfirebase.fetchTicket().subscribe(ticket=> this.ticket = Object.values(ticket))

  }

  onLogout(){
    this.auth.signOut()
    this.router.navigate(['login'])
 }

 

}
