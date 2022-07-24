import { Component } from 'react';
import style from './About.module.css';
export default class About extends Component {
  render() {
    return (
        <>
            <div className={`${style.aboutBackground}`}>
                <div className="container vh-100 d-flex flex-column overflow-hidden">
                    <div className={`${style.headerDevider} d-flex flex-wrap justify-content-center align-items-center`}>
                        <h2 className={`${style.AboutHeading} text-uppercase text-center`}>about</h2>
                        <div className={`${style.line} rounded`}></div>
                        <i className={`fa-solid fa-star ${style.star}`}></i>
                        <div className={`${style.line} rounded`}></div>
                    </div>
                    <div className="row">
                        <div className={`col-lg-4 ms-auto`}>
                            <p className={`${style.aboutParas} text-white`}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className={`col-lg-4 me-auto`}>
                            <p className={`${style.aboutParas} text-white`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                    <button className={` mx-auto text-capitalize p-3 rounded ${style.downloadButton} text-white`}><i className={`fa-solid fa-download me-3 text-white ${style.downloadSign}`}></i>free download!</button>
                </div>
            </div>
        </>
    )
  }
}
