from flask import jsonify, request, Blueprint
from app.controllers.service_controller import create_service, update_service, delete_service, get_services

service_bp = Blueprint("service_bp", __name__, url_prefix="/services")

@service_bp.route("/create", methods=["POST"])  
def create():
    data = request.json
    service = create_service(data["name"], data["description"], data["price"])
    return jsonify({"msg": "servicion creado con exito", "service_id": service.id}), 200

@service_bp.route("/delete/<int:service_id>", methods=["DELETE"]) 
def delete(service_id):
    delete_service(service_id)
    return jsonify({"msg": "servicio actualizado con exito", "service_id": service_id}), 200

@service_bp.route("/get-all", methods=["GET"])  
def get_all():
    services = get_services()
    return jsonify({"msg": "ahy tienes todos may", "services": services}), 200
