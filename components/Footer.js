// components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              aria-label="Email"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <div>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="footer-currency">
            <h4>CURRENCY</h4>
            <p>
              <span role="img" aria-label="US flag">
                
              </span>{" "}
              USD
            </p>
            <small>
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </small>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-middle">
        <div className="footer-col">
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col footer-follow">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>📸</span>
            <span>💼</span>
          </div>

          <h4 className="accepts-title">mettä muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src="/icons/google-pay_6124998.png" alt="GPay" />
            <img src="/icons/round_16174195.png" alt="Mastercard" />
            <img src="/icons/paypal_888920.png" alt="PayPal" />
            <img src="/icons/card_15470634.png" alt="Amex" />
            <img src="/icons/mobile-payment_9741996.png" alt="Apple Pay" />
            <img src="/icons/stripe_5968204.png" alt="Stripe" />
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
