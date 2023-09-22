import {useEffect, useState} from 'react'
// import './DisplayDogs.css'
import DeleteDog from './DeleteDog';
import AddDog from './AddDog';
export default function DisplayDogs() {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'
    const [dogs, setDogs] = useState([])

    const [updateName, setUpdateName] = useState('')
    const [updateBredFor, setUpdateBredFor] = useState('')
    const [updateBreedGroup, setUpdateBreedGroup] = useState('')

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

    const onAdd = () => {
        AddDog()
    }

    const onDelete = (dogId) => {
        DeleteDog(dogId);
    };

    return (
        <div className="DisplayDogs">
 
            <h1>List of 100 dogs because that is all I am paying for with MockAPI!</h1>
            <hr></hr>
                {dogs.map((dog, index) => (
                    <div className="mapContainer" key={index}>

                        <DeleteDog dogId={dog.id} onDelete={onDelete} />
                        <AddDog onAdd={onAdd} />

                        <div>
                            <h6>this will be a card with an image</h6>
                            <h1>Dog Name: {dog.dogName}</h1>
                            <h3>Dog Breed: {dog.bredFor}</h3>
                            <h3>Breed Group: {dog.breedGroup}</h3>
                            <h1>Dog Id: {dog.id}</h1>

                            <button onClick={() => updateDog(dog.id)} className="updateDog">Update</button>
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