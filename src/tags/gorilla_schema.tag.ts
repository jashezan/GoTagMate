import type { ITag } from "./tag.type";

export const fetchSchemaKeywords: ITag = {
	keyword: "schema",
	description: "Form data decoding into Go structs",
	library_link: ["github.com/gorilla/schema"],
	tag_list: [
		{
			tag_name: "field_name",
			tag_description:
				"Defines a custom name for the field to map to form data, overriding the struct field name.",
			tag_usage: ['schema:"name"'],
		},
		{
			tag_name: "-",
			tag_description:
				"Ignores the field during form data decoding, preventing it from being populated.",
			tag_usage: ['schema:"-"'],
		},
		{
			tag_name: "default",
			tag_description:
				"Sets a default value applied when the field is zero-valued, nil (for pointers), or empty (for slices); for slices, use '|' to separate items.",
			tag_usage: ['schema:"phone,default:+123456"'],
		},
	],
};
