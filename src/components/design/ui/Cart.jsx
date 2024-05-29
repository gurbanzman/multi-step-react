export default function Cart({imgUrl,header,enable,price,bonus,onClick}) {
  return (
    <li className=" w-1/3 flex flex-col gap-8 px-3 py-6 bg-transparent cursor-pointer border-2 rounded-xl select-list sl:w-full sl:flex-row relative" onClick={()=> onClick(header,price)}>
      <div className=" w-10 h-10">
        <img src={imgUrl} alt="" />
      </div>
      <ul className="flex flex-col gap-0">
        <li className=" text-md text-sky-950 font-medium">{header}</li>
        <li className=" text-sm text-gray-500 font-light">{enable? `$${price * 10}/yr`: `$${price}/mo`}</li>
      </ul>
      <p className=" absolute bottom-1 text-sm text-cyan-950">{bonus}</p>
    </li>
  );
}
