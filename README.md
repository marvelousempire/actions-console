# 🎬 Actions Console

**Version:** 1.0.0  
**Created:** Tuesday Dec 23, 2025  
**Last Updated:** Tuesday Dec 23, 2025

---

## What Is This?

**Actions Console** helps you run automated tasks with one click.

Instead of typing long commands, you can just press a button and watch the magic happen. Want to install AI on your computer? One click. Want to set up a new website? One click. Actions Console makes hard things easy.

We call these automated tasks "**Slice Flows**" — think of them like recipes. Each Slice Flow has a list of steps that run in order.

---

## What Can It Do?

| Tab | What It Does |
|-----|--------------|
| 🏠 **Dashboard** | See your most-used actions and quick buttons |
| ⏩ **Flows** | Browse and run complete automation workflows |
| 📚 **Library** | See all available Slices organized by category |
| 📜 **Logs** | Watch what's happening as tasks run |
| ⚙️ **Settings** | Change how the console works |

---

## 🚀 Popular Actions

These are some of the things you can do with one click:

| Action | What It Does |
|--------|--------------|
| 🤖 **Deploy Open WebUI** | Install local AI chat on your computer |
| 🦙 **Install Ollama** | Set up the AI engine that powers Open WebUI |
| 🦊 **Deploy GitLab** | Install your own private GitHub-like server |
| 📦 **Pull AI Models** | Download AI brains like Llama 3.2 |

---

## How to Use It

### Open Actions Console

Go to:
```
http://localhost:8001/actions-console
```

### Run an Action

1. Click on a Flow (like "Deploy Open WebUI")
2. Press the **▶ Run** button
3. Watch the logs as it works
4. Done! 🎉

---

## How It Works (Simple Version)

```
You click "Deploy Open WebUI"
    ↓
Actions Console reads the recipe (Slice Flow)
    ↓
It runs each step in order:
    1. Check if Ollama is installed
    2. Start Ollama if needed
    3. Download the AI model
    4. Start Open WebUI in Docker
    5. Check that everything works
    ↓
You see "Success!" 🎉
```

---

## 🛂 Passport (Identity Card)

Actions Console has a "passport" file that tells the system who it is:

**Passport:** `passport-actions-console.json`

```json
{
  "udin": "CONSOLE-ACTIONS-20251223120000",
  "name": "Actions Console",
  "type": "console"
}
```

This lets Actions Console:
- Run on its own at `/actions-console`
- Load inside other apps as a part (called a "cartridge")
- Be found automatically by the system

---

## Folder Layout

```
actions-console/
├── index.html              ← The main page
├── app.config.js           ← App settings
├── passport-actions-console.json ← Identity file
├── README.md               ← This file (you're reading it!)
├── css/                    ← How it looks
├── js/                     ← How it works
└── html/                   ← All the pages inside
```

---

## Related Apps

- [Quick Server](https://github.com/marvelousempire/quick-server) — Has all the Slice Flows
- [SundayApp Framework](https://github.com/marvelousempire/SundayApp) — The framework it's built on
- [Open WebUI](https://github.com/open-webui/open-webui) — An AI app you can deploy with Slices
- [CN Console](https://github.com/marvelousempire/cn-console) — The main control center

---

**In Good Faith With Clean Hands**

*Actions Console v1.0.0*
