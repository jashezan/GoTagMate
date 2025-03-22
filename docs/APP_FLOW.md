# Application Flow of GoTagMate

### 1. **Extension Initialization**
- **Entry Point**: The extension starts with `src/extension.ts`, which is the main file executed when VSCode activates the extension.
- **Activation Event**: The extension is activated when a Go file (`.go`) is opened in VSCode, as defined in `package.json` under `activationEvents` (e.g., `"onLanguage:go"`).
- **Setup**:
  - Registers a **Completion Provider** for the Go language using the `vscode.languages.registerCompletionItemProvider` API.
  - Specifies trigger characters (e.g., ```, ` `, `=`, `;`, `,`) from `src/constants/trigger_chars.const.ts` to initiate or re-trigger suggestions.
  - Loads tag definitions and suggestions from modular files in `src/tags/` (e.g., `json.tag.ts`, `gorm.tag.ts`, `validate.tag.ts`) and `src/completion/suggestion/libraries/` (e.g., `json.suggest.ts`, `gorm.suggest.ts`).

### 2. **User Interaction Begins**
- **User Action**: The user opens a Go file and starts typing a struct definition, e.g.:
  ```go
  type User struct {
      Name string `
  ```
- **Trigger Detection**: When the user types a backtick (```), the extension detects it as a trigger character (defined in `trigger_chars.const.ts`).

### 3. **Initial Tag Suggestions**
- **Flow**:
  - The `Completion Provider` defined in `src/completion/completion.provider.ts` is invoked.
  - The extension checks if the cursor is within a Go struct using utility functions like `check_struct.util.ts`.
  - If confirmed, it fetches a list of supported tag types (e.g., `json:""`, `gorm:""`, `validate:""`) from `src/completion/suggestion/library.suggest.ts`.
- **Output**: A dropdown appears with suggestions like:
  - `json:""`
  - `gorm:""`
  - `validate:""`
  - Other supported libraries (e.g., `bson:""`, `xml:""`, etc.).
- **Details**: Each suggestion is a `CompletionItem` (created via `completion_item.util.ts`) with a label, description, and documentation in Markdown format.

### 4. **Tag Selection and Context-Aware Suggestions**
- **User Action**: The user selects a tag, e.g., `json:""`, resulting in:
  ```go
  type User struct {
      Name string `json:""`
  ```
- **Flow**:
  - The extension uses regex-based parsing (via `check_quote.util.ts`) to detect that the cursor is inside double quotes (`""`).
  - It identifies the tag type (`json`) and fetches context-specific suggestions from `src/completion/suggestion/libraries/json.suggest.ts`.
  - Suggestions are dynamically generated based on the library (e.g., `omitempty`, `string`, `-` for `json`).
- **Output**: A new dropdown appears with options like:
  - `omitempty`
  - `string`
  - `-`
- **Documentation**: Hovering over a suggestion (e.g., `omitempty`) displays detailed Markdown documentation (e.g., "Omits the field from JSON output if its value is empty").

### 5. **Re-triggering Suggestions**
- **User Action**: The user types a space, equal sign, semicolon, or comma inside the quotes, e.g.:
  ```go
  type User struct {
      Name string `json:"name "`
  ```
- **Flow**:
  - The extension detects the trigger character (` `, `=`, `;`, `,`) using `trigger_chars.const.ts`.
  - It re-invokes the `Completion Provider` to provide additional suggestions based on the current tag context.
  - For example, after `json:"name "`, it might suggest `omitempty` again if not already added.
- **Output**: Suggestions reappear, allowing the user to chain multiple tag values (e.g., `json:"name,omitempty"`).

### 6. **Field Name Integration**
- **Flow**:
  - The extension uses `field_name.util.ts` to extract the struct field name (e.g., `Name`) and converts it to a suggested tag value using `case_conversion.util.ts`.
  - For `json:""`, it might suggest `name` (lowercase) based on common JSON conventions.
- **Output**: The user can accept the suggestion to complete the tag:
  ```go
  type User struct {
      Name string `json:"name"`
  ```

### 7. **Support for Multiple Tags**
- **User Action**: The user adds another backtick to include additional tags:
  ```go
  type User struct {
      Name string `json:"name" `
  ```
- **Flow**:
  - The extension detects the new backtick and suggests additional tag types (e.g., `gorm:""`, `validate:""`).
  - The process repeats, providing context-aware suggestions for the new tag.
- **Output**: The user can build a multi-tag struct field:
  ```go
  type User struct {
      Name string `json:"name,omitempty" gorm:"column:name" validate:"required"`
  ```

### 8. **Documentation on Hover**
- **Flow**:
  - When the user hovers over a completed tag (e.g., `json:"name,omitempty"`), the extension provides a hover provider (likely in `extension.ts` or a separate provider) that fetches documentation from the respective library file (e.g., `json.tag.ts`).
- **Output**: A tooltip displays:
  - **Label**: `omitempty`
  - **Description**: "Omits the field from JSON output if its value is empty (e.g., zero value for the type)."
  - **Example**: ```go
    type User struct {
        Name string `json:"name,omitempty"`
    }
    // If Name is "", it will be omitted from JSON.
    ```

### 9. **Error Handling and Edge Cases**
- **Invalid Context**: If the backtick is typed outside a struct, `check_struct.util.ts` prevents suggestions from appearing.
- **Performance**: The lightweight design ensures minimal lag, even in large files, by optimizing regex and suggestion generation.
- **Extensibility**: New libraries can be added by creating files in `src/tags/` and `src/completion/suggestion/libraries/`, following the modular structure.

### 10. **Completion and Persistence**
- **User Action**: The user finishes editing the struct and saves the file.
- **Flow**:
  - The extension does not persist state between sessions but re-evaluates the context each time a trigger character is typed.
  - Suggestions remain available as long as the file is open and the cursor is in a valid position.

---

## Full Example Walkthrough
### Initial State
```go
type User struct {
    Name string
    Age  int
}
```

### Step 1: User Adds a Backtick
```go
type User struct {
    Name string `
    Age  int
}
```
- Suggestions: `json:""`, `gorm:""`, `validate:""`, etc.

### Step 2: User Selects `json:""`
```go
type User struct {
    Name string `json:""`
    Age  int
}
```
- Suggestions: `name`, `omitempty`, `string`, `-`.

### Step 3: User Accepts `name` and Adds a Space
```go
type User struct {
    Name string `json:"name "`
    Age  int
}
```
- Suggestions: `omitempty`, `string`, `-`.

### Step 4: User Adds `omitempty` and Another Tag
```go
type User struct {
    Name string `json:"name,omitempty" `
    Age  int
}
```
- Suggestions: `gorm:""`, `validate:""`, etc.

### Step 5: Final Result
```go
type User struct {
    Name string `json:"name,omitempty" gorm:"column:name" validate:"required"`
    Age  int
}
```
- Hovering over any tag shows detailed documentation.

---

## Technical Flow Summary
1. **Initialization**: `extension.ts` registers the `Completion Provider`.
2. **Trigger Detection**: Backtick (```) or other characters (` `, `=`, `;`, `,`) trigger `completion.provider.ts`.
3. **Context Check**: `check_struct.util.ts` and `check_quote.util.ts` validate the cursor position.
4. **Suggestion Generation**: Library-specific files (e.g., `json.suggest.ts`) provide dynamic suggestions.
5. **Item Creation**: `completion_item.util.ts` builds `CompletionItem` objects with documentation.
6. **Re-triggering**: Additional characters re-invoke the provider for chained suggestions.
7. **Documentation**: Hover provider displays Markdown-formatted details.

This flow leverages the modular file structure and ensures GoTagMate is intuitive for beginners while powerful for advanced users, aligning with its design goals.