# Backend Evaluation Submission

## Repository Structure

```text
.
├── logging_middleware/
├── vehicle_maintence_scheduler/
├── notification_app_be/
├── notification_system_design.md
├── output/
└── .gitignore
```

---

# 1. Logging Middleware

## Description

Reusable logging middleware developed using Node.js.

The middleware sends logs to the evaluation server using the provided Log API.

## Features

- Reusable logging function
- Protected API integration
- Structured logging
- Error handling

## Files

```text
logging_middleware/
├── logger.js
├── test.js
└── package.json
```

## Run

```bash
cd logging_middleware
node test.js
```

---

# 2. Vehicle Maintenance Scheduler

## Description

Microservice that selects vehicle maintenance tasks based on:

- Mechanic hour constraints
- Maximum operational impact

A greedy scheduling approach was implemented.

## Features

- Fetch depots from API
- Fetch vehicles from API
- Optimize maintenance scheduling
- Logging integration

## Files

```text
vehicle_maintence_scheduler/
├── index.js
├── scheduler.js
└── package.json
```

## Run

```bash
cd vehicle_maintence_scheduler
node index.js
```

---

# 3. Notification System Design

## Description

The markdown document contains solutions for:

- Stage 1 → REST API design
- Stage 2 → Database schema
- Stage 3 → Query optimization
- Stage 4 → Scaling improvements
- Stage 5 → Notification queue architecture

## File

```text
notification_system_design.md
```

---

# 4. Notification Application Backend

## Description

Backend service to process notifications and display top priority notifications.

Priority order:

```text
Placement > Result > Event
```

Notifications are additionally sorted using timestamps.

## Features

- Fetch notifications from API
- Priority-based sorting
- Top 10 notification selection
- Logging integration

## Files

```text
notification_app_be/
├── index.js
├── priority.js
└── package.json
```

## Run

```bash
cd notification_app_be
node index.js
```

---

# Screenshots

The `output/` folder contains:

- API request screenshots
- API response screenshots
- Output screenshots
- Execution screenshots

---

# Technologies Used

- Node.js
- Express.js
- Axios
- Postman
- GitHub

---

# Notes

- Logging middleware was integrated across backend modules.
- APIs were tested using Postman.
- The solution follows modular folder structure and reusable components.