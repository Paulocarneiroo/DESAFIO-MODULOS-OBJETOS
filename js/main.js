import Order from "./modules/order.js";
import * as OrderService from "./services/order-service.js";


//INPUT 1
const data = document
    .getElementById("dataInput")
        .innerHTML
            .split("\n");

const order = new Order(data[0], Number(data[1]), Number(data[2]));

const service = OrderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: ${service.toFixed(2)}`);


//INPUT 2
const data1 = document
    .getElementById("dataInput1")
        .innerHTML
            .split("\n");

const order1= new Order(data1[0], Number(data1[1]), Number(data1[2]));

const service1 = OrderService.total(order1);

console.log(`Pedido código ${order1.code}`);
console.log(`Valor total: ${service1.toFixed(2)}`);

//INPUT 3
const data2 = document
    .getElementById("dataInput2")
        .innerHTML
            .split("\n");


const order2= new Order(data2[0], Number(data2[1]), Number(data2[2]));

const service2 = OrderService.total(order2);

console.log(`Pedido código ${order2.code}`);
console.log(`Valor total: ${service2.toFixed(2)}`);
