export default function Input({type,name,placeholder,handleChangeValue}) {
  return (
    <input
      type={type}
      name={name}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      onChange={handleChangeValue}
      required
    />
  );
}
