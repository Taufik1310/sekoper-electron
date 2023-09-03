import { DataTypes } from "sequelize"
import sequelize from "./connection"

const Uniform = sequelize.define('uniforms', {
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
    size: {
        type :DataTypes.STRING(5),
    },
    product_type_id: {
        type: DataTypes.INTEGER,
    }
})

export default Uniform