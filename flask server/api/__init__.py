from flask import Flask
from .sa import sa
from .recommendation import recommendation
from .summarization import summarization

def create_app():
    app = Flask(__name__)
    app.register_blueprint(sa,url_prefix='/sentiments')
    app.register_blueprint(summarization,url_prefix='/summarization')
    # app.register_blueprint(recommendation,url_prefix='/recommendation')
    return app