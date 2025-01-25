export default function Checkbox({ label, name, value }) {
  return (
    <>
      <label className="checkbox">{label}
        <input type="checkbox" name={name} value={value} />
        <span className="checkbox-box"></span>
      </label>
    </>
  )
}