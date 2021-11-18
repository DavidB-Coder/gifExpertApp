import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs( category );
    
    return (
        <>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <h3>{category}</h3>                        
            <div className="card-grid">
                {data.map((img) => {
                    return(
                        <GifGridItem 
                            key={img.id}                         
                            {...img}
                        />
                    )
                })}
            </div>            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}