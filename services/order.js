const orderRepository = require('../repositories/order');
const carRepository = require('../repositories/car');
const ResourceNotFound = require('../errors/resourceNotFound');
const ForbiddenAction = require('../errors/forbiddenAction');

const create = async (ownerId, carId, servicesId) => {
    const car = await carRepository.find(carId);
    if(!car) throw new ResourceNotFound('Car Not Found');

    const forbiddenService = 5;
    if(car.color === 'GRIS' && servicesId.indexOf(forbiddenService) > -1) {
        throw new ForbiddenAction(`Forbidden service ${forbiddenService} to property ${car.color}`);
    }

    const newOrder = await orderRepository.create(ownerId, carId, servicesId);    

    const totalCost = Object.values(newOrder.services).reduce((result, current) => {
        result += current.price
        return result;
    },0)

    return {'order':newOrder, "total": totalCost}
}

module.exports = {
    create
}