import React from 'react';
import {Link} from 'react-router-dom'
import './PaketWisata.css'
import {connect} from 'react-redux'

const DestinationBox = (props) => {
return (
<div className='container' style={{backgroundColor : "black", background: "whiteb", padding : "30px"}}>
    <div>
        <div className='bungkus-box'>
            <div className="card">
                <div className="img-box">
                    {
                    props.username !== ''
                    ?
                    <Link to='/ceko'>
                    <img src={props.gambar} />
                    </Link>
                    :
                    <Link to='/auth'>
                    <img src={props.gambar} />
                    </Link>
                    }

                </div>
                <div className="content">
                    <h2>
                        {props.negara}<br /><span>{props.benua}</span>
                    </h2>
                    <p>{props.waktu}</p>
                </div> 
            </div> 
            <h5>
            {props.desk}
            <Link to='/modal'>
            <input type="button" className='btn btn-success' value="Booking" />
            </Link>
            </h5>
        </div>
    </div>

</div>

);
};
const mapStateToProps = state => {
return {
username : state.user.username
}
}

// export default DestinationBox;
export default connect(mapStateToProps)(DestinationBox)