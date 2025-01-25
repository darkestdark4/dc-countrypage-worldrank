export default function ChipCheckbox({ label, name, value }) {
  return (
    <>
      <div className="chip-checkbox-form">
        <input className="chip-box" type="checkbox" name={name} value={value} id={value}/>
        <div className="chip-label gap-3">
          <label className="d-flex" htmlFor={value}>{label}</label>
        </div>
      </div>
    </>
  )
}