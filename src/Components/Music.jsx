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
                      <div className="wrapper w-[496px]">
                        <img src={music.ImgUrl} className="max-w-[100%]" alt="music cover art"/>
                      </div>
                      <div>
                        <div className="music-title my-3">
                        <h3 className="text-[#fff] font-headerFont text-3xl text-center">{music.Title}</h3>
                        </div>
                        
                        <div className="music-link flex">
                        <a href={music.Link} className="text-[#fff]"><img src={music.SpotifyIcon} alt="Spotify icon by Icons8"/></a>
                        <a href={music.Link2} className="text-[#fff]"><img src={music.AppleIcon} alt="Apple Music icon by Icons8"/></a>
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