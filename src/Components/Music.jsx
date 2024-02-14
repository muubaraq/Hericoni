import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {db} from '../config/firebase';
import {getDocs, collection} from 'firebase/firestore'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './CustomSwiper.css';
import { useEffect, useState } from 'react';
 
const  Music = () => {
    const [MusicList, setMusicList] = useState([]);
    const MusicCollectionRef = collection(db, "Music");

    useEffect(()=>{
        const getMusicList = async ()=>{
          //READ THE DATA
          // SET THE VIDEO LIST
          try{
          const data = await getDocs(MusicCollectionRef)
          const filteredData = data.docs.map((doc)=>({
            ...doc.data(),
             id: doc.id
          }))
          setMusicList(filteredData)
             } catch (err) {
              console.error(err)
             }
          };
          getMusicList()
        }, [MusicCollectionRef])
       //drop
      //  const [showLinks, setShowLinks] = useState(false);

      //  const handleDropdownToggle = () => {
      //    setShowLinks(!showLinks);
      //  };
      const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setSelectedDropdown(selectedDropdown === index ? null : index);
  };
  return (
    <>
    <section id="Music" className="my-12 ">
        <div>
            <h1 className="font-headerFont text-[#fff] lg:text-6xl text-3xl text-center mb-9">Music</h1>
        </div>
        <div className="mt-5">
        <Swiper
                slidesPerView={1}  // Default to 1 slide on small screens
                breakpoints={{
                  1024: {
                    slidesPerView: 2,  // Set to 2 slides on screens wider than 640px
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {MusicList.map((music, index) => (
                  <SwiperSlide key={index}>
                    <div className=" flex flex-col justify-center items-center">
                      <div className="wrapper w-[100%] md:w-[496px]">
                        <img src={music.ImgUrl} className="max-w-[100%]" alt="music cover art"/>
                      </div>
                      <div>
                        <div className="music-title my-3">
                        <h3 className="text-[#fff] font-headerFont text-3xl text-center">{music.Title}</h3>
                        </div>
                        
                        <div className="music-link flex">
                             <div className="dropdown-container flex flex-col justify-center items-center">
                              <button  onClick={() => handleDropdownToggle(index)} className="text-[#fff] font-primaryFont border border-[#fff] py-2 px-8 hover:bg-[#fff] hover:text-oxBlood transition mb-4 text-sm">
                                Show Links
                              </button>
                              {selectedDropdown === index && (
                                <div className="dropdown-links">
                                  <ul className="font-primaryFont">
                                  <a href={music.Link} className="text-[#fff] flex items-center gap-2">
                                    <img src={music.SpotifyIcon} alt="Spotify icon by Icons8" /><li className="text-sm ">Play</li>
                                  </a>
                                  <a href={music.Link2} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.AppleIcon} alt="Apple Music icon by Icons8" />
                                    <li className="text-sm ">Play</li>
                                  </a>
                                  <a href={music.Link3} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.AudiomackIcon} alt="Audiomack icon by Icons8" />
                                    <li className="text-sm">Play</li>
                                  </a>
                                  <a href={music.Link4} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.BoomIcon} alt="Boomplay icon by Icons8" />
                                    <li className="text-sm ">Play</li>
                                  </a>
                                  <a href={music.Link5} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.YoutubeMusicIcon} alt="Boomplay icon by Icons8" />
                                    <li className="text-sm ">Play</li>
                                  </a>
                                  </ul>
                                </div>
                              )}
                            </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
               </Swiper>
        </div>

    </section>
    </>
  )
}
export default  Music