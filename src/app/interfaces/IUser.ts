export interface IUser {
    userid: number,
    username: string,
    password: string,
    email: string,
    gender: string,
    birthdate: Date,
    phone: number
    nickname:number
    status?: string,

    createdAt?:Date,
    updatedAt?:Date
  }