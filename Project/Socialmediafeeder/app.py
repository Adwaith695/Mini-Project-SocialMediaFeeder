from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_swagger_ui import get_swaggerui_blueprint

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

if app.config["ENV"] == "production":
    app.config.from_object("config.ProductionConfig")
elif app.config["ENV"] == "staging":
    app.config.from_object("config.StagingConfig")
elif app.config["ENV"] == "testing":
    app.config.from_object("config.TestingConfig")
elif app.config["ENV"] == "development":
    app.config.from_object("config.DevelopmentConfig")


### swagger specific ###
SWAGGER_URL = '/swagger-ui'
API_URL = '/static/swagger.yaml'
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Social Media Feeder API - Swagger UI"
    }
)
app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)
### end swagger specific ###


#Authorization APIs
import resources.authorization.login as authorization
api.add_resource(authorization.UserLogin,"/userLogin")
api.add_resource(authorization.ForgotUserPassword,"/forgotPassword")
api.add_resource(authorization.PasswordReset, "/resetPassword")

#users
import resources.mdm.users as user
api.add_resource(user.MdmUsers,'/mdm/users')

#whatsapp:
import  resources.core.whatsapp as wp
api.add_resource(wp.messenger, "/whatsapp")

#facebook
import resources.core.facebook as fb
api.add_resource(fb.Chat,"/facebook")

#twitter
import resources.core.twitter as tw
api.add_resource(tw.Tweet,"/twitter")
api.add_resource(tw.Trend,'/trending')

#sendAll
import resources.core.commonpost as cp
api.add_resource(cp.Sendall,'/sendall')

if __name__ == '__main__':
    app.run()