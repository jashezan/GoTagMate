import type { ITag } from "./tag.type";

export const fetchValidateKeywords: ITag = {
	keyword: "validate",
	description:
		"Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving",
	library_link: ["github.com/go-playground/validator/v10"],
	tag_list: [
		{
			tag_name: "required",
			tag_description: "field is required",
			tag_usage: ['validate:"required"'],
		},
		{
			tag_name: "is-awesome",
			tag_description: "custom validation",
			tag_usage: ['validate:"is-awesome"'],
		},
		{
			tag_name: "gte",
			tag_description: "field must be greater than or equal to the value",
			tag_usage: ['validate:"gte=0"'],
		},
		{
			tag_name: "lte",
			tag_description: "field must be less than or equal to the value",
			tag_usage: ['validate:"lte=130"'],
		},
		{
			tag_name: "email",
			tag_description: "field must be a valid email address",
			tag_usage: ['validate:"email"'],
		},
		{
			tag_name: "oneof",
			tag_description: "field must be one of the specified values",
			tag_usage: ['validate:"oneof=male female prefer_not_to"'],
		},
		{
			tag_name: "iscolor",
			tag_description: "field must be a valid hex color code",
			tag_usage: ['validate:"iscolor"'],
		},
		{
			tag_name: "hexcolor",
			tag_description: "field must be a valid hex color code",
			tag_usage: ['validate:"hexcolor"'],
		},
		{
			tag_name: "rgb",
			tag_description: "field must be a valid rgb color code",
			tag_usage: ['validate:"rgb"'],
		},
	],
};
