window.onload = function () {
  const canvas = document.getElementById("graphCanvas");
  const context = canvas.getContext("2d");

  // Define the function f(x) = 3x - 7
  function f(x) {
    return 3 * x - 7;
  }

  // Draw the graph
  function drawGraph() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    context.beginPath();
    context.moveTo(50, 300);
    context.lineTo(750, 300);
    context.moveTo(400, 50);
    context.lineTo(400, 550);
    context.strokeStyle = "black";
    context.stroke();

    // Draw the function
    context.beginPath();
    context.moveTo(50, f(0) + 300);
    for (let x = 0; x <= 700; x += 1) {
      context.lineTo(50 + x, 300 - f(x / 100 - 5));
    }
    context.strokeStyle = "blue";
    context.stroke();

    // Highlight the point where x = 5
    const xCoord = 50 + 500; // 50 + (5 * 100)
    const yCoord = 300 - f(5);
    context.beginPath();
    context.arc(xCoord, yCoord, 5, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.strokeStyle = "red";
    context.stroke();
    context.fillText("(5, 8)", xCoord + 10, yCoord - 10);
  }

  drawGraph();
};
