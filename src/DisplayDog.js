import { useEffect, useState } from 'react'
import './DisplayDog.css'
import AddDog from './AddDog';
import UpdateDog from './UpdateDog';
import DeleteDog from './DeleteDog';

export default function DisplayDog() {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'
    const [dogs, setDogs] = useState([])

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

    const onUpdate = (dogId) => {
        UpdateDog(dogId);
    };

    const onDelete = (dogId) => {
        DeleteDog(dogId);
    };

    return (
        <div className="displayDog">

            <h1>Dog names and breeds</h1>
            <AddDog getDogs={getDogs} />
            {dogs.map((dog, index) => (
                <div className="mapContainer" key={index}>
                    <UpdateDog dogId={dog.id} getDogs={getDogs} onUpdate={onUpdate} />
                    <DeleteDog dogId={dog.id} getDogs={getDogs} onDelete={onDelete} />
                    <div>
                        <h6>this will be a card with an image</h6>
                        <h1>Dog Name: {dog.dogName}</h1>
                        <h3>Dog Breed: {dog.bredFor}</h3>
                        <h3>Breed Group: {dog.breedGroup}</h3>
                        <h1>Dog Id: {dog.id}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}