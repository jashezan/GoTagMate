import type { ITag } from "./tag.type";

export const fetchRedisKeywords: ITag = {
	keyword: "redis",
	description:
		"go-redis is the official Redis client library for the Go programming language. It offers a straightforward interface for interacting with Redis servers.",
	library_link: [
		"github.com/redis/go-redis/v9",
		"github.com/gomodule/redigo/redis",
	],
	tag_list: [
		{
			tag_name: "-",
			tag_description:
				"Ignore field in Redis and will not be stored in Redis.",
			tag_usage: ['redis:"-"'],
		},
	],
};
