import Product from "../models/Product"
import sequelize from "../models/connection"

export const createProducts = async () => {
    const ProductData = [
        {
            id: 1,
            name: 'Jas Almamater',
            price: 160000,
            stock: 1000,
            image: 'jas_almamater.png',
            product_type_id: 1,
        },
        {
            id: 2,
            name: 'Seragam Olahraga',
            price: 165000,
            stock: 1000,
            image: 'seragam_olahraga.png',
            product_type_id: 1,
        },
        {
            id: 3,
            name: 'Baju Batik',
            price: 115000,
            stock: 1000,
            image: 'baju_batik.png',
            product_type_id: 1,
        },
        {
            id: 4,
            name: 'Kebaya',
            price: 115000,
            stock: 1000,
            image: 'kebaya.png',
            product_type_id: 1,
        },
        {
            id: 5,
            name: 'Pangsi',
            price: 165000,
            stock: 1000,
            image: 'pangsi.png',
            product_type_id: 1,
        },
        {
            id: 6,
            name: 'Jas Laboratorium',
            price: 110000,
            stock: 1000,
            image: 'jas_lab.png',
            product_type_id: 1,
        },
        {
            id: 7,
            name: 'Kemeja RPL',
            price: 160000,
            stock: 1000,
            image: 'kemeja_rpl.png',
            product_type_id: 1,
        },
        {
            id: 8,
            name: 'Kemeja TKJ',
            price: 160000,
            stock: 1000,
            image: 'kemeja_tkj.png',
            product_type_id: 1,
        },
        {
            id: 9,
            name: 'Pensil 2B',
            price: 4500,
            stock: 500,
            image: 'pensil_2b.png',
            product_type_id: 2,
        },
        {
            id: 10,
            name: 'Buku Tulis',
            price: 5000,
            stock: 1000,
            image: 'buku_tulis.png',
            product_type_id: 2,
        },
        {
            id: 11,
            name: 'Penghapus',
            price: 2000,
            stock: 800,
            image: 'penghapus.png',
            product_type_id: 2,
        },
        {
            id: 12,
            name: 'Tipe-X',
            price: 7500,
            stock: 400,
            image: 'tipe_x.png',
            product_type_id: 2,
        },
        {
            id: 13,
            name: 'Penggaris 30 cm',
            price: 3000,
            stock: 600,
            image: 'penggaris_30cm.png',
            product_type_id: 2,
        },
        {
            id: 14,
            name: 'Spidol Hitam',
            price: 2500,
            stock: 700,
            image: 'spidol_hitam.png',
            product_type_id: 2,
        },
        {
            id: 15,
            name: 'Buku Gambar',
            price: 6000,
            stock: 400,
            image: 'buku_gambar.png',
            product_type_id: 2,
        },
        {
            id: 16,
            name: 'Tas Sekolah',
            price: 120000,
            stock: 600,
            image: 'tas_sekolah.png',
            product_type_id: 3,
        },
        {
            id: 17,
            name: 'Tempat Pensil',
            price: 8000,
            stock: 900,
            image: 'tempat_pensil.png',
            product_type_id: 3,
        },
        {
            id: 18,
            name: 'Botol Minum',
            price: 15000,
            stock: 800,
            image: 'botol_minum.png',
            product_type_id: 3,
        },
        {
            id: 19,
            name: 'Tempat Makan',
            price: 20000,
            stock: 700,
            image: 'tempat_makan.png',
            product_type_id: 3,
        },
        {
            id: 20,
            name: 'Bola Sepak',
            price: 45000,
            stock: 300,
            image: 'bola_sepak.png',
            product_type_id: 4,
        },
        {
            id: 21,
            name: 'Raket Bulutangkis',
            price: 65000,
            stock: 250,
            image: 'raket_bulutangkis.png',
            product_type_id: 4,
        },
        {
            id: 22,
            name: 'Bola Basket',
            price: 55000,
            stock: 280,
            image: 'bola_basket.png',
            product_type_id: 4,
        },
        {
            id: 23,
            name: 'Raket Tenis',
            price: 75000,
            stock: 220,
            image: 'raket_tenis.png',
            product_type_id: 4,
        },
        {
            id: 24,
            name: 'Sapu',
            price: 25000,
            stock: 150,
            image: 'sapu.png',
            product_type_id: 5,
        },
        {
            id: 25,
            name: 'Pel',
            price: 20000,
            stock: 180,
            image: 'pel.png',
            product_type_id: 5,
        },
        {
            id: 26,
            name: 'Sikat Toilet',
            price: 7500,
            stock: 220,
            image: 'sikat_toilet.png',
            product_type_id: 5,
        },
        {
            id: 27,
            name: 'Cairan Pembersih',
            price: 15000,
            stock: 200,
            image: 'cairan_pembersih.png',
            product_type_id: 5,
        },
        {
            id: 28,
            name: 'Cat Air',
            price: 18000,
            stock: 100,
            image: 'cat_air.png',
            product_type_id: 6,
        },
        {
            id: 29,
            name: 'Kanvas Lukis',
            price: 25000,
            stock: 80,
            image: 'kanvas_lukis.png',
            product_type_id: 6,
        },
        {
            id: 30,
            name: 'Gitar Akustik',
            price: 500000,
            stock: 20,
            image: 'gitar_akustik.png',
            product_type_id: 6,
        },
        {
            id: 31,
            name: 'Buku Partitur',
            price: 15000,
            stock: 120,
            image: 'buku_partitur.png',
            product_type_id: 6,
        },
        {
            id: 40,
            name: 'Logo SMKN 13 Bandung',
            price: 25000, 
            stock: 100, 
            image: 'logo_smkn13.png', 
            product_type_id: 1,
        },
        {
            id: 41,
            name: 'Topi SMKN 13 Bandung',
            price: 21500, 
            stock: 200, 
            image: 'topi_smkn13.png', 
            product_type_id: 1,
        },
        {
            id: 42,
            name: 'Dasi SMKN 13 Bandung',
            price: 21500, 
            stock: 150, 
            image: 'dasi_smkn13.png', 
            product_type_id: 1,
        },
        {
            id: 43,
            name: 'Kaos Kaki SMKN 13 Bandung',
            price: 20000, 
            stock: 300, 
            image: 'kaos_kaki_smkn13.png', 
            product_type_id: 1,
        },
        {
            id: 44,
            name: 'Ikat Pinggang SMKN 13 Bandung',
            price: 21500, 
            stock: 120, 
            image: 'ikat_pinggang_smkn13.png', 
            product_type_id: 1,
        },
        {
            id: 45,
            name: 'Lokasi SMKN 13 Bandung',
            price: 15000, 
            stock: 10, 
            image: 'lokasi_smkn13.png', 
            product_type_id: 1,
        },
        {
            id: 46,
            name: 'Baju Muslim',
            price: 115000, 
            stock: 10, 
            image: 'baju_muslim.png', 
            product_type_id: 1,
        },
    ]
      
    try {
        await Product.sync({ force: true })
        await Product.bulkCreate(ProductData)  
        console.log('Data produk berhasil disisipkan.')
    } catch (error) {
        console.error('Gagal menyisipkan data produk:', error)
    }
}

export const getProductByType = async (id: number) => {
    try {
        const rows = await Product.findAll({ 
            where: {
                product_type_id: id,
            }
        })
        return rows
    } catch (error) {
        console.log('Gagal mengambil data produk: ', error)
    }
}

export const getProduct = async (id: number) => {
    try {
        const rows = await Product.findOne({ 
            where: {
                id: id,
            }
        })
        return rows
    } catch (error) {
        console.log('Gagal mengambil data produk: ', error)
    }
}

export const updateProductStock = async (name: string, quantity: number) => {
    try {
        const product = await Product.update({
            stock: sequelize.literal(`stock - ${quantity}`),
        }, {
            where: {
                name: name
            }
        })
        return product
    } catch (error) {
        console.error(error)
    }
}