const { contextBridge , ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('database', {
    getAllUniform: () => ipcRenderer.invoke('getAllUniform'),
    getProductType: (id: number) => ipcRenderer.invoke('getProductType', id)
})