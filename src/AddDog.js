import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AddDog({ getDogs }) {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    const [newName, setNewName] = useState('')
    const [newBredFor, setNewBredFor] = useState('')
    const [newBreed, setNewBreed] = useState('')
    const [newImage, setNewImage] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                imageSrc: newImage
            }),
        }).then(() => getDogs())

        // set form fields to blank after update
        setNewName('')
        setNewBredFor('')
        setNewBreed('')
        setNewImage('')
    }

    return (
        <>
        <div className="text-center">
            <Button variant="primary" onClick={handleShow} >
                Add a new dog!
            </Button>
        </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title>Add a new dog!</Modal.Title>
                        <h6>You can add an image from the internet like this:<br></br>
                            https://cdn2.thedogapi.com/images/B1-llgq4m.jpg
                        </h6>
                    </div>
                    
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <label>Add New Dog Name</label>
                        <input className="m-1" onChange={(e) => setNewName(e.target.value)} value={newName}></input>

                        <label>Add New Dog Bred For</label>
                        <input className="m-1" onChange={(e) => setNewBredFor(e.target.value)} value={newBredFor}></input>

                        <label>Add New Dog Breed</label>
                        <input className="m-1" onChange={(e) => setNewBreed(e.target.value)} value={newBreed}></input>
  
                        <label>Add New Dog Image</label>
                        <input className="m-1" onChange={(e) => setNewImage(e.target.value)} value={newImage}></input>

                        <div className="text-center">
                            <button type="button" onClick={addDog} className="m-1">Add Dog</button>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <div className="text-center">
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}