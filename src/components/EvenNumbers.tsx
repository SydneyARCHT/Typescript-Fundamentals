import React from 'react';
import { filterNumbers } from './FilterNumbers';


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EvenNumbers: React.FC = () => {
    const evenNumbers = filterNumbers(numbers);

    return (
        <div>
            <h2>Even Numbers</h2>
            <ul>
                {evenNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export default EvenNumbers;