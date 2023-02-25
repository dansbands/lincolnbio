import { gapi } from "gapi-script";

export const getEvents = (calendarID, apiKey, handleEvents) => {
  function initiate() {
    gapi.client
      .init({
        apiKey: apiKey,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
      })

      .then(function () {
        return gapi.client.request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?maxResults=2500&sortorder=descending`,
        });
      })

      .then(
        (response) => {
          let events = response.result.items;
          handleEvents(events);
        },
        function (err) {
          console.log("err", err);
          return [false, err];
        }
      );
  }

  gapi.load("client", initiate);
};
