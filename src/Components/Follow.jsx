import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa6";


const Follow = () => {
  return (
    <>
     <footer id="Follow" className="py-9">
     <div className="font-headerFont text-[#fff] lg:text-6xl text-3xl text-center my-5  ">
                <h2>Follow</h2>
        </div>
        <div className="icons text-[#fff] max-w-2xl mx-auto flex items-center justify-center gap-5 md:text-3xl text-xl">
            <a href="https://www.instagram.com/hericoni_officialpage/"><FaSquareInstagram/></a>
            <a href="https://www.x.com/hericoni1"><FaXTwitter/></a>
            <a href="https://wwww.youtube.com/@hericoni"><FaYoutube/></a>

        </div>
        <div className="copyright text-[#fff] font-primaryFont ">
            <div className="copyright-icon flex justify-center items-center gap-2 mt-4 font-bold">
            <FaCopyright />
            <p className="uppercase">2024 Hericoni Music. All rights reserved</p>
            </div>
        </div>
     </footer>
    </>
  )
}

export default Follow