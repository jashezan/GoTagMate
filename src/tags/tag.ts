export interface ITag {
	keyword: string | null | undefined;
	description: string | null | undefined;
	library_link: string[] | null | undefined;
	tag_list: ITagList[] | null | undefined;
}
export interface ITagList {
	tag_name: string | null | undefined;
	tag_description: string | null | undefined;
	tag_usage: string[] | null | undefined;
}
