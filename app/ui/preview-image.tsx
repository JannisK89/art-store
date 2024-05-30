import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  selected: boolean
  onClick: (src: number) => void
}

export default function PreviewImage({ src, alt, selected, onClick }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      height={150}
      width={150}
      onClick={() => onClick(parseInt(src))}
      className={clsx(
        'rounded-full shadow',
        !selected &&
          'transition ease-in-out delay-75 hover:translate-y-6 hover:scale-125 duration-300',
        selected && 'translate-y-6 scale-125 opacity-75'
      )}
    />
  )
}