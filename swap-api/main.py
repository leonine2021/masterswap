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

class Payment(Base):

    __tablename__ = "Payments"
    id = Column(Integer, primary_key=True)
    wallet_address = Column(String(30)) # users identifier
    cchash = Column(String(30))
    dollaramount = Column(String) # amount in USD
    merchant = Column(String) # the address of the merchant
    currency = Column(String) # the currency that the user is trading
    def __repr__(self):
        return f"Payment(id={self.id!r}, cchash={self.cchash!r}, wallet_address={self.wallet_address!r}, dollaramount={self.dollaramount!r}, merchant={self.merchant!r}, currency={self.currency!r} )"

class Customer(Base):
    __tablename__ = "Customer"
    id = Column(Integer, primary_key=True)
    cchash = Column(String(30))
    wallet_address = Column(String)
    def __repr__(self):
        return f"User(id={self.id!r}, cchash={self.cchash!r}, wallet_address={self.wallet_address!r})"

DATABASE_URL = "sqlite:///./test.db"

engine = create_engine("sqlite://", echo=True, future=True)

Base.metadata.create_all(engine)

def test(Payment):
    with Session(engine) as session:

        session.add_all([Payment,])
        session.commit()

def register_customer_to_db(Customer):
    with Session(engine) as session:
        session.add_all([Customer])
        session.commit()



# def validateCustomer(cchash):
#     with Session(engine, future=True) as session:
#         return session.
    #     stmt = (
    #         select(Customer)
    #         .where(Customer.cchash == cchash)
    #     )

    # result = session.execute(stmt)


    # print(result.first)




app = FastAPI()

tester = Payment(
            cchash="1111222233334444",
            dollaramount="1500.00",
            merchant="0x122123434323432434234324343243423432432423432432",
            wallet_address="0x122123434323432434234324343243423432432423432499",
            currency="ETH"
        )

def get_payment(card, amount, to, currency, walletAddress ):
    payment = Payment(
            cchash=card,
            dollaramount=amount,
            merchant=to,
            currency=currency,
            wallet_address=walletAddress,
        )
    return payment




class Payment(BaseModel):
    cchash: str 
    dollaramount: str 
    merchant: str
    wallet_address: str
    currency: str

class Customer(BaseModel):
    cchash: str 
    wallet_address: str

    
@app.get("/customers/{{ccash}}")
async def get_customer():
    # validateCustomer("123")
    return {"message": "Hello World"}

@app.post("/customers", status_code=201)
async def create_customer(customer : Customer):
    return {"message": "Customer was successfully registered."}


@app.put("/mastercheckout/", status_code=200)
async def make_Payment(payment: Payment, response: Response):

    test(tester)
