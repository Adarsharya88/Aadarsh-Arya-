# 5G Network Performance Analyzer

A responsive dashboard that demonstrates how network performance metrics can be monitored under different simulated traffic conditions. The interface visualizes latency, packet loss, throughput, and an indicative network-health score.

> **Important:** This version is an educational, frontend-only simulation. It does not connect to a live 5G network, capture real packets, or run a C++/Python network simulator yet.

## Features

- Interactive low, medium, and high traffic scenarios
- Metric cards for latency, packet loss, throughput, and network health
- Throughput trend chart powered by Chart.js
- Connection-health indicators and automatically updated insights
- Responsive dark dashboard layout

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js

## Run locally

1. Clone the repository:
   `git clone https://github.com/Adarsharya88/Aadarsh-Arya-.git`
2. Open the project folder:
   `cd Aadarsh-Arya-/5G-Network-Performance-Analyzer`
3. Open `index.html` in your browser, or use the VS Code Live Server extension.

No build step is required. Chart.js is loaded from a CDN, so an internet connection is needed for the chart library.

## Project structure

```
5G-Network-Performance-Analyzer/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Planned improvements

- Build a C++ traffic simulator using TCP/IP socket programming
- Export simulation measurements to CSV or JSON
- Add a Python backend to process and analyze measurement data
- Connect the dashboard to real simulator output instead of hard-coded demo values
- Add configurable packet size, traffic rate, and test duration

## Metrics

| Metric | Meaning |
| --- | --- |
| Latency | Time taken for data to travel between endpoints |
| Packet loss | Percentage of transmitted packets that do not arrive |
| Throughput | Amount of data delivered per unit of time |
| Network health | An illustrative score derived from the simulated metrics |

## Author

Adarsh Arya

This project is intended for learning and demonstration purposes. The displayed values are illustrative and should not be interpreted as measured 5G network performance.