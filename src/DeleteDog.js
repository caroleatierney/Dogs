import React from 'react';
export default function DeleteDog({ dogId, onDelete, getDogs }) {

    // API URL used to update MockAPI
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    // when the delete button is clicked, this function is executed, passing in 
    // the current dog id
    const deleteDog = () => {
        onDelete(dogId)
        fetch(API_URL + `/${dogId}`, {
            method: 'DELETE',
        }).then(() => getDogs()) 
    }

    // this is the delete button rendered fro the DisplayDog component's card
    return (
        <div className="text-center">
            <button type="button" onClick={deleteDog} className="btn btn-success p-2 m-2">  Delete Dog  </button>
        </div>
    );
}