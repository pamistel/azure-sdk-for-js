/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ElasticSanManagement } from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List Volumes in a VolumeGroup.
 *
 * @summary List Volumes in a VolumeGroup.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2024-06-01-preview/examples/Volumes_ListByVolumeGroup_MaximumSet_Gen.json
 */
async function volumesListByVolumeGroupMaximumSetGen() {
  const subscriptionId =
    process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName =
    process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.volumes.listByVolumeGroup(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List Volumes in a VolumeGroup.
 *
 * @summary List Volumes in a VolumeGroup.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2024-06-01-preview/examples/Volumes_ListByVolumeGroup_MinimumSet_Gen.json
 */
async function volumesListByVolumeGroupMinimumSetGen() {
  const subscriptionId =
    process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName =
    process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.volumes.listByVolumeGroup(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await volumesListByVolumeGroupMaximumSetGen();
  await volumesListByVolumeGroupMinimumSetGen();
}

main().catch(console.error);
