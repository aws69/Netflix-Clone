import React from "react";
import MoveList from "./MovieList";
import { useEffect, useState } from "react";

export default function Home() {
    const [data ,setData]= useState([]);

    async function gettrindingMovies() {
        let url = process.env.REACT_MOVIES_APP_URL;
        const response = await fetch(`${url}/trinding`);
        const trindingMovies = await response.json();
        setData(trindingMovies);
    };

    useEffect(() => {
        gettrindingMovies();
    }, []);

    return <MoveList data={data} /> ;

}