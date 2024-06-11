type inputProps = {
  label: string
  placeholder: string
  type?: string
}

export default function Input({
  label,
  placeholder,
  type = 'text',
}: inputProps) {
  return (
    <label className="flex flex-col text-lg font-light mx-1">
      {label}
      <input
        className="shadow text-sm font-thin px-2 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
        type={type}
        placeholder={placeholder}
      />
    </label>
  )
}
