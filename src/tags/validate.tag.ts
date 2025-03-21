import type { ITag } from "./tag.type";

export const fetchValidateKeywords: ITag = {
	keyword: "validate",
	description:
		"Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving",
	library_link: ["github.com/go-playground/validator/v10"],
	version: "10.25.0",
	last_published: "Feb 15, 2025",
	tag_list: [
		{
			tag_name: "eqcsfield", // Fields
			tag_description:
				"Field must be equal to another specified field (relative comparison). Useful for ensuring two fields have the same value, like password confirmation.",
			tag_usage: [
				'validate:"eqcsfield=ConfirmPassword"',
				'validate:"eqcsfield=BillingAddress"',
			],
		},
		{
			tag_name: "eqfield", // Fields
			tag_description:
				"Field must be equal to another specified field. Commonly used for confirming user inputs.",
			tag_usage: [
				'validate:"eqfield=Email"',
				'validate:"eqfield=Username"',
			],
		},
		{
			tag_name: "containsfield", // Fields
			tag_description:
				"Checks whether the field contains the specified substring. Useful for ensuring certain keywords are present in input.",
			tag_usage: [
				'validate:"containsfield=@gmail.com"',
				'validate:"containsfield=admin"',
			],
		},
		{
			tag_name: "excludesfield", // Fields
			tag_description:
				"Ensures the field does not contain the specified substring. Helps to restrict unwanted values.",
			tag_usage: [
				'validate:"excludesfield=password"',
				'validate:"excludesfield=forbidden"',
			],
		},
		{
			tag_name: "gtcsfield", // Fields
			tag_description:
				"Field must be greater than another specified field (relative comparison). Useful for validating ranges like start and end dates.",
			tag_usage: [
				'validate:"gtcsfield=StartDate"',
				'validate:"gtcsfield=MinAmount"',
			],
		},
		{
			tag_name: "gtecsfield", // Fields
			tag_description:
				"Field must be greater than or equal to another specified field. Commonly used for range validation.",
			tag_usage: [
				'validate:"gtecsfield=MinSalary"',
				'validate:"gtecsfield=StartDate"',
			],
		},
		{
			tag_name: "gtefield", // Fields
			tag_description:
				"Field must be greater than or equal to another specified field. Similar to gtecsfield but for direct field comparisons.",
			tag_usage: [
				'validate:"gtefield=AgeRequirement"',
				'validate:"gtefield=MinBalance"',
			],
		},
		{
			tag_name: "gtfield", // Fields
			tag_description:
				"Field must be greater than another specified field. Commonly used for age, amounts, or numeric range validation.",
			tag_usage: [
				'validate:"gtfield=MinStock"',
				'validate:"gtfield=BasePrice"',
			],
		},
		{
			tag_name: "ltcsfield", // Fields
			tag_description:
				"Field must be less than another specified field (relative comparison). Useful for setting maximum value constraints.",
			tag_usage: [
				'validate:"ltcsfield=EndDate"',
				'validate:"ltcsfield=MaxParticipants"',
			],
		},
		{
			tag_name: "ltecsfield", // Fields
			tag_description:
				"Field must be less than or equal to another specified field. Useful for ensuring an input does not exceed a threshold.",
			tag_usage: [
				'validate:"ltecsfield=MaxBudget"',
				'validate:"ltecsfield=ExpiryDate"',
			],
		},
		{
			tag_name: "ltefield", // Fields
			tag_description:
				"Field must be less than or equal to another specified field. Similar to ltecsfield but used for direct field comparisons.",
			tag_usage: [
				'validate:"ltefield=MaxPrice"',
				'validate:"ltefield=TotalLimit"',
			],
		},
		{
			tag_name: "ltfield", // Fields
			tag_description:
				"Field must be less than another specified field. Often used to validate age, dates, or quantity constraints.",
			tag_usage: [
				'validate:"ltfield=RetirementAge"',
				'validate:"ltfield=MaxAllowed"',
			],
		},
		{
			tag_name: "necsfield", // Fields
			tag_description:
				"Field must not be equal to another specified field (relative comparison). Useful for ensuring two inputs are different.",
			tag_usage: [
				'validate:"necsfield=OldPassword"',
				'validate:"necsfield=PrimaryEmail"',
			],
		},
		{
			tag_name: "nefield", // Fields
			tag_description:
				"Field must not be equal to another specified field. Used when ensuring uniqueness between fields.",
			tag_usage: [
				'validate:"nefield=CurrentPIN"',
				'validate:"nefield=PreviousPassword"',
			],
		},
		{
			tag_name: "cidr", // Networks
			tag_description:
				"Field must be a valid Classless Inter-Domain Routing (CIDR) notation.",
			tag_usage: ['validate:"cidr"', 'validate:"cidr,required"'],
		},
		{
			tag_name: "cidrv4", // Networks
			tag_description: "Field must be a valid CIDR notation for IPv4.",
			tag_usage: ['validate:"cidrv4"', 'validate:"cidrv4,required"'],
		},
		{
			tag_name: "cidrv6", // Networks
			tag_description: "Field must be a valid CIDR notation for IPv6.",
			tag_usage: ['validate:"cidrv6"', 'validate:"cidrv6,required"'],
		},
		{
			tag_name: "datauri", // Networks
			tag_description: "Field must be a valid Data URI (Base64 encoded).",
			tag_usage: ['validate:"datauri"', 'validate:"datauri,required"'],
		},
		{
			tag_name: "fqdn", // Networks
			tag_description:
				"Field must be a valid Fully Qualified Domain Name (FQDN).",
			tag_usage: ['validate:"fqdn"', 'validate:"fqdn,required"'],
		},
		{
			tag_name: "hostname", // Networks
			tag_description:
				"Field must be a valid hostname according to RFC 952.",
			tag_usage: ['validate:"hostname"', 'validate:"hostname,required"'],
		},
		{
			tag_name: "hostname_port", // Networks
			tag_description:
				"Field must be a valid hostname with a port number.",
			tag_usage: [
				'validate:"hostname_port"',
				'validate:"hostname_port,required"',
			],
		},
		{
			tag_name: "hostname_rfc1123", // Networks
			tag_description:
				"Field must be a valid hostname according to RFC 1123.",
			tag_usage: [
				'validate:"hostname_rfc1123"',
				'validate:"hostname_rfc1123,required"',
			],
		},
		{
			tag_name: "ip", // Networks
			tag_description: "Field must be a valid IP address (IPv4 or IPv6).",
			tag_usage: ['validate:"ip"', 'validate:"ip,required"'],
		},
		{
			tag_name: "ip4_addr",
			tag_description: "Field must be a valid, resolvable IPv4 address.",
			tag_usage: ['validate:"ip4_addr"', 'validate:"ip4_addr,required"'],
		},
		{
			tag_name: "ip6_addr",
			tag_description: "Field must be a valid, resolvable IPv6 address.",
			tag_usage: ['validate:"ip6_addr"', 'validate:"ip6_addr,required"'],
		},
		{
			tag_name: "mac", // Networks
			tag_description:
				"Field must be a valid MAC (Media Access Control) address.",
			tag_usage: ['validate:"mac"', 'validate:"mac,required"'],
		},
		{
			tag_name: "tcp_addr", // Networks
			tag_description: "Field must be a valid, resolvable TCP address.",
			tag_usage: ['validate:"tcp_addr"', 'validate:"tcp_addr,required"'],
		},
		{
			tag_name: "udp_addr", // Networks
			tag_description: "Field must be a valid, resolvable UDP address.",
			tag_usage: ['validate:"udp_addr"', 'validate:"udp_addr,required"'],
		},
		{
			tag_name: "unix_addr", // Networks
			tag_description:
				"Field must be a valid Unix domain socket address.",
			tag_usage: [
				'validate:"unix_addr"',
				'validate:"unix_addr,required"',
			],
		},
		{
			tag_name: "uri", // Networks
			tag_description: "Field must be a valid URI.",
			tag_usage: ['validate:"uri"', 'validate:"uri,required"'],
		},
		{
			tag_name: "url", // Networks
			tag_description: "Field must be a valid URL.",
			tag_usage: ['validate:"url"', 'validate:"url,required"'],
		},
		{
			tag_name: "url", // Networks
			tag_description: "Field must be a valid HTTP or HTTPS URL.",
			tag_usage: ['validate:"url"', 'validate:"url,required"'],
		},
		{
			tag_name: "urn_rfc2141", // Networks
			tag_description: "Field must be a valid URN according to RFC 2141.",
			tag_usage: [
				'validate:"urn_rfc2141"',
				'validate:"urn_rfc2141,required"',
			],
		},
		{
			tag_name: "alpha", // Strings
			tag_description:
				"Field must contain only alphabetic characters (a-z, A-Z) without spaces or numbers.",
			tag_usage: ['validate:"alpha"'],
		},
		{
			tag_name: "alphanum", // Strings
			tag_description:
				"Field must contain only alphanumeric characters (a-z, A-Z, 0-9) without spaces or special characters.",
			tag_usage: ['validate:"alphanum"'],
		},
		{
			tag_name: "alphanumunicode", // Strings
			tag_description:
				"Field must contain only Unicode alphanumeric characters.",
			tag_usage: ['validate:"alphanumunicode"'],
		},
		{
			tag_name: "alphaunicode", // Strings
			tag_description:
				"Field must contain only Unicode alphabetic characters.",
			tag_usage: ['validate:"alphaunicode"'],
		},
		{
			tag_name: "ascii", // Strings
			tag_description: "Field must contain only ASCII characters.",
			tag_usage: ['validate:"ascii"'],
		},
		{
			tag_name: "boolean", // Strings
			tag_description: "Field must be a boolean value (true or false).",
			tag_usage: ['validate:"boolean"'],
		},
		{
			tag_name: "contains", // Strings
			tag_description: "Field must contain the specified substring.",
			tag_usage: ['validate:"contains=hello"'],
		},
		{
			tag_name: "containsany", // Strings
			tag_description:
				"Field must contain at least one of the specified characters.",
			tag_usage: ['validate:"containsany=!@#"'],
		},
		{
			tag_name: "containsrune", // Strings
			tag_description: "Field must contain the specified Unicode rune.",
			tag_usage: ['validate:"containsrune=€"'],
		},
		{
			tag_name: "endsnotwith", // Strings
			tag_description: "Field must not end with the specified substring.",
			tag_usage: ['validate:"endsnotwith=.com"'],
		},
		{
			tag_name: "endswith", // Strings
			tag_description: "Field must end with the specified substring.",
			tag_usage: ['validate:"endswith=.org"'],
		},
		{
			tag_name: "excludes", // Strings
			tag_description: "Field must not contain the specified substring.",
			tag_usage: ['validate:"excludes=admin"'],
		},
		{
			tag_name: "excludesall", // Strings
			tag_description:
				"Field must not contain any of the specified characters.",
			tag_usage: ['validate:"excludesall=1234"'],
		},
		{
			tag_name: "excludesrune", // Strings
			tag_description:
				"Field must not contain the specified Unicode rune.",
			tag_usage: ['validate:"excludesrune=$"'],
		},
		{
			tag_name: "lowercase", // Strings
			tag_description: "Field must be entirely in lowercase.",
			tag_usage: ['validate:"lowercase"'],
		},
		{
			tag_name: "multibyte", // Strings
			tag_description: "Field must contain multibyte characters.",
			tag_usage: ['validate:"multibyte"'],
		},
		{
			tag_name: "number", // Strings
			tag_description: "Field must contain only numeric digits.",
			tag_usage: ['validate:"number"'],
		},
		{
			tag_name: "numeric", // Strings
			tag_description:
				"Field must be a valid numeric value, including decimals.",
			tag_usage: ['validate:"numeric"'],
		},
		{
			tag_name: "printascii", // Strings
			tag_description:
				"Field must contain only printable ASCII characters.",
			tag_usage: ['validate:"printascii"'],
		},
		{
			tag_name: "startsnotwith", // Strings
			tag_description:
				"Field must not start with the specified substring.",
			tag_usage: ['validate:"startsnotwith=xyz"'],
		},
		{
			tag_name: "startswith", // Strings
			tag_description: "Field must start with the specified substring.",
			tag_usage: ['validate:"startswith=abc"'],
		},
		{
			tag_name: "uppercase", // Strings
			tag_description: "Field must be entirely in uppercase.",
			tag_usage: ['validate:"uppercase"'],
		},
		{
			tag_name: "base64", // Format
			tag_description:
				"Field must be a valid Base64-encoded string, commonly used for encoding binary data as text.",
			tag_usage: [
				'validate:"base64"',
				'validate:"base64" json:"image_data"',
				'validate:"base64" form:"encoded_file"',
			],
		},
		{
			tag_name: "base64url", // Format
			tag_description:
				"Field must be a valid Base64 URL-safe encoded string.",
			tag_usage: [
				'validate:"base64url"',
				'validate:"base64url" json:"token"',
			],
		},
		{
			tag_name: "base64rawurl", // Format
			tag_description:
				"Field must be a valid raw Base64 URL-safe encoded string, without padding characters.",
			tag_usage: [
				'validate:"base64rawurl"',
				'validate:"base64rawurl" json:"secure_key"',
			],
		},
		{
			tag_name: "bic", // Format
			tag_description:
				"Field must be a valid Business Identifier Code (BIC), commonly used for international banking.",
			tag_usage: ['validate:"bic"', 'validate:"bic" json:"swift_code"'],
		},
		{
			tag_name: "bcp47_language_tag", // Format
			tag_description:
				"Field must be a valid BCP 47 language tag, used for internationalization.",
			tag_usage: [
				'validate:"bcp47_language_tag"',
				'validate:"bcp47_language_tag" json:"locale"',
			],
		},
		{
			tag_name: "btc_addr", // Format
			tag_description: "Field must be a valid Bitcoin address.",
			tag_usage: [
				'validate:"btc_addr"',
				'validate:"btc_addr" json:"wallet_address"',
			],
		},
		{
			tag_name: "btc_addr_bech32", // Format
			tag_description:
				"Field must be a valid Bitcoin Bech32 address (segwit).",
			tag_usage: [
				'validate:"btc_addr_bech32"',
				'validate:"btc_addr_bech32" json:"bech32_wallet"',
			],
		},
		{
			tag_name: "credit_card", // Format
			tag_description:
				"Field must be a valid credit card number, commonly used in payment processing.",
			tag_usage: [
				'validate:"credit_card"',
				'validate:"credit_card" json:"card_number"',
			],
		},
		{
			tag_name: "mongodb", // Format
			tag_description: "Field must be a valid MongoDB ObjectID.",
			tag_usage: [
				'validate:"mongodb"',
				'validate:"mongodb" json:"document_id"',
			],
		},
		{
			tag_name: "mongodb_connection_string", // Format
			tag_description: "Field must be a valid MongoDB connection string.",
			tag_usage: [
				'validate:"mongodb_connection_string"',
				'validate:"mongodb_connection_string" json:"db_url"',
			],
		},
		{
			tag_name: "cron", // Format
			tag_description:
				"Field must be a valid cron expression, commonly used for scheduling tasks.",
			tag_usage: [
				'validate:"cron"',
				'validate:"cron" json:"job_schedule"',
			],
		},
		{
			tag_name: "spicedb",
			tag_description:
				"Field must be a valid SpiceDB ObjectID, permission, or type. Specify purpose with 'id', 'permission', or 'type' (defaults to 'id' if unspecified).",
			tag_usage: [
				'validate:"spicedb=id" // Validates as SpiceDB ObjectID',
				'validate:"spicedb=permission" // Validates as SpiceDB permission',
				'validate:"spicedb=type" // Validates as SpiceDB type',
			],
		},
		{
			tag_name: "tcp4_addr",
			tag_description:
				"Validates that the field contains a valid, resolvable IPv4 TCP address.",
			tag_usage: ['validate:"tcp4_addr" // e.g., 192.168.1.1:8080'],
		},
		{
			tag_name: "tcp6_addr",
			tag_description:
				"Validates that the field contains a valid, resolvable IPv6 TCP address.",
			tag_usage: ['validate:"tcp6_addr" // e.g., [2001:db8::1]:8080'],
		},
		{
			tag_name: "udp4_addr",
			tag_description:
				"Validates that the field contains a valid, resolvable IPv4 UDP address.",
			tag_usage: ['validate:"udp4_addr" // e.g., 192.168.1.1:1234'],
		},
		{
			tag_name: "udp6_addr",
			tag_description:
				"Validates that the field contains a valid, resolvable IPv6 UDP address.",
			tag_usage: ['validate:"udp6_addr" // e.g., [2001:db8::1]:1234'],
		},
		{
			tag_name: "ipv4",
			tag_description:
				"Validates that the field contains a valid IPv4 address (not necessarily resolvable).",
			tag_usage: ['validate:"ipv4" // e.g., 192.168.1.1'],
		},
		{
			tag_name: "ipv6",
			tag_description:
				"Validates that the field contains a valid IPv6 address (not necessarily resolvable).",
			tag_usage: ['validate:"ipv6" // e.g., 2001:db8::1'],
		},
		{
			tag_name: "datetime", // Format
			tag_description:
				"Field must be a valid datetime string matching the specified Go time format.",
			tag_usage: [
				'validate:"datetime=2006-01-02"',
				'validate:"datetime=2006-01-02T15:04:05Z" json:"timestamp"',
			],
		},
		{
			tag_name: "e164", // Format
			tag_description:
				"Field must be a valid E.164 formatted phone number, used internationally.",
			tag_usage: ['validate:"e164"', 'validate:"e164" json:"phone"'],
		},
		{
			tag_name: "email", // Format
			tag_description: "Field must be a valid email address.",
			tag_usage: [
				'validate:"email"',
				'validate:"email" json:"user_email"',
			],
		},
		{
			tag_name: "eth_addr", // Format
			tag_description: "Field must be a valid Ethereum address.",
			tag_usage: [
				'validate:"eth_addr"',
				'validate:"eth_addr" json:"eth_wallet"',
			],
		},
		{
			tag_name: "hexadecimal", // Format
			tag_description: "Field must be a valid hexadecimal string.",
			tag_usage: [
				'validate:"hexadecimal"',
				'validate:"hexadecimal" json:"color_code"',
			],
		},
		{
			tag_name: "hexcolor", // Format
			tag_description: "Field must be a valid hex color code.",
			tag_usage: [
				'validate:"hexcolor"',
				'validate:"hexcolor" json:"theme_color"',
			],
		},
		{
			tag_name: "lt", // Comparisons
			tag_description:
				"Field must be less than the specified value. For time.Time, ensures the value is before time.Now.UTC() when used without a parameter.",
			tag_usage: [
				'validate:"lt=100"',
				'validate:"lt=18" json:"age"',
				'validate:"lt" json:"creation_time" // For time.Time, before now',
			],
		},
		{
			tag_name: "lte", // Comparisons
			tag_description:
				"Field must be less than or equal to the specified value. For time.Time, ensures the value is at or before time.Now.UTC() when used without a parameter.",
			tag_usage: [
				'validate:"lte=100"',
				'validate:"lte=21" json:"age"',
				'validate:"lte" json:"deadline" // For time.Time, at or before now',
			],
		},
		{
			tag_name: "gt", // Comparisons
			tag_description:
				"Field must be greater than the specified value. For time.Time, ensures the value is after time.Now.UTC() when used without a parameter.",
			tag_usage: [
				'validate:"gt=10"',
				'validate:"gt=18" json:"age"',
				'validate:"gt" json:"expiration" // For time.Time, after now',
			],
		},
		{
			tag_name: "gte", // Comparisons
			tag_description:
				"Field must be greater than or equal to the specified value. For time.Time, ensures the value is at or after time.Now.UTC() when used without a parameter.",
			tag_usage: [
				'validate:"gte=18"',
				'validate:"gte=21" json:"drinking_age"',
				'validate:"gte" json:"start_time" // For time.Time, at or after now',
			],
		},
		{
			tag_name: "eq", // Comparisons
			tag_description:
				"Field must be exactly equal to the specified value.",
			tag_usage: [
				'validate:"eq=100"',
				'validate:"eq=1" json:"is_active"',
				'validate:"eq=50" json:"score"',
			],
		},
		{
			tag_name: "ne", // Comparisons
			tag_description: "Field must not be equal to the specified value.",
			tag_usage: [
				'validate:"ne=0"',
				'validate:"ne=inactive" json:"status"',
				'validate:"ne=unknown" json:"category"',
			],
		},
		{
			tag_name: "dir", // Other
			tag_description:
				"Validates that the field's value is a path to an existing directory on the filesystem. This is useful for ensuring that directory paths provided in configurations or user inputs are valid and accessible.",
			tag_usage: [
				'validate:"dir" // Ensures the field is a valid directory path (e.g., "/var/logs")',
				'validate:"dir" // Validates user-provided directory paths for file storage (e.g., "/home/user/uploads")',
			],
		},
		{
			tag_name: "dirpath", // Other
			tag_description:
				"Validates that the field's value is a valid directory path, regardless of whether the directory exists. This is useful for validating directory paths that may be created later in the application workflow.",
			tag_usage: [
				'validate:"dirpath" // Ensures the field is a valid directory path (e.g., "/var/logs")',
				'validate:"dirpath" // Validates a directory path for future use (e.g., "/tmp/new_folder")',
			],
		},
		{
			tag_name: "file", // Other
			tag_description:
				"Validates that the field's value is a path to an existing file on the filesystem. This is commonly used to ensure that file paths provided in configurations or user inputs are valid and accessible.",
			tag_usage: [
				'validate:"file" // Ensures the field is a valid file path (e.g., "/etc/config.yaml")',
				'validate:"file" // Validates user-uploaded file paths (e.g., "/uploads/report.pdf")',
			],
		},
		{
			tag_name: "filepath", // Other
			tag_description:
				"Validates that the field's value is a valid file path, regardless of whether the file exists. This is useful for validating file paths that may be created later in the application workflow.",
			tag_usage: [
				'validate:"filepath" // Ensures the field is a valid file path (e.g., "/tmp/new_file.txt")',
				'validate:"filepath" // Validates a file path for future use (e.g., "/reports/2023/summary.pdf")',
			],
		},
		{
			tag_name: "image", // Other
			tag_description:
				"Validates that the field's value is a path to an existing image file. This is commonly used to ensure that image paths provided in configurations or user inputs are valid and accessible.",
			tag_usage: [
				'validate:"image" // Ensures the field is a valid image file path (e.g., "/images/logo.png")',
				'validate:"image" // Validates user-uploaded image paths (e.g., "/uploads/profile.jpg")',
			],
		},
		{
			tag_name: "isdefault", // Other
			tag_description:
				"Validates that the field's value is the default value for its type. This is useful for ensuring that a field has not been modified from its default state.",
			tag_usage: [
				'validate:"isdefault" // Ensures the field has its default value (e.g., 0 for integers, "" for strings)',
				'validate:"isdefault" // Validates that a configuration field has not been changed from its default',
			],
		},
		{
			tag_name: "len", // Other
			tag_description:
				"Validates that the field's value has a specific length. This is useful for enforcing fixed-length requirements on strings, arrays, or slices.",
			tag_usage: [
				'validate:"len=10" // Ensures the field has exactly 10 characters (e.g., "1234567890")',
				'validate:"len=5" // Ensures the array or slice has exactly 5 elements',
			],
		},
		{
			tag_name: "max", // Other
			tag_description:
				"Validates that the field's value does not exceed the specified maximum value. This is useful for enforcing upper limits on numbers, strings, arrays, or slices.",
			tag_usage: [
				'validate:"max=100" // Ensures the field is less than or equal to 100 (e.g., 99)',
				'validate:"max=50" // Ensures the string length is at most 50 characters',
			],
		},
		{
			tag_name: "min", // Other
			tag_description:
				"Validates that the field's value meets or exceeds the specified minimum value. This is useful for enforcing lower limits on numbers, strings, arrays, or slices.",
			tag_usage: [
				'validate:"min=18" // Ensures the field is at least 18 (e.g., 20)',
				'validate:"min=5" // Ensures the string length is at least 5 characters',
			],
		},
		{
			tag_name: "oneof", // Other
			tag_description:
				"Validates that the field's value is one of the specified options. This is useful for enforcing a set of allowed values for a field.",
			tag_usage: [
				'validate:"oneof=red green blue" // Ensures the field is either "red", "green", or "blue"',
				'validate:"oneof=enabled disabled" // Ensures the field is either "enabled" or "disabled"',
			],
		},
		{
			tag_name: "required", // Other
			tag_description:
				"Validates that the field's value is not empty or zero. This is essential for ensuring that mandatory fields are provided.",
			tag_usage: [
				'validate:"required" // Ensures the field is not empty (e.g., "username")',
				'validate:"required" // Ensures the field is not zero (e.g., 42)',
			],
		},
		{
			tag_name: "required_if", // Other
			tag_description:
				"Validates that the field's value is required if another field has a specific value. This is useful for conditional validation.",
			tag_usage: [
				'validate:"required_if=Role admin" // Ensures the field is required if the "Role" field is "admin"',
				'validate:"required_if=Status active" // Ensures the field is required if the "Status" field is "active"',
			],
		},
		{
			tag_name: "required_unless", // Other
			tag_description:
				"Validates that the field's value is required unless another field has a specific value. This is useful for conditional validation.",
			tag_usage: [
				'validate:"required_unless=Role guest" // Ensures the field is required unless the "Role" field is "guest"',
				'validate:"required_unless=Status inactive" // Ensures the field is required unless the "Status" field is "inactive"',
			],
		},
		{
			tag_name: "required_with", // Other
			tag_description:
				"Validates that the field's value is required if any of the specified fields are present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"required_with=Email Phone" // Ensures the field is required if either "Email" or "Phone" is present',
				'validate:"required_with=Address City" // Ensures the field is required if either "Address" or "City" is present',
			],
		},
		{
			tag_name: "required_with_all", // Other
			tag_description:
				"Validates that the field's value is required only if all of the specified fields are present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"required_with_all=Email Phone" // Ensures the field is required only if both "Email" and "Phone" are present',
				'validate:"required_with_all=Address City Zip" // Ensures the field is required only if all of "Address", "City", and "Zip" are present',
			],
		},
		{
			tag_name: "required_without", // Other
			tag_description:
				"Validates that the field's value is required if any of the specified fields are not present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"required_without=Email Phone" // Ensures the field is required if either "Email" or "Phone" is missing',
				'validate:"required_without=Address City" // Ensures the field is required if either "Address" or "City" is missing',
			],
		},
		{
			tag_name: "required_without_all", // Other
			tag_description:
				"Validates that the field's value is required only if all of the specified fields are not present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"required_without_all=Email Phone" // Ensures the field is required only if both "Email" and "Phone" are missing',
				'validate:"required_without_all=Address City Zip" // Ensures the field is required only if all of "Address", "City", and "Zip" are missing',
			],
		},
		{
			tag_name: "excluded_if", // Other
			tag_description:
				"Validates that the field's value is excluded if another field has a specific value. This is useful for conditional validation.",
			tag_usage: [
				'validate:"excluded_if=Role admin" // Ensures the field is excluded if the "Role" field is "admin"',
				'validate:"excluded_if=Status active" // Ensures the field is excluded if the "Status" field is "active"',
			],
		},
		{
			tag_name: "excluded_unless", // Other
			tag_description:
				"Validates that the field's value is excluded unless another field has a specific value. This is useful for conditional validation.",
			tag_usage: [
				'validate:"excluded_unless=Role guest" // Ensures the field is excluded unless the "Role" field is "guest"',
				'validate:"excluded_unless=Status inactive" // Ensures the field is excluded unless the "Status" field is "inactive"',
			],
		},
		{
			tag_name: "excluded_with", // Other
			tag_description:
				"Validates that the field's value is excluded if any of the specified fields are present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"excluded_with=Email Phone" // Ensures the field is excluded if either "Email" or "Phone" is present',
				'validate:"excluded_with=Address City" // Ensures the field is excluded if either "Address" or "City" is present',
			],
		},
		{
			tag_name: "excluded_with_all", // Other
			tag_description:
				"Validates that the field's value is excluded only if all of the specified fields are present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"excluded_with_all=Email Phone" // Ensures the field is excluded only if both "Email" and "Phone" are present',
				'validate:"excluded_with_all=Address City Zip" // Ensures the field is excluded only if all of "Address", "City", and "Zip" are present',
			],
		},
		{
			tag_name: "excluded_without", // Other
			tag_description:
				"Validates that the field's value is excluded if any of the specified fields are not present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"excluded_without=Email Phone" // Ensures the field is excluded if either "Email" or "Phone" is missing',
				'validate:"excluded_without=Address City" // Ensures the field is excluded if either "Address" or "City" is missing',
			],
		},
		{
			tag_name: "excluded_without_all", // Other
			tag_description:
				"Validates that the field's value is excluded only if all of the specified fields are not present. This is useful for conditional validation.",
			tag_usage: [
				'validate:"excluded_without_all=Email Phone" // Ensures the field is excluded only if both "Email" and "Phone" are missing',
				'validate:"excluded_without_all=Address City Zip" // Ensures the field is excluded only if all of "Address", "City", and "Zip" are missing',
			],
		},
		{
			tag_name: "unique", // Other
			tag_description:
				"Validates that the field's values (arrays, slices, maps) or a struct field's values have no duplicates. Does not check database uniqueness.",
			tag_usage: [
				'validate:"unique" // Ensures no duplicates in an array/slice/map',
				'validate:"unique=username" // Ensures no duplicate username values in a slice of structs',
			],
		},
		{
			tag_name: "iscolor", // Aliases
			tag_description:
				"Validates that the field's value is a valid color representation. This alias supports multiple color formats, including hex color codes, RGB, RGBA, HSL, and HSLA. It is commonly used in applications where color inputs are required, such as design tools, theme configurations, or UI customization.",
			tag_usage: [
				'validate:"iscolor" // Aliases for hexcolor|rgb|rgba|hsl|hsla',
			],
		},
		{
			tag_name: "country_code", // Aliases
			tag_description:
				"Validates that the field's value is a valid country code. This alias supports ISO 3166-1 alpha-2 (2-letter), alpha-3 (3-letter), and numeric country codes. It is commonly used in applications that require country-specific data, such as international shipping, user profiles, or geographic analytics.",
			tag_usage: [
				'validate:"country_code" // Aliases for iso3166_1_alpha2|iso3166_1_alpha3|iso3166_1_alpha_numeric',
			],
		},
		{
			tag_name: "-",
			tag_description:
				"Tells the validator to skip this field entirely. Useful for ignoring embedded structs or fields not requiring validation.",
			tag_usage: ['validate:"-" // Skips validation for this field'],
		},
		{
			tag_name: "|",
			tag_description:
				"Allows multiple validators to be combined with an 'or' condition. The field is valid if it satisfies any of the specified validators.",
			tag_usage: [
				'validate:"rgb|rgba" // Accepts either rgb or rgba format',
				'validate:"email|hostname" // Accepts either email or hostname',
			],
		},
		{
			tag_name: "structonly",
			tag_description:
				"Validates the nested struct itself (e.g., required, omitempty) but skips its fields. Useful when you only need to check struct assignment.",
			tag_usage: [
				'validate:"structonly" // Validates struct presence only',
			],
		},
		{
			tag_name: "nostructlevel",
			tag_description:
				"Validates nested struct fields but skips struct-level validations. Opposite of structonly.",
			tag_usage: [
				'validate:"nostructlevel" // Skips struct-level validation',
			],
		},
		{
			tag_name: "omitempty",
			tag_description:
				"Skips validation if the field is empty (zero value), preventing further validation like min/max unless a value is set.",
			tag_usage: [
				'validate:"omitempty,min=5" // Skips min if empty',
				'validate:"omitempty,email" // Skips email check if empty',
			],
		},
		{
			tag_name: "omitnil",
			tag_description:
				"Skips validation if the field is nil. Similar to omitempty but specifically for nil values.",
			tag_usage: ['validate:"omitnil,len=10" // Skips len check if nil'],
		},
		{
			tag_name: "dive",
			tag_description:
				"Dives into slices, arrays, or maps to validate their elements with subsequent tags. Supports nested validation with multiple dive tags.",
			tag_usage: [
				'validate:"dive,required" // Validates each element is non-empty',
				'validate:"dive,dive,len=5" // Validates nested slice elements',
			],
		},
		{
			tag_name: "keys",
			tag_description:
				"Used with 'endkeys' after 'dive' to validate map keys (not values). Must be paired with 'endkeys'.",
			tag_usage: [
				'validate:"dive,keys,eq=1|endkeys,required" // Keys must be 1, values required',
			],
		},
		{
			tag_name: "oneofci",
			tag_description:
				"Validates that the field's value is one of the specified options (case-insensitive). Only for strings.",
			tag_usage: [
				'validate:"oneofci=red GREEN blue" // Accepts "red", "Red", "GREEN", etc.',
			],
		},
		{
			tag_name: "rgb",
			tag_description:
				"Validates that the field contains a valid RGB color string.",
			tag_usage: ['validate:"rgb" // e.g., rgb(255, 0, 0)'],
		},
		{
			tag_name: "rgba",
			tag_description:
				"Validates that the field contains a valid RGBA color string.",
			tag_usage: ['validate:"rgba" // e.g., rgba(255, 0, 0, 0.5)'],
		},
		{
			tag_name: "hsl",
			tag_description:
				"Validates that the field contains a valid HSL color string.",
			tag_usage: ['validate:"hsl" // e.g., hsl(120, 100%, 50%)'],
		},
		{
			tag_name: "hsla",
			tag_description:
				"Validates that the field contains a valid HSLA color string.",
			tag_usage: ['validate:"hsla" // e.g., hsla(120, 100%, 50%, 0.5)'],
		},
		{
			tag_name: "json",
			tag_description:
				"Validates that the field contains a valid JSON string.",
			tag_usage: ['validate:"json" // e.g., {"key": "value"}'],
		},
		{
			tag_name: "jwt",
			tag_description:
				"Validates that the field contains a valid JSON Web Token (JWT).",
			tag_usage: [
				'validate:"jwt" // e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
			],
		},
		{
			tag_name: "latitude",
			tag_description:
				"Validates that the field contains a valid latitude value.",
			tag_usage: ['validate:"latitude" // e.g., 40.7128'],
		},
		{
			tag_name: "longitude",
			tag_description:
				"Validates that the field contains a valid longitude value.",
			tag_usage: ['validate:"longitude" // e.g., -74.0060'],
		},
		{
			tag_name: "ssn",
			tag_description:
				"Validates that the field contains a valid U.S. Social Security Number.",
			tag_usage: ['validate:"ssn" // e.g., 123-45-6789'],
		},
		{
			tag_name: "uuid",
			tag_description:
				"Validates that the field contains a valid UUID (lowercase only).",
			tag_usage: [
				'validate:"uuid" // e.g., 550e8400-e29b-41d4-a716-446655440000',
			],
		},
		{
			tag_name: "uuid3",
			tag_description:
				"Validates that the field contains a valid version 3 UUID (lowercase only).",
			tag_usage: ['validate:"uuid3"'],
		},
		{
			tag_name: "uuid4",
			tag_description:
				"Validates that the field contains a valid version 4 UUID (lowercase only).",
			tag_usage: ['validate:"uuid4"'],
		},
		{
			tag_name: "uuid5",
			tag_description:
				"Validates that the field contains a valid version 5 UUID (lowercase only).",
			tag_usage: ['validate:"uuid5"'],
		},
		{
			tag_name: "ulid",
			tag_description:
				"Validates that the field contains a valid ULID (Universally Unique Lexicographically Sortable Identifier).",
			tag_usage: ['validate:"ulid" // e.g., 01ARZ3NDEKTSV4RRFFQ69G5FAV'],
		},
		{
			tag_name: "isbn",
			tag_description:
				"Validates that the field contains a valid ISBN (10 or 13). Full meaning of ISBN is International Standard Book Number.",
			tag_usage: [
				'validate:"isbn" // e.g., 0-7475-3269-9 or 978-0-7475-3269-9',
			],
		},
		{
			tag_name: "isbn10",
			tag_description:
				"Validates that the field contains a valid ISBN-10. Full meaning of ISBN-10 is International Standard Book Number.",
			tag_usage: ['validate:"isbn10" // e.g., 0-7475-3269-9'],
		},
		{
			tag_name: "isbn13",
			tag_description:
				"Validates that the field contains a valid ISBN-13. Full meaning of ISBN-13 is International Standard Book Number.",
			tag_usage: ['validate:"isbn13" // e.g., 978-0-7475-3269-9'],
		},
		{
			tag_name: "base32",
			tag_description:
				"Validates that the field contains a valid Base32-encoded string.",
			tag_usage: ['validate:"base32" // e.g., MZXW6YTB'],
		},
		{
			tag_name: "html",
			tag_description:
				"Validates that the field contains a valid HTML element tag.",
			tag_usage: ['validate:"html" // e.g., <div>'],
		},
		{
			tag_name: "html_encoded",
			tag_description:
				"Validates that the field contains a valid HTML-encoded character reference.",
			tag_usage: ['validate:"html_encoded" // e.g., &#39; or &#x27;'],
		},
		{
			tag_name: "url_encoded",
			tag_description:
				"Validates that the field contains a valid URL-encoded (percent-encoded) string.",
			tag_usage: ['validate:"url_encoded" // e.g., hello%20world'],
		},
		{
			tag_name: "timezone",
			tag_description:
				"Validates that the field contains a valid timezone string (non-empty, not 'Local').",
			tag_usage: ['validate:"timezone" // e.g., America/New_York'],
		},
		{
			tag_name: "semver",
			tag_description:
				"Validates that the field contains a valid Semantic Version (semver) string.",
			tag_usage: ['validate:"semver" // e.g., 1.2.3'],
		},
		{
			tag_name: "cve",
			tag_description:
				"Validates that the field contains a valid CVE (Common Vulnerabilities and Exposures) identifier.",
			tag_usage: ['validate:"cve" // e.g., CVE-2021-44228'],
		},
		{
			tag_name: "luhn_checksum",
			tag_description:
				"Validates that the field contains a valid Luhn checksum (e.g., for credit card numbers).",
			tag_usage: ['validate:"luhn_checksum" // e.g., 4539148803436467'],
		},
		{
			tag_name: "dns_rfc1035_label",
			tag_description:
				"Validates that the field contains a valid DNS label per RFC 1035. Full meaning of DNS is Domain Name System.",
			tag_usage: [
				'validate:"dns_rfc1035_label" // e.g., example: 3(www) + 1(.) + 3(com) = 7',
			],
		},
		{
			tag_name: "iso3166_1_alpha2",
			tag_description:
				"Validates that the field contains a valid ISO 3166-1 alpha-2 country code.",
			tag_usage: ['validate:"iso3166_1_alpha2" // e.g., US'],
		},
		{
			tag_name: "iso3166_1_alpha3",
			tag_description:
				"Validates that the field contains a valid ISO 3166-1 alpha-3 country code.",
			tag_usage: ['validate:"iso3166_1_alpha3" // e.g., USA'],
		},
		{
			tag_name: "iso3166_1_alpha_numeric",
			tag_description:
				"Validates that the field contains a valid ISO 3166-1 alpha-numeric country code.",
			tag_usage: ['validate:"iso3166_1_alpha_numeric" // e.g., 840'],
		},
		{
			tag_name: "uuid_rfc4122",
			tag_description:
				"Validates that the field contains a valid UUID per RFC 4122 (accepts uppercase and lowercase).",
			tag_usage: [
				'validate:"uuid_rfc4122" // e.g., 550E8400-E29B-41D4-A716-446655440000',
			],
		},
		{
			tag_name: "uuid3_rfc4122",
			tag_description:
				"Validates that the field contains a valid version 3 UUID per RFC 4122 (accepts uppercase and lowercase).",
			tag_usage: ['validate:"uuid3_rfc4122"'],
		},
		{
			tag_name: "uuid4_rfc4122",
			tag_description:
				"Validates that the field contains a valid version 4 UUID per RFC 4122 (accepts uppercase and lowercase).",
			tag_usage: ['validate:"uuid4_rfc4122"'],
		},
		{
			tag_name: "uuid5_rfc4122",
			tag_description:
				"Validates that the field contains a valid version 5 UUID per RFC 4122 (accepts uppercase and lowercase).",
			tag_usage: ['validate:"uuid5_rfc4122"'],
		},
	],
};
