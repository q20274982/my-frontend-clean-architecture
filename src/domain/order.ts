import type { Cart } from './cart'
export type OrderStatus = 'new' | 'delivery' | 'completed'

export type Order = {
	user: UniqueId
	cart: Cart
	created: DateTimeString
	status: OrderStatus
	total: PriceCents
}
