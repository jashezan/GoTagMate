import * as vscode from "vscode";
import { GoTagCompletionProvider } from "./completion/completion.provider";
import { APP_DESCRIPTION, APP_NAME, APP_VERSION } from "./description";
import { TRIGGER_CHARACTERS } from "./constants/trigger_chars.const";

export function activate(context: vscode.ExtensionContext) {
	const provider = new GoTagCompletionProvider();
	const selector = { language: "go", scheme: "file" };

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			selector,
			provider,
			...TRIGGER_CHARACTERS,
		),
	);

	// Log activation for debugging
	console.log(`${APP_NAME} v${APP_VERSION} activated: ${APP_DESCRIPTION}`);
}

export function deactivate() {}
