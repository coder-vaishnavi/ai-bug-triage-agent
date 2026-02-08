from flask import Flask, render_template, request
from ai_agent import analyze_bug

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    result = None

    if request.method == "POST":
        title = request.form["title"]
        history = request.form["history"]
        code = request.form["code"]

        result = analyze_bug(title, history, code)

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
