

export default function Navbar(){


    return(<>
      <nav className="bg-[#D9D9D9] p-4 fixed top-0 inset-x-0 w-full">

        <div className="container mx-auto flex justify-between items-center text-black font-extrabold">
            <ul>
              <li>
                <img src="/images/ImageExpresslogo.png" alt="Logo"/>
              </li>
            </ul>

            <ul>
              <li className="text-[20px]">
                Welcome For Fun
              </li>
            </ul>
        </div>
      </nav>
    </>)
}