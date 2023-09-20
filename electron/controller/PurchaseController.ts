import Purchase from "../models/Purchase"
import { updateProductStock } from "./ProductController"

export const createPurchases = async () => {
    try {
        await Purchase.sync({ force: true })
        await Purchase.bulkCreate()  
        console.log('Data pembelian berhasil disisipkan.')
    } catch (error) {
        console.error('Gagal menyisipkan data pembelian', error)
    }
}

interface PurchaseType {
    product: string,
    price: number,
    image: string,
    quantity: number,
    message: string,
    customer: string
    total_price?: number,
    date?: string 
}

export const insertPurchase = async (data: PurchaseType) => {
    try {
        let total_price = data.price * data.quantity

        const result = await Purchase.create({
            product: data.product,
            price: data.price,
            image: data.image,
            quantity: data.quantity,
            total_price: total_price,
            date: new Date(),
            message: data.message,
            customer: data.customer
        })
        const updateStock = await updateProductStock(data.product, data.quantity)
        if (!result || !updateStock){
            throw Error("Gagal melakukan pembelian")
        } else {
            return 200
        }
    } catch (error) {
        console.error(error)
    }
}

export const getPurchases = async (customer: string) => {
    try {
        const purchases = await Purchase.findAll({
            where: {
                customer: customer
            }
        })
        return purchases
    } catch (error) {
        console.error(error)
    }
}

export const deletePurchase = async (id: number) => {
    try {
        const result = await Purchase.destroy({
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.error(error)
    }
}