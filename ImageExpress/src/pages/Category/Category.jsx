import "./Category.css"

export default function Category(){


    return (
        <div className="categoryContainer">
            <div className="text-3xl font-[poppins]">
                <p className="font-extrabold">Select a Category</p>
            </div>

            <div class="flex flex-row justify-center space-x-45 mt-20">
                <img src="public/images/Group 13.png" alt="Pokemon" className="categoryImage"/>
                <img src="public/images/Group 12.png" alt="Thomas the Tank Engine" className="categoryImage"/>
            </div>
        </div>


    
    )
}