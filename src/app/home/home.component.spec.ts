import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { Expense } from '../shared/expense.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let expectedExp: Expense[];
  const url = 'https://angular-expense-tracker-default-rtdb.firebaseio.com/expenses.json';

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    expectedExp = [
      {id: '0', amount: '100', type: 'Insurance', description: 'Test'}
    ] as Expense[];

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch expenses', () => {
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedExp);
    expect(component.expenses).toEqual(expectedExp);
  });
});
