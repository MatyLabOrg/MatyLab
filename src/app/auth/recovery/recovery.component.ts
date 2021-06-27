import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import Swal from 'sweetalert2';

import { AuthService } from '../auth.service';
import * as uiActions from '../../core/store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>,private router: Router, private authService: AuthService) { }

  uiSubscription$: Subscription;
  email: string = "";

  ngOnInit(): void {
    this.uiSubscription$ = this.store.select('ui').subscribe();
  }

  ngOnDestroy(): void {
    this.uiSubscription$?.unsubscribe();
  }

  recovery(): void {
    if (this.email.length <= 0) { return; }

    else {
      this.store.dispatch(uiActions.isLoading());
      this.authService.recoveryPassword(this.email).subscribe({
        next: (datos) => {
          Swal.fire({
            title: 'Mensaje enviado',
            icon: 'success',
            text: 'Por favor consulta tu bandeja, el mensaje se ha enviado'
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Oops',
            icon: 'error',
            text: err.message
          });
        },
        complete: () => {
          Swal.close();
          this.store.dispatch(uiActions.stopLoading());
          this.router.navigate(['/']);
        }
      })
    }
  }
}