import { Component } from 'react';
import style from './Footer.module.css';
export default class Footer extends Component {
  render() {
    return (
        <div className={`${style.Footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                        <h4 className={`${style.footerHeadings} text-white text-uppercase text-center`}>location</h4>
                        <p className={`${style.footerLeads} text-white text-capitalize text-center`}>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                        <h4 className={`${style.footerHeadings} text-white text-uppercase text-center`}>around the web</h4>
                        <div className="d-flex flex-wrap justify-content-center">
                            <a href="#" className={`${style.footerLinks} me-2 text-decoration-none text-white`}><i className={`fa-brands fa-facebook-f ${style.footerIcons}`}></i></a>
                            <a href="#" className={`${style.footerLinks} me-2 text-decoration-none text-white`}><i className={`fa-brands fa-twitter ${style.footerIcons}`}></i></a>
                            <a href="#" className={`${style.footerLinks} me-2 text-decoration-none text-white`}><i className={`fa-brands fa-linkedin-in ${style.footerIcons}`}></i></a>
                            <a href="#" className={`${style.footerLinks} me-2 text-decoration-none text-white`}><i className={`fa-brands fa-dribbble ${style.footerIcons}`}></i></a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <h4 className={`${style.footerHeadings} text-white text-uppercase text-center`}>about freelancer</h4>
                        <p className={`${style.footerLeads} text-white text-capitalize text-center`}>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
