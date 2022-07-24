import { Component } from 'react';
import style from './Portfolio.module.css';
export default class Portfolio extends Component {
  render() {
    return (
        <>
            <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className={`${style.headerDevider} mb-3 d-flex flex-wrap justify-content-center align-items-center`}>
                    <h2 className={`${style.portfolioHeading} text-uppercase text-center`}>portfolio</h2>
                    <div className={`${style.line} rounded`}></div>
                    <i className={`fa-solid fa-star ${style.star}`}></i>
                    <div className={`${style.line} rounded`}></div>
                </div>
                <div className="row g-0">
                    <div className={`col-4 ${style.portfolioCard} position-relative`}>
                        <img src="./First-React-App/images/cabin.png" className={`${style.portfolioImage} rounded-3`} alt="nothing to show here" />
                        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3`}>
                        <i className={`fa-solid fa-plus ${style.plusSign} text-white`}></i>
                        </div>
                    </div>
                    <div className={`col-4 ${style.portfolioCard} position-relative`}>
                        <img src="./First-React-App/images/cake.png" alt="nothing to show here" className={`${style.portfolioImage} rounded-3`} />
                        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3`}>
                            <i className={`fa-solid fa-plus ${style.plusSign} text-white`}></i>
                        </div>
                    </div>  
                    <div className={`col-4 ${style.portfolioCard} position-relative`}>
                        <img src="./First-React-App/images/circus.png" alt="nothing to show here" className={`${style.portfolioImage} rounded-3`} />
                        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3`}>
                            <i className={`fa-solid fa-plus ${style.plusSign} text-white`}></i>
                        </div>
                    </div>  
                    <div className={`col-4 ${style.portfolioCard} position-relative`}>
                        <img src="./First-React-App/images/game.png" alt="nothing to show here" className={`${style.portfolioImage} rounded-3`} />
                        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3`}>
                            <i className={`fa-solid fa-plus ${style.plusSign} text-white`}></i>
                        </div>
                    </div>  
                    <div className={`col-4 ${style.portfolioCard} position-relative`}>
                        <img src="./First-React-App/images/safe.png" alt="nothing to show here" className={`${style.portfolioImage} rounded-3`} />
                        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3`}>
                            <i className={`fa-solid fa-plus ${style.plusSign} text-white`}></i>
                        </div>
                        </div>  
                    <div className={`col-4 ${style.portfolioCard} position-relative`}>
                        <img src="./First-React-App/images/submarine.png" alt="nothing to show here" className={`${style.portfolioImage} rounded-3`} />
                        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3`}>
                            <i className={`fa-solid fa-plus ${style.plusSign} text-white`}></i>
                        </div>
                    </div>  
                </div> 
            </div>
        </>
    )
  }
}
