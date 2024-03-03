import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {db} from '../config/firebase';
import {getDocs, collection, query, orderBy} from 'firebase/firestore';
import { Link} from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './CustomSwiper.css';
import { useEffect, useState } from 'react';
 
const  Music = () => {
    const [MusicList, setMusicList] = useState([]);
    const MusicCollectionRef = collection(db, "Music");

    // useEffect(()=>{
    //     const getMusicList = async ()=>{
    //       //READ THE DATA
    //       // SET THE MUSIC LIST
    //       try{
    //       const data = await getDocs(MusicCollectionRef)
    //       const filteredData = data.docs.map((doc)=>({
    //         ...doc.data(),
    //          id: doc.id
    //       }))
    //       setMusicList(filteredData)
    //          } catch (err) {
    //           console.error(err)
    //          }
    //       };
    //       getMusicList()
    //     }, [MusicCollectionRef])

   
    useEffect(() => {
      const getMusicList = async () => {
          try {
              // Query Firestore for music, ordering by timestamp in descending order
              const querySnapshot = await getDocs(query(
                  MusicCollectionRef,
                  orderBy('addedAt', 'desc')
              ));

              // Map query snapshot to array of music items
              const filteredData = querySnapshot.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id
              }));

              // Set the music list state
              setMusicList(filteredData);
          } catch (error) {
              console.error('Error getting latest music:', error);
          }
      };

      getMusicList();
  },);

  // Render music component with musicList state


  
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
                    slidesPerView: 3,  // Set to 2 slides on screens wider than 640px
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {MusicList.map((music, index) => (
                  <SwiperSlide key={index}>
                    <div className=" flex flex-col justify-center items-center">
                      <div className="wrapper w-[100%] md:w-[400px]">
                        <img src={music.ImgUrl} className="max-w-[100%]" alt="music cover art"/>
                      </div>
                      <div>
                        <div className="music-title my-3">
                        <h3 className="text-[#fff] font-headerFont text-3xl text-center">{music.Title}</h3>
                        </div>
                        
                        <div className="music-link flex justify-center items-center">
                             <div className="dropdown-container flex flex-col justify-center items-center">
                              <button  onClick={() => handleDropdownToggle(index)} className="text-[#fff] font-primaryFont border border-[#fff] py-2 px-8 hover:bg-[#fff] hover:text-oxBlood transition mb-4 text-sm">
                                Play
                              </button>
                              {selectedDropdown === index && (
                                <div className="dropdown-links">
                                  <ul className="font-primaryFont">
                                  <a href={music.Link} className="text-[#fff] flex items-center gap-2">
                                    <img src={music.SpotifyIcon} alt="Spotify icon by Icons8" /><li className="text-sm ">Spotify</li>
                                  </a>
                                  <a href={music.Link2} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.AppleIcon} alt="Apple Music icon by Icons8" />
                                    <li className="text-sm ">Apple Music</li>
                                  </a>
                                  <a href={music.Link3} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.AudiomackIcon} alt="Audiomack icon by Icons8" />
                                    <li className="text-sm">Audiomack</li>
                                  </a>
                                  <a href={music.Link4} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.BoomIcon} alt="Boomplay icon by Icons8" />
                                    <li className="text-sm ">Boomplay</li>
                                  </a>
                                  <a href={music.Link5} className="text-[#fff]  flex items-center gap-2">
                                    <img src={music.YoutubeMusicIcon} alt="Boomplay icon by Icons8" />
                                    <li className="text-sm ">Youtube Music</li>
                                  </a>
                                  <Link to="/Digital"><li className="flex items-center justify-center gap-2 mt-2 bg-[black] transition text-[white] rounded text-center py-2 hover:bg-oxBlood hover:text-[white] text-sm">Digital Download <FaDownload />
</li></Link>
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