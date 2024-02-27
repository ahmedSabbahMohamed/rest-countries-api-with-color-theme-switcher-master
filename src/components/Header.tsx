import { BsMoonFill } from "react-icons/bs";

function Header() {

  const themeToggler = () => {
    var myApp = document.getElementById("app")
    myApp?.classList.toggle("dark")
  }

  return (
    <header className="bg-white dark:bg-d-dBlue p-5 shadow-xl">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center text-l-vdBlue dark:text-white">
          <h1 className="text-xl md:text-2xl font-semibold">
            Where is the world?
          </h1>

          <div>
            <button
              onClick={themeToggler}
              className="cursor-pointer flex items-center gap-2"
            >
              <span className="dark:text-white">
                <BsMoonFill />
              </span>
              <span className="">Dark Mode</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
