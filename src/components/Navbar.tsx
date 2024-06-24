import { useContext, useEffect, useState } from 'react'
import { FaHome, FaShoppingBag } from 'react-icons/fa'
import { GoSignOut } from 'react-icons/go'
import { AuthContext, OffcanvasContext, PaginationContext, PurchaseContext } from '../Contexts'
import sekoperLogo from '../img/logo.png'
import defaultProfile from '../img/default_profile.png'

const Navbar = () => {
  const { pageId, onChange } = useContext(PaginationContext)
  const { isOpen, onOpen } = useContext(OffcanvasContext)
  const { onOpen: onOpenPurchase } = useContext(PurchaseContext)
  const { isLoggedIn, onOpenUserCategory }: { 
    isLoggedIn: boolean, 
    onOpenUserCategory: any
  } = useContext(AuthContext)
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
    // {
    //   id: 2,
    //   name: 'Informasi',
    //   icon: <FaInfoCircle />,
    // },
  ]
  const [isVisible, setIsVisible] = useState(false)
  const [isOpenProfile, setIsOpenProfile] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 700)
  }, [])

  useEffect(() => {
    setIsVisible(!isOpen)
  }, [isOpen])

  const handleLogout = () => {
    localStorage.clear()
    onOpenUserCategory()
  }

  const handlePurchaseHistory = () => {
    onOpen(7)
    onOpenPurchase()
  }

  return (
    <nav
      className={`flex justify-between items-center w-screen p-10 text-blue-50 transition-all duration-1000 ease-in-out ${
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
        <img src={sekoperLogo} alt="Sekoper Logo" width={60} />
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
        onClick={() => onOpenUserCategory()}
        hidden={isLoggedIn}
        type="button"
        className="bg-blue-700 border border-blue-700 py-2 px-6 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-200 text-xs font-semibold"
      >
        Masuk
      </button>
      <div className={`relative text-start ${!isLoggedIn ? 'hidden' : 'inline-block'}`}>
        <button
          type="button"
          className="inline-flex justify-center w-full"
          onClick={() => setIsOpenProfile(!isOpenProfile)}
        >
          <img src={defaultProfile} alt="Default Profil" width={36} className='object-cover rounded-full cursor-pointer' />
        </button>
          {isOpenProfile && (
            <div className="absolute end-0 z-10 mt-2 w-52 rounded-md shadow-lg bg-white ">
              <div className='py-1'>
                <p className='flex items-center cursor-pointer text-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-blue-700 hover:text-zinc-100' onClick={handlePurchaseHistory}>
                  <FaShoppingBag size={14} className='me-4' />
                  <span>Riwayat Pembelian</span>
                </p>
                <p className='flex items-center cursor-pointer text-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-blue-700 hover:text-zinc-100' onClick={handleLogout}>
                  <GoSignOut size={14} className='me-4 text-xs' />
                  <span>Keluar</span>
                </p>
              </div>
            </div>
          )}
        </div>
    </nav>
  )
}

export default Navbar
