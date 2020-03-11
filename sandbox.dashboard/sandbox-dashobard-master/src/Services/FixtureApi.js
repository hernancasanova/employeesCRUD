export default {
    fetchFunds: (userId) => {
        return {
            success: true,
            data: require('../Fixtures/funds.json'),
        }
    },
    doLogin: (username, password) => {
        return {
            success: true,
            data: require('../Fixtures/login.json'),
        };
    },
    fetchTransactions: (fundId) => {
        return {
            success: true,
            data: require('../Fixtures/transaction.json'),
        }
    },

    createTransaction: (transaction) => {
        return {
            success: true,
            data: require('../Fixtures/create-transaction.json'),
        }
    },
}
