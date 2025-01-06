export type UserInsertion = {
    username: string;
    email: string;
    password: string;
}

export type UserUpdation = Partial<UserInsertion>;