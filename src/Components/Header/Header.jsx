import React, { Component } from 'react';
import style from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <>
      <div className={`${style.header} overflow-hidden`}>
        <div className={`container d-flex align-items-center flex-column ${style.headerContainer}`}>
          <img className={`${style.avatar} mb-3`} src="../../.././images/avataaars.svg" alt="no picture here" />
          <h1 className={`${style.heading} text-uppercase text-white`}>start bootstrap</h1>
          <div className={`${style.headerDevider}`}>
            <div className={`${style.line} rounded`}></div>
            <i className={`fa-solid fa-star ${style.star}`}></i>
            <div className={`${style.line} rounded`}></div>
            <p className={`${style.subHeading} text-capitalize text-center`}>graphic artist - web designer - illustrator</p>
          </div>
        </div>
      </div>
      
      </>
    )
  }
}
