import React from "react";
import Movie from "./Movie";

export default function MoveList({data}) {
    return (
        <div>
            {data.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};