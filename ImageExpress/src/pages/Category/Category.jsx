import "./Category.css"
import Group13 from "../../assets/Group 13.png"
import Group12 from "../../assets/Group 12.png"
import {A, useNavigate} from "@solidjs/router"
import { createSignal, onMount, onCleanup } from "solid-js"

export default function Category(){

    const navigate = useNavigate();
    const [category, setCategory] = createSignal("");
    console.log(category())

    onMount(()=>{
        document.body.style.backgroundColor = "white"
    })

    onCleanup(()=>{
        document.body.style.backgroundColor = ""
    })

    function goToImageUpload(){

        if (category() !== "")
            navigate(`/imageUpload/${category()}`)
        else
            alert("Please select a category before proceeding.");
    }

    return (
        <div className="categoryContainer">
            <div className="text-3xl font-[poppins]">
                <p className="font-extrabold">Select a Category</p>
            </div>

            <div class="flex flex-row justify-center space-x-45 mt-29">
                <img onClick={()=>{setCategory("pokemon")}} class="cursor-pointer" src={Group13} alt="Pokemon" className="categoryImage"/>
                <img onClick={()=>{setCategory("thomas")}} class="cursor-pointer" src={Group12} alt="Thomas the Tank Engine" className="categoryImage"/>
            </div>

             <div className="mt-35 font-[poppins]">
                <button onClick={goToImageUpload} type='button' class="!bg-[#2B6DE0] py-2 px-4 text-white">Next: Upload →</button>
            </div>


        </div>


    
    )
}