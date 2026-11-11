# Amira M Kastour FINLAB: downloads

FINLAB is a finance study app with **228 calculations in 18 topics**. Each calculation shows the units, the results, a source-based interpretation, recommendations with disclaimers, the Casio fx-991ES PLUS keystrokes and the academic references (with DOI links).

This repository holds **only the installers**. The source code is private.

## Download

Open the **[latest release](../../releases/latest)** and pick the file for your computer:

| File | For |
|---|---|
| `Amira.M.Kastour.FINLAB-<version>-universal.dmg` (or `-universal-mac.zip`) | macOS, Apple silicon and Intel: open it and drag the app to Applications |
| `Amira.M.Kastour.FINLAB.Setup.<version>.exe` | Windows installer |
| `Amira-M-Kastour-FINLAB-<version>-portable.exe` | Windows, runs without installing |
| `finlab-cli-macos.zip`, `finlab-cli-windows.zip` | the command-line program, no Python needed (`finlab --run 30`, `finlab --pdf report.pdf`, or no arguments for the menu) |

### First launch

The apps are not code-signed, so the first launch needs one extra click:

- **macOS:** right-click the app → **Open** (or System Settings → Privacy & Security → **Open Anyway**).
- **Windows:** when SmartScreen warns, choose **More info → Run anyway**.

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
| Command-line program | macOS (Intel, or Apple silicon with Rosetta) or Windows 10/11, 64-bit |

## Notice

FINLAB is a **study aid, not investment advice**. Interpretations and recommendations are general and based on the cited academic sources; they do not consider your circumstances.

Copyright © 2026 Amira M Kastour. All rights reserved. See [LICENSE](LICENSE). The portrait shown in the app is © Kastour family, all rights reserved.
