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
  LogAnalyticsQueryPackQuerySearchProperties,
  QueriesSearchOptionalParams} from "@azure/arm-operationalinsights";
import {
  OperationalInsightsManagementClient
} from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Search a list of Queries defined within a Log Analytics QueryPack according to given search properties.
 *
 * @summary Search a list of Queries defined within a Log Analytics QueryPack according to given search properties.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2019-09-01/examples/QueryPackQueriesSearch.json
 */
async function querySearch() {
  const subscriptionId =
    process.env["OPERATIONALINSIGHTS_SUBSCRIPTION_ID"] ||
    "86dc51d3-92ed-4d7e-947a-775ea79b4918";
  const resourceGroupName =
    process.env["OPERATIONALINSIGHTS_RESOURCE_GROUP"] || "my-resource-group";
  const queryPackName = "my-querypack";
  const top = 3;
  const includeBody = true;
  const querySearchProperties: LogAnalyticsQueryPackQuerySearchProperties = {
    related: { categories: ["other", "analytics"] },
    tags: { myLabel: ["label1"] }
  };
  const options: QueriesSearchOptionalParams = { top, includeBody };
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (const item of client.queries.listSearch(
    resourceGroupName,
    queryPackName,
    querySearchProperties,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await querySearch();
}

main().catch(console.error);
