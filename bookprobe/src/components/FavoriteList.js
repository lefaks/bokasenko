import React from 'react';
import FaBookItem from './FaBookItem';

const FavoriteList = ({ favorites , onBookSelect , onDelete }) => {   

    const listaFavorita = favorites.map((favorite,index) => 
    { return <FaBookItem key={favorite.id} onBookSelect={onBookSelect} favorite={favorite} onDelete={onDelete} index={index}/> });

    return <div>{listaFavorita}</div>
};

export default FavoriteList; 

 
