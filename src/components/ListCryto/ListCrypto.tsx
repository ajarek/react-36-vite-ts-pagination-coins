import React from 'react'
interface Person {
  name: string
  image: string
}
const ListCrypto = () => {
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

export default ListCrypto