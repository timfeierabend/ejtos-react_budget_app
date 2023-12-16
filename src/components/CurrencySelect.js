import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);

    const DOLLAR = '\u0024';
    const POUND = '\u00A3';
    const EURO = '\u20AC';
    const RUPEE = '\u20B9';

    const handleChange = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };

    return (
        <div className='alert alert-success'>
            <span>Currency: </span>
            <select name="currencySelect" id="currencySelect" value={currency} onChange={(event) => handleChange(event.target.value)}>
                <option name="Dollar" value={DOLLAR}>{DOLLAR} Dollar</option>
                <option name="Pound" value={POUND}>{POUND} Pound</option>
                <option name="Euro" value={EURO}>{EURO} Euro</option>
                <option name="Rupee" value={RUPEE}>{RUPEE} Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelect;