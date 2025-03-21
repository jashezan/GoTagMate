import type { ITag } from "./tag.type";

export const fetchEnvKeywords: ITag = {
	keyword: "env",
	description:
		"A simple, zero-dependencies library to parse environment variables into structs",
	library_link: ["github.com/caarlos0/env/v11"],
	tag_list: [
		{
			tag_name: ",expand",
			tag_description:
				"Enables expansion of embedded environment variables within the value (e.g., '${VAR}' or '$VAR'), replacing them with their actual values during parsing.",
			tag_usage: [
				'env:"EXPAND_1,expand"',
				'env:"PATH,expand" envDefault:"/home/${USER}"',
				'env:"URL,expand" envPrefix:"APP_"',
			],
		},
		{
			tag_name: ",file",
			tag_description:
				"Indicates that the environment variable contains a file path, and the library will read the file's contents to populate the field instead of using the variable value directly.",
			tag_usage: [
				'env:"SECRET,file"',
				'env:"KEY,file" envDefault:"/tmp/key"',
				'env:"CONFIG,file" envPrefix:"SECURITY_"',
			],
		},
		{
			tag_name: ",init",
			tag_description:
				"Automatically initializes nil pointer fields in structs, ensuring they are allocated even if no environment variable is set, useful for nested structs.",
			tag_usage: [
				'env:",init"',
				'env:"DATA,init" envDefault:"default"',
				'env:",init" envPrefix:"INNER_"',
			],
		},
		{
			tag_name: ",notEmpty",
			tag_description:
				"Enforces that the environment variable must have a non-empty value, raising an error during parsing if the value is an empty string.",
			tag_usage: [
				'env:"NOPE,notEmpty"',
				'env:"NAME,notEmpty" envDefault:"user"',
				'env:"VALUE,notEmpty" envPrefix:"REQ_"',
			],
		},
		{
			tag_name: ",required",
			tag_description:
				"Mandates that the environment variable must be set, causing parsing to fail with an error if the variable is undefined, regardless of its value.",
			tag_usage: [
				'env:"NOPE,required"',
				'env:"HOST,required" envDefault:"localhost"',
				'env:"DB,required" envPrefix:"DB_"',
			],
		},
		{
			tag_name: ",unset",
			tag_description:
				"Instructs the library to unset (remove) the environment variable from the process after reading it, useful for sensitive data like secrets or tokens.",
			tag_usage: [
				'env:"SECRET,unset"',
				'env:"TOKEN,unset" envDefault:"temp"',
				'env:"KEY,unset" envPrefix:"AUTH_"',
			],
		},
	],
};
