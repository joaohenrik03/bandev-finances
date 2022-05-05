// Abrir e fechar modal
// Open and Close modal

const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('show');
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('show');
    }
};

const transactions = [
    {
        id: 1,
        description: 'Desenvolvimento de site',
        amount: 200000,
        date: '23/01/2022'
    },
    {
        id: 2,
        description: 'Luz',
        amount: -50000,
        date: '15/01/2022'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -10000,
        date: '03/01/2022'
    },
    {
        id: 4,
        description: 'App',
        amount: 200000,
        date: '01/01/2022'
    }
];

const Transaction = {
    incomes() {
        // Somar entradas
    },
    expenses() {
        // Somar saídas
    },
    total() {
        
    }
};

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) {
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `;

        return html;
    }
};

transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
});
