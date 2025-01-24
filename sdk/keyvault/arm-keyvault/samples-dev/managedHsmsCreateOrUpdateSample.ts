/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ManagedHsm} from "@azure/arm-keyvault";
import { KeyVaultManagementClient } from "@azure/arm-keyvault";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a managed HSM Pool in the specified subscription.
 *
 * @summary Create or update a managed HSM Pool in the specified subscription.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-07-01/examples/ManagedHsm_CreateOrUpdate.json
 */
async function createANewManagedHsmPoolOrUpdateAnExistingManagedHsmPool() {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["KEYVAULT_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const parameters: ManagedHsm = {
    location: "westus",
    properties: {
      enablePurgeProtection: false,
      enableSoftDelete: true,
      initialAdminObjectIds: ["00000000-0000-0000-0000-000000000000"],
      softDeleteRetentionInDays: 90,
      tenantId: "00000000-0000-0000-0000-000000000000"
    },
    sku: { name: "Standard_B1", family: "B" },
    tags: { dept: "hsm", environment: "dogfood" }
  };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.managedHsms.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    parameters
  );
  console.log(result);
}

async function main() {
  await createANewManagedHsmPoolOrUpdateAnExistingManagedHsmPool();
}

main().catch(console.error);
