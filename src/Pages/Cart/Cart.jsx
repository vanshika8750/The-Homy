import React,{useState,useEffect} from "react";
import customizebg from "../../assets/customizebg.svg";
import "./Cart.css";
import cusbgmobile from "../../assets/cusbgmobile.svg"
import carthead from '../../assets/cart-head.svg'
import percent from '../../assets/percent.svg'
import pricesArray from '../../Components/prices'
import {useCustomizationContext} from '../../Components/Context/CustomizationContext'
import rightarrcart from '../../assets/right-arr-cart.svg'


const Cart = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        // Retrieve the selected plan data from local storage
        const storedPlan = localStorage.getItem('selectedPlan');
        if (storedPlan) {
            setSelectedPlan(JSON.parse(storedPlan));
        }
    }, []);
    console.log(selectedPlan)
    const { userSelectedOption,selectedOption} = useCustomizationContext();

    const [count, setCount] = useState(1);
    

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    // console.log('Current count:', count);


    const [suggestion, setSuggestion] = useState('');

    const handleSuggestionChange = (event) => {
        setSuggestion(event.target.value);
    };

    const submitSuggestion = () => {
        console.log('Submitted suggestion:', suggestion);
    };


    const findPrice = (category, option) => {
        const categoryObj = pricesArray.find(item => item.category === category);
      
        if (categoryObj) {
          const optionObj = categoryObj.options.find(item => item.plan === option);
          if (optionObj) {
            return optionObj.price;
          }
        }
        return null;
      };
      
      const category = userSelectedOption;
      const option = selectedOption;
      const price = findPrice(category, option);
      
      const priceprod = count*selectedPlan?.prices;

  return (
  
 <div className="cart-page">
      <div className="img-div-cart">
        <img src={customizebg} alt="" className="desktop-cart" />
        <img src={cusbgmobile} alt="" className="mobile-cart" />
      </div>

      <div className="content-div-cart">

        <div className="first-col-cart">
          <div className="first-col-div-cart head-first-cart">
            <div>Way to Finalize</div>
          </div>

          <div className="first-col-div-cart content-first-cart">
          We are here to ensure that all our services are delivered per your expectations. 

<div style={{marginTop:'10px'}}>Hence, let's set it as per requirements! 
Fill in the details here 👉</div>
          </div>

       
        </div>

        <div className="second-col-cart">
            
            <div style={{textAlign:'center',marginBottom:'40px'}}>
                <img src={carthead} alt="" />
                
            </div>

            <div className="number-cart border-cart">

                <div className="prod-no">

                    <div className="prodname">
                       {selectedPlan?.plans}-{selectedPlan?.planoptions}
                    </div>

                    <div className="no-prod">
                <button onClick={decrement}>-</button>
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>
            <div className="price-prod">
                {priceprod}
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

<div>
    <img src={rightarrcart} alt="" />
</div>

            </div>

            <div className="payment border-cart">

            <div className="payment-head">Payment Summary</div>

          <div className="pay-prices">
          <div className="left-pay">
                <div>Item total</div>
                
                <div>Gst</div>
                <div>.............</div>
                <div>Total</div>
            </div>

            <div className="right-pay">
                <div>{count}</div>
               
                <div>18%</div>
                <div>.............</div>
                <div>{priceprod+(priceprod*0.18)}</div>
            </div>
          </div>

            </div>

            <div className="amount border-cart">
                <div className="amount-head">
                    Amount to be paid
                </div>

                <div>{priceprod+(priceprod*0.18)}</div>
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
