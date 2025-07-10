import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
//   DisclosurePanel,
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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { IStore } from "../store/store";
// import type { IStore } from '../store/store';
// import { useSelector } from 'react-redux';

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  // {name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
  // {name: 'Login', description: 'Build strategic funnels that will convert', href: '/login', icon: ArrowPathIcon},

  // <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  //     <a href="#" className="text-sm/6 font-semibold text-gray-900">
  //         Log in <span aria-hidden="true"></span>
  //     </a>
  // </div>
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const selector = useSelector((store: IStore)=>store.user);
  // const {displayName,email} = selector.user;
  // const isLoggedIn: null|boolean = useRef(null)
  // isLoggedIn.current = email?true:false
  const isLoggedIn = useSelector((state: IStore)=>state.user.user?.email)
  const navigate = useNavigate();

  const logoutHandel = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  function handleLogin() {
        navigate("/login");
    }
  const callsToAction = [
    { name: "Watch demo", onClickHandle: handleLogin, icon: PlayCircleIcon },
    isLoggedIn ? { name: "Logout", onClickHandle: logoutHandel, icon: XMarkIcon }:{name: "Log in", onClickHandle: handleLogin, icon: XMarkIcon}
  ];

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-9xl items-center justify-between p-4"
      >
        <div className="flex lg:flex-1 logo">
          <Link to="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img
                            alt="Logo"
                            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
?color=indigo&shade=600"
                            className="h-16"
                        /> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden  lg:flex lg:gap-x-12 cursor-pointer">
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-gray-900">
              <div className="flex items-center gap-x-6">
                <img
                  alt="..."
                  src={
                    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  className="size-12 rounded-full"
                />
              </div>
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -right-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div> */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold  text-gray-900 hover:bg-gray-50"
                >
                  {isLoggedIn ? "Logout" : "Log in"}
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
