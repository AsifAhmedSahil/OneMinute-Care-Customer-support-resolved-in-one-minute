(function () {
  try {
    var script = document.currentScript;

    if (!script) return;

    var widgetId = script.getAttribute("data-id");

    if (!widgetId) {
      console.error("[oneminute care] missing data-id");
      return;
    }

    fetch("http://localhost:3000/api/widget/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      body: JSON.stringify({
        widget_id: widgetId,
      }),
    }).then(function (res) {
      if (!res.ok) {
        throw new Error("Session request failed!");
      }
    });
  } catch (error) {}
});
