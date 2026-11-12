# Amira M Kastour FINLAB: downloads

FINLAB is a finance study app with **228 calculations in 18 topics**. Each calculation shows the units, the results, a source-based interpretation, recommendations with disclaimers, the Casio fx-991ES PLUS keystrokes and the academic references (with DOI links).

This repository holds **only the installers** and the published web app (`docs/`). The source code is private.

## Download

Open the **[latest release](../../releases/latest)** and pick the file for your computer:

| File | For |
|---|---|
| `Amira.M.Kastour.FINLAB-<version>-universal.dmg` (or `-universal-mac.zip`) | macOS, Apple silicon and Intel: open it and drag the app to Applications |
| `Amira.M.Kastour.FINLAB.Setup.<version>.exe` | Windows installer |
| `Amira-M-Kastour-FINLAB-<version>-portable.exe` | Windows, runs without installing |
| `Amira-M-Kastour-FINLAB-<version>-iOS.ipa` | iPhone and iPad (see *iPhone and iPad* below) |
| `finlab-cli-macos.zip`, `finlab-cli-windows.zip` | the command-line program, no Python needed (`finlab --run 30`, `finlab --pdf report.pdf`, or no arguments for the menu) |

### First launch

The apps are not code-signed, so the first launch needs one extra click:

- **macOS:** right-click the app → **Open** (or System Settings → Privacy & Security → **Open Anyway**).
- **Windows:** when SmartScreen warns, choose **More info → Run anyway**.

## iPhone and iPad

There are two ways to get FINLAB on an iPhone or iPad. Both work offline and have all 228 calculations.

**Web app (easiest, no Apple ID needed):** open **https://amira-m-kastour.github.io/amira-kastour-finlab-downloads/** in **Safari**,
tap **Share → Add to Home Screen**, then open FINLAB from its icon. After the first visit it works without internet.
New versions arrive by themselves the next time you open it online.

**Native app (.ipa):** the app is not distributed through the App Store, so you install it yourself with a free Apple ID:

1. On a Mac or Windows PC, install [Sideloadly](https://sideloadly.io) (or [AltStore](https://altstore.io)).
2. Download `Amira-M-Kastour-FINLAB-<version>-iOS.ipa` from the [latest release](../../releases/latest).
3. Connect the iPhone by cable, drag the .ipa into Sideloadly, enter your Apple ID and press **Start**.
4. On the iPhone: Settings → General → VPN & Device Management → your Apple ID → **Trust**. On iOS 16 or later, also turn on
   Settings → Privacy & Security → **Developer Mode** and restart when asked.

With a free Apple ID the app stops opening after 7 days; install it again (or let AltStore refresh it) to continue.
PDF reports, Excel files and the results notebook open the iOS share sheet: choose **Save to Files**, Mail, AirDrop and so on.

## What it does

- **Topics:** time value of money, risk and return, asset pricing, fund performance (Sharpe, Treynor, Jensen, M², information ratio, Sortino), statistics and event studies, cost of capital, valuation (DCF, multiples, ESG-adjusted), financial statement analysis, capital budgeting, fixed income and green bonds, derivatives (Black–Scholes step by step, Greeks, implied volatility), foreign exchange, funds and ETFs, sustainable finance, banking, personal finance, real estate and technical analysis.
- **Interpretation:** each result says how to read it according to the cited references, and lists the references it rests on.
- **Calculator keystrokes:** the steps to reproduce every result on a Casio fx-991ES PLUS.
- **Results notebook:** save a result and use it as an input in another calculation.
- **PDF reports:** export any selection of calculations, with charts, interpretation, keystrokes and references.
- **Offline:** the desktop apps and the command-line program work without an internet connection.

## Market data (free, with your own key)

The desktop apps and the command-line program cannot use Claude's connectors, so they work with data you type, paste or load from CSV files.

- **Prices:** get a free Alpha Vantage key at https://www.alphavantage.co/support/#api-key (only an e-mail address is asked). Download a CSV in your browser, for example `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&outputsize=compact&datatype=csv&apikey=YOUR_KEY`.
- **Risk-free rate:** FRED series DTB3 (no key needed).
- **Factors:** the Kenneth French data library (no key needed).
- **Command-line program:** set your key once. macOS: `echo 'export ALPHAVANTAGE_API_KEY=YOUR_KEY' >> ~/.zshrc`. Windows: `setx ALPHAVANTAGE_API_KEY YOUR_KEY`, then open a new terminal.

Keep your keys private: don't paste them into shared pages, screenshots or files you send to others.

## Requirements

| App | Needs |
|---|---|
| macOS app | macOS 11 or later, Apple silicon or Intel |
| Windows app | Windows 10 or 11, 64-bit |
| iPhone / iPad | iOS 15 or later (native app); Safari on iOS 16.4 or later (web app) |
| Command-line program | macOS (Intel, or Apple silicon with Rosetta) or Windows 10/11, 64-bit |

## Notice

FINLAB is a **study aid, not investment advice**. Interpretations and recommendations are general and based on the cited academic sources; they do not consider your circumstances.

Copyright © 2026 Amira M Kastour. All rights reserved. See [LICENSE](LICENSE). The portrait shown in the app is © Kastour family, all rights reserved.
