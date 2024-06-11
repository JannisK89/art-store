import Link from 'next/link'
import Input from './input'

// TODO: Fix submit button
export default function Payment() {
  return (
    <div className="flex flex-col mt-6">
      <h2 className="text-2xl ml-2 mb-2">Payment</h2>
      <form className="flex flex-col md:gap-2 gap-4 border border-slate-200 p-6 rounded-xl shadow">
        <div className="md:flex">
          <Input label="First Name" placeholder="First Name" />
          <Input label="Last Name" placeholder="Last Name" />
        </div>
        <Input label="Address" placeholder="Address" />
        <Input label="Email" type="email" placeholder="Email" />
        <label className="md:flex gap-1 mt-6 text-lg font-light mx-1">
          I agree to the{' '}
          <Link
            href={'/terms-and-conditions'}
            className="text-sky-500 hover:text-sky-700"
            target="_blank"
          >
            Terms And Conditions
          </Link>
          <input className="mx-1" type="checkbox" />
        </label>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </div>
  )
}
