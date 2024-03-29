import { useState } from 'react';
import MusicPay from './MusicPay';
import SupportArtist from './SupportArtist';
import { FaDownload } from "react-icons/fa6";

const Digital = () => {
  const [showMusicPay, setShowMusicPay] = useState(false);
  const [showSupportArtist, setShowSupportArtist] = useState(false);
  //const [thankYouMessage, setThankYouMessage] = useState('');

  const handleDownloadMusic = () => {
    setShowMusicPay(prevState => !prevState); // Toggle showMusicPay state
    setShowSupportArtist(false); // Hide SupportArtist component
    //setThankYouMessage('An email will be sent to you.'); // Set thank you message
  };

  const handleSupportArtist = () => {
    setShowSupportArtist(prevState => !prevState); // Toggle showSupportArtist state
    setShowMusicPay(false); // Hide MusicPay component
    //setThankYouMessage('Thank you for your support!'); // Set thank you message
  };

  return (
    <div className="container  text-sm justify-center mx-auto">
      <div className="text-center mt-10 flex justify-center items-center">
        <button className="flex items-center justify-center gap-2 text-oxBlood bg-[#fff] hover:bg-oxBlood hover:text-[#fff] transition py-2 px-4" onClick={handleDownloadMusic}>Download Music <FaDownload /></button>
        <button className="text-oxBlood border border-[#000] bg-[#fff] hover:bg-oxBlood hover:text-[#fff] transition py-2 px-4 ml-4" onClick={handleSupportArtist}>Support Artist</button>
      </div>
      {showSupportArtist && <SupportArtist  />}
      {showMusicPay && <MusicPay />}
      {/* {thankYouMessage && <div className="text-center text-[#fff] my-4 text-green-500 font-bold">{thankYouMessage}</div>} */}
      {/* <MusicPay/> */}
      {/* <SupportArtist/> */}
      
    </div>
  );
};

export default Digital;
