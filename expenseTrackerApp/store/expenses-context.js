import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-01-19')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-09-13')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 14.99,
        date: new Date('2023-11-19')
    },
    {
        id: 'e5',
        description: 'Groceries',
        amount: 15.99,
        date: new Date('2023-04-23')
    },
    {
        id: 'e6',
        description: 'dry fruits',
        amount: 89.29,
        date: new Date('2023-02-15')
    },
    {
        id: 'e7',
        description: 'bottle',
        amount: 20.99,
        date: new Date('2023-11-21')
    },
    {
        id: 'e8',
        description: 'makeup',
        amount: 44.99,
        date: new Date('2023-11-23')
    },
    {
        id: 'e9',
        description: 'Groceries',
        amount: 15.99,
        date: new Date('2023-04-23')
    }
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expenseReducer(state,action){
    switch (action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id},...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id);
            const updatableExpense  = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];     
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){

    const [expensesState,dispatch] = useReducer(expenseReducer,DUMMY_EXPENSES);

    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpense(id,expenseData){
        dispatch({type: 'UPDATE', payload:{id:id, data: expenseData}});
    }

    const value = {
        expenses : expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>
}
export default ExpensesContextProvider;
