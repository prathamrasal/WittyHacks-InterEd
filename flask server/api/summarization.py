from flask import Blueprint,request,jsonify
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer

summarization = Blueprint('summarization', __name__)

def sumy_method(text):
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = LexRankSummarizer()
    #Summarize the document with 2 sentences
    summary = summarizer(parser.document, 2)
    dp = []
    for i in summary:
      lp = str(i)
    dp.append(lp)
    final_sentence = ' '.join(dp)
    return final_sentence

@summarization.route("/",methods=['post'])
def home():
    text = request.json['text']
    summary = sumy_method(text)
    return jsonify(summary)
