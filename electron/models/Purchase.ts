import { DataTypes } from "sequelize"
import sequelize from "./connection"

const Purchase = sequelize.define('purchases', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    product: {
        type: DataTypes.STRING(100),
    },
    price: {
        type: DataTypes.DOUBLE(13),
    },
    image: {
        type: DataTypes.TEXT
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    total_price: {
        type: DataTypes.DOUBLE(13)
    },
    date: {
        type: DataTypes.DATEONLY
    },
    message: {
        type: DataTypes.TEXT
    },
    customer: {
        type: DataTypes.STRING(100)
    }
})

export default Purchase