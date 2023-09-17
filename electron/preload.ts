const { contextBridge , ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('database', {
    getProductType: (id: number) => ipcRenderer.invoke('getProductType', id),
    getProductByType: (id: number) => ipcRenderer.invoke('getProductByType', id),
    getProduct: (id: number) => ipcRenderer.invoke('getProduct', id)
})