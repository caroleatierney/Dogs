import {useEffect, useState} from 'react'
import './DisplayDogs.css'

export default function DisplayDogs() {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'
    const [dogs, setDogs] = useState([])

    const [updateName, setUpdateName] = useState('')
    const [updateBredFor, setUpdateBredFor] = useState('')
    const [updateBreedGroup, setUpdateBreedGroup] = useState('')

    const [newName, setNewName] = useState('')
    const [newBredFor, setNewBredFor] = useState('')
    const [newBreed, setNewBreed] = useState('')

    useEffect(() => {
        getDogs()
    }, [])

    function getDogs() {
        fetch(API_URL)
            .then((data) => data.json())
            .then((data) => {
                setDogs(data)
                // console.log(data)
        })
    }

    function deleteDog(id) {
        fetch(API_URL + `/${id}`, {
            method: 'DELETE', 
        }).then(() => getDogs())
    }

    function updateDog(id) {
        // e.preventDefault()
        let updatedDogObject = {
            dogName: updateName,
            bredFor: updateBredFor,
            breedGroup: updateBreedGroup
        }

        fetch(`${API_URL}/${id}`, {
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
        <div className="DisplayDogs">
 
            <h1>List of 100 dogs because that is all I am paying for with MockAPI!</h1>
            <h1>Need to try to filter out by breed type and</h1>
            <h1>then certain fields to save in db file and udpate</h1>
            <h1>all - stretch - especially photos</h1>
            <hr></hr>
            <form>
                <label>Add New Dog Name</label>
                <input className="inputNew" onChange={(e) => setNewName(e.target.value)} value={newName}></input>
                <label>Add New Dog Bred For</label>
                <input className="inputNew" onChange={(e) => setNewBredFor(e.target.value)} value={newBredFor}></input>
                <label>Add New Dog Breed</label>
                <input className="inputNew" onChange={(e) => setNewBreed(e.target.value)} value={newBreed}></input>
                <button onClick={(e) => addDog(e)} className="addDog">Submit</button>
            </form>
            <hr></hr>
                {dogs.map((dog, index) => (
                    <div className="mapContainer" key={index}>

                        <div>
                            <h6>this will be a card with an image</h6>
                            <h1>Dog Name: {dog.dogName}</h1>
                            <h3>Dog Breed: {dog.bredFor}</h3>
                            <h3>Breed Group: {dog.breedGroup}</h3>
                            <h1>Dog Id: {dog.id}</h1>

                            <button onClick={() => updateDog(dog.id)} className="updateDog">Update</button>
                            <button onClick={() => deleteDog(dog.id)} className="deleteDog">Delete</button>
                            <hr></hr>

                            <form>
                                <label>Update Dog Name</label>
                                <input onChange={(e) => setUpdateName(e.target.value)} value={updateName}></input>
                                <label>Update Dog Bred For</label>
                                <input onChange={(e) => setUpdateBredFor(e.target.value)} value={updateBredFor}></input>
                                <label>Update Dog Breed</label>
                                <input onChange={(e) => setUpdateBreedGroup(e.target.value)} value={updateBreedGroup}></input>
                            </form>
                        </div>
                        <hr></hr>
                    </div>
                ))}
        </div>
    )
}