import { createContext } from 'react'

const PaginationContext = createContext({
  pageId: 0,
  onChange: (id: number) => {},
})

const OffcanvasContext = createContext({
  isOpen: false,
  dataId: 0,
  onOpen: (id: number) => {},
  onClose: () => {},
})

export { PaginationContext, OffcanvasContext }
