const axios = require("axios");

const getPriority = require("./priority");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzd2F0aGkuMjAyMkB2aXRzdHVkZW50LmFjLmluIiwiZXhwIjoxNzc4OTMyMTExLCJpYXQiOjE3Nzg5MzEyMTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNzg3ZmRlZC02MzU4LTQ4NjUtYTQwMy0xMDQ2ZTk5MTcyZDIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzd2F0aGkgZCIsInN1YiI6IjFmZGM0OGQ3LWYwZWQtNDlhZS04ZjNjLWQzMzJkZmFkMzcxOSJ9LCJlbWFpbCI6InN3YXRoaS4yMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoic3dhdGhpIGQiLCJyb2xsTm8iOiIyMm1pZDAwMzUiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiIxZmRjNDhkNy1mMGVkLTQ5YWUtOGYzYy1kMzMyZGZhZDM3MTkiLCJjbGllbnRTZWNyZXQiOiJ6bnVTSFpNeXZDRW5EY0FtIn0.USDNqfV-2pTOS5Dwzn_Xrjw71b9W584V95qV-h77lAs";

async function getNotifications() {

    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const notifications = response.data.notifications;

        notifications.sort((a, b) => {

            const priorityDiff =
                getPriority(b.Type) - getPriority(a.Type);

            if (priorityDiff !== 0)
                return priorityDiff;

            return new Date(b.Timestamp) - new Date(a.Timestamp);

        });

        const top10 = notifications.slice(0, 10);

        console.log(top10);

    } catch (error) {

        console.log(error.response?.data || error.message);

    }
}

getNotifications();