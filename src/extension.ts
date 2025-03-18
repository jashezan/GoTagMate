import * as vscode from "vscode";
import { GoTagCompletionProvider } from "./completion.provider";

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
}

export function deactivate() {}
