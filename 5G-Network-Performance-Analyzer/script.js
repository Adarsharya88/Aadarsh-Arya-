const scenarios = {
  low: { latency: 8.2, loss: 0.1, throughput: 950, health: 99, insight: "Excellent performance under light traffic", detail: "The simulated network has ample capacity. Latency and packet loss remain very low." },
  medium: { latency: 18.4, loss: 0.4, throughput: 842, health: 96, insight: "Network is performing well", detail: "Current traffic load is being handled efficiently with low latency and minimal packet loss." },
  high: { latency: 42.1, loss: 1.8, throughput: 610, health: 82, insight: "High traffic is affecting performance", detail: "Latency and packet loss have increased. Consider traffic shaping or additional network capacity in a real deployment." }
};

const $ = (id) => document.getElementById(id);
const labels = ["09:00", "09:05", "09:10", "09:15", "09:20", "09:25", "09:30", "09:35", "09:40", "09:45", "09:50", "09:55"];

const chart = new Chart($("performanceChart"), {
  type: "line",
  data: {
    labels,
    datasets: [{
      label: "Throughput",
      data: [720, 760, 745, 790, 775, 810, 795, 830, 815, 850, 825, 842],
      borderColor: "#9b8cff",
      backgroundColor: "rgba(155,140,255,.12)",
      fill: true,
      tension: .38,
      borderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: "#202b43", titleColor: "#fff", bodyColor: "#cbd5e8", padding: 10 } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#71809b", maxTicksLimit: 6, font: { size: 9 } } },
      y: { min: 0, max: 1100, grid: { color: "rgba(130,150,180,.1)" }, ticks: { color: "#71809b", font: { size: 9 }, callback: value => value + " Mbps" } }
    }
  }
});

function updateDashboard(level) {
  const data = scenarios[level];
  $("latency").textContent = data.latency.toFixed(1);
  $("packetLoss").textContent = data.loss.toFixed(1);
  $("throughput").textContent = data.throughput;
  $("health").textContent = data.health;
  $("ringScore").textContent = data.health;
  $("insightTitle").textContent = data.insight;
  $("insightText").textContent = data.detail;

  $("latencyState").textContent = level === "high" ? "↑ 128%" : "↓ 8.2%";
  $("lossState").textContent = level === "high" ? "↑ 1.4%" : "↓ 0.2%";
  $("throughputState").textContent = level === "high" ? "↓ 18.5%" : "↑ 12.5%";
  $("healthState").textContent = data.health >= 95 ? "Excellent" : data.health >= 85 ? "Good" : "Needs attention";

  $("latencyHealth").textContent = level === "high" ? "Elevated" : "Excellent";
  $("deliveryHealth").textContent = level === "high" ? "Degraded" : "Stable";
  $("throughputHealth").textContent = level === "high" ? "Reduced" : "Optimal";
  document.querySelector(".score-ring").style.background =
    `radial-gradient(circle at center,var(--panel) 57%,transparent 59%),conic-gradient(var(--green) 0 ${data.health}%,#26334a ${data.health}% 100%)`;

  const base = level === "low" ? 950 : level === "high" ? 610 : 842;
  const variation = level === "low" ? 35 : level === "high" ? 65 : 45;
  chart.data.datasets[0].data = labels.map((_, i) =>
    Math.max(0, Math.round(base - variation + Math.sin(i * 1.7) * variation + (i * 3)))
  );
  chart.update();
}

$("trafficLevel").addEventListener("change", (event) => updateDashboard(event.target.value));
updateDashboard("medium");