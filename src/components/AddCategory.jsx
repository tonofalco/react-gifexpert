import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputchange = ({ target }) => setInputValue(target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories =>[inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} className='mb-5'>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputchange}
                />
        </form>
    )
}
