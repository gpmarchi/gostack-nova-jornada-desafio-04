import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface CreateTransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      (balanceAccumulator, transaction) => {
        if (transaction.type === 'income') {
          // eslint-disable-next-line no-param-reassign
          balanceAccumulator.income += transaction.value;
        } else {
          // eslint-disable-next-line no-param-reassign
          balanceAccumulator.outcome += transaction.value;
        }

        // eslint-disable-next-line no-param-reassign
        balanceAccumulator.total =
          balanceAccumulator.income - balanceAccumulator.outcome;

        return balanceAccumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    return balance;
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
