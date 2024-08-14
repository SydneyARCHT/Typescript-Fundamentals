import React from 'react';
import { User } from './user';

const users: User[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];

const UserList: React.FC = () => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - Age: {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;