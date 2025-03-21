import type { ITag } from "./tag.type";
import { fetchValidateKeywords } from "./validate.tag";

const tag_list =
	fetchValidateKeywords.tag_list?.map((tag) => ({
		tag_name: tag.tag_name,
		tag_description: tag.tag_description,
		tag_usage:
			tag.tag_usage?.map((usage) =>
				usage.replace("validate:", "binding:"),
			) || [],
	})) || null;

export const FetchGinBindingKeywords: ITag = {
	keyword: "binding",
	description:
		"Gin bindings are used to serialize JSON, XML, path parameters, form data, etc. to structs and maps. Gin uses go-playground/validator/v10 for validation.",
	library_link: [
		"github.com/gin-gonic/gin",
		"gin-gonic.com/docs/examples/binding-and-validation/",
	],
	version: "v1.10.0",
	last_published: "May 7, 2024",
	tag_list: tag_list,
};
