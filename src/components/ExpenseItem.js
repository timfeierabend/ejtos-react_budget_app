import React, { useContext } from 'react';
import { IoIosAddCircle, IoIosRemoveCircle, IoIosCloseCircle } from "react-icons/io";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><IoIosAddCircle size="1.5em" color='green' onClick={(event) => increaseAllocation(props.name)}></IoIosAddCircle></td>
            <td><IoIosRemoveCircle size="1.5em" color='red' onClick={(event) => decreaseAllocation(props.name)}></IoIosRemoveCircle></td>
            <td><IoIosCloseCircle size='1.5em' onClick={handleDeleteExpense}></IoIosCloseCircle></td>
        </tr>
    );
};

export default ExpenseItem;