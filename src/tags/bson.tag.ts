import type { ITag } from "./tag.type";

export const fetchBSONKeywords: ITag = {
	keyword: "bson",
	description: "Binary JSON serialization format used by MongoDB",
	library_link: ["go.mongodb.org/mongo-driver/bson"],
	tag_list: [
		{
			tag_name: ",omitempty",
			tag_description:
				"Omits the field from BSON marshaling if it is set to the zero value corresponding to its type.",
			tag_usage: ['bson:"first_name,omitempty"'],
		},
		{
			tag_name: ",minsize",
			tag_description:
				"Serializes int64, uint, uint32, or uint64 fields as BSON int32 if the value fits in a signed int32; ignored otherwise.",
			tag_usage: ['bson:"age,minsize"'],
		},
		{
			tag_name: ",truncate",
			tag_description:
				"Truncates BSON doubles at the decimal point when unmarshaling into non-float numeric fields.",
			tag_usage: ['bson:"age,truncate"'],
		},
		{
			tag_name: ",inline",
			tag_description:
				"Flattens struct or map fields during marshaling and unmarshals them back into the original structure.",
			tag_usage: ['bson:"inline"'],
		},
	],
};
