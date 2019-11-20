import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  onLogIn()
  {
    this.authService.loggedIn();
  }
  onLogOut()
  {
    this.authService.loggedOut();
  }
  goToServer(id:number)
  {
    // programmatic navigation using queryParams and fragment
    this.router.navigate(['servers',id,'edit'],{queryParams:{allowedEdit:id}, fragment:'editing'})
  }
}
