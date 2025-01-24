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
  AdvancedThreatProtection} from "@azure/arm-mysql-flexible";
import {
  MySQLManagementFlexibleServerClient,
} from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a server's Advanced Threat Protection state.
 *
 * @summary Updates a server's Advanced Threat Protection state.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/stable/2023-12-30/examples/AdvancedThreatProtectionSettingsPutDisabled.json
 */
async function disableAServerAdvancedThreatProtectionSettingsWithAllParametersUsingPut() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MYSQL_RESOURCE_GROUP"] || "threatprotection-4799";
  const serverName = "threatprotection-6440";
  const advancedThreatProtectionName = "Default";
  const parameters: AdvancedThreatProtection = { state: "Disabled" };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const result =
    await client.advancedThreatProtectionSettings.beginUpdatePutAndWait(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
    );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates a server's Advanced Threat Protection state.
 *
 * @summary Updates a server's Advanced Threat Protection state.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/stable/2023-12-30/examples/AdvancedThreatProtectionSettingsPutEnabled.json
 */
async function enableAServerAdvancedThreatProtectionSettingsUsingPut() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MYSQL_RESOURCE_GROUP"] || "threatprotection-4799";
  const serverName = "threatprotection-6440";
  const advancedThreatProtectionName = "Default";
  const parameters: AdvancedThreatProtection = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const result =
    await client.advancedThreatProtectionSettings.beginUpdatePutAndWait(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await disableAServerAdvancedThreatProtectionSettingsWithAllParametersUsingPut();
  await enableAServerAdvancedThreatProtectionSettingsUsingPut();
}

main().catch(console.error);
