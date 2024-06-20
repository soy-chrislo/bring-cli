#!/usr/bin/env node

import { handleChoose } from "./commands/handleChoose.js";
import { chooseAsk, welcome } from "./utils/cliUtils.js";

(async () => {
	await welcome();
	const choose = await chooseAsk("What do you want to create?", [
		"Repository",
		"Component",
	]);
	await handleChoose(choose);
})();
