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
  PortalRevisionContract
} from "@azure/arm-apimanagement";
import {
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a new developer portal's revision by running the portal's publishing. The `isCurrent` property indicates if the revision is publicly accessible.
 *
 * @summary Creates a new developer portal's revision by running the portal's publishing. The `isCurrent` property indicates if the revision is publicly accessible.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreatePortalRevision.json
 */
async function apiManagementCreatePortalRevision(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const portalRevisionId = "20201112101010";
  const parameters: PortalRevisionContract = {
    description: "portal revision 1",
    isCurrent: true
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.portalRevision.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    portalRevisionId,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementCreatePortalRevision();
}

main().catch(console.error);
