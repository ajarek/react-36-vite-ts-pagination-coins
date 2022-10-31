import { useState } from 'react'
import { apiGet } from './api/apiGet'

function App() {
  const [coinsData, setCoinsData] = useState([])
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const data = apiGet({ url })
  console.log(data)

  return (
    <div className='App'>
      <h1>Crypto Gallery</h1>
    </div>
  )
}

export default App
