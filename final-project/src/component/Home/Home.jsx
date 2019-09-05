import React, { Component } from 'react';
import '../Home/style.css'
import DataCard from './DataCard'
import Slideshow from './Slideshow'
import News from './News'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
  return (
    <div>
        <div className='latar'>
    <div className='container-fluid'>
     <Slideshow/>  
      <h1 className='tampil'>
        Buka Mata, Bumi ini Indah!
        <h5>
        <span className='judul' style={{fontSize : '25px'}}>Pergi-Kesana</span> akan membawa Anda menyaksikan keberagaman suku budaya,
        keseruan petualangan,
        kelezatan sensasi rasa,
        kekayaan hayati dan keindahan alam yang tersebar di beberapa tempat di Dunia.
      </h5>
      </h1>
    </div>
    <DataCard/>
    <Link to='/cartdata'>
    <input type="button" value="Test"/>
    </Link>
    <section id="breakingnews">
      <News/>
    </section>
      </div>
    </div>
  );
}
}



export default Home;