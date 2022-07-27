import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../shared/expense.model';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  
  amount: number = 0;
  type: string = '';
  description: string = '';

  constructor(private expensesservice: ExpensesService) {}

  ngOnInit(): void {}

  addExpense() {
    this.expensesservice.addExpense(new Expense(this.amount, this.type, this.description));
  }

}
