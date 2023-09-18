import { DataTypes } from "sequelize"
import sequelize from "./connection"

const User = sequelize.define('users', {
   email: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(100),
    },
    password: {
        type: DataTypes.STRING(100),
    }
})

export default User