import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autenticacion: AutenticacionService, private router: Router) { }

  error = false
  urlRedireccion = ""

  name = "AD"
  password = "123456"

  login() {
    if (this.name == "" || this.password == "") {
      this.error = true
    } else {
      this.error = false
      this.autenticacion.login()
      this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder
      this.autenticacion.urlUsuarioIntentaAcceder = ""
      this.router.navigate([this.urlRedireccion])
    }
  }
}
