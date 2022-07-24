import { Component } from 'react';
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

addGreenBackground = (index) => {
  let navbarLinks = document.querySelectorAll('.nav-item');
  console.log(navbarLinks);
  for(let i = 0; i < navbarLinks.length; i++) {
    if(i === index) {
      navbarLinks[i].classList.add(`${style.navItemBackgroundColor}`)
      navbarLinks[i].classList.remove(`${style.navItem}`)
    }else{
      navbarLinks[i].classList.remove(`${style.navItemBackgroundColor}`)
      navbarLinks[i].classList.add(`${style.navItem}`)
    }
  }
}

removeGreenBackground = () => {
  let navbarLinks = document.querySelectorAll('.nav-item');
  for(let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.remove(`${style.navItemBackgroundColor}`)
    navbarLinks[i].classList.add(`${style.navItem}`)
  }
}

render() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.navbarBackground} ${style.navbar}`} >
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Link className={`text-decoration-none text text-uppercase text-white fw-bold ${style.navbarBrand}`} onClick={this.removeGreenBackground} to="First-React-App/header">start bootsrap</Link>
              </div>
              <div className="col-6">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list-unstyled">
                    <li className={`nav-item ${style.navItem} rounded-3`} onClick = {()=> this.addGreenBackground(0)} >
                      <Link className={`nav-link active text-white text-uppercase fw-bold ${style.navLink}`} aria-current="page" to="First-React-App/portfolio">portfolio</Link>
                    </li>
                    <li className={`nav-item ${style.navItem} rounded-3 ms-2`} onClick = {()=> this.addGreenBackground(1)} >
                      <Link className={`nav-link active text-white text-uppercase fw-bold ${style.navLink}`} aria-current="page" to="First-React-App/about">about</Link>
                    </li>
                    <li className={`nav-item ${style.navItem} rounded-3 ms-2`} onClick = {()=> this.addGreenBackground(2)} >
                      <Link className={`nav-link active text-white text-uppercase fw-bold ${style.navLink}`} aria-current="page" to="First-React-App/contact">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  ) 
}
}
