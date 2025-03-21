import type { ITag } from "./tag.type";

export const fetchXMLKeywords: ITag = {
	keyword: "xml",
	description: "Extensible Markup Language",
	library_link: ["encoding/xml"],
	tag_list: [
		{
			tag_name: ",attr",
			tag_description:
				"Maps the field to an XML attribute value instead of an element",
			tag_usage: [
				'xml:"id,attr"',
				'// Struct: type Person struct { Id int `xml:"id,attr"` }',
				'// XML: <person id="123"></person>',
				"// Result: Person{Id: 123}",
			],
		},
		{
			tag_name: ",omitempty",
			tag_description:
				"Omits the field from XML output if it contains an empty value (zero value)",
			tag_usage: [
				'xml:"height,omitempty"',
				'// Struct: type Person struct { Height float32 `xml:"height,omitempty"` }',
				"// When Height = 0: <person></person>",
				"// When Height = 1.75: <person><height>1.75</height></person>",
			],
		},
		{
			tag_name: ">",
			tag_description:
				"Descends into nested XML elements using > as a path separator",
			tag_usage: [
				'xml:"name>first"',
				'// Struct: type Person struct { FirstName string `xml:"name>first"` }',
				"// XML: <person><name><first>John</first></name></person>",
				'// Result: Person{FirstName: "John"}',
			],
		},
		{
			tag_name: ",comment",
			tag_description: "Accumulates XML comments into the field",
			tag_usage: [
				'xml:",comment"',
				'// Struct: type Person struct { Comment string `xml:",comment"` }',
				"// XML: <person><!-- This is a comment --></person>",
				'// Result: Person{Comment: " This is a comment "}',
			],
		},
		{
			tag_name: ",chardata",
			tag_description:
				"Maps XML character data (text content) directly to the field",
			tag_usage: [
				'xml:",chardata"',
				'// Struct: type Text struct { Data string `xml:",chardata"` }',
				"// XML: <text>This is text</text>",
				'// Result: Text{Data: "This is text"}',
			],
		},
		{
			tag_name: ",innerxml",
			tag_description:
				"Captures raw XML content including tags as a string or []byte",
			tag_usage: [
				'xml:",innerxml"',
				'// Struct: type Raw struct { Content string `xml:",innerxml"` }',
				"// XML: <raw><child>text</child></raw>",
				'// Result: Raw{Content: "<child>text</child>"}',
			],
		},
		{
			tag_name: "-",
			tag_description:
				"Prevents the field from being marshaled/unmarshaled in XML",
			tag_usage: [
				'xml:"-"',
				'// Struct: type Person struct { Secret string `xml:"-"`; Name string `xml:"name"` }',
				"// XML: <person><name>John</name></person>",
				"// Secret field is ignored",
			],
		},
		{
			tag_name: ",any",
			tag_description:
				"Maps any unmatched XML elements or attributes to this field",
			tag_usage: [
				'xml:",any"',
				'// Struct: type CatchAll struct { Extra interface{} `xml:",any"` }',
				"// XML: <root><unexpected>value</unexpected></root>",
				"// Captures unexpected elements",
			],
		},
	],
};
