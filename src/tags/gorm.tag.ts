import type { ITag } from "./tag.type";

export const fetchGormKeywords: ITag = {
	keyword: "gorm",
	description:
		"GORM is a fantastic ORM library for Golang, aims to be developer friendly.",
	library_link: ["gorm.io/gorm", "github.com/go-gorm/gorm"],
	tag_list: [
		{
			tag_name: "column",
			tag_description: "column db name",
			tag_usage: ['gorm:"column:name"'],
		},
		{
			tag_name: "type",
			tag_description:
				"column data type, prefer to use compatible general type, e.g: bool, int, uint, float, string, time, bytes, which works for all databases, and can be used with other tags together, like not null, size, autoIncrement… specified database data type like varbinary(8) also supported, when using specified database data type, it needs to be a full database data type, for example: MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT",
			tag_usage: ['gorm:"type:varchar(100)"'],
		},
		{
			tag_name: "serializer",
			tag_description:
				"specifies serializer for how to serialize and deserialize data into db, e.g: serializer:json/gob/unixtime",
			tag_usage: ['gorm:"serializer:json/gob/unixtime"'],
		},
		{
			tag_name: "size",
			tag_description: "specifies column data size/length, e.g: size:256",
			tag_usage: ['gorm:"size:256"'],
		},
		{
			tag_name: "primaryKey",
			tag_description: "specifies column as primary key",
			tag_usage: ['gorm:"primaryKey"'],
		},
		{
			tag_name: "unique",
			tag_description: "specifies column as unique",
			tag_usage: ['gorm:"unique"'],
		},
		{
			tag_name: "default",
			tag_description: "specifies column default value",
			tag_usage: ['gorm:"default:xxx"'],
		},
		{
			tag_name: "precision",
			tag_description: "specifies column precision",
			tag_usage: ['gorm:"precision:2"'],
		},
		{
			tag_name: "scale",
			tag_description: "specifies column scale",
			tag_usage: ['gorm:"scale:2"'],
		},
		{
			tag_name: "not null",
			tag_description: "specifies column as NOT NULL",
			tag_usage: ['gorm:"not null"'],
		},
		{
			tag_name: "autoIncrement",
			tag_description: "specifies column auto incrementable",
			tag_usage: ['gorm:"autoIncrement"'],
		},
		{
			tag_name: "autoIncrementIncrement",
			tag_description:
				"auto increment step, controls the interval between successive column values",
			tag_usage: ['gorm:"autoIncrementIncrement:10"'],
		},
		{
			tag_name: "embedded",
			tag_description: "embed the field",
			tag_usage: ['gorm:"embedded"'],
		},
		{
			tag_name: "embeddedPrefix",
			tag_description: "column name prefix for embedded fields",
			tag_usage: ['gorm:"embeddedPrefix:prefix_"'],
		},
		{
			tag_name: "autoCreateTime",
			tag_description:
				"track current time when creating, for int fields, it will track unix seconds, use value nano/milli to track unix nano/milli seconds, e.g: autoCreateTime:nano",
			tag_usage: ['gorm:"autoCreateTime:nano"'],
		},
		{
			tag_name: "autoUpdateTime",
			tag_description:
				"track current time when creating/updating, for int fields, it will track unix seconds, use value nano/milli to track unix nano/milli seconds, e.g: autoUpdateTime:milli",
			tag_usage: ['gorm:"autoUpdateTime:milli"'],
		},
		{
			tag_name: "index",
			tag_description: "creates index with given name, ",
			tag_usage: [
				'gorm:"index"',
				'gorm:"index:idx_name,unique"',
				"gorm:\"index:,sort:desc,collate:utf8,type:btree,length:10,where:name3 != 'jinzhu'\"`",
				'gorm:"uniqueIndex"',
				'gorm:"index:,class:FULLTEXT,comment:hello \\, world,where:age > 10"',
				'gorm:"index:,expression:ABS(age)"',
			],
		},
		{
			tag_name: "uniqueIndex",
			tag_description: "same as index, but create uniqued index",
			tag_usage: ['gorm:"uniqueIndex"'],
		},
		{
			tag_name: "check",
			tag_description:
				"creates check constraint, eg: check:age > 13, refer Constraints",
			tag_usage: [
				'gorm:"check:age > 13"',
				"gorm:\"check:name_checker,name <> 'jinzhu'\"",
				"gorm:\"check:,name <> 'jinzhu'\"",
				"gorm:\"check:age > 13, name_checker,name <> 'jinzhu'\"",
			],
		},
		{
			tag_name: "<-",
			tag_description:
				"set field's write permission, <- create and update permission",
			tag_usage: ['gorm:"<-"'],
		},
		{
			tag_name: "<-:create",
			tag_description:
				"set field's write permission, <-:create create-only field",
			tag_usage: ['gorm:"<-:create"'],
		},
		{
			tag_name: "<-:update",
			tag_description:
				"set field's write permission, <-:update update-only field",
			tag_usage: ['gorm:"<-:update"'],
		},
		{
			tag_name: "<-:false",
			tag_description:
				"set field's write permission, no write permission",
			tag_usage: ['gorm:"<-:false"'],
		},
		{
			tag_name: "->",
			tag_description:
				"set field's read permission, ->:false no read permission",
			tag_usage: ['gorm:"->"'],
		},
		{
			tag_name: "-",
			tag_description: "ignore this field, - no read/write permission, ",
			tag_usage: ['gorm:"-"'],
		},
		{
			tag_name: "-:migration",
			tag_description: "no migrate permission",
			tag_usage: ['gorm:"-:migration"'],
		},
		{
			tag_name: "-:all",
			tag_description: "no read/write/migrate permission",
			tag_usage: ['gorm:"-:all"'],
		},
		{
			tag_name: "comment",
			tag_description: "add comment for field when migration",
			tag_usage: ['gorm:"comment:comment text"'],
		},
		{
			tag_name: "foreignKey",
			tag_description: "specifies foreign key constraint",
			tag_usage: ['gorm:"foreignKey:UserRefer"'],
		},
		{
			tag_name: "references",
			tag_description:
				"specifies foreign key reference table and column, e.g: references:users(id)",
			tag_usage: ['gorm:"references:user_refer"'],
		},
		{
			tag_name: "polymorphic",
			tag_description:
				"specifies polymorphic type, typically the model name",
			tag_usage: ['gorm:"polymorphic:type"'],
		},
		{
			tag_name: "polymorphicValue",
			tag_description:
				"specifies polymorphic value, usually the table name, if not specified otherwise",
			tag_usage: ['gorm:"polymorphicValue:table_name"'],
		},
		{
			tag_name: "many2many",
			tag_description: "specifies many-to-many relationship",
			tag_usage: ['gorm:"many2many:UserRefer"'],
		},
		{
			tag_name: "joinForeignKey",
			tag_description:
				"identifies the foreign key column in the join table that maps back to the current model's table",
			tag_usage: ['gorm:"joinForeignKey:UserReferID"'],
		},
		{
			tag_name: "joinReferences",
			tag_description:
				"points to the foreign key column in the join table that links to the reference model's table",
			tag_usage: ['gorm:"joinReferences:ID"'],
		},
		{
			tag_name: "constraint",
			tag_description:
				"specifies relational constraints like `OnUpdate`, `OnDelete` for the association",
			tag_usage: [
				'gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"',
				'gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"',
			],
		},
	],
};
