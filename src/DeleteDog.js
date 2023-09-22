import React from 'react';
// import '.DeleteDog.css';

export default function DeleteDog({dogId, onDelete}) {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    const deleteDog = () => {
        onDelete(dogId)
            fetch(API_URL + `/${dogId}`, {
            method: 'DELETE',
        }
    )}

    return (
        <div className="DeleteDogs">
            <h1>THIS IS THE DELETE DOGS COMPONENT</h1>
            <button onClick ={deleteDog} className="deleteDog">Delete</button>
        </div>
    );
}