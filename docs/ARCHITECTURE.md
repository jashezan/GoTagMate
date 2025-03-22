# ARCHITECTURE.md

## Overview

**GoTagMate** is a VSCode extension designed to enhance productivity when working with Go struct tags. It provides intelligent autocompletion, context-aware suggestions, and detailed documentation for popular Go libraries such as `json`, `gorm`, `validate`, and more. The extension is built with performance in mind, leveraging TypeScript for type safety and modularity, and is optimized to handle frequent keypress events with minimal latency.

This document outlines the architecture, file structure, key components, and workflows of GoTagMate, making it easier for developers to understand the codebase and contribute effectively.

---

## File Structure

The project is organized into logical directories to ensure maintainability and scalability:

```
go_tag_mate/
├── assets/                  # Static assets (images, SVGs) for branding and documentation
│   ├── gotagmate-banner.jpg
│   ├── gotagmate-banner.svg
│   └── gotagmate.png
├── docs/                    # Additional documentation
│   └── DOCS.md
├── prompt/                  # Prompt-related files (e.g., for AI-assisted development)
│   ├── PROMPT.md
│   └── PROMPT2.MD
├── src/                     # Core source code
│   ├── completion/          # Completion providers and suggestion logic
│   │   ├── case_completion.provider.ts  # Case conversion suggestions
│   │   ├── completion.provider.ts       # Main completion provider
│   │   └── suggestion/      # Suggestion generation modules
│   │       ├── libraries/   # Library-specific suggestion logic
│   │       │   ├── bson.suggest.ts
│   │       │   ├── bun.suggest.ts
│   │       │   └── ... (other libraries)
│   │       ├── library.suggest.ts  # General library tag suggestions
│   │       └── tag.suggest.ts      # Tag-specific suggestions
│   ├── constants/           # Constants used across the extension
│   │   └── trigger_chars.const.ts  # Trigger characters for re-suggestions
│   ├── tags/                # Tag definitions and metadata
│   │   ├── bson.tag.ts
│   │   ├── bun.tag.ts
│   │   └── ... (other tags)
│   │   └── tag.type.ts      # Type definitions for tags
│   ├── utils/               # Utility functions
│   │   ├── case_conversion.util.ts  # Case conversion helpers
│   │   ├── check_quote.util.ts      # Quote detection logic
│   │   ├── check_struct.util.ts     # Struct detection logic
│   │   ├── completion_item.util.ts  # Completion item creation
│   │   └── field_name.util.ts       # Field name utilities
│   └── extension.ts         # Entry point for the extension
├── biome.json               # Biome configuration for linting/formatting
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── CHANGELOG.md             # Version history
├── README.md                # User-facing documentation
└── LICENSE                  # Licensing information
```

- **Assets**: Contains branding images for the extension (e.g., banners, icons).
- **Docs/Prompt**: Supplementary documentation and AI prompt files for development.
- **Src**: The heart of the extension, split into modules for completion, constants, tags, and utilities.
- **Root Files**: Configuration files and metadata for development and distribution.

---

## Architecture Overview

GoTagMate follows a modular, event-driven architecture typical of VSCode extensions. It uses a **Completion Provider** pattern to integrate with VSCode’s autocompletion system, providing suggestions based on cursor context within Go structs. The core workflow involves detecting triggers (e.g., backticks, quotes), generating suggestions, and presenting them with documentation.

### High-Level Workflow
1. **Activation**: The extension activates via `extension.ts`, registering the `GoTagCompletionProvider`.
2. **Trigger Detection**: On each keypress, `completion.provider.ts` checks if the cursor is in a Go struct (`check_struct.util.ts`) and identifies the context (e.g., backtick, inside quotes via `check_quote.util.ts`).
3. **Suggestion Generation**:
   - **Type 1 (Library Tags)**: Suggests tags like `json:""`, `gorm:""` via `library.suggest.ts`.
   - **Type 2 (Tag-Specific)**: Suggests tag-specific options (e.g., `omitempty` for `json`) via `tag.suggest.ts` and library-specific files (e.g., `json.suggest.ts`).
4. **Completion Items**: Generated using `completion_item.util.ts` with labels, details, and Markdown documentation.
5. **Re-triggering**: Monitors trigger characters (e.g., space, comma) from `trigger_chars.const.ts` to re-invoke suggestions.

### Key Components

1. **`extension.ts`**:
   - **Role**: Entry point that registers the `GoTagCompletionProvider` with VSCode.
   - **Optimization**: Lightweight, only sets up the provider once on activation.

2. **`completion.provider.ts`**:
   - **Role**: Implements `vscode.CompletionItemProvider` to handle keypress events and coordinate suggestion logic.
   - **Optimization**: Uses early exits, cached line access, and avoids regex where possible for O(1) checks.

3. **`suggestion/library.suggest.ts`**:
   - **Role**: Provides initial tag suggestions (e.g., `json:""`) when a backtick is typed.
   - **Optimization**: Precomputes suggestions at startup with `Object.freeze` for O(1) access.

