import { Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {FaTimes} from 'react-icons/fa';
//import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
    const[click, setClick] = useState(false);
    const handleClick = ()=>setClick(!click);
    const location = useLocation();
   
  useEffect(()=>{
       console.log({hash:location.hash})
       if(location.hash){
        const element = document.querySelector(location.hash)
        console.log({element})
        if(element){
          element.scrollIntoView({behavior:"smooth"})
        }
       }
    },[location.hash])
  //const location = use
  const closeMobileMenu = () => setClick(false);

   // Mobile menu
   const content = <>
   {/* a top of 16 default but will play round with it */}
   <div className="lg:hidden block absolute top-16 z-50 w-full left-0 right-0 bg-[#000] transition font-primaryFont min-h-screen text-[#fff]">
   <ul className="text-center text-xl p-20 font-primaryFont font-bold">
   <Link to="/News" onClick={ closeMobileMenu}> <li className="my-9 hover:text-oxBlood transition">News</li></Link> 
        <Link to="/#Video" onClick={ closeMobileMenu}> <li className="my-9 hover:text-oxBlood transition">Videos</li></Link> 
         <Link to="/#Music" onClick={ closeMobileMenu}><li className="my-9 hover:text-oxBlood transition ">Music</li></Link>   
         <Link to="/Digital" onClick={ closeMobileMenu}><li className="my-9 transition hover:text-oxBlood">Support Artist</li></Link>
         <a href="https://www.instagram.com/hericoni_officialpage/" target="_blank" rel="noreferrer" onClick={ closeMobileMenu}><li className="my-9  transition hover:text-oxBlood" onClick={ closeMobileMenu}>Gallery</li></a>
         <Link to="/#Tour" onClick={ closeMobileMenu}><li onClick={ closeMobileMenu} className="my-9  transition hover:text-oxBlood">Tour</li></Link>
         <Link to="/#Follow" onClick={ closeMobileMenu}><li className="my-9  transition hover:text-oxBlood">Follow</li></Link>
      
      </ul>
   </div>
      
   </>
  return (
    <nav className=" bg-[black] w-full ">
    <div className="h-10vh flex justify-between items-center z-50 lg:py-5 px-10 py-4 font-primaryFont text-[.85rem] text-[#fff]">
     <div className="lg:flex lg:flex-row flex flex-col flex-1   gap-4 mr-[20px] md:mr-0 shrink font-headerFont">
       <a href="/" className="lg:text-5xl text-3xl hover:text-oxBlood transition ">Hericoni</a>
      
     </div>
     <div className=" items-center justify-end lg:block hidden">
       <div className="flex-10">
          <ul className="flex gap-5 md:text-[16px] text-[9px]  items-center font-primaryFont font-bold">
          <Link to="/News"><li className="transition hover:text-oxBlood flex items-center gap-2">News  {' '}<span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></Link>
             <Link to="/#Video"><li className="transition hover:text-oxBlood flex items-center gap-2">Videos <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></Link>
             <Link to="/#Music"><li className="transition hover:text-oxBlood flex items-center gap-2">Music <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></Link>
             <Link  to="/Digital"><li className="transition hover:text-oxBlood flex items-center gap-2">Support Artist {' '}<span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></Link>
             <a href="https://www.instagram.com/hericoni_officialpage/" target="_blank" rel="noreferrer"><li className="transition hover:text-oxBlood flex items-center gap-2">Gallery <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></a>
             <Link to="/#Tour"><li className="transition hover:text-oxBlood flex items-center gap-2">Tour <span className="inline-block w-7 h-[2px] bg-[#fff]"></span></li></Link>
             <Link to="/#Follow"><li className="transition hover:text-oxBlood ">Follow</li></Link>
          </ul>
       </div>
     </div>
     <div>
       {click && content}
     </div>
     <button className="block lg:hidden transition" onClick={handleClick}>
       {click ? <FaTimes className="lg:text-4xl text-2xl"/> : <GiHamburgerMenu className="lg:text-4xl text-2xl"/>}
     </button>
    </div>
 </nav>
  )
}

export default Nav