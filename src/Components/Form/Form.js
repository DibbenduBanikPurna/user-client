import React from 'react';
import { useForm } from "react-hook-form"
import './Form.css'
const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const onSubmit = (data) =>{
      fetch('http://localhost:5000/newMember',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)

      })

  } 

  console.log(watch("example")); 
    return (
        <form className="text-center mt-5 pt-5 text-light forms bg-dark" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">User Name</label>
       
        <input className="form-control" placeholder="Enter Name" type="text" defaultValue="" name="name" {...register("name")} />
        {errors.name && <span>Name is required</span>}
       
        <label htmlFor="email">User Email</label>
        
        <input className="form-control" placeholder="Enter Email" type="email" name="email" {...register("email", { required: true })} />
       
        {errors.email && <span>Email is required</span>}
         
          <label htmlFor="pubg_name">Pubg_Name</label>
         
        <input className="form-control" placeholder="Enter Pubg_Name" type="text" name="pubg_name" {...register("pubg_name", { required: true })} />
       
       {errors.pubg_name && <span>pubg_name is required</span>}
       
        <label htmlFor="pubg_id">Pubg_Id</label>
       
       <input className="form-control" placeholder="Enter Pubg_Id" type="number" name="pubg_id" {...register("pubg_id", { required: true })} />
       
       {errors.pubg_id && <span>pubg_id is required</span>}
       
        <label htmlFor="pubg_level">Pubg_Level</label>
      
       <input className="form-control" placeholder="Enter Pubg_Level" type="number" name="pubg_level" {...register("pubg_level", { required: true })} />
       
       {errors.pubg_level && <span>pubg_level is required</span>}
       
        <label htmlFor="discord">Discord_Name</label>
       
       <input className="form-control" placeholder="Enter Discord_Name" type="text" name="discord" {...register("discord", { required: true })} />
       
       {errors.discord && <span>discord is required</span>}
       <br/>
       <label htmlFor="discord">Discord_Name</label>
       
       <input className="form-control" placeholder="Phone-No" type="number" name="phone" {...register("discord", { required: true })} />
       
       {errors.phone && <span>Phone_No is required</span>}
       <br/>
        <input  className="form-control bg-warning"  type="submit" />
      </form>
    );
};

export default Form;