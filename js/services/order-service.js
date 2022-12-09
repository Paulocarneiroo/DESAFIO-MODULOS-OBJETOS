import * as Shipment from './shipping-service.js';

export function total(order){ // :Double
    const shipingValue = Shipment.shipment(order.basic);
    const percentDiscount = 1 - (order.discount/100);

    return (order.basic * percentDiscount) + shipingValue;
}