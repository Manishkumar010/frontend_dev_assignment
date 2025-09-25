'use client'
function PagiButtons({ onClick, disabled, children }: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 rounded-lg bg-indigo-500 text-white disabled:bg-gray-400 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default PagiButtons;
