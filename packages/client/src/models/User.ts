export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "DEVELOPER";
  token: string;
}
