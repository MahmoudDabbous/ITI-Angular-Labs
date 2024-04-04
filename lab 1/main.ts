interface IAccount {
  dateOfOpening: Date;
  addCustomer();
  removeCustomer();
}

class Account {
  private accountNumber: number;
  private balance: number;
  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  public debitAmount(amount: number) {
    this.balance -= amount;
  }
  public creditAmount(amount: number) {
    this.balance += amount;
  }
  public getBalance() {
    return this.balance;
  }
}

class CurrentAccount extends Account implements IAccount {
  private interestRate: number;
  dateOfOpening: Date = new Date();
  addCustomer() {}
  removeCustomer() {}
}

class SavingAccount extends Account implements IAccount {
  private minBalance;
  dateOfOpening: Date = new Date();
  addCustomer() {}
  removeCustomer() {}
}
