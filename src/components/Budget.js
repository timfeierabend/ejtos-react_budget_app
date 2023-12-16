import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let newBudgetVal = parseInt(event.target.value);
        if (newBudgetVal > 20000) {
            alert(`The budget cannot be greater than ${currency}20000`);
            newBudgetVal = 20000;
        }
        if (newBudgetVal < totalExpenses) {
            alert(`The budget cannot be less than total spending ${currency}` + totalExpenses);
            newBudgetVal = totalExpenses;
        }

        setNewBudget(newBudgetVal);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudgetVal
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input id='newBudget' type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;