import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RadarAccessGuard } from './radar-access.guard';

// import { RadarAccessGuard } from './radar-access.guard';

// describe('RadarAccessGuard', () => {
//   let guard: RadarAccessGuard;
//   let store: MockStore;
//   const initialState = { loggedIn: false };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         RadarAccessGuard,
//         provideMockStore({ initialState }),
//       ],
//     });
//     store = TestBed.inject(MockStore);
//     guard = TestBed.inject(RadarAccessGuard);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });
// });

describe('RadarAccessGuard', () => {

  let guard: RadarAccessGuard;
  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RadarAccessGuard,
        provideMockStore({ initialState }),
      ]
    });

    store = TestBed.inject(MockStore);
    guard = TestBed.inject(RadarAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});