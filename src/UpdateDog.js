import { useState } from 'react'
import './UpdateDog.css';

export default function UpdateDog({ getDogs, dogId }) {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    const [updateName, setUpdateName] = useState('')
    const [updateBredFor, setUpdateBredFor] = useState('')
    const [updateBreedGroup, setUpdateBreedGroup] = useState('')

    const updateDog = (e,) =>  {
        e.preventDefault()
        let updatedDogObject = {
            dogName: updateName,
            bredFor: updateBredFor,
            breedGroup: updateBreedGroup
        }
        fetch(API_URL + `/${dogId}`, {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDogObject),
        }).then(() => getDogs())

        // set form fields to blank after update
        setUpdateName('')
        setUpdateBredFor('')
        setUpdateBreedGroup('')
    }

    return (
        <div className="updateDog">
            <form>
                <div className="form-group text-center">

                    <label>Update Dog Name</label>
                    <input type="text" className="form-control" onChange={(e) => setUpdateName(e.target.value)} value={updateName}></input>

                    <label>Update Dog Bred For</label>
                        <input type="text" className="form-control" onChange={(e) => setUpdateBredFor(e.target.value)} value={updateBredFor}></input>

                    <label>Update Dog Breed</label>
                        <input type="text" className="form-control" onChange={(e) => setUpdateBreedGroup(e.target.value)} value={updateBreedGroup}></input>

                    <button type="button" onClick={updateDog} className="btn btn-secondary p-2 m-2">Update Dog</button>

                </div>
            </form>
        </div>
    )
}