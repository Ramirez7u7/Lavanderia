from app.database.db import db



class Garment(db.Model):
    __tablename__ = "garments"
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)  
    description = db.Column(db.String(255)) 
    observations = db.Column(db.String(255))

    def to_dict(self):
         garment = {
            'id':self.id,
            'type':self.type,
            'description':self.description,
            'observations':self.observations,
        }
         return garment
     