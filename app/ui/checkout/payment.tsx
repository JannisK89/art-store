export default function Payment() {
  return (
    <div className="flex flex-col mt-6">
      <h2 className="text-2xl">Payment</h2>
      <div className="flex flex-col md:flex-row md:gap-2 gap-4 border border-slate-200 p-6 rounded-xl shadow">
        <label className="flex flex-col text-lg font-light mx-1">
          First Name
          <input
            className="shadow text-sm font-thin px-2 py-2 appearance-none"
            type="text"
            placeholder="First Name"
          />
        </label>
        <label className="flex flex-col text-lg font-light mx-1">
          Last Name
          <input
            className="shadow text-sm font-thin px-2 py-2 mt-1"
            type="text"
            placeholder="Last Name"
          />
        </label>
      </div>
    </div>
  )
}
