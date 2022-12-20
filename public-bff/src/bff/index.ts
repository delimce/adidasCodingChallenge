import app from "./app";

app.listen(process.env.SERVER_PORT, () => {
    console.log(`🚀  app listening at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});