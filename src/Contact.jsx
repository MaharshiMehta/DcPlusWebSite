import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
const Contact =() => {

     const [state, setstate] = useState({

        fullname: '',
        phone:'',
        Email:'',
        Msg:'',

     });


     const InputEvent = (event) => {

        const {name,value} = event.target;

        setstate((preVal) => {

                return{
                    ...preVal,
                    [name] : value,
                }
        })

     }
    const formsubmit = (e) => {

        e.preventDefault();
        alert(`
        
        My Name is ${state.fullname}. My Mobile number is ${state.phone}
        `)


    }

    return (

        <>
                    <div className="my-5">

                        <h1 className="text-center">Conatxt Us</h1>

                    </div>
                    <div className="container contact_div">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">

                            <form onSubmit={formsubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name= "fullname" value={state.fullname} onChange={InputEvent}placeholder="Enter Full Name"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1"  name= "phone" value={state.phone} onChange={InputEvent} placeholder="Enter Mobile Number"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name= "Email" value={state.Email} onChange={InputEvent} placeholder="Enter email"/>
    
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" name= "Msg" value={state.Msg} onChange={InputEvent} rows="3"></textarea>
  </div>
  <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default Contact;