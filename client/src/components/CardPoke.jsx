import React from 'react';


export default function CardPoke({name, image, types}) {
    return (
        <div>
            <img src={image} alt ="imagen no encontrada" width= "150px" height= "200px" />
            <h3>{name}</h3>
            <h5>{types}</h5>
        </div>
    )
}