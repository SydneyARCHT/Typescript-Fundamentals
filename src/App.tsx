import React from 'react';
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

const greeting: string = "Hello, TypeScript!";
const numberList: number[] = [5, 10, 15];

function calculateSum(a: number, b: number): number {
    return a + b;
}

const App: React.FC = () => {
    const sum = calculateSum(numberList[0], numberList[1]);

    return (
        <div>
            <h3>{greeting}</h3>
            <p>Number List: {numberList.join(', ')}</p>
            <p>Sum of first 2 numbers: {sum}</p>
            <ColorList /> 
            <EvenNumbers /> 
            <UserList /> 
        </div>
    );
};

export default App;