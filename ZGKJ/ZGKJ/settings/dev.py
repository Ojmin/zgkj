# 开发环境配置文件

"""
Django settings for zgkjMall project.

Generated by 'django-admin startproject' using Django 1.11.11.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os
import sys

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# print(BASE_DIR)

# 为了保证应用的注册和导包正常，需要追加导包路径执行'apps'
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))
# print(sys.path)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ''

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# 允许哪些域名访问django
ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',  # DRF
    'corsheaders',  # JS跨域请求问题
    'ckeditor',  # 富文本编辑器
    'ckeditor_uploader',  # 富文本编辑器上传图片模块
    'django_crontab',  # 定时任务
    'haystack',  # 对接搜索引擎

    # 以下应用是xadmin
    #'xadmin',
    #'crispy_forms',
    #'reversion',

    'goods.apps.GoodsConfig',  # 商品模块
    'areas.apps.AreasConfig',  # 省市区模块
    'users.apps.UsersConfig',  # 用户模块，由用户模型类限制的此种注册方式
    'orders.apps.OrdersConfig',  # 订单模块
    'payment.apps.PaymentConfig',  # 支付模块
    'refund.apps.RefundConfig',  # 支付模块
    'withdrawcash.apps.WithdrawcashConfig',  # 提现模块
    'qiniustorage',
]

MIDDLEWARE = [
    # 放在中间件最外层的原因：跨域的问题需要在请求一开始就得到解决，所以需要优先执行，而中间件在处理请求时自上而下
    'corsheaders.middleware.CorsMiddleware',  # 最外层的中间件
    # 'ZGKJ.middleware.middleware.JWTMiddleware',
    'ZGKJ.middleware.middleware.CorsMiddleware',
    'ZGKJ.middleware.middleware.UserIdVerify',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
# 允许跨域
CORS_ORIGIN_ALLOW_ALL = True
# cookie允许
# CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = (
    'http://127.0.0.1:8000',
    'http://localhost:8000',
    'http://0.0.0.0:8000',
    'http://192.168.3.210:8000',
    'https://www.zugo.vip',
    
    # "*",
)
CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
    'VIEW',
)

CORS_ALLOW_HEADERS = (
    'XMLHttpRequest',
    'X_FILENAME',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'Pragma',
    'userid',
)

ROOT_URLCONF = 'ZGKJ.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ZGKJ.wsgi.application'

# 管理员认证接口
# AUTHENTICATION_BACKENDS = [
#     'users.utils.UserAuth',
# ]

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {  # 主：写
        'ENGINE': 'django.db.backends.mysql',
        'HOST': '127.0.0.1',  # 数据库主机
        'PORT': 3306,  # 数据库端口
        'USER': 'root',  # 数据库用户名
        'PASSWORD': '',  # 数据库用户密码
        'NAME': 'zgkjdb',  # 数据库名字
        # 修复多对多偏离
        'OPTIONS': {
            "init_command": "SET foreign_key_checks = 0;",
            'charset': 'utf8mb4',

        },
        # 连接池时间
        'CONN_MAX_AGE': 300,
    }
}

# 配置Redis作为缓存的后端数据库
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/0",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    },
    # 不能删
    "session": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    },

    "mySession": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/3",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "CONNECTION_POOL_KWARGS": {"max_connections": 100},
            # "PICKLE_VERSION": -1,
        }
    },
    "cart": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/4",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "session"

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators
# 三级联动收货地址的缓存
REST_FRAMEWORK_EXTENSIONS = {
    # 缓存时间
    'DEFAULT_CACHE_RESPONSE_TIMEOUT': 60 * 60,
    # 缓存存储
    'DEFAULT_USE_CACHE': 'default',
}
# 简体中文
LANGUAGE_CODE = 'zh-hans'
# 亚洲/上海时区
TIME_ZONE = 'Asia/Shanghai'
USE_TZ = False

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/


# 日志
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,  # 是否禁用已经存在的日志器
    'formatters': {  # 日志信息显示的格式
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s %(lineno)d %(message)s'
        },
        'simple': {
            'format': '%(levelname)s %(asctime)s %(module)s %(lineno)d %(message)s'
        },
    },
    'filters': {  # 对日志进行过滤
        'require_debug_true': {  # django在debug模式下才输出日志
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {  # 日志处理方法
        'console': {  # 向终端中输出日志
            'level': 'INFO',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'file': {  # 向文件中输出日志
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': os.path.join(os.path.dirname(BASE_DIR), "logs/zgkl.log"),  # 日志文件的位置
            'maxBytes': 300 * 1024 * 1024,
            'backupCount': 10,
            'formatter': 'verbose',
            'encoding': 'utf-8'
        },
    },
    'loggers': {  # 日志器
        'django': {  # 定义了一个名为django的日志器
            'handlers': ['console', 'file'],  # 可以同时向终端与文件中输出日志
            'propagate': True,  # 是否继续传递日志信息
            'level': 'INFO',  # 日志器接收的最低日志级别
            'encoding': 'utf-8'
        },
    }
}

# DRF配置
REST_FRAMEWORK = {
    # 异常处理
    'EXCEPTION_HANDLER': 'ZGKJ.utils.exceptions.exception_handler',
    # 认证为空，需自定义
    "DEFAULT_AUTHENTICATION_CLASSES": [],

    # 分页
    'DEFAULT_PAGINATION_CLASS': 'ZGKJ.utils.pagination.LargeResultsSetPagination',
    # 每页10个
    'PAGE_SIZE': 10,

}

# 修改默认的认证后端
AUTHENTICATION_BACKENDS = [
    'users.utils.UsernameMobileAuthBackend',
]

# 富文本编辑器ckeditor配置
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',  # 工具条功能
        'height': 300,  # 编辑器高度
        # 'width': 300,  # 编辑器宽
    },
}
CKEDITOR_UPLOAD_PATH = 'upload/'  # 上传图片保存路径
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static/'),
# ]
# STATIC_URL = '/static/'

CKEDITOR_IMAGE_BACKEND = 'pillow'  # 缩略图

# 解决crontab中文问题
CRONTAB_COMMAND_PREFIX = 'LANG_ALL=zh_cn.UTF-8'

# Haystack
HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.elasticsearch_backend.ElasticsearchSearchEngine',
        'URL': 'http://172.19.179.205:9200/',  # 此处为elasticsearch运行的服务器ip地址，端口号固定为9200
        'INDEX_NAME': 'zgkjdb',  # 指定elasticsearch建立的索引库的名称
    },
}

# 当添加、修改、删除数据时，自动生成索引
HAYSTACK_SIGNAL_PROCESSOR = 'haystack.signals.RealtimeSignalProcessor'

# 微信的
APP_ID = ''
APP_SECRET = ''
APP_MCH_ID = ''
APP_PARTNER_KEY = ''
# 分流加密MD5 sign_key
SIGN_KEY = ""
# 七牛云的

QINIU_ACCESS_KEY = ''
QINIU_SECRET_KEY = ''
QINIU_BUCKET_NAME = ''
QINIU_BUCKET_DOMAIN = ''
# QINIU_SECURE_URL = False

DEFAULT_FILE_STORAGE = 'qiniustorage.backends.QiniuStorage'
MEDIA_URL = QINIU_BUCKET_DOMAIN
MEDIA_ROOT = QINIU_BUCKET_DOMAIN
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
# 静态文件的收集路径
# STATIC_ROOT = os.path.join(BASE_DIR, 'static')
# 七牛之后要注释原来本地的路径
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
# MEDIA_URL = '/media/'

# 阿里物流
LOGISTICS_URL = 'https://kdwlcxf.market.alicloudapi.com/kdwlcx'
# APP_CODE = '74f29147bafe44529b198907208949b4'
APP_CODE = ''