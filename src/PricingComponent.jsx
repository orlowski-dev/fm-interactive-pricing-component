import { useState } from 'react';
import './PricingComponent.css';

export default function PricingComponent() {

    const rangeInputAttrs = {
        min: 1.00,
        max: 200.00,
    }
    const [countYearly, setCountYearly] = useState(false);
    const [rangeInputValue, setRangeInputValue] = useState(rangeInputAttrs.max / 2);

    const PriceLabel = () => {
        return countYearly ? <p>/ year</p> : <p>/ month</p>
    }
    
    const calculatePrice = () => {
        if (countYearly) {
            const priceWithoutDiscount = rangeInputValue * 0.16 * 12;
            const discount = priceWithoutDiscount * .25;
            return Number(priceWithoutDiscount - discount).toFixed(2);
        }
        
        const priceWithoutDiscount = rangeInputValue * 0.16;
        return priceWithoutDiscount.toFixed(2);
    }

    return <article className="pricing-component">
        <section className="top-section">
            <div className="pageviews-container">
                <h2>100K Pageviews</h2>
            </div>
            <div className="slider-container">
                <input type="range" id="pricing-slider"
                    min={rangeInputAttrs.min}
                    max={rangeInputAttrs.max}
                    defaultValue={rangeInputAttrs.max / 2}
                    onChange={e => setRangeInputValue(e.target.value)}
                />
            </div>
            <div className="price-container">
                <h2 id='price-amount' className='price-amount'>${
                    calculatePrice()
                }</h2>
                <PriceLabel />
            </div>
            <div className="billing-container">
                <p>Monthly Billing</p>
                <div className='custom-checkbox'>
                    <input type="checkbox" id="billing-yearly-checkbox" onChange={()=>{
                        setCountYearly((countYearly ? false : true));
                    }}/>
                    <label htmlFor="billing-yearly-checkbox"></label>
                </div>
                <p className='discount-p'>
                    Yearly Billing
                </p>
            </div>
        </section>
        <section className="bottom-section">
            <h2 className='visually-hidden'>Features</h2>
            <div className="features">
                <div className='feature'>
                    <img src="/images/icon-check.svg" alt="icon check" />
                    <p>Unlimited websites</p>
                </div>
                <div className='feature'>
                    <img src="/images/icon-check.svg" alt="icon check" />
                    <p>100% data ownership</p>
                </div>
                <div className='feature'>
                    <img src="/images/icon-check.svg" alt="icon check" />
                    <p>Email reports</p>
                </div>
                </div>
            <div className="cta-container">
                <a href='#' role='button' className="cta-button">
                    Start my trial
                </a>
            </div>
        </section>
    </article>
}