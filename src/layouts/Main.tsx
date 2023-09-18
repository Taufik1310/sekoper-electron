import { useEffect, useState } from 'react'
import { AlertContext, AuthContext, CheckoutContext, OffcanvasContext, PaginationContext } from '../Contexts'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Offcanvas from '../components/Offcanvas'
import Products from '../components/Products'
import Login from '../components/Login'
import AlertInfo from '../components/AlertInfo'
import Register from '../components/Register'

interface UserType {
  email: string,
  username: string,
  password: string
}

const Main = () => {
  const [pageId, setPageId] = useState(0)
  const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false)
  const [offcanvasDataId, setOffcanvasDataId] = useState(0)
  const [isOpenCheckout, setIsOpenCheckout] = useState(false)
  const [checkoutDataId, setCheckoutDataId] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOpenAuth, setIsOpenAuth] = useState({
    login: false,
    register: false
  })
  const [user, setUser] = useState<UserType>({
    email: 'user@gmail.com',
    username:'User',
    password: 'user123'
  })
  const [isAlertOpen, setIsAlertOpen] = useState({
    failLogin: false,
    emailInvalid: false,
    passwordInvalid: false,
    passwordNotMatch:  false,
    failRegister: false,
    registered: false
  })

  const handlePageChanged = (id: number) => {
    setPageId(id)
    setIsOpenOffcanvas(false)
  }

  const handleOffcanvasShowing = (id: number) => {
    setIsOpenOffcanvas(true)
    setOffcanvasDataId(id)
  }
  
  const handleOffcanvasClosed = () => {
    setIsOpenOffcanvas(false)
    setIsOpenCheckout(false)
  }

  const handleCheckoutShowing = (id: number) => {
    setIsOpenCheckout(true)
    setCheckoutDataId(id)
  }

  const handleCloseAlert = () => {
    setIsAlertOpen({
      failLogin: false,
      emailInvalid: false,
      passwordInvalid: false,
      passwordNotMatch: false,
      failRegister: false,
      registered: false
    })
  }

  useEffect(() => {
    const user = localStorage.getItem('user') 
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
    if (user) setUser(JSON.parse(user))
  }, [])

  return (
      <main className="bg-zinc-900 w-screen h-screen overflow-x-hidden overflow-y-hidden relative">
        <AuthContext.Provider value={{ 
            isLoggedIn: isLoggedIn,
            onOpenLogin: () => setIsOpenAuth({ register: false, login: true }),
            onOpenRegister: () => setIsOpenAuth({ login: false, register: true }),
            user: user,
         }}>
          <PaginationContext.Provider
            value={{
              pageId,
              onChange: handlePageChanged,
            }}
          >
            <OffcanvasContext.Provider
              value={{
                isOpen: isOpenOffcanvas,
                dataId: offcanvasDataId,
                onOpen: handleOffcanvasShowing,
                onClose: handleOffcanvasClosed,
              }}
            >
              <CheckoutContext.Provider
                value={{ 
                  isOpen: isOpenCheckout,
                  dataId: checkoutDataId,
                  onOpen: handleCheckoutShowing,
                  onClose: handleOffcanvasClosed
                }}
              >
                <AlertContext.Provider value={{ 
                  onFailLogin: () => setIsAlertOpen({ ...isAlertOpen, failLogin: true }),
                  onEmailInvalid: () => setIsAlertOpen({ ...isAlertOpen, emailInvalid: true }),
                  onPasswordInvalid: () => setIsAlertOpen({ ...isAlertOpen, passwordInvalid: true }),
                  onPasswordNotMatch: () => setIsAlertOpen({ ...isAlertOpen, passwordNotMatch: true }),
                  onFailRegister: () => setIsAlertOpen({ ...isAlertOpen, failRegister: true }),
                  onRegistered: () => setIsAlertOpen({ ...isAlertOpen, registered: true })
                 }}>
                  {
                    !isOpenAuth.login && !isOpenAuth.register ?
                    <>
                      {isOpenOffcanvas && <Offcanvas />}
                      <Navbar />
                      {pageId === 0 && <Intro />}
                      {pageId === 1 && <Products />}
                    </>
                    :
                    isOpenAuth.login ?
                    <Login />
                    :
                    <Register />
                  }
                  { isAlertOpen.failLogin &&    
                      <AlertInfo type={1} status={0} onClose={handleCloseAlert} />
                  }
                  { isAlertOpen.emailInvalid &&    
                      <AlertInfo type={1} status={1} onClose={handleCloseAlert} />
                  }
                  { isAlertOpen.passwordInvalid &&    
                      <AlertInfo type={1} status={2} onClose={handleCloseAlert} />
                  }
                  { isAlertOpen.passwordNotMatch &&    
                      <AlertInfo type={1} status={3} onClose={handleCloseAlert} />
                  }
                  { isAlertOpen.failRegister &&    
                      <AlertInfo type={1} status={4} onClose={handleCloseAlert} />
                  }
                  { isAlertOpen.registered &&    
                      <AlertInfo type={0} status={5} onClose={handleCloseAlert} />
                  }
                </AlertContext.Provider>
              </CheckoutContext.Provider>
            </OffcanvasContext.Provider>
          </PaginationContext.Provider>
        </AuthContext.Provider>
      </main>
  )
}

export default Main
