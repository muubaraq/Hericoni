import  { useState, useRef } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import emailjs from '@emailjs/browser';

const SupportArtist = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    trackName: '',
    amount: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(true);
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const [showBankTransferPopup, setShowBankTransferPopup] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if amount is less than 3000
    if (formData.amount < 3000) {
      alert('Amount must be at least 3000');
      return;
    }
  
    handleShowPayment();
    sendEmail()
  };

  const handleBankTransferAndSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    handleBankTransferClick();
    handleSubmit(e);
  };

  

  const handleShowPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setShowGenerateButton(false);
      setShowPaymentButton(true);
      setLoading(false);
    }, 2000);
  };

  const handlePaymentSuccess = (response) => {
    console.log(response)
    if(response.status !== "successful"){
      console.log("Failed Transaction")
    } else {
      console.log("Success");
      setShowThankYouMessage(true);
    }
    closePaymentModal();
  };

  const handlePaymentClose = () => {
    console.log("User closed modal");
  };

  const handleBankTransferClick = () => {
    setShowBankTransferPopup(true); 
  };

  const handleConfirmPayment = () => {
   
    setShowThankYouMessage(true);
    setShowBankTransferPopup(false);
  };

  const handleClosePopup = () => {
    setShowBankTransferPopup(false);
  };


  const form = useRef();

  const sendEmail = () => {
   // e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
         publicKey:import.meta.env.VITE_PUBLIC_KEY,
       })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent");
          // e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <section className="">
      {/* Thank You Message */}
      {showThankYouMessage && (
        <div className="min-h-screen flex flex-col justify-center items-center mt-2 bg-green-500 py-4 w-2/5 mx-auto text-[#fff] rounded text-center text-2xl ">
          <p className="text-[green] text-xl">Thank you for your support 🙂.</p>
        </div>
      )}

      {/* Bank Transfer Popup */}
      {showBankTransferPopup && (
        <div className="bg-[#000000e3] p-4 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 font-primaryFont text-[white]">
          <div className="bg-[black] p-6 rounded shadow-lg">
          <button className="absolute top-2 right-2 text-[white]" onClick={handleClosePopup}>close</button>
            <p className="text-xl ">Payment Details</p>
            <p className="font-bold text-base mt-4">Account Name</p>
            <small className="mb-3 block">Twenty Nine Twelve Resource Ltd</small>
            <p className="font-bold text-base ">Account Number</p>
            <small className="mb-3 block">2003663839</small>
            <p className="font-bold  text-base">Bank</p>
            <small  className="mb-3 block">Globus Bank</small>
            <p className="font-bold text-base">Remark or Description</p>
            <small className=" mb-3 block">Email addres used while filling the form page</small>
            <button className="bg-[green] hover:bg-[#447c44e1] text-white px-4 py-2 rounded mt-4" onClick={handleConfirmPayment}>Confirm Payment</button>
          </div>
        </div>
      )}

      {/* Payment Form */}
      <div className={`support-track flex flex-col min-h-screen justify-center text-sm items-center font-primaryFont font-bold max-w-xl mx-auto ${showThankYouMessage ? 'hidden' : ''}`}>
      <p className="text-[white] mb-2 italic">Kindly fill the form and pay to support Artist</p>
        <form className="flex flex-col w-full gap-3 px-4 shadow-md" onSubmit={handleSubmit} ref={form}>
         
          {/*  input fields here */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="py-4 pl-3 border-0 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="py-4 pl-3"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number (Optional)"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="py-4 pl-3"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            min="2000"
            required
            className="py-4 pl-3"
          />
          {showGenerateButton && (
            <button className="bg-oxBlood py-4 w-2/5 mx-auto text-[#fff] rounded hover:bg-oxBlood hover:border hover:border-[#fff] transition" type="button" onClick={handleSubmit}>
               {loading ? 'Loading...' : 'Pay Online'}
             </button>
          )}
        </form>
        {showPaymentButton && (
          <FlutterWaveButton className="mt-2 bg-oxBlood py-4 w-2/5 mx-auto text-[#fff] rounded hover:bg-oxBlood hover:border hover:border-[#fff] transition"
            {...{
              public_key: import.meta.env.VITE_FLUTTER_PUKEY,
              tx_ref: Date.now(),
              amount: formData.amount,
              currency: 'NGN',
              payment_options: 'card,mobilemoney,ussd',
              customer: {
                email: formData.email,
                phone_number: formData.phoneNumber,
                name: formData.fullName,
              },
              customizations: {
                title: 'Hericoni Music',
                description: 'Payment for music ',
                logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
              },
              text: 'Link To Pay ',
              callback: handlePaymentSuccess,
              onClose: handlePaymentClose,
            }}
          />
        )}
        {/* Pay with Bank Transfer Button */}
      {!showThankYouMessage && (
        <button className="bg-oxBlood py-4 w-2/5 mx-auto text-[#fff] rounded hover:bg-oxBlood hover:border hover:border-[#fff] transition mt-2" onClick={handleBankTransferAndSubmit}>Pay with Bank Transfer</button>
      )}
      </div>

      
    </section>
    </>
  )
}

export default SupportArtist