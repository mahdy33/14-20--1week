// CCAddToList.jsx

import React from 'react';

const CCAddToList = ({ Grade, Name, handleInputChange, handleAddData }) => {
    return (
        <div className="CCAddToList">
            <label>
                Grade:
                <input type="text" name="Grade" value={Grade} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Name:
                <input type="text" name="Name" value={Name} onChange={handleInputChange} />
            </label>
            <br />
            <button onClick={handleAddData}>Add</button>
        </div>
    );
}

export default CCAddToList;
