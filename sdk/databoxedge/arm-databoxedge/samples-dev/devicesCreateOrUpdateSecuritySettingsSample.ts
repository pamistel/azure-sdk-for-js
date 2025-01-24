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
  SecuritySettings} from "@azure/arm-databoxedge";
import {
  DataBoxEdgeManagementClient
} from "@azure/arm-databoxedge";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the security settings on a Data Box Edge/Data Box Gateway device.
 *
 * @summary Updates the security settings on a Data Box Edge/Data Box Gateway device.
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2021-06-01/examples/SecuritySettingsUpdatePost.json
 */
async function createOrUpdateSecuritySettings(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const resourceGroupName = "AzureVM";
  const securitySettings: SecuritySettings = {
    deviceAdminPassword: {
      encryptionAlgorithm: "AES256",
      encryptionCertThumbprint: "<encryptionThumprint>",
      value: "<deviceAdminPassword>"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.devices.beginCreateOrUpdateSecuritySettingsAndWait(
    deviceName,
    resourceGroupName,
    securitySettings
  );
  console.log(result);
}

createOrUpdateSecuritySettings().catch(console.error);
