import "./Category.css"
import Group13 from "../../assets/Group 13.png"
import Group12 from "../../assets/Group 12.png"
import checkmark from "../../assets/checkmark.png"
import {A, useNavigate} from "@solidjs/router"
import { createSignal, onMount, onCleanup } from "solid-js"

export default function Category(){

    const navigate = useNavigate();
    const [category, setCategory] = createSignal("");
    const [selected, setSelected] = createSignal(false);
    const [checkMarkElement, setCheckMarkElement] = createSignal("");


    onMount(()=>{
        document.body.style.background = "white"
        document.title = "Category Selection"
    })

    onCleanup(()=>{
        document.body.style.background = ""
        document.title = ""
        document.body.removeChild(checkMarkElement());
        setCheckMarkElement(null);
        setSelected(false)
        setCategory("")
    })

    function goToImageUpload(){

        if (category() !== "" && selected() === true)
            navigate(`/imageUpload/${category()}`)
        else
            alert("Please select a category before proceeding.");
    }

    function handleSelectCategory(selectedCategory){

        console.log(selectedCategory)
        console.log(category())

        var checkMark = document.createElement("img");
        checkMark.setAttribute("src", checkmark);
        checkMark.style.position = "absolute"
        checkMark.style.width = "100px"
        checkMark.style.height = "100px"
        
        if (selected() === false)
        {
            setSelected(true)
            setCategory(selectedCategory)
        }
        else if (selectedCategory !== category() && selected() === true)
        {
            document.body.removeChild(checkMarkElement());
            setCategory(selectedCategory)
        }

        else
        {
            if (selectedCategory === category() && selected() === true)
            {
                document.body.removeChild(checkMarkElement());
                setCheckMarkElement(null);
                setSelected(false)
                setCategory("")
                return
            }
        }

        if (selectedCategory === "thomas")
        {
            const element = document.getElementById("thomasSelector")
            const rect = element.getBoundingClientRect();
            console.log(rect);

            checkMark.style.left = rect.left + "px";
            checkMark.style.top = rect.top +"px"; 
            checkMark.style.zIndex = "9999"; 

            setCheckMarkElement(checkMark);

            document.body.appendChild(checkMarkElement());
        }

        else
        {
            if (selectedCategory === "pokemon")
            {
                const element = document.getElementById("pokemonSelector")
                const rect = element.getBoundingClientRect();
                console.log(rect);

                checkMark.style.left = rect.left + "px";
                checkMark.style.top = rect.top +"px"; 
                checkMark.style.zIndex = "9999"; // ensures it’s on top
                setCheckMarkElement(checkMark);

                document.body.appendChild(checkMarkElement());
            }
        
        
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