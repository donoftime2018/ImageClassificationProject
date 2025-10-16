import './Home.css';
import Navbar from '../Navbar/Navbar';

export default function Home(){
  console.log("Home component loaded");
  return (
    <>
    <Navbar />

    <div className='home-container'>
      <div className='ml-15'>
          <img src="public/images/BlueRedRect.png" alt="decor"/>
      </div>
      <div className='font-extrabold mt-5 text-4xl'>
          <p>Classify your favorite characters instantly</p>
      </div>
    </div>
    </>
  );
}