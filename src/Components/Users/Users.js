import React from 'react';
import UserDetail from '../UserDetail/UserDetail';

const Users = ({data,handleAdd}) => {
    
    return (
        <div className="row ">
            {
                data.map(data=>{
                    return <UserDetail handleAdd={handleAdd} key={data.id} data={data}/>
                })
            }
            
        </div>
    );
};

export default Users;