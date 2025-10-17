import "./Results.css";
export default function Results(){
    return (
        <div className="resultsContainer">
            <div className="text-3xl font-[poppins] ">
                <p>Classification Result</p>
            </div>

            <div className=" mt-24 w-128 h-56 bg-white stroke-[#Cbd5e1] stroke-1 rounded-lg drop-shadow-md/20">
                <p className="mr-45 mt-7 font-[poppins]"><span className="font-bold">Prediction</span></p>
                
            </div>
        </div>
)
}