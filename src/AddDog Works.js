import { useState } from 'react'

export default function AddDog({ getDogs }) {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    const [newName, setNewName] = useState('')
    const [newBredFor, setNewBredFor] = useState('')
    const [newBreed, setNewBreed] = useState('')

    function addDog(e) {
        e.preventDefault()
        fetch(API_URL, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dogName: newName,
                bredFor: newBredFor,
                breedGroup: newBreed,
            }),
        }).then(() => getDogs())

        // set form fields to blank after update
        setNewName('')
        setNewBredFor('')
        setNewBreed('')
    }

    return (
        <div className="text-center">
            <form>
                <div className="form-group text-center">
                    <label>Add New Dog Name</label>
                    <input type="text" className="form-control" onChange={(e) => setNewName(e.target.value)} value={newName}></input>
                    <label>Add New Dog Bred For</label>
                    <input type="text" className="form-control" onChange={(e) => setNewBredFor(e.target.value)} value={newBredFor}></input>
                    <label>Add New Dog Breed</label>
                    <input type="text" className="form-control" onChange={(e) => setNewBreed(e.target.value)} value={newBreed}></input>

                    <button type="button" onClick={addDog} className="btn btn-secondary">Add Dog</button>
                </div>
            </form>
        </div>
    )
}