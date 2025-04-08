"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
class TestModel extends sequelize_1.Model {
}
exports.TestModel = TestModel;
TestModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "TestModel",
    tableName: "test_models",
});
