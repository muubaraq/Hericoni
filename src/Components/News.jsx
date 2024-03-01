import { useState, useEffect } from 'react';
import Artist from '../assets/artis-img.png';
// import { FaSpotify } from "react-icons/fa6";

const News = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState('#000');

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  // Update color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <section className="md:px-6 py-4 mt-[105px] border border-oxBlood font-primaryFont" id="News">
     <div className="grid md:grid-cols-2 gap-5 items-center justify-between">
        <div className="border md:border-[white] rounded-s-2xl rounded-e-2xl relative">
            <div className=" text-[white] p-2  text-center md:hidden block absolute top-28 right-2 drop-shadow-[4px]">
                <small className="font-bold text-xs">Check out my new single </small>
                <p className="text-xl font-bold my-2 bg-[black] rounded w-20 mx-auto" style={{ color: color }}>Aje ale</p>
                <small className="font-bold text-xs me-1">ft Sheliroy<br/> distributed  by @distrokid</small>
                <small className="font-bold text-sm flex items-center gap-2">Live on Spotify Apple-Music Boomplay</small>
                <a href="https://open.spotify.com/track/4iozxSlZEaVqxRmSVDYWMt?si=K4SLdL85Tm62tvT763jrVw&context=spotify%3Aalbum%3A6Cb0aPH0oCjmH53y5d9Thx&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4iozxSlZEaVqxRmSVDYWMt%3Fsi%3DK4SLdL85Tm62tvT763jrVw%26context%3Dspotify%253Aalbum%253A6Cb0aPH0oCjmH53y5d9Thx&feature=organic&_branch_match_id=1018432330619630943&_branch_referrer=H4sIAAAAAAAAA82O3WqDQBCFn2a9VLurpi1ICbEh0ARCFEt7U9ZV6yb7l3U2MX36bkL6DoWBM8zMd%2BYMAGZ8jqLRaOD9JaTGhIKrQ%2FRirG4dg1ybTgUIJ70T4stZkQ9XBJE5wktf13X4RzMt%2FQgsZQevCdc%2FUyk%2BX2l9nHayrIuP9w0gshw5IsVbUq7b9WNayQzDqZplZG%2FrM8IZ0wq6yd8Vd1uEUzKnonHy1mWLJqbbVawXe7lKySVtn6phukWkQjT%2B9z%2BO6UHVeuYh6DsKzna5tt9UcfYL9WHpWYkBAAA%3D" target="_blank" rel="noreferrer" className={`hover:text-oxBlood  text-[9px] bg-[black] rounded px-1 py-1 w-20 mx-auto mt-2 block ${isHovered ? '' : 'animate-shake'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>click here</a>
            </div>
            <img src={Artist} className="h-[400px] rounded-s-2xl rounded-e-2xl " alt="Artist image"/>
        </div>
        <div className=" text-[white] p-2 md:text-start text-center md:block hidden">
            <small className="font-bold text-base">Check out my new single </small>
            <p className="text-4xl font-bold my-2" style={{ color: color }}>Aje ale</p>
            <small className="font-bold text-sm">ft Sheliroy </small><br/>
            <small className="font-bold text-sm">distributed  by @distrokid</small>
            <small className="font-bold text-sm flex items-center gap-2">Live on Spotify Apple-Music Boomplay</small>
            <a href="https://open.spotify.com/track/4iozxSlZEaVqxRmSVDYWMt?si=K4SLdL85Tm62tvT763jrVw&context=spotify%3Aalbum%3A6Cb0aPH0oCjmH53y5d9Thx&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4iozxSlZEaVqxRmSVDYWMt%3Fsi%3DK4SLdL85Tm62tvT763jrVw%26context%3Dspotify%253Aalbum%253A6Cb0aPH0oCjmH53y5d9Thx&feature=organic&_branch_match_id=1018432330619630943&_branch_referrer=H4sIAAAAAAAAA82O3WqDQBCFn2a9VLurpi1ICbEh0ARCFEt7U9ZV6yb7l3U2MX36bkL6DoWBM8zMd%2BYMAGZ8jqLRaOD9JaTGhIKrQ%2FRirG4dg1ybTgUIJ70T4stZkQ9XBJE5wktf13X4RzMt%2FQgsZQevCdc%2FUyk%2BX2l9nHayrIuP9w0gshw5IsVbUq7b9WNayQzDqZplZG%2FrM8IZ0wq6yd8Vd1uEUzKnonHy1mWLJqbbVawXe7lKySVtn6phukWkQjT%2B9z%2BO6UHVeuYh6DsKzna5tt9UcfYL9WHpWYkBAAA%3D" target="_blank" rel="noreferrer" className={`hover:text-oxBlood text-sm block ${isHovered ? '' : 'animate-shake'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >click here</a>
        </div>

    </div>
     </section>
    </>
  )
}

export default News