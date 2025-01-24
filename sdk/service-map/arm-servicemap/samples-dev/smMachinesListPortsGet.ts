/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Returns a collection of live ports on the specified machine during the specified time interval.
 *
 * @summary Returns a collection of live ports on the specified machine during the specified time interval.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Machines/Ports/SMMachinesListPortsGet.json
 */
import { ServiceMap } from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";

async function smMachinesListPortsGet() {
  const subscriptionId = "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName = "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const machineName = "m-999066c5-38c5-4f2f-9ce0-51d738cdc432";
  const startTime = new Date("2018-01-07T08:01:48.525Z");
  const endTime = new Date("2018-01-07T08:01:48.525Z");
  const options = { startTime: startTime, endTime: endTime };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.machines.listPorts(
    resourceGroupName,
    workspaceName,
    machineName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

smMachinesListPortsGet().catch(console.error);
