#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkVpcBaselineStack } from '../lib/cdk-vpc-baseline-stack';

const app = new cdk.App();
new CdkVpcBaselineStack(app, 'CdkVpcBaselineStack');
