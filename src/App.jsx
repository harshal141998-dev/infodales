import { useState } from 'react'
import CareerPage from './pages/career/Career'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <CareerPage />
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
