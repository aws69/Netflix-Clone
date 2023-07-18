import React , {useState, useEffect} from "react";
import {Card , Button} from "react-bootstrap";

export default function FavList(){
    const [favMovie,setFavMonie]= useState([]);
    async function handelFavMovie() {
        const url = `${process.env.REACT_APP_SERVER_URL}/favMovies`;
        let response = await fetch(url);
        let reciveData = await response.json();
        setFavMonie(reciveData);
    }
    async function handelDelete(id){
        const url = `${process.env.REACT_APP_SERVER_URL}/deleteFavMovie/${id}`;
        let response = await fetch(url,{
            method: 'DELETE',
            headers: {
                "content-type": " application/json"
            },

        });
        if (response.status === 204){
            alert("deleted successfuly")
        }
        handelFavMovie();
    }
    useEffect(()=>{
        handelFavMovie();
    },[]);
    return (
        <div>
        {favMovie.map((movie, id) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Button variant="primary" onClick={()=> handleDelete(movie.id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}