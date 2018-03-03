# twitter_api
Connect to twitter to store 'javascript' tweets. Allow to browse them.

1) Download Repo.
2) npm install
3) Start MongoDB Server
4) Create .env file
5) node server.js in project path
6) Enjoy!


---------------------------------------------------------------------------



Env file:

CONNECTION_STRING={{connectionString}}


AVAILABLE_PAGE_SIZE=30,50,100

DEFAULT_PAGE_SIZE=30


TWITTER_API_CONSUMER_KEY={{API_CONSUMER_KEY}}

TWITTER_API_ACCESS_TOKEN_SECRET={{API_ACCESS_TOKEN_SECRET}}

TWITTER_API_ACCESS_TOKEN_KEY={{API_ACCESS_TOKEN_KEY}}

TWITTER_API_CONSUMER_SECRET={{API_CONSUMER_SECRET}}



---------------------------------------------------------------------------



Url: http://{{host:port}}/tweets?params

Available Params:
pageSize: number (Available are specified in .env)
page: number
username: string
user_mentions: string (to add many use ,)
hashtags: string (to add many use ,)
