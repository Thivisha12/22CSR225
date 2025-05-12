import React, { useState } from 'react';
import axios from 'axios';

function Calculate() {
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  // Fetch numbers from the API
  const fetchNumbers = async () => {
    try {
      const response = await axios.get('http://localhost:9876/numbers/p'); // 'p' for primes
      const { numbers: fetchedNumbers, avg: average } = response.data;
      setNumbers(fetchedNumbers);
      setAvg(average);
    } catch (err) {
      console.error('Error fetching numbers:', err);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      {numbers.length > 0 && <h2>Average: {avg}</h2>}
    </div>
  );
}

export default Calculate;
