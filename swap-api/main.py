from datetime import date, datetime
from typing import List, Union
from fastapi import FastAPI, Response, status
from sqlmodel import Field, Session, SQLModel, create_engine, select
from sqlalchemy.orm import declarative_base

import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3
#from databases import Database
from sqlalchemy import Table, Column, Integer, String
from sqlalchemy import MetaData

from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String

from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy import text


metadata = sqlalchemy.MetaData()


metadata_obj = MetaData()

user_table = Table(
    "user_account",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("name", String(30)),
    Column("fullname", String),
)



Base = declarative_base()

class MasterPay(Base):
    __tablename__ = "MasterPay_Customers"
    id = Column(Integer, primary_key=True)
    cchash = Column(String(30))
    wallet_address = Column(String)
    currency = Column(String)
   
    def __repr__(self):
        return f"MasterPay_Customers(id={self.id!r}, cchash={self.cchash!r}, wallet_address={self.wallet_address!r}, currency={self.currency!r})"

class Payment(Base):

    __tablename__ = "Payments"
    id = Column(Integer, primary_key=True)
    cchash = Column(String(30))
    dollaramount = Column(String)
    merchant = Column(String)
    def __repr__(self):
        return f"Payment(id={self.id!r}, cchash={self.cchash!r}, wallet_address={self.dollaramount!r}, merchant={self.merchant!r})"

class User(Base):
    __tablename__ = "user_account"
    id = Column(Integer, primary_key=True)
    name = Column(String(30))
    fullname = Column(String)
    addresses = relationship(
        "Address", back_populates="user", cascade="all, delete-orphan"
    )
    def __repr__(self):
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"


class Address(Base):
    __tablename__ = "address"
    id = Column(Integer, primary_key=True)
    email_address = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("user_account.id"), nullable=False)
    user = relationship("User", back_populates="addresses")
    def __repr__(self):
        return f"Address(id={self.id!r}, email_address={self.email_address!r})"

DATABASE_URL = "sqlite:///./test.db"


engine = create_engine("sqlite://", echo=True, future=True)

Base.metadata.create_all(engine)

def test(Payment):
    with Session(engine) as session:

        session.add_all([Payment,])
        session.commit()




app = FastAPI()

tester = Payment(
            cchash="1111222233334444",
            dollaramount="1500.00",
            merchant="0x122123434323432434234324343243423432432423432432",
        )

def get_payment(card, amount, to):
    payment = Payment(
            cchash=card,
            dollaramount=amount,
            merchant=to,
        )
    return payment




class Payment(BaseModel):
    cchash: str 
    dollaramount: str 
    merchant: str


def hashcc(number, expiry, sec_code):

    a = hash(number)
    b = hash(expiry)
    c = hash(sec_code)

    d = a + b + c 

    return d
    
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/cardhash")
async def root():
    return {"message": "Hello World"}


@app.put("/mastercheckout/", status_code=200)
async def make_Payment(payment: Payment, response: Response):

    test(tester)
