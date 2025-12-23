# 🎬 Actions Console

**Version:** 1.0.0  
**Created:** Tuesday Dec 23, 2025  
**Last Updated:** Tuesday Dec 23, 2025

Slice Flow Automation Center for Quick Server — execute and manage automated action sequences for infrastructure, AI deployment, and system operations.

---

## ✨ Overview

Actions Console is a **Console-Cartridge Contribution** that provides a visual interface for running [Slice Flows](https://github.com/marvelousempire/quick-server/tree/main/slices) — YAML-based automation scripts, like Photoshop Actions for your server.

### Key Features

- 🚀 **One-Click Deployments** — Deploy Open WebUI, GitLab, Ollama with a single click
- 📚 **Slice Library Browser** — Browse all available slices by category
- ⏩ **Flow Execution** — Run complete flows or individual slices
- 📊 **Real-Time Logs** — Watch execution progress live
- 🔍 **Status Monitoring** — Check service health at a glance

---

## 🚀 Quick Start

### As Standalone Console

```bash
# Clone the repo
git clone https://github.com/marvelousempire/actions-console.git

# Serve with Quick Server or any static server
# Access at: http://localhost:8001/actions-console
```

### As Embedded Cartridge

Actions Console can be embedded in any Sunday Framework console via the cartridge system.

---

## 📦 Featured Flows

| Flow | Description | Category |
|------|-------------|----------|
| `setup-open-webui` | Deploy Open WebUI + Ollama for local AI chat | 🤖 AI |
| `setup-gitlab-complete` | Self-hosted GitLab CE with Docker | 🦊 GitLab |
| `install-ollama` | Install and configure Ollama LLM runtime | 🤖 AI |
| `migrate-github-to-gitlab` | Migrate repos from GitHub to GitLab | 🦊 GitLab |

---

## 🤖 AI Slice Library

Complete automation for local AI infrastructure:

| Slice | Description |
|-------|-------------|
| `open-webui-install` | Deploy Open WebUI Docker container |
| `open-webui-detect` | Check if Open WebUI is running |
| `open-webui-start` | Start existing container |
| `open-webui-stop` | Stop container |
| `ollama-detect` | Check Ollama installation |
| `ollama-start` | Start Ollama service |
| `ollama-pull-model` | Pull LLM models |

### Deploy Open WebUI (One Command)

```bash
cd /path/to/quick-server
node slices/slice-runner.js run slices/flows/setup-open-webui.yaml
```

This will:
1. Detect/start Ollama
2. Pull default model (llama3.2)
3. Deploy Open WebUI Docker container
4. Verify the stack is running

---

## 🏗️ Architecture

```
actions-console/
├── console.manifest.json   # Console configuration
├── app.config.js           # Sunday Framework config
├── index.html              # Entry point
├── js/
│   └── actions-boot.js     # Bootstrap script
├── css/
│   └── actions-console.css # Custom styles
└── html/
    └── dashboard.html      # Main dashboard
```

---

## 🔗 Related Projects

- [Quick Server](https://github.com/marvelousempire/quick-server) — Main platform hosting the Slice system
- [Sunday App Framework](https://github.com/marvelousempire/SundayApp) — The framework this console is built on
- [Open WebUI](https://github.com/open-webui/open-webui) — AI interface deployed by our slices
- [CN Console](https://github.com/marvelousempire/cn-console) — Contribution Network management

---

## 📜 CN Registry

This console is registered in the [Contribution Network Registry](https://github.com/marvelousempire/ContributionNetwork):

```json
{
  "id": "actions-console",
  "type": "console-cartridge",
  "emoji": "🎬",
  "tagline": "Slice Flow Automation Center"
}
```

---

## License

Part of The Briefcase ecosystem.

**In Good Faith With Clean Hands**

