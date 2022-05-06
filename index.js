const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('show');
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('show');
    }
};

const Transaction = {
    all: [
        {
            description: 'Desenvolvimento de site',
            amount: 200000,
            date: '23/01/2022'
        },
        {
            description: 'Luz',
            amount: -50000,
            date: '15/01/2022'
        },
        {
            description: 'Internet',
            amount: -10000,
            date: '03/01/2022'
        },
        {
            description: 'App',
            amount: 200000,
            date: '01/01/2022'
        }
    ],
    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },
    remove(index) {
        Transaction.all.splice(index, 1);

        App.reload();
    },
    incomes() {
        let income = 0;
        Transaction.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })

        return income;
    },
    expenses() {
        let expense = 0;
        Transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })

        return expense;
    },
    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
};

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense';

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
            </td>
        `;

        return html;
    },
    updateBalance() {
        document.querySelector('#incomesEl').innerHTML = Utils.formatCurrency(Transaction.incomes());
        document.querySelector('#expensesEl').innerHTML = Utils.formatCurrency(Transaction.expenses());
        document.querySelector('#totalEl').innerHTML = Utils.formatCurrency(Transaction.total());
    },
    clearTransactions() {
        DOM.transactionsContainer.innerHTML = '';
    }
};

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? '-' : '';

        value = String(value).replace(/\D/g, '');
        value = Number(value) / 100;
        value = value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });

        return signal + value;
    },
    formatAmount(value) {
        value = Number(value) * 100;
        
        return value;
    },
    formatDate(date) {
        const splittedDate = date.split('-');
        
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;       
    }
        
};

const Form = {
    description: document.querySelector('#transaction-description'),
    amount: document.querySelector('#transaction-amount'),
    date: document.querySelector('#transaction-date'),

    getValues() {
        return {
            description: Form.description.value, 
            amount: Form.amount.value, 
            date: Form.date.value
        };
    },
    validateFields() {
        const { description, amount, date} = Form.getValues();

        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error('[ERRO] Por favor, preencha os campos novamente, sem espaços em branco!')
        }
    },
    formatData() {
        let { description, amount, date} = Form.getValues();

        amount = Utils.formatAmount(amount);
        date = Utils.formatDate(date);
        
        return {
            description,
            amount,
            date
        };
    },
    saveTransaction(transaction) {
        Transaction.add(transaction);
    },
    clearFields() {
        Form.description.value = '';
        Form.amount.value = '';
        Form.date.value = '';
    },
    submit(event) {
        event.preventDefault();
        try {
            Form.validateFields();

            const transaction = Form.formatData();

            Form.saveTransaction(transaction);

            Form.clearFields();

            Modal.close();
        } catch (error) {
            alert(error.message);
        }   


        event.preventDefault();

        Form.validateFields();
        Form.formatData();
    }
}

const App = {
    start() {
        Transaction.all.forEach((transaction, index) => {
            DOM.addTransaction(transaction, index);
        });

        DOM.updateBalance(); 
    },
    reload() {
        DOM.clearTransactions();

        App.start()
    }
};

App.start();

