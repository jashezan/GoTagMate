import type { ITag } from "./tag.type";


export const fetchYAMLKeywords: ITag = {
	keyword: "yaml",
	description: "The yaml package enables Go programs to comfortably encode and decode YAML values.",
	library_link: ["gopkg.in/yaml.v3"], // Assuming a common YAML package in Go
	version: "v3.0.1",
	last_published: "May 27, 2022",
	tag_list: [
		{
			tag_name: ",omitempty",
			tag_description:
				"Omit field if it's set to the zero value or empty",
			tag_usage: ['yaml:"a,omitempty"'],
		},
		{
			tag_name: ",flow",
			tag_description: "Marshal using flow style (inline representation)",
			tag_usage: ['yaml:",flow"'],
		},
		{
			tag_name: ",inline",
			tag_description:
				"Inline an embedded struct or map as if its fields were in the outer struct",
			tag_usage: ['yaml:",inline"'],
		},
		{
			tag_name: "-",
			tag_description: "Ignore field in YAML marshaling/unmarshaling",
			tag_usage: ['yaml:"-"'],
		},
	],
};
