/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { DevCenter} from "@azure/arm-devcenter";
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a devcenter resource
 *
 * @summary Creates or updates a devcenter resource
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/DevCenters_Create.json
 */
async function devCentersCreate(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const devCenterName = "Contoso";
  const body: DevCenter = {
    displayName: "ContosoDevCenter",
    location: "centralus",
    tags: { costCode: "12345" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.devCenters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    devCenterName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a devcenter resource
 *
 * @summary Creates or updates a devcenter resource
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/DevCenters_CreateWithEncryption.json
 */
async function devCentersCreateWithEncryption(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const devCenterName = "Contoso";
  const body: DevCenter = {
    displayName: "ContosoDevCenter",
    encryption: {
      customerManagedKeyEncryption: {
        keyEncryptionKeyIdentity: {
          identityType: "userAssignedIdentity",
          userAssignedIdentityResourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1",
        },
        keyEncryptionKeyUrl:
          "https://contosovault.vault.azure.net/keys/contosokek",
      },
    },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/identityGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/testidentity1":
          {},
      },
    },
    location: "centralus",
    tags: { costCode: "12345" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.devCenters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    devCenterName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a devcenter resource
 *
 * @summary Creates or updates a devcenter resource
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/DevCenters_CreateWithUserIdentity.json
 */
async function devCentersCreateWithUserIdentity(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const devCenterName = "Contoso";
  const body: DevCenter = {
    displayName: "ContosoDevCenter",
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/identityGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/testidentity1":
          {},
      },
    },
    location: "centralus",
    tags: { costCode: "12345" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.devCenters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    devCenterName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await devCentersCreate();
  await devCentersCreateWithEncryption();
  await devCentersCreateWithUserIdentity();
}

main().catch(console.error);
