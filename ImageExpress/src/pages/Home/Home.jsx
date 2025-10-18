import './Home.css';
import Navbar from '../Navbar/Navbar';
import {A} from "@solidjs/router"

export default function Home(){
  console.log("Home component loaded");
  return (
    <>
    <Navbar />

    <div className='home-container'>

      <div className='ml-18'>
          <img src="public/images/BlueRedRect.png" alt="decor"/>
      </div>

      <div className='font-extrabold mt-5 text-4xl'>
          <p>Classify your favorite characters instantly</p>
      </div>

      <div className='font-[joan] text-xl mt-18 ml-15'>
        <p className=''>Upload a photo, choose the universe, and see the AI prediction in seconds.</p>
      </div>

      <div className='font-[inder] mt-9'>
        <A href="/imageUpload" target='_blank'><button type="button" class="!bg-[#2B6DE0] text-white pb-4">Get Started →</button></A>
      </div>
    </div>
    </>
  );
}