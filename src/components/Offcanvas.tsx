import { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaShoppingBag } from 'react-icons/fa'
import { OffcanvasContext } from '../Contexts'
import productPicture from '../img/school-uniform.png'

declare global {
  interface Window {
      database:any
  }
}

const Offcanvas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  }
  const [isVisible, setIsVisible] = useState(false)
  const { onClose, dataId } = useContext(OffcanvasContext)
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
      const result = dataId === 1 ? await window.database.getAllUniform() : await window.database.getAllUniform()
      setProducts(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className={`absolute end-0 z-50 w-7/12 h-screen bg-white transition-all duration-1000 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'
      } overflow-y-auto overflow-hidden pb-10`}
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
      <div className="px-6 mt-5">
        <h2 className="flex items-end gap-2 mb-3">
          <span className="text-5xl font-extrabold">{productType.type}</span>
          <span className=" bg-blue-700 w-3 h-3 rounded-full" />
        </h2>
        <p>{productType.description}</p>
      </div>
      <div className="ps-10 mt-16">
        <Slider {...settings}>
          { products &&
              products.map((product) => (
                <figure 
                  key={product.dataValues.id}
                  className="border-4 border-transparent hover:border-blue-700 transition-all ease-in-out duration-200 w-64 cursor-pointer rounded-md shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)] mb-10 me-10 flex flex-col items-center justify-center"
                >
                  <img
                    src={productPicture}
                    alt="Almamater"
                    width="240"
                    height="auto"
                  />
                  <figcaption className="px-5 py-6">
                    <h5 className="font-extrabold text-2xl mb-4">{product.dataValues.name}</h5>
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-lg">Rp. {product.dataValues.price}</p>
                      <button
                        type="button"
                        className="bg-blue-700 rounded-md text-blue-50 px-5 py-1"
                      >
                        Beli
                      </button>
                    </div>
                  </figcaption>
                </figure>
              ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Offcanvas
