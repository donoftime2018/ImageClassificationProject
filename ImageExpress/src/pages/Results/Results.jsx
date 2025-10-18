import "./Results.css";
export default function Results(){
    return (
        <div className="resultsContainer">
            <div className="text-3xl font-[poppins] ">
                <p>Classification Result</p>
            </div>

            <div className=" mt-24 w-128 h-56 bg-white stroke-[#Cbd5e1] stroke-1 rounded-lg drop-shadow-md/20">
                <div className="mr-55 flex flex-col justify-items-center align-start">
                    <p className="mt-7 font-[poppins]">Prediction</p>
                    <p className="mt-4 font-[poppins]">Category</p>
                    <p className="mt-4 font-[poppins]">Confidence</p>
                </div>
            
                
            </div>

            
        </div>
)
}