import "./Navbar.css"
import {A, useNavigate} from "@solidjs/router"

export default function Navbar(){

  const navigate = useNavigate();

  function goToAboutPage(){
      navigate("/about");
  }

    return(<>
      <nav className="bg-[#D9D9D9] p-4 fixed top-0 inset-x-0 w-full text-black font-extrabold">

        <div className="container mx-auto flex justify-between items-center">
            <ul>
              <li>
                <img src="images/ImageExpresslogo.png" alt="Logo"/>
              </li>
            </ul>

            <ul>
              <li className="text-[22px]">
                Welcome For Fun
              </li>
            </ul>

            <ul>
              <li>
                {/* <A href="/about" target='_blank'> */}
                    <button onClick={goToAboutPage} type="button" class="!bg-[#E8F0FF] text-[20px] rounded-[18px]">
                      <span class="font-bold text-black">About</span>
                    </button>
                {/* </A> */}

              </li>
            </ul>
        </div>
      </nav>
    </>)
}