
// Import Swiper React components

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



const Video = () => {
   const [VideoList, setVideoList] = useState([]);
   const VideoCollectionRef = collection(db, "Videos")
   
  useEffect(()=>{
    const getVideoList = async ()=>{
      //READ THE DATA
      // SET THE VIDEO LIST
      try{
      const data = await getDocs(VideoCollectionRef)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
         id: doc.id
      }))
      setVideoList(filteredData)
         } catch (err) {
          console.error(err)
         }
      };
      getVideoList()
    }, [VideoCollectionRef])
   
  return (
    <>
        <section className="my-9 border border-b-oxBlood" id="Video"> 
            <div>
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
                {VideoList.map((video, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full flex justify-center">
                      <iframe
                        width="680"
                        height="355"
                        src={video.youtubeLink}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </SwiperSlide>
                ))}
               </Swiper>
          </div>
          <div className="view-more text-[#fff] font-primaryFont font-semibold text-center my-14 text-lg ">
            <a href="https://www.youtube.com/@Hericoni" target='_blank' rel="noreferrer"  className="inline-block border border-[#fff] py-3 px-6 hover:bg-[#fff]  transition hover:text-oxBlood">WATCH MORE VIDEOS</a>
           </div>

        </section>
    </>
  )
}

export default Video