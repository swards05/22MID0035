const axios = require("axios");
const knapsack = require("./scheduler");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzd2F0aGkuMjAyMkB2aXRzdHVkZW50LmFjLmluIiwiZXhwIjoxNzc4OTMyMTExLCJpYXQiOjE3Nzg5MzEyMTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNzg3ZmRlZC02MzU4LTQ4NjUtYTQwMy0xMDQ2ZTk5MTcyZDIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzd2F0aGkgZCIsInN1YiI6IjFmZGM0OGQ3LWYwZWQtNDlhZS04ZjNjLWQzMzJkZmFkMzcxOSJ9LCJlbWFpbCI6InN3YXRoaS4yMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoic3dhdGhpIGQiLCJyb2xsTm8iOiIyMm1pZDAwMzUiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiIxZmRjNDhkNy1mMGVkLTQ5YWUtOGYzYy1kMzMyZGZhZDM3MTkiLCJjbGllbnRTZWNyZXQiOiJ6bnVTSFpNeXZDRW5EY0FtIn0.USDNqfV-2pTOS5Dwzn_Xrjw71b9W584V95qV-h77lAs";

async function runScheduler() {

    try {

        const depotsResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const vehiclesResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const depots = depotsResponse.data.depots;
        const vehicles = vehiclesResponse.data.vehicles;

        for (const depot of depots) {

            const result = knapsack(
                vehicles,
                depot.MechanicHours
            );

            console.log({
                depotId: depot.ID,
                maxImpact: result
            });
        }

    } catch (error) {
        console.log(error.message);
    }
}

runScheduler();