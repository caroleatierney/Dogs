import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function UpdateDog({ getDogs, dogId }) {
    const API_URL = 'https://650c4ed847af3fd22f67714a.mockapi.io/Dogs_APP/dogs'

    const [updateName, setUpdateName] = useState('')
    const [updateBredFor, setUpdateBredFor] = useState('')
    const [updateBreedGroup, setUpdateBreedGroup] = useState('')
    const [updateImage, setUpdateImage] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateDog = (e,) =>  {
        e.preventDefault()
        let updatedDogObject = {
            dogName: updateName,
            bredFor: updateBredFor,
            breedGroup: updateBreedGroup,
            imageSrc: updateImage
                }
        fetch(API_URL + `/${dogId}`, {
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
        setUpdateImage('')
    }

    return (
        <>

            <div className="text-center">
                <Button variant="info" onClick={handleShow} >
                    Update a dog!
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title>Update a dog!</Modal.Title>
                        <h6>You can change the image using an http link like this:<br></br>
                            https://cdn2.thedogapi.com/images/B1-llgq4m.jpg
                        </h6>
                    </div>
                    
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <label>Add New Dog Name</label>
                        <input className="m-1" onChange={(e) => setUpdateName(e.target.value)} value={updateName}></input>

                        <label>Add New Dog Bred For</label>
                        <input className="m-1" onChange={(e) => setUpdateBredFor(e.target.value)} value={updateBredFor}></input>

                        <label>Add New Dog Breed</label>
                        <input className="m-1" onChange={(e) => setUpdateBreedGroup(e.target.value)} value={updateBreedGroup}></input>
  
                        <label>Add New Dog Image</label>
                        <input className="m-1" onChange={(e) => setUpdateImage(e.target.value)} value={updateImage}></input>

                        <div className="text-center">
                            <button type="button" onClick={updateDog} className="btn btn-secondary p-2 m-2">Update Dog</button>
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