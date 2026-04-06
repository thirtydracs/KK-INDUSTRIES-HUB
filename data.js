const jobs = [
  {
    id: "caltex",
    name: "Caltex D’Aguilar",
    status: "red",
    issue: "Behind programme",
    labour: "Adequate",
    criticalPath: "Civil works",
    holdingUp: "Job marked behind; no clear recovery actions logged",
    reality: "Civil works are active with PGE and Virgil onsite, and sediment fencing completed, but the job is still recorded as behind.",
    next: "Confirm recovery plan, define critical path item, and tighten daily structured logging.",
    week: "Week Ending 2 April 2026",
    dataConfidence: "Medium",
    activity: [
      {
        day: "Thursday",
        text: "PGE with 3 men and Virgil with 2 men onsite. Sediment fencing completed. Programme status recorded as Behind."
      }
    ]
  },
  {
    id: "childers",
    name: "PEARL ENERGY CHILDERS",
    status: "amber",
    issue: "Thin labour",
    labour: "Insufficient",
    criticalPath: "Concreting start / slab prep",
    holdingUp: "Low labour depth ahead of concreter start",
    reality: "Site is tracking, but mostly on one operator through the week. Prep works progressed and Brucon was confirmed to start 7/4/26, but the job is fragile if labour stays thin.",
    next: "Lock concreter start, increase labour support, and keep slab and panel prep moving cleanly.",
    week: "Week Ending 2 April 2026",
    dataConfidence: "Good",
    activity: [
      {
        day: "Monday",
        text: "Surveyors completed final mark-up of slab set-outs and gridlines. Structured fields mostly N/A on this entry."
      },
      {
        day: "Tuesday",
        text: "Red Dirt Civil had 1 man onsite, arriving late at 15:00. Started sieving excess material and removing debris."
      },
      {
        day: "Wednesday",
        text: "Red Dirt Civil had 1 man onsite for 9 hours. Completed 90% of sieving stockpiled material as planned."
      },
      {
        day: "Thursday",
        text: "Red Dirt Civil had 1 man onsite for 2.5 hours. Completed works and Brucon confirmed start for 7/4/26."
      }
    ]
  },
  {
    id: "williamstown",
    name: "EXUS WILLIAMSTOWN",
    status: "grey",
    issue: "Blind spot / weak structured data",
    labour: "Active trades onsite",
    criticalPath: "Cladding",
    holdingUp: "No structured programme detail recorded",
    reality: "B&M and roofer were onsite for cladding-related work, but almost every structured field is N/A, so true project position cannot be confirmed.",
    next: "Complete programme status, work area, completed works, and next-day plan in daily logs.",
    week: "Week Ending 30 March 2026",
    dataConfidence: "Low",
    activity: [
      {
        day: "Monday",
        text: "B&M x4 and roofer x1 onsite. Cladding-related activity recorded, but structured fields are mostly blank."
      }
    ]
  },
  {
    id: "emerald",
    name: "PEARL ENERGY EMERALD",
    status: "grey",
    issue: "No daily logs available",
    labour: "Unknown",
    criticalPath: "Unknown",
    holdingUp: "No results in uploaded log file",
    reality: "No daily logs were available in the uploaded Emerald PDF, so the job position cannot be assessed.",
    next: "Export and upload valid Emerald daily logs before reporting.",
    week: "Week Ending 6 April 2026",
    dataConfidence: "Low",
    activity: [
      {
        day: "Current",
        text: "No results shown in uploaded daily logs export."
      }
    ]
  }
];
