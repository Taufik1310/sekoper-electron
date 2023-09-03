import { useContext, useEffect, useState } from 'react'
import { OffcanvasContext } from '../Contexts'
import { PiTargetBold } from 'react-icons/pi'
import uniformPicture from '../img/school-uniform.png'

const Products = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { onOpen, isOpen } = useContext(OffcanvasContext)
  const [productId, setProductId] = useState(-1)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 200)
  }, [])

  const handleProductClicked = (id: number) => {
    onOpen(id)
    setProductId(id)
  }

  return (
    <div className="mt-16">
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(1)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onOpen(0)
          }
        }}
        className={`w-36 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 1 && isOpen
            ? 'left-[16%] scale-[2.5] top-1/2'
            : 'top-1/2 left-[45%]'
        }`}
      >
        <span
          className={`absolute end-5 top-5 items-center justify-center ${
            isOpen ? 'hidden' : 'flex'
          }`}
        >
          <span className="animate-ping-slow-1 absolute inline-flex h-24 w-24 rounded-full bg-blue-200 opacity-20" />
          <span className="animate-ping-slow-2 absolute inline-flex h-20 w-20 rounded-full bg-blue-200 opacity-20" />
          <span className="animate-ping-slow-3 absolute inline-flex h-16 w-16 rounded-full bg-blue-200 opacity-20" />
          <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-700" />
          <PiTargetBold className="absolute text-blue-50 w-4" />
        </span>
        <img src={uniformPicture} alt="Seragam SMA" />
      </div>
    </div>
  )
}

export default Products
