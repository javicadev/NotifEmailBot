function notificarPorSMS() {
  var remitenteObjetivo = "persona@ejemplo.com"; // CorreoRemitente
  var threads = GmailApp.search('is:unread from:' + remitenteObjetivo);

  if (threads.length > 0) {
    var mensaje = "Nuevo correo de " + remitenteObjetivo;

    // Llama a función para enviar SMS
    enviarSMS(mensaje);

    //Marca mensaje como leído para evitar duplicados
    threads.forEach(function(thread) {
      thread.markRead();
    });
  }
}

function enviarSMS(mensaje) {
  var accountSid = "TU_ACCOUNT_SID";       
  var authToken = "TU_AUTH_TOKEN";         
  var fromNumber = "+1XXXXXXXXXX";         // TWILIO NUMBER
  var toNumber = "+34XXXXXXXXX";           // VERIFIED NUMBER

  var payload = {
    To: toNumber,
    From: fromNumber,
    Body: mensaje
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
