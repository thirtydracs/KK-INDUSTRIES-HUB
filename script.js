const jobs = window.jobs || [];

const searchInput = document.getElementById("searchInput");
const jobsGrid = document.getElementById("jobsGrid");
const totalJobsEl = document.getElementById("totalJobs");
const atRiskJobsEl = document.getElementById("atRiskJobs");
const blindSpotsEl = document.getElementById("blindSpots");
const lastUpdatedEl = document.getElementById("lastUpdated");

function formatDate(dateString) {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;

  return date.toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function getStatusClass(status) {
  const clean = (status || "").toLowerCase();

  if (clean.includes("risk")) return "risk";
  if (clean.includes("watch")) return "watch";
  if (clean.includes("blind")) return "blind";
  return "default";
}

function getLatestUpdated(jobsList) {
  if (!jobsList.length) return "N/A";

  const validDates = jobsList
    .map(job => new Date(job.updated))
    .filter(date => !isNaN(date));

  if (!validDates.length) return "N/A";

  const latest = new Date(Math.max(...validDates));
  return formatDate(latest.toISOString());
}

function updateKpis(jobsList) {
  const totalJobs = jobsList.length;
  const atRiskJobs = jobsList.filter(job =>
    (job.status || "").toLowerCase().includes("risk")
  ).length;

  const blindSpots = jobsList.filter(job =>
    (job.status || "").toLowerCase().includes("blind")
  ).length;

  if (totalJobsEl) totalJobsEl.textContent = totalJobs;
  if (atRiskJobsEl) atRiskJobsEl.textContent = atRiskJobs;
  if (blindSpotsEl) blindSpotsEl.textContent = blindSpots;
  if (lastUpdatedEl) lastUpdatedEl.textContent = getLatestUpdated(jobsList);
}

function createWeekActivity(activity = []) {
  if (!activity.length) {
    return `<p class="empty-text">No activity recorded.</p>`;
  }

  return `
    <div class="week-activity">
      <h4>This Week</h4>
      ${activity.map(item => `
        <div class="activity-item">
          <strong>${item.day}:</strong>
          <span>${item.text}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function createJobCard(job) {
  const statusClass = getStatusClass(job.status);

  return `
    <article class="job-card">
      <div class="job-card-top">
        <div>
          <h3>${job.name}</h3>
          <p class="job-dates">
            Week Ending: ${formatDate(job.weekEnding)}<br>
            Updated: ${formatDate(job.updated)}
          </p>
        </div>
        <span class="status-pill ${statusClass}">${job.status}</span>
      </div>

      <div class="job-meta">
        <div><strong>Issue:</strong> ${job.issue}</div>
        <div><strong>Labour:</strong> ${job.labour}</div>
        <div><strong>Critical Path:</strong> ${job.criticalPath}</div>
        <div><strong>Data Confidence:</strong> ${job.dataConfidence}</div>
      </div>

      <div class="job-section">
        <h4>Holding Up</h4>
        <p>${job.holdingUp}</p>
      </div>

      <div class="job-section">
        <h4>Reality</h4>
        <p>${job.reality}</p>
      </div>

      <div class="job-section">
        <h4>Next Action</h4>
        <p>${job.next}</p>
      </div>

      ${createWeekActivity(job.weekActivity)}
    </article>
  `;
}

function renderJobs(jobsList) {
  if (!jobsGrid) return;

  if (!jobsList.length) {
    jobsGrid.innerHTML = `
      <div class="no-results">
        <p>No jobs found.</p>
      </div>
    `;
    return;
  }

  jobsGrid.innerHTML = jobsList.map(createJobCard).join("");
}

function filterJobs(searchTerm) {
  const cleanTerm = (searchTerm || "").trim().toLowerCase();

  if (!cleanTerm) {
    updateKpis(jobs);
    renderJobs(jobs);
    return;
  }

  const filtered = jobs.filter(job => {
    return [
      job.name,
      job.status,
      job.issue,
      job.labour,
      job.holdingUp,
      job.next,
      job.criticalPath,
      job.dataConfidence,
      job.reality
    ]
      .join(" ")
      .toLowerCase()
      .includes(cleanTerm);
  });

  updateKpis(filtered);
  renderJobs(filtered);
}

function initSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    filterJobs(e.target.value);
  });
}

function initDashboard() {
  updateKpis(jobs);
  renderJobs(jobs);
  initSearch();
}

document.addEventListener("DOMContentLoaded", initDashboard);
