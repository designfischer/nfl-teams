import React from 'react'

function Search(props) {
    return (        
            <input 
                placeholder={props.placeholder}
                type="text"
                value={props.teamValue}
                onChange={props.teamOnChange}
            />       
    )
}

export default Search
