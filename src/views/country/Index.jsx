import { useState, useEffect, lazy } from 'react'

import SearchLogo from '../../assets/search.svg'

const Table = lazy(() => import('../../components/Table'))
const FormSelect = lazy(() => import('../../components/forms/Select'))
const FormCheckbox = lazy(() => import('../../components/forms/Checkbox'))
const FormInputLogo = lazy(() => import('../../components/forms/InputLogo'))
const FormWithLabel = lazy(() => import('../../components/forms/WithLabel'))
const FormChipCheckbox = lazy(() => import('../../components/forms/ChipCheckbox'))

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'population', label: 'Population' },
  { value: 'area', label: 'Area' },
]

const filterRegionOptions = [
  { value: 'americas', label: 'Americas', checked: false },
  { value: 'antarctic', label: 'Antarctic', checked: false },
  { value: 'africa', label: 'Africa', checked: false },
  { value: 'asia', label: 'Asia', checked: false },
  { value: 'europe', label: 'Europe', checked: false },
  { value: 'oceania', label: 'Oceania', checked: false },
]

const filterStatusOptions = [
  { value: 'un_member', label: 'Member of the United Nations', checked: false },
  { value: 'independent', label: 'Independent', checked: false },
]

const headerTable = [
  { value: 'flag', label : 'Flag' },
  { value: 'name', label : 'Name' },
  { value: 'population', label : 'Population' },
  { value: 'area', label : 'Area (km2)' },
  { value: 'region', label : 'Region' }
]

export default function Country() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('name')
  const [region, setRegion] = useState(filterRegionOptions)
  const [status, setStatus] = useState(filterStatusOptions)
  const [countries, setCountries] = useState([])

  function updateRegionFilter(index) {
    setRegion(
      region.map((reg, currentIndex) =>
        currentIndex === index
          ? { ...reg, checked: !reg.checked }
          : reg
      )
    )
  }

  function updateStatusFilter(index) {
    setStatus(
      status.map((stat, currentIndex) =>
        currentIndex === index
          ? { ...stat, checked: !stat.checked }
          : stat
      )
    )
  }

  async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')

      if(!response.ok) {
        throw new Error('Network response was not ok.')
      }

      const data = await response.json()
      const countries = data.map((item) => ({
        code: item.cca3,
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        area: item.area,
        region: item.region,
        unMember: item.unMember,
        independent: item.independent
      }))

      setCountries(countries)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  // Search by name
  let filterCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  // Sort by name, population and area
  if(sort !== undefined) {
    filterCountries.sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sort === 'population') {
        return b.population - a.population
      } else if (sort === 'area') {
        return b.area - a.area
      }
    })
  }

  // Filter by region
  const regionFilter = region.filter(item => item.checked).map(item => item.value)
  if(regionFilter.length > 0) {
    filterCountries = filterCountries.filter(country => {
      return regionFilter.includes(country.region.toLowerCase())
    })
  }

  // Filter by status
  const statusFilter = status.filter(item => item.checked).map(item => item.value)
  if(statusFilter.includes('un_member')) {
    filterCountries = filterCountries.filter(country => country.unMember === true)
  }

  if(statusFilter.includes('independent')) {
    filterCountries = filterCountries.filter(country => country.independent === true)
  }

  return (
    <>
      <div id="body" className="main-content">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <p>Found 100 countries</p>
            </div>
            <div className="card-form">
              <FormInputLogo
                width="300px"
                logo={SearchLogo}
                placeholder="Search by Name, Region, Subregion"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="card-body">
            <div className="card-filter">
              <FormWithLabel label="Sort by">
                <FormSelect
                  data={sortOptions}
                  onChange={e => setSort(e.target.value)}
                />
              </FormWithLabel>
              <FormWithLabel label="Region">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem 1rem' }}>
                  {region.map((item, index) => (
                    <FormChipCheckbox
                      key={index}
                      name="region"
                      label={item.label}
                      value={item.value}
                      isChecked={item.checked}
                      checkHandler={() => updateRegionFilter(index)}
                    />
                  ))}
                </div>
              </FormWithLabel>
              <FormWithLabel label="Status">
                <div className="checkbox-form">
                  {status.map((item, index) => (
                    <FormCheckbox
                      key={index}
                      name="status"
                      label={item.label}
                      value={item.value}
                      isChecked={item.checked}
                      checkHandler={() => updateStatusFilter(index)}
                    />
                  ))}
                </div>
              </FormWithLabel>
            </div>
            <div className="card-content">
              <Table header={headerTable} data={filterCountries} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}