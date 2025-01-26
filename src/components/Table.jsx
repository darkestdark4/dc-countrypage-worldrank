import formatNumber from "../utils/formatNumber"

export default function Table({ header, data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {header.map((item, index) => <td key={index}>{item.label}</td>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <img className="country-logo" src={item.flag} alt="" />
              </td>
              <td>
                
                {item.name}
              </td>
              <td>{formatNumber(item.population)}</td>
              <td>{formatNumber(item.area)}</td>
              <td>{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}