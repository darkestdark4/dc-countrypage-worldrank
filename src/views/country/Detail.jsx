import { useParams } from "react-router"
import { useState, useEffect } from "react"
import capitalize from "../../utils/capitalize"
import formatNumber from "../../utils/formatNumber"

import NeighboursCountry from "../../components/NeighboursCountry"

export default function CountryDetail() {
  let { country } = useParams()

  const [countryData, setCountryData] = useState(null)
  const [neighbours, setNeighbours] = useState([])

  async function fetchDetailData() {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)

      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }

      const data = await response.json()
      const currencies = Object.values(data[0].currencies).map((item) => item.name)
      const detailData = {
        capital: data[0].capital.join(', '),
        subregion: data[0].subregion,
        languages: Object.values(data[0].languages).join(', '),
        currencies: currencies.join(', '),
        continents: data[0].continents.join(', ')
      }

      fetchNeighbours(data[0].borders)
      setCountryData({
        flag: data[0].flags.png,
        name: {
          common: data[0].name.common,
          official: data[0].name.official
        },
        population: data[0].population,
        area: data[0].area,
        detail: detailData
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchNeighbours(neighbours) {
    if(neighbours.length > 0) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${neighbours.join(',')}`) 

        if (!response.ok) {
          throw new Error('Network response was not ok.')
        }

        const data = await response.json()
        const neighboursData = data.map((item) => {
          return {
            code: item.cca3,
            flag: item.flags.png,
            name: item.name.common
          }
        })

        setNeighbours(neighboursData)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchDetailData()
  }, [country])

  if(countryData !== null) {
    return (
      <>
        <div id="body" className="detail-content">
          <div className="card">
            <div className="card-flag-banner">
              <img src={countryData.flag} alt="" />
            </div>
            <div className="country-title">
              <h1>{countryData.name.common}</h1>
              <p>{countryData.name.official}</p>
            </div>
            <div className="country-population-area">
              <div className="info">
                <p>Population</p>
                <span className="divider"></span>
                <p>{formatNumber(countryData.population)}</p>
              </div>
              <div className="info">
                <p>Area (km2)</p>
                <span className="divider"></span>
                <p>{formatNumber(countryData.area)}</p>
              </div>
            </div>
            <div className="country-detail-info">
              {Object.keys(countryData.detail).map((key) => (
                <div key={key}>
                  <p>{capitalize(key)}</p>
                  <p>{countryData.detail[key]}</p>
                </div>
              ))}
            </div>
            <NeighboursCountry neighbours={neighbours} />
          </div>
        </div>
      </>
    )
  }
}