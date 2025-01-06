import { Optional } from 'sequelize'


export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface IUserCreation extends Optional<IUser, "id"> { }; 