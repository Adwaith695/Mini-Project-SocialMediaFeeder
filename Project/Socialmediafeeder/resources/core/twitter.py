import json
import common.auth.token_utils as auth
from twilio.rest import Client
from flask import current_app, request, render_template
from flask_restful import Resource
import common.auth.token_utils as auth
import tweepy

#twitter
API_KEY = "API_KEY"
API_KEY_SECRET = "API_KEY_SECRET"
ACCESS_TOKEN = "ACCESS_TOKEN"
ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET"
auth = tweepy.OAuthHandler(API_KEY,API_KEY_SECRET)
auth.set_access_token(ACCESS_TOKEN,ACCESS_TOKEN_SECRET)


class Tweet(Resource):
    # @auth.verifyToken
    def post(self):
        try:
            content = request.get_json()
            API_KEY = content['API_KEY']
            API_KEY_SECRET = content['API_KEY_SECRET']
            ACCESS_TOKEN = content['ACCESS_TOKEN']
            ACCESS_TOKEN_SECRET = content['ACCESS_TOKEN_SECRET']
            auth = tweepy.OAuthHandler(API_KEY,API_KEY_SECRET)
            auth.set_access_token(ACCESS_TOKEN,ACCESS_TOKEN_SECRET)
            data = {"msg":content["msg"]}
            api = tweepy.API(auth)
            try:
                api.update_status(data)
            except Exception as e:
                print(e)
            print(3)
            return {"code": 200, "Message": "Successfuly tweeted"}
        except Exception  as e:
            return {"code": 404, "Message": "message not send"}

    # @auth.verifyToken
    def get(self):
        try:
            api = tweepy.API(auth)
            public_tweets = api.home_timeline()
            status = public_tweets[0]
            json_str = json.dumps(status._json)
            return {"code": 200, "message": "data served", "data": json_str}
        except Exception as e:
            return {"code": 404, "Message": "data not served"}


class Trend(Resource):
    # @auth.verifyToken
    def get(self):
        try:
            api = tweepy.API(auth)
            india_woeid = 23424848
            trend_result = api.get_place_trends(india_woeid)
            return {"code": 200, "message": "data served", "data": trend_result}

        except Exception as e:
            return {"code": 200, "message": "data not served"}
