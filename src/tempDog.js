import { useEffect, useState } from 'react'
import './DisplayDogs.css'

export default function DisplayDogs() {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'
    const [dogs, setDogs] = useState([])

    const [updateName, setUpdateName] = useState('')
    const [updateBredFor, setUpdateBredFor] = useState('')
    const [updateBreed, setUpdateBreed] = useState('')

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

    function updateDog(e, dogObject) {
        e.preventDefault()

        // console.log("e" + e)
        // console.log("dogObject" + dogObject.id)
        // console.log("id" + ${id})

        let updatedDogObject = {
            ...dogObject,
            dogName: updateName,
            bredFor: updateBredFor,
            breedGroup: updateBreed
        }

        // fetch(`${API_URL}/${id}`, {
        //     method: 'PUT',
        //     headers:
        //     {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(updatedDogObject),
        // }).then(() => getDogs()) 
        // set form fields to blank after update
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
            })
        }).then(() => getDogs())

        // set form fields to blank after update
    }

    return (
        <div className="DisplayDogs">

            <h1>List of 100 dogs because that is all I am paying for with MockAPI!</h1>
            <hr></hr>
            <form>
                <label>Add New Dog Name</label>
                <input className="inputNew" onChange={(e) => setNewName(e.target.value)}></input>
                <label>Add New Dog Bred For</label>
                <input className="inputNew" onChange={(e) => setNewBredFor(e.target.value)}></input>
                <label>Add New Dog Breed</label>
                <input className="inputNew" onChange={(e) => setNewBreed(e.target.value)}></input>
                <button onClick={(e) => addDog(e)} className="addDog">Submit</button>
            </form>
            <hr></hr>
            {dogs.map((dog, index) => (
                <div className="mapContainer" key={index}>

                    <div>
                        <h6>this will be a card with an image</h6>
                        <h1>Dog Name: {dogName}</h1>
                        <h3>Dog Breed: {bredFor}</h3>
                        <h3>Breed Group: {breedGroup}</h3>
                        <h1>Dog Id: {dog.id}</h1>

                        <button onClick={(e) => updateDog(dog.id)} className="updateDog">Update</button>
                        <button onClick={() => deleteDog(dog.id)} className="deleteDog">Delete</button>
                        <hr></hr>

                        <form>
                            <label>Update Dog Name</label>
                            <input onChange={(e) => setUpdateName(e.target.value)}></input>
                            <label>Update Dog Bred For</label>
                            <input onChange={(e) => setUpdateBredFor(e.target.value)}></input>
                            <label>Update Dog Breed</label>
                            <input onChange={(e) => setUpdateBreed(e.target.value)}></input>
                        </form>
                    </div>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}