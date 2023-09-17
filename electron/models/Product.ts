import { DataTypes } from "sequelize"
import sequelize from "./connection"

const Product = sequelize.define('products', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE(13),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    product_type_id: {
        type: DataTypes.INTEGER,
    }
})

export default Product