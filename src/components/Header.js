import "./Header.css"
function Header(){
    return(
        <div>
          <div className="first">
          <h1>Family Wellness</h1>
          <p>MASAGE THERAPY</p>
          </div>  
          <div className='navbar'>
            <li className='lione'>HOME</li>
            <li>ABOUT</li>
            <li>HELP</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </div>
          <div className='image1'>
        <img src='https://st3.depositphotos.com/1037987/14043/i/450/depositphotos_140435634-stock-photo-two-businesswomen-working-on-computer.jpg' alt='#'></img>
          </div>
    </div>
        
    );
}
export default Header;