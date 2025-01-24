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
  ServerThreatProtectionSettingsModel} from "@azure/arm-postgresql-flexible";
import {
  PostgreSQLManagementFlexibleServerClient,
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a server's Advanced Threat Protection settings.
 *
 * @summary Creates or updates a server's Advanced Threat Protection settings.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2024-08-01/examples/ServerThreatProtectionSettingsCreateOrUpdate.json
 */
async function updateAServerThreatProtectionSettings() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "threatprotection-4799";
  const serverName = "threatprotection-6440";
  const threatProtectionName = "Default";
  const parameters: ServerThreatProtectionSettingsModel = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const result =
    await client.serverThreatProtectionSettings.beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      threatProtectionName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await updateAServerThreatProtectionSettings();
}

main().catch(console.error);
