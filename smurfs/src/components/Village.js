import React, { useEffect, useState } from 'react'; 
import { connect } from 'react-redux';


import { fetchSmurfs} from '../actions'; 
import axios from 'axios';




const Village = props => {
    
    const [newSmurf, setNewSmurf] = useState({name: '', height: '', age: ''}); 
    
    useEffect(() => {
        props.fetchSmurfs(); 
    }, []); 

    if (props.isFetching) {
        return <p>Building the Village</p>; 
    };

    const handleChanges = e =>{
        e.preventDefault(); 
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
        console.log(newSmurf);
    }

    const onSumbit = e => {
        e.preventDefault()
        axios.post(`http://localhost:3333/smurfs`, newSmurf).then(r => console.log(r.data)); 
        props.fetchSmurfs();
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

<form>
        Name:
        <input onChange={handleChanges} name="name" value={newSmurf.name}/>
        Age:
        <input onChange={handleChanges} name="age" value={newSmurf.age}/>
        Height:
        <input onChange={handleChanges} name="height" value={newSmurf.height}/>
        <button onClick={onSumbit}>Add</button>
    </form>
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