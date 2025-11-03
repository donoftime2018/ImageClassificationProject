import "./About.css";
import {A, useNavigate} from "@solidjs/router"
import { onMount, onCleanup } from "solid-js";

export default function About(){
    console.log("About component loaded");
    const navigate = useNavigate();

    onMount(()=>{
        document.title = "About Image Express"
        document.body.style.background = "white"
    })

    onCleanup(()=>{
        document.body.style.background = ""
        document.title = ""
    })
        

    function goToHomePage(){
        navigate("/");
    }

    return (
        <div className="about-container">
            <div className="text-3xl font-[poppins]">
                <p className="font-extrabold">About Image Express</p>
            </div>

            <div className="font-[poppins] mt-7">
                <p className="w-175">Image Express is a modern, user-friendly web application designed to classify images
                using a custom-trained Convolutional Neural Network (CNN). It distinguishes between
                characters from two fictional universes: Pokémon and Thomas the Tank Engine. The app
                uses a Solid.JS front-end and a Python backend.</p>
            </div>

            <div className="font-[poppins] mt-14">
                <p className="text-xl">Team Members</p>
                
                <ul className="font-[inter] mt-5">
                    <li>Dakshesh Gandhe</li>
                    <li>Pranav Rao</li>
                    <li>Zahinul Haque Chowdhury</li>
                </ul>
            </div>

            <div className="mt-20 font-[poppins]">
                {/* <A href="/"> */}
                    <button onClick={goToHomePage} type='button' class="!bg-[#2B6DE0] py-2 px-4 text-white">Home</button>
                {/* </A> */}
        
            </div>




            
        </div>
)
}