4. **`suggestion/tag.suggest.ts`**:
   - **Role**: Routes tag-specific suggestions (e.g., `omitempty` for `json`) using a lookup table.
   - **Optimization**: Replaces switch statements with a frozen object map for O(1) lookups.

5. **`libraries/*.suggest.ts`**:
   - **Role**: Defines suggestion logic for specific libraries (e.g., `json.suggest.ts` for `json` tags).
   - **Optimization**: Modular and precomputed where possible to avoid runtime overhead.

6. **`tags/*.tag.ts`**:
   - **Role**: Stores metadata (labels, documentation) for each library’s tags.
   - **Optimization**: Frozen objects for immutable, cacheable data.

7. **`utils/`**:
   - **Role**: Reusable helpers for struct/quote detection, case conversion, and completion item creation.
   - **Optimization**: Precompiled regexes, minimal allocations, and fast string operations.

---

## Performance Considerations

GoTagMate is designed to handle frequent keypress events with minimal latency:
- **Precomputation**: Static data (e.g., library tags, case converters) is precomputed and frozen at startup to avoid runtime overhead.
- **O(1) Lookups**: Uses lookup tables (e.g., in `tag.suggest.ts`) instead of linear searches or switches.
- **Minimal Allocations**: Avoids large string buffers and unnecessary object creation (e.g., line-based struct detection).
- **Early Exits**: Short-circuits logic to return `undefined` quickly when conditions aren’t met.

Keypress latency is kept in the microsecond range, ensuring a responsive experience even in large files.

---

## Extensibility

GoTagMate is built to support new libraries and features:
1. **Adding a New Library**:
   - Create a new file in `src/suggestion/libraries/` (e.g., `newlib.suggest.ts`) with suggestion logic.
   - Add tag metadata in `src/tags/` (e.g., `newlib.tag.ts`).
   - Update `tag.suggest.ts` to include the new library in the lookup table.
   - Update `library.suggest.ts` to suggest the new tag on backtick.

2. **Custom Tags**:
   - Extend `tags/*.tag.ts` with custom tag definitions and documentation.
   - Add corresponding logic in `libraries/*.suggest.ts` if needed.

3. **New Triggers**:
   - Modify `trigger_chars.const.ts` to include additional re-trigger characters.
   - Update `completion.provider.ts` to handle new trigger conditions.

---

## How to Contribute

### Getting Started
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jashezan/GoTagMate.git
   cd GoTagMate
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Build the Extension**:
   ```bash
   npm run build
   ```
4. **Run in VSCode**:
   - Open the project in VSCode.
   - Press `F5` to launch the extension in a development instance.

### Development Workflow
- **Code Style**: Follow `biome.json` for linting and formatting (`npm run validate`).
- **Testing**: Test changes in a Go file with structs to verify suggestions and documentation.
- **Optimization**: Profile with VSCode’s built-in tools to ensure keypress latency remains low.
- **Documentation**: Update `README.md` or `DOCS.md` for user-facing changes, and this file for architectural updates.

### Contribution Ideas
- **New Libraries**: Add support for additional Go libraries (e.g., `protobuf`).
- **Enhancements**: Improve suggestion logic, documentation, or trigger detection.
- **Refactoring**: Optimize existing code for readability, performance, or maintainability.
- **Performance**: Implement caching for `isInsideGoStruct` or precompute field names.
- **Features**: Add tag validation or snippet support for complex tags.
- **Bug Fixes**: Improve regex accuracy for edge cases (e.g., comments, strings).
- **Documentation**: Update user-facing documentation or add inline comments for clarity.
- **Updates**: Keep dependencies and VSCode API usage up-to-date. 

See `CONTRIBUTING.md` for detailed guidelines.

---

## Technical Details

### Core Classes and Functions
- **`GoTagCompletionProvider` (`completion.provider.ts`)**:
  - Implements `provideCompletionItems` to detect triggers and delegate to suggestion modules.
  - Uses `isInsideGoStruct` and `checkInsideQuotes` for context.

- **`getLibrarySuggestions` (`library.suggest.ts`)**:
  - Returns precomputed tag suggestions (e.g., `json:""`) on backtick.

- **`getTagSpecificSuggestions` (`tag.suggest.ts`)**:
  - Maps tag types to library-specific suggestions via a lookup table.

- **`createCompletionItem` (`completion_item.util.ts`)**:
  - Builds `vscode.CompletionItem` objects with Markdown documentation.

### Dependencies
- **VSCode API**: Leverages `vscode.CompletionItemProvider` and `vscode.TextDocument`.
- **TypeScript**: Ensures type safety and modularity.

---

## Optimization Tips for Contributors

- **Precompute Data**: Move static data (e.g., tag lists) outside functions and freeze it with `Object.freeze`.
- **Avoid Regex**: Use string methods (e.g., `endsWith`) over regex for simple checks.
- **Minimize Allocations**: Cache results and avoid temporary objects in hot paths.
- **Profile**: Use VSCode’s profiler to identify bottlenecks in large files or rapid typing scenarios.

---

This architecture provides a solid foundation for GoTagMate, balancing performance, usability, and extensibility. Happy coding, and welcome to the contributor community!