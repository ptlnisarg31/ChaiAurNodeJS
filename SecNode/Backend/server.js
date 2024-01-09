import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A new joke", content: "This is a new joke" },
    {
      id: 2,
      title: "Another joke",
      content: "Another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "A third joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "A fourth joke",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "A fifth joke",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
