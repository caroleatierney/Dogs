import React from 'react';
import './DeleteDog.css';

export default function DeleteDog({ dogId, onDelete, getDogs }) {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    const deleteDog = () => {
        onDelete(dogId)
        fetch(API_URL + `/${dogId}`, {
            method: 'DELETE',
        }).then(() => getDogs()) 
    }

    return (
        <div className="text-center">
            <button type="button" onClick={deleteDog} className="btn btn-success p-2 m-2">  Delete Dog  </button>
        </div>
    );
}