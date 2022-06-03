import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpFirebaseService, User} from '../http-firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User[]


  constructor(private auth: AngularFireAuth, private router: Router, private httpfirebase: HttpFirebaseService) { }

  ngOnInit(): void {
    this.httpfirebase.fetchUser().subscribe(user=> this.user = Object.values(user))
  }

  onLogout(){
     this.auth.signOut()
     this.router.navigate(['login'])
  }

}
