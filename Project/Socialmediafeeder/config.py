from dotenv import load_dotenv
load_dotenv()

class Config(object):
    MONGO_URL = "mongodb://localhost:27017/"
    TOKEN_EXPIRY = 1000
    DB_NAME = "social"
    MAIL_TOKEN_EXPIRY = 15

    #encryption
    SECRET_KEY = ""
    CIPHER_KEY = ""
    SECRET_KEY_FOR_EMAIL = ""

    #email config
    EMAIL_USERNAME = ""
    EMAIL_PASSWORD = ""

    #facebook credentials
    page_id = "page_id"
    page_token = "page_token"

    #whatsapp
    sid = "sid"
    authToken = 'authToken'

class DevelopmentConfig(Config):
    DEBUG = True

class TestingConfig(Config):
    TESTING = True

class StagingConfig(Config):
    TESTING = True

class ProductionConfig(Config):
    MONGO_URL = "mongodb://localhost:27017/"
    DEBUG = False
    TESTING = False

# other flask enironment variables
# FLASK_ENV - Controls the environment.
# FLASK_DEBUG - Enables debug mode.
# FLASK_RUN_EXTRA_FILES - A list of files that will be watched by the reloader in addition to the Python modules.
# FLASK_RUN_HOST - The host you want to bind your app to.
# FLASK_RUN_PORT - The port you want to use.
# FLASK_RUN_CERT - A certificate file for so your app can be run with HTTPS.
# FLASK_RUN_KEY - The key file for your cert.

# .env reference
# https://prettyprinted.com/tutorials/automatically_load_environment_variables_in_flask

