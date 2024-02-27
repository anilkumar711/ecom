import Main from "./../Components/Main/Main";
import { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle payment processing
    console.log('Form submitted:', formData);
    // Example: You may integrate with a payment processing API here
  };

  return (
    <Main>
    <div className="payment-page">
    <div className="container col-md-6">
      <h2>Complete Your Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-control"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className="form-control"
            value={formData.expiryDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-2 mb-2">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="form-control"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Pay Now</button>
      </form>
    </div>
    </div>
    </Main>
  );
};

export default PaymentPage;
