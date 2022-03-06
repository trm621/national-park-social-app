//import { Token } from 'graphql';
import React from 'react';
//import { v4 as uuidv4 } from 'uuid';
import StripeCheckout from 'react-stripe-checkout';
//import DonationForm from './components/DonationForm'

// import Auth from '../utils/auth';
// import { useQuery, useMutation} from '@apollo/client';

// import { QUERY_ME_BASIC } from "../utils/queries";



const Donation = () => {
  // const {product, Token} = req.body;
  // const idempontencyKey = uuidv4()

  return (
    // stripe.cusotmers.create({
    //   email:token.email,
    //   source: token.id
    // }). then(customer => {
    //   stripe.charges.create({},{idempontencyKey})
    // })
    // .then(result => res.status(200).json(result))
    // .catch(err =>console.log(err))
    <div>
       <h1>Make a donation to a National Park</h1>
       
       <form action="/create-checkout-session" method="POST">
       {/* <button type="submit" id="checkout-button">Checkout</button> */}
       </form>
       {/* <h3>Did you forget to complete your donation?</h3> */}
       <StripeCheckout stripeKey="" token="" name="Donation">
         <button>Support a Park Today</button>
       </StripeCheckout>
       <h3>We appreciate your donation!</h3>
    </div>
  );
};

export default Donation;
