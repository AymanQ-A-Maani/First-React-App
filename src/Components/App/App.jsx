import { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../contact/Contact'
import Footer from '../Footer/Footer'
import Notfound from '../NotFound/Notfound'
import { Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/First-React-App/" element={<Header />} />
          <Route path="First-React-App/header" element={<Header />} />
          <Route path="First-React-App/portfolio" element={<Portfolio />} />
          <Route path="First-React-App/about" element={<About />} />
          <Route path="First-React-App/contact" element={<Contact />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </>
    )
  }
}