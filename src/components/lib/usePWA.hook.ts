/* inspired by https://github.com/eric-edouard/react-pwa-install-prompt */

import { useEffect, useState } from "react";

const getStandalone = () =>
  (navigator as { standalone?: boolean })?.standalone ||
  window?.matchMedia("(display-mode: standalone)").matches;

const usePWA = () => {
  const [isInstallPromptSupported, setIsInstallPromptSupported] =
    useState(false);

  const [deferredEvent, setDeferredEvent] = useState<Event | null>(null);

  const [isStandalone, setIsStandalone] = useState(getStandalone());

  useEffect(() => {
    const beforeinstallpromptHandler = (event: Event) => {
      // Prevent install prompt from showing so we can prompt it later
      event.preventDefault();

      setIsInstallPromptSupported(true);
      setDeferredEvent(event);
      setIsStandalone(getStandalone());
    };

    const onAppInstalled = () => {
      setTimeout(() => setIsStandalone(getStandalone()), 200);
    };

    const onMatchMedia = () => {
      setIsStandalone(getStandalone());
    };

    // Listen on the installation prompt. If this listener is triggered,
    // it means PWA install is possible.
    window.addEventListener("beforeinstallprompt", beforeinstallpromptHandler);

    // It's also possible to know when the user installed the app by
    // listening the app installed event
    window.addEventListener("appinstalled", onAppInstalled);

    // On Chrome, when user opens the previous installed app
    // from the website (via the shortcut in the address bar),
    // we want to check again if the app is in standalone mode.
    window
      .matchMedia("(display-mode: standalone)")
      .addEventListener("change", onMatchMedia);

    return () => {
      // Cleanup event listeners
      window.removeEventListener(
        "beforeinstallprompt",
        beforeinstallpromptHandler
      );

      window.removeEventListener("appinstalled", onAppInstalled);

      window
        .matchMedia("(display-mode: standalone)")
        .removeEventListener("change", onMatchMedia);
    };
  }, []);

  const promptInstall = async () => {
    const promptRes = await (
      deferredEvent as unknown as { prompt: () => { outcome: "accepted" } }
    ).prompt();

    setIsInstallPromptSupported(false);
    setDeferredEvent(null);

    if (promptRes.outcome !== "accepted") {
      return false;
    }

    setIsStandalone(getStandalone());

    return true;
  };

  return {
    isStandalone,
    isInstallPromptSupported,
    promptInstall,
  };
};

export default usePWA;
