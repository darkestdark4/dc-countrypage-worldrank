export default function WithLabel({ children, label }) {
  return (
    <>
      <div className="form-input">
        <label>{label}</label>
        {children}
      </div>
    </>
  )
}