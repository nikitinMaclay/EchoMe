import os
from flask import Flask, request, render_template, redirect, url_for, flash
from mailSender.mail_sender import send_mail_message
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    if not all([name, email, message]):
        flash("Пожалуйста, заполните все поля.")
        return redirect(url_for("index") + "#contact")

    send_mail_message(name, email, message)
    flash("Ваше сообщение успешно отправлено!")
    return redirect(url_for("index") + "#contact")


if __name__ == '__main__':
    app.run()