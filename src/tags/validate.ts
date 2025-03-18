// // MyStruct .. in _examples/custom-validation/main.go
// type MyStruct struct {
// 	String string `validate:"is-awesome"`
// }
// // DbBackedUser User struct in _examples/custom/main.go
// type DbBackedUser struct {
// 	Name sql.NullString `validate:"required"`
// 	Age  sql.NullInt64  `validate:"required"`
// }
// // User contains user information in _examples/simple/main.go
// type User struct {
// 	FirstName      string     `validate:"required"`
// 	LastName       string     `validate:"required"`
// 	Age            uint8      `validate:"gte=0,lte=130"`
// 	Email          string     `validate:"required,email"`
// 	Gender         string     `validate:"oneof=male female prefer_not_to"`
// 	FavouriteColor string     `validate:"iscolor"`                // alias for 'hexcolor|rgb|rgba|hsl|hsla'
// 	Addresses      []*Address `validate:"required,dive,required"` // a person can have a home and cottage...
// }

// // Address houses a users address information
// type Address struct {
// 	Street string `validate:"required"`
// 	City   string `validate:"required"`
// 	Planet string `validate:"required"`
// 	Phone  string `validate:"required"`
// }
// // User contains user information in non-standard/validators/notblank_test.go
// type test struct {
// 	String    string      `validate:"notblank"`
// 	Array     []int       `validate:"notblank"`
// 	Pointer   *int        `validate:"notblank"`
// 	Number    int         `validate:"notblank"`
// 	Interface interface{} `validate:"notblank"`
// 	Func      func()      `validate:"notblank"`
// }
export const fetchValidateKeywords = {
	keyword: "validate",
	description:
		"Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving",
	library_link: ["github.com/go-playground/validator/v10"],
	tag_list: [
		{
			tag_name: "required",
			tag_description: "field is required",
			tag_usage: ['validate:"required"'],
		},
		{
			tag_name: "is-awesome",
			tag_description: "custom validation",
			tag_usage: ['validate:"is-awesome"'],
		},
		{
			tag_name: "gte",
			tag_description: "field must be greater than or equal to the value",
			tag_usage: ['validate:"gte=0"'],
		},
		{
			tag_name: "lte",
			tag_description: "field must be less than or equal to the value",
			tag_usage: ['validate:"lte=130"'],
		},
		{
			tag_name: "email",
			tag_description: "field must be a valid email address",
			tag_usage: ['validate:"email"'],
		},
		{
			tag_name: "oneof",
			tag_description: "field must be one of the specified values",
			tag_usage: ['validate:"oneof=male female prefer_not_to"'],
		},
		{
			tag_name: "iscolor",
			tag_description: "field must be a valid hex color code",
			tag_usage: ['validate:"iscolor"'],
		},
		{
			tag_name: "hexcolor",
			tag_description: "field must be a valid hex color code",
			tag_usage: ['validate:"hexcolor"'],
		},
		{
			tag_name: "rgb",
			tag_description: "field must be a valid rgb color code",
			tag_usage: ['validate:"rgb"'],
		},
	],
};
