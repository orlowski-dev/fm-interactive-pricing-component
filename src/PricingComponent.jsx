import './PricingComponent.css';

export default function PricingComponent() {
    return <article className="pricing-component">
        <section className="top-section">
            <div className="pageviews-container">
                <h2>100K Pageviews</h2>
            </div>
            <div className="slider-container">
                <input type="range" id="pricing-slider"/>
            </div>
            <div className="price-container">
                <h2 id='price-amount' className='price-amount'>$16.00</h2>
                <p>/ month</p>
            </div>
            <div className="billing-container">
                <p>Monthly Billing</p>
                <div className='custom-checkbox'>
                    <input type="checkbox" id="billing-yearly-checkbox"/>
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