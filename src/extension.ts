import * as vscode from "vscode";
import { GoTagCompletionProvider } from "./completion/completion.provider";
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
}

/**
 * Deactivate Function is for cleaning
 */
export function deactivate() {}
