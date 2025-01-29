import React from 'react';

const Mutability = () => {
    return (
        <div>
            <p>Mutability vs Immutability</p>
            const numbers = [1, 2, 3, 4];
            numbers.push(5); // সরাসরি মূল অ্যারে পরিবর্তন
            console.log(numbers); // [1, 2, 3, 4, 5]

        </div>
    );
};

export default Mutability;