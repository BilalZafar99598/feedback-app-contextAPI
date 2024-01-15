const Header = ({ title, bgColor, color}) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: color
    }
  return (
    <header style={headerStyle} >
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

export default Header