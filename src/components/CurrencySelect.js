import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const DOLLAR = '\u0024';
export const POUND = '\u00A3';
export const EURO = '\u20AC';
export const RUPEE = '\u20B9';

const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleChange = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };

    return (
        <div className='alert alert-secondary'>
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