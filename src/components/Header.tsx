import { BsMoonFill } from "react-icons/bs";

interface HeaderProps {
  handleClick: () => void; // Define the type for handleClick
}

function Header({ handleClick }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-d-vdBlue p-5 shadow-md">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center text-l-vdBlue dark:text-white">
          <h1 className="text-xl md:text-2xl font-semibold">
            Where is the world?
          </h1>

          <div className="">
            <ul
              onClick={handleClick}
              className="cursor-pointer flex items-center gap-2"
            >
              <li className="dark:text-white">
                <BsMoonFill />
              </li>
              <li className="">Dark Mode</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
