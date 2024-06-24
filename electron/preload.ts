const { contextBridge , ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('database', {
    getProductType: (id: number) => ipcRenderer.invoke('getProductType', id),
    getProductByType: (id: number) => ipcRenderer.invoke('getProductByType', id),
    getProduct: (id: number) => ipcRenderer.invoke('getProduct', id),
    deletePurchase: (id: number) => ipcRenderer.invoke('deletePurchase', id),
    getPurchases: (customer: string) => ipcRenderer.invoke('getPurchases', customer),
    getUser: (data: {
        email: string,
        password: string,
        isAdmin: number
        
    }) => ipcRenderer.invoke('getUser', data),
    insertUser: (data: {
        email: string,
        username: string,
        password: string,
        isAdmin: boolean
    }) => ipcRenderer.invoke('insertUser', data),
    insertPurchase: (data: {
        product: string,
        price: number,
        image: number,
        quantity: number,
        message: string,
        customer: string
        total_price?: number,
        date?: string 
    }) => ipcRenderer.invoke('insertPurchase', data)
})