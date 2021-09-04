import React from 'react';
import {Link} from 'react-router-dom';
export function Landing(){
return (
    <div>
        <h1> Welcome pokemoiners</h1>
       <Link to= '/home'>
           <button>Go</button></Link> 
    </div>
)

}
export default Landing;