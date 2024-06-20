import express from "express";
import repositories from "../db/repositories.js";
import components from "../db/components.js";

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/repositories", (req, res) => {
	res.json(repositories);
});

app.get("/repositories/:id", (req, res) => {
	const { id } = req.params;
	const repo = repositories.find((repo) => repo.id === Number(id));
	res.json(repo || {});
});

app.get("/components", (req, res) => {
	res.json(components);
});

app.get("/components/:id", (req, res) => {
	const { id } = req.params;
	const component = components.find((component) => component.id === Number(id));
	res.json(component || {});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
