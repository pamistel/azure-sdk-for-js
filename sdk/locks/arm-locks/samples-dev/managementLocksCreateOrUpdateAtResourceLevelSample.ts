/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ManagementLockObject} from "@azure/arm-locks";
import { ManagementLockClient } from "@azure/arm-locks";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
 *
 * @summary When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2020-05-01/examples/ManagementLocks_CreateOrUpdateAtResourceLevel.json
 */
async function createManagementLockAtResourceLevel() {
  const subscriptionId = "subscriptionId";
  const resourceGroupName = "resourcegroupname";
  const resourceProviderNamespace = "Microsoft.Storage";
  const parentResourcePath = "parentResourcePath";
  const resourceType = "storageAccounts";
  const resourceName = "teststorageaccount";
  const lockName = "testlock";
  const parameters: ManagementLockObject = { level: "ReadOnly" };
  const credential = new DefaultAzureCredential();
  const client = new ManagementLockClient(credential, subscriptionId);
  const result = await client.managementLocks.createOrUpdateAtResourceLevel(
    resourceGroupName,
    resourceProviderNamespace,
    parentResourcePath,
    resourceType,
    resourceName,
    lockName,
    parameters
  );
  console.log(result);
}

createManagementLockAtResourceLevel().catch(console.error);
