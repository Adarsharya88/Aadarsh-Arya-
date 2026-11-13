# Future API Design (Proposal)

> This document is a design proposal. No backend API is currently implemented.

## Goal

Define a simple contract that a future C++ measurement component and Python processing service could use to provide measured results to the browser dashboard.

## Proposed measurement record

A future simulator could emit a JSON record with fields similar to:

```json
{
  "test_id": "example-run-001",
  "scenario": "medium",
  "started_at": "2026-01-01T10:00:00Z",
  "duration_seconds": 30,
  "packets_sent": 3000,
  "packets_received": 2988,
  "latency_ms": {
    "mean": 18.4,
    "median": 17.9,
    "p95": 28.1
  },
  "throughput_mbps": 84.2
}
```

All values above are illustrative examples of a possible schema, not captured measurements.

## Possible endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | /api/health | Check whether the processing service is available |
| GET | /api/scenarios | List supported test scenarios |
| POST | /api/tests | Submit a test configuration |
| GET | /api/tests/{test_id} | Retrieve a test result |
| GET | /api/tests/{test_id}/series | Retrieve time-series measurements |

## Design considerations

- Validate all request fields and enforce reasonable limits on packet size, rate, and duration.
- Include units in field names or API documentation.
- Use UTC timestamps in machine-readable records.
- Distinguish missing values from zero.
- Include test environment metadata and software version.
- Do not expose arbitrary command execution through an API.
- Add authentication and rate limiting before exposing a service beyond a trusted local environment.
- Version the API when making breaking changes.

## Integration sequence

1. Implement and test the C++ measurement component independently.
2. Agree on a versioned JSON schema.
3. Implement Python validation and result storage.
4. Add API tests and error handling.
5. Connect the dashboard to the API.
6. Keep a demo mode so the frontend can still be explored without a running backend.
