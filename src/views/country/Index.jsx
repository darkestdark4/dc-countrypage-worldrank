import React from 'react'

import SearchLogo from '../../assets/search.svg'

const Table = React.lazy(() => import('../../components/Table'))
const FormSelect = React.lazy(() => import('../../components/forms/Select'))
const FormCheckbox = React.lazy(() => import('../../components/forms/Checkbox'))
const FormInputLogo = React.lazy(() => import('../../components/forms/InputLogo'))
const FormChipCheckbox = React.lazy(() => import('../../components/forms/ChipCheckbox'))

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

export default function Country() {
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
    </>
  )
}