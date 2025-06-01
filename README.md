# 📬 Gmail to SMS/WhatsApp Alert Bot (Google Apps Script + Twilio)

This project is an automated script that checks your Gmail account and **sends you an SMS or WhatsApp alert** when you receive a new email from one or more specific addresses.

Ideal for urgent situations, client work, freelancing, or any time you need instant notifications when someone important emails you.

---

## 🚀 What does this script do?

✅ Detects new emails from specific senders  
✅ Sends you an alert via **SMS** or **WhatsApp** using the Twilio API  
✅ Runs in the background every 5 minutes  
✅ Easily customizable for more features (Google Sheets logging, Telegram, etc.)

---

## 🧰 Requirements

- A **Gmail** account  
- A **[Twilio](https://www.twilio.com/try-twilio)** account (free tier supports verified numbers)  
- Access to **Google Apps Script**

---

## 📦 Installation

### 1. Set up your Twilio account

- Get your:
  - `ACCOUNT_SID`
  - `AUTH_TOKEN`
  - Trial phone number (`From`)
- Enable **WhatsApp Sandbox** if you plan to use WhatsApp

### 2. Create the Google Apps Script

- Go to [script.google.com](https://script.google.com/)
- Create a new project
- Paste the version of the code you want from this repository.
- Replace Twilio credentials and your sender email list

### 3. Add a trigger

- Click the ⏱️ clock icon in the Apps Script editor
- Add a trigger to run `notifBySMS` or `notifByWhatsApp`every 5 or 10 minutes

---

## ⚙️ Customization

Edit the list of target email addresses here:

```javascript
var remitentes = [
  "person1@example.com",
  "client@company.com"
];

