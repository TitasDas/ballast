<img src=".claude-plugin/icon.png" width="96" alt="Ballast icon: a balloon dropping a sandbag">

# Ballast

Spend less of your Claude Code usage on things Claude has already read.

![Ballast demo](docs/demo.gif)

## What it does

Long results, whether from a command, a file read, a web page or an MCP tool, get cut down to the parts that matter before Claude reads them. A failing test stays in, with its line number. The rest is saved to a file Claude can read back if it turns out to be needed. The fuller your conversation gets, the tighter the cut.

Claude's replies get shorter and more direct.

A small bar above where you type shows how much of the window your conversation is using, what the heaviest thing in it is, how much Ballast has saved you so far, and when it's time to tidy up.

## Why it helps

Claude rereads the whole conversation every time it replies. A long test log you ran once keeps costing you on every reply after it, and uses up your limits faster. In my own sessions a big result gets reread about 44 times before the conversation is cleared, and Claude also gets worse at finding things as the conversation fills up.

## What it looks like

A test run that printed 400 lines. Claude got the failure with its file and line, and the bar shows what the cut has already saved:

![The bar after a long test run](docs/band.png)

A follow-up. Claude opens just the function it needs and answers in two lines, and the saving grows with every reply:

![A follow-up answered from the cut output](docs/answer.png)

## How much it saves

Over eight days of my own work, oversized results cost 135 million tokens across all the replies that followed them. With Ballast it would have been 40 million, about 70% less. The worst offenders were whole files Claude read once and then carried for hundreds of replies.

The bar's numbers are real counts, not a guess from the character count. In my sessions the usual rule of thumb, one token per four characters, was off by nearly half against what Claude actually billed; Ballast's count stays within a few percent and keeps correcting itself as the session goes.

## How to use it

Install it and work as usual. The bar above the prompt has these buttons:

| Button | What it does |
|---|---|
| Trim outputs | Turns the cut on or off. Turn it off when you want every line. |
| Short answers | Turns shorter replies on or off. |
| Full last | Shows the full version of the last cut output. |
| Weigh | Tells you whether your conversation is fine or needs a tidy up. |
| Compact | Shrinks the conversation but keeps what matters. |
| Clear | Starts fresh. Best when you move on to something unrelated. |
| Hide | Folds the bar away. |

`/trim off` and `/lean off` do the same as the first two buttons from the keyboard.

## Install

In Claude Code, in a terminal, type:

```
/plugin install ballast --marketplace TitasDas/ballast
```

Type `y` when asked, then choose the user option. Ballast then works in every Claude Code session on your computer, VS Code included.

## Other coding agents

There's a paid version of Ballast for Codex, Gemini CLI and OpenCode. It cuts long command output and asks for shorter answers, just like it does here. For Cursor, Aider and other agents it comes as a set of rules plus a small command that does the cutting.

It costs $9, or ₹799 if you pay in rupees, once. Your key and download appear straight after payment, and the key works offline. Get it from [Implant Intelligence](https://implantintelligence.com/p/ballast).

Ballast for Claude Code is free to use. See [LICENSE](LICENSE).
