import './ListCrypto.css'
interface Person {
  name: string
  image: string
  current_price: number
}
type Props = {
  data: []
}
export const ListCrypto = ({ data }: Props) => {
  return (
    <div className={'wrapper'}>
      {data &&
        data.map((coin: Person, index: number) => {
          return (
            <div
              className={'card'}
              key={index + 1}
            >
              <img
                src={coin.image}
                alt={coin.name}
              />
              <h4>{coin.name}</h4>
              <h5>${coin.current_price.toFixed(2)}</h5>
            </div>
          )
        })}
    </div>
  )
}

export default ListCrypto
