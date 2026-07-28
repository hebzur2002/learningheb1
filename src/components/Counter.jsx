import { useState } from 'react'

function Counter() {
  // count = current value (shuru mein 0)
  // setCount = ye function hai jisse count ko change karte hain
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p>Count: {count}</p>
      {/* button click hone pe setCount chalega aur count +1 ho jayega */}
      <button onClick={() => setCount(count + 1)}>+ Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>- Decrease</button>
    </div>
  )
}

export default Counter
