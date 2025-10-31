import "./Results.css";
import {useNavigate, useLocation} from "@solidjs/router"
import { onMount, onCleanup } from "solid-js";

export default function Results(){
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location.state)

    onMount(()=>{
        document.body.style.background = "white"
    })

    onCleanup(()=>{
        document.body.style.background = ""
    })
    

    function goToImageUpload(){
        navigate(`/imageUpload/${location.state.category}`);
    }

    function goToHomePage(){
        navigate("/");
    }

    return (
        <div className="resultsContainer">
            <div className="text-3xl font-[poppins] ">
                <p>Classification Result</p>
            </div>

            <div className="mt-24 w-128 h-61 bg-white stroke-[#Cbd5e1] stroke-1 rounded-lg drop-shadow-md/20">
                <div className="flex flex-col">
                    <p className="mr-57 mt-7 font-[poppins] font-bold">Prediction</p>
                    <p className="mr-60 mt-4 font-[inter]">Category</p>
                    <p className="mr-55 mt-3 font-[inter]">Confidence</p>
                </div>

                <div className="ml-8 mt-7 flex flex-row space-x-8 font-[inter]">
                    <button onClick={goToImageUpload} type='button' class="!bg-[#2B6DE0] mt-5 py-2 px-4 text-white">Try Another</button>
                    <button onClick={goToHomePage} type='button' class="!bg-[#D9D9D9] mt-5 py-2 px-4 text-black">
                    <span className="font-bold">Home</span>
                    </button>
                </div>
                
            </div>

            
        </div>
)
}