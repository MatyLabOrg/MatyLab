import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { from } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/environments/environment.prod';
import { AuthRoutingModule } from '../auth-routing.module';
import { AuthService } from '../auth.service';

import { RecoveryComponent } from './recovery.component';

describe('RecoveryComponent', () => {
  let component: RecoveryComponent;
  let fixture: ComponentFixture<RecoveryComponent>;

  let store: MockStore;
  let router: RouterModule;
  const initialState = { isLoading: false };

  class MockAuthServices {
    recovery = () => new Promise((resolve, reject) => {
      setTimeout(() =>resolve('Ok'),2000)
     });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoveryComponent],
      imports: [
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        provideMockStore({ initialState }),
        { providers: AuthService, useClass: MockAuthServices },
        AuthRoutingModule
      ]
    }).compileComponents();
    
      store = TestBed.inject(MockStore);
      router = TestBed.inject(AppRoutingModule);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
