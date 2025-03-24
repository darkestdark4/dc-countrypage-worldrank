export default function Select({ data, onChange }) {
  return (
    <>
      <div className="select-form">
        <select onChange={onChange}>
          {data.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </>
  )
}