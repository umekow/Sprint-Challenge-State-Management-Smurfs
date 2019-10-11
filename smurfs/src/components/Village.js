import React, { useEffect } from 'react'; 
import { connect } from 'react-redux'; 

import { fetchSmurfs } from '../actions'; 




const Village = props => {
    useEffect(() => {
        props.fetchSmurfs(); 
    }, []); 

    if (props.isFetching) {
        return <p>Building the Village</p>; 
    }

    return (
        <div className="Village">
            {props.error && <p>{props.error}</p>}

            {props.village.map (smurf => (
                <div className="smurf" key={smurf.id}>
                    <h3 className="name">{smurf.name}</h3>
                    <p className="age">{smurf.age}</p>
                    <p className="height"> {smurf.height} </p>
                </div>
            ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        village: state.village, 
        isFetching: state.isFetching, 
        error: state.error

    }
}


export default connect(mapStateToProps, { fetchSmurfs })(Village); 