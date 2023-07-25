import { DataTypes } from 'sequelize';
import sequelize from './index';

export const Role = sequelize.define('tbl_role', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
    }
}, {
    tableName: 'tbl_role',
});