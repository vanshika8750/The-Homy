import React,{useState} from "react";
import customizebg from "../../assets/customizebg.svg";
import "./Cart.css";
import cusbgmobile from "../../assets/cusbgmobile.svg"
import carthead from '../../assets/cart-head.svg'
import percent from '../../assets/percent.svg'



const Cart = () => {

    const [count, setCount] = useState(1);
    const pricePerProduct = 646;

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    console.log('Current count:', count);


    const [suggestion, setSuggestion] = useState('');

    const handleSuggestionChange = (event) => {
        setSuggestion(event.target.value);
    };

    const submitSuggestion = () => {
        console.log('Submitted suggestion:', suggestion);
    };

  return (
    <div className="cart-page">
      <div className="img-div-cart">
        <img src={customizebg} alt="" className="desktop-cart" />
        <img src={cusbgmobile} alt="" className="mobile-cart" />
      </div>

      <div className="content-div-cart">

        <div className="first-col-cart">
          <div className="first-col-div-cart head-first-cart">
            <div>Way to Finalize </div>
          </div>

          <div className="first-col-div-cart content-first-cart">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius
            quae vel sed rem, ducimus dignissimos explicabo ad minima, quibusdam
            sequi molestiae commodi pariatur minus veritatis officia corporis
            modi cupiditate!
          </div>

       
        </div>

        <div className="second-col-cart">
            
            <div style={{textAlign:'center',marginBottom:'40px'}}>
                <img src={carthead} alt="" />
                
            </div>

            <div className="number-cart border-cart">

                <div className="prod-no">

                    <div className="prodname">
                        Lorem ipsum dolor sit.
                    </div>

                    <div className="no-prod">
                <button onClick={decrement}>-</button>
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>
            <div className="price-prod">
                {count * pricePerProduct}
            </div>
                </div>

                <div className="outer-line"><div className="line"></div>
</div>
                <div className="suggestions">
            <label htmlFor="suggestionInput">Suggestion:</label>
            <textarea 
                id="suggestionInput" 
                rows={3}
                value={suggestion} 
                onChange={handleSuggestionChange} 
                placeholder="Type your suggestion here..."
            />
        </div>

            </div>


            <div className="coupons border-cart">

<div className="coupons-icon">
    <img src={percent} alt="" />
</div>

<div className="head-coupon">
    <div className="headc">
        Coupons and offers
    </div>
    <div>Login/Sign up to view offers</div>
</div>

<div>.</div>

            </div>

            <div className="payment border-cart">

            <div className="payment-head">Payment Summary</div>

          <div className="pay-prices">
          <div className="left-pay">
                <div>Item total</div>
                <div>Item discount</div>
                <div>Gst</div>
                <div>.............</div>
                <div>Total</div>
            </div>

            <div className="right-pay">
                <div>9595</div>
                <div>99</div>
                <div>9595</div>
                <div>.............</div>
                <div>9595</div>
            </div>
          </div>

            </div>

            <div className="amount border-cart">
                <div className="amount-head">
                    Amount to be paid
                </div>

                <div>9595</div>
            </div>


<div className="btn-cart">
    <button>
        Continue
    </button>
</div>
        </div>

      </div>

    </div>
  );
};

export default Cart;
