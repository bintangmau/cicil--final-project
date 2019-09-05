import React, { Component } from 'react';
import './PaketWisata.css'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import DestinationBox from './DestinationBox';
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'


class PaketWisata extends Component {
    state = {
        destinationData : []
    }
    
    componentDidMount(){
        this.getDestination()
        // this.renderDestination()
    }

    getDestination = () => {
        Axios.get(urlApi +  'destination')
        .then((res) => {
            console.log(res.data , ' ini isinya')
            this.setState({destinationData : res.data})
        })
        .catch((err) => {
            console.log(err , ' ERRO DISINI')
            swal('Error', 'Data Gamasuk', 'error')
        })
    }

    renderDestination = () => {
        let jsx = this.state.destinationData.map(val => {
            console.log(val , ' ini val =================')
            return (
                    <DestinationBox 
                negara={val.country} benua={val.continent} waktu={val.date} vila={val.hotel} harga={val.price} maskapai={val.airline} 
                fasilitas={val.amenities} gambar={val.img} id={val.id} desk={val.desc}/> 
            )
        }) 
        console.log(jsx , ' ini jsx =========')
        return jsx 
     }


render() {
return (
    <div>
        <h1 className='judulHotel'>Our Travel Package</h1>
        <div style={{marginTop : "20px"}}>
    
        </div>
            {this.renderDestination()}
            {/* {this.renderDestination()} */}
        </div>
);
        }
    }

export default connect(state => {
    return {
        username : state.user.username  
    }
})(PaketWisata)