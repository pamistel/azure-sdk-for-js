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
  MachinePool} from "@azure/arm-redhatopenshift";
import {
  AzureRedHatOpenShiftClient,
} from "@azure/arm-redhatopenshift";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation returns properties of a MachinePool.
 *
 * @summary The operation returns properties of a MachinePool.
 * x-ms-original-file: specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/openshiftclusters/stable/2023-11-22/examples/MachinePools_CreateOrUpdate.json
 */
async function createsOrUpdatesAMachinePoolWithTheSpecifiedSubscriptionResourceGroupAndResourceName() {
  const subscriptionId =
    process.env["REDHATOPENSHIFT_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["REDHATOPENSHIFT_RESOURCE_GROUP"] || "resourceGroup";
  const resourceName = "resourceName";
  const childResourceName = "childResourceName";
  const parameters: MachinePool = {
    resources:
      "ewogICAgImFwaVZlcnNpb24iOiAiaGl2ZS5vcGVuc2hpZnQuaW8vdjEiLAogICAgImtpbmQiOiAiTWFjaGluZVBvb2wiLAogICAgIm1ldGFkYXRhIjogewogICAgICAgICJuYW1lIjogInRlc3QtY2x1c3Rlci13b3JrZXIiLAogICAgICAgICJuYW1lc3BhY2UiOiAiYXJvLWY2MGFlOGEyLWJjYTEtNDk4Ny05MDU2LVhYWFhYWFhYWFhYWCIKICAgIH0sCiAgICAic3BlYyI6IHsKICAgICAgICAiY2x1c3RlckRlcGxveW1lbnRSZWYiOiB7CiAgICAgICAgICAgICJuYW1lIjogInRlc3QtY2x1c3RlciIKICAgICAgICB9LAogICAgICAgICJuYW1lIjogIndvcmtlciIsCiAgICAgICAgInBsYXRmb3JtIjogewogICAgICAgICAgICAiYXdzIjogewogICAgICAgICAgICAgICAgInJvb3RWb2x1bWUiOiB7CiAgICAgICAgICAgICAgICAgICAgImlvcHMiOiAwLAogICAgICAgICAgICAgICAgICAgICJzaXplIjogMzAwLAogICAgICAgICAgICAgICAgICAgICJ0eXBlIjogImdwMyIKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAidHlwZSI6ICJtNS54bGFyZ2UiLAogICAgICAgICAgICAgICAgInpvbmVzIjogWwogICAgICAgICAgICAgICAgICAgICJ1cy1lYXN0LTFhIgogICAgICAgICAgICAgICAgXQogICAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICAicmVwbGljYXMiOiAyCiAgICB9LAogICAgInN0YXR1cyI6IHsKICAgICAgICAiY29uZGl0aW9ucyI6IFsKICAgICAgICBdCiAgICB9Cn0K",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureRedHatOpenShiftClient(credential, subscriptionId);
  const result = await client.machinePools.createOrUpdate(
    resourceGroupName,
    resourceName,
    childResourceName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createsOrUpdatesAMachinePoolWithTheSpecifiedSubscriptionResourceGroupAndResourceName();
}

main().catch(console.error);
