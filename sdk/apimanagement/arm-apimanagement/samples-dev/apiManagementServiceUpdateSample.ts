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
  ApiManagementServiceUpdateParameters
} from "@azure/arm-apimanagement";
import {
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing API Management service.
 *
 * @summary Updates an existing API Management service.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdateServiceDisableTls10.json
 */
async function apiManagementUpdateServiceDisableTls10(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters: ApiManagementServiceUpdateParameters = {
    customProperties: {
      microsoftWindowsAzureApiManagementGatewaySecurityProtocolsTls10: "false"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing API Management service.
 *
 * @summary Updates an existing API Management service.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdateServicePublisherDetails.json
 */
async function apiManagementUpdateServicePublisherDetails(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters: ApiManagementServiceUpdateParameters = {
    publisherEmail: "foobar@live.com",
    publisherName: "Contoso Vnext"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing API Management service.
 *
 * @summary Updates an existing API Management service.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdateServiceToNewVnetAndAZs.json
 */
async function apiManagementUpdateServiceToNewVnetAndAvailabilityZones(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters: ApiManagementServiceUpdateParameters = {
    additionalLocations: [
      {
        location: "Australia East",
        publicIpAddressId:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/apim-australia-east-publicip",
        sku: { name: "Premium", capacity: 3 },
        virtualNetworkConfiguration: {
          subnetResourceId:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/apimaeavnet/subnets/default"
        },
        zones: ["1", "2", "3"]
      }
    ],
    publicIpAddressId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/publicip-apim-japan-east",
    sku: { name: "Premium", capacity: 3 },
    virtualNetworkConfiguration: {
      subnetResourceId:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet-apim-japaneast/subnets/apim2"
    },
    virtualNetworkType: "External",
    zones: ["1", "2", "3"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementUpdateServiceDisableTls10();
  await apiManagementUpdateServicePublisherDetails();
  await apiManagementUpdateServiceToNewVnetAndAvailabilityZones();
}

main().catch(console.error);
