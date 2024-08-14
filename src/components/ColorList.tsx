import React from 'react';

const colors: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

const ColorList: React.FC = () => {
    return (
        <div>
            <h2>Color List</h2>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    );
};

export default ColorList;