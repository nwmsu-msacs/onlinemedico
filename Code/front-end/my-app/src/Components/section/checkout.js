import React, { useState,useContext } from "react";
import "../css/checkout.css";
import axios from 'axios';
import {FaShoppingCart,FaMoneyBill,FaCreditCard, FaCheck} from "react-icons/fa" 
import CheckoutCart from "./checkoutcart";
import { v1 as uuidv } from "uuid";
import Card from "./cards";
import Address from "./address";
import NewCard from "./newCard";
import {Link} from 'react-router-dom';
import { DataContext } from '../Context'
///import {DataContext} from '../Context';
 import OrderSuccess from './OrderSuccess';

const Checkout = (props) => {
  const { userDetails } = useContext(DataContext)
  const [values, setValues] = useState([]);
  const [card, setCard] = useState({
    nameOnCard: "",
    cardNo: "",
    exp: "",
    year: "",
    cvv: ""
  });
  const [id, setId] = useState(uuidv());

  const handleChange = (e) => {
    var value = e.target.value;
    setCard({ ...card, [e.target.name]: value });
  };
  const handleDelete = (id) => {
    const filteredCard = values.filter((item) => item.id !== id);
    setValues(filteredCard);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aadd card")
    console.log(userDetails)
    const newCard = {
      id: id,
      CardAdded: card
    };
    const k = {
      ...card, customerId: userDetails.id
    }
    console.log(k)
    axios.post(`http://127.0.0.1:3333/onlinemedico/user/card-details`,k)
    .then(res=>{
    console.log(res);
    console.log(res.data);
}) 
   

    // console.log(newCard);
    const updatelist = [...values, newCard];
    // console.log(updatelist);
    setValues(updatelist);
    setId(uuidv());
    setCard({
      ...card,
      nameOnCard: "",
      cardNo: "",
      exp: "",
      year: "",
      cvv: ""
    });
  };
  const paymentHandler =(e)=>{
    console.log('dcvgfdszxxx',card)
    e.preventDefault();
    console.log(values.isChecked)
    if(values.length > 0 || values.isChecked){
      props.history.push("/onlinemedico/ordersuccess");
    }
    else{
      alert("Please add card")
    }
  }
   
  return (
    <div className="checkout">
      <div className="mainheading">
        <h2>Checkout</h2>
      </div>
      <div className="first-block">
        <div className="row" style={{marginTop:"3em"}}>
        <div className="check-cart col-7">
            <span className="address-heading">
            <i className="logo-heading"><FaShoppingCart/></i>Orders Summary
            </span>
          <CheckoutCart/>
        </div>
        <Address/>
        </div>
        <div className="payments">
          <div className="address-heading">
            <span>
              <i className="logo-heading"><FaMoneyBill/></i>Payments
            </span>
          </div>
          <div className="cards" style={{marginTop:"1em"}}>
            <div className="cards-info">
              <NewCard
                card={card}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="allCards">
              <div className="credit-heading">
                <span>
                  <i className="logo-heading"><FaCreditCard/></i>Select Card
                </span>
              </div>
              {values.length > 0 ? (
                values.map((v) => (
                  <Card key={v.id} card={v} handleDelete={handleDelete} />
                ))
              ) : (
                <div className="address-list2">
                  <span style={{margin:"8em"}}>No Addresses Were Added</span>
                </div>
              )}
            </div>
            <div className="block">
            <Link to="/onlinemedico/ordersuccess">
              <button onClick={paymentHandler}>
              Make Payment
              </button>
            </Link> 
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
