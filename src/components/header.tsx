import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  // ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  //   PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { IStore } from "../store/store";
import Logo from "./logo";

function Header() {
  const isLoggedIn = useSelector((state: IStore) => state.user.user?.email);
  const tempUser = useSelector((state: IStore) => state.user.user);
  const navigate = useNavigate();

  const logoutHandel = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };

  function handleLogin() {
    navigate("/login");
  }
  const callsToAction = [
    { name: "Watch demo", onClickHandle: handleLogin, icon: PlayCircleIcon },
    isLoggedIn
      ? { name: "Logout", onClickHandle: logoutHandel, icon: XMarkIcon }
      : { name: "Log in", onClickHandle: handleLogin, icon: XMarkIcon },
  ];
  if (!isLoggedIn) navigate("/login");

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-9xl items-center justify-between p-4 bg-black"
      >
        <div className="flex lg:flex-1 logo">
          <div className="h-18 flex items-center px-8">
            <Logo />
          </div>
        </div>
        <PopoverGroup className="hidden  lg:flex lg:gap-x-12 cursor-pointer">
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-gray-900">
              <div className="flex items-center gap-x-6">
                <img
                  alt="..."
                  // src={
                  //   "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  // }
                  src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png"
                  className="size-12 rounded-full"
                />
              </div>
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-full -right-4 z-50 mt-1 w-screen max-w-sm overflow-hidden rounded-l bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {isLoggedIn ? (
                <>{tempUser?.email}</>
              ) : (
                <>First LoggedIn</>
              )}
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <button
                    key={item.name}
                    onClick={item.onClickHandle}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
    </header>
  );
}

export default Header;
