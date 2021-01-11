"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("../instances/sequelize");
const coords_1 = require("./coords");
const product_1 = require("./product");
class User extends Sequelize.Model {
}
exports.User = User;
User.init({
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    role: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    isAuthenticated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'users',
    sequelize: sequelize_1.sequelize,
});
product_1.Product.belongsTo(User, { foreignKey: 'owner_id', onDelete: 'cascade' });
coords_1.Coordinates.belongsTo(User, { foreignKey: 'owner_id', onDelete: 'cascade' });
