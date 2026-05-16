# Stage 1

## REST APIs

### Get Notifications
GET /notifications

Response:
[
  {
    "id": "1",
    "type": "Placement",
    "message": "Amazon hiring",
    "timestamp": "2026-04-22 17:51:30",
    "isRead": false
  }
]

---

### Mark Notification as Read
PUT /notifications/:id/read

Response:
{
  "message": "Notification marked as read"
}

---

### Delete Notification
DELETE /notifications/:id

Response:
{
  "message": "Notification deleted"
}

---

## Headers

Authorization: Bearer token

---

## Real-Time Notification Mechanism

WebSockets can be used for real-time notifications.
Whenever a new notification is created, the server pushes the notification instantly to connected clients.

# Stage 2

## Suggested Database

PostgreSQL can be used.

## Notification Table

| Column | Type |
|---|---|
| id | UUID |
| studentId | Integer |
| type | String |
| message | Text |
| isRead | Boolean |
| createdAt | Timestamp |

---

## Problems as Data Grows

- Slow queries
- Increased DB load
- High memory usage

---

## Solutions

- Indexing
- Pagination
- Caching
- Partitioning

---

## Sample Query

SELECT * FROM notifications
WHERE studentId = 101;

# Stage 3

## Problem

The query becomes slow because millions of notifications are scanned.

---

## Better Query

CREATE INDEX idx_notifications_student_read
ON notifications(studentId, isRead);

SELECT *
FROM notifications
WHERE studentId = 1042
AND isRead = false
ORDER BY createdAt DESC;

---

## Why Not Index Every Column?

Too many indexes:
- increase storage
- slow inserts/updates
- unnecessary overhead

Indexes should only be added for frequently queried columns.

---

## Query for Placement Notifications

SELECT *
FROM notifications
WHERE notificationType = 'Placement'
AND createdAt >= NOW() - INTERVAL '7 days';

# Stage 4

## Suggested Improvements

- Redis caching
- Pagination
- Lazy loading
- Database indexing

---

## Tradeoffs

### Caching
Pros:
- Faster responses

Cons:
- Cache invalidation complexity

---

### Pagination
Pros:
- Lower DB load

Cons:
- Multiple API calls needed

# Stage 5

## Problems in Existing Approach

- Sequential processing is slow
- Email failures stop execution
- High response time

---

## Better Design

- Use message queues
- Process emails asynchronously
- Separate DB writes from notifications

---

## Revised Pseudocode

function notify_all(student_ids, message):

    add_jobs_to_queue(student_ids)

worker():

    send_email()

    save_to_db()

    push_to_app()

---

## Why Queue?

Queues improve:
- scalability
- retry mechanisms
- fault tolerance
