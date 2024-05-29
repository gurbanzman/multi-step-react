import { Link } from "react-router-dom";
import Custom from "../components/custom/Custom";
import CartOns from "../components/design/ui/CartOns";
import { useEffect } from "react";

export default function Ons({ enabled, setEnabled, userInfo, setUserInfo }) {
  const handleOns = (e, header, price) => {
    setUserInfo((prevUserInfo) => {
      if (!e.target.checked) {
        return {
          ...prevUserInfo,
          ons: prevUserInfo.ons.filter(
            (on) => on.header !== header || on.price !== price
          ),
        };
      } else {
        return {
          ...prevUserInfo,
          ons: [...prevUserInfo.ons, { header: header, price: enabled? price*10:price }],
        };
      }
    });
  };
  console.log(userInfo);
  return (
    <Custom>
      <div className="w-1/2 relative h-100 lg:w-4/5 sm-width">
        <div className="mt-10 lg:mt-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl text-slate-800 font-semibold">
                Pick add-ons
              </h1>
              <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <ul className="flex flex-col gap-3">
              <CartOns
                onChange={handleOns}
                enabled={enabled}
                header={`Online service`}
                userInfo={userInfo}
                desc={`Access to multiplayer games`}
                price={1}
              />
              <CartOns
                onChange={handleOns}
                enabled={enabled}
                header={`Larger storage`}
                userInfo={userInfo}
                desc={`Extra 1TB of cloud save`}
                price={2}
              />
              <CartOns
                onChange={handleOns}
                enabled={enabled}
                header={`Customizable profile`}
                userInfo={userInfo}
                desc={`Custom theme on your profile`}
                price={2}
              />
            </ul>
          </div>
        </div>
        <div className={`pages-btn absolute bottom-3 w-full flex ${userInfo.ons.length>0? `flex-row-reverse`: `flex-row`} justify-between`}>
          {userInfo.ons.length>0 ? (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link to={"/summary"}>Next Step</Link>
            </button>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            <Link to={"/select-plan"}>Go Back</Link>
          </button>
        </div>
      </div>
    </Custom>
  );
}
