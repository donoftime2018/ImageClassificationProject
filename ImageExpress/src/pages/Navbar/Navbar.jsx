

export default function Navbar(){


    return(<>
      <nav className="bg-[#D9D9D9] p-4 fixed top-0 inset-x-0 w-full text-black font-extrabold">

        <div className="container mx-auto flex justify-between items-center">
            <ul>
              <li>
                <img src="public/images/ImageExpresslogo.png" alt="Logo"/>
              </li>
            </ul>

            <ul>
              <li className="text-[22px]">
                Welcome For Fun
              </li>
            </ul>

            <ul>
              <li>
                <button className="bg-custom-grey text-[20px] rounded-[18px]">
                  <span class="font-bold">About</span>
                </button>
              </li>
            </ul>
        </div>
      </nav>
    </>)
}