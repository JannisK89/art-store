import { commaSeparator } from '@/app/lib/comma-separator'
import type { CartItem } from '@/app/types/art'

export default function CheckoutItem({ price, title, amount }: CartItem) {
  return (
    <li className="flex justify-between">
      <div className="flex content-start font-thin gap-1 text-sm">
        <span> {title} </span>
        <span>
          {amount} x ${commaSeparator(price)}
        </span>
      </div>
    </li>
  )
}
