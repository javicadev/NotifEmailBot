function notifyByWhatsApp() {
  var senders = [
    "person1@example.com",
    "person2@domain.com",
    "another@email.com"
  ];

  var threads = [];
  senders.forEach(function(sender) {
    var results = GmailApp.search('is:unread from:' + sender);
    threads = threads.concat(results);
  });

  if (threads.length > 0) {
    var message = "You have a new email from a known sender.";

    // Send WhatsApp message
    sendWhatsApp(message);

    // Mark threads as read
    threads.forEach(function(thread) {
      thread.markRead();
    });
  }
}

function sendWhatsApp(message) {
  var accountSid = "YOUR_ACCOUNT_SID";
  var authToken = "YOUR_AUTH_TOKEN";
  var fromNumber = "whatsapp:+14155238886"; // Twilio WhatsApp Approved number
  var toNumber = "whatsapp:+34XXXXXXXXX";   // Verified WhatsApp number

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
