import { useContext, useEffect, useState } from 'react'
import { FaHome, FaInfoCircle, FaShoppingBag } from 'react-icons/fa'
import { OffcanvasContext, PaginationContext } from '../Contexts'
import reactIcon from '../img/school-uniform.png'

const Navbar = () => {
  const { pageId, onChange } = useContext(PaginationContext)
  const { isOpen } = useContext(OffcanvasContext)
  const navMenu = [
    {
      id: 0,
      name: 'Beranda',
      icon: <FaHome />,
    },
    {
      id: 1,
      name: 'Produk',
      icon: <FaShoppingBag />,
    },
    {
      id: 2,
      name: 'Informasi',
      icon: <FaInfoCircle />,
    },
  ]
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 700)
  }, [])

  useEffect(() => {
    setIsVisible(!isOpen)
  }, [isOpen])

  return (
    <nav
      className={`flex justify-between items-center w-screen px-5 py-10 text-blue-50 transition-all duration-1000 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-1' : '-translate-y-full opacity-0'
      }`}
    >
      <div
        role="button"
        onClick={() => onChange(0)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onChange(0)
          }
        }}
        tabIndex={0}
        className="cursor-pointer"
      >
        <img src={reactIcon} alt="Sekoper Logo" width={60} />
      </div>
      <ul className="flex items-center self-end gap-16 font-medium">
        {navMenu &&
          navMenu.map((menu) => (
            <li key={menu.id}>
              <div
                role="button"
                className={`cursor-pointer group flex flex-col gap-3 transition-all ease-in-out duration-500 ${
                  pageId === menu.id ? 'text-blue-700' : ''
                }`}
                onClick={() => onChange(menu.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    onChange(0)
                  }
                }}
                tabIndex={0}
              >
                <p className="flex items-center gap-4">
                  {menu.icon}
                  <span>{menu.name}</span>
                </p>
                <hr
                  className={`transition-all ease-in-out duration-500 ${
                    pageId === menu.id
                      ? 'border-blue-700 w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="bg-blue-700 border border-blue-700 py-2 px-6 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-200 text-xs font-semibold"
      >
        Masuk
      </button>
    </nav>
  )
}

export default Navbar
