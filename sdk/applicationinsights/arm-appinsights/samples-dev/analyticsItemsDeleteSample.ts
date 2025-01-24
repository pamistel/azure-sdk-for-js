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
  AnalyticsItemsDeleteOptionalParams} from "@azure/arm-appinsights";
import {
  ApplicationInsightsManagementClient
} from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a specific Analytics Items defined within an Application Insights component.
 *
 * @summary Deletes a specific Analytics Items defined within an Application Insights component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/AnalyticsItemDelete.json
 */
async function analyticsItemDelete(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-component";
  const scopePath = "analyticsItems";
  const id = "3466c160-4a10-4df8-afdf-0007f3f6dee5";
  const options: AnalyticsItemsDeleteOptionalParams = { id };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.analyticsItems.delete(
    resourceGroupName,
    resourceName,
    scopePath,
    options
  );
  console.log(result);
}

analyticsItemDelete().catch(console.error);
