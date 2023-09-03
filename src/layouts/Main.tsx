import { useState } from 'react'
import { OffcanvasContext, PaginationContext } from '../Contexts'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Offcanvas from '../components/Offcanvas'
import Products from '../components/Products'

const Main = () => {
  const [pageId, setPageId] = useState(0)
  const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false)
  const [offcanvasDataId, setOffcanvasDataId] = useState(0)

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
  }

  return (
      <main className="bg-zinc-900 w-screen h-screen overflow-x-hidden overflow-y-hidden relative">
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
            {isOpenOffcanvas && <Offcanvas />}
            <Navbar />
            {pageId === 0 && <Intro />}
            {pageId === 1 && <Products />}
          </OffcanvasContext.Provider>
        </PaginationContext.Provider>
      </main>
  )
}

export default Main
