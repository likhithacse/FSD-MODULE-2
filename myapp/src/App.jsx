import { useState } from 'react'
import Diwali from './Components/Diwali'

export default function App() {
  const [uName, setUname] = useState("Vijay")

  return (
    <div>
      <h1>Happy New Year {uName}!</h1>

      <input
        type="text"
        value={uName}
        onChange={(e) => setUname(e.target.value)}
      />

      <Diwali user={uName} />
    </div>
  )
}
