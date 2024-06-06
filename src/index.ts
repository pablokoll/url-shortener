import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";
import { db } from "./config/db";
import ShortenerService from "./services/ShortenerService";

const port = process.env.PORT || 3000;
const uri = `mongodb+srv://${db.user}:${db.password}@${db.url}/?retryWrites=true&w=majority&appName=${db.database}`;
mongoose
	.connect(uri)
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((error) => {
		console.log(`MongoDB connection failed: ${error}`);
	});

mongoose.connection.on("open", async () => {
    await ShortenerService.seed();

	app.listen(port, () => {
        console.log(`The application is listening on port ${port}!`);
    });
});
