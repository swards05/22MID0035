const axios = require("axios");

const selectVehicles = require("./scheduler");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzd2F0aGkuMjAyMkB2aXRzdHVkZW50LmFjLmluIiwiZXhwIjoxNzc4OTI5NDI3LCJpYXQiOjE3Nzg5Mjg1MjcsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4MTZlZDYzOC03MTQ5LTRlZjAtODIzNC1kM2ZlN2E1MzNlZGIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzd2F0aGkgZCIsInN1YiI6IjFmZGM0OGQ3LWYwZWQtNDlhZS04ZjNjLWQzMzJkZmFkMzcxOSJ9LCJlbWFpbCI6InN3YXRoaS4yMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoic3dhdGhpIGQiLCJyb2xsTm8iOiIyMm1pZDAwMzUiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiIxZmRjNDhkNy1mMGVkLTQ5YWUtOGYzYy1kMzMyZGZhZDM3MTkiLCJjbGllbnRTZWNyZXQiOiJ6bnVTSFpNeXZDRW5EY0FtIn0.rMP8kCf0VUvQO8llehhOO8aEdYmEKTHBifc0xzHqIZo";

async function runScheduler() {

    try {

        const depotResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const vehicleResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const depots = depotResponse.data.depots;

        const vehicles = vehicleResponse.data.vehicles;

        for (let depot of depots) {

            const result = selectVehicles(
                vehicles,
                depot.MechanicHours
            );

            console.log("Depot ID:", depot.ID);

            console.log(result);

            console.log("----------------");
        }

    } catch (error) {

        console.log(error.response?.data || error.message);

    }
}

runScheduler();