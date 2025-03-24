import { useState } from "react"
import { Link } from "react-router"
import formatNumber from "../utils/formatNumber"

export default function Table({ header, data }) {
  const itemPerPage = 10
  const showPage = 5
  const totalPage = data.length / itemPerPage
  const [currentPage, setCurrentPage] = useState(1)

  const start = (currentPage - 1) * itemPerPage
  const end = start + itemPerPage
  const dataFilter = data.slice(start, end)

  const PrevButton = () => {
    if(currentPage > 1) return (
      <>
        <div className="item" onClick={() => selectPage(currentPage - 1)}>Prev</div>
      </>
    )
  }

  const NextButton = () => {
    if(currentPage < totalPage) return (
      <>
        <div className="item" onClick={() => selectPage(currentPage + 1)}>Next</div>
      </>
    )
  }

  const PageButton = ({ showPage }) => {
    const page = []
    let pageStart = 1
    let pageEnd = showPage

    if (currentPage > showPage) {
      pageStart = currentPage - (showPage - 1)
      pageEnd = currentPage
    }

    for (let i = pageStart; i <= pageEnd; i++) {
      page.push(
        <div
          key={i}
          onClick={() => selectPage(i)}
          className={currentPage === i ? 'item active' : 'item'}
        >{i}</div>
      )
    }

    return page
  }

  const selectPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div>
        <div className="datatable">
          <table>
            <thead>
              <tr>
                {header.map((item, index) => <td key={index}>{item.label}</td>)}
              </tr>
            </thead>
            <tbody>
              {dataFilter.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img className="country-logo" src={item.flag} alt="" />
                  </td>
                  <td width="25%">
                    <Link to={`/${item.code}`}>
                      {item.name}
                    </Link>
                  </td>
                  <td>{formatNumber(item.population)}</td>
                  <td>{formatNumber(item.area)}</td>
                  <td>{item.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <PrevButton />
          <PageButton totalPage={totalPage} showPage={showPage} />
          <NextButton />
        </div>
      </div>
    </>
  )
}