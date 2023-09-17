import { useContext, useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaShoppingBag } from 'react-icons/fa'
import { CheckoutContext, OffcanvasContext } from '../Contexts'
import ProductList from './ProductList'
import Checkout from './Checkout'

declare global {
  interface Window {
      database:any
  }
}

const Offcanvas = () => {
  const { onClose, dataId } = useContext(OffcanvasContext)
  const { isOpen } = useContext(CheckoutContext)
  const [isVisible, setIsVisible] = useState(false)
  const [productType, setProductType] = useState<any>({})
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 200)
    getProductType()
    getProducts()
  }, [])

  const getProductType = async () => {
    try {
      const result = await window.database.getProductType(dataId)
      setProductType(result[0].dataValues)
    } catch (error) {
      console.error(error)
    }
  }

  const getProducts = async () => {
    try {
      const result = await window.database.getProductByType(dataId)
      setProducts(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className={`absolute end-0 z-50 w-8/12 h-screen bg-white transition-all duration-1000 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'
      } overflow-y-auto overflow-x-hidden`}
    >
      <div className="flex justify-between items-center p-10 font-semibold">
        <button
          type="button"
          onClick={() => onClose()}
          className="flex items-center gap-4 hover:text-blue-600 transition-all duration-300 ease-in-out"
        >
          <FaArrowLeftLong />
          <span>Kembali</span>
        </button>
        <h4 className="flex items-center gap-3">
          <FaShoppingBag />
          <span>Produk</span>
        </h4>
      </div>
      {
        !isOpen ? <ProductList productType={productType} products={products} /> : <Checkout />
      }
    </div>
  )
}

export default Offcanvas
