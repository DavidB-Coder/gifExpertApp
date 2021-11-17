import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['perfect loops']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr/>            
            <ul>
                {
                    categories.map((category) => {
                        return (
                            <GifGrid 
                                category={category}
                                key={category}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}

export default GifExpertApp
