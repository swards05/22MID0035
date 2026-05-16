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