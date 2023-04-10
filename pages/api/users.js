//http://localhost:3000/api/users

import main from "../../database/connection";

export default async function get_Users(req, res) {
  main().catch((error) => console.error(error));

  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json([
        { id: 1, name: "Jafarrrr", job: "executive" },
        { id: 2, name: "John wick", job: "executive" },
      ]);
      break;
    case "POST":
      res.status(200).json([{ id: 2, name: "Shoddfdd", job: "executive" }]);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }

  //   const create = new Kitten({ name: "John Smith", job: "Frontend Developer" });
  //   create.save().then(() => {
  //     res.status(200).json(create);
  //   });

  //   res.status(200).json([
  //     { id: 1, name: "John Smith", job: "Frontend Developer" },
  //     { id: 2, name: "Jane Smith", job: "Backend Developer" },
  //   ]);
}
