import { Component } from 'react';
import style from './Contact.module.css';

export default class Contact extends Component {
  render() {
    return (
        <>
            <div className="container d-flex flex-column overflow-hidden">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <h2 className={`${style.ContactHeading} text-uppercase text-center`}>contact me</h2>
                    <div className={`${style.line} rounded`}></div>
                    <i className={`fa-solid fa-star ${style.star}`}></i>
                    <div className={`${style.line} rounded`}></div>
                </div>
                <div className="row g-0 justify-content-center mb-4">
                    <div className="col-sm-12 col-lg-8">
                        <input className={`${style.input}`} type="text" placeholder='full name' />
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <input className={`${style.input}`} type="text" placeholder='Email Address' />
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <input className={`${style.input}`} type="text" placeholder='phone number' />
                    </div>
                    <div className="col-sm-12 col-lg-8 mb-3">
                        <textarea className={`${style.contactMessage}`} name="Message" id="message" placeholder='message' ></textarea>
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <button className={`btn btn-success p-3 text-capitalize text-white me-auto ${style.sendBtn}`}>send</button>
                    </div>
                </div>
                
            </div>
        </>
    )
  }
}
