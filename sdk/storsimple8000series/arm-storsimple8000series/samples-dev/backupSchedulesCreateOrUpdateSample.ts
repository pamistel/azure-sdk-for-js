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
  BackupSchedule} from "@azure/arm-storsimple8000series";
import {
  StorSimple8000SeriesManagementClient
} from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the backup schedule.
 *
 * @summary Creates or updates the backup schedule.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/BackupSchedulesCreateOrUpdate.json
 */
async function backupSchedulesCreateOrUpdate() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "Device05ForSDKTest";
  const backupPolicyName = "BkUpPolicy01ForSDKTest";
  const backupScheduleName = "schedule2";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const parameters: BackupSchedule = {
    backupType: "CloudSnapshot",
    kind: "Series8000",
    retentionCount: 1,
    scheduleRecurrence: {
      recurrenceType: "Weekly",
      recurrenceValue: 1,
      weeklyDaysList: ["Friday", "Thursday", "Monday"]
    },
    scheduleStatus: "Enabled",
    startTime: new Date("2017-06-24T01:00:00Z")
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.backupSchedules.beginCreateOrUpdateAndWait(
    deviceName,
    backupPolicyName,
    backupScheduleName,
    resourceGroupName,
    managerName,
    parameters
  );
  console.log(result);
}

backupSchedulesCreateOrUpdate().catch(console.error);
