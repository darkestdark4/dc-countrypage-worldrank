export default function CountryDetail() {
  return (
    <>
      <div id="body" className="detail-content">
        <div className="card">
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
        </div>
      </div>
    </>
  )
}