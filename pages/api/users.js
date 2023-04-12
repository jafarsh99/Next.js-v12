// http://localhost:3000/api/users

export default function get_Users(req, res) {
  res.status(200).json([
    { name: "John Cena" }, 
    { name: "Thomas Slebew" }
]);
}
