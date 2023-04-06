export function getAllPosts(id) {
  const postData = [
    { id: 1, title: "New Post", description: "Post data From Static Props" },
    { id: 2, title: "Second Post", description: "Post data For Second Props" },
    { id: 3, title: "Third Post", description: "Post data For Third Props" },
  ];

  if (id) {
    return postData.filter((post) => post.id == id);
  }

  return postData;
}
