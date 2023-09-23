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
        <div className="addDog text-center">

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#dogModal">
                Add a new dog!
            </button>


            <div className="modal" id="dogModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <label>Add New Dog Name</label>
                                <input className="inputNew" onChange={(e) => setNewName(e.target.value)} value={newName}></input>
                                <label>Add New Dog Bred For</label>
                                <input className="inputNew" onChange={(e) => setNewBredFor(e.target.value)} value={newBredFor}></input>
                                <label>Add New Dog Breed</label>
                                <input className="inputNew" onChange={(e) => setNewBreed(e.target.value)} value={newBreed}></input>

                                <button onClick={addDog} className="addDog">Add Dog</button>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}