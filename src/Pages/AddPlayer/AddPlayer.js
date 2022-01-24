import React from 'react';

const AddPlayer = (props) => {
    const {player} = props;
    let total = 0;

    for(const author of player){
        total = total + author.Salary;
    }

    return (
        <div className="mb-5 text-primary">
        <h2>Players Added: {props.player.length}</h2>
                <h2>Name: {player.Name}</h2>
                <h2>Total Cost: {total}</h2>
            </div>
    );
};

export default AddPlayer;