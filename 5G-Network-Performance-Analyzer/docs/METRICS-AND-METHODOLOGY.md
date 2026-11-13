# Metrics and Methodology

## Purpose

This document defines what the dashboard labels mean and distinguishes the current demonstration values from measurements that a future simulator could collect.

## Current prototype values

The browser currently selects predefined values for three illustrative traffic levels:

| Scenario | Latency (ms) | Packet loss (%) | Throughput (Mbps) | Health score |
| --- | ---: | ---: | ---: | ---: |
| Low | 8.2 | 0.1 | 950 | 99 |
| Medium | 18.4 | 0.4 | 842 | 96 |
| High | 42.1 | 1.8 | 610 | 82 |

These values are static examples stored in script.js. The throughput chart is generated in the browser to visually demonstrate changing trends. They are not results from a real experiment.

## Metric definitions

### Latency

Latency is the time taken for data to travel between defined endpoints. A real experiment must specify whether it reports round-trip time or one-way delay, how timestamps are obtained, and whether it reports an average, median, or percentile.

### Packet loss

Packet loss is the proportion of transmitted packets that are not received at the destination during a test interval.

A basic calculation is:

```text
Packet loss (%) = ((Packets sent - Packets received) / Packets sent) * 100
```

The test must define how duplicate, late, or out-of-order packets are handled.

### Throughput

Throughput is the amount of successfully delivered data divided by the measurement duration.

```text
Throughput (bits/s) = Successfully received payload bits / Duration (seconds)
Throughput (Mbps) = Throughput (bits/s) / 1,000,000
```

The measurement should state whether it counts application payload or total network traffic.

### Network health score

The 0–100 score in this prototype is illustrative. It is not a 3GPP-defined KPI, operator score, or standardized formula. A future implementation should publish its formula, input metrics, thresholds, and validation method before presenting a score as analytical output.

## Suggested experiment procedure for a future simulator

1. Define the endpoints and network path.
2. Record the test duration, packet size, and target sending rate.
3. Synchronize clocks if one-way latency is required.
4. Record sent and received packet counts and timestamps.
5. Repeat each scenario several times.
6. Report sample count and summary statistics, not only one value.
7. Document the test environment and its limitations.

## References to consult during implementation

- IETF RFC 768: User Datagram Protocol (UDP)
- IETF RFC 9293: Transmission Control Protocol (TCP)
- 3GPP specifications for 5G system architecture and performance terminology

Consult the relevant current standards before claiming standards compliance.
