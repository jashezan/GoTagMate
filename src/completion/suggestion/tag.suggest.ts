import type * as vscode from "vscode";
import { getEnvCompletionItems } from "./libraries/env.suggest";
import { getGinBindingCompletionItems } from "./libraries/gin_binding.suggest";
import { getGormCompletionItems } from "./libraries/gorm.suggest";
import { getJsonCompletionItems } from "./libraries/json.suggest";
import { getRedisCompletionItems } from "./libraries/redis.suggest";
import { getValidateCompletionItems } from "./libraries/validate.suggest";
import { getXMLCompletionItems } from "./libraries/xml.suggest";
import { getYAMLCompletionItems } from "./libraries/yaml.suggest";
import { gettomlCompletionItems } from "./libraries/toml.suggest";

/**
 * The function `getTagSpecificSuggestions` returns completion items based on the specified tag type
 * for a given document and position.
 * @param {string} tagType - The `tagType` parameter is a string that specifies the type of tag for
 * which you want to get suggestions. It could be one of the following values: "gorm", "validate",
 * "json", "env", or "redis".
 * @param document - The `document` parameter in the `getTagSpecificSuggestions` function refers to the
 * current text document in the editor where the code completion is being triggered. It contains the
 * content and metadata of the file being edited, such as the text, language, and URI. This parameter
 * is used to provide context
 * @param position - The `position` parameter in the `getTagSpecificSuggestions` function represents
 * the position in the text document where code completion is being triggered. This position is used to
 * provide context for the completion items being suggested, such as the current cursor location in the
 * document.
 * @returns The function `getTagSpecificSuggestions` returns an array of `vscode.CompletionItem`
 * objects based on the `tagType` provided. The specific completion items returned depend on the value
 * of `tagType` and are obtained from different helper functions such as `getGormCompletionItems`,
 * `getValidateCompletionItems`, `getJsonCompletionItems`, `getEnvCompletionItems`, and `get
 */
export const getTagSpecificSuggestions = (
	tagType: string,
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	try {
		switch (tagType) {
			case "json":
				return getJsonCompletionItems(document, position);
			case "gorm":
				return getGormCompletionItems();
			case "validate":
				return getValidateCompletionItems();
			case "form":
				return getXMLCompletionItems(document, position);
			case "env":
				return getEnvCompletionItems(document, position);
			case "redis":
				return getRedisCompletionItems(document, position);
			case "binding":
				return getGinBindingCompletionItems();
			case "xml":
				return getXMLCompletionItems(document, position);
			case "yaml":
				return getYAMLCompletionItems(document, position);
			case "toml":
				return gettomlCompletionItems(document, position);
			default:
				return [];
		}
	} catch (error) {
		return [];
	}
};
