import './Home.css';
import Navbar from '../Navbar/Navbar';

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

      <div className='mt-9'>
        <button class='text-black pb-4'>Get Started →</button>
      </div>
    </div>
    </>
  );
}