import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expense } from '../shared/expense.model';

import { AddexpenseComponent } from './addexpense.component';

describe('AddexpenseComponent', () => {
  let component: AddexpenseComponent;
  let fixture: ComponentFixture<AddexpenseComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let newExp: Expense;
  const url = 'https://angular-expense-tracker-default-rtdb.firebaseio.com/expenses.json';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ AddexpenseComponent ]
    })
    .compileComponents();

    newExp = {id: '0', amount: '100', type: 'Insurance', description: 'Test'};

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AddexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add expense', () => {
    component.type = 'Insurance';
    component.amount = '100';
    component.description = 'Test';
    
    component.addExpense();

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newExp });
    req.event(expectedResponse);
  });
});
