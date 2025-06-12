from app.database.db import db



class Garment(db.Model):
    __tablename__ = "garments"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    type = db.Column(db.String(50), nullable=False)  
    description = db.Column(db.String(255)) 
    observations = db.Column(db.String(255))
    order_details = db.relationship("OrderDetail", backref="garment", lazy=True)
