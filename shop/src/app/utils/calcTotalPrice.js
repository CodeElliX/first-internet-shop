
export const calcTotalPrice = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.count, 0)
}