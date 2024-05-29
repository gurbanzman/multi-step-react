import { Link } from "react-router-dom";
import Custom from "../components/custom/Custom";

export default function Summary({ enabled, userInfo }) {
  const totalPrice = userInfo.ons.reduce((total, on) => total + parseFloat(on.price), 0);

  return (
    <Custom>
      <div className="w-1/2 h-100 relative lg:w-4/5 sm-width">
        <div className="mt-10 lg:mt-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl text-slate-800 font-semibold">
                Finishing up
              </h1>
              <p>Double-check everything looks OK before confirming.</p>
            </div>
            <ul className=" bg-zinc-100 py-4 px-6 rounded-lg">
              <li className="flex flex-row justify-between items-center">
                <ul className="flex flex-col gap-1">
                  <li className=" font-semibold text-balanced text-sky-950 tracking-wide">
                    {userInfo.header} ({enabled ? "Yearly" : "Monthly"})
                  </li>
                  <li>
                    <button type="button">
                      <Link
                        to={"/select-plan"}
                        className=" text-neutral-400 text-base underline"
                      >
                        Change
                      </Link>
                    </button>
                  </li>
                </ul>
                <span className=" font-bold">
                  {enabled ? `$${userInfo.price*10}/yr` : `$${userInfo.price}/mo`}
                </span>
              </li>
              <li className=" w-full border mt-5 mb-4"></li>
              <li>
                <ul>
                  <li className="flex flex-col gap-3">
                    {userInfo.ons
                      ? userInfo.ons.map((item, index) => {
                          return (
                            <ul
                              key={index}
                              className="flex flex-row items-center justify-between"
                            >
                              <li className="font-medium text-sky-950">
                                {item.header}
                              </li>
                              <li className="text-neutral-400">{enabled? `+$${item.price}/yr`: `+$${item.price}/mo`}</li>
                            </ul>
                          );
                        })
                      : ""}
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="px-6 flex flex-row justify-between items-center">
              <li className="text-neutral-400">Total (per {enabled? `year`:`month`})</li>
              <li className=" text-xl font-bold text-blue-600">{enabled? `+$${totalPrice+(userInfo.price * 10)}/yr`: `+$${totalPrice+userInfo.price}/mo`}</li>
            </ul>
          </div>
        </div>
        <div className="pages-btn absolute bottom-3 w-full flex flex-row-reverse justify-between">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <Link to={"/finish"}>Confirm</Link>
          </button>
          <button
            type="submit"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            <Link to={"/add-ons"}>Go Back</Link>
          </button>
        </div>
      </div>
    </Custom>
  );
}
