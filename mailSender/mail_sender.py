import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv


load_dotenv()


def send_mail_message(name, email, message_text):
    try:
        sender_email = "nic1tin-maclay@yandex.ru"
        sender_password = os.getenv("EMAIL_PASSWORD")

        recipient_email = "guicokiuytr@gmail.com"
        subject = "📩 Новое сообщение с сайта портфолио"

        # HTML-оформление письма
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 10px;">
            <h2 style="color: #2c3e50;">Новое сообщение от пользователя</h2>
            <p><strong>Имя:</strong> {name}</p>
            <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
            <p><strong>Сообщение:</strong><br>{message_text}</p>
        </body>
        </html>
        """

        message = MIMEMultipart("alternative")
        message["From"] = sender_email
        message["To"] = recipient_email
        message["Subject"] = subject

        mime_text = MIMEText(html_body, "html")
        message.attach(mime_text)

        with smtplib.SMTP("smtp.yandex.ru", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(message)

        print("✅ Письмо успешно отправлено!")

    except Exception as e:
        print("❌ Ошибка при отправке письма:")
        print(e)
