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
  ApplicationInsightsComponentAnalyticsItem} from "@azure/arm-appinsights";
import {
  ApplicationInsightsManagementClient
} from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Adds or Updates a specific Analytics Item within an Application Insights component.
 *
 * @summary Adds or Updates a specific Analytics Item within an Application Insights component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/AnalyticsItemPut.json
 */
async function analyticsItemPut(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-component";
  const scopePath = "analyticsItems";
  const itemProperties: ApplicationInsightsComponentAnalyticsItem = {
    content:
      "let newExceptionsTimeRange = 1d;\nlet timeRangeToCheckBefore = 7d;\nexceptions\n| where timestamp < ago(timeRangeToCheckBefore)\n| summarize count() by problemId\n| join kind= rightanti (\nexceptions\n| where timestamp >= ago(newExceptionsTimeRange)\n| extend stack = tostring(details[0].rawStack)\n| summarize count(), dcount(user_AuthenticatedId), min(timestamp), max(timestamp), any(stack) by problemId  \n) on problemId \n| order by  count_ desc\n",
    name: "Exceptions - New in the last 24 hours",
    scope: "shared",
    type: "query"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.analyticsItems.put(
    resourceGroupName,
    resourceName,
    scopePath,
    itemProperties
  );
  console.log(result);
}

analyticsItemPut().catch(console.error);
