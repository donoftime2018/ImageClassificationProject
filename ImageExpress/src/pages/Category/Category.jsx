import "./Category.css"
import Group13 from "../../assets/Group 13.png"
import Group12 from "../../assets/Group 12.png"
import checkmark from "../../assets/checkmark.png"
import {A, useNavigate} from "@solidjs/router"
import { createSignal, onMount, onCleanup } from "solid-js"

export default function Category(){

    const navigate = useNavigate();
    const [category, setCategory] = createSignal("");
    console.log(category())

    onMount(()=>{
        document.body.style.background = "white"
    })

    onCleanup(()=>{
        document.body.style.background = ""
    })

    function goToImageUpload(){

        if (category() !== "")
            navigate(`/imageUpload/${category()}`)
        else
            alert("Please select a category before proceeding.");
    }

    function handleSelectCategory(selectedCategory){
        if (selectedCategory === "thomas")
        {
            setCategory("thomas")
            const element = document.getElementById("thomasSelector")
            const rect = element.getBoundingClientRect();
            console.log(rect);

            var checkMark = document.createElement("img");
            checkMark.setAttribute("src", checkmark);
            checkMark.setAttribute("position", "absolute");
            checkMark.setAttribute("width", "100px")
            checkMark.setAttribute("height", "100px")
            document.body.appendChild(checkMark);
        }

        else
        {
            setCategory("pokemon")
            const element = document.getElementById("pokemonSelector")
            const rect = element.getBoundingClientRect();
            console.log(rect);
        }
    }

    return (
        <div className="categoryContainer">
            <div className="text-3xl font-[poppins]">
                <p className="font-extrabold">Select a Category</p>
            </div>

            <div class="flex flex-row justify-center space-x-45 mt-29">
                <img id="pokemonSelector" onClick={()=>{handleSelectCategory("pokemon")}} class="cursor-pointer" src={Group13} alt="Pokemon" className="categoryImage"/>
                <img id="thomasSelector" onClick={()=>{handleSelectCategory("thomas")}} class="cursor-pointer" src={Group12} alt="Thomas the Tank Engine" className="categoryImage"/>
            </div>

             <div className="mt-35 font-[poppins]">
                <button onClick={goToImageUpload} type='button' class="!bg-[#2B6DE0] py-2 px-4 text-white">Next: Upload →</button>
            </div>


        </div>


    
    )
}