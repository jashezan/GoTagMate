# DOCS.md

## GoTagMate - Go Struct Tag Autocompletion Extension

**GoTagMate** is a Visual Studio Code extension designed to enhance productivity for Go developers by providing autocompletion and hover suggestions for Go struct tags. It supports popular libraries like `json`, `gorm`, and `validate`, with a modular design that allows easy extension to additional tag libraries in the future.

- **Version**: 0.0.1
- **Author**: [Your Name]
- **License**: MIT (assumed; adjust as needed)

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [Code Details](#code-details)
   - [completion/completion.provider.ts](#completioncompletionproviderts)
   - [completion/suggestions.ts](#completionsuggestionsts)
   - [utils/struct.util.ts](#utilsstructutilts)
   - [utils/snake_case.util.ts](#utilssnake_caseutilts)
   - [utils/field_name.util.ts](#utilsfield_nameutilts)
   - [utils/completion_item.util.ts](#utilscompletion_itemutilts)
   - [tags/](#tag)
6. [Configuration](#configuration)
7. [Extending the Extension](#extending-the-extension)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)

---

## Features
- **Two-Type Autocompletion**:
  - **Type 1**: Library tags (e.g., `json:""`, `gorm:""`, `validate:""`) triggered by backtick (```), `Ctrl+Space` outside quotes, or space after a tag.
  - **Type 2**: Tag-specific keywords (e.g., `,omitempty`, `column`, `required`) triggered inside quotes after a library tag.
- **Hover Details**: Displays detailed descriptions and usage examples in a Markdown-formatted details box when suggestions are highlighted.
- **Context Awareness**: Suggestions are restricted to Go struct fields.
- **Dynamic Field Names**: Automatically suggests snake_case field names for JSON tags based on the struct field name.
- **Future-Proof Design**: Modular structure supports adding new tag libraries easily.

---

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/go_tag_mate.git
   cd go_tag_mate
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Compile**:
   ```bash
   npx tsc
   ```
4. **Run in VSCode**:
   - Open the project in VSCode.
   - Press `F5` to launch the extension in a development instance.
5. **Package (Optional)**:
   - Use `vsce` to package it into a `.vsix` file:
     ```bash
     npm install -g vsce
     vsce package
     ```
   - Install the `.vsix` file in VSCode via `Extensions: Install from VSIX`.

---

## Usage
1. **Open a Go File**:
   - Create or open a `.go` file with a struct, e.g.:
     ```go
     type User struct {
         FirstName string
     }
     ```
2. **Trigger Type 1 Suggestions**:
   - Type ``` after `string` to see library suggestions (`json`, `gorm`, `validate`).
   - Use arrow keys to highlight an option; the details box shows the description and usage.
   - Press `Enter` to insert (e.g., `json:""`).
3. **Trigger Type 2 Suggestions**:
   - Inside `json:""`, type a space or comma to see tag-specific options (e.g., `first_name`, `,omitempty`).
   - Highlight an option to view its details.
4. **Automatic Re-trigger**:
   - After inserting a Type 1 tag (e.g., `json:""`), suggestions re-trigger for Type 2 keywords.

---

## File Structure
The extension is organized into modular directories for maintainability:

```
src/
├── completion/                 # Autocompletion logic
│   ├── completion.provider.ts  # Main provider class
│   ├── suggestions.ts          # Suggestion generation methods
│   ├── index.ts               # Exports
├── constants/                  # Constants
│   ├── trigger_chars.const.ts # Trigger characters
├── tags/                       # Tag definitions
│   ├── gorm.tag.ts            # GORM tags
│   ├── json.tag.ts            # JSON tags
│   ├── tag.types.ts           # Tag interfaces
│   ├── validate.tag.ts        # Validate tags
│   ├── index.ts               # Exports
├── utils/                      # Utility functions
│   ├── struct.util.ts         # Struct detection
│   ├── snake_case.util.ts     # Snake case conversion
│   ├── field_name.util.ts     # Field name extraction
│   ├── completion_item.util.ts# Completion item creation
│   ├── index.ts               # Exports
├── description.ts              # Extension metadata
├── extension.ts                # Extension entry point
```

---

## Code Details

### `completion/completion.provider.ts`
- **Purpose**: Core class implementing `vscode.CompletionItemProvider`.
- **Key Methods**:
  - `provideCompletionItems`: Determines suggestion type based on cursor context.
  - `isInsideQuotes`: Checks if cursor is inside quotes after a library tag.
- **Triggers**:
  - Type 1: Backtick (```), `Ctrl+Space` outside quotes, or space after a tag.
  - Type 2: Inside quotes after `gorm`, `json`, or `validate`.

### `completion/suggestions.ts`
- **Purpose**: Generates completion items for both Type 1 and Type 2 suggestions.
- **Key Methods**:
  - `getLibrarySuggestions`: Returns hardcoded library tags (`json`, `gorm`, `validate`).
  - `getTagSpecificSuggestions`: Dispatches to library-specific suggestion methods.
  - `getGormCompletionItems`, `getValidateCompletionItems`, `getJsonCompletionItems`: Fetch and map tag data to completion items.
- **Dependencies**: Imports tag data from `tags/` and utilities from `utils/`.

### `utils/struct.util.ts`
- **Purpose**: Checks if the cursor is within a Go struct.
- **Method**: `isInsideGoStruct`
  - Uses `lastIndexOf` to detect `struct {` and `}` positions in the document text.

### `utils/snake_case.util.ts`
- **Purpose**: Converts CamelCase to snake_case for JSON field names.
- **Method**: `toSnakeCase`
  - Regex-based transformation (e.g., `FirstName` → `first_name`).

### `utils/field_name.util.ts`
- **Purpose**: Extracts the field name from the current line.
- **Method**: `getFieldName`
  - Uses regex `/(\w+)\s+\w+/` to match field names (e.g., `FirstName` in `FirstName string`).

### `utils/completion_item.util.ts`
- **Purpose**: Creates `vscode.CompletionItem` objects with consistent formatting.
- **Method**: `createCompletionItem`
  - Sets `label`, `detail`, `insertText`, `documentation` (Markdown), and `command` (re-trigger).
  - Enables `preselect` for auto-showing details.

### `tags/`
- **Purpose**: Defines tag data for libraries.
- **Files**:
  - `gorm.tag.ts`: GORM tags (e.g., `column`, `type`).
  - `json.tag.ts`: JSON tags (e.g., `,omitempty`, `-`).
  - `validate.tag.ts`: Validate tags (e.g., `required`).
  - `tag.types.ts`: Interfaces `ITag` and `ITagList` for tag data structure.

---

## Configuration
To ensure the details box appears automatically when highlighting suggestions:
1. Open VSCode settings (`Preferences: Open Settings (JSON)`).
2. Add:
   ```json
   {
     "editor.hover.enabled": true,
     "editor.parameterHints.enabled": true,
     "editor.quickSuggestions": true,
     "editor.suggest.detailsVisible": true
   }
   ```
   - `"editor.suggest.detailsVisible": true` is critical for auto-showing documentation.

---

## Extending the Extension
To add a new tag library (e.g., `newlib`):
1. **Create a Tag File**:
   - Add `src/tags/newlib.tag.ts`:
     ```typescript
     import { ITag } from "./tag.types";

     export const fetchNewLibKeywords: ITag = {
       keyword: "newlib",
       description: "Description of newlib",
       library_link: ["some/package"],
       tag_list: [
         {
           tag_name: "example",
           tag_description: "Example tag",
           tag_usage: [`newlib:"example"`],
         },
       ],
     };
     ```
2. **Update `tags/index.ts`**:
   ```typescript
   export * from "./newlib.tag";
   ```
3. **Update `suggestions.ts`**:
   - Add to `getLibrarySuggestions`:
     ```typescript
     createCompletionItem("newlib", "Description of newlib", 'newlib:"$1"', true, ['newlib:"example"']),
     ```
   - Add to `getTagSpecificSuggestions`:
     ```typescript
     case "newlib":
       return (fetchNewLibKeywords.tag_list ?? []).map((tag) =>
         createCompletionItem(tag.tag_name ?? "", tag.tag_description ?? "", tag.tag_name ?? "", false, tag.tag_usage ?? [])
       );
     ```

---

## Troubleshooting
- **Suggestions Not Appearing**:
  - Ensure you’re inside a Go struct.
  - Check trigger characters (```, `"`, space, etc.).
  - Verify `tags/` files export valid data.
- **Details Box Not Showing**:
  - Confirm `"editor.suggest.detailsVisible": true` in `settings.json`.
  - Reload VSCode after changing settings.
- **Compile Errors**:
  - Run `tsc` and check for missing imports or type mismatches.
- **Logs**:
  - Open `Developer: Toggle Developer Tools` in VSCode to view console logs.

---

## Contributing
1. **Fork the Repository**:
   - `git clone https://github.com/yourusername/go_tag_mate.git`
2. **Make Changes**:
   - Follow the existing structure and naming conventions (e.g., `utils/*.util.ts`).
3. **Test**:
   - Run `npx tsc` and test in VSCode with `F5`.
4. **Submit a Pull Request**:
   - Include a description of changes and any new features.

---
