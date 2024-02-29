import Artist from '../assets/artis-img.png'

const News = () => {
  return (
    <>
     <section className="px-6 py-4 mt-[105px] border border-oxBlood font-primaryFont" id="News">
     <div className="grid md:grid-cols-2 gap-5 items-center justify">
        <div className="border border-[white] rounded-s-2xl rounded-e-2xl relative">
            <div className=" text-[white] p-2  text-center md:hidden block absolute top-24 right-2 drop-shadow-[4px]">
                <small className="font-bold text-xs">Pre-order {"Hericoni's"} new single </small>
                <p className="text-xl font-bold my-2 bg-[black] rounded w-20 mx-auto">Aje ale</p>
                <small className="font-bold text-xs me-1">featuring Sheliroy<br/>  (dropping on first March 2024) by</small>
                <a href="https://distrokid.com/hyperfollow/hericoni/aje-ale-feat-sheliroy-2" target="_blank" rel="noreferrer" className="hover:text-oxBlood text-xs block bg-[black] rounded px-1 py-1 w-20 mx-auto mt-2" >clicking here</a>
            </div>
            <img src={Artist} className="h-[400px] rounded-s-2xl rounded-e-2xl"/>
        </div>
        <div className=" text-[white] p-2 md:text-start text-center md:block hidden">
            <small className="font-bold text-base">Pre-order {"Hericoni's"} new single </small>
            <p className="text-4xl font-bold my-2">Aje ale</p>
            <small className="font-bold text-sm">featuring Sheliroy (dropping on first March 2024) by </small>
            <a href="https://distrokid.com/hyperfollow/hericoni/aje-ale-feat-sheliroy-2" target="_blank" rel="noreferrer" className="hover:text-oxBlood text-sm" >clicking here</a>
        </div>

    </div>
     </section>
    </>
  )
}

export default News