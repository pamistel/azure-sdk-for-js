/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MaintenanceManagementClient } from "@azure/arm-maintenance";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get Public Maintenance Configuration records
 *
 * @summary Get Public Maintenance Configuration records
 * x-ms-original-file: specification/maintenance/resource-manager/Microsoft.Maintenance/preview/2023-10-01-preview/examples/PublicMaintenanceConfigurations_List.json
 */
async function publicMaintenanceConfigurationsList() {
  const subscriptionId =
    process.env["MAINTENANCE_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const credential = new DefaultAzureCredential();
  const client = new MaintenanceManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.publicMaintenanceConfigurations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await publicMaintenanceConfigurationsList();
}

main().catch(console.error);
