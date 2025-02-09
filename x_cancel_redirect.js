const xCancel = "https://www.xcancel.com";

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        const url = new URL(details.url);

        return { redirectUrl: xCancel + url.pathname + url.search + url.hash };
    },
    {
        urls: [
          "*://x.com/*",
          "*://www.twitter.com/*",
          "*://www.x.com/*",
          "*://twitter.com/*",
        ],
        types: [
          "main_frame",
          "sub_frame",
          "stylesheet",
          "script",
          "image",
          "object",
          "xmlhttprequest",
          "other",
        ],
      },
      ["blocking"],
  );
  