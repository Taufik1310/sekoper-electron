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

const CheckoutContext = createContext({
  isOpen: false,
  dataId: 0,
  onOpen: (id: number) => {},
  onClose: () => {}
})

const AuthContext = createContext({
  isLoggedIn: false,
  onOpenLogin: () => {},
  onOpenRegister: () => {},
  onAdmin: (status: boolean) => {},
  onOpenUserCategory: () => {},
  isAdmin: false,
  user: {},
})

const AlertContext = createContext({
  onFailLogin: () => {},
  onEmailInvalid: () => {},
  onPasswordInvalid: () => {},
  onPasswordNotMatch: () => {},
  onFailRegister: () => {},
  onRegistered: () => {},
  onCheckout: () => {}
})

const PurchaseContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {}
})

export { PaginationContext, OffcanvasContext, CheckoutContext, AuthContext, AlertContext, PurchaseContext }
