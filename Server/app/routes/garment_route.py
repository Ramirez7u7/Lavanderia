from flask import jsonify, request, Blueprint
from app.controllers.garment_controller import create_garment, update_garment, get_garments, delete_garment

garment_bp = Blueprint("garment_db", __name__, url_prefix="/garments")

@garment_bp.route("/create", methods=["POST"])
def create():
    data = request.json
    garment = create_garment(data["name"], data["description"])
    return jsonify({"msg": "prenda creada con exito", "garment_id": garment.id}), 200

@garment_bp.route("/get-all", methods=["GET"])
def get_all():
    garments = get_garments()
    return jsonify({"msg": "prendas obtenidas con exito", "garments": garments}), 200

@garment_bp.route("/update/<int:garment_id>", methods=["PUT"])  
def update(garment_id):
    data = request.json
    garments = update_garment(garment_id, data)
    return jsonify({"msg": "prenda actualizada con exito", "garment_id": garments.id}), 200

@garment_bp.route("/delete/<int:garment_id>", methods=["DELETE"])  
def delete(garment_id):
    delete_garment(garment_id)
    return jsonify({"msg": "prenda erradicada"}), 200
