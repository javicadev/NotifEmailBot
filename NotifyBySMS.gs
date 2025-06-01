function notifyBySMS() {
  var senders = [
    "hello1@example.com",
    "hello2@domain.com",
    "another@email.com"
  ];

  var threads = [];
  senders.forEach(function (sender) {
    var results = GmailApp.search('is:unread from:' + sender);
    threads = threads.concat(results);
  });

  if (threads.length > 0) {
    var message = "New email from one of your contacts.";

    // Send SMS
    sendSMS(message);

    // Mark threads as read
    threads.forEach(function (thread) {
      thread.markRead();
    });
  }
}

function sendSMS(message) {
  var accountSid = "YOUR_ACCOUNT_SID";
  var authToken = "YOUR_AUTH_TOKEN";
  var fromNumber = "+1XXXXXXXXXX"; // Twilio SMS number
  var toNumber = "+34XXXXXXXXX";   // Verified recipient number

  var payload = {
    To: toNumber,
    From: fromNumber,
    Body: message
  };

  var options = {
    method: "post",
    payload: payload,
    headers: {
      Authorization: "Basic " + Utilities.base64Encode(accountSid + ":" + authToken)
    }
  };

  var url = "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json";

  UrlFetchApp.fetch(url, options);
}
