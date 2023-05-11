from flask import Blueprint,request,jsonify
import pandas as pd
import numpy as np
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk
nltk.download('vader_lexicon')
nltk.download('wordnet')
nltk.download('omw-1.4')
nltk.download('punkt')
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.stem import PorterStemmer

sa = Blueprint('sa', __name__)

sentiments = SentimentIntensityAnalyzer()
lematizer = WordNetLemmatizer()

keywords = {
    "worst": -4,
    "bad": -3,
    "not good": -2,
    "not up to mark":-3,
    "can be better":-1,
    "need improvement":-1,
    "need better understanding":-2,
    "novice course":-2,
    "others are better":-3,
    "another topic explained":-4,
    "good course": 3,
    "great course": 4,
    "best course": 4,
    "nice course": 3,
    "better than others": 2,
    "average course": 1,
    "best explaination": 4,
    "helped a lot": 4,
    "god level teaching": 4,
    "nobody taught like this": 4
}

def getCleanText(text):
    text = text.lower()
    words = word_tokenize(text)
    wordd = []
    for w in words:
      word = lematizer.lemmatize(w)
      wordd.append(word)
    cleanText = ' '.join(wordd)
    return cleanText

def getSAScore(sentence):
    sentence = getCleanText(sentence)
    sentiments.lexicon.update(keywords)
    score=sentiments.polarity_scores(sentence)['pos']
    score2=sentiments.polarity_scores(sentence)['neu']
    return (score+0.5*score2)*100


@sa.route("/",methods=['post'])
def home():
    sent = request.json['feedback']
    score = getSAScore(sent)
    return jsonify(score)
