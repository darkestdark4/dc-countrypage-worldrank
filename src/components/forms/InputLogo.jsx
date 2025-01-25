export default function InputLogo({ placeholder, logo, width }) {
  return (
    <>
      <div className="form-input-icon" style={{ width: width }}>
        <img src={logo} alt="logo" />
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  )
}