import type { ITag } from "./tag.type";

export const fetchValidateKeywords: ITag = {
	keyword: "validate",
	description:
		"Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving",
	library_link: ["github.com/go-playground/validator/v10"],
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
			tag_name: "fieldcontains", // Fields
			tag_description:
				"Checks whether the field contains the specified substring. Useful for ensuring certain keywords are present in input.",
			tag_usage: [
				'validate:"fieldcontains=@gmail.com"',
				'validate:"fieldcontains=admin"',
			],
		},
		{
			tag_name: "fieldexcludes", // Fields
			tag_description:
				"Ensures the field does not contain the specified substring. Helps to restrict unwanted values.",
			tag_usage: [
				'validate:"fieldexcludes=password"',
				'validate:"fieldexcludes=forbidden"',
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
			tag_name: "ip4_addr", // Networks
			tag_description: "Field must be a valid IPv4 address.",
			tag_usage: ['validate:"ip4_addr"', 'validate:"ip4_addr,required"'],
		},
		{
			tag_name: "ip6_addr", // Networks
			tag_description: "Field must be a valid IPv6 address.",
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
			tag_description: "Field must be a valid TCP address.",
			tag_usage: ['validate:"tcp_addr"', 'validate:"tcp_addr,required"'],
		},
		{
			tag_name: "udp_addr", // Networks
			tag_description: "Field must be a valid UDP address.",
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
			tag_name: "http_url", // Networks
			tag_description: "Field must be a valid HTTP or HTTPS URL.",
			tag_usage: ['validate:"http_url"', 'validate:"http_url,required"'],
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
			tag_name: "spicedb", // Format
			tag_description:
				"Field must be a valid SpiceDB ObjectID, permission, or type.",
			tag_usage: [
				'validate:"spicedb"',
				'validate:"spicedb" json:"permission_id"',
			],
		},
		{
			tag_name: "datetime", // Format
			tag_description: "Field must be a valid datetime string.",
			tag_usage: [
				'validate:"datetime"',
				'validate:"datetime" json:"timestamp"',
			],
		},
		{
			tag_name: "e164", // Format
			tag_description:
				"Field must be a valid E.164 formatted phone number, used internationally.",
			tag_usage: ['validate:"e164"', 'validate:"e164" json:"phone"'],
		},
		{
			tag_name: "ein", // Format
			tag_description:
				"Field must be a valid U.S. Employer Identification Number (EIN).",
			tag_usage: [
				'validate:"ein"',
				'validate:"ein" json:"company_tax_id"',
			],
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
			tag_description: "Field must be less than the specified value.",
			tag_usage: [
				'validate:"lt=100"',
				'validate:"lt=18" json:"age"',
				'validate:"lt=5000" json:"price"',
			],
		},
		{
			tag_name: "lte", // Comparisons
			tag_description:
				"Field must be less than or equal to the specified value.",
			tag_usage: [
				'validate:"lte=100"',
				'validate:"lte=21" json:"age"',
				'validate:"lte=1000" json:"discount"',
			],
		},
		{
			tag_name: "gt", // Comparisons
			tag_description: "Field must be greater than the specified value.",
			tag_usage: [
				'validate:"gt=10"',
				'validate:"gt=18" json:"age"',
				'validate:"gt=0" json:"balance"',
			],
		},
		{
			tag_name: "gte", // Comparisons
			tag_description:
				"Field must be greater than or equal to the specified value.",
			tag_usage: [
				'validate:"gte=18"',
				'validate:"gte=21" json:"drinking_age"',
				'validate:"gte=500" json:"salary"',
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
				"Validates that the field's value is unique within a collection or dataset. This is commonly used to ensure no duplicate values exist, such as unique usernames or email addresses.",
			tag_usage: [
				'validate:"unique" // Ensures the field value is unique in the database (e.g., username)',
				'validate:"unique" // Ensures the field value is unique in a slice or array',
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
			tag_name: "currency_code", // Aliases
			tag_description:
				"Validates that the fields value is a valid currency code, ",
			tag_usage: ['validate:"currency_code" // Aliases for iso4217'],
		},
	],
};
