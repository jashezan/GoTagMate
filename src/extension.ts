import * as vscode from "vscode";
import { GoTagCompletionProvider } from "./completion.provider";
import { APP_DESCRIPTION, APP_NAME, APP_VERSION } from "./description";

export function activate(context: vscode.ExtensionContext) {
	const provider = new GoTagCompletionProvider();
	const selector = { language: "go", scheme: "file" };
	const triggerCharacters = ["`", '"', " ", "=", ";", ","];

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			selector,
			provider,
			...triggerCharacters,
		),
	);

	// Log activation for debugging
	console.log(`${APP_NAME} v${APP_VERSION} activated: ${APP_DESCRIPTION}`);
}

export function deactivate() {}
