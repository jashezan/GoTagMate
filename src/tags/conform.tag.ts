import type { ITag } from "./tag.type";

export const fetchConformKeywords: ITag = {
	keyword: "conform",
	description: "String transformation and sanitization for Go structs",
	library_link: ["github.com/leebenson/conform"],
	tag_list: [
		{
			tag_name: "trim",
			tag_description:
				"Trims leading and trailing spaces from the string.",
			tag_usage: ['conform:"trim"'],
		},
		{
			tag_name: "ltrim",
			tag_description: "Trims leading spaces only from the string.",
			tag_usage: ['conform:"ltrim"'],
		},
		{
			tag_name: "rtrim",
			tag_description: "Trims trailing spaces only from the string.",
			tag_usage: ['conform:"rtrim"'],
		},
		{
			tag_name: "lower",
			tag_description: "Converts the string to lowercase.",
			tag_usage: ['conform:"lower"'],
		},
		{
			tag_name: "upper",
			tag_description: "Converts the string to uppercase.",
			tag_usage: ['conform:"upper"'],
		},
		{
			tag_name: "title",
			tag_description:
				"Converts the string to Title Case (e.g., 'this is' becomes 'This Is').",
			tag_usage: ['conform:"title"'],
		},
		{
			tag_name: "camel",
			tag_description:
				"Converts the string to camelCase (e.g., 'this is it' becomes 'thisIsIt').",
			tag_usage: ['conform:"camel"'],
		},
		{
			tag_name: "snake",
			tag_description:
				"Converts the string to snake_case (e.g., 'CamelCase' becomes 'camel_case').",
			tag_usage: ['conform:"snake"'],
		},
		{
			tag_name: "slug",
			tag_description:
				"Converts the string to a URL slug (e.g., 'LeeBensonWasHere' becomes 'lee-benson-was-here').",
			tag_usage: ['conform:"slug"'],
		},
		{
			tag_name: "ucfirst",
			tag_description:
				"Uppercases the first character of the string (e.g., 'all lower' becomes 'All lower').",
			tag_usage: ['conform:"ucfirst"'],
		},
		{
			tag_name: "name",
			tag_description:
				"Trims, removes numbers and special characters (except dashes/spaces), and title cases names (e.g., '3493€848Jo-s$%£@Ann' becomes 'Jo-Ann').",
			tag_usage: ['conform:"name"'],
		},
		{
			tag_name: "email",
			tag_description:
				"Trims and lowercases the domain portion of an email address (e.g., 'LEE@EXAMPlE.com' becomes 'LEE@example.com').",
			tag_usage: ['conform:"email"'],
		},
		{
			tag_name: "num",
			tag_description:
				"Removes all non-numeric characters, keeping the result as a string (e.g., '€30,38' becomes '3038').",
			tag_usage: ['conform:"num"'],
		},
		{
			tag_name: "!num",
			tag_description:
				"Removes all numeric characters (e.g., '39472349D34a34v69e8932747' becomes 'Dave').",
			tag_usage: ['conform:"!num"'],
		},
		{
			tag_name: "alpha",
			tag_description:
				"Removes all non-alphabetic Unicode characters (e.g., '!@£$%^&Hello123' becomes 'Hello').",
			tag_usage: ['conform:"alpha"'],
		},
		{
			tag_name: "!alpha",
			tag_description:
				"Removes all alphabetic Unicode characters (e.g., 'Everything's here!' becomes ''    !').",
			tag_usage: ['conform:"!alpha"'],
		},
		{
			tag_name: "!html",
			tag_description:
				"Escapes HTML characters using template.HTMLEscapeString (e.g., '<p>' becomes '&lt;p&gt;').",
			tag_usage: ['conform:"!html"'],
		},
		{
			tag_name: "!js",
			tag_description:
				"Escapes JavaScript characters using template.JSEscapeString (e.g., '<' becomes '\\u003C').",
			tag_usage: ['conform:"!js"'],
		},
	],
};
