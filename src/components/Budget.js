import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        let newBudget = parseInt(event.target.value);
        const total_expenses = expenses.reduce((total, item) => {
            return total + item.cost
        }, 0);

        if (newBudget > 20000) {
            alert(`The budget cannot be greater than ${currency}20000`);
            newBudget = 20000;
        }
        if (newBudget < total_expenses) {
            alert(`The budget cannot be less than total spending ${currency}` + total_expenses);
            newBudget = total_expenses;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input id='newBudget' type='number' step='10' value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;