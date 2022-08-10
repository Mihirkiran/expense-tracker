import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../shared/expense.model';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  
  amount: string = '';
  type: string = '';
  description: string = '';

  constructor(private expensesservice: ExpensesService) {}

  ngOnInit(): void {}

  addExpense() {
    if(this.amount != '' && this.type != '' && !Number.isNaN(Number(this.amount))) {
      console.log('xyz');
      this.expensesservice.addExpense(new Expense(this.amount, this.type, this.description));
    }
  }

}
