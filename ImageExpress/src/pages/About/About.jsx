import "./About.css";

export default function About(){
    console.log("About component loaded");
    return (
        <div className="about-container">
            <div className="font-[700] text-3xl font-[poppins] mb-15">
                <p>About Image Express</p>
            </div>

            <div className="font-[poppins]">
                <p className="w-175">Image Express is a modern, user-friendly web application designed to classify images
                using a custom-trained Convolutional Neural Network (CNN). It distinguishes between
                characters from two fictional universes: Pokémon and Thomas the Tank Engine. The app
                uses a Solid.JS front-end and a Python backend.</p>
            </div>
        </div>
)
}