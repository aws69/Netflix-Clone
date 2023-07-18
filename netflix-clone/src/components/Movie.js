import React from "react";
import ModelMovie from "./ModalMovie";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Movie(props) {
    const [show, setShow] = useState(false);
    const handelClose = () => setShow(false);
    const handelShow = () => setShow(true);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.Img} />
                <Card.Body>
                    <Card.Title>{props.data.Title}</Card.Title>
                    <Card.Text>
                        {props.data.overview}
                    </Card.Text>
                    <Button onClick={handelShow} variant="praimary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <ModelMovie modelData={props.Movie} handelClose={handelClose} handelShow={handelShow} show={show} />
        </div>
    );

}