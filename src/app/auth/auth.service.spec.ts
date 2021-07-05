import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/usuario';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let store: MockStore;
  const initialState = { loading: false };
  const initialUserState = { ...new Usuario('', '', '') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    });

    store = TestBed.inject(MockStore);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
