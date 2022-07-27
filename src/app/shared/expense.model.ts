export class Expense {
    id: string = '0';
    amount: number;
    type: string;
    description: string;
    constructor(amount: number, type: string, description: string) {
        this.amount = amount;
        this.type = type;
        this.description = description;
    }
}