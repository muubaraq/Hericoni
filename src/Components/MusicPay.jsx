
// import { useState } from 'react';
// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

// const MusicPay = () => {
//     const initialFormData = {
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         trackName: '',
//         amount: ''
//       };
    
//       const [formData, setFormData] = useState(initialFormData);
//       const [showGenerateButton, setShowGenerateButton] = useState(true);
//       const [showPaymentButton, setShowPaymentButton] = useState(false);
//       const [loading, setLoading] = useState(false);
    
//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//           ...prevData,
//           [name]: value
//         }));
//       };
    
//       const handleShowPayment = () => {
//         setLoading(true);
//         setTimeout(() => {
//           setShowGenerateButton(false);
//           setShowPaymentButton(true);
//           setLoading(false);
//         }, 2000); // 2 seconds delay before showing payment button
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // Check if amount is less than 2000
//         if (formData.amount < 2000) {
//           alert('Amount must be at least 2000');
//           return;
//         }
//         // Show the payment button
//         handleShowPayment();
//       };
    
//       const handlePaymentSuccess = (response) => {
//         if(response.status !== "completed"){
//           console.log("Failed Transaction")
//         } else {
//           console.log("Success");
//           resetForm(); // Reset the form fields
//         }
//         closePaymentModal(); // this will close the modal programmatically
//       };
    
//       const handlePaymentClose = () => {
//         console.log("User closed modal");
//       };
    
//       const resetForm = () => {
//         setFormData(initialFormData);
//       };
//   return (
//     <>
//        <section className="">
//       <div className="support-track flex flex-col min-h-screen justify-center items-center font-primaryFont font-bold max-w-xl mx-auto">
//         <form className="flex flex-col w-full gap-3 px-4 shadow-md" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//             className="py-4 pl-3 border-0 rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="py-4 pl-3"
//           />
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Phone Number (Optional)"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             className="py-4 pl-3"
//           />
//           <input
//             type="text"
//             name="trackName"
//             placeholder="Name of the Track"
//             value={formData.trackName}
//             onChange={handleInputChange}
//             required
//             className="py-4 pl-3"
//           />
//           <input
//             type="number"
//             name="amount"
//             placeholder="Amount"
//             value={formData.amount}
//             onChange={handleInputChange}
//             min="2000"
//             required
//             className="py-4 pl-3"
//           />
//            {showGenerateButton && (
//             <button className="bg-oxBlood py-4 w-2/5 mx-auto text-[#fff] rounded hover:bg-oxBlood hover:border hover:border-[#fff] transition" type="button" onClick={handleSubmit}>
//               {loading ? 'Loading...' : 'Generate Payment Link'}
//             </button>
//           )}
//         </form>
//         {showPaymentButton && (
//           <FlutterWaveButton className="mt-2 bg-oxBlood py-4 w-2/5 mx-auto text-[#fff] rounded hover:bg-oxBlood hover:border hover:border-[#fff] transition"
//             {...{
//               public_key: 'FLWPUBK_TEST-7609d21ebb68807d066bcb4944ab096d-X',
//               tx_ref: Date.now(),
//               amount: formData.amount,
//               currency: 'NGN',
//               payment_options: 'card,mobilemoney,ussd',
//               customer: {
//                 email: formData.email,
//                 phone_number: formData.phoneNumber,
//                 name: formData.fullName,
//                 track_name: formData.trackName,
//               },
//               customizations: {
//                 title: 'Hericoni Music',
//                 description: 'Payment for music ',
//                 logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//               },
//               text: 'Link To Pay ',
//               callback: handlePaymentSuccess,
//               onClose: handlePaymentClose,
//             }}
//           />
//         )}
//       </div>
//     </section>
//     </>
//   )
// }

// export default MusicPay

import { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const MusicPay = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if amount is less than 2000
    if (formData.amount < 2000) {
      alert('Amount must be at least 2000');
      return;
    }
    // Show the payment button
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setShowPaymentButton(true);
    // }, 2000); // 2 seconds delay before showing payment button
    handleShowPayment();
  };
  const handleShowPayment = () => {
            setLoading(true);
            setTimeout(() => {
              setShowGenerateButton(false);
              setShowPaymentButton(true);
              setLoading(false);
            }, 2000); // 2 seconds delay before showing payment button
          };

  const handlePaymentSuccess = (response) => {
    if(response.status !== "completed"){
      console.log("Failed Transaction")
    } else {
      console.log("Success");
      setShowThankYouMessage(true); // Show thank you message
    }
    closePaymentModal(); // this will close the modal programmatically
  };

  const handlePaymentClose = () => {
    console.log("User closed modal");
    setShowThankYouMessage(true); // Show thank you message
  };

  return (
    <section className="">
      {showThankYouMessage && (
        <div className="min-h-screen flex flex-col justify-center items-center mt-2 bg-green-500 py-4 w-2/5 mx-auto text-[#fff] rounded text-center text-2xl ">
          <p className="text-[green] text-xl">Thank you for the payment 🙂.</p>
          <p>An 📨 Email with the music link will be sent to you soon.</p>
        </div>
      )}
      <div className={`support-track flex flex-col min-h-screen justify-center items-center font-primaryFont font-bold max-w-xl mx-auto ${showThankYouMessage ? 'hidden' : ''}`}>
        <form className="flex flex-col w-full gap-3 px-4 shadow-md" onSubmit={handleSubmit}>
          {/* Input fields */}
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
            type="text"
            name="trackName"
            placeholder="Name of the Track"
            value={formData.trackName}
            onChange={handleInputChange}
            required
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
               {loading ? 'Loading...' : 'Generate Payment Link'}
             </button>
          )}
        </form>
        {showPaymentButton && (
          <FlutterWaveButton className="mt-2 bg-oxBlood py-4 w-2/5 mx-auto text-[#fff] rounded hover:bg-oxBlood hover:border hover:border-[#fff] transition"
            {...{
              public_key: 'FLWPUBK_TEST-7609d21ebb68807d066bcb4944ab096d-X',
              tx_ref: Date.now(),
              amount: formData.amount,
              currency: 'NGN',
              payment_options: 'card,mobilemoney,ussd',
              customer: {
                email: formData.email,
                phone_number: formData.phoneNumber,
                name: formData.fullName,
                track_name: formData.trackName,
              },
              customizations: {
                title: 'Hericoni Music',
                description: 'Payment for Support/music ',
                logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
              },
              text: 'Link To Pay ',
              callback: handlePaymentSuccess,
              onClose: handlePaymentClose,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default MusicPay;
