export default function CartOns({onChange,enabled,header,userInfo,desc,price}) {
  return (
    <li className="flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer">
      <input
        type="checkbox"
        onChange={(event)=> onChange(event,header,price)}
        className=" appearance-none w-5 h-5 rounded-md border flex items-center justify-center cursor-pointer checked:after:text-slate-50 checked:after:content-checkbox checked:bg-blue-600 checked:border-cyan-700"
        checked={userInfo? userInfo.ons.some((item=>{
          return item.header==header
        })): false}
      />
      <ul className="flex flex-col gap-1 w-2/3">
        <li className=" text-base font-semibold text-sky-950">
          {header}
        </li>
        <li className=" text-sm font-normal text-zinc-400">
          {desc}
        </li>
      </ul>
      <span className=" text-base font-normal text-sky-600">{enabled? `+${price * 10}/yr`: `+${price}/mo`}</span>
    </li>
  );
}
