import './App.css'
import Logo from './assets/logo.svg'
import SearchLogo from './assets/search.svg'

import Table from './components/Table'
import FormSelect from './components/forms/Select'
import FormCheckbox from './components/forms/Checkbox'
import FormInputLogo from './components/forms/InputLogo'
import FormChipCheckbox from './components/forms/ChipCheckbox'

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'population', label: 'Population' },
  { value: 'area', label: 'Area' },
]

const filterRegionOptions = [
  { value: 'americas', label: 'Americas' },
  { value: 'antartic', label: 'Antartic' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

const filterStatusOptions = [
  { value: 'member_un', label: 'Member of the United Nations' },
  { value: 'independent', label: 'Independent' },
]

const headerTable = [
  { value: 'flag', label : 'Flag' },
  { value: 'name', label : 'Name' },
  { value: 'population', label : 'Population' },
  { value: 'area', label : 'Area (km2)' },
  { value: 'region', label : 'Region' }
]

const countryData = [
  {
    flag: 'https://flagcdn.com/w320/gs.png',
    name: 'South Georgia',
    population: '1,380,004,385',
    area: '2,973,190',
    region: 'Antartic'
  },
]

function App() {
  return (
    <>
      <div id="container">
        <div id="header">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div id="body" className="main-content">
          {/* <div className="card">
            <div className="card-flag-banner">
              <img src="https://flagcdn.com/w320/gs.png" alt="" />
            </div>
            <div className="country-title">
              <h1>South Georgia</h1>
              <p>South Georgia and the South Sandwich Islands</p>
            </div>
            <div className="country-population-area">
              <div className="info">
                <p>Population</p>
                <span className="divider"></span>
                <p>1,380,004,385</p>
              </div>
              <div className="info">
                <p>Area (km2)</p>
                <span className="divider"></span>
                <p>2,973,190</p>
              </div>
            </div>
            <div className="country-detail-info">
              <div>
                <p>Capital</p>
                <p>New Delhi</p>
              </div>
              <div>
                <p>Subregion</p>
                <p>Southern Asia</p>
              </div>
              <div>
                <p>Language</p>
                <p>English, Tamil</p>
              </div>
              <div>
                <p>Currencies</p>
                <p>Indian Rupee</p>
              </div>
              <div>
                <p>Continents</p>
                <p>Asia</p>
              </div>
            </div>
            <div className="country-neighbour">
              <p>Neighbouring Countries</p>
              <div className="list-countries">
                <div>
                  <img src="https://flagcdn.com/w320/gs.png" alt="" />
                  <p>Afghanistan</p>
                </div>
                <div>
                  <img src="https://flagcdn.com/w320/gs.png" alt="" />
                  <p>Afghanistan</p>
                </div>
                <div>
                  <img src="https://flagcdn.com/w320/gs.png" alt="" />
                  <p>Afghanistan</p>
                </div>
              </div>
            </div>
          </div> */}

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
                />
              </div>
            </div>
            <div className="card-body">
              <div className="card-filter">
                <div className="form-input">
                  <label>Sort by</label>
                  <FormSelect data={sortOptions} />
                </div>
                <div className="form-input">
                  <label>Region</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem 1rem' }}>
                    {filterRegionOptions.map((item, index) => (
                      <FormChipCheckbox
                        key={index}
                        name="region"
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </div>
                </div>
                <div className="form-input">
                  <label>Status</label>
                  <div className="checkbox-form">
                    {filterStatusOptions.map((item, index) => (
                      <FormCheckbox
                        key={index}
                        name="status"
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-content">
                <Table header={headerTable} data={countryData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
