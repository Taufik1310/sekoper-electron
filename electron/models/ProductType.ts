import { DataTypes } from "sequelize";
import sequelize from "./connection";

const ProductType = sequelize.define('product_types', {
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type :DataTypes.TEXT,
    }
});

export default ProductType