import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
export declare class CdkVpcBaselineStack extends cdk.Stack {
    readonly vpc: ec2.Vpc;
    readonly ingressSecurityGroup: ec2.SecurityGroup;
    readonly egressSecurityGroup: ec2.SecurityGroup;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
