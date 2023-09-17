import Slider from 'react-slick'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useContext } from 'react'
import { CheckoutContext } from '../Contexts'

interface ProductTypeInterface {
    type: string,
    description: string
}

interface ProductInterface {
    dataValues: {
      id: number,
      image: string,
      name: string,
      price: number
    }
}

const ProductList = ({ productType, products }: { 
    productType: ProductTypeInterface,
    products: ProductInterface[]
}) => {
    const { onOpen } = useContext(CheckoutContext)

    const NextArrow = (props: any) => {
        const { onClick } = props
        return (
          <div
            className={`absolute right-0 top-1/3 cursor-pointer text-blue-700`}
            onClick={onClick}
          >
            <IoIosArrowForward size={80}/>
          </div>
        )
      }
      
      const PrevArrow = (props: any) => {
        const { onClick } = props
        return (
          <div
            className={`absolute left-0 top-1/3 z-50 cursor-pointer text-blue-700`}
            onClick={onClick}
          >
            <IoIosArrowBack size={80}/>
          </div>
        )
      }
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      }

    return (
        <>
            <div className="px-6 mt-5">
                <h2 className="flex items-end gap-2 mb-3">
                <span className="text-5xl font-extrabold">{productType.type}</span>
                <span className=" bg-blue-700 w-3 h-3 rounded-full" />
                </h2>
                <p>{productType.description}</p>
            </div>
            <div className="px-5 mt-16">
                <Slider {...settings}>
                { products &&
                    products.map((product) => (
                        <figure 
                          key={product.dataValues.id}
                          className="border-4 border-transparent hover:border-blue-700 transition-all ease-in-out duration-200 w-64 cursor-pointer rounded-md shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)] mb-5 me-10 flex flex-col items-center justify-center"
                          onClick={() => onOpen(product.dataValues.id)}
                        >
                          <img
                              src={`../../img/products/${product.dataValues.image}`}
                              alt={product.dataValues.name}
                              className='w-full h-56 object-cover mx-auto'
                          />
                          <figcaption className="px-5 py-6 flex flex-col items-center justify-center">
                              <h5 className="font-extrabold text-xl mb-4 text-center">{product.dataValues.name}</h5>
                              <p className="font-extrabold text-base text-blue-700">Rp. {product.dataValues.price}</p>
                          </figcaption>
                        </figure>
                    ))
                }
                </Slider>
            </div>
        </>
    )
}

export default ProductList