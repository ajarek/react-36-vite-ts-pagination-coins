import './Pagination.css'
type Props = {
  totalPosts: number
  postsPerPage: number
  setCurrentPage: (c: number) => void
  currentPage: number
}

export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: Props) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className={'pagination'}>
      {pages.map((page: number, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? 'active' : ''}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
