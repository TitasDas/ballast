<img src=".claude-plugin/icon.png" width="96" alt="Ballast icon: a balloon dropping a sandbag">

# Ballast

**Stop paying for the same tokens or words on every reply.**

Ballast is a plugin for Claude Code. It trims long outputs from tools in a conversation, before Claude reads it, so the same log is not sent back with every message. Over 14 days of my own sessions it removed **129 million tokens**. That is about 6% of the bill, or $36 at Opus 5.5 API prices.

```
/plugin marketplace add TitasDas/ballast
/plugin install ballast@ballast
```

Needs Claude Code 2.1.310 or newer. The plugin hooks it uses are in early access.

![Ballast demo](docs/demo.gif)

## Why use Ballast?

Claude rereads the whole conversation before every reply, and you pay for those tokens every time. Since I dislike wastage in all forms, I made this to make that loop of my workflow a little more efficient. A cleverer version would keep a running estimate of what Claude still needs from each result, the way a Bayesian filter updates a belief, and trim against that. Ballast does not do that yet.

The thing I saw most in my own sessions was a test log, read once, being sent again with every message until I cleared the conversation. A large result was re-sent **45 times** on average. The worst case was **277 times**.

![One 27,039-token file re-sent 277 times costs 7.49M tokens without Ballast and 0.62M with it](docs/why.png)

## How

When a tool prints a long result, Ballast keeps the failures, with their file and line, and drops the rest. The full output is saved to a file inside the plugin folder, and Claude can read it back if it needs the detail. As the conversation fills up, the trimming gets tighter and Claude's replies get shorter.

Here a test run printed 400 lines. Claude saw the one failure, and the bar shows what the trim has saved so far:

![The bar after a long test run](docs/band.png)

On the next question the saving doubles, because the trimmed result is what gets re-sent:

![A follow-up answered from the cut output](docs/answer.png)

## What it saves

![202.9M tokens without Ballast, 73.5M with it](docs/saves.png)

| At API prices for | 14 days | 30 days at this pace |
|---|---|---|
| Sonnet 5.5 | $18 | $38 |
| Opus 5.5 | $36 | $76 |
| Fable 5.1 | $57 | $121 |

These are my own 7,563 requests over 14 days, replayed through Ballast and priced as if every one used that model. Re-sent tokens are billed at the cached rate, which is much cheaper, so the dollars look small next to the token count. The figures leave out shorter replies, and they leave out any saved file Claude reads back.

The bar shows your own numbers as you work.

## Controls

| Button | What it does |
|---|---|
| Trim outputs | Turns trimming on or off. Same as `/trim on` and `/trim off`. |
| Short answers | Turns shorter replies on or off. Same as `/lean on` and `/lean off`. |
| Full last | Shows the full version of the last trimmed output. |
| Weigh | Tells you whether the conversation needs a tidy up. Same as `/ballast:weigh`. |
| Compact | Shrinks the conversation and keeps what matters. |
| Clear | Starts fresh. |
| Hide | Folds the bar away. |

To remove it, run `/plugin uninstall ballast@ballast`.

## Privacy

The plugin needs no account and makes no network calls. Your code and your conversations stay on your computer. There are no analytics.

Paid versions for other coding agents are coming, and those will need you to sign in. An account is the simplest way to handle payments across several tools without building a licence key system for each one. It holds your email address and your purchases. Razorpay takes card details, so I never see them. The website has its own [privacy page](https://implantintelligence.com/privacy).

See [LICENSE](LICENSE) for the terms.
