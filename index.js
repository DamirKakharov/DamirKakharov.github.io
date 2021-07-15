let counter = new Counter();

counter.init(
  "8445cf97-e4f6-4a7d-8d9b-64c19b9c9a7d",
  String(Math.random()).substr(2, 12),
  "main"
);

counter.setAdditionalParams({
  env: "production",
  platform: navigator.userAgentData.platform,
});

counter.send(
  "connect",
  performance.timing.connectEnd - performance.timing.connectStart
);

counter.send(
  "ttfb",
  performance.timing.responseEnd - performance.timing.requestStart
);

console.log(navigator.language);

counter.send("connection-type", navigator.connection.type);

const button = document.getElementById("coming-soon-button");

button.addEventListener("click", () => {
  counter.send("click-button", +new Date()) - performance.timeOrigin;
});
