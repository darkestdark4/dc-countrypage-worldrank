export default function ChipCheckbox({ label, name, value, isChecked, checkHandler }) {
  return (
    <>
      <div className="chip-checkbox-form">
        <input
          id={value}
          name={name}
          value={value}
          type="checkbox"
          checked={isChecked}
          className="chip-box"
          onChange={checkHandler}
        />
        <div className="chip-label gap-3">
          <label className="d-flex" htmlFor={value}>{label}</label>
        </div>
      </div>
    </>
  )
}