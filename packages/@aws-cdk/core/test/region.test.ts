import { Region } from '../lib';

test('Enum strings are correctly entered', () => {
  expect(Region.AF_SOUTH_1).toBe('af-south-1');
  expect(Region.AP_EAST_1).toBe('ap-east-1');
  expect(Region.AP_NORTHEAST_1).toBe('ap-northeast-1');
  expect(Region.AP_NORTHEAST_2).toBe('ap-northeast-2');
  expect(Region.AP_NORTHEAST_3).toBe('ap-northeast-3');
  expect(Region.AP_SOUTH_1).toBe('ap-south-1');
  expect(Region.AP_SOUTHEAST_1).toBe('ap-southeast-1');
  expect(Region.AP_SOUTHEAST_2).toBe('ap-southeast-2');
  expect(Region.CA_CENTRAL_1).toBe('ca-central-1');
  expect(Region.CN_NORTH_1).toBe('cn-north-1');
  expect(Region.CN_NORTHWEST_1).toBe('cn-northwest-1');
  expect(Region.EU_CENTRAL_1).toBe('eu-central-1');
  expect(Region.EU_NORTH_1).toBe('eu-north-1');
  expect(Region.EU_SOUTH_1).toBe('eu-south-1');
  expect(Region.EU_WEST_1).toBe('eu-west-1');
  expect(Region.EU_WEST_2).toBe('eu-west-2');
  expect(Region.EU_WEST_3).toBe('eu-west-3');
  expect(Region.ME_SOUTH_1).toBe('me-south-1');
  expect(Region.SA_EAST_1).toBe('sa-east-1');
  expect(Region.US_EAST_1).toBe('us-east-1');
  expect(Region.US_EAST_2).toBe('us-east-2');
  expect(Region.US_GOV_EAST_1).toBe('us-gov-east-1');
  expect(Region.US_GOV_WEST_1).toBe('us-gov-west-1');
  expect(Region.US_ISO_EAST_1).toBe('us-iso-east-1');
  expect(Region.US_ISOB_EAST_1).toBe('us-isob-east-1');
  expect(Region.US_WEST_1).toBe('us-west-1');
  expect(Region.US_WEST_2).toBe('us-west-2');
});