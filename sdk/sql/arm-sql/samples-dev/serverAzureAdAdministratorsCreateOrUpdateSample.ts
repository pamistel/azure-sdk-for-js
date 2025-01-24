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
  ServerAzureADAdministrator} from "@azure/arm-sql";
import {
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an existing Azure Active Directory administrator.
 *
 * @summary Creates or updates an existing Azure Active Directory administrator.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/AdministratorCreateOrUpdate.json
 */
async function createsOrUpdatesAnExistingAzureActiveDirectoryAdministrator() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-4799";
  const serverName = "sqlcrudtest-6440";
  const administratorName = "ActiveDirectory";
  const parameters: ServerAzureADAdministrator = {
    administratorType: "ActiveDirectory",
    login: "bob@contoso.com",
    sid: "c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c",
    tenantId: "c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.serverAzureADAdministrators.beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      administratorName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await createsOrUpdatesAnExistingAzureActiveDirectoryAdministrator();
}

main().catch(console.error);
