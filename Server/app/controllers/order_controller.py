from app.database.db import db
from app.models.order import Order
from app.models.garment import Garment
from app.models.order_detail import OrderDetail
from app.models.service import Service
from app.models.client import Client
from app.models.user import User


def create_order(client_id, user_id, estimated_date,total_price):
    order = Order(client_id=client_id, user_id=user_id, estimated_delivery_date=estimated_date, total=total_price)
    db.session.add(order)
    db.session.commit()
    return order





def add_service(name, description, price):
    Service= Service(name=name, description=description, price=price)
    db.session.add(Service)
    db.session.commit()
    return Service





def add_garment_to_order(order_id, type, description, notes):
    garment = Garment(order_id=order_id, type=type, description=description, observations=notes)
    db.session.add(garment)
    db.session.commit()
    return garment





def get_order_detail(order_id):
    order = Order.query.get(order_id)
    order_data ={
        "order_id": order_id,
        "client": order.clients.name,
        "status": order.state,
        "garments":[]
    }
    garments = Garment.query.filter_by(order_id=order_id)

    for garment in garments:
        garment.data = {
            "type": garment.type,
            "description": garment.description,
            "observations": garment.observations,
            "services":[]
        }
        for gs in garment.order_detail:
            Service = Service.query.get(id=gs.service_id)
            service_data = {
                "name": gs.name,
                "description": gs.discription,
                "price": gs.price
            }
            garment.data["services"].append(service_data)
        order_data["garments"].append(garment.data)
    return order_data

def create_order_detail(garment_id, service_id, quantity):
    order_detail = OrderDetail(garment_id=garment_id, service_id=service_id, quantity=quantity)
    db.session.add(order_detail)
    db.session.commit()
    return order_detail





def update_order_total(order_id, new_status):
    order = Order.query.get(order_id)
    if not order:
        return None
    order.state = new_status
    db.session.commit()
    return order

def list_orders_by_status(status):
    orders = Order.query.filter_by(state=status).all()
    data = [{
        "id": o.id,
        "client_id": o.client_id,
        "state": o.state,
        "estimated_delivery_date": o.estimated_delivery_date,
        "total": o.total,
        "pagago": o.pagado,
    } for o in orders]
    return data



def create_order_table(orders):
    data = []
    for order in orders:
        client = Client.query.get(order.client_id)
        user = User.query.get(order.user_id)
        order_table = {
            "id": order.id,
            "client_name": client.name,
            "user_name": user.name,
            "state": order.state,
            "created_at": order.created_at,
            "total": order.total,
        }
        data.append(order_table)
    return data




def get_orders_dashboard(pagination):
    data = []
    orders = Order.query.offset((pagination - 1) * 10).limit(10).order_by(Order.created_at.desc()).all()
    for order in orders:
        client = Client.query.get(order.client_id)
        user = User.query.get(order.user_id)
        order_table = {
            "id": order.id,
            "client_name": client.name,
            "user_name": user.name,
            "state": order.state,
            "created_at": order.created_at,
            "total": order.total,
        }
        data.append(order_table)
    return data




def get_pending_orders_dashboard(pagination):
    orders_received = Order.query.filter_by(state="recibido").order_by(Order.created_at.desc()).limit(10)
    orders_process = Order.query.filter_by(state="en proceso").order_by(Order.created_at.desc()).limit(10)
    if pagination > 1:
        orders_received = orders_received.offset(pagination*10)
        orders_process = orders_process.offset(pagination*10)
    orders = orders_process.all() + orders_received.all()
    return create_order_table(orders)




def get_counting():
    num_garments = Garment.query.filter(Garment).count()
    num_service = Service.query.filter(Service).count()
    num_clients = Client.query.filter(Client).count()
    num_users = User.query.filter(User).count()
    data = {
        "quantity_garments":num_garments,
        "quantity_services":num_service,
        "quantity_users":num_users,
        "quantity_clients":num_clients,
    }
    return data