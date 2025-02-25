export const P2PFilters = () => {
  return (
    <div className="p-4 flex items-center gap-2">
      <select className="flex-1 p-2 border border-gray-200 rounded bg-white">
        <option>IDR</option>
      </select>
      <select className="flex-1 p-2 border border-gray-200 rounded bg-white">
        <option>Payment (All)</option>
      </select>
      <button className="p-2 border border-gray-200 rounded bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
      <button className="p-2 border border-gray-200 rounded bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M7 12h10M11 18h2" />
        </svg>
      </button>
    </div>
  );
};
