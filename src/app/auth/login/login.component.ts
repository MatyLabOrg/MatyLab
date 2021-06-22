import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../auth.service';
import * as uiActions from '../../core/store/actions';
import * as authActions from '../store/actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<AppState>,
    private authServices: AuthService,
    private frm: FormBuilder,
    private router: Router,
  ) { }


  loginForm: FormGroup;
  uiSubscription$: Subscription;
  authSubscription$: Subscription;

  ngOnInit(): void {

    this.loginForm = this.frm.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    });

    this.uiSubscription$ = this.store.select('ui').subscribe();
    this.authSubscription$ = this.store.select('auth').subscribe();
  }

  ngOnDestroy(): void {
    this.uiSubscription$?.unsubscribe();
    this.authSubscription$?.unsubscribe();
  }

  login() {

    console.log(this.loginForm.value);
    if (this.loginForm.invalid) { return true; }

    this.store.dispatch(uiActions.isLoading())
    const { email, password } = this.loginForm.value;
    this.authServices.loginUsuario(email, password).subscribe({
      next: (usuario) => {
        Swal.fire({
          title: 'Login Exitoso!',
          icon: 'success',
          text: 'Bienvenido'
        });
        this.router.navigate(['/']);

        //TODO: Cambiar por el usuario almacenado en BD Firestore
        const usuarioApp = new Usuario(usuario.user.uid, usuario.user.displayName, email);
        this.store.dispatch(authActions.setUser({ user: usuarioApp }))
        
        //TODO: Cargar proyectos del usuario
      },
      error: (err) => {
        Swal.fire({
          title: 'Oops',
          icon: 'error',
          text: err.message
        });
      },
      complete:() => {
        Swal.close();
        this.store.dispatch(uiActions.stopLoading());
      }
    });

    return false;
  }
}