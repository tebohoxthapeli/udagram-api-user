import AWS from "aws-sdk";
import { config } from "./config/config";

const { aws_profile, aws_region, aws_media_bucket } = config;

// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({ profile: aws_profile });
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
	signatureVersion: "v4",
	region: aws_region,
	params: { Bucket: aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
	return s3.getSignedUrl("getObject", {
		Bucket: aws_media_bucket,
		Key: key,
		Expires: 60 * 5,
	});
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
	return s3.getSignedUrl("putObject", {
		Bucket: aws_media_bucket,
		Key: key,
		Expires: 60 * 5,
	});
}
