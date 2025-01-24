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
  StaticSiteLinkedBackendARMResource} from "@azure/arm-appservice";
import {
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Validates that a backend can be linked to a static site build
 *
 * @summary Validates that a backend can be linked to a static site build
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/ValidateLinkedBackendForStaticSiteBuild.json
 */
async function validateIfBackendCanBeLinkedToStaticSiteBuild(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const environmentName = "default";
  const linkedBackendName = "testBackend";
  const staticSiteLinkedBackendEnvelope: StaticSiteLinkedBackendARMResource = {
    backendResourceId:
      "/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/backendRg/providers/Microsoft.Web/sites/testBackend",
    region: "West US 2",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginValidateBackendForBuildAndWait(
    resourceGroupName,
    name,
    environmentName,
    linkedBackendName,
    staticSiteLinkedBackendEnvelope,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await validateIfBackendCanBeLinkedToStaticSiteBuild();
}

main().catch(console.error);
