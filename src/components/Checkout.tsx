import { ChangeEvent, useContext, useEffect, useState } from "react"
import { AlertContext, AuthContext, CheckoutContext } from "../Contexts"

const Checkout = () => {
    const { dataId } = useContext(CheckoutContext)
    const { isLoggedIn, onOpenLogin } = useContext(AuthContext)
    const { onCheckout } = useContext(AlertContext)
    const [product, setProduct] = useState<any>({})
    const [quantity, setQuantity] = useState(1)
    const [message, setMessage] = useState('')

    const fetchProduct = async () => {
        try {
            const data = await window.database.getProduct(dataId)
            setProduct(data.dataValues)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    const handleQuantityChanged = (value: string) => {
        const replaceValue = value.replace(/[^0-9]/g, '')
        setQuantity(parseFloat(replaceValue) || 1)
    }

    const handleBuyClicked = () => {
        !isLoggedIn ?  onOpenLogin() : purchased()
    }

    const purchased = async () => {
        const user = localStorage.getItem('user') || ''
        const email = JSON.parse(user).email

        try {
            const result = await window.database.insertPurchase({
                product: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                message: message,
                customer: email
            })
            if (result === 200) {
                onCheckout()
                setQuantity(1)
                setMessage('')
                fetchProduct()
            }
        } catch (error) {
            console.error()
        }
    }

    return (
        <div className="flex mt-20">
            <img src={`../../img/products/${product.image}`} alt={product.name} className="w-5/12 object-contain me-4" />
            <div className="w-6/12">
                <h3 className="text-4xl font-bold mb-3">{product.name}</h3>
                <h4 className="text-3xl text-blue-700 font-bold w-full bg-zinc-100 rounded-sm p-5 mb-10">Rp. {product.price}</h4>
                <form className="mb-10">
                    <label className="text-zinc-400 font-semibold text-base me-8">Kuantitas</label>
                    <input type="button" value="-" className="bg-transparent border border-zinc-400 font-extrabold cursor-pointer w-8" onClick={() => setQuantity(quantity > 1 ? quantity-1 : 1)}/>
                    <input type="text" name="quantity" id="quantity" className="bg-transparent border border-zinc-400 font-semibold w-12 text-center outline-blue-700" value={quantity} onInput={(e: ChangeEvent<HTMLInputElement>) => handleQuantityChanged(e.target.value)} />
                    <input type="button" value="+" className="bg-transparent border border-zinc-400 font-extrabold cursor-pointer w-8" onClick={() => setQuantity(quantity > product.stock ? product.stock : quantity+1)}/>
                    <label className="text-sm text-zinc-400 font-medium ms-5">Tersisa {product.stock} buah</label>
                </form>
                <form className="flex mb-10">
                    <label className="text-zinc-400 font-semibold text-base me-14">Pesan</label>
                    <textarea name="message" id="message" className="w-full h-32 outline-none border border-zinc-300 text-xs p-3" placeholder="Tinggalkan pesan disini" value={message} onChange={(e) => setMessage(e.target.value)} />
                </form>
                <div className="flex items-center">
                    <button type="button" className="bg-blue-700 px-8 py-3 text-blue-50 font-semibold text-sm" onClick={handleBuyClicked}>Beli Sekarang</button>
                    <div className="text-blue-700  ms-5 font-semibold">
                        <span className="text-xs">Total Bayar</span>
                        <p className="text-lg">Rp. {product.price * quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout