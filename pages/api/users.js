// http://localhost:3000/api/users

import { error } from "console";
import main from "../database/connection";
import UserModel from "../database/schema";

export default function get_Users(req, res) {
  res.status(200).json([{ id: 1, name: "Sherlock" },{id:2,name:'Holmes'}]);
  // main().catch((error) => console.error(error));

  // const { method } = req;

  // switch (method) {
  //   case "GET":
  //     res.status(200).json({ method: "GET", endpoint: "Users" });
  //     break;
  //   case "POST":
  //     res.status(200).json({ method: "POST", endpoint: "Users" });
  //     break;
  //   default:
  //     res.setHeader("Allow", ["GET", "POST"]);
  //     res.status(405).end(`Method ${method} Not Allowed`);
  //     break;
  // }

  // ---------------------------------------------------------

  // save data ke mongoDB

  // const create = new UserModel({
  //   name: "Thomas Slebew"
  // });
  // create.save().then(() => {
  //   res.status(200).json(create);
  // });

  // --------------------------------------------------------

  // res.status(200).json([
  //   { id: 1, name: "John Cena" },
  //   { id: 2, name: "Thomas Slebew" },
  // ]);
}
