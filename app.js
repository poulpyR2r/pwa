if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log(
          "Service Worker enregistré avec succès : ",
          registration.scope
        );
      },
      (err) => {
        console.log("enregistrement du Service Worker a échoué : ", err);
      }
    );
  });
}
