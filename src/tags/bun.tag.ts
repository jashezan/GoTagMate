import type { ITag } from "./tag.type";

export const fetchBunKeywords: ITag = {
	keyword: "bun",
	description: "Bun ORM for SQL databases",
	library_link: ["github.com/uptrace/bun"],
	tag_list: [
		{
			tag_name: "-",
			tag_description:
				"Ignores the field during Bun ORM mapping and queries.",
			tag_usage: ['bun:"-"'],
		},
		{
			tag_name: ",pk",
			tag_description:
				"Marks the column as a primary key and applies the notnull constraint.",
			tag_usage: ['bun:"id,pk"'],
		},
		{
			tag_name: ",autoincrement",
			tag_description:
				"Marks the column as auto-incrementing (serial in PostgreSQL, autoincrement in MySQL, identity in MSSQL) and applies nullzero.",
			tag_usage: ['bun:"id,autoincrement"'],
		},
		{
			tag_name: "type",
			tag_description:
				"Overrides the default SQL column type inferred from the Go type (e.g., type:uuid, type:integer).",
			tag_usage: ['bun:"type:uuid"'],
		},
		{
			tag_name: "default",
			tag_description:
				"Sets a default SQL expression for the column during table creation (e.g., default:current_timestamp).",
			tag_usage: ['bun:"default:current_timestamp"'],
		},
		{
			tag_name: ",notnull",
			tag_description:
				"Adds a NOT NULL constraint to the column during table creation.",
			tag_usage: ['bun:",notnull"'],
		},
		{
			tag_name: ",unique",
			tag_description:
				"Adds a unique constraint to the column during table creation.",
			tag_usage: ['bun:",unique"'],
		},
		{
			tag_name: ",unique:group_name",
			tag_description:
				"Defines a unique constraint across a group of columns identified by group_name.",
			tag_usage: ['bun:",unique:group1"'],
		},
		{
			tag_name: ",nullzero",
			tag_description:
				"Marshals Go zero values as SQL NULL or DEFAULT when supported.",
			tag_usage: ['bun:",nullzero"'],
		},
		{
			tag_name: ",scanonly",
			tag_description:
				"Uses the field only for scanning query results, ignoring it in SELECT/INSERT/UPDATE/DELETE.",
			tag_usage: ['bun:",scanonly"'],
		},
		{
			tag_name: ",array",
			tag_description: "Maps the field to a PostgreSQL array type.",
			tag_usage: ['bun:",array"'],
		},
		{
			tag_name: ",json_use_number",
			tag_description:
				"Decodes JSON into the field using json.Decoder.UseNumber for numeric precision.",
			tag_usage: ['bun:",json_use_number"'],
		},
		{
			tag_name: ",msgpack",
			tag_description:
				"Encodes/decodes the field using MessagePack instead of JSON.",
			tag_usage: ['bun:",msgpack"'],
		},
		{
			tag_name: ",soft_delete",
			tag_description:
				"Enables soft deletes on the model, typically used with a time.Time field like DeletedAt.",
			tag_usage: ['bun:",soft_delete"'],
		},
		{
			tag_name: "alt",
			tag_description:
				"Specifies an alternative column name for use during migrations (e.g., alt:old_name).",
			tag_usage: ['bun:"alt:old_name"'],
		},
		{
			tag_name: "embed",
			tag_description:
				"Embeds a struct's fields into the table with a specified prefix (e.g., embed:users_).",
			tag_usage: ['bun:"embed:users_"'],
		},
		{
			tag_name: ",extend",
			tag_description:
				"Extends an existing model by inheriting its table name and alias, allowing field addition/removal.",
			tag_usage: ['bun:",extend"'],
		},
		{
			tag_name: "rel:belongs-to",
			tag_description:
				"Defines a belongs-to relationship, linking a foreign key to a primary key (e.g., join:author_id=id).",
			tag_usage: [
				'bun:"rel:belongs-to,join:author_id=id"',
				"join:id=user_id,join:vendor_id=vendor_id //You can specify multiple join columns,",
			],
		},
		{
			tag_name: "rel:has-many",
			tag_description:
				"Defines a has-many relationship, linking a primary key to a foreign key (e.g., join:id=user_id).",
			tag_usage: [
				'bun:"rel:has-many,join:id=user_id"',
				"join:profile_id=id,join:vendor_id=vendor_id. //You can specify multiple join columns,",
			],
		},
		{
			tag_name: "rel:has-many,polymorphic",
			tag_description:
				"Defines a polymorphic has-many relationship using a type column (e.g., join:id=trackable_id,join:type=trackable_type).",
			tag_usage: [
				'bun:"rel:has-many,join:id=trackable_id,join:type=trackable_type,polymorphic"',
				"join:id=user_id,join:vendor_id=vendor_id. //You can specify multiple join columns,",
			],
		},
		{
			tag_name: "m2m",
			tag_description:
				"Defines a many-to-many relationship via an intermediary table (e.g., m2m:order_to_items,join:Order=Item). Requires db.RegisterModel.",
			tag_usage: ['bun:"m2m:order_to_items,join:Order=Item"'],
		},
	],
};
