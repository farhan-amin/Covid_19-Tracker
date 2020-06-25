import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPick.module.css';
import { fetchCountries } from '../../Api/indexapi';

export const CountryPick = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setCountries])


    return (
        <div >
            <h3 className={styles.Design}>Select Country</h3>
            <FormControl className={styles.formControl}>

                <NativeSelect defaultValue=" " onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
