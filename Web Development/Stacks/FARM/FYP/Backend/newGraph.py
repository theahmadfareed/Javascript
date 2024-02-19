from database import session,session2
from model import newsBrands, newsCompetitor, newsHashtag, redditBrands, Base


def graph(brand: str, competitor: str, hashtag: str, day: int ):
    days = day
    getDatafromtable(brand, days, newsBrands)
    getDatafromtable(competitor, days, newsCompetitor)
    getDatafromtable2(hashtag, days, newsHashtag)

    getDatafromtable2(brand, days, redditBrands)
    return "nothing"

def getDatafromtable(name: str,table: Base):
    rows = session.query(table).filter(table.name == name).all()
    return rows

def getDatafromtable2(name: str,table: Base):
    rows = session2.query(table).filter(table.name == name).all()
    return rows