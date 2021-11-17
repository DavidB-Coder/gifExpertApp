import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setCategory( ps => [inputValue,...ps] );        
            setInputValue('');
        }
    }


    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={ inputValue }                
                    onChange={(e) => {setInputValue(e.target.value)}}
                    placeholder={'Ingresa una nueva categoría'}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategory : PropTypes.func.isRequired
};
