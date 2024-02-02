// import { Link } from 'react-router-dom';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa';

const Nav = () => {
    const[click, setClick] = useState(false);
   const handleClick = ()=>setClick(!click);

   // Mobile menu
   const content = <>
   {/* a top of 16 default but will play round with it */}
   <div className="lg:hidden block absolute top-16 z-50 w-full   left-0 right-0 bg-[#000] transition font-primaryFont min-h-screen text-[#fff]">
   <ul className="text-center text-xl p-20 font-primaryFont font-bold">
        < a href="#Videos"> <li className="my-9 hover:text-oxBlood transition">Videos</li></a> 
         <a href="#Music"><li className="my-9 hover:text-oxBlood transition ">Music</li></a>   
         <a href="#Digital"><li className="my-9 transition hover:text-oxBlood">Digital Download</li></a>
         <a href="#Gallery"><li className="my-9  transition hover:text-oxBlood">Gallery</li></a>
         <a href="#Tour"><li className="my-9  transition hover:text-oxBlood">Tour</li></a>
         <a href="#Follow"><li className="my-9  transition hover:text-oxBlood">Follow + Join</li></a>
      
      </ul>
   </div>
      
   </>
  return (
    <nav className="">
    <div className="h-10vh flex justify-between items-center z-50 lg:py-5 px-10 py-4 font-primaryFont text-[.85rem] text-[#fff]">
     <div className="lg:flex lg:flex-row flex flex-col flex-1   gap-4 mr-[20px] md:mr-0 shrink font-headerFont">
       <a href="/" className="text-5xl hover:text-oxBlood transition ">Hericoni</a>
      
     </div>
     <div className=" items-center justify-end lg:block hidden">
       <div className="flex-10 ">
          <ul className="flex gap-5 md:text-[16px] text-[9px]  items-center font-primaryFont font-bold">
             <a href="#Videos"><li className="transition hover:text-oxBlood flex items-center gap-2">Videos <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></a>
             <a href="#Music"><li className="transition hover:text-oxBlood flex items-center gap-2">Music <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></a>
             <a href="#Digital"><li className="transition hover:text-oxBlood flex items-center gap-2">Digital Download <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></a>
             <a href="#Gallery"><li className="transition hover:text-oxBlood flex items-center gap-2">Gallery <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></a>
             <a href="#Tour"><li className="transition hover:text-oxBlood flex items-center gap-2">Tour <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></a>
             <a href="#Follow"><li className="transition hover:text-oxBlood ">Follow + Join</li></a>
          </ul>
       </div>
     </div>
     <div>
       {click && content}
     </div>
     <button className="block lg:hidden transition" onClick={handleClick}>
       {click ? <FaTimes className="text-4xl"/> : <GiHamburgerMenu className="text-4xl"/>}
     </button>
    </div>
 </nav>
  )
}

export default Nav