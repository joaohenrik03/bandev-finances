// Abrir e fechar modal
// Open and Close modal

const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('show')  
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('show')
    }
}

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
    }
]

const Transaction = {
    incomes() {
        // Somar entradas
    },
    expenses() {
        // Somar saídas
    },
    total() {
        
    }
}

const DOM = {
    innerHTMLTransaction() {
        const html = `
            <tr>
                <td class="description">Desenvolvimento de site</td>
                <td class="income">R$ 12.000,00</td>
                <td class="date">13/04/2020</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover transação">
                </td>
            </tr>
        `
    }
}