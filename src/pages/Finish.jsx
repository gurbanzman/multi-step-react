import Custom from "../components/custom/Custom";
import check from "../assets/images/Check.svg";

export default function Finish() {
  return (
    <Custom>
      <div className="w-1/2 md:w-4/5 xl:h-60 lg:w-4/5 sm-width">
        <div className="flex flex-col gap-8 items-center">
          <div className=" w-20 h-20">
            <img src={check} alt="" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-4xl text-slate-800 font-semibold">
              Thank you!
            </h1>
            <p className="text-neutral-400 text-center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    </Custom>
  );
}
