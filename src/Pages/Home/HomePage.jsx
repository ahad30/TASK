import Image from "../../assets/logo.jpg";
import Image2 from "../../assets/wave-haikei1.png";
import Image3 from "../../assets/sphere-with-trees.jpg";
import './Home.css'
const HomePage = () => {
  return (
    <div className="max-w-[1400px] mx-auto m-10">

      <div className="flex">
        <div className="flex items-center w-[60%] mx-auto justify-between -mt-[400px]  bg-base-100">
          <div className="">
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
          </div>
          <div className="">
            <img src={Image} alt="" />
          </div>

        </div>

        <div className="bg-no-repeat bg-cover h-[650px] lg:h-[500px] w-full -mt-16 relative" style={{ backgroundImage: `url(${Image2})` }}>
          <div className="absolute left-[350px] top-[120px] z-10 border-2 border-gray-700 rounded-full p-5">
         <img src={Image3} alt="" className="h-[400px] w-[400px] rounded-full border-2 border-gray-700 p-5" style={{ animation: "spin 7s linear infinite" }}/>
          </div>
        </div>
      </div>

      


    </div>   
  );
};

export default HomePage;
