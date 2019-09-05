import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'
import Destinasi from './component/Destinasi'
import Masjid from './component/Home/Masjid/Masjid'
import Guide from './component/Guide'
import Home from './component//Home/Home'
import Register from './component/Auth/Register'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Auth from './component/Auth/Auth'
import PaketWisata from './component/Home/Paket Wisata/PaketWisata'
import Food from './component/Home/Food/Food'
import Slideshow from './component/Home/Slideshow'
import Cookie from 'universal-cookie'
import {connect} from 'react-redux'
import {keepLogin} from './redux/actions/userAction'
import Ceko from './component/Home/Paket Wisata/Destinasi/Ceko'
import Modal from './component/Home/Modal'
import CartData from './component/Home/CardData/CardData'

let cookieObj = new Cookie()


class App extends React.Component {

  componentDidMount(){
    let cookieVar = cookieObj.get('userData')
    if(cookieVar){
      this.props.keepLogin(cookieVar)
    }
  }
  


render(){ 
  return (
   <div>
     <Navbar/>
     <Switch>
        <Route path = '/' component={Home} exact/>
        <Route path = '/auth' component={Auth} exact/>
        <Route path = '/destinasi' component={Destinasi} exact/>
        <Route path = '/masjid' component={Masjid} exact/>
        <Route path = '/guide' component={Guide} exact/>
        <Route path = '/register' component={Register} exact/>
        <Route path = '/paketwisata' component={PaketWisata} exact/>
        <Route path = '/food' component={Food} exact/>
        <Route path = '/slideshow' component={Slideshow} exact/>
        <Route path = '/ceko' component={Ceko} exact/>
        <Route path = '/modal' component={Modal} exact/>
        <Route path = '/cartdata' component={CartData} exact/>
     </Switch>
   </div>
  );
  }
  }



export default connect(null, {keepLogin})(withRouter(App));
