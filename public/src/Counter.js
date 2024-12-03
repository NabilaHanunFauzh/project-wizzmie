import React, { useState } from 'react';
function Counter() {
 const [count, setCount] = useState(0);

 return (
    <div>
        <p>Anda sudah klik sebanyak {count} kali</p>
        <button onClick={() => setCount(count + 1)}>
            Klik saya
        </button>
    </div>
);
}
export default Counter;