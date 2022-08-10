export class Expense {
    id: string = '0';
    amount: string;
    type: string;
    description: string;
    constructor(amount: string, type: string, description: string) {
        this.amount = amount;
        this.type = type;
        this.description = description;
    }
}