import type { ITag } from "./tag.type";

export const fetchMsgpackKeywords: ITag = {
	keyword: "msgpack",
	description: "MessagePack binary serialization format",
	library_link: ["github.com/vmihailenco/msgpack"],
	tag_list: [
		{
			tag_name: "-",
			tag_description:
				"Ignores the field during Msgpack encoding and decoding.",
			tag_usage: ['msgpack:"-"'],
		},
		{
			tag_name: "alias",
			tag_description:
				"Adds an alias for the field to support decoding from an older name (format: alias:old_name).",
			tag_usage: ['msgpack:"alias:old_name"'],
		},
		{
			tag_name: ",omitempty",
			tag_description:
				"Omits the field from Msgpack encoding if its value is empty or zero-valued.",
			tag_usage: ['msgpack:",omitempty"'],
		},
		{
			tag_name: ",as_array",
			tag_description:
				"Encodes the struct as a Msgpack array instead of a map.",
			tag_usage: ['msgpack:",as_array"'],
		},
		{
			tag_name: ",inline",
			tag_description:
				"Inlines the struct fields into the parent object during encoding.",
			tag_usage: ['msgpack:",inline"'],
		},
		{
			tag_name: ",noinline",
			tag_description:
				"Prevents inlining of the struct, ensuring it’s encoded as a separate object.",
			tag_usage: ['msgpack:",noinline"'],
		},
	],
};
