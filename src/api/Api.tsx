import  { useEffect, useState } from 'react'
import axios from 'axios'
interface Person {
  name: string
  image: string
}
export const Api = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      setData(response.data)
    }
    fetchMyAPI()
  }, [])
  console.log(data)
  return (
    <div className={'wrapper'}>
      {data &&
        data.map((coin: Person, index: number) => {
          console.log(typeof coin)

          return (
            <div
              className={'card'}
              key={index + 1}
            >
              <p>{coin.name}</p>
              <img
                src={coin.image}
                alt='{coin.name}'
                style={{ width: '10%' }}
              />
            </div>
          )
        })}
    </div>
  )
}

export default Api
