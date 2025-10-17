import "./ImageUpload.css";
export default function ImageUpload(){
    console.log("Image upload component loaded");

    return (
    <div className="uploadContainer">
        <div className="text-3xl font-[poppins]">
            <p className="font-extrabold">Upload an Image</p>
        </div>

        <div className="font-[inter] mt-10 w-196 h-68 bg-white stroke-[#Cbd5e1] stroke-1 rounded-lg drop-shadow-xl/50">
            <p className="mt-9"><span className="font-bold">Drag & drop</span> an image here <br/>or</p>
            <p className="mt-8">Click “Browse Files” to upload</p>
            <button type='button' class="!bg-[#E53935] mt-5 py-2 px-4 text-white">Browse Files</button>
        </div>
    </div>
    )
}