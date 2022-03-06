import React from 'react';
//import { loadStripe } from '@stripe/stripe-js';
import './style.css';

//const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Donation = () => {
  


  return (
    <div className="cart">

        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
        </div>
      )
   
  
};


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Buy cool new product</title>
//     <link rel="stylesheet" href="style.css">
//     <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
//     <script src="https://js.stripe.com/v3/"></script>
//   </head>
//   <body>
//     <section>
//       <div class="product">
//         <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
//         <div class="description">
//           <h3>Stubborn Attachments</h3>
//           <h5>$20.00</h5>
//         </div>
//       </div>
//       <form action="/create-checkout-session" method="POST">
//         <button type="submit" id="checkout-button">Checkout</button>
//       </form>
//     </section>
//   </body>
// </html>

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Thanks for your order!</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <section>
//     <p>
//       We appreciate your business! If you have any questions, please email
//       <a href="mailto:orders@example.com">orders@example.com</a>.
//     </p>
//   </section>
// </body>
// </html>
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Checkout canceled</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <section>
//     <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
//   </section>
// </body>
// </html>

export default Donation;