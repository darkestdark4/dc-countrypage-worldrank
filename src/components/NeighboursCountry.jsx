import { useNavigate } from "react-router";

export default function NeighboursCountry({ neighbours }) {
  let navigate = useNavigate()

  return (
    <>
      <div className="country-neighbour">
        <p>Neighbouring Countries</p>
        <div className="list-countries">
          {neighbours.map((item, index) => (
            <div key={index} onClick={() => navigate(`/${item.code}`)}>
              <div key={index}>
                <img src={item.flag} alt="flag" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}