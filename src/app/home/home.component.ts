import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../shared/expense.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expenses: Expense[] = [];
  totalExpense: number = 0;
  
  constructor(private expensesservice: ExpensesService) {
  }

  ngOnInit(): void {
    this.expensesservice.getExpenses()
    .subscribe(
      (expenses) => {
        for(let expense of expenses) {
          this.totalExpense += parseInt(expense.amount);
        }
        this.expenses = expenses;
      }
    );
  }

}
