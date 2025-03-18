import type { ITag } from "./tag";

export const fetchJSONKeywords: ITag = {
	keyword: "json",
	description: "JavaScript Object Notation",
	library_link: ["encoding/json"],
	tag_list: [
		{
			tag_name: ",omitempty",
			tag_description: "Omit field if empty",
			tag_usage: ['json:",omitempty"'],
		},
		{
			tag_name: ",string",
			tag_description: "Convert field to string",
			tag_usage: ['json:",string"'],
		},
		{
			tag_name: "-",
			tag_description: "Ignore field in JSON",
			tag_usage: ['json:"-"'],
		},
	],
};
