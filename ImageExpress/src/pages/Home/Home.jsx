import './Home.css';
import Navbar from '../Navbar/Navbar';
import {A, useNavigate} from "@solidjs/router"
import { onCleanup, onMount } from 'solid-js';
import BlueRedRect from "../../assets/BlueRedRect.png"

export default function Home(){
  const navigate = useNavigate();

  function goToCategory(){
    navigate("/categorySelection");
  }

  onMount(()=>{
    document.body.style.background = "linear-gradient(#2B6DE0, #E53935)";
    document.title = "Image Express"
  })

  onCleanup(()=>{
    document.body.style.background = ""
    document.title = ""
  })

  console.log("Home component loaded");
  return (
    <>
    <Navbar />

    <div className='home-container'>

      <div className='ml-18'>
          <img src={BlueRedRect} alt="decor"/>
      </div>

      <div className='font-extrabold mt-5 text-4xl'>
          <p>Classify your favorite characters instantly</p>
      </div>

      <div className='font-[joan] text-xl mt-18 ml-15'>
        <p className=''>Upload a photo, choose the universe, and see the AI prediction in seconds.</p>
      </div>

      <div className='font-[inder] mt-9'>
        <button onClick={goToCategory} type="button" class="!bg-[#2B6DE0] text-white pb-4">Get Started →</button>
      </div>
    </div>
    </>
  );
}