export default function Square({value, onSquareClick}) {
  const textColor = value === 'X' ? 'text-red-500' : value === 'O' ? 'text-blue-500' : '';

  return (
    <>
      <button className={`bg-blue-200 border border-blue-200 rounded-md w-16 h-16 m-1 text-3xl font-bold leading-9 shadow-sm shadow-blue-100 ${textColor}`}
              onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}