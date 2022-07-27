import { Component } from '@angular/core';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'expense-tracker';
  
  constructor(private expensesservice: ExpensesService) {
  }

  ngOnInit(): void {
  }
}
