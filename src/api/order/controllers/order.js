"use strict";
/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const axios = require("axios");

async function createPayment(allInfo) {
  const url = "https://api.mercadopago.com/checkout/preferences";

  const preference = {
    /* payer_email: "test_user_32130191@testuser.com", */
    payer: {
      phone: {
        number: allInfo.addressShipping.phone,
      },
      email: "test_user_32130191@testuser.com",
    },
    items: allInfo.items,
    payment_methods: {
      /*  excluded_payment_methods: [
        {
          id: "master",
        },
      ], */
      excluded_payment_types: [
        {
          id: "ticket",
        },
        {
          id: "atm",
        },
      ],
      installments: 3,
    },
    shipments: {
      default_shipping_method: null,
      receiver_address: {
        zip_code: "",
        street_name: allInfo.addressShipping.address,
        street_number: null,
        floor: "",
        apartment: "",
        city_name: allInfo.addressShipping.city,
        state_name: allInfo.addressShipping.city,
        country_name: "Perú",
      },
    },
  };

  try {
    const payment = await axios.post(url, preference, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const data = JSON.parse(ctx.request.body);

    if (data.createUrl == 1) {
      const response = await createPayment(data);
      return response;
    }
    const dataToSave = JSON.parse(ctx.request.body);

    const idPayment = dataToSave.idPayment;
    const products = dataToSave.productsItems;
    const idUser = dataToSave.idUser;
    const addressShipping = dataToSave.addressShipping;

    let totalPayment = 0;
    products.forEach((product) => {
      totalPayment += product.unit_price * product.quantity;
    });

    const createOrder = [];
    for await (const product of products) {
      const data = {
        product: product.id,
        user: idUser,
        totalPayment: totalPayment,
        productsPayment: product.unit_price * product.quantity,
        quantity: product.quantity,
        idPayment: idPayment,
        addressShipping: addressShipping.attributes,
        delivered: "Pendiente",
      };
      const entry = await strapi.db.query("api::order.order").create({
        data,
      });

      createOrder.push(entry);
    }
    return createOrder;
  },
}));
