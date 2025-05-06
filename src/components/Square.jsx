export default function Square({value}) {
  return (
    <>
      <button className="bg-blue-200 border border-blue-200 rounded-md w-16 h-16 m-1 text-2xl leading-9 shadow-sm shadow-blue-100">
        {value}
      </button>
    </>
  );
}