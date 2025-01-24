/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type {
  CalculateRefundRequest} from "@azure/arm-reservations";
import {
  AzureReservationAPI
} from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Calculate price for returning `Reservations` if there are no policy errors.

 *
 * @summary Calculate price for returning `Reservations` if there are no policy errors.

 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/CalculateRefund.json
 */
async function calculateRefund() {
  const reservationOrderId = "276e7ae4-84d0-4da6-ab4b-d6b94f3557da";
  const body: CalculateRefundRequest = {
    id:
      "/providers/microsoft.capacity/reservationOrders/50000000-aaaa-bbbb-cccc-100000000004",
    properties: {
      reservationToReturn: {
        quantity: 1,
        reservationId:
          "/providers/microsoft.capacity/reservationOrders/50000000-aaaa-bbbb-cccc-100000000004/reservations/40000000-aaaa-bbbb-cccc-100000000000"
      },
      scope: "Reservation"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.calculateRefund.post(reservationOrderId, body);
  console.log(result);
}

async function main() {
  await calculateRefund();
}

main().catch(console.error);
