import type { ITag } from "./tag.type";

export const fetchHCLKeywords: ITag = {
	keyword: "hcl",
	description: "HashiCorp Configuration Language",
	library_link: [
		"github.com/hashicorp/hcl2/gohcl",
		"github.com/alecthomas/hcl",
	],
	tag_list: [
		{
			tag_name: ",attr",
			tag_description:
				"Specifies that the field is populated from an HCL attribute (default behavior). Supported by github.com/hashicorp/hcl2/gohcl (with *hcl.Expression or gocty types) and github.com/alecthomas/hcl.",
			tag_usage: ['hcl:"name,attr" // supported by both'],
		},
		{
			tag_name: ",block",
			tag_description:
				"Specifies that the field is populated from an HCL block. Can be a struct, slice, or raw hcl.Block/hcl.Body. Supported by github.com/hashicorp/hcl2/gohcl and github.com/alecthomas/hcl.",
			tag_usage: ['hcl:"service,block" // supported by both'],
		},
		{
			tag_name: ",label",
			tag_description:
				"Specifies that the field captures a block label within a block struct. Supported by github.com/hashicorp/hcl2/gohcl and github.com/alecthomas/hcl.",
			tag_usage: ['hcl:"name,label" // supported by both'],
		},
		{
			tag_name: ",remain",
			tag_description:
				"Captures remaining body content (attributes or blocks) not matched by other fields. Supported by github.com/hashicorp/hcl2/gohcl (hcl.Body or hcl.Attributes) and github.com/alecthomas/hcl ([]*hcl.Entry).",
			tag_usage: ['hcl:"remain" // supported by both'],
		},
		{
			tag_name: ",optional",
			tag_description:
				"Marks an attribute field as optional; no error if missing. Supported only by github.com/alecthomas/hcl; not available in github.com/hashicorp/hcl2/gohcl.",
			tag_usage: [
				'hcl:"description,optional" // supported: github.com/alecthomas/hcl',
			],
		},
		{
			tag_name: "-",
			tag_description:
				"Ignores the field during HCL processing. Commonly used for position fields like hcl.Position. Supported by github.com/hashicorp/hcl2/gohcl and github.com/alecthomas/hcl.",
			tag_usage: ['hcl:"-"'],
		},
	],
};
