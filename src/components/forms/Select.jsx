export default function Select({ data }) {
  return (
    <>
      <div className="select-form">
        <select>
          {data.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </>
  )
}