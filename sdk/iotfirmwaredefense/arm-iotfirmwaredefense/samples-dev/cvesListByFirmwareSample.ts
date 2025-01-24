/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IoTFirmwareDefenseClient } from "@azure/arm-iotfirmwaredefense";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists CVE analysis results of a firmware.
 *
 * @summary Lists CVE analysis results of a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Cves_ListByFirmware_MaximumSet_Gen.json
 */
async function cvesListByFirmwareMaximumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "FirmwareAnalysisRG";
  const workspaceName = "default";
  const firmwareId = "109a9886-50bf-85a8-9d75-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.cves.listByFirmware(
    resourceGroupName,
    workspaceName,
    firmwareId,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists CVE analysis results of a firmware.
 *
 * @summary Lists CVE analysis results of a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Cves_ListByFirmware_MinimumSet_Gen.json
 */
async function cvesListByFirmwareMinimumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "FirmwareAnalysisRG";
  const workspaceName = "default";
  const firmwareId = "109a9886-50bf-85a8-9d75-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.cves.listByFirmware(
    resourceGroupName,
    workspaceName,
    firmwareId,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await cvesListByFirmwareMaximumSetGen();
  await cvesListByFirmwareMinimumSetGen();
}

main().catch(console.error);
