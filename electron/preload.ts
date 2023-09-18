const { contextBridge , ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('database', {
    getProductType: (id: number) => ipcRenderer.invoke('getProductType', id),
    getProductByType: (id: number) => ipcRenderer.invoke('getProductByType', id),
    getProduct: (id: number) => ipcRenderer.invoke('getProduct', id),
    getUser: (data: {
        email: string,
        password: string
    }) => ipcRenderer.invoke('getUser', data),
    insertUser: (data: {
        email: string,
        username: string,
        password: string
    }) => ipcRenderer.invoke('insertUser', data)
})