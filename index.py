from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def principal():
    return render_template ("index.html")

@app.route("/instalacion")
def instalacion():
    return render_template ("ins.html")

@app.route("/tutorial")
def oa():
    return render_template("tuto.html")

@app.route("/estructura")
def estructura():
    return render_template("estr.html")

if __name__ == '__main__':
    app.run(debug=True, port=5050)


