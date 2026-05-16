function selectVehicles(vehicles, maxHours) {

    vehicles.sort((a, b) => {
        return (b.Impact / b.Duration) - (a.Impact / a.Duration);
    });

    let totalHours = 0;

    let selected = [];

    for (let vehicle of vehicles) {

        if (totalHours + vehicle.Duration <= maxHours) {

            selected.push(vehicle);

            totalHours += vehicle.Duration;
        }
    }

    return selected;
}

module.exports = selectVehicles;