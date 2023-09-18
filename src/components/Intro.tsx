import { FaArrowRightLong } from 'react-icons/fa6'
import { useContext, useEffect, useState } from 'react'
import { AuthContext, PaginationContext } from '../Contexts'
import heroImg from '../img/hero_image.png'

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { onChange } = useContext(PaginationContext)
  const { user }: { user: any } = useContext(AuthContext)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 200)
  }, [])

  return (
    <div className="text-blue-50 mt-10 px-12 flex justify-between items-center">
      <div
        className={`w-6/12 transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
        }`}
      >
        <h2 className="font-semibold text-3xl mb-5">Hai, {user.username} !</h2>
        <h1 className="font-bold text-3xl mb-5">
          Selamat Datang di <span className="text-blue-700">SEKOPER</span>
        </h1>
        <p className=" font-normal text-sm mb-5">
          <span className="text-blue-700 italic font-semibold">SEKOPER</span>{' '}
          adalah solusi modern yang memungkinkan sekolah mengelola kegiatan
          koperasi dengan efisien dan mudah. Aplikasi ini dirancang untuk
          membantu anggota koperasi, siswa, dan staf sekolah dalam mengakses
          produk dan layanan koperasi secara praktis
        </p>
        <button
          onClick={() => onChange(1)}
          type="button"
          className="text-sm font-semibold h-6 w-36 flex items-center relative group"
        >
          <span className="z-[1] ps-3 group-hover:ps-5 transition-all ease-in-out duration-700 flex items-center gap-3">
            Lihat Produk
            <FaArrowRightLong />
          </span>
          <span className="bg-blue-700 h-full w-6 group-hover:w-full transition-all ease-in-out duration-700 rounded-full absolute" />
        </button>
      </div>
      <div
        className={`w-5/12 transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'
        }`}
      >
        <img src={heroImg} alt="Introduction" />
      </div>
    </div>
  )
}

export default Intro
