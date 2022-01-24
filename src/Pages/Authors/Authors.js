import React, { useState, useEffect } from 'react';
import AddAuthor from '../AddAuthor/AddAuthor';
import Author from '../Author/Author';
import './Authors.css';

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [player, setPlayer] = useState([]);

    useEffect(()=>{
        fetch('./authors.json')
        .then(res => res.json())
        .then(data => setAuthors(data))
    },[])

    const handleAddToCart = (author) => {
        const newPlayer = [...player, author];
        setPlayer(newPlayer);
    }

    return (
        <>
        <AddAuthor
        player={player}
        ></AddAuthor>
        <div className="author-container">
            {
                authors.map(author => <Author
                key={author.id}
                author={author}
                handleAddToCart={handleAddToCart}
                ></Author>)
            }
            
            
        </div>
        </>
        
        
    );
};

export default Authors;