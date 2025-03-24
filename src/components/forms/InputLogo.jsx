export default function InputLogo({ placeholder, logo, width, onChange }) {
  return (
    <>
      <div className="form-input-icon" style={{ width: width }}>
        <img src={logo} alt="logo" />
        <input type="text" placeholder={placeholder} onChange={onChange} />
      </div>
    </>
  )
}