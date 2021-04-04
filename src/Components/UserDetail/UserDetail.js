import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const UserDetail = ({data,handleAdd}) => {
    
    return (
        <div className="col-md-4 mb-5 mt-5">
           
            <div className="card">
                
                   
                <img style={{height:'270px'}}  className="img-fluid rounded-circle" src={require(`../../Image/${data.pic}`).default} alt=""/>
                <div className="card-body">
                    <h5 className="bg-dark text-light">{data.name}</h5>
                    <p className="bg-success">Pubg_Name:{data.pubg_name}</p>
                    <p className="bg-primary text-light"><small>Email:{data.email}</small></p>
                    <p className="bg-danger">pubg_Level:{data.pubg_level}</p>
                    <p className="bg-warning">pubg_id:{data.pubg_id}</p>
                    <div className="card-footer  border-success"> <p>Discord:{data.discord}</p></div>
                    <Link to="/playerinfo">
                    <button onClick={()=>handleAdd(data)} className="btn btn-dark"><FontAwesomeIcon icon={faPlus} /> Member Details</button>
                    </Link>
              
                   
                       
                    
                </div>
            </div>
        </div>
    );
};

export default UserDetail;