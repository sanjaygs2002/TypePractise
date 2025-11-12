import { useForm, type SubmitHandler } from "react-hook-form";

import type { FormField } from "./FormTypes";

export const LoginFormValidation =()=>{

    const {register,handleSubmit, formState:{errors},reset}=useForm<FormField>();

    const onSubmit : SubmitHandler<FormField>=(data)=>{
        console.log(data);
        reset();
       
    }
return (

    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Email:</label>
    <input 
    {
        ...register("email",{required:"Email is required"})
    }
    type="email"/>
 {errors.email && <p>{errors.email.message}</p>}
    <label>Password:</label>
    <input
    {
        ...register("password",{required:"Password is required"})
    }
    type="password"/>
 {errors.email && <p>{errors.email.message}</p>}
    <button type="submit">Login</button>
    </form>
)
}



