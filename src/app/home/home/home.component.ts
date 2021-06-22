import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/app.reducers';
import { AuthService } from 'src/app/auth/auth.service';
import * as uiActions from '../../core/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>, private authService: AuthService) { }
  
  uiSubscription$!: Subscription;

  ngOnInit(): void {
    this.uiSubscription$ = this.store.select('ui').subscribe();
    this.store.dispatch(uiActions.isLoading());
  }

  ngonDestroy(): void {
    this.store.dispatch(uiActions.stopLoading());
    this.uiSubscription$?.unsubscribe();
  }

  logout(): void {
    this.authService.logOut();
  }
  
}
