import type { ITag } from "./tag.type";

export const fetchDynamoDBAVKeywords: ITag = {
	keyword: "dynamodbav",
	description: "DynamoDB AttributeValue marshaling format",
	library_link: [
		"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue",
	],
	tag_list: [
		{
			tag_name: "-",
			tag_description:
				"Ignores the field during DynamoDB AttributeValue marshaling and unmarshaling.",
			tag_usage: ['dynamodbav:"-"'],
		},
		{
			tag_name: ",omitempty",
			tag_description:
				"Omits the field from marshaling if it is empty or zero-valued; ignored during unmarshaling.",
			tag_usage: ['dynamodbav:",omitempty"'],
		},
		{
			tag_name: ",omitemptyelem",
			tag_description:
				"Omits empty elements from slices or maps during marshaling; only valid for slices and maps.",
			tag_usage: ['dynamodbav:",omitemptyelem"'],
		},
		{
			tag_name: ",string",
			tag_description:
				"Marshals number types (int, uint, float) as an AttributeValue string.",
			tag_usage: ['dynamodbav:",string"'],
		},
		{
			tag_name: ",binaryset",
			tag_description:
				"Marshals a slice of byte slices ([][]byte) as a DynamoDB binary set.",
			tag_usage: ['dynamodbav:",binaryset"'],
		},
		{
			tag_name: ",numberset",
			tag_description:
				"Marshals a slice of numbers (e.g., []int) as a DynamoDB number set.",
			tag_usage: ['dynamodbav:",numberset"'],
		},
		{
			tag_name: ",stringset",
			tag_description:
				"Marshals a slice of strings (e.g., []string) as a DynamoDB string set.",
			tag_usage: ['dynamodbav:",stringset"'],
		},
		{
			tag_name: ",unixtime",
			tag_description:
				"Marshals a time.Time field as a Unix time number in seconds; zero value is -62135596800, not 0.",
			tag_usage: ['dynamodbav:",unixtime"'],
		},
	],
};
