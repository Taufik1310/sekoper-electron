import { useContext, useEffect, useState } from 'react'
import { OffcanvasContext } from '../Contexts'
import { PiTargetBold } from 'react-icons/pi'
import uniformPicture from '../img/productTypes/school-uniform.png'
import stationeryPicture from '../img/productTypes/stationery.png'
import bagPicture from '../img/productTypes/tas_sekolah.png'
import sportsPicture from '../img/productTypes/alat_olahraga.png'
import cleaningsPicture from '../img/productTypes/alat_kebersihan.png'
import artsPicture from '../img/productTypes/alat_kesenian.png'

const Products = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { onOpen, isOpen } = useContext(OffcanvasContext)
  const [productId, setProductId] = useState(0)

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
    <div className="mt-10">
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(1)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleProductClicked(1)
          }
        }}
        className={`w-24 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 1 && isOpen
            ? 'left-[13%] scale-[4] top-1/2'
            : 'top-1/2 left-[10%]'
        } ${
          productId !== 1 && isOpen ? 'hidden' : ''
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
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(2)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleProductClicked(2)
          }
        }}
        className={`w-24 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 2 && isOpen
            ? 'left-[12%] scale-[4] top-1/2'
            : 'top-1/2 left-[35%]'
        } ${
          productId !== 2 && isOpen ? 'hidden' : ''
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
        <img src={stationeryPicture} alt="Alat Tulis" />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(3)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleProductClicked(3)
          }
        }}
        className={`w-24 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 3 && isOpen
            ? 'left-[12%] scale-[4] top-1/2'
            : 'top-1/2 left-[65%]'
        } ${
          productId !== 3 && isOpen ? 'hidden' : ''
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
        <img src={bagPicture} alt="Alat Tulis" />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(4)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleProductClicked(4)
          }
        }}
        className={`w-24 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 4 && isOpen
            ? 'left-[12%] scale-[4] top-1/2'
            : 'top-[80%] left-[20%]'
        } ${
          productId !== 4 && isOpen ? 'hidden' : ''
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
        <img src={sportsPicture} alt="Alat Tulis" />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(5)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleProductClicked(5)
          }
        }}
        className={`w-24 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 5 && isOpen
            ? 'left-[12%] scale-[4] top-1/2'
            : 'top-[80%] left-[50%]'
        } ${
          productId !== 5 && isOpen ? 'hidden' : ''
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
        <img src={cleaningsPicture} alt="Alat Kebersihan" />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleProductClicked(6)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleProductClicked(6)
          }
        }}
        className={`w-24 absolute -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        } ${
          productId === 6 && isOpen
            ? 'left-[12%] scale-[4] top-1/2'
            : 'top-[80%] left-[80%]'
        } ${
          productId !== 6 && isOpen ? 'hidden' : ''
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
        <img src={artsPicture} alt="Alat Kesenian" />
      </div>
    </div>
  )
}

export default Products
