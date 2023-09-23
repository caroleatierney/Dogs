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
        <div>
            <div>
                <h1>Dog names and breeds</h1>
                <h2>Stretch - Only display forms if button clicked</h2>
                <AddDog getDogs={getDogs} />
            </div>
            <div className="displayDog">
                {dogs.map((dog, index) => (

                    <div className="mapContainer" key={index}>
                        <div className="card border border-primary" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={dog.imageSrc} alt="Future dog image"/>
                            <div className="card-body">
                                <h5 className="card-title">Dog Name: {dog.dogName}</h5>
                                <h5 className="card-title">Dog Breed: {dog.bredFor}</h5>
                                <h5 className="card-title">Breed Group: {dog.breedGroup}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <UpdateDog dogId={dog.id} getDogs={getDogs} onUpdate={onUpdate} />
                                <DeleteDog dogId={dog.id} getDogs={getDogs} onDelete={onDelete} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}