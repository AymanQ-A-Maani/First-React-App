import { Component } from 'react';
import style from './Navbar.module.css';
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
       <nav className={`navbar navbar-expand-lg navbar-dark ${style.navbarBackground} ${style.navbar}`} >
        <div className="container">
        <Link className={`text-decoration-none text text-uppercase text-white fw-bold ${style.navbarBrand}`} onClick={this.removeGreenBackground} to="header">start bootsrap</Link>
          <button className={`navbar-toggler ${style.navItemBackgroundColor} text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu
              <span className={`navbar-toggler-icon ${style.iconColor}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-decoration-none">
              <li className={`nav-item ${style.navItem} rounded-3`} onClick = {()=> this.addGreenBackground(0)} >
                <Link className={`nav-link active text-white text-uppercase fw-bold ${style.navLink}`} aria-current="page" to="portfolio">portfolio</Link>
              </li>
              <li className={`nav-item ${style.navItem} rounded-3 ms-ms-0 ms-md-0 ms-lg-2`} onClick = {()=> this.addGreenBackground(1)} >
                <Link className={`nav-link active text-white text-uppercase fw-bold ${style.navLink}`} aria-current="page" to="about">about</Link>
              </li>
              <li className={`nav-item ${style.navItem} rounded-3 ms-ms-0 ms-md-0 ms-lg-2`} onClick = {()=> this.addGreenBackground(2)} >
                <Link className={`nav-link active text-white text-uppercase fw-bold ${style.navLink}`} aria-current="page" to="contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  ) 
}
}
