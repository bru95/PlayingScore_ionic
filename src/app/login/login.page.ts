import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  	userForm: User = new User();

	constructor(
    	private authService: AuthService,
    	private router: Router
  	) { }

  	ngOnInit() { }
  
   	login() {
    	this.authService.login(this.userForm);
  	}
}

