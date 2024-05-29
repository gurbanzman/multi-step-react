import { Link } from "react-router-dom";
import Custom from "../components/custom/Custom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import countryData from "country-data";
import Input from "../components/design/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeMail,
  handleChangeName,
  handleChangePhone,
} from "../app/store";

export default function Home() {
  const [telephone, setTelephone] = useState("");
  const phone = useSelector((state) => state.phone);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();

  const handlePhone = (e) => {
    dispatch(handleChangePhone(e));
  };
  const handleMail = (e) => {
    dispatch(handleChangeMail(e.target.value));
  };
  const handleName = (e) => {
    dispatch(handleChangeName(e.target.value));
  };

  const countries = countryData.countries.all.map((country) => ({
    value: country.alpha2,
    label: `${country.name} (+${country.countryCallingCodes[0]})`,
  }));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setTelephone(
      `+${
        countryData.callingCountries[selectedOption.value]
          .countryCallingCodes[0]
      }`
    );
  };
  return (
    <Custom>
      <div className="w-1/2 h-100 relative md:w-4/5 lg:w-4/5 sm-width">
        <div className="flex flex-col gap-8 mt-10 lg:mt-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-slate-800 font-semibold">
              Personal info
            </h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className=" text-base text-sky-950">
                Full Name
              </label>
              <Input
                type={`text`}
                name={`name`}
                placeholder={`murad gurbanzada`}
                handleChangeValue={handleName}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className=" text-base text-sky-950">
                Email Address
              </label>
              <Input
                type={`email`}
                name={`email`}
                placeholder={`gurbanzadamurad@gmail.com`}
                handleChangeValue={handleMail}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className=" text-base text-sky-950">
                Phone Number
              </label>
              <Select
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countries}
                placeholder="Select a country"
              />
              <PhoneInput
                country={
                  selectedCountry ? selectedCountry.value.toLowerCase() : ""
                }
                value={telephone}
                onChange={handlePhone}
              />
            </div>
          </form>
        </div>
        {phone ? (
          <div className="pages-btn flex flex-row-reverse justify-between absolute bottom-3 w-full ">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link to={"/select-plan"}>Next Step</Link>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Custom>
  );
}
