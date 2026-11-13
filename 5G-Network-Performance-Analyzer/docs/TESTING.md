# Testing Guide

The current project has no automated test framework. Use this checklist for manual verification of the browser prototype.

## Environment

- A current version of Chrome, Firefox, Edge, or Safari.
- Internet connectivity for the Chart.js and Google Fonts CDN resources.
- Browser developer tools available.

## Manual test cases

| ID | Action | Expected result |
| --- | --- | --- |
| T-01 | Open index.html | Dashboard loads and main sections are visible |
| T-02 | Select Low traffic | Latency 8.2 ms, loss 0.1%, throughput 950 Mbps, score 99 |
| T-03 | Select Medium traffic | Latency 18.4 ms, loss 0.4%, throughput 842 Mbps, score 96 |
| T-04 | Select High traffic | Latency 42.1 ms, loss 1.8%, throughput 610 Mbps, score 82 |
| T-05 | Change scenarios repeatedly | Cards, insight text, status labels, health ring, and chart update |
| T-06 | Resize to a narrow viewport | Dashboard remains usable without major horizontal overflow |
| T-07 | Inspect browser console | No application errors are reported |

## Accessibility checks

- Navigate links and the traffic selector using the keyboard.
- Confirm form controls have accessible labels.
- Check text contrast and browser zoom at 200%.
- Confirm the chart has a useful accessible description or provide a textual summary in a future improvement.

## Before submitting a change

- Run all manual test cases relevant to the change.
- Check both desktop and mobile widths.
- Check the browser console.
- Update documentation if the user-visible behavior or project status changes.

## Future automated testing

When the project adds a build or test setup, consider unit tests for metric calculations and scenario selection, plus browser-level tests for the dashboard interactions.
