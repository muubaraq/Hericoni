import { useState } from "react";

const News = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section>
        <div className="wrapper max-w-7xl mx-auto mt-20 text-[white]  ">
        <h1 className="font-headerFont font-bold text-xl  underline">Latest News</h1>
        <div className="news-info mt-8">
            <p className="text-base">Hericoni released a new single titled <span className="font-bold">{'"Aje-ale" '}</span> ft sheliroy on March 1st.</p>
            <p className="text-base">Distributed by @distrokid</p>
            <p className="text-base">Live on Spotify. Apple-Music. Boomplay</p>
            <p className="text-sm">
            <a href="https://open.spotify.com/track/4iozxSlZEaVqxRmSVDYWMt?si=K4SLdL85Tm62tvT763jrVw&context=spotify%3Aalbum%3A6Cb0aPH0oCjmH53y5d9Thx&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4iozxSlZEaVqxRmSVDYWMt%3Fsi%3DK4SLdL85Tm62tvT763jrVw%26context%3Dspotify%253Aalbum%253A6Cb0aPH0oCjmH53y5d9Thx&feature=organic&_branch_match_id=1018432330619630943&_branch_referrer=H4sIAAAAAAAAA82O3WqDQBCFn2a9VLurpi1ICbEh0ARCFEt7U9ZV6yb7l3U2MX36bkL6DoWBM8zMd%2BYMAGZ8jqLRaOD9JaTGhIKrQ%2FRirG4dg1ybTgUIJ70T4stZkQ9XBJE5wktf13X4RzMt%2FQgsZQevCdc%2FUyk%2BX2l9nHayrIuP9w0gshw5IsVbUq7b9WNayQzDqZplZG%2FrM8IZ0wq6yd8Vd1uEUzKnonHy1mWLJqbbVawXe7lKySVtn6phukWkQjT%2B9z%2BO6UHVeuYh6DsKzna5tt9UcfYL9WHpWYkBAAA%3D" target="_blank" rel="noreferrer" className={`hover:text-oxBlood  bg-[black] rounded  block shadow-oxBlood ${isHovered ? '' : 'animate-shake'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>Listen here</a>
            </p>
        </div>
        </div>
        
      </section>
    </>
  )
}

export default News