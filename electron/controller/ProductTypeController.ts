import ProductType from "../models/ProductType"

export const createProductTypes = async () => {
    const productTypeData = [
        { 
            id: 1, 
            type: 'Seragam Sekolah', 
            description: 'Seragam sekolah adalah pakaian yang dikenakan oleh siswa dalam lingkungan sekolah. Seragam ini dirancang untuk menciptakan kesetaraan di antara siswa dan mengidentifikasi mereka sebagai bagian dari sekolah tertentu.' 
        },
        { 
            id: 2, 
            type: 'Alat Tulis', 
            description: 'Alat tulis adalah perlengkapan yang digunakan dalam kegiatan menulis dan menggambar. Ini termasuk pena, pensil, penghapus, buku catatan, dan peralatan lain yang digunakan dalam pendidikan dan pekerjaan sehari-hari.' 
        },
        { 
            id: 3, 
            type: 'Alat Sekolah', 
            description: 'Alat sekolah mencakup berbagai peralatan yang digunakan dalam konteks pendidikan, seperti buku teks, tas sekolah, dan perlengkapan lainnya yang diperlukan oleh siswa.' },
        { 
            id: 4, 
            type: 'Alat Olahraga', 
            description: 'Alat olahraga adalah peralatan yang digunakan dalam berbagai jenis olahraga, seperti bola, raket, sepatu olahraga, dan perlengkapan lainnya yang diperlukan untuk berpartisipasi dalam aktivitas fisik.' 
        },
        { 
            id: 5, 
            type: 'Alat Kebersihan', 
            description: 'Alat kebersihan adalah peralatan yang digunakan untuk menjaga kebersihan dan sanitasi. Ini mencakup sikat, sapu, ember, dan perlengkapan lain yang digunakan untuk membersihkan dan merawat lingkungan.' 
        },
        { 
            id: 6, 
            type: 'Alat Kesenian', 
            description: 'Alat kesenian adalah peralatan yang digunakan dalam berbagai jenis seni, seperti cat, kuas, kanvas, instrumen musik, dan peralatan lain yang digunakan untuk mengungkapkan kreativitas dan bakat seni.' 
        },
    ]      
    try {
        await ProductType.sync({ force: true })
        await ProductType.bulkCreate(productTypeData)  
        console.log('Data jenis produk berhasil disisipkan.')
    } catch (error) {
        console.error('Gagal menyisipkan data jenis produk:', error)
    }
}

export const getProductType = async (id: number) => {
    try {
        const result = await ProductType.findAll({ 
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.error(`Data jenis produk dengan id ${id} tidak ditemukan`, error)
    }
}