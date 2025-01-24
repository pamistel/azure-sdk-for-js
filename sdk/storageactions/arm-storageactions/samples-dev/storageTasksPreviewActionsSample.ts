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
  StorageTaskPreviewAction} from "@azure/arm-storageactions";
import {
  StorageActionsManagementClient,
} from "@azure/arm-storageactions";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Runs the input conditions against input object metadata properties and designates matched objects in response.
 *
 * @summary Runs the input conditions against input object metadata properties and designates matched objects in response.
 * x-ms-original-file: specification/storageactions/resource-manager/Microsoft.StorageActions/stable/2023-01-01/examples/misc/PerformStorageTaskActionsPreview.json
 */
async function performStorageTaskActionsPreview() {
  const subscriptionId =
    process.env["STORAGEACTIONS_SUBSCRIPTION_ID"] ||
    "1f31ba14-ce16-4281-b9b4-3e78da6e1616";
  const location = "eastus";
  const parameters: StorageTaskPreviewAction = {
    properties: {
      action: {
        elseBlockExists: true,
        if: { condition: "[[equals(AccessTier, 'Hot')]]" },
      },
      blobs: [
        {
          name: "folder1/file1.txt",
          metadata: [{ key: "mKey1", value: "mValue1" }],
          properties: [
            { key: "Creation-Time", value: "Wed, 07 Jun 2023 05:23:29 GMT" },
            { key: "Last-Modified", value: "Wed, 07 Jun 2023 05:23:29 GMT" },
            { key: "Etag", value: "0x8DB67175454D36D" },
            { key: "Content-Length", value: "38619" },
            { key: "Content-Type", value: "text/xml" },
            { key: "Content-Encoding", value: "" },
            { key: "Content-Language", value: "" },
            { key: "Content-CRC64", value: "" },
            { key: "Content-MD5", value: "njr6iDrmU9+FC89WMK22EA==" },
            { key: "Cache-Control", value: "" },
            { key: "Content-Disposition", value: "" },
            { key: "BlobType", value: "BlockBlob" },
            { key: "AccessTier", value: "Hot" },
            { key: "AccessTierInferred", value: "true" },
            { key: "LeaseStatus", value: "unlocked" },
            { key: "LeaseState", value: "available" },
            { key: "ServerEncrypted", value: "true" },
            { key: "TagCount", value: "1" },
          ],
          tags: [{ key: "tKey1", value: "tValue1" }],
        },
        {
          name: "folder2/file1.txt",
          metadata: [{ key: "mKey2", value: "mValue2" }],
          properties: [
            { key: "Creation-Time", value: "Wed, 06 Jun 2023 05:23:29 GMT" },
            { key: "Last-Modified", value: "Wed, 06 Jun 2023 05:23:29 GMT" },
            { key: "Etag", value: "0x6FB67175454D36D" },
          ],
          tags: [{ key: "tKey2", value: "tValue2" }],
        },
      ],
      container: {
        name: "firstContainer",
        metadata: [{ key: "mContainerKey1", value: "mContainerValue1" }],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageActionsManagementClient(credential, subscriptionId);
  const result = await client.storageTasks.previewActions(location, parameters);
  console.log(result);
}

async function main() {
  await performStorageTaskActionsPreview();
}

main().catch(console.error);
