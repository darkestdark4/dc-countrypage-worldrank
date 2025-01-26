export default function Checkbox({ label, name, value, isChecked, checkHandler }) {
  return (
    <>
      <label className="checkbox">{label}
        <input type="checkbox" name={name} value={value} checked={isChecked} onChange={checkHandler} />
        <span className="checkbox-box"></span>
      </label>
    </>
  )
}