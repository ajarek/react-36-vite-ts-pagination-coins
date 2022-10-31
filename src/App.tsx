import { useEffect, useState } from 'react'
import { apiGet } from './api/apiGet'
import Header from './components/Header/Header'
import ListCrypto from './components/ListCrypto/ListCrypto'
import Pagination from './components/Pagination/Pagination'

function App() {
  const [coinsData, setCoinsData] = useState<[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const Data = apiGet({ url })
  useEffect(() => {
    setCoinsData(Data ? Data : [])
    console.log(coinsData)
  })
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts: any = coinsData.slice(firstPostIndex, lastPostIndex)
  return (
    <div className='App'>
      <Header />
      <ListCrypto data={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
