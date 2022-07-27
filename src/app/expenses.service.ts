import { EventEmitter, Injectable } from '@angular/core';
import { Expense } from './shared/expense.model';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

const url = 'https://angular-expense-tracker-default-rtdb.firebaseio.com/expenses.json';

const deleteUrl = 'https://angular-expense-tracker-default-rtdb.firebaseio.com/expenses/';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expenses: Expense[] = [];

  constructor(private http: HttpClient) {
    console.log(Math.random());
  }

  getExpenses() {
    return this.http.get<Expense[]>(url)
    .pipe(
      map(responseData => {
        const expenseArray = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            expenseArray.push({ ...responseData[key], id: key });
          }
        }
        return expenseArray;
    }));
  }

  addExpense(expense: Expense) {
    this.http.post<Expense[]>(url, expense)
    .subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }

  deleteExpense(id: string) {
    return this.http.delete(deleteUrl + id + '.json');
  }
}
