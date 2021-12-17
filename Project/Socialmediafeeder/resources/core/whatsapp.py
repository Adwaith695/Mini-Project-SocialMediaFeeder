from twilio.rest import Client
from flask import current_app, request, render_template
from flask_restful import Resource
import common.auth.token_utils as auth
import common.auth.token_utils as auth

#whatsapp
 

class messenger(Resource):
    # @auth.verifyToken
    def post(self):
        try:
            data = request.get_json()
            sid = data['sid']
            authToken=data['authToken']
            client=Client(sid,authToken)
            to=data['to']
            message = client.messages.create(to='whatsapp:'+to,from_='whatsapp:',body=data["msg"])
            return {"code": 200, "Message": "Successfuly send message"},200
        except Exception  as e:
            print(e)
            return {"code": 404, "Message": "message not send"},400







