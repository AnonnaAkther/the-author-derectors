import React, { useState, useEffect } from 'react';
import AddPlayer from '../AddPlayer/AddPlayer';
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
        <AddPlayer
        player={player}
        ></AddPlayer>
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