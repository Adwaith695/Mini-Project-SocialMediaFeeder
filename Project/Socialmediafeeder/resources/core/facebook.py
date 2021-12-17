import json
import common.auth.token_utils as auth
from flask import request
from flask_restful import Resource

page_id="page_id"
user_token="user_token"
profile_id="profile_id"
user_id="user_id"   
page_token="page_token"

import requests

class Chat(Resource):
    def post(self):
        try:
            data = request.get_json()
            page_id=data["pageId"]
            page_token=data["pageToken"]
            url = "https://graph.facebook.com/{page_id}/feed?message={msg}&access_token={page_token}"
            res = requests.post(url.format(page_id=page_id, msg=data["msg"], page_token=page_token))
            return {"code": 200, "Message": "Successfuly created Facebook Post"},200
        except Exception  as e:
            print(e)
            return {"code": 404, "Message": "Post not send"},404

    # @auth.verifyToken
    def get(self):
        try:
            url = "https://graph.facebook.com/{page_id}/feed?access_token={page_token}"
            res = requests.get(url.format(page_id=page_id, page_token=page_token))
            list = json.loads(res.content)
            return {"code": 200, "Message": "Data Served", "data": list}
        except Exception as e:
            return {"code": 404, "Message": "Post not found"}

    # @auth.verifyToken
    def delete(self):
        try:
            ppid = request.args.get("ppid")
            filterData = json.loads(ppid)
            url = "https://graph.facebook.com/{ppid}?access_token={page_token}"
            print(ppid.get("ppid"))
            response = requests.delete(url.format(ppid=filterData, page_token=page_token))
            print(4)
            print(response.content)
        except Exception as e:
            return {"code": 404, "Message": "Post not deleted"}





