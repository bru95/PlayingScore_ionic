import { AlertService } from './alert.service';
import { environment } from './../../environments/environment';
import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from  '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  	constructor(
    	private router: Router,
    	private httpClient: HttpClient, 
    	public alertService: AlertService,
  	) { }
  
	login(user: User) {
		this.httpClient.post(`${environment.url_api}/auth`, user)
			.subscribe(data => {
				let status = data['status'];
				let message = data['message'];
			
				if (status == 200) {
					this.alertService.toast("Login efetuado com sucesso!");
					localStorage.setItem("PS:USER_INFO", JSON.stringify(message));
					
					this.router.navigate(['/tabs']);
				}
				else
					this.alertService.alert("Erro", "Informações incorretas!");
			}, error => {
				console.log(error);
			});
	}

	logout() {
		localStorage.removeItem("PS:USER_INFO");
		this.router.navigate(['/login']);
	}
}


