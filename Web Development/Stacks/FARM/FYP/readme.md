# Project Title:

Automated Product Sensing and Sentiments

# Technilogies used:

    for frontend
        react js
    for backend
        fastapi
    for database
        mysql

# Setup

## To run Frontend

    ### goto frontend
    $ yarn install --- this will install all required node modules
    $ npm start --- this will start the react app on localhost:3000

## To setup database

    create a new mysql database in mysql workbench by using following command
    $ CREATE DATABASE FYP
    $ USE DATABASE FYP
    Then goto .\Backend\database.py
    change line number 7 to
    DATABASE_URL = "mysql+pymysql://"USERNAME":"PASSWORD"@localhost:3306/FYP"

## To run Backend

    ### goto .\Backend
    $ pip install -r requirements.txt --- this will install all required packages
    $ uvicorn main:app --reload  --- this will start backend on port http://127.0.0.1:8000/

# API's used

    Reddit (praw library)
    newsapi (https://newsapi.org/v2/everything)
