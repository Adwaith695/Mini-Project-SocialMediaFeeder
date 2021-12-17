from twilio.rest import Client
from flask import current_app, request, render_template
from flask_restful import Resource
import common.auth.token_utils as auth
import requests
import tweepy
import common.auth.token_utils as auth
#whatsapp
# sid = "sid"
# authToken = 'authToken'


#FaceBook
# page_id="page_id"
user_token="user_token"
profile_id="profile_id"
user_id="user_id"
# page_token="page_token"

#twitter
# API_KEY = "API_KEY"
# API_KEY_SECRET = "API_KEY_SECRET"
# ACCESS_TOKEN = "ACCESS_TOKEN"
# ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET"



class Sendall(Resource):
    def post(self):
        data = request.get_json()
        try:
            sid = data['sid']
            authToken=data['authToken']
            client=Client(sid,authToken)
            to=data['to']
            page_id=data["pageId"]
            page_token=data["pageToken"]
            API_KEY = data['API_KEY']
            API_KEY_SECRET = data['API_KEY_SECRET']
            ACCESS_TOKEN = data['ACCESS_TOKEN']
            ACCESS_TOKEN_SECRET = data['ACCESS_TOKEN_SECRET']
            auth = tweepy.OAuthHandler(API_KEY,API_KEY_SECRET)
            auth.set_access_token(ACCESS_TOKEN,ACCESS_TOKEN_SECRET)
            message = client.messages.create(to='whatsapp:'+to,from_='whatsapp:',body=data["msg"])
            try:
                url = "https://graph.facebook.com/{page_id}/feed?message={msg}&access_token={page_token}"
                res = requests.post(url.format(page_id=page_id, msg=data["msg"], page_token=page_token))
                try:
                    api = tweepy.API(auth)
                    api.update_status(data)
                    return {"code": 200, "Message": "Successfully send post in all platforms"}
                except Exception as e:
                    return {"code": 213, "Message": "1message not send"}
            except Exception as e:
                return {"code": 213, "Message": "Post not send"}
        except Exception  as e:
            return {"code": 213, "Message": "message not send"}


