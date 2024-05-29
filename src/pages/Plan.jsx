import { Link } from "react-router-dom";
import Custom from "../components/custom/Custom";
import arcade from "../assets/images/arcade.svg";
import Cart from "../components/design/ui/Cart";

export default function Plan({ enabled, setEnabled, userInfo, setUserInfo }) {
  const handleChangeCheck = () => {
    setEnabled((enabled) => !enabled);
  };
  const handleChangeValue = (header, price) => {
    setUserInfo({
      ...userInfo,
      header: header,
      price: price,
    });
  };

  return (
    <Custom>
      <div className="w-1/2 relative h-100 lg:w-4/5 sm-width">
        <div className=" mt-10 lg:mt-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl text-slate-800 font-semibold">
                Select your plan
              </h1>
              <p>You have the option of monthly or yearly billing.</p>
            </div>
            <ul className="flex flex-row gap-4 sl:flex-col">
              <Cart
                imgUrl={arcade}
                header={`Arcade`}
                enable={enabled}
                price={9}
                bonus={enabled ? `2 months free` : ""}
                onClick={handleChangeValue}
              />
              <Cart
                imgUrl={arcade}
                header={`Advanced`}
                enable={enabled}
                price={12}
                bonus={enabled ? `2 months free` : ""}
                onClick={handleChangeValue}
              />
              <Cart
                imgUrl={arcade}
                header={`Pro`}
                enable={enabled}
                price={15}
                bonus={enabled ? `2 months free` : ""}
                onClick={handleChangeValue}
              />
            </ul>
            <ul className="flex flex-row items-center gap-4 justify-center py-3 rounded-md bg-slate-100">
              <li
                className={`text-sm font-bold ${
                  enabled ? `text-gray-400` : `text-blue-950`
                }`}
              >
                Monthly
              </li>
              <li>
                <input
                  className="mr-2 mt-1 h-4 w-10 appearance-none rounded-full bg-neutral-300 relative cursor-pointer
             checked:bg-primary transition-colors
             before:absolute before:top-0.5 before:left-1 before:h-3 before:w-3 before:rounded-full before:bg-white before:shadow-md before:transition-transform
             checked:before:translate-x-5"
                  type="checkbox"
                  role="switch"
                  onChange={handleChangeCheck}
                  id="flexSwitchCheckDefault"
                />
              </li>
              <li
                className={`text-sm font-bold ${
                  enabled ? `text-blue-950` : `text-gray-400`
                }`}
              >
                Yearly
              </li>
            </ul>
          </div>
        </div>
        <div className={`pages-btn flex ${userInfo.price===""? `flex-row`: `flex-row-reverse`} justify-between absolute bottom-3 w-full`}>
          {userInfo.price === "" ? (
            ""
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link to={"/add-ons"}>Next Step</Link>
            </button>
          )}
          <button
            type="submit"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            <Link to={"/"}>Go Back</Link>
          </button>
        </div>
      </div>
    </Custom>
  );
}
