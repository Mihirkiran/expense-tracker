import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../shared/expense.model';

@Component({
  selector: 'app-deleteexpense',
  templateUrl: './deleteexpense.component.html',
  styleUrls: ['./deleteexpense.component.css']
})
export class DeleteexpenseComponent implements OnInit {

  selectedExpense: string = '-1';
  expenses: Expense[] = [];
  constructor(private expensesservice: ExpensesService) { }

  ngOnInit(): void {
    this.expensesservice.getExpenses()
    .subscribe(
      (expenses) => {
        this.expenses = expenses;
      }
    );
  }

  deleteExpense() {
    this.expensesservice.deleteExpense(this.selectedExpense)
    .subscribe(
      () => {
        window.location.reload();
        console.log('Successfully Deleted');
      }
    );
  }

}
