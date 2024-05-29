import { NavLink } from "react-router-dom";

export default function Custom({ children }) {
  return (
    <div className="pt-20 pb-2">
      <div className="w-2/3 mx-auto p-4 bg-white shadow-md rounded-2xl flex items-center flex-row gap-20 xl:w-3/4 lg:flex-col sm-width">
        <div className="bg-blue-700 rounded-2xl w-4/12 py-7 h-100 lg:w-full lg:h-48 sl:h-32">
          <ul className="flex flex-col gap-8 w-3/4 mx-auto lg:flex-row lg:justify-center lg:mt-8 sl:mt-5">
            <li className="flex items-center gap-4 lg:flex-col">
               <NavLink to={"/"} className={"w-8 h-8 flex justify-center  items-center rounded-full border-solid border border-white"}>
                  <span className="text-base text-white">1</span>
               </NavLink>
               <ul className="flex flex-col gap-1 sl:hidden">
                  <li className="text-base text-gray-300 font-normal">Step 1</li>
                  <li className="text-base text-white font-bold lg:hidden">YOUR INFO</li>
               </ul>
            </li>
            <li className="flex items-center gap-4 lg:flex-col">
               <NavLink to={"/select-plan"} className={"w-8 h-8 flex justify-center  items-center rounded-full border-solid border border-white"}>
                  <span className="text-base text-white">2</span>
               </NavLink>
               <ul className="flex flex-col gap-1 sl:hidden">
                  <li className="text-base text-gray-300 font-normal">Step 2</li>
                  <li className="text-base text-white font-bold lg:hidden">SELECT PLAN</li>
               </ul>
            </li>
            <li className="flex items-center gap-4 lg:flex-col">
               <NavLink to={"/add-ons"} className={"w-8 h-8 flex justify-center  items-center rounded-full border-solid border border-white"}>
                  <span className="text-base text-white">3</span>
               </NavLink>
               <ul className="flex flex-col gap-1 sl:hidden">
                  <li className="text-base text-gray-300 font-normal">Step 3</li>
                  <li className="text-base text-white font-bold lg:hidden">ADD-ONS</li>
               </ul>
            </li>
            <li className="flex items-center gap-4 lg:flex-col">
               <NavLink to={"/summary"} className={"w-8 h-8 flex justify-center  items-center rounded-full border-solid border border-white"}>
                  <span className="text-base text-white">4</span>
               </NavLink>
               <ul className="flex flex-col gap-1 sl:hidden">
                  <li className="text-base text-gray-300 font-normal">Step 4</li>
                  <li className="text-base text-white font-bold lg:hidden">SUMMARY</li>
               </ul> 
            </li>
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
}
