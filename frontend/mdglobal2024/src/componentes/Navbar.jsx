import logo from "../assets/Home/logo.png";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: "22px",
        lineHeight: "23.94px",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: '35px',
        top: 0,
        position: 'absolute'
      }}
    >
      <div className="Logo" style={{ textAlign: "center" , display: 'flex' , flexDirection: 'row' , alignItems:'center' , marginLeft: '4rem' }}>
        <img src={logo} alt="" style={{ width: "69.25px", height: "65px" }} />
            <span style={{color: '#8F0D3C' ,marginLeft: '1rem' , fontSize: '25px' , fontWeight: 'bold' , lineHeight: '27.2px', whiteSpace: 'nowrap'}}>MD GLOBAL <br />         <span style={{fontWeight: 'normal'}}>TRADE SERVICES</span> </span>

      </div>
      <div className="comun" style={{marginLeft: '21rem' , marginRight: '6rem'}}>Home</div>
      <div className="comun" style={{marginRight: '6rem'}}>Servicios</div>
      <div className="comun" style={{marginRight: '6rem'}}>Cotizar</div>
      <div className="comun" style={{marginRight: '6rem'}}>Aduanas</div>
      <div className="comun" style={{marginRight: '6rem'}}>Nosotros</div>
    </div>
  );
}

export default Navbar;
