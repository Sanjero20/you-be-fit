import { IUser } from "@/types/user";
import { v4 as generateID } from "uuid";

const KEY = "USER";

export class UserService {
  constructor() {}

  createUser = (user: IUser) => {
    // Retrieve data from storage
    const data = localStorage.getItem(KEY) || "[]";
    const users: IUser[] = JSON.parse(data);
    //
    const userData = { ...user, id: generateID() };
    users.push(userData);
    // Save data to storage
    const stringed = JSON.stringify(users);
    localStorage.setItem(KEY, stringed);
    return userData;
  };

  readUser = (): IUser[] => {
    const data = localStorage.getItem(KEY) || "[]";
    return JSON.parse(data);
  };

  updateUser = (data: IUser): IUser[] => {
    const users = this.readUser();
    const updatedUser = users.map((user) => (user.id == data.id ? data : user));

    // Save updated list to storage
    const stringed = JSON.stringify(updatedUser);
    localStorage.setItem(KEY, stringed);

    return updatedUser
  };

  deleteUser = (id: string) => {
    console.log(id);
  };
}
