import { useEffect, useState } from "react"

const Purchases = () => {
    const [purchases, setPurchases] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const fetchPurchases = async () => {
        try {
            const user = localStorage.getItem('user') || ''
            const email = JSON.parse(user).email
            const result = await window.database.getPurchases(email)
            setPurchases(result)
        } catch (error) {
            console.error(error)
        }
    }

    const destroyPurchase = async (id: number) => {
        try {
            const result = await window.database.deletePurchase(id)
            if (result) fetchPurchases()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPurchases()
    }, [])

    useEffect(() => {
        let calculatedTotalPrice = 0
        purchases.forEach((purchase: any) => {
            calculatedTotalPrice += purchase.dataValues.total_price
        })
        setTotalPrice(calculatedTotalPrice)
    }, [purchases])

    return (
        <>
            <div className="w-full px-10 mt-5">
                { purchases?.map((purchase: any) => (
                    <div key={purchase.dataValues.id} className="w-full bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 px-5 mb-10">
                        <div className="flex items-center justify-between">
                            <p className="text-zinc-400 font-medium text-sm">{purchase.dataValues.date}</p>
                            <p className="text-blue-700 font-medium text-sm cursor-pointer" onClick={() => destroyPurchase(purchase.dataValues.id)}>HAPUS</p>
                        </div>
                        <hr className="my-2"/>
                        <div className="flex items-center">
                            <img src={`../../img/products/${purchase.dataValues.image}`} alt={purchase.dataValues.product} className="w-24 h-24 object-contain"/>
                            <div className="ms-5">
                                <p className="font-semibold">{purchase.dataValues.product}</p>
                                <p>x{purchase.dataValues.quantity}</p>
                            </div>
                            <p className="ms-auto font-semibold text-blue-700 me-5">Rp. {purchase.dataValues.price}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="bg-zinc-100 h-32 flex items-center justify-between px-5">
                            <p className="text-zinc-600 text-sm">{purchase.dataValues.message}</p>
                            <p>
                                <span className="text-sm text-zinc-600 font-medium">Total Pesanan:</span>{' '}
                                <span className="text-3xl text-blue-700 font-semibold">Rp. {purchase.dataValues.total_price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`w-full sticky ${purchases.length <= 1 ? 'top-full' : ''} bottom-0 h-24 bg-white flex items-center justify-end px-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]`}>
                <span className="me-4 text-zinc-600 font-medium">Total Pembayaran:</span>
                <span className="bg-zinc-100 text-blue-700 font-bold py-4 px-8 text-3xl">Rp.{totalPrice}</span>
            </div>
        </>
    )
}

export default Purchases