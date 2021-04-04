import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const AddFriend = ({addData}) => {
    // console.log(addData)
    let money=0
    let phone=''
    for(let i=0;i<addData.length;i++){
        const element=addData[i]
       phone=phone +element.phone
        money=money+element.income
        
    }
    return (
        <div>
            <h5 className="text-dark">Total Added:{addData.length}</h5>
            {
                addData.map(data=>{
                    return  <div className=" card card-body">
                        <p>name:{data.name}</p>
                        <p>phone:{data.phone}</p>
                        <p>salary:{data.income}</p>
                        <p>achievement:<FontAwesomeIcon icon={data.icon}/></p>
                        
                    </div>
                })
                
            }
           
           
            <p>Total Salary of teams:{money}</p>
            <Link to="/pubgplayer">
            <button className="btn btn-danger">Go Back</button>
            </Link>
            
        
        </div>
    );
};

export default AddFriend;