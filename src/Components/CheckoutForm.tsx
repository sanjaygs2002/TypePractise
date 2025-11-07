import { useState } from "react";
import type { CheckoutFormData } from "../Types/types";

const CheckoutForm=()=>{
    const [formData,setFormData]=useState<CheckoutFormData>({
        fullName:"",
        email:"",
        phone:"",
        address:"",
        cardNumber:"",

    });
    const [errors, setErrors]= useState<Partial<CheckoutFormData>>({});

    const validate=()=>{
        const newError : Partial<CheckoutFormData>={};
        if(!formData.fullName.trim()) newError.fullName="Full Name is Required";

        if(!formData.email) newError.email="Email is Required";
        else if(!/\S+@\S+\.\S+/.test(formData.email)) newError.email="Invalid email";

        if(!formData.phone) newError.phone="Phone no is required";
        else if(!/^[0-9]{10}$/.test(formData.phone)) newError.phone="Phone must be 10 digit";

        if(!formData.address.trim()) newError.address="Address is required";
        
        if(!formData.cardNumber) newError.cardNumber="Card No is required";
        else if(!/^[0-9]{16}$/.test(formData.cardNumber)) newError.cardNumber="Card no is not match length";

            setErrors(newError);
    return Object.keys(newError).length === 0;
  };
    


const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value} = e.target;
    setFormData(prev =>({
        ...prev,
        [name]:value
    }))
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Order placed successfully");
    console.log("Checkout Form Data:", formData);

    setFormData({
        fullName:"",
        email:"",
        phone:"",
        address:"",
        cardNumber:"",
    })
  };



return (
    <form onSubmit={handleSubmit}>
           <h2>Checkout Form</h2>

      <label>Full Name</label>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        <br></br>
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br></br>
      <label>Phone</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        <br></br>
      <label>Address</label>
      <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
      {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
       <br></br>
      <label>Card Number</label>
      <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
      {errors.cardNumber && <p style={{ color: "red" }}>{errors.cardNumber}</p>}
      <br></br>
      <button type="submit" style={{ marginTop: 10 }}>Place Order</button>
    </form>
  );
}

export default CheckoutForm;

