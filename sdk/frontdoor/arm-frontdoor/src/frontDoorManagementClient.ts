/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  NetworkExperimentProfilesImpl,
  PreconfiguredEndpointsImpl,
  ExperimentsImpl,
  ReportsImpl,
  FrontDoorNameAvailabilityImpl,
  FrontDoorNameAvailabilityWithSubscriptionImpl,
  FrontDoorsImpl,
  FrontendEndpointsImpl,
  EndpointsImpl,
  RulesEnginesImpl,
  PoliciesImpl,
  ManagedRuleSetsImpl
} from "./operations";
import {
  NetworkExperimentProfiles,
  PreconfiguredEndpoints,
  Experiments,
  Reports,
  FrontDoorNameAvailability,
  FrontDoorNameAvailabilityWithSubscription,
  FrontDoors,
  FrontendEndpoints,
  Endpoints,
  RulesEngines,
  Policies,
  ManagedRuleSets
} from "./operationsInterfaces";
import { FrontDoorManagementClientOptionalParams } from "./models";

export class FrontDoorManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the FrontDoorManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription credentials which uniquely identify the Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: FrontDoorManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: FrontDoorManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-frontdoor/5.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.networkExperimentProfiles = new NetworkExperimentProfilesImpl(this);
    this.preconfiguredEndpoints = new PreconfiguredEndpointsImpl(this);
    this.experiments = new ExperimentsImpl(this);
    this.reports = new ReportsImpl(this);
    this.frontDoorNameAvailability = new FrontDoorNameAvailabilityImpl(this);
    this.frontDoorNameAvailabilityWithSubscription = new FrontDoorNameAvailabilityWithSubscriptionImpl(
      this
    );
    this.frontDoors = new FrontDoorsImpl(this);
    this.frontendEndpoints = new FrontendEndpointsImpl(this);
    this.endpoints = new EndpointsImpl(this);
    this.rulesEngines = new RulesEnginesImpl(this);
    this.policies = new PoliciesImpl(this);
    this.managedRuleSets = new ManagedRuleSetsImpl(this);
  }

  networkExperimentProfiles: NetworkExperimentProfiles;
  preconfiguredEndpoints: PreconfiguredEndpoints;
  experiments: Experiments;
  reports: Reports;
  frontDoorNameAvailability: FrontDoorNameAvailability;
  frontDoorNameAvailabilityWithSubscription: FrontDoorNameAvailabilityWithSubscription;
  frontDoors: FrontDoors;
  frontendEndpoints: FrontendEndpoints;
  endpoints: Endpoints;
  rulesEngines: RulesEngines;
  policies: Policies;
  managedRuleSets: ManagedRuleSets;
}
