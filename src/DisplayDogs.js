import {useEffect, useState} from 'react'
import './DisplayDogs.css'

export default function DisplayDogs() {
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
            console.log(data)
        })
    }

    return (
        <div className="DisplayDogs">
            <h1>List of 100 dogs because that is all I am paying for with MockAPI!</h1>
            {/* {dogs.map((dog, index) => (
                <div className="mapContainer">
                    <h1>map.name</h1>
                </div>
            ))} */}
        </div>
    )

}
