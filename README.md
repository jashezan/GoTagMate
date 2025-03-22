# GoTagMate - The Ultimate VSCode Extension for Go Struct Tags

[![GoTagMate Usage GIF](https://cdn.jsdelivr.net/gh/jashezan/GoTagMate@main/assets/gotagmate.png)](https://github.com/jashezan/GoTagMate)

GoTagMate is a powerful and user-friendly VSCode extension designed to **simplify working with Go struct tags**. It provides **intelligent suggestions, autocompletion, and detailed documentation** for popular Go libraries like `json`, `gorm`, `validate`, and many more. **Press `Ctrl + Space` if suggestions don't appear automatically.**

> **Why GoTagMate?** Writing Go struct tags manually can be tedious and error-prone. Missing a comma, mistyping a field, or forgetting a tag option can break your code. GoTagMate solves this problem by automatically suggesting and completing struct tags, reducing errors and boosting productivity.

---

## 🚀 Features

### 🧑‍💻 **For Beginners and Pros Alike**
- **Smart Autocompletion**: Start typing a struct tag, and GoTagMate suggests valid options instantly.
- **Context-Aware Suggestions**: It knows what tag you're using (`json`, `gorm`, `validate`, etc.) and provides relevant completions.
- **Hover Descriptions**: Hover over a tag to see its meaning and usage examples.
- **Error Reduction**: Avoid typos and formatting mistakes with GoTagMate’s structured suggestions.

### 🛠 **Technical Features**
- **Backtick (`) Trigger**: Suggestions appear as soon as you type a backtick inside a Go struct.
- **Regex-Based Parsing**: Detects cursor position and tag context dynamically.
- **Extensive Library Support** (See [Supported Libraries](#-supported-libraries))
- **Re-Trigger on Key Presses**: Automatically shows suggestions when typing ` `, `=`, `;`, or `,`.
- **Lightweight and Fast**: Optimized to ensure minimal impact on VSCode performance.

---

## 📖 Usage Guide

### ✨ **How to Use GoTagMate?**
1. **Install GoTagMate** from the VSCode Marketplace or manually via `.vsix`.
2. **Open a Go file** in VSCode.
3. **Start typing a struct field** and add a backtick ` `` `.
4. **Select a tag** from the suggestions (e.g., `json:""`).
5. **Use contextual suggestions** to complete the tag (e.g., `omitempty`, `string`).
6. **Hover over suggestions** to see descriptions and usage examples.
7. **If suggestions don’t appear**, press `Ctrl + Space` to manually trigger them.

> **Pro Tip:** Enable the following VSCode settings for the best experience:
> ```json
> "editor.hover.enabled": true,
> "editor.parameterHints.enabled": true,
> "editor.quickSuggestions": true
> ```

---

## 📌 Supported Libraries
GoTagMate provides struct tag suggestions for the following popular Go libraries:

- [`bson`](https://pkg.go.dev/go.mongodb.org/mongo-driver/bson) (MongoDB)
- [`gorm`](https://pkg.go.dev/gorm.io/gorm) (ORM)
- [`validate`](https://pkg.go.dev/github.com/go-playground/validator/v10) (Validation)
- [`json`](https://pkg.go.dev/encoding/json) (Standard JSON)
- [`yaml.v3`](https://pkg.go.dev/gopkg.in/yaml.v3) (YAML Parsing)
- [`xml`](https://pkg.go.dev/encoding/xml) (XML Processing)
- [`env`](https://pkg.go.dev/github.com/caarlos0/env/v11) (Environment Variables)
- [`msgpack`](https://pkg.go.dev/github.com/vmihailenco/msgpack) (MessagePack)
- [`dynamodb`](https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue) (AWS DynamoDB)
- [`redis`](https://pkg.go.dev/github.com/redis/go-redis/v9) (Redis)
- [`gin`](https://pkg.go.dev/github.com/gin-gonic/gin) (Gin Web Framework)
- [`bun`](https://pkg.go.dev/github.com/uptrace/bun) (Bun ORM)
- [`conform`](https://pkg.go.dev/github.com/leebenson/conform) (Data Normalization)
- [`toml`](https://pkg.go.dev/github.com/BurntSushi/toml) (TOML Parsing)
- [`go-toml`](https://pkg.go.dev/github.com/pelletier/go-toml) (TOML Parsing)
- [`hcl`](https://pkg.go.dev/github.com/alecthomas/hcl) (HCL Parsing)

... and many more! (See [`DOCS.md`](docs/DOCS.md#supported-libraries) for the full list)

---

## 🔥 Why You Need GoTagMate
🚨 **Without GoTagMate:**
- Manual struct tag writing is **tedious** and **error-prone**.
- You need to **constantly check documentation**.
- Forgetting a tag format or mistyping causes **bugs**.
- Productivity suffers due to **repetitive** work.

✅ **With GoTagMate:**
- **Saves Time** by suggesting tags instantly.
- **Prevents Errors** with correct tag syntax.
- **Boosts Productivity** by automating struct tag completion.
- **Simplifies Learning** for beginners with descriptions and examples.

If you're working with Go structs, GoTagMate is **a must-have tool** to streamline your development workflow.

---

## 🛠 Installation
### **Option 1: Install from VSCode Marketplace**
1. Open VSCode.
2. Go to **Extensions (`Ctrl + Shift + X`)**.
3. Search for **Go Tag Mate**.
4. Click **Install** and reload VSCode.

### **Option 2: Install Manually (.vsix file)**
1. Download the latest `.vsix` file from the [Releases](https://github.com/jashezan/GoTagMate/releases) page.
2. Open VSCode and go to Extensions (`Ctrl + Shift + X`).
3. Click the **three-dot menu (`...`)** > **Install from VSIX...**.
4. Select the downloaded `.vsix` file and install.
5. Restart VSCode.

---

## ⚡ Configuration
To ensure GoTagMate works seamlessly, make sure the following settings are enabled:

```json
"editor.hover.enabled": true,
"editor.parameterHints.enabled": true,
"editor.quickSuggestions": true
```

These settings **enable hover descriptions and inline suggestions**, making GoTagMate even more powerful.

---

## 🤝 Contributing
Want to improve GoTagMate? Contributions are welcome! 🎉

### Application Overview

- [Documentation](docs/DOCS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Application Flow](docs/APP_FLOW.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)

### **Ways to Contribute**:
- **Report Issues**: Found a bug or missing tag? [Open an issue](https://github.com/jashezan/GoTagMate/issues).
- **Suggest Features**: Have an idea to enhance GoTagMate? Let us know!
- **Code Contributions**: Fork the repo, make changes, and submit a PR.

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## ⭐ Support the Project
If you find GoTagMate useful, consider giving it a ⭐ on [GitHub](https://github.com/jashezan/GoTagMate)!

---

### 🚀 **GoTagMate - Stop Wasting Time on Struct Tags. Start Coding Faster.**
