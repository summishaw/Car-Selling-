function buycar() {
    if (confirm('Are you sure you want to purchase this car?')) {
        alert('Car purchased successfully!');
    } else {
        alert('Purchase canceled.');
    }
}