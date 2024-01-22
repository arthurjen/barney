export function Input(props: { label?: string, value: string }) {
  const { label, value } = props;

  return (
    <div className="mb-6 mt-1">
      {label && (
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder="Card Name"
        // <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        value={value}
        className="relative w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
    </div>
  );
}
