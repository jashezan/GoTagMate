import type * as vscode from "vscode";
import { getBsonCompletionItems } from "./libraries/bson.suggest";
import { getBunCompletionItems } from "./libraries/bun.suggest";
import { getConformCompletionItems } from "./libraries/conform.suggest";
import { getDynamoDBCompletionItems } from "./libraries/dynamodb.suggest";
import { getEnvCompletionItems } from "./libraries/env.suggest";
import { getGinBindingCompletionItems } from "./libraries/gin_binding.suggest";
import { getSchemaCompletionItems } from "./libraries/gorilla_schema.suggest";
import { getGormCompletionItems } from "./libraries/gorm.suggest";
import { getHCLCompletionItems } from "./libraries/hcl.suggest";
import { getJsonCompletionItems } from "./libraries/json.suggest";
import { getMsgPackCompletionItems } from "./libraries/msgpack.suggest";
import { getRedisCompletionItems } from "./libraries/redis.suggest";
import { gettomlCompletionItems } from "./libraries/toml.suggest";
import { getValidateCompletionItems } from "./libraries/validate.suggest";
import { getXMLCompletionItems } from "./libraries/xml.suggest";
import { getYAMLCompletionItems } from "./libraries/yaml.suggest";

// Lookup table for tag-specific completion functions
const completionHandlers: {
	[key: string]: (
		doc: vscode.TextDocument,
		pos: vscode.Position,
	) => vscode.CompletionItem[];
} = Object.freeze({
	json: getJsonCompletionItems,
	gorm: () => getGormCompletionItems(),
	validate: () => getValidateCompletionItems(),
	form: getXMLCompletionItems,
	env: getEnvCompletionItems,
	redis: getRedisCompletionItems,
	binding: () => getGinBindingCompletionItems(),
	xml: getXMLCompletionItems,
	bun: getBunCompletionItems,
	yaml: getYAMLCompletionItems,
	toml: gettomlCompletionItems,
	hcl: getHCLCompletionItems,
	msgpack: getMsgPackCompletionItems,
	bson: getBsonCompletionItems,
	dynamodbav: getDynamoDBCompletionItems,
	conform: getConformCompletionItems,
	schema: getSchemaCompletionItems,
});

export const getTagSpecificSuggestions = (
	tagType: string,
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const handler = completionHandlers[tagType];
	return handler ? handler(document, position) : [];
};
