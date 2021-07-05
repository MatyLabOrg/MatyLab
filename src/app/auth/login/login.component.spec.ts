import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/environments/environment.prod';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let forms: FormsModule;
  let store: MockStore;
  let router: RouterModule;
  const initialState = { loggedIn: false };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ],
      declarations: [LoginComponent]
    });
    store = TestBed.inject(MockStore);
    forms = TestBed.inject(FormsModule);
    router = TestBed.inject(AppRoutingModule);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  
  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
