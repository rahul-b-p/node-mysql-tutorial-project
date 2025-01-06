import { DataTypes, Model } from "sequelize";
import { IUser, IUserCreation } from "../interfaces";
import { sequelize } from "../config";



class User extends Model<IUser, IUserCreation> implements IUser {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    public readonly createAt!: Date;
    public readonly updateAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    tableName: "Users",
    timestamps: true

}
);


export default User;