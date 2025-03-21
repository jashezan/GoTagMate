import type { ITag } from "./tag.type";

export const fetchTOMLKeywords: ITag = {
    keyword: "toml",
    description: "Tom's Obvious, Minimal Language",
    library_link: ["github.com/BurntSushi/toml", "github.com/pelletier/go-toml"],
    tag_list: [
        {
            tag_name: ",omitempty",
            tag_description: "Omits the field from TOML output if it's empty or zero-valued",
            tag_usage: ['toml:"ip,omitempty"']
        },
    ]
};