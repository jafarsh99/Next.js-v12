// http://localhost:3000/api/users

import { error } from "console";
import main from "../database/connection";
import UserModel from "../database/schema";

export default function get_Users(req, res) {
  main().catch((error) => console.error(error));

  const create = new UserModel({
    name: "Thomas Slebew"
  });
  create.save().then(() => {
    res.status(200).json(create);
  });

  // res.status(200).json([
  //   { id: 1, name: "John Cena" },
  //   { id: 2, name: "Thomas Slebew" },
  // ]);
}
