import React, { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";


export default function ModalMovie({ handleShow, handleClose, show, modalData, commentHandler }) {
    const [comment, setComment] = useState("");
    const commentRef = useRef();
    function handelSubmit(e) {
        e.preventDefult();
        const userComment = commentRef.current.value;
        const newData = { ...modalData, userComment };
        setComment(userComment);
        commentHandler(newData, newData.id);
    }
    console.log(comment);
    async function handelAddFav(e) {
        e.preventDefult();
        let url = `${process.env.REACT_APP_SERVER_URL}/addFavMovie`;
        let data = {
            title: modalData.title,
            year: modalData.release_data,
            Image: modalData.Image,
            overview: modalData.overview,
            comment: modalData.comment
        };
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": " application/json"
            },
            body: JSON.stringify(data)
        })
        let recivedData = await response.json();
        console.log('recivedData', recivedData);
        if (response.status === 201) {
            alert("added successfuly")
        };
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{modalData.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        style={{ width: "100%" }}
                        src={modalData.image}
                        alt={modalData.title}
                    />
                    <p>{modalData.instructions}</p>
                    <Form onSubmit={(e) => handelSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                ref={commentRef}
                                type="text"
                                placeholder="Add new Comment"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="primary" onClick={(e) => handelAddFav(e)}>
                            Add to Fav
                        </Button>
                    </Form>
                    {modalData.comment ? modalData.comment : "No Comment Added"}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}