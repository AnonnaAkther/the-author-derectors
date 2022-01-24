import React, { useState, useEffect } from 'react';
import Author from '../Author/Author';
import './Authors.css';

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(()=>{
        fetch('./authors.json')
        .then(res => res.json())
        .then(data => setAuthors(data))
    },[])
    return (
        <div className="author-container">
            {
                authors.map(author => <Author
                key={author.id}
                author={author}
                ></Author>)
            }
        </div>
    );
};

export default Authors;