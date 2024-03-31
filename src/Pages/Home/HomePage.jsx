import Image from "../../assets/logo.jpg";
import Image2 from "../../assets/wave-haikei1.png";
import Image3 from "../../assets/sphere-with-trees.jpg";
import Image4 from "../../assets/village.jpg";
import { IoLocation } from "react-icons/io5";
import './Home.css'
import MultiSlider from "./Slider/MultiSlider";



const HomePage = () => {
  return (
    <div className="max-w-[1400px] mx-auto m-10">

      <div className="flex">

        <div className="w-[98%] ml-10">
          <div className="flex items-center justify-between">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Book</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
      
            <img src={Image} alt="" />
          </div>
          <img src={Image4} alt="" className="mt-16 ml-10"/>
          <div className="-mt- flex flex-wrap gap-4 relative w-[100%]">
              <input type="text" id="search-field" placeholder="               Neereye Guduserey? "
                class="w-full rounded-full border-gray-200  shadow-sm sm:text-sm py-4 px-5 text-black"/>
                <input type="date" className="absolute inset-y-2 grid w-22 place-content-center start-[300px]"/>
                <input type="date" className="absolute inset-y-2 grid w-22 place-content-center start-[450px]"/>

            <span className="absolute inset-y-0 grid w-20 place-content-center text-gray-500">
                <button onclick="handleSearch()" id="search-btn"
                    className="bg-[#797DFC] px-4 text-center py-2 rounded-full w-full text-white btn font-bold"><IoLocation size={15}></IoLocation></button>
            </span>


          </div>
 

        </div>


        <div className="bg-no-repeat bg-cover  lg:h-[500px] w-full -mt-16 relative" style={{ backgroundImage: `url(${Image2})` }}>
          <div className="absolute left-[250px] top-[120px] z-10 border-2 border-gray-700 rounded-full p-5">

         <img src={Image3} alt="" className="h-full w-full rounded-full border-2 border-gray-700 p-5" style={{ animation: "spin 7s linear infinite" }}/>
        </div>
        </div>
      </div>
      <div className="w-[50%] ml-10 absolute -mt-40">
        <MultiSlider></MultiSlider>
        </div>
    </div>   
  );
};

export default HomePage;
