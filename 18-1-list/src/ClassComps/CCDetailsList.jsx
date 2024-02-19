import React from 'react';

const CCDetailsList = ({ dataList, handleRemoveData, handleEditClick }) => {
    return (
        <div className="CCDetailsList">
            <ul>
                {dataList.map((data, index) => (
                    <li key={index}>
                        {`Grade: ${data.Grade}, Name: ${data.Name}`}
                        <button onClick={() => handleEditClick(index)}>Edit</button>
                        <button onClick={() => handleRemoveData(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CCDetailsList;
