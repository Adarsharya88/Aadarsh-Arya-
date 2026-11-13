# Architecture

## Current implementation

The current release is a client-side dashboard. All demonstration scenario values and update logic run in the browser.

```text
User
  |
  v
index.html  ---- structure and controls
  |
  v
script.js   ---- scenario selection and DOM updates
  |                         |
  v                         v
Scenario data             Chart.js
  |                         |
  +------> Dashboard UI <---+
             |
             v
          style.css
       layout and styling
```

## Main files

### index.html

Contains the sidebar navigation, traffic selector, metric cards, performance chart canvas, connection-health panel, insights, comparison table, and footer. It loads the stylesheet, Chart.js, and the application script.

### style.css

Defines the dark visual theme, dashboard grid, cards, chart area, responsive breakpoints, and mobile layout.

### script.js

- Defines the low, medium, and high scenario objects.
- Finds dashboard elements by their IDs.
- Creates the Chart.js line chart.
- Updates metric values and explanatory text when the scenario changes.
- Rebuilds the chart series for the selected scenario.

## Current data flow

1. The user selects a traffic scenario.
2. The change event calls the dashboard update function.
3. The function reads the corresponding predefined scenario object.
4. The page metric values and status labels are updated.
5. The chart receives a newly generated illustrative series and redraws.

## Proposed future architecture

A future implementation could separate measurement from visualization:

```text
C++ traffic / measurement simulator
              |
              | structured measurement records
              v
       Python processing API
              |
              | validated JSON responses
              v
       Browser dashboard
              |
              v
       Charts and reports
```

This is a proposed direction only. These backend components and their integration are not part of the current implementation.
