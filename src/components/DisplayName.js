import React from 'react'

function DisplayName(props){
   console.log("fffff",props.username);
    
    return (
        <div >
            <input type="text" name="username"/>
           <input type="submit" />
        </div>
    )
}
export default DisplayName