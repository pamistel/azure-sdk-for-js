/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates a new registered ASN with the specified name under the given subscription, resource group and peering.
 *
 * @summary Creates a new registered ASN with the specified name under the given subscription, resource group and peering.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreateRegisteredAsn.json
 */
import type {
  PeeringRegisteredAsn} from "@azure/arm-peering";
import {
  PeeringManagementClient
} from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateARegisteredAsnForThePeering() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const registeredAsnName = "registeredAsnName";
  const registeredAsn: PeeringRegisteredAsn = { asn: 65000 };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.registeredAsns.createOrUpdate(
    resourceGroupName,
    peeringName,
    registeredAsnName,
    registeredAsn
  );
  console.log(result);
}

createOrUpdateARegisteredAsnForThePeering().catch(console.error);
