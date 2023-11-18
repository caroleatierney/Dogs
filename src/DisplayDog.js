import { useEffect, useState } from 'react'
import './DisplayDog.css'
import AddDog from './AddDog';
import UpdateDog from './UpdateDog';
import DeleteDog from './DeleteDog';

// I used "thedogapi" to get the data I wanted to work with. I than updated MockAPI
// with it so I could perform Full CRUD operations on the database and had some seed
// data to start with.
export default function DisplayDog() {
    // This is my url for Mock API
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    // This is where I declare the use state hook
    // use state sets the initial value
    // dogs is the actual value and setDogs is a function that we call to update the state value
    const [dogs, setDogs] = useState([])

    // the useEffect hook will run for every render
    // and thus refresh the dogs we see in the app from
    // what is actualy in our database
    useEffect(() => {
        getDogs()
    }, [])

    // this function goes out to the MockAPI, gets the data
    // converts it to json and sets the state with setDogs(data)
    function getDogs() {
        fetch(API_URL)
            .then((data) => data.json())
            .then((data) => {
                setDogs(data)
                // console.log(data)
            })
    }

    // ths passes the dog id to the update component
    // so it can update the correct dog
    const onUpdate = (dogId) => {
        UpdateDog(dogId);
    };

    // this passes the dog id to the delete component so it can delete the correct dog
    const onDelete = (dogId) => {
        DeleteDog(dogId);
    };

    // this will display the main cards with all of the dogs in it
    // when the update or delete buttons are clicked, the dogId variable is set
    // to the dog's id that is being processed. The getDogs variable is set to the 
    // actual getDogs function so it can be used in the update and delete components
    // to update the current dog's state. Add dogs also passes in this function as a
    // variable for the same reason.
    return (
        <div>
            <div>
                <h1 className="text-center">Dog names and breeds</h1>
                <AddDog getDogs={getDogs} />
            </div>
            <div className="displayDog text-center">
                {dogs.map((dog, index) => (

                    <div className="mapContainer d-inline-flex flex-row p-2 m-2 justify-content-around" key={index}>
                        <div className="card border border-primary" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={dog.imageSrc} alt="Dog Image"/>
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: '3rem' }}>Dog Name: {dog.dogName}</h5>
                                <h5 className="card-title" style={{ height: '4rem' }}>Dog Breed: {dog.bredFor}</h5>
                                <h5 className="card-title">Breed Group Test: {dog.breedGroup}</h5>
                                <p className="card-text" style={{ height: '6rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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