/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A standard Relay (https://relay.dev/graphql/connections.htm) Cursor.
   * Used to page through Connections.
   */
  Cursor: { input: any; output: any; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
  /** An RFC-3339 compliant DateTime Scalar */
  DateTime: { input: any; output: any; }
  /** A string representation of a decimal number, using a . as the decimal separator. */
  Decimal: { input: any; output: any; }
  /**
   * A duration of time in [ISO8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) e.g., "P1W3D".
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  Duration: { input: any; output: any; }
  /** An email address. */
  EmailAddress: { input: any; output: any; }
  /** "A hex color code. For example, "#FFFFFF".  */
  HexColor: { input: any; output: any; }
  /** A JSON scalar */
  JSON: { input: any; output: any; }
  /**
   * A numeric type for large integer values that can serialize safely as JSON.
   *
   * While JSON itself has no hard limit on the size of integers, the RFC-7159 spec
   * mentions that values outside of the range -9,007,199,254,740,991 (-(2^53) + 1)
   * to 9,007,199,254,740,991 (2^53 - 1) may not be interopable with all JSON
   * implementations. As it turns out, the number implementation used by JavaScript
   * has this issue. When you parse a JSON string that contains a numeric value like
   * `4693522397653681111`, the parsed result will contain a rounded value like
   * `4693522397653681000`.
   *
   * While this is entirely a client-side problem, we want to preserve maximum compatibility
   * with common client languages. Given the ubiquity of GraphiQL as a GraphQL client,
   * we want to avoid this problem.
   *
   * Our solution is to support two separate types:
   *
   * - This type (`JsonSafeLong`) is serialized as a number, but limits values to the safely
   *   serializable range.
   * - The `LongString` type supports long values that use all 64 bits, but serializes as a
   *   string rather than a number, avoiding the JavaScript compatibility problems.
   *
   * For more background, see the [JavaScript `Number.MAX_SAFE_INTEGER`
   * docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
   */
  JsonSafeLong: { input: any; output: any; }
  /** A language code, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A) */
  LanguageCode: { input: any; output: any; }
  /** A Local Time Scalar */
  LocalTime: { input: any; output: any; }
  /**
   * A numeric type for large integer values in the inclusive range -2^63
   * (-9,223,372,036,854,775,808) to (2^63 - 1) (9,223,372,036,854,775,807).
   *
   * Note that `LongString` values are serialized as strings within JSON, to avoid
   * interopability problems with JavaScript. If you want a large integer type that
   * serializes within JSON as a number, use `JsonSafeLong`.
   */
  LongString: { input: any; output: any; }
  /** A phone number in human readable format. */
  PhoneNumber: { input: any; output: any; }
  /** An [IANA Timezone identifier](https://www.iana.org/time-zones). */
  TimeZone: { input: any; output: any; }
  /** An ID for a field that is only unique within the context of its object rather than globally." */
  UID: { input: any; output: any; }
  /** A Url scalar */
  Url: { input: any; output: any; }
  /** An iCalendar (RFC5545) event, which specifies the name, timing, duration and recurrence. */
  iCalendarEvent: { input: any; output: any; }
};

export enum Auth_Target_Type {
  /** The annotated element must be an ID corresponding to a Merchant. */
  Merchant = 'MERCHANT'
}

/**
 * Represents a postal address in a country.
 * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
 */
export type Address = {
  __typename?: 'Address';
  /**
   * The first line of the address.
   * Fields that start with `addressLine` provide the address's most specific
   * details, like street number, street name, and building name. They do *not*
   * provide less specific details like city, state/province, or country (these
   * details are provided in other fields).
   */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address, if any. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** The third line of the address, if any. */
  addressLine3?: Maybe<Scalars['String']['output']>;
  /**
   * A civil entity within the address's country. In the US, this is the state.
   * For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  administrativeDistrictLevel1?: Maybe<Scalars['String']['output']>;
  /** The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`. */
  country: Country;
  /**
   * The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`.
   * @deprecated Use `country` instead.
   */
  countryCode: CountryCode;
  /**
   * The city or town of the address. For a full list of field meanings by country,
   * see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  locality?: Maybe<Scalars['String']['output']>;
  /** The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** A civil region within the address's `locality`, if any. */
  sublocality?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `Address` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type AddressFilterInput = {
  /**
   * Used to filter on the `addressLine1` field:
   *
   * > The first line of the address.
   * >
   * > Fields that start with `addressLine` provide the address's most specific
   * > details, like street number, street name, and building name. They do *not*
   * > provide less specific details like city, state/province, or country (these
   * > details are provided in other fields).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  addressLine1?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `addressLine2` field:
   *
   * > The second line of the address, if any.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  addressLine2?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `addressLine3` field:
   *
   * > The third line of the address, if any.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  addressLine3?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `administrativeDistrictLevel1` field:
   *
   * > A civil entity within the address's country. In the US, this is the state.
   * > For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  administrativeDistrictLevel1?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `administrativeDistrictLevel2` field:
   *
   * > A civil entity within the address's `administrativeDistrictLevel1`.  In the US, this is the county.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  administrativeDistrictLevel2?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `administrativeDistrictLevel3` field:
   *
   * > A civil entity within the address's `administrativeDistrictLevel2`, if any.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  administrativeDistrictLevel3?: InputMaybe<StringFilterInput>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<AddressFilterInput>>;
  /**
   * Used to filter on the `country` field:
   *
   * > The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  country?: InputMaybe<CountryFilterInput>;
  /**
   * Used to filter on the `firstName` field:
   *
   * > Optional first name when it's representing recipient.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  firstName?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `lastName` field:
   *
   * > Optional last name when it's representing recipient.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  lastName?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `locality` field:
   *
   * > The city or town of the address. For a full list of field meanings by
   * country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  locality?: InputMaybe<StringFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<AddressFilterInput>;
  /**
   * Used to filter on the `organization` field:
   *
   * > Optional organization name when it's representing recipient.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  organization?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `postalCode` field:
   *
   * > The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  postalCode?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `sublocality` field:
   *
   * > A civil region within the address's `locality`, if any.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  sublocality?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `sublocality2` field:
   *
   * > A civil region within the address's `sublocality`, if any.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  sublocality2?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `sublocality3` field:
   *
   * > A civil region within the address's `sublocality2`, if any.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  sublocality3?: InputMaybe<StringFilterInput>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about Afterpay payments.
 */
export type AfterpayPaymentDetails = {
  __typename?: 'AfterpayPaymentDetails';
  /** Email address on the buyer's Afterpay account. */
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
};

/**
 * Input type used to specify filters on `AfterpayPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type AfterpayPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `emailAddress` field:
   *
   * > Email address on the buyer's Afterpay account.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  emailAddress?: InputMaybe<EmailAddressFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a refund for an application fee on a payment.
 */
export type AppFeeRefundDetails = {
  __typename?: 'AppFeeRefundDetails';
  /** ID of the location associated with the refund. */
  locationId?: Maybe<Scalars['ID']['output']>;
  /** ID of the payment associated with the refund. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `AppFeeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type AppFeeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `locationId` field:
   *
   * > ID of the location associated with the refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  locationId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with the refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Revenue generated from an application fee on a payment.
 */
export type AppFeeRevenueDetails = {
  __typename?: 'AppFeeRevenueDetails';
  /** ID of the location associated with the revenue. */
  locationId?: Maybe<Scalars['ID']['output']>;
  /** ID of the payment associated with the revenue. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `AppFeeRevenueDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type AppFeeRevenueDetailsFilterInput = {
  /**
   * Used to filter on the `locationId` field:
   *
   * > ID of the location associated with the revenue.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  locationId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with the revenue.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Defines an appointment segment of a booking.
 * Permissions: APPOINTMENTS_READ
 */
export type AppointmentSegment = {
  __typename?: 'AppointmentSegment';
  /** Whether the customer accepts any team member, instead of a specific one, to serve this segment. */
  anyTeamMember?: Maybe<Scalars['Boolean']['output']>;
  /** The time span in minutes of an appointment segment. */
  durationMinutes?: Maybe<Scalars['Int']['output']>;
  /** Time between the end of this segment and the beginning of the subsequent segment. */
  intermissionMinutes?: Maybe<Scalars['Int']['output']>;
  /** The IDs of the seller-accessible resources used for this appointment segment. */
  resourceIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The ID of the CatalogItemVariation object representing the service booked in this segment. */
  serviceVariationId?: Maybe<Scalars['ID']['output']>;
  /** The current version of the item variation representing the service booked in this segment. */
  serviceVariationVersion?: Maybe<Scalars['Int']['output']>;
  /** The ID of the TeamMember object representing the team member booked in this segment. */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Defines the values for the `archived_state` query expression
 * used in [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems)
 * to return the archived, not archived or either type of catalog items.
 */
export enum ArchivedState {
  /** Requested items can be archived or not archived. */
  ArchivedStateAll = 'ARCHIVED_STATE_ALL',
  /** Requested items are archived with the `is_archived` attribute set to `true`. */
  ArchivedStateArchived = 'ARCHIVED_STATE_ARCHIVED',
  /** Requested items are not archived with the `is_archived` attribute set to `false`. */
  ArchivedStateNotArchived = 'ARCHIVED_STATE_NOT_ARCHIVED'
}

/** The query filter to return not archived (ARCHIVED_STATE_NOT_ARCHIVED), archived (ARCHIVED_STATE_ARCHIVED), or either type (ARCHIVED_STATE_ALL) of items. */
export type ArchivedStateFilter = {
  /** The archived state we are filtering on. */
  state?: InputMaybe<ArchivedState>;
};

/** The annotated element must be an ID corresponding to a Merchant */
export enum AuthTarget {
  /** The annotated element must be an ID corresponding to a Merchant. */
  Merchant = 'MERCHANT'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any automatic transfer from the payment processing balance to the Square Savings account.
 */
export type AutomaticSavingsDetails = {
  __typename?: 'AutomaticSavingsDetails';
  /** ID of the payment related to the automatic savings. */
  paymentId: Scalars['ID']['output'];
  /** ID of the payout associated with the automatic savings. */
  payoutId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input type used to specify filters on `AutomaticSavingsDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type AutomaticSavingsDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment related to the automatic savings.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `payoutId` field:
   *
   * > ID of the payout associated with the automatic savings.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  payoutId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any automatic transfer from the Square Savings account back to the processing balance.
 */
export type AutomaticSavingsReversedDetails = {
  __typename?: 'AutomaticSavingsReversedDetails';
  /** ID of the payment related to the reversed automatic savings. */
  paymentId: Scalars['ID']['output'];
  /** ID of the payout associated with the reversed automatic savings. */
  payoutId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input type used to specify filters on `AutomaticSavingsReversedDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type AutomaticSavingsReversedDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment related to the reversed automatic savings.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `payoutId` field:
   *
   * > ID of the payout associated with the reversed automatic savings.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  payoutId?: InputMaybe<IdFilterInput>;
};

/**
 * Defines an appointment slot that encapsulates the appointment segments, location and starting time available for booking.
 * Permissions: APPOINTMENTS_READ
 */
export type Availability = {
  __typename?: 'Availability';
  /** The list of appointment segments available for booking */
  appointmentSegments?: Maybe<Array<Maybe<AppointmentSegment>>>;
  /** The ID of the location available for booking. */
  location?: Maybe<Location>;
  /**
   * The RFC 3339 timestamp specifying the beginning time of the slot available for booking.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  startAt?: Maybe<Scalars['String']['output']>;
};

/** A query filter to search for buyer-accessible availabilities by. */
export type AvailabilityFilter = {
  /**
   * The query expression to search for buyer-accessible availabilities for an existing booking by matching the specified `booking_id` value.
   * This is commonly used to reschedule an appointment.
   * If this expression is set, the `location_id` and `segment_filters` expressions cannot be set.
   */
  bookingId?: InputMaybe<Scalars['ID']['input']>;
  /** A datetime value in RFC 3339 format indicating when the time range ends. */
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The query expression to search for buyer-accessible availabilities with their location IDs matching the specified location ID.
   * This query expression cannot be set if `booking_id` is set.
   */
  locationId: Scalars['ID']['input'];
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /**
   * The query expression to search for buyer-accessible availabilities matching the specified list of segment filters.
   * If the size of the `segment_filters` list is `n`, the search returns availabilities with `n` segments per availability.
   *
   * This query expression cannot be set if `booking_id` is set.
   */
  segmentFilters: Array<InputMaybe<SegmentFilter>>;
  /** A datetime value in RFC 3339 format indicating when the time range starts. */
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a transfer of funds to a banking folder. In the United States, the
 * folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.'
 */
export type BalanceFoldersTransferDetails = {
  __typename?: 'BalanceFoldersTransferDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `BalanceFoldersTransferDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type BalanceFoldersTransferDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a transfer of funds from a banking folder. In the United States, the
 * folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.'
 */
export type BalanceFoldersTransferReversedDetails = {
  __typename?: 'BalanceFoldersTransferReversedDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `BalanceFoldersTransferReversedDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type BalanceFoldersTransferReversedDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** The ownership type of the bank account performing the transfer. */
export enum BankAccountPaymentAccountOwnershipType {
  AccountTypeUnknown = 'ACCOUNT_TYPE_UNKNOWN',
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

/**
 * Input type used to specify filters on `BankAccountPaymentAccountOwnershipType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentAccountOwnershipTypeFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `BankAccountPaymentAccountOwnershipTypeFilterInput`
   * input because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<BankAccountPaymentAccountOwnershipTypeFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountPaymentAccountOwnershipTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BankAccountPaymentAccountOwnershipTypeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<BankAccountPaymentAccountOwnershipTypeFilterInput>;
};

/** The ownership type of the bank account performing the transfer. */
export enum BankAccountPaymentAccountOwnershipTypeInput {
  AccountTypeUnknown = 'ACCOUNT_TYPE_UNKNOWN',
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transferType` of `ACH`.
 */
export type BankAccountPaymentAchDetails = {
  __typename?: 'BankAccountPaymentAchDetails';
  /** The last few digits of the bank account number. */
  accountNumberSuffix?: Maybe<Scalars['String']['output']>;
  /** The type of the bank account performing the transfer. The account type can be `CHECKING`, `SAVINGS`, or `UNKNOWN`. */
  accountType?: Maybe<BankAccountType>;
  /** The routing number for the bank account. */
  routingNumber?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `BankAccountPaymentAchDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentAchDetailsFilterInput = {
  /**
   * Used to filter on the `accountNumberSuffix` field:
   *
   * > The last few digits of the bank account number.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  accountNumberSuffix?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `accountType` field:
   *
   * > The type of the bank account performing the transfer. The account type can be `CHECKING`, `SAVINGS`, or `UNKNOWN`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  accountType?: InputMaybe<BankAccountTypeFilterInput>;
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `BankAccountPaymentAchDetailsFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<BankAccountPaymentAchDetailsFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountPaymentAchDetailsFilterInput>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<BankAccountPaymentAchDetailsFilterInput>;
  /**
   * Used to filter on the `routingNumber` field:
   *
   * > The routing number for the bank account.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  routingNumber?: InputMaybe<StringFilterInput>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about BANK_ACCOUNT type payments.
 */
export type BankAccountPaymentDetails = {
  __typename?: 'BankAccountPaymentDetails';
  /** The ownership type of the bank account performing the transfer. */
  accountOwnershipType?: Maybe<BankAccountPaymentAccountOwnershipType>;
  /** ACH-specific information about the transfer. The information is only populated if the `transferType` is `ACH`. */
  achDetails?: Maybe<BankAccountPaymentAchDetails>;
  /** The name of the bank associated with the bank account. */
  bankName?: Maybe<Scalars['String']['output']>;
  /** The two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Country>;
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /**
   * Uniquely identifies the bank account for this seller and can be used to
   * determine if payments are from the same bank account.
   */
  fingerprint?: Maybe<Scalars['ID']['output']>;
  /** The statement description as sent to the bank. */
  statementDescription?: Maybe<Scalars['String']['output']>;
  /** The type of the bank transfer. */
  transferType?: Maybe<BankAccountPaymentTransferType>;
};

/**
 * Input type used to specify filters on `BankAccountPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `accountOwnershipType` field:
   *
   * > The ownership type of the bank account performing the transfer.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  accountOwnershipType?: InputMaybe<BankAccountPaymentAccountOwnershipTypeFilterInput>;
  /**
   * Used to filter on the `achDetails` field:
   *
   * > ACH-specific information about the transfer. The information is only populated if the `transferType` is `ACH`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  achDetails?: InputMaybe<BankAccountPaymentAchDetailsFilterInput>;
  /**
   * Used to filter on the `bankName` field:
   *
   * > The name of the bank associated with the bank account.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  bankName?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `country` field:
   *
   * > The two-letter ISO code representing the country the bank account is located in.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  country?: InputMaybe<CountryFilterInput>;
  /**
   * Used to filter on the `errors` field:
   *
   * > Information about errors encountered during the request.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  errors?: InputMaybe<ErrorFieldsListFilterInput>;
  /**
   * Used to filter on the `fingerprint` field:
   *
   * > Uniquely identifies the bank account for this seller and can be used to
   * determine if payments are from the same bank account.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  fingerprint?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `statementDescription` field:
   *
   * > The statement description as sent to the bank.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  statementDescription?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `transferType` field:
   *
   * > The type of the bank transfer.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  transferType?: InputMaybe<BankAccountPaymentTransferTypeFilterInput>;
};

/** The type of the bank transfer. */
export enum BankAccountPaymentTransferType {
  Ach = 'ACH',
  OpenBanking = 'OPEN_BANKING',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `BankAccountPaymentTransferType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentTransferTypeFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `BankAccountPaymentTransferTypeFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<BankAccountPaymentTransferTypeFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountPaymentTransferTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BankAccountPaymentTransferTypeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<BankAccountPaymentTransferTypeFilterInput>;
};

/** The type of the bank transfer. */
export enum BankAccountPaymentTransferTypeInput {
  Ach = 'ACH',
  OpenBanking = 'OPEN_BANKING',
  Unknown = 'UNKNOWN'
}

/** Indicates the financial purpose of the bank account. */
export enum BankAccountType {
  /**
   * An account at a financial institution against which checks can be
   * drawn specifically for business purposes (non-personal use).
   */
  BusinessChecking = 'BUSINESS_CHECKING',
  /**
   * An account at a financial institution against which checks can be
   * drawn by the account depositor.
   */
  Checking = 'CHECKING',
  /**
   * An account at a financial institution that contains a deposit of funds
   * and/or securities.
   */
  Investment = 'INVESTMENT',
  /**
   * An account at a financial institution which cannot be described by the
   * other types.
   */
  Other = 'OTHER',
  /**
   * An account at a financial institution that pays interest but cannot be
   * used directly as money in the narrow sense of a medium of exchange.
   */
  Savings = 'SAVINGS',
  /** Reserved value for unknown. */
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `BankAccountType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BankAccountTypeFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `BankAccountTypeFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<BankAccountTypeFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BankAccountTypeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<BankAccountTypeFilterInput>;
};

/** Indicates the financial purpose of the bank account. */
export enum BankAccountTypeInput {
  /**
   * An account at a financial institution against which checks can be
   * drawn specifically for business purposes (non-personal use).
   */
  BusinessChecking = 'BUSINESS_CHECKING',
  /**
   * An account at a financial institution against which checks can be
   * drawn by the account depositor.
   */
  Checking = 'CHECKING',
  /**
   * An account at a financial institution that contains a deposit of funds
   * and/or securities.
   */
  Investment = 'INVESTMENT',
  /**
   * An account at a financial institution which cannot be described by the
   * other types.
   */
  Other = 'OTHER',
  /**
   * An account at a financial institution that pays interest but cannot be
   * used directly as money in the narrow sense of a medium of exchange.
   */
  Savings = 'SAVINGS',
  /** Reserved value for unknown. */
  Unknown = 'UNKNOWN'
}

/** Input type used to specify filters on `Boolean` fields. */
export type BasicBooleanFilter = {
  /** Matches records where the the field value is equal to the provided value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type used to specify filters on `Currency` fields. */
export type BasicCurrencyFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<CurrencyInput>>;
};

/** Input type used to specify filters on `DateTime` fields. */
export type BasicDateTimeFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Matches records where the the field value is greater than (>) the provided value. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches records where the the field value is greater than or equal to (>=) the provided value. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches records where the the field value is less than (<) the provided value. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches records where the the field value is less than or equal to (<=) the provided value. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Input type used to specify filters on `ID` fields. */
export type BasicIdFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input type used to specify filters on `ID` fields. */
export type BasicIdFilterInput = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf: Array<Scalars['ID']['input']>;
};

/** Input type used to specify filters on `Int` fields. */
export type BasicIntFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Matches records where the the field value is greater than (>) the provided value. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches records where the the field value is greater than or equal to (>=) the provided value. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Matches records where the the field value is less than (<) the provided value. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches records where the the field value is less than or equal to (<=) the provided value. */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Input type used to specify filters on `JsonSafeLong` fields. */
export type BasicJsonSafeLongFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['JsonSafeLong']['input']>>;
  /** Matches records where the the field value is greater than (>) the provided value. */
  gt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /** Matches records where the the field value is greater than or equal to (>=) the provided value. */
  gte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /** Matches records where the the field value is less than (<) the provided value. */
  lt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /** Matches records where the the field value is less than or equal to (<=) the provided value. */
  lte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
};

/** Input type used to specify filters on `Money` fields. */
export type BasicMoneyFilter = {
  /**
   * Used to filter on the `amount` field:
   *
   * > The amount of money, in the smallest denomination of the currency
   * > indicated by `currency`. For example, when `currency` is `USD`, `amount` is
   * > in cents. Monetary amounts can be positive or negative. See the specific
   * > field description to determine the meaning of the sign in a particular case.
   */
  amount?: InputMaybe<BasicJsonSafeLongFilter>;
  /**
   * Used to filter on the `currency` field:
   *
   * > The type of currency, in __ISO 4217 format__. For example, the currency
   * > code for US dollars is `USD`.
   */
  currency?: InputMaybe<BasicCurrencyFilter>;
};

/** Input type used to specify filters on `String` fields. */
export type BasicStringFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A basic text filter */
export type BasicTextFilter = {
  /** Matches records that contain the specified value. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
 * at a given location to a requesting customer in one or more appointment segments.
 * Permissions: APPOINTMENTS_READ
 */
export type Booking = {
  __typename?: 'Booking';
  /** Stores a customer address if the location type is `CUSTOMER_LOCATION`. */
  address?: Maybe<Address>;
  /** Whether the booking is of a full business day. */
  allDay?: Maybe<Scalars['Boolean']['output']>;
  /** A list of appointment segments for this booking. */
  appointmentSegments?: Maybe<Array<Maybe<AppointmentSegment>>>;
  /**
   * The RFC 3339 timestamp specifying the creation time of this booking.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Information about the booking creator. */
  creatorDetails?: Maybe<BookingCreatorDetails>;
  /** The ID of the Customer object representing the customer receiving the booked service. */
  customer?: Maybe<Customer>;
  /** The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant CatalogObject instance. */
  customerNote?: Maybe<Scalars['String']['output']>;
  /** A unique ID of this object representing a booking. */
  id: Scalars['ID']['output'];
  /** The ID of the Location object representing the location where the booked service is provided. Once set when the booking is created, its value cannot be changed. */
  location?: Maybe<Location>;
  /** The type of location where the booking is held. */
  locationType?: Maybe<BusinessAppointmentSettingsBookingLocationType>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific CatalogObject instance.
   * This field should not be visible to customers.
   */
  sellerNote?: Maybe<Scalars['String']['output']>;
  /**
   * The source of the booking.
   * Access to this field requires seller-level permissions.
   */
  source?: Maybe<BookingBookingSource>;
  /**
   * The RFC 3339 timestamp specifying the starting time of this booking.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  startAt?: Maybe<Scalars['String']['output']>;
  /** The status of the booking, describing where the booking stands with respect to the booking state machine. */
  status?: Maybe<BookingStatus>;
  /**
   * Additional time at the end of a booking.
   * Applications should not make this field visible to customers of a seller.
   */
  transitionTimeMinutes?: Maybe<Scalars['Int']['output']>;
  /**
   * The RFC 3339 timestamp specifying the most recent update time of this booking.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The revision number for the booking used for optimistic concurrency. */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * A list of availabilities for booking.
 * Permissions:APPOINTMENTS_READ
 */
export type BookingAvailabilityConnection = {
  __typename?: 'BookingAvailabilityConnection';
  /** List of availabilities for booking. */
  nodes: Array<Availability>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Supported sources a booking was created from. */
export enum BookingBookingSource {
  /** The booking was created by a seller or a buyer from the Square Bookings API. */
  Api = 'API',
  /** The booking was created by a buyer from a Square Appointments application, such as Square Online Booking Site. */
  FirstPartyBuyer = 'FIRST_PARTY_BUYER',
  /** The booking was created by a seller from a Square Appointments application, such as the Square Appointments Dashboard or a Square Appointments mobile app. */
  FirstPartyMerchant = 'FIRST_PARTY_MERCHANT',
  /** The booking was created by a buyer created from a third-party application. */
  ThirdPartyBuyer = 'THIRD_PARTY_BUYER'
}

/**
 * A list of bookings.
 * Permissions:APPOINTMENTS_READ
 */
export type BookingConnection = {
  __typename?: 'BookingConnection';
  /** List of Booking. */
  nodes: Array<Booking>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Information about a booking creator.
 * Permissions: APPOINTMENTS_READ
 */
export type BookingCreatorDetails = {
  __typename?: 'BookingCreatorDetails';
  /** The seller-accessible type of the creator of the booking. */
  creatorType?: Maybe<BookingCreatorDetailsCreatorType>;
  /**
   * The ID of the customer who created the booking, when the booking creator is of the `CUSTOMER` type.
   * Access to this field requires seller-level permissions.
   */
  customer?: Maybe<Customer>;
  /**
   * The ID of the team member who created the booking, when the booking creator is of the `TEAM_MEMBER` type.
   * Access to this field requires seller-level permissions.
   */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
};

/** Supported types of a booking creator. */
export enum BookingCreatorDetailsCreatorType {
  /** The creator is of the buyer type. */
  Customer = 'CUSTOMER',
  /** The creator is of the seller type. */
  TeamMember = 'TEAM_MEMBER'
}

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted bookings returned
 * Permissions:APPOINTMENTS_READ
 */
export type BookingFilter = {
  /** A non-empty list of Booking IDs specifying bookings to retrieve. */
  bookingId?: InputMaybe<BasicIdFilter>;
  /** The customer for whom to retrieve bookings. If this is not set, bookings for all customers are retrieved. */
  customerId?: InputMaybe<Scalars['ID']['input']>;
  /** The location for which to retrieve bookings. If this is not set, all locations' bookings are retrieved. */
  locationId?: InputMaybe<Scalars['ID']['input']>;
  /** The Square-assigned ID of the merchant. */
  merchantId: BasicIdFilter;
  /**
   * The RFC 3339 timestamp specifying the latest of the start time. If this is not set, the time of 31 days after start_at_min is used.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  startAtMax?: InputMaybe<Scalars['String']['input']>;
  /**
   * The RFC 3339 timestamp specifying the earliest of the start time. If this is not set, the current time is used.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  startAtMin?: InputMaybe<Scalars['String']['input']>;
  /** The team member for whom to retrieve bookings. If this is not set, bookings of all members are retrieved. */
  teamMemberId?: InputMaybe<Scalars['ID']['input']>;
};

/** Supported booking statuses. */
export enum BookingStatus {
  /** An accepted booking agreed to or accepted by the seller. */
  Accepted = 'ACCEPTED',
  /** A customer-cancelled booking. It is visible to both the seller and the customer. */
  CancelledByCustomer = 'CANCELLED_BY_CUSTOMER',
  /** A seller-cancelled booking. It is visible to both the seller and the customer. */
  CancelledBySeller = 'CANCELLED_BY_SELLER',
  /** A declined booking. It had once been pending, but was then declined by the seller. */
  Declined = 'DECLINED',
  /**
   * A no-show booking. The booking was accepted at one time, but have now been marked as a no-show by
   * the seller because the client either missed the booking or cancelled it without enough notice.
   */
  NoShow = 'NO_SHOW',
  /** An unaccepted booking. It is visible to both sellers and customers. */
  Pending = 'PENDING'
}

/**
 * Input type used to specify filters on `Boolean` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BooleanFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<BooleanFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<BooleanFilterInput>;
};

/**
 * A record of an employee's break during a shift.
 * Permissions: TIMECARDS_SETTINGS_READ
 */
export type Break = {
  __typename?: 'Break';
  /** The `BreakType` that this `Break` was templated on. */
  breakType?: Maybe<BreakType>;
  /**
   * RFC 3339; follows the same timezone information as `Shift`. Precision up to
   * the minute is respected; seconds are truncated.
   */
  endAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
   * the break.
   */
  expectedDuration?: Maybe<Scalars['Duration']['output']>;
  /** The UUID for this object. */
  id: Scalars['ID']['output'];
  /**
   * Whether this break counts towards time worked for compensation
   * purposes.
   */
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A human-readable name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * RFC 3339; follows the same timezone information as `Shift`. Precision up to
   * the minute is respected; seconds are truncated.
   */
  startAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * A defined break template that sets an expectation for possible `Break`
 * instances on a `Shift`.
 * Permissions: TIMECARDS_SETTINGS_READ
 */
export type BreakType = {
  __typename?: 'BreakType';
  /**
   * A human-readable name for this type of break. The name is displayed to
   * employees in Square products.
   */
  breakName?: Maybe<Scalars['String']['output']>;
  /**
   * A read-only timestamp in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
   * this break. Precision less than minutes is truncated.
   *
   * Example for break expected duration of 15 minutes: T15M
   */
  expectedDuration?: Maybe<Scalars['Duration']['output']>;
  /** The UUID for this object. */
  id: Scalars['ID']['output'];
  /**
   * Whether this break counts towards time worked for compensation
   * purposes.
   */
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the business location this type of break applies to. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * A read-only timestamp in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If a value is not
   * provided, Square's servers execute a "blind" write; potentially
   * overwriting another writer's data.
   */
  version?: Maybe<Scalars['JsonSafeLong']['output']>;
};

/**
 * A list of Breaks.
 *
 * Permissions:TIMECARDS_SETTINGS_READ
 */
export type BreakTypeConnection = {
  __typename?: 'BreakTypeConnection';
  /** List of break types */
  nodes: Array<BreakType>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** BreakTypeFilter is used for filtering a query with BreakType */
export type BreakTypeFilter = {
  /** Fetch break types for the specified ids. */
  id?: InputMaybe<BasicIdFilter>;
  /** Fetch break types for the specified location. */
  locationId?: InputMaybe<BasicIdFilter>;
  /** Fetch break types for the specified merchant. */
  merchantId: BasicIdFilter;
};

/**
 * The service appointment settings, including where and how the service is provided.
 * Permissions: APPOINTMENTS_READ
 */
export type BusinessAppointmentSettings = {
  __typename?: 'BusinessAppointmentSettings';
  /** The time unit of the service duration for bookings. */
  alignmentTime?: Maybe<BusinessAppointmentSettingsAlignmentTime>;
  /**
   * Indicates whether a customer can choose from all available time slots and have a staff member assigned
   * automatically (`true`) or not (`false`).
   */
  anyTeamMemberBookingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The flat-fee amount charged for a no-show booking. */
  cancellationFeeMoney?: Maybe<Money>;
  /** The cancellation policy adopted by the seller. */
  cancellationPolicy?: Maybe<BusinessAppointmentSettingsCancellationPolicy>;
  /** The free-form text of the seller's cancellation policy. */
  cancellationPolicyText?: Maybe<Scalars['String']['output']>;
  /** The cut-off time in seconds for allowing clients to cancel or reschedule an appointment. */
  cancellationWindowSeconds?: Maybe<Scalars['Int']['output']>;
  /** Types of the location allowed for bookings. */
  locationTypes?: Maybe<Array<Maybe<BusinessAppointmentSettingsBookingLocationType>>>;
  /** The maximum number of daily appointments per team member or per location. */
  maxAppointmentsPerDayLimit?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether the daily appointment limit applies to team members or to
   * business locations.
   */
  maxAppointmentsPerDayLimitType?: Maybe<BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType>;
  /** The maximum lead time in seconds before a service can be booked. A booking must be created at most this amount of time before its starting time. */
  maxBookingLeadTimeSeconds?: Maybe<Scalars['Int']['output']>;
  /** The minimum lead time in seconds before a service can be booked. A booking must be created at least this amount of time before its starting time. */
  minBookingLeadTimeSeconds?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a customer can book multiple services in a single online booking. */
  multipleServiceBookingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether customers has an assigned staff member (`true`) or can select s staff member of their choice (`false`). */
  skipBookingFlowStaffSelection?: Maybe<Scalars['Boolean']['output']>;
};

/** Time units of a service duration for bookings. */
export enum BusinessAppointmentSettingsAlignmentTime {
  /** The service duration unit is a 30-minute interval. Bookings can be scheduled every half hour. */
  HalfHourly = 'HALF_HOURLY',
  /** The service duration unit is a 60-minute interval. Bookings can be scheduled every hour. */
  Hourly = 'HOURLY',
  /** The service duration unit is a 15-minute interval. Bookings can be scheduled every quarter hour. */
  QuarterHourly = 'QUARTER_HOURLY',
  /** The service duration unit is one visit of a fixed time interval specified by the seller. */
  ServiceDuration = 'SERVICE_DURATION'
}

/** Supported types of location where service is provided. */
export enum BusinessAppointmentSettingsBookingLocationType {
  /** The service is provided at a seller location. */
  BusinessLocation = 'BUSINESS_LOCATION',
  /** The service is provided at a customer location. */
  CustomerLocation = 'CUSTOMER_LOCATION',
  /** The service is provided over the phone. */
  Phone = 'PHONE'
}

/** The category of the seller’s cancellation policy. */
export enum BusinessAppointmentSettingsCancellationPolicy {
  /** Cancellations are treated as no shows and may incur a fee as specified by `cancellation_fee_money`. */
  CancellationTreatedAsNoShow = 'CANCELLATION_TREATED_AS_NO_SHOW',
  /** Cancellations follow the seller-specified policy that is described in free-form text and not enforced automatically by Square. */
  CustomPolicy = 'CUSTOM_POLICY'
}

/** Types of daily appointment limits. */
export enum BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType {
  /** The maximum number of daily appointments is set on a per location basis. */
  PerLocation = 'PER_LOCATION',
  /** The maximum number of daily appointments is set on a per team member basis. */
  PerTeamMember = 'PER_TEAM_MEMBER'
}

/**
 * A seller's business booking profile, including booking policy, appointment settings, etc.
 * Permissions: APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type BusinessBookingProfile = {
  __typename?: 'BusinessBookingProfile';
  /** Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`). */
  allowUserCancel?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the seller is open for booking. */
  bookingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The policy for the seller to automatically accept booking requests (`ACCEPT_ALL`) or not (`REQUIRES_ACCEPTANCE`). */
  bookingPolicy?: Maybe<BusinessBookingProfileBookingPolicy>;
  /** Settings for appointment-type bookings. */
  businessAppointmentSettings?: Maybe<BusinessAppointmentSettings>;
  /**
   * The RFC 3339 timestamp specifying the booking's creation time.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The choice of customer's time zone information of a booking.
   * The Square online booking site and all notifications to customers uses either the seller location’s time zone
   * or the time zone the customer chooses at booking.
   */
  customerTimezoneChoice?: Maybe<BusinessBookingProfileCustomerTimezoneChoice>;
  /** The ID of the seller, obtainable using the Merchants API. */
  sellerId?: Maybe<Scalars['ID']['output']>;
  /** Indicates whether the seller's subscription to Square Appointments supports creating, updating or canceling an appointment through the API (`true`) or not (`false`) using seller permission. */
  supportSellerLevelWrites?: Maybe<Scalars['Boolean']['output']>;
};

/** Policies for accepting bookings. */
export enum BusinessBookingProfileBookingPolicy {
  /** The seller accepts all booking requests automatically. */
  AcceptAll = 'ACCEPT_ALL',
  /** The seller must accept requests to complete bookings. */
  RequiresAcceptance = 'REQUIRES_ACCEPTANCE'
}

/**
 * Retrieves a seller's booking profile.
 * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type BusinessBookingProfileConnection = {
  __typename?: 'BusinessBookingProfileConnection';
  /** Lists location booking profiles of a seller. */
  nodes: Array<BusinessBookingProfile>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Choices of customer-facing time zone used for bookings. */
export enum BusinessBookingProfileCustomerTimezoneChoice {
  /** Use the time zone of the business location for bookings. */
  BusinessLocationTimezone = 'BUSINESS_LOCATION_TIMEZONE',
  /** Use the customer-chosen time zone for bookings. */
  CustomerChoice = 'CUSTOMER_CHOICE'
}

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted business booking profile
 * returned
 * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type BusinessBookingProfileFilter = {
  /** The Square-assigned ID of the merchant. */
  merchantId: BasicIdFilter;
};

/**
 * The hours of operation for a business location.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type BusinessHours = {
  __typename?: 'BusinessHours';
  /** The list of time periods during which the business is open. There can be at most 10 periods per day. */
  periods?: Maybe<Array<Maybe<BusinessHoursPeriod>>>;
};

/**
 * A period of time during which a business location is open.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type BusinessHoursPeriod = {
  __typename?: 'BusinessHoursPeriod';
  /** The day of week for this time period. */
  dayOfWeek?: Maybe<DayOfWeek>;
  /** The end time of a business hours period, specified in local time using partial-time RFC 3339 format. */
  endLocalTime?: Maybe<Scalars['String']['output']>;
  /** The start time of a business hours period, specified in local time using partial-time RFC 3339 format. */
  startLocalTime?: Maybe<Scalars['String']['output']>;
};

/** The brand used for a Buy Now Pay Later payment. */
export enum BuyNowPayLaterPaymentBrand {
  Afterpay = 'AFTERPAY',
  Clearpay = 'CLEARPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `BuyNowPayLaterPaymentBrand` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BuyNowPayLaterPaymentBrandFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `BuyNowPayLaterPaymentBrandFilterInput` input because
   * of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<BuyNowPayLaterPaymentBrandFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<BuyNowPayLaterPaymentBrandFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BuyNowPayLaterPaymentBrandInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<BuyNowPayLaterPaymentBrandFilterInput>;
};

/** The brand used for a Buy Now Pay Later payment. */
export enum BuyNowPayLaterPaymentBrandInput {
  Afterpay = 'AFTERPAY',
  Clearpay = 'CLEARPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about a Buy Now Pay Later payment type.
 */
export type BuyNowPayLaterPaymentDetails = {
  __typename?: 'BuyNowPayLaterPaymentDetails';
  /** Details about an Afterpay payment. These details are only populated if the `brand` is `AFTERPAY`. */
  afterpayDetails?: Maybe<AfterpayPaymentDetails>;
  /** The brand used for the Buy Now Pay Later payment. */
  brand?: Maybe<BuyNowPayLaterPaymentBrand>;
  /** Details about a Clearpay payment. These details are only populated if the `brand` is `CLEARPAY`. */
  clearpayDetails?: Maybe<ClearpayPaymentDetails>;
};

/**
 * Input type used to specify filters on `BuyNowPayLaterPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type BuyNowPayLaterPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `afterpayDetails` field:
   *
   * > Details about an Afterpay payment. These details are only populated if the `brand` is `AFTERPAY`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  afterpayDetails?: InputMaybe<AfterpayPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `brand` field:
   *
   * > The brand used for the Buy Now Pay Later payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  brand?: InputMaybe<BuyNowPayLaterPaymentBrandFilterInput>;
  /**
   * Used to filter on the `clearpayDetails` field:
   *
   * > Details about a Clearpay payment. These details are only populated if the `brand` is `CLEARPAY`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  clearpayDetails?: InputMaybe<ClearpayPaymentDetailsFilterInput>;
};

/**
 * Represents the payment details of a card to be used for payments. These details
 * are determined by the payment token generated by Web Payments SDK.
 *
 * Permissions: PAYMENTS_READ.
 */
export type Card = {
  __typename?: 'Card';
  /** The billing address for this card. */
  billingAddress?: Maybe<Address>;
  /**
   * The first six digits of the card number, known as the Bank Identification
   * Number (BIN). Only the Payments API returns this field.
   */
  bin?: Maybe<Scalars['String']['output']>;
  /** The card's brand. */
  cardBrand?: Maybe<CardBrand>;
  /** The card's co-brand if available. For example, an Afterpay virtual card would have a co-brand of AFTERPAY. */
  cardCoBrand?: Maybe<CardCoBrand>;
  /**
   * The type of the card.
   * The Card object includes this field only in response to Payments API calls.
   */
  cardType?: Maybe<CardType>;
  /** The name of the cardholder. */
  cardholderName?: Maybe<Scalars['String']['output']>;
  /**
   * The expiration month of the associated card as an integer, generally between 1
   * and 12. Can be outside that normally valid range on failed payments--we just
   * record this value as we received it.
   */
  expMonth?: Maybe<Scalars['Int']['output']>;
  /** The four-digit year of the card's expiration date. */
  expYear?: Maybe<Scalars['Int']['output']>;
  /**
   * Intended as a Square-assigned identifier, based
   * on the card number, to identify the card across multiple locations within a
   * single application.
   */
  fingerprint?: Maybe<Scalars['ID']['output']>;
  /** Unique ID for this card. Generated by Square. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The last 4 digits of the card number. */
  last4?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates whether the Card is prepaid or not.
   * The Card object includes this field only in response to Payments API calls.
   */
  prepaidType?: Maybe<CardPrepaidType>;
};

/**
 * Indicates a card's brand, such as `VISA` or `MASTERCARD`.
 * This enumeration is essentially the union of 3 separate protobuf enums:
 * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
 * This enum is what we present to external clients in our `/v2/payments` API.
 * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
 * This enum is what is used from a [`CardFilter`](https://prototype.sqprod.co/#/docs/squareup.payments.search.Filter.CardFilter#card_brand)
 * that is accepted by Spot's Search API. It includes 3 extra enum values not present on the `Card.Brand` filter
 * and also has an alternate name for 3 enum values.
 * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
 * This enum is what is used within a [`CardTransaction`'s](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.CardTransaction)
 * [`Tender`](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.Tender) on a
 * [`PaymentRecord`](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.PaymentRecord#card_transaction) within Spot.
 * It is just like `CardTenderType` (including the 3 extra values, and 3 renamed
 * values) but also includes 1 additional value.
 * Ideally we would only have a single source enum here. However, to handle the full dataset and all use cases
 * we need to cover, we have defined this as a union of these 3 enums. When an enum value exists on both the
 * public `Card.Brand` enum and the internal enums, but with a different name, we have chosen the public name.
 */
export enum CardBrand {
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Afterpay = 'AFTERPAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Alipay = 'ALIPAY',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  AuPay = 'AU_PAY',
  /**
   * Comes from the internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) or
   * internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enums.
   */
  Balance = 'BALANCE',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  CashApp = 'CASH_APP',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `UNIONPAY` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  ChinaUnionpay = 'CHINA_UNIONPAY',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Discover = 'DISCOVER',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  DiscoverDiners = 'DISCOVER_DINERS',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  DBarai = 'D_BARAI',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Ebt = 'EBT',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Eftpos = 'EFTPOS',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Felica = 'FELICA',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Interac = 'INTERAC',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Jcb = 'JCB',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `MASTER_CARD` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  Mastercard = 'MASTERCARD',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Merpay = 'MERPAY',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `UNKNOWN` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  OtherBrand = 'OTHER_BRAND',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Paypay = 'PAYPAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  RakutenPay = 'RAKUTEN_PAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  SquareAccountBalance = 'SQUARE_ACCOUNT_BALANCE',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  SquareCapitalCard = 'SQUARE_CAPITAL_CARD',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `SQUARE_GIFT_CARD_V2` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  SquareGiftCard = 'SQUARE_GIFT_CARD',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Visa = 'VISA',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  WechatPay = 'WECHAT_PAY'
}

/**
 * Input type used to specify filters on `CardBrand` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardBrandFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardBrandFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardBrandInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardBrandFilterInput>;
};

/**
 * Indicates a card's brand, such as `VISA` or `MASTERCARD`.
 *
 * This enumeration is essentially the union of 3 separate protobuf enums:
 *
 * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
 *   This enum is what we present to external clients in our `/v2/payments` API.
 * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
 *   This enum is what is used from a [`CardFilter`](https://prototype.sqprod.co/#/docs/squareup.payments.search.Filter.CardFilter#card_brand)
 *   that is accepted by Spot's Search API. It includes 3 extra enum values not present on the `Card.Brand` filter
 *   and also has an alternate name for 3 enum values.
 * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
 *   This enum is what is used within a [`CardTransaction`'s](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.CardTransaction)
 *   [`Tender`](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.Tender) on a
 *   [`PaymentRecord`](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.PaymentRecord#card_transaction) within Spot.
 *   It is just like `CardTenderType` (including the 3 extra values, and 3 renamed
 * values) but also includes 1 additional value.
 *
 * Ideally we would only have a single source enum here. However, to handle the full dataset and all use cases
 * we need to cover, we have defined this as a union of these 3 enums. When an enum value exists on both the
 * public `Card.Brand` enum and the internal enums, but with a different name, we have chosen the public name.
 */
export enum CardBrandInput {
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Afterpay = 'AFTERPAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Alipay = 'ALIPAY',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  AuPay = 'AU_PAY',
  /**
   * Comes from the internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) or
   * internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enums.
   */
  Balance = 'BALANCE',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  CashApp = 'CASH_APP',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `UNIONPAY` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  ChinaUnionpay = 'CHINA_UNIONPAY',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Discover = 'DISCOVER',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  DiscoverDiners = 'DISCOVER_DINERS',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  DBarai = 'D_BARAI',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Ebt = 'EBT',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Eftpos = 'EFTPOS',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Felica = 'FELICA',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Interac = 'INTERAC',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Jcb = 'JCB',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `MASTER_CARD` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  Mastercard = 'MASTERCARD',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Merpay = 'MERPAY',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `UNKNOWN` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  OtherBrand = 'OTHER_BRAND',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Paypay = 'PAYPAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  RakutenPay = 'RAKUTEN_PAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  SquareAccountBalance = 'SQUARE_ACCOUNT_BALANCE',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  SquareCapitalCard = 'SQUARE_CAPITAL_CARD',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   *
   * Also known as `SQUARE_GIFT_CARD_V2` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  SquareGiftCard = 'SQUARE_GIFT_CARD',
  /**
   * Present on all 3 of the source enums:
   *
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Visa = 'VISA',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   *
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  WechatPay = 'WECHAT_PAY'
}

/**
 * Input type used to specify filters on elements of a `[CardBrand]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardBrandListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardBrandListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardBrandListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardBrandListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<CardBrandInput>>;
};

/**
 * Input type used to specify filters on `[CardBrand]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardBrandListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardBrandListFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardBrandListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardBrandListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<CardBrandListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardBrandListFilterInput>;
};

/** Indicates the brand for a co-branded card. */
export enum CardCoBrand {
  Afterpay = 'AFTERPAY',
  Clearpay = 'CLEARPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `CardCoBrand` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardCoBrandFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardCoBrandFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardCoBrandFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardCoBrandFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardCoBrandInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardCoBrandFilterInput>;
};

/** Indicates the brand for a co-branded card. */
export enum CardCoBrandInput {
  Afterpay = 'AFTERPAY',
  Clearpay = 'CLEARPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `Card` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardFilterInput = {
  /**
   * Used to filter on the `cardBrand` field:
   *
   * > The card's brand.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  cardBrand?: InputMaybe<CardBrandFilterInput>;
  /**
   * Used to filter on the `cardType` field:
   *
   * > The type of the card.
   * > The Card object includes this field only in response to Payments API calls.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  cardType?: InputMaybe<CardTypeFilterInput>;
  /**
   * Used to filter on the `cardholderName` field:
   *
   * > The name of the cardholder.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  cardholderName?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `last4` field:
   *
   * > The last 4 digits of the card number.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  last4?: InputMaybe<StringFilterInput>;
};

/**
 * Represents the payment details of a card to be used for payments.These
 * details are determined by the payment token generated by Web Payments SDK.
 */
export type CardOnFile = {
  __typename?: 'CardOnFile';
  /** The billing address for this card. */
  billingAddress?: Maybe<Address>;
  /**
   * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API
   * returns this field.
   */
  bin?: Maybe<Scalars['String']['output']>;
  /** The card's brand. */
  cardBrand?: Maybe<CardBrand>;
  /**
   * The type of the card.
   * The Card object includes this field only in response to Payments API calls.
   */
  cardType?: Maybe<CardType>;
  /** The name of the cardholder. */
  cardholderName?: Maybe<Scalars['String']['output']>;
  /**
   * The card's co-brand if available. For example, an Afterpay virtual card would have a
   * co-brand of AFTERPAY.
   */
  coBrand?: Maybe<CardCoBrand>;
  /** The customer created using the Customers API to be associated with the card. */
  customer?: Maybe<Customer>;
  /** Indicates whether or not a card can be used for payments. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiration month of the associated card as an integer between 1 and 12. */
  expMonth?: Maybe<Scalars['Int']['output']>;
  /** The four-digit year of the card's expiration date. */
  expYear?: Maybe<Scalars['Int']['output']>;
  /**
   * Intended as a Square-assigned identifier, based
   * on the card number, to identify the card across multiple locations within a
   * single application.
   */
  fingerprint?: Maybe<Scalars['ID']['output']>;
  /** Unique ID for this card. Generated by Square. */
  id: Scalars['ID']['output'];
  /** The last 4 digits of the card number. */
  last4?: Maybe<Scalars['String']['output']>;
  /** The merchant associated with the card. */
  merchant?: Maybe<Merchant>;
  /** The ID of the merchant associated with the card. */
  merchantId: Scalars['ID']['output'];
  /**
   * Indicates whether the Card is prepaid or not.
   * The Card object includes this field only in response to Payments API calls.
   */
  prepaidType?: Maybe<CardPrepaidType>;
  /**
   * An optional user-defined reference ID that associates this card with
   * another entity in an external system. For example, a customer ID from an
   * external customer management system.
   */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /**
   * Current version number of the card. Increments with each card update. Requests to update an
   * existing Card object will be rejected unless the version in the request matches the current
   * version for the Card.
   */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * Contains information of CardOnFile query result.
 *
 * Permissions:PAYMENTS_READ
 */
export type CardOnFileConnection = {
  __typename?: 'CardOnFileConnection';
  /** CardOnFile query result. */
  nodes: Array<CardOnFile>;
  /** Provides information about the specific fetched page. This implements the PageInfo specification from the [Relay GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo). */
  pageInfo: PageInfo;
};

/** The filter to return CardOnFile. */
export type CardOnFileFilter = {
  /** Optionally limits the results to cards associated with the buyer supplied. Only a single value is accepted. */
  buyerId?: InputMaybe<BasicIdFilter>;
  /** Optionally Limits the results to cards associated with the customer supplied. By default, all cards owned by the merchant are returned. Only a single value is accepted. */
  customerId?: InputMaybe<BasicIdFilter>;
  /** Optional card on file ID to filter with. Only a single value is accepted. */
  id?: InputMaybe<BasicIdFilter>;
  /** Optionally includes disabled cards. By default, all enabled cards owned by the merchant are returned. */
  includeDisabled?: InputMaybe<BasicBooleanFilter>;
  /** The merchant ID for the card on files to query. Only a single value is accepted. */
  merchantId: BasicIdFilter;
  /** Optionally limits the results to cards associated with the reference_id supplied.  Only a single value is accepted. */
  referenceId?: InputMaybe<BasicIdFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Reflects the current status of a card payment. Contains only non-confidential information.
 */
export type CardPaymentDetails = {
  __typename?: 'CardPaymentDetails';
  /** For EMV payments, the cryptogram generated for the payment. */
  applicationCryptogram?: Maybe<Scalars['ID']['output']>;
  /** For EMV payments, the application ID identifies the EMV application used for the payment. */
  applicationIdentifier?: Maybe<Scalars['ID']['output']>;
  /** For EMV payments, the human-readable name of the EMV application used for the payment. */
  applicationName?: Maybe<Scalars['String']['output']>;
  /** The status code returned by the card issuer that describes the payment's authorization status. */
  authResultCode?: Maybe<Scalars['String']['output']>;
  /** The status code returned from the Address Verification System (AVS) check. */
  avsStatus?: Maybe<CardPaymentDetailsAvsStatus>;
  /** The credit card's non-confidential details. */
  card?: Maybe<Card>;
  /** The timeline for card payments. */
  cardPaymentTimeline?: Maybe<CardPaymentTimeline>;
  /** The status code returned from the Card Verification Value (CVV) check. */
  cvvStatus?: Maybe<CardPaymentDetailsCvvStatus>;
  /** The method used to enter the card's details for the payment. */
  entryMethod?: Maybe<CardPaymentDetailsEntryMethod>;
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /** Whether the card must be physically present for the payment to be refunded.  If set to `true`, the card must be present. */
  refundRequiresCardPresence?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The statement description sent to the card networks.
   * Note: The actual statement description varies and is likely to be truncated and appended with
   * additional information on a per issuer basis.
   */
  statementDescription?: Maybe<Scalars['String']['output']>;
  /** The card payment's current state. */
  status?: Maybe<CardPaymentDetailsStatus>;
  /** For EMV payments, the method used to verify the cardholder's identity. */
  verificationMethod?: Maybe<CardPaymentDetailsVerificationMethod>;
  /** For EMV payments, the results of the cardholder verification. */
  verificationResults?: Maybe<CardPaymentDetailsVerificationResult>;
};

/** Enumeration of possible status codes returned from an Address Verification System (AVS) check. */
export enum CardPaymentDetailsAvsStatus {
  AvsAccepted = 'AVS_ACCEPTED',
  AvsNotChecked = 'AVS_NOT_CHECKED',
  AvsRejected = 'AVS_REJECTED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsAvsStatus` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsAvsStatusFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPaymentDetailsAvsStatusFilterInput` input because
   * of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPaymentDetailsAvsStatusFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsAvsStatusFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsAvsStatusInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPaymentDetailsAvsStatusFilterInput>;
};

/** Enumeration of possible status codes returned from an Address Verification System (AVS) check. */
export enum CardPaymentDetailsAvsStatusInput {
  AvsAccepted = 'AVS_ACCEPTED',
  AvsNotChecked = 'AVS_NOT_CHECKED',
  AvsRejected = 'AVS_REJECTED'
}

/** Enumeration of possible status codes returned from a Card Verification Value (CVV) check. */
export enum CardPaymentDetailsCvvStatus {
  CvvAccepted = 'CVV_ACCEPTED',
  CvvNotChecked = 'CVV_NOT_CHECKED',
  CvvRejected = 'CVV_REJECTED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsCvvStatus` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsCvvStatusFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPaymentDetailsCvvStatusFilterInput` input because
   * of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPaymentDetailsCvvStatusFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsCvvStatusFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsCvvStatusInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPaymentDetailsCvvStatusFilterInput>;
};

/** Enumeration of possible status codes returned from a Card Verification Value (CVV) check. */
export enum CardPaymentDetailsCvvStatusInput {
  CvvAccepted = 'CVV_ACCEPTED',
  CvvNotChecked = 'CVV_NOT_CHECKED',
  CvvRejected = 'CVV_REJECTED'
}

/** The method used to enter a card's details for the payment. */
export enum CardPaymentDetailsEntryMethod {
  /** Card was tapped to a reader (eg NFC). */
  Contactless = 'CONTACTLESS',
  /** Card was dipped into an EMV reader, and went through the EMV payment flow. */
  Emv = 'EMV',
  /** Card was keyed in. A CNP payment. */
  Keyed = 'KEYED',
  /** Card data was pulled from an instrument store. */
  OnFile = 'ON_FILE',
  /** Card was swiped through a reader or stand. */
  Swiped = 'SWIPED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsEntryMethod` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsEntryMethodFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPaymentDetailsEntryMethodFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPaymentDetailsEntryMethodFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsEntryMethodFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsEntryMethodInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPaymentDetailsEntryMethodFilterInput>;
};

/** The method used to enter a card's details for the payment. */
export enum CardPaymentDetailsEntryMethodInput {
  /** Card was tapped to a reader (eg NFC). */
  Contactless = 'CONTACTLESS',
  /** Card was dipped into an EMV reader, and went through the EMV payment flow. */
  Emv = 'EMV',
  /** Card was keyed in. A CNP payment. */
  Keyed = 'KEYED',
  /** Card data was pulled from an instrument store. */
  OnFile = 'ON_FILE',
  /** Card was swiped through a reader or stand. */
  Swiped = 'SWIPED'
}

/**
 * Input type used to specify filters on `CardPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `card` field:
   *
   * > The credit card's non-confidential details.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  card?: InputMaybe<CardFilterInput>;
};

/** A card payment's current state. */
export enum CardPaymentDetailsStatus {
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Voided = 'VOIDED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsStatus` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsStatusFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPaymentDetailsStatusFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPaymentDetailsStatusFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsStatusFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsStatusInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPaymentDetailsStatusFilterInput>;
};

/** A card payment's current state. */
export enum CardPaymentDetailsStatusInput {
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Voided = 'VOIDED'
}

/** Enumeration of possible methods used for EMV paymentsto verify the cardholder's identity. */
export enum CardPaymentDetailsVerificationMethod {
  None = 'NONE',
  OnDevice = 'ON_DEVICE',
  Pin = 'PIN',
  PinAndSignature = 'PIN_AND_SIGNATURE',
  Signature = 'SIGNATURE'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsVerificationMethod` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsVerificationMethodFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPaymentDetailsVerificationMethodFilterInput`
   * input because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPaymentDetailsVerificationMethodFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsVerificationMethodFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsVerificationMethodInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPaymentDetailsVerificationMethodFilterInput>;
};

/** Enumeration of possible methods used for EMV paymentsto verify the cardholder's identity. */
export enum CardPaymentDetailsVerificationMethodInput {
  None = 'NONE',
  OnDevice = 'ON_DEVICE',
  Pin = 'PIN',
  PinAndSignature = 'PIN_AND_SIGNATURE',
  Signature = 'SIGNATURE'
}

/** Enumeration of possible card verification results for EMV payments. */
export enum CardPaymentDetailsVerificationResult {
  Failure = 'FAILURE',
  Success = 'SUCCESS',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsVerificationResult` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsVerificationResultFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPaymentDetailsVerificationResultFilterInput`
   * input because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPaymentDetailsVerificationResultFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsVerificationResultFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsVerificationResultInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPaymentDetailsVerificationResultFilterInput>;
};

/** Enumeration of possible card verification results for EMV payments. */
export enum CardPaymentDetailsVerificationResultInput {
  Failure = 'FAILURE',
  Success = 'SUCCESS',
  Unknown = 'UNKNOWN'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * The timeline for card payments.
 */
export type CardPaymentTimeline = {
  __typename?: 'CardPaymentTimeline';
  /** The timestamp when the payment was authorized, in RFC 3339 format. */
  authorizedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp when the payment was captured, in RFC 3339 format. */
  capturedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp when the payment was voided, in RFC 3339 format. */
  voidedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Input type used to specify filters on `CardPaymentTimeline` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPaymentTimelineFilterInput = {
  /**
   * Used to filter on the `authorizedAt` field:
   *
   * > The timestamp when the payment was authorized, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  authorizedAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `capturedAt` field:
   *
   * > The timestamp when the payment was captured, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  capturedAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `voidedAt` field:
   *
   * > The timestamp when the payment was voided, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  voidedAt?: InputMaybe<DateTimeFilter>;
};

/** Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`. */
export enum CardPrepaidType {
  NotPrepaid = 'NOT_PREPAID',
  Prepaid = 'PREPAID',
  UnknownPrepaidType = 'UNKNOWN_PREPAID_TYPE'
}

/**
 * Input type used to specify filters on `CardPrepaidType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardPrepaidTypeFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CardPrepaidTypeFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CardPrepaidTypeFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardPrepaidTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPrepaidTypeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardPrepaidTypeFilterInput>;
};

/** Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`. */
export enum CardPrepaidTypeInput {
  NotPrepaid = 'NOT_PREPAID',
  Prepaid = 'PREPAID',
  UnknownPrepaidType = 'UNKNOWN_PREPAID_TYPE'
}

/** Indicates a card's type, such as `CREDIT` or `DEBIT`. */
export enum CardType {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  UnknownCardType = 'UNKNOWN_CARD_TYPE'
}

/**
 * Input type used to specify filters on `CardType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CardTypeFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CardTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardTypeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CardTypeFilterInput>;
};

/** Indicates a card's type, such as `CREDIT` or `DEBIT`. */
export enum CardTypeInput {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  UnknownCardType = 'UNKNOWN_CARD_TYPE'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about `WALLET` type payments with the `brand` of `CASH_APP`.
 */
export type CashAppPaymentDetails = {
  __typename?: 'CashAppPaymentDetails';
  /** $Cashtag of the Cash App account holder. */
  buyerCashtag?: Maybe<Scalars['String']['output']>;
  /** The country of the Cash App account holder. */
  buyerCountryCode?: Maybe<Country>;
  /** The name of the Cash App account holder. */
  buyerFullName?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `CashAppPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CashAppPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `buyerCashtag` field:
   *
   * > $Cashtag of the Cash App account holder.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  buyerCashtag?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `buyerCountryCode` field:
   *
   * > The country of the Cash App account holder.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  buyerCountryCode?: InputMaybe<CountryFilterInput>;
  /**
   * Used to filter on the `buyerFullName` field:
   *
   * > The name of the Cash App account holder.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  buyerFullName?: InputMaybe<StringFilterInput>;
};

/** Permissions: CASH_DRAWER_READ */
export type CashDrawerDevice = {
  __typename?: 'CashDrawerDevice';
  /** The device Square-issued ID */
  id: Scalars['ID']['output'];
  /** The device merchant-specified name. */
  name?: Maybe<Scalars['String']['output']>;
};

/**
 * The types of events on a CashDrawerShift.Each event type represents an employee action on the actual cash drawer
 * represented by a CashDrawerShift.
 */
export enum CashDrawerEventType {
  /**
   * Triggered when a split tender bill is cancelled after cash has been
   * tendered.
   * A CASH_TENDER_CANCELLED_PAYMENT should have a corresponding CASH_TENDER_PAYMENT.
   * A CashDrawerEvent of this type must not have a negative amount.
   */
  CashTenderCancelledPayment = 'CASH_TENDER_CANCELLED_PAYMENT',
  /**
   * Triggered when a cash tender payment occurs on a cash drawer.
   * A CashDrawerEvent of this type can must not have a negative amount.
   */
  CashTenderPayment = 'CASH_TENDER_PAYMENT',
  /**
   * Triggered when a cash tender refund occurs.
   * A CashDrawerEvent of this type must not have a negative amount.
   */
  CashTenderRefund = 'CASH_TENDER_REFUND',
  /**
   * Triggered when a no sale occurs on a cash drawer.
   * A CashDrawerEvent of this type must have a zero money amount.
   */
  NoSale = 'NO_SALE',
  /**
   * Triggered when a split tender bill is cancelled after a non-cash tender
   * has been tendered. An OTHER_TENDER_CANCELLED_PAYMENT should have a corresponding
   * OTHER_TENDER_PAYMENT. A CashDrawerEvent of this type must have a zero money
   * amount.
   */
  OtherTenderCancelledPayment = 'OTHER_TENDER_CANCELLED_PAYMENT',
  /**
   * Triggered when a check, gift card, or other non-cash payment occurs
   * on a cash drawer.
   * A CashDrawerEvent of this type must have a zero money amount.
   */
  OtherTenderPayment = 'OTHER_TENDER_PAYMENT',
  /**
   * Triggered when an other tender refund occurs.
   * A CashDrawerEvent of this type must have a zero money amount.
   */
  OtherTenderRefund = 'OTHER_TENDER_REFUND',
  /**
   * Triggered when money unrelated to a payment is added to the cash drawer.
   * For example, an employee adds coins to the drawer.
   * A CashDrawerEvent of this type must not have a negative amount.
   */
  PaidIn = 'PAID_IN',
  /**
   * Triggered when money is removed from the drawer for other reasons
   * than making change.
   * For example, an employee pays a delivery person with cash from the cash drawer.
   * A CashDrawerEvent of this type must not have a negative amount.
   */
  PaidOut = 'PAID_OUT'
}

/**
 * This model gives the details of a cash drawer shift.The cash_payment_money, cash_refund_money, cash_paid_in_money,
 * and cash_paid_out_money fields are all computed by summing their respective
 * event types.
 * Permissions: CASH_DRAWER_READ
 */
export type CashDrawerShift = {
  __typename?: 'CashDrawerShift';
  /**
   * The amount of money added to the cash drawer for reasons other than cash
   * payments. It is computed by summing the events of type PAID_IN. The amount is
   * always greater than or equal to zero.
   */
  cashPaidInMoney?: Maybe<Money>;
  /**
   * The amount of money removed from the cash drawer for reasons other than
   * cash refunds. It is computed by summing the events of type PAID_OUT. The amount
   * is always greater than or equal to zero.
   */
  cashPaidOutMoney?: Maybe<Money>;
  /**
   * The amount of money added to the cash drawer from cash payments.
   * This is computed by summing all events with the types CASH_TENDER_PAYMENT and
   * CASH_TENDER_CANCELED_PAYMENT. The amount is always greater than or equal to
   * zero.
   */
  cashPaymentMoney?: Maybe<Money>;
  /**
   * The amount of money removed from the cash drawer from cash refunds.
   * It is computed by summing the events of type CASH_TENDER_REFUND. The amount
   * is always greater than or equal to zero.
   */
  cashRefundsMoney?: Maybe<Money>;
  /** The time when the shift was closed, in ISO 8601 format. */
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The amount of money found in the cash drawer at the end of the shift
   * by an auditing employee. The amount should be positive.
   */
  closedCashMoney?: Maybe<Money>;
  /**
   * The ID of the team member that closed the cash drawer shift by auditing
   * the cash drawer contents.
   */
  closingTeamMember?: Maybe<TeamMember>;
  /** The shift start time in RFC 3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The free-form text description of a cash drawer by an employee. */
  description?: Maybe<Scalars['String']['output']>;
  /** The device running Square Point of Sale that was connected to the cash drawer. */
  device?: Maybe<CashDrawerDevice>;
  /** The time when the shift ended, in ISO 8601 format. */
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the team member that ended the cash drawer shift. */
  endingTeamMember?: Maybe<TeamMember>;
  /**
   * The amount of money that should be in the cash drawer at the end of the
   * shift, based on the shift's other money amounts.
   * This can be negative if employees have not correctly recorded all the events
   * on the cash drawer.
   * cash_paid_out_money is a summation of amounts from cash_payment_money (zero
   * or positive), cash_refunds_money (zero or negative), cash_paid_in_money (zero
   * or positive), and cash_paid_out_money (zero or negative) event types.
   */
  expectedCashMoney?: Maybe<Money>;
  /** The shift unique ID. */
  id: Scalars['ID']['output'];
  /** The ID of the location the cash drawer shift belongs to. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The time when the shift began, in ISO 8601 format. */
  openedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The amount of money in the cash drawer at the start of the shift.
   * The amount must be greater than or equal to zero.
   */
  openedCashMoney?: Maybe<Money>;
  /** The ID of the team member that started the cash drawer shift. */
  openingTeamMember?: Maybe<TeamMember>;
  /** The shift current state. */
  state?: Maybe<CashDrawerShiftState>;
  /**
   * The IDs of all team members that were logged into Square Point of Sale at any
   * point while the cash drawer shift was open.
   */
  teamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  /** The shift updated at time in RFC 3339 format. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * A list of CashDrawerShifts.
 *
 * Permissions: CASH_DRAWER_READ
 */
export type CashDrawerShiftConnection = {
  __typename?: 'CashDrawerShiftConnection';
  /** List of break types */
  nodes: Array<CashDrawerShift>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Permissions: CASH_DRAWER_READ */
export type CashDrawerShiftEvent = {
  __typename?: 'CashDrawerShiftEvent';
  /** The event time in RFC 3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * An optional description of the event, entered by the employee that
   * created the event.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The amount of money that was added to or removed from the cash drawer
   * in the event. The amount can be positive (for added money)
   * or zero (for other tender type payments). The addition or removal of money can be determined by
   * by the event type.
   */
  eventMoney?: Maybe<Money>;
  /** The type of cash drawer shift event. */
  eventType?: Maybe<CashDrawerEventType>;
  /** The unique ID of the event. */
  id: Scalars['ID']['output'];
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The ID of the team member that created the event. */
  teamMember?: Maybe<TeamMember>;
};

/**
 * A list of CashDrawerShiftEvents.
 *
 * Permissions: CASH_DRAWER_READ
 */
export type CashDrawerShiftEventConnection = {
  __typename?: 'CashDrawerShiftEventConnection';
  /** List of break types */
  nodes: Array<CashDrawerShiftEvent>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Defines a filter used in a search for `CashDrawerShiftEvent` records. */
export type CashDrawerShiftEventFilter = {
  /** Fetch shifts for the specified location. */
  locationId?: InputMaybe<BasicIdFilter>;
  /** Fetch shifts for the specified merchant. */
  merchantId: BasicIdFilter;
  /** Fetch events for the shift ids. */
  shiftId?: InputMaybe<BasicIdFilter>;
};

/** Defines a filter used in a search for `CashDrawerShift` records. */
export type CashDrawerShiftFilter = {
  /** Fetch shifts for the specified ids. */
  id?: InputMaybe<BasicIdFilter>;
  /** Fetch shifts for the specified location. */
  locationId?: InputMaybe<BasicIdFilter>;
  /** Fetch shifts for the specified merchant. */
  merchantId: BasicIdFilter;
  /** The openedAt time range in ISO 8601 format. */
  openedAt?: InputMaybe<TimeRangeFilter>;
};

/** The current state of a cash drawer shift. */
export enum CashDrawerShiftState {
  /**
   * An ended cash drawer shift that is closed with a completed employee
   * content audit and recorded result.
   */
  Closed = 'CLOSED',
  /** A cash drawer shift that is ended but has not yet had an employee content audit. */
  Ended = 'ENDED',
  /** An open cash drawer shift. */
  Open = 'OPEN'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Stores details about a cash payment. Contains only non-confidential information. For more information, see
 * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
 */
export type CashPaymentDetails = {
  __typename?: 'CashPaymentDetails';
  /** The amount and currency of the money supplied by the buyer. */
  buyerSuppliedMoney?: Maybe<Money>;
  /**
   * The amount of change due back to the buyer.
   * This read-only field is calculated from the `amountMoney` and `buyerSuppliedMoney` fields.
   */
  changeBackMoney?: Maybe<Money>;
};

/**
 * Input type used to specify filters on `CashPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CashPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `buyerSuppliedMoney` field:
   *
   * > The amount and currency of the money supplied by the buyer.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  buyerSuppliedMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `changeBackMoney` field:
   *
   * > The amount of change due back to the buyer.
   * > This read-only field is calculated from the `amountMoney` and `buyerSuppliedMoney` fields.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  changeBackMoney?: InputMaybe<MoneyFilterInput>;
};

/** CatalogAttributeBasicStringFilter is used for filtering a query with a string attribute */
export type CatalogAttributeBasicStringFilter = {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: Scalars['String']['input'];
  /** The desired values of the search attribute. Matching of the attribute values is exact and case insensitive. A maximum of 250 values may be searched in a request. */
  value: Scalars['String']['input'];
};

/** CatalogAttributeRangeFilter is used for filtering a query with an int attribute */
export type CatalogAttributeRangeFilter = {
  /** The name of the attribute to be searched. */
  attributeName: Scalars['String']['input'];
  /** The desired maximum value for the search attribute (inclusive). */
  max?: InputMaybe<Scalars['Int']['input']>;
  /** The desired minimum value for the search attribute (inclusive). */
  min?: InputMaybe<Scalars['Int']['input']>;
};

/** CatalogAttributeSort is used for filtering the result in an item query */
export type CatalogAttributeSort = {
  /** The name of the attribute used to sort the result. */
  attributeName: Scalars['String']['input'];
  /**
   * The first attribute value to be returned by the query. Ascending sorts will return only objects with this value or greater,
   * while descending sorts will return only objects with this value or less. If unset,
   * start at the beginning (for ascending sorts) or end (for descending sorts).
   */
  initialAttributeValue?: InputMaybe<Scalars['String']['input']>;
  /** ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
};

/** CatalogAttributeStringSetFilter is used for filtering a query with a string set or array attribute */
export type CatalogAttributeStringSetFilter = {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: Scalars['String']['input'];
  /** The desired values of the search attribute. Matching of the attribute values is exact and case insensitive. A maximum of 250 values may be searched in a request. */
  value: Array<Scalars['String']['input']>;
};

/**
 * Represents a time period of availability.
 * Permissions: ITEMS_READ
 */
export type CatalogAvailabilityPeriod = CatalogObject & {
  __typename?: 'CatalogAvailabilityPeriod';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** The day of the week for this availability period. */
  dayOfWeek?: Maybe<DayOfWeek>;
  /**
   * The end time of an availability period, specified in local time using partial-time
   * RFC 3339 format. For example, `21:00:00` for a period ending at 9:00 in the evening.
   * Note that the seconds value is always :00, but it is appended for conformance to the RFC.
   */
  endLocalTime?: Maybe<Scalars['String']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The start time of an availability period, specified in local time using partial-time
   * RFC 3339 format. For example, `8:30:00` for a period starting at 8:30 in the morning.
   * Note that the seconds value is always :00, but it is appended for conformance to the RFC.
   */
  startLocalTime?: Maybe<Scalars['String']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A category to which a CatalogItem instance belongs.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCategory = CatalogObject & {
  __typename?: 'CatalogCategory';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The IDs of the `CatalogAvailabilityPeriod` objects associated with the category. */
  availabilityPeriods?: Maybe<Array<Maybe<CatalogAvailabilityPeriod>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The type of the category. */
  categoryType?: Maybe<CatalogCategoryType>;
  /** A list of IDs representing channels, such as a Square Online site, where the category can be made visible. */
  channels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** The SEO data for a seller's Square Online store. */
  ecomSeoData?: Maybe<CatalogEcomSeoData>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /**
   * The IDs of images associated with this `CatalogCategory` instance.
   * Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications.
   */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether a category is a top level category, which does not have any parent_category. */
  isTopLevel?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the category is visible (`true`) or hidden (`false`) on all of the seller's Square Online sites. */
  onlineVisibility?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the parent category of this category instance. */
  parentCategory?: Maybe<CatalogObjectCategory>;
  /**
   * The path from the category to its root category. The first node of the path is the parent of the category
   * and the last is the root category. The path is empty if the category is a root category.
   */
  pathToRoot?: Maybe<Array<Maybe<CategoryPathToRootNode>>>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The top-level category in a category hierarchy. */
  rootCategory?: Maybe<CatalogCategory>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Indicates the type of a category. */
export enum CatalogCategoryType {
  /** Kitchen categories are used by KDS (Kitchen Display System) to route items to specific clients */
  KitchenCategory = 'KITCHEN_CATEGORY',
  /** The menu category. */
  MenuCategory = 'MENU_CATEGORY',
  /** The regular category. */
  RegularCategory = 'REGULAR_CATEGORY'
}

/**
 * Provides information when CatalogCustomAttributeValue.value is Boolean.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeBoolean = {
  __typename?: 'CatalogCustomAttributeBoolean';
  /** A true or false value. */
  value?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Contains information defining a custom attribute.Custom attributes are
 * intended to store additional information about a catalog object or to associate a
 * catalog object with an entity in another system. Do not use custom attributes
 * to store any sensitive information (personally identifiable information, card details, etc.).
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
 * Permissions: ITEMS_READ
 */
export type CatalogCustomAttributeDefinition = CatalogObject & {
  __typename?: 'CatalogCustomAttributeDefinition';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * The set of `CatalogObject` types that this custom atttribute may be applied to.
   * Currently, only `ITEM`, `ITEM_VARIATION`, and `MODIFIER` are allowed. At least one type must be included.
   */
  allowedObjectTypes?: Maybe<Array<Maybe<CatalogObjectType>>>;
  /**
   * The visibility of a custom attribute to applications other than the application
   * that created the attribute.
   */
  appVisibility?: Maybe<CatalogCustomAttributeDefinitionAppVisibility>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** Configuration for CatalogCustomAttributeDefinition */
  config?: Maybe<CatalogCustomAttributeDefinitionConfig>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * Seller-oriented description of the meaning of this Custom Attribute,
   * any constraints that the seller should observe, etc. May be displayed as a tooltip in Square UIs.
   */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the desired custom attribute key that can be used to access
   * the custom attribute value on catalog objects. Cannot be modified after the
   * custom attribute definition has been created.
   * Must be between 1 and 60 characters, and may only contain the characters `[a-zA-Z0-9_-]`.
   */
  key?: Maybe<Scalars['String']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   *  The name of this definition for API and seller-facing UI purposes.
   * The name must be unique within the (merchant, application) pair. Required.
   * May not be empty and may not exceed 255 characters. Can be modified after creation.
   */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The visibility of a custom attribute in seller-facing UIs (including Square Point
   * of Sale applications and Square Dashboard). May be modified.
   */
  sellerVisibility?: Maybe<CatalogCustomAttributeDefinitionSellerVisibility>;
  /**
   * __Read only.__ Contains information about the application that
   * created this custom attribute definition.
   */
  sourceApplication?: Maybe<SourceApplication>;
  /**
   * The type of this custom attribute. Cannot be modified after creation.
   * Required.
   */
  type?: Maybe<CatalogCustomAttributeType>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The number of custom attributes that reference this
   * custom attribute definition. Set by the server in response to a ListCatalog
   * request with `include_counts` set to `true`.  If the actual count is greater
   * than 100, `custom_attribute_usage_count` will be set to `100`.
   */
  usageCount?: Maybe<Scalars['Int']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Defines the visibility of a custom attribute to applications other than their
 * creating application.
 */
export enum CatalogCustomAttributeDefinitionAppVisibility {
  /** Other applications cannot read this custom attribute. */
  AppVisibilityHidden = 'APP_VISIBILITY_HIDDEN',
  /**
   * Other applications can read this custom attribute definition and
   * values.
   */
  AppVisibilityReadOnly = 'APP_VISIBILITY_READ_ONLY',
  /**
   * Other applications can read and write custom attribute values on objects.
   * They can read but cannot edit the custom attribute definition.
   */
  AppVisibilityReadWriteValues = 'APP_VISIBILITY_READ_WRITE_VALUES'
}

/** Defines the config for CatalogCustomAttributeDefinition. */
export type CatalogCustomAttributeDefinitionConfig = CatalogCustomAttributeNumberConfig | CatalogCustomAttributeSelectionConfig | CatalogCustomAttributeStringConfig;

/**
 * Defines the visibility of a custom attribute to sellers in Square
 * client applications, Square APIs or in Square UIs (including Square Point
 * of Sale applications and Square Dashboard).
 */
export enum CatalogCustomAttributeDefinitionSellerVisibility {
  /**
   * Sellers cannot read this custom attribute in Square client
   * applications or Square APIs.
   */
  SellerVisibilityHidden = 'SELLER_VISIBILITY_HIDDEN',
  /**
   * Sellers can read and write this custom attribute value in catalog objects,
   * but cannot edit the custom attribute definition.
   */
  SellerVisibilityReadWriteValues = 'SELLER_VISIBILITY_READ_WRITE_VALUES'
}

/** CatalogCustomAttributeFilter allows custom attribute query expressions for the item query */
export type CatalogCustomAttributeFilter = {
  /**
   * A query expression to filter items or item variations by matching their custom attributes' boolean_value property
   * values against the specified Boolean expression. Exactly one of string_filter, number_filter, selection_uids_filter,
   * or bool_filter must be specified.
   */
  bool?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * custom_attribute_definition_id property value against the the specified id. Exactly one of custom_attribute_definition_id or key must be specified.
   */
  id: Scalars['ID']['input'];
  /**
   * A query expression to filter items or item variations by matching their custom attributes' key property value against
   * the specified key. Exactly one of custom_attribute_definition_id or key must be specified.
   */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The upper bound of the number range. At least one of min or max must be specified. If unspecified, the results will have no maximum value. */
  max?: InputMaybe<Scalars['Decimal']['input']>;
  /** The lower bound of the number range. At least one of min or max must be specified. If unspecified, the results will have no minimum value. */
  min?: InputMaybe<Scalars['Decimal']['input']>;
  /**
   * A query expression to filter items or item variations by matching their custom attributes' string_value property
   * value against the specified text. Exactly one of string_filter, number_filter, selection_uids_filter, or bool_filter
   * must be specified.
   */
  string?: InputMaybe<Scalars['String']['input']>;
  /**
   * A query expression to filter items or item variations by matching their custom attributes' selection_uid_values
   * values against the specified selection uids. Exactly one of string_filter, number_filter, selection_uids_filter, or bool_filter must be specified.
   */
  uids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/**
 * Provides information when CatalogCustomAttributeValue.value is Number.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeNumber = {
  __typename?: 'CatalogCustomAttributeNumber';
  /** Contains a string representation of a decimal number, using a . as the decimal separator. */
  value?: Maybe<Scalars['Decimal']['output']>;
};

/** Permissions: ITEMS_READ */
export type CatalogCustomAttributeNumberConfig = {
  __typename?: 'CatalogCustomAttributeNumberConfig';
  /**
   * An integer between 0 and 5 that represents the maximum number of
   * positions allowed after the decimal in number custom attribute values
   * For example:
   *
   * - if the precision is 0, the quantity can be 1, 2, 3, etc.
   * - if the precision is 1, the quantity can be 0.1, 0.2, etc.
   * - if the precision is 2, the quantity can be 0.01, 0.12, etc.
   *
   * Default: 5
   */
  precision?: Maybe<Scalars['Int']['output']>;
};

/**
 * Provides information when CatalogCustomAttributeValue.value is Selection.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeSelection = {
  __typename?: 'CatalogCustomAttributeSelection';
  /** One or more choices from allowed_selections. */
  uids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

/**
 * Configuration associated with `SELECTION`-type custom attribute definitions.
 * Permissions: ITEMS_READ
 */
export type CatalogCustomAttributeSelectionConfig = {
  __typename?: 'CatalogCustomAttributeSelectionConfig';
  /**
   * The set of valid `CatalogCustomAttributeSelections`. Up to a maximum of 100
   * selections can be defined. Can be modified.
   */
  allowedSelections?: Maybe<Array<Maybe<CatalogCustomAttributeSelectionDefinition>>>;
  /**
   * The maximum number of selections that can be set. The maximum value for this
   * attribute is 100. The default value is 1. The value can be modified, but changing the value will not
   * affect existing custom attribute values on objects. Clients need to
   * handle custom attributes with more selected values than allowed by this limit.
   */
  maxAllowedSelections?: Maybe<Scalars['Int']['output']>;
};

/**
 * A named selection for this `SELECTION`-type custom attribute definition.
 * Permissions: ITEMS_READ
 */
export type CatalogCustomAttributeSelectionDefinition = {
  __typename?: 'CatalogCustomAttributeSelectionDefinition';
  /** Selection name, unique within `allowed_selections`. */
  name?: Maybe<Scalars['String']['output']>;
  /** Unique ID set by Square. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Provides information when CatalogCustomAttributeValue.value is String.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeString = {
  __typename?: 'CatalogCustomAttributeString';
  /** The string value of the custom attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Configuration associated with Custom Attribute Definitions of type `STRING`.
 * Permissions: ITEMS_READ
 */
export type CatalogCustomAttributeStringConfig = {
  __typename?: 'CatalogCustomAttributeStringConfig';
  /**
   * If true, each Custom Attribute instance associated with this Custom Attribute
   * Definition must have a unique value within the seller's catalog. For
   * example, this may be used for a value like a SKU that should not be
   * duplicated within a seller's catalog. May not be modified after the
   * definition has been created.
   */
  enforceUniqueness?: Maybe<Scalars['Boolean']['output']>;
};

/** Defines the possible types for a custom attribute. */
export enum CatalogCustomAttributeType {
  /** A `true` or `false` value. */
  Boolean = 'BOOLEAN',
  /** A decimal string representation of a number. Can support up to 5 digits after the decimal point. */
  Number = 'NUMBER',
  /** One or more choices from `allowed_selections`. */
  Selection = 'SELECTION',
  /** A free-form string containing up to 255 characters. */
  String = 'STRING'
}

/**
 * An instance of a custom attribute.
 * Custom attributes can be defined and added to ITEM and ITEM_VARIATION type catalog objects.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeValue = {
  __typename?: 'CatalogCustomAttributeValue';
  /** Contains information defining a custom attribute. */
  definition?: Maybe<CatalogCustomAttributeDefinition>;
  /** Provides information for CatalogCustomAttributeValue.value */
  value?: Maybe<CatalogCustomAttributeValueUnion>;
};

/** Provides information for CatalogCustomAttributeValue.value. */
export type CatalogCustomAttributeValueUnion = CatalogCustomAttributeBoolean | CatalogCustomAttributeNumber | CatalogCustomAttributeSelection | CatalogCustomAttributeString;

/**
 * A discount applicable to items.
 * Permissions: ITEMS_READ
 */
export type CatalogDiscount = CatalogObject & {
  __typename?: 'CatalogDiscount';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * The amount of the discount. Specify an amount of `0` if `discount_type` is `VARIABLE_AMOUNT`.
   *
   * Do not use this field for percentage-based or variable discounts.
   */
  amountMoney?: Maybe<Money>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale. */
  discountType?: Maybe<CatalogDiscountType>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: Maybe<Scalars['HexColor']['output']>;
  /**
   * For a percentage discount, the maximum absolute value of the discount. For example, if a
   * 50% discount has a `maximum_amount_money` of $20, a $100 purchase will yield a $20 discount,
   * not a $50 discount.
   */
  maximumAmountMoney?: Maybe<Money>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * Indicates whether this discount should reduce the price used to calculate tax.
   *
   * Most discounts should use `MODIFY_TAX_BASIS`. However, in some circumstances taxes must
   * be calculated based on an item's price, ignoring a particular discount. For example,
   * in many US jurisdictions, a manufacturer coupon or instant rebate reduces the price a
   * customer pays but does not reduce the sale price used to calculate how much sales tax is
   * due. In this case, the discount representing that manufacturer coupon should have
   * `DO_NOT_MODIFY_TAX_BASIS` for this field.
   *
   * If you are unsure whether you need to use this field, consult your tax professional.
   */
  modifyTaxBasis?: Maybe<CatalogDiscountModifyTaxBasis>;
  /** The discount name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
   * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type`
   * is `VARIABLE_PERCENTAGE`.
   *
   * Do not use this field for amount-based or variable discounts.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates whether a mobile staff member needs to enter their PIN to apply the
   * discount to a payment in the Square Point of Sale app.
   */
  pinRequired?: Maybe<Scalars['Boolean']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

export enum CatalogDiscountModifyTaxBasis {
  /** Application of the discount will not modify the tax basis. */
  DoNotModifyTaxBasis = 'DO_NOT_MODIFY_TAX_BASIS',
  /** Application of the discount will modify the tax basis. */
  ModifyTaxBasis = 'MODIFY_TAX_BASIS'
}

/** How to apply a CatalogDiscount to a CatalogItem. */
export enum CatalogDiscountType {
  /** Apply the discount as a fixed amount (e.g., $1.00) off the item price. */
  FixedAmount = 'FIXED_AMOUNT',
  /** Apply the discount as a fixed percentage (e.g., 5%) off the item price. */
  FixedPercentage = 'FIXED_PERCENTAGE',
  /** Apply the discount as a variable amount off the item price. The amount will be specified at the time of sale. */
  VariableAmount = 'VARIABLE_AMOUNT',
  /** Apply the discount as a variable percentage off the item price. The percentage will be specified at the time of sale. */
  VariablePercentage = 'VARIABLE_PERCENTAGE'
}

/**
 * SEO data for for a seller's Square Online store.
 * Permissions: ITEMS_READ
 */
export type CatalogEcomSeoData = {
  __typename?: 'CatalogEcomSeoData';
  /** The SEO description used for the Square Online store. */
  pageDescription?: Maybe<Scalars['String']['output']>;
  /** The SEO title used for the Square Online store. */
  pageTitle?: Maybe<Scalars['String']['output']>;
  /** The SEO permalink used for the Square Online store. */
  permalink?: Maybe<Scalars['String']['output']>;
};

/**
 * An image file to use in Square catalogs.It can be associated with
 * `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, and `CatalogModifierList` objects.
 * Only the images on items and item variations are exposed in Dashboard.
 * Only the first image on an item is displayed in Square Point of Sale (SPOS).
 * Images on items and variations are displayed through Square Online Store.
 * Images on other object types are for use by 3rd party application developers.
 * Permissions: ITEMS_READ
 */
export type CatalogImage = CatalogObject & {
  __typename?: 'CatalogImage';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * A caption that describes what is shown in the image. Displayed in the
   * Square Online Store. This is a searchable attribute for use in applicable query filters
   * using the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects).
   */
  caption?: Maybe<Scalars['String']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The internal name to identify this image in calls to the Square API.
   * This is a searchable attribute for use in applicable query filters
   * using the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects).
   * It is not unique and should not be shown in a buyer facing context.
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The immutable order ID for this image object created by the Photo Studio service in Square Online Store. */
  photoStudioOrderId?: Maybe<Scalars['ID']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The URL of this image, generated by Square after an image is uploaded
   * using the [CreateCatalogImage](api-endpoint:Catalog-CreateCatalogImage) endpoint.
   * To modify the image, use the UpdateCatalogImage endpoint. Do not change the URL field.
   */
  url?: Maybe<Scalars['Url']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * An CatalogObject instance of the ITEM type, also referred to as an item, in the catalog.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItem = CatalogObject & {
  __typename?: 'CatalogItem';
  /**
   * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.
   * This attribute is searchable, and its value length is of Unicode code points.
   */
  abbreviation?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. */
  availableElectronically?: Maybe<Scalars['Boolean']['output']>;
  /** If `true`, the item can be added to pickup orders from the merchant's online store. */
  availableForPickup?: Maybe<Scalars['Boolean']['output']>;
  /** If `true`, the item can be added to shipping orders from the merchant's online store. */
  availableOnline?: Maybe<Scalars['Boolean']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The list of categories. */
  categories?: Maybe<Array<Maybe<CatalogObjectCategory>>>;
  /**
   * The ID of the item's category, if any. Deprecated since 2023-12-13. Use `CatalogItem.categories`, instead.
   * @deprecated Will be removed on 2024-04-17. Use `categories` instead.
   */
  category?: Maybe<CatalogCategory>;
  /** A list of IDs representing channels, such as a Square Online site, where the item can be made visible or available. */
  channels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   *
   * Deprecated at 2022-07-20, this field is planned to retire in 6 months. You should migrate to use `description_html` to set the description
   * of the CatalogItem instance.  The `description` and `description_html` field values are kept in sync. If you try to
   * set the both fields, the `description_html` text value overwrites the `description` value. Updates in one field are also reflected in the other,
   * except for when you use an early version before Square API 2022-07-20 and `description_html` is set to blank, setting the `description` value to null
   * does not nullify `description_html`.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The item's description as expressed in valid HTML elements. The length of this field value, including those of HTML tags,
   * is of Unicode points. With application query filters, the text values of the HTML elements and attributes are searchable. Invalid or
   * unsupported HTML elements or attributes are ignored.
   *
   * Supported HTML elements include:
   * - `a`: Link. Supports linking to website URLs, email address, and telephone numbers.
   * - `b`, `strong`:  Bold text
   * - `br`: Line break
   * - `code`: Computer code
   * - `div`: Section
   * - `h1-h6`: Headings
   * - `i`, `em`: Italics
   * - `li`: List element
   * - `ol`: Numbered list
   * - `p`: Paragraph
   * - `ul`: Bullet list
   * - `u`: Underline
   *
   *
   * Supported HTML attributes include:
   * - `align`: Alignment of the text content
   * - `href`: Link destination
   * - `rel`: Relationship between link's target and source
   * - `target`: Place to open the linked document
   */
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  /** A server-generated plaintext version of the `description_html` field, without formatting tags. */
  descriptionPlaintext?: Maybe<Scalars['String']['output']>;
  /** The SEO data for a seller's Square Online store. */
  ecomSeoData?: Maybe<CatalogEcomSeoData>;
  /** The food and beverage-specific details for the `FOOD_AND_BEV` item. */
  foodAndBeverageDetails?: Maybe<CatalogItemFoodAndBeverageDetails>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /**
   * The IDs of images associated with this `CatalogItem` instance.
   * These images will be shown to customers in Square Online Store.
   * The first image will show up as the icon for this item in POS.
   */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /** Indicates whether this item is archived (`true`) or not (`false`). */
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: Maybe<Scalars['HexColor']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * A set of `CatalogItemModifierListInfo` objects
   * representing the modifier lists that apply to this item, along with the overrides and min
   * and max limits that are specific to this item. Modifier lists
   * may also be added to or deleted from an item using `UpdateItemModifierLists`.
   */
  modifierListInfos?: Maybe<Array<Maybe<CatalogItemModifierListInfo>>>;
  /** The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * List of item options IDs for this item. Used to manage and group item
   * variations in a specified order.
   *
   * Maximum: 6 item options.
   */
  options?: Maybe<Array<Maybe<CatalogItemOption>>>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The product type of the item. Once set, the `product_type` value cannot be modified.
   *
   * Items of the `LEGACY_SQUARE_ONLINE_SERVICE` and `LEGACY_SQUARE_ONLINE_MEMBERSHIP` product types can be updated
   * but cannot be created using the API.
   */
  productType?: Maybe<CatalogItemProductType>;
  /** The item's reporting category. */
  reportingCategory?: Maybe<CatalogObjectCategory>;
  /**
   * If `false`, the Square Point of Sale app will present the `CatalogItem`'s
   * details screen immediately, allowing the merchant to choose `CatalogModifier`s
   * before adding the item to the cart.  This is the default behavior.
   *
   * If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected
   * modifiers, and merchants can edit modifiers by drilling down onto the item's details.
   *
   * Third-party clients are encouraged to implement similar behaviors.
   */
  skipModifierScreen?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A name to sort the item by. If this name is unspecified, namely, the `sort_name` field is absent, the regular `name` field is used for sorting.
   * Its value must not be empty.
   *
   * It is currently supported for sellers of the Japanese locale only.
   */
  sortName?: Maybe<Scalars['String']['output']>;
  /**
   * A set of IDs indicating the taxes enabled for
   * this item. When updating an item, any taxes listed here will be added to the item.
   * Taxes may also be added to or deleted from an item using `UpdateItemTaxes`.
   */
  taxes?: Maybe<Array<Maybe<CatalogTax>>>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * A list of CatalogItemVariation objects for this item. An item must have
   * at least one variation.
   */
  variations?: Maybe<Array<Maybe<CatalogItemVariation>>>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Contains information of items query result.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  /** List of CatalogItems */
  nodes: Array<CatalogItem>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Used for filtering results for Items of CatalogQueries */
export type CatalogItemFilter = {
  /** The query filter to return not archived (ARCHIVED_STATE_NOT_ARCHIVED), archived (ARCHIVED_STATE_ARCHIVED), or either type (ARCHIVED_STATE_ALL) of items. */
  archivedState?: InputMaybe<ArchivedStateFilter>;
  /** Filters for CatalogItems that belong to one of the specified CatalogCategory's. */
  categoryId?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The customer attribute filter to return items or item variations matching the specified custom attribute expressions.
   * A maximum number of 10 custom attribute expressions are supported in a single call.
   */
  customAttribute?: InputMaybe<Array<InputMaybe<CatalogCustomAttributeFilter>>>;
  /** The enabled location IDs. An item must be enabled at all of the Location IDs listed here. */
  enabledLocationId?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** The product types query expression to return items having the specified product types. */
  productType?: InputMaybe<CatalogItemProductTypeFilter>;
  /** The stock-level query expression to return items with the specified stock levels in their variations */
  stockLevel?: InputMaybe<Array<InputMaybe<CatalogStockLevel>>>;
  /**
   * The text filter expression to return items containing specified text in the name, description,
   * or abbreviation attribute value of an item, or in the name, sku, or upc attribute value of an item variation.
   */
  text?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The food and beverage-specific details of a `FOOD_AND_BEV` item.
 * Permissions: ITEMS_READ
 */
export type CatalogItemFoodAndBeverageDetails = {
  __typename?: 'CatalogItemFoodAndBeverageDetails';
  /** The calorie count (in the unit of kcal) for the `FOOD_AND_BEV` type of items. */
  calorieCount?: Maybe<Scalars['Int']['output']>;
  /** The dietary preferences for the `FOOD_AND_BEV` item. */
  dietaryPreferences?: Maybe<Array<Maybe<CatalogItemFoodAndBeverageDetailsDietaryPreference>>>;
  /** The ingredients for the `FOOD_AND_BEV` type item. */
  ingredients?: Maybe<Array<Maybe<CatalogItemFoodAndBeverageDetailsIngredient>>>;
};

/**
 * Dietary preferences that can be assigned to an `FOOD_AND_BEV` item and its ingredients.
 * Permissions: ITEMS_READ
 */
export type CatalogItemFoodAndBeverageDetailsDietaryPreference = {
  __typename?: 'CatalogItemFoodAndBeverageDetailsDietaryPreference';
  /** The name of a user-defined custom dietary preference. This should be null if it's a standard dietary preference. */
  customName?: Maybe<Scalars['String']['output']>;
  /** The name of the dietary preference from a standard pre-defined list. This should be null if it's a custom dietary preference. */
  standardName?: Maybe<CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference>;
  /** The dietary preference type. Supported values include `STANDARD` and `CUSTOM` as specified in `FoodAndBeverageDetails.DietaryPreferenceType`. */
  type?: Maybe<CatalogItemFoodAndBeverageDetailsDietaryPreferenceType>;
};

/** Standard dietary preferences for food and beverage items that are recommended on item creation. */
export enum CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference {
  DairyFree = 'DAIRY_FREE',
  GlutenFree = 'GLUTEN_FREE',
  Halal = 'HALAL',
  Kosher = 'KOSHER',
  NutFree = 'NUT_FREE',
  Vegan = 'VEGAN',
  Vegetarian = 'VEGETARIAN'
}

/** The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. */
export enum CatalogItemFoodAndBeverageDetailsDietaryPreferenceType {
  /** A user-defined custom value. */
  Custom = 'CUSTOM',
  /** A standard value from a pre-determined list. */
  Standard = 'STANDARD'
}

/**
 * Describes the ingredient used in a `FOOD_AND_BEV` item.
 * Permissions: ITEMS_READ
 */
export type CatalogItemFoodAndBeverageDetailsIngredient = {
  __typename?: 'CatalogItemFoodAndBeverageDetailsIngredient';
  /** The name of a custom user-defined ingredient. This should be null if it's a standard dietary preference. */
  customName?: Maybe<Scalars['String']['output']>;
  /** The name of the ingredient from a standard pre-defined list. This should be null if it's a custom dietary preference. */
  standardName?: Maybe<CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient>;
  /** The dietary preference type of the ingredient. Supported values include `STANDARD` and `CUSTOM` as specified in `FoodAndBeverageDetails.DietaryPreferenceType`. */
  type?: Maybe<CatalogItemFoodAndBeverageDetailsDietaryPreferenceType>;
};

/** Standard ingredients for food and beverage items that are recommended on item creation. */
export enum CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient {
  Celery = 'CELERY',
  Crustaceans = 'CRUSTACEANS',
  Eggs = 'EGGS',
  Fish = 'FISH',
  Gluten = 'GLUTEN',
  Lupin = 'LUPIN',
  Milk = 'MILK',
  Molluscs = 'MOLLUSCS',
  Mustard = 'MUSTARD',
  Peanuts = 'PEANUTS',
  Sesame = 'SESAME',
  Soy = 'SOY',
  Sulphites = 'SULPHITES',
  TreeNuts = 'TREE_NUTS'
}

/**
 * References a text-based modifier or a list of non text-based modifiers applied to a `CatalogItem` instance
 * and specifies supported behaviors of the application.
 * Permissions: ITEMS_READ
 */
export type CatalogItemModifierListInfo = {
  __typename?: 'CatalogItemModifierListInfo';
  /** If `true`, enable this `CatalogModifierList`. The default value is `true`. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`. */
  maxSelectedModifiers?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`. */
  minSelectedModifiers?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`. */
  modifierList?: Maybe<CatalogModifierList>;
  /** A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default. */
  modifierOverrides?: Maybe<Array<Maybe<CatalogModifierOverride>>>;
  /**
   * The position of this `CatalogItemModifierListInfo` object within the `modifier_list_info` list applied
   * to a `CatalogItem` instance.
   */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
};

/**
 * A group of variations for a `CatalogItem`.
 * Permissions: ITEMS_READ
 */
export type CatalogItemOption = CatalogObject & {
  __typename?: 'CatalogItemOption';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * The item option's human-readable description. Displayed in the Square
   * Point of Sale app for the seller and in the Online Store or on receipts for
   * the buyer. This is a searchable attribute for use in applicable query filters.
   */
  description?: Maybe<Scalars['String']['output']>;
  /** The item option's display name for the customer. This is a searchable attribute for use in applicable query filters. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The item option's display name for the seller. Must be unique across
   * all item options. This is a searchable attribute for use in applicable query filters.
   */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** If true, display colors for entries in `values` when present. */
  showColors?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * A list of CatalogObjects containing the
   * `CatalogItemOptionValue`s for this item.
   */
  values?: Maybe<Array<Maybe<CatalogItemOptionValue>>>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * An enumerated value that can link a
 * `CatalogItemVariation` to an item option as one of
 * its item option values.
 * Permissions: ITEMS_READ
 */
export type CatalogItemOptionValue = CatalogObject & {
  __typename?: 'CatalogItemOptionValue';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The HTML-supported hex color for the item option (e.g., "#ff8d4e85").
   * Only displayed if `show_colors` is enabled on the parent `ItemOption`. When
   * left unset, `color` defaults to white ("#ffffff") when `show_colors` is
   * enabled on the parent `ItemOption`.
   */
  color?: Maybe<Scalars['HexColor']['output']>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** Name of this item option value. This is a searchable attribute for use in applicable query filters. */
  name?: Maybe<Scalars['String']['output']>;
  /** Unique ID of the associated item option. */
  option?: Maybe<CatalogItemOption>;
  /** Determines where this option value appears in a list of option values. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** The type of a CatalogItem.Connect V2 only allows the creation of `REGULAR` or `APPOINTMENTS_SERVICE` items. */
export enum CatalogItemProductType {
  /** A service that can be booked using the Square Appointments app. */
  AppointmentsService = 'APPOINTMENTS_SERVICE',
  /** A digital item like an ebook or song. */
  Digital = 'DIGITAL',
  /** A donation which site visitors can send for any cause. */
  Donation = 'DONATION',
  /** An event which tickets can be sold for, including location, address, and times. */
  Event = 'EVENT',
  /** A food or beverage item that can be sold by restaurants and other food venues. */
  FoodAndBev = 'FOOD_AND_BEV',
  /** A Square gift card. */
  GiftCard = 'GIFT_CARD',
  /** A legacy Square Online membership that is manually fulfilled. This corresponds to the `Membership` item type displayed in the Square Seller Dashboard and Square POS apps. */
  LegacySquareOnlineMembership = 'LEGACY_SQUARE_ONLINE_MEMBERSHIP',
  /** A legacy Square Online service that is manually fulfilled. This corresponds to the `Other` item type displayed in the Square Seller Dashboard and Square POS apps. */
  LegacySquareOnlineService = 'LEGACY_SQUARE_ONLINE_SERVICE',
  /** An ordinary item. */
  Regular = 'REGULAR'
}

/** CatalogObjectTypeFilter is used for filtering a query with CatalogItemProductType */
export type CatalogItemProductTypeFilter = {
  /** Used for filtering a query with CatalogItemProductType */
  equalToAnyOf?: InputMaybe<Array<CatalogItemProductType>>;
};

/**
 * An item variation, representing a product for sale, in the Catalog object model.Each item must have at least one
 * item variation and can have at most 250 item variations.
 *
 * An item variation can be sellable, stockable, or both if it has a unit of measure for its count for the sold number of the variation, the stocked
 * number of the variation, or both. For example, when a variation representing wine is stocked and sold by the bottle, the variation is both
 * stockable and sellable. But when a variation of the wine is sold by the glass, the sold units cannot be used as a measure of the stocked units. This by-the-glass
 * variation is sellable, but not stockable. To accurately keep track of the wine's inventory count at any time, the sellable count must be
 * converted to stockable count. Typically, the seller defines this unit conversion. For example, 1 bottle equals 5 glasses. The Square API exposes
 * the `stockable_conversion` property on the variation to specify the conversion. Thus, when two glasses of the wine are sold, the sellable count
 * decreases by 2, and the stockable count automatically decreases by 0.4 bottle according to the conversion.
 * Permissions: ITEMS_READ
 */
export type CatalogItemVariation = CatalogObject & {
  __typename?: 'CatalogItemVariation';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * If the `CatalogItem` that owns this item variation is of type
   * `APPOINTMENTS_SERVICE`, a bool representing whether this service is available for booking.
   */
  availableForBooking?: Maybe<Scalars['Boolean']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /**
   * The IDs of images associated with this `CatalogItemVariation` instance.
   * These images will be shown to customers in Square Online Store.
   */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /**
   * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal
   * to its `inventory_alert_threshold`.
   */
  inventoryAlert?: Maybe<InventoryAlert>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the `CatalogItem` associated with this item variation. */
  item?: Maybe<CatalogItem>;
  /** Per-location price and inventory overrides. */
  locationOverrides?: Maybe<Array<Maybe<CatalogItemVariationLocationOverride>>>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The item variation's name. This is a searchable attribute for use in applicable query filters.
   *
   * Its value has a maximum length of 255 Unicode code points. However, when the parent item
   * uses item options, this attribute is auto-generated, read-only, and can be
   * longer than 255 Unicode code points.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * List of item option values associated with this item variation. Listed
   * in the same order as the item options of the parent item.
   */
  optionValues?: Maybe<Array<Maybe<CatalogItemOptionValue>>>;
  /**
   * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal
   * for each item variation within a parent `CatalogItem` is set according to the item variations's
   * position. On reads, the value is not guaranteed to be sequential or unique.
   */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The item variation's price, if fixed pricing is used. */
  priceMoney?: Maybe<Money>;
  /**
   * Indicates whether the item variation's price is fixed or determined at the time
   * of sale.
   */
  pricingType?: Maybe<CatalogPricingType>;
  /**
   * Whether this variation can be sold. The inventory count of a sellable variation indicates
   * the number of units available for sale. When a variation is both stockable and sellable,
   * its sellable inventory count can be smaller than or equal to its stockable count.
   */
  sellable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * If the `CatalogItem` that owns this item variation is of type
   * `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For
   * example, a 30 minute appointment would have the value `1800000`, which is equal to
   * 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
   */
  serviceDuration?: Maybe<Scalars['Int']['output']>;
  /** The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters. */
  sku?: Maybe<Scalars['String']['output']>;
  /**
   * Whether stock is counted directly on this variation (TRUE) or only on its components (FALSE).
   * When a variation is both stockable and sellable, the inventory count of a stockable variation keeps track of the number of units of this variation in stock
   * and is not an indicator of the number of units of the variation that can be sold.
   */
  stockable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The unit conversion rule, as prescribed by the CatalogStockConversion type,
   * that describes how this non-stockable (i.e., sellable/receivable) item variation is converted
   * to/from the stockable item variation sharing the same parent item. With the stock conversion,
   * you can accurately track inventory when an item variation is sold in one unit, but stocked in
   * another unit.
   */
  stockableConversion?: Maybe<CatalogStockConversion>;
  /**
   * Tokens of employees that can perform the service represented by this variation. Only valid for
   * variations of type `APPOINTMENTS_SERVICE`.
   */
  teamMemberIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** If `true`, inventory tracking is active for the variation. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  /**
   * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity
   * sold of this item variation. If left unset, the item will be sold in
   * whole quantities.
   */
  unit?: Maybe<CatalogMeasurementUnit>;
  /**
   * The universal product code (UPC) of the item variation, if any. This is a searchable attribute for use in applicable query filters.
   *
   * The value of this attribute should be a number of 12-14 digits long.  This restriction is enforced on the Square Seller Dashboard,
   * Square Point of Sale or Retail Point of Sale apps, where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned
   * to this attribute using the API, the value is not editable on the Seller Dashboard, Square Point of Sale or Retail Point of Sale apps
   * unless it is updated to fit the expected format.
   */
  upc?: Maybe<Scalars['String']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points. */
  userData?: Maybe<Scalars['String']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`.
 * Permissions: ITEMS_READ
 */
export type CatalogItemVariationLocationOverride = {
  __typename?: 'CatalogItemVariationLocationOverride';
  /**
   * Indicates whether the `CatalogItemVariation` displays an alert when its inventory
   * quantity is less than or equal to its `inventory_alert_threshold`.
   */
  inventoryAlert?: Maybe<InventoryAlert>;
  /** The ID of the `Location`. This can include locations that are deactivated. */
  location?: Maybe<Location>;
  /** The price of the `CatalogItemVariation` at the given `Location`, or blank for variable pricing. */
  priceMoney?: Maybe<Money>;
  /** The pricing type (fixed or variable) for the `CatalogItemVariation` at the given `Location`. */
  pricingType?: Maybe<CatalogPricingType>;
  /**
   * Indicates whether the overridden item variation is sold out at the specified location.
   *
   * When inventory tracking is enabled on the item variation either globally or at the specified location,
   * the item variation is automatically marked as sold out when its inventory count reaches zero. The seller
   * can manually set the item variation as sold out even when the inventory count is greater than zero.
   * Attempts by an application to set this attribute are ignored. Regardless how the sold-out status is set,
   * applications should treat its inventory count as zero when this attribute value is `true`.
   */
  soldOut?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The seller-assigned timestamp, of the RFC 3339 format, to indicate when this sold-out variation
   * becomes available again at the specified location. Attempts by an application to set this attribute are ignored.
   * When the current time is later than this attribute value, the affected item variation is no longer sold out.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  soldOutValidUntil?: Maybe<Scalars['String']['output']>;
  /** If `true`, inventory tracking is active for the `CatalogItemVariation` at this `Location`. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Represents the unit used to measure a `CatalogItemVariation` and
 * specifies the precision for decimal quantities.
 * Permissions: ITEMS_READ
 */
export type CatalogMeasurementUnit = CatalogObject & {
  __typename?: 'CatalogMeasurementUnit';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * An integer between 0 and 5 that represents the maximum number of
   * positions allowed after the decimal in quantities measured with this unit.
   * For example:
   *
   * - if the precision is 0, the quantity can be 1, 2, 3, etc.
   * - if the precision is 1, the quantity can be 0.1, 0.2, etc.
   * - if the precision is 2, the quantity can be 0.01, 0.12, etc.
   *
   * Default: 3
   */
  precision?: Maybe<Scalars['Int']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates the unit used to measure the quantity of a catalog item variation. */
  unit?: Maybe<MeasurementUnit>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A modifier applicable to items at the time of sale.An example of a modifier is a Cheese add-on to a Burger item.
 * Permissions: ITEMS_READ
 */
export type CatalogModifier = CatalogObject & {
  __typename?: 'CatalogModifier';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /**
   * The ID of the image associated with this `CatalogModifier` instance.
   * Currently this image is not displayed by Square, but is free to be displayed in 3rd party applications.
   */
  image?: Maybe<CatalogImage>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** Location-specific price overrides. */
  locationOverrides?: Maybe<Array<Maybe<ModifierLocationOverride>>>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The ID of the `CatalogModifierList` associated with this modifier. */
  modifierList?: Maybe<CatalogModifierList>;
  /** The modifier name.  This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: Maybe<Scalars['String']['output']>;
  /** Determines where this `CatalogModifier` appears in the `CatalogModifierList`. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The modifier price. */
  priceMoney?: Maybe<Money>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * For a text-based modifier, this encapsulates the modifier's text when its `modifier_type` is `TEXT`.For example, to sell T-shirts with custom prints, a text-based modifier can be used to capture the buyer-supplied
 * text string to be selected for the T-shirt at the time of sale.
 *
 * For non text-based modifiers, this encapsulates a non-empty list of modifiers applicable to items
 * at the time of sale. Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER` type.
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
 * may contain "Ketchup", "Mustard", and "Relish" modifiers.
 *
 * A non text-based modifier can be applied to the modified item once or multiple times, if the `selection_type` field
 * is set to `SINGLE` or `MULTIPLE`, respectively. On the other hand, a text-based modifier can be applied to the item
 * only once and the `selection_type` field is always set to `SINGLE`.
 * Permissions: ITEMS_READ
 */
export type CatalogModifierList = CatalogObject & {
  __typename?: 'CatalogModifierList';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /**
   * The IDs of images associated with this `CatalogModifierList` instance.
   * Currently these images are not displayed on Square products, but may be displayed in 3rd-party applications.
   */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /**
   * A note for internal use by the business.
   *
   * For example, for a text-based modifier applied to a T-shirt item, if the buyer-supplied text of "Hello, Kitty!"
   * is to be printed on the T-shirt, this `internal_name` attribute can be "Use italic face" as
   * an instruction for the business to follow.
   *
   * For non text-based modifiers, this `internal_name` attribute can be
   * used to include SKUs, internal codes, or supplemental descriptions for internal use.
   */
  internalName?: Maybe<Scalars['String']['output']>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The maximum length, in Unicode points, of the text string of the text-based modifier as represented by
   * this `CatalogModifierList` object with the `modifier_type` set to `TEXT`.
   */
  maxLength?: Maybe<Scalars['Int']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The type of the modifier.
   *
   * When this `modifier_type` value is `TEXT`,  the `CatalogModifierList` represents a text-based modifier.
   * When this `modifier_type` value is `LIST`, the `CatalogModifierList` contains a list of `CatalogModifier` objects.
   */
  modifierType?: Maybe<CatalogModifierListModifierType>;
  /**
   * A non-empty list of `CatalogModifier` objects to be included in the `CatalogModifierList`,
   * for non text-based modifiers when the `modifier_type` attribute is `LIST`. Each element of this list
   * is a `CatalogObject` instance of the `MODIFIER` type, containing the following attributes:
   * ```
   * {
   * "id": "{{catalog_modifier_id}}",
   * "type": "MODIFIER",
   * "modifier_data": {{a CatalogModifier instance>}}
   * }
   * ```
   */
  modifiers?: Maybe<Array<Maybe<CatalogModifier>>>;
  /**
   * The name of the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of
   * Unicode code points.
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The position of this `CatalogModifierList` within a list of `CatalogModifierList` instances. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Indicates whether a single (`SINGLE`) or multiple (`MULTIPLE`) modifiers from the list
   * can be applied to a single `CatalogItem`.
   *
   * For text-based modifiers, the `selection_type` attribute is always `SINGLE`. The other value is ignored.
   */
  selectionType?: Maybe<CatalogModifierListSelectionType>;
  /**
   * Whether the text string must be a non-empty string (`true`) or not (`false`) for a text-based modifier
   * as represented by this `CatalogModifierList` object with the `modifier_type` set to `TEXT`.
   */
  textRequired?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Defines the type of `CatalogModifierList`. */
export enum CatalogModifierListModifierType {
  /** The `CatalogModifierList` instance is a non-empty list of non text-based modifiers. */
  List = 'LIST',
  /** The `CatalogModifierList` instance is a single text-based modifier. */
  Text = 'TEXT'
}

/** Indicates whether a CatalogModifierList supports multiple selections. */
export enum CatalogModifierListSelectionType {
  /**
   * Indicates that a CatalogModifierList allows multiple
   * CatalogModifier to be selected.
   */
  Multiple = 'MULTIPLE',
  /**
   * Indicates that a CatalogModifierList allows only a
   * single CatalogModifier to be selected.
   */
  Single = 'SINGLE'
}

/**
 * Options to control how to override the default behavior of the specified modifier.
 * Permissions: ITEMS_READ
 */
export type CatalogModifierOverride = {
  __typename?: 'CatalogModifierOverride';
  /** The ID of the `CatalogModifier` whose default behavior is being overridden. */
  modifier?: Maybe<CatalogModifier>;
  /** If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`. */
  onByDefault?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * An interface for catalog objects.
 * Permissions: ITEMS_READ
 */
export type CatalogObject = {
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A category that can be assigned to an item or a parent category that can be assigned
 * to another category.For example, a clothing category can be assigned to a t-shirt item or
 * be made as the parent category to the pants category.
 * Permissions: ITEMS_READ
 */
export type CatalogObjectCategory = {
  __typename?: 'CatalogObjectCategory';
  /** The ID of the object's category. */
  category?: Maybe<CatalogCategory>;
  /** The order of the object within the context of the category. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
};

/**
 * Contains information of a query result.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogObjectConnection = {
  __typename?: 'CatalogObjectConnection';
  /** List of CatalogObjects */
  nodes: Array<CatalogObject>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * CatalogObjectFilter is used for querying catalog objects.
 *
 * There are rules on what filters can be set at a time.
 * 1. IdFilter and CatalogObjectTypeFilter do not apply if type specific query such as ItemsForTax, ItemsForModifierList,
 * ItemsForItemOptions, or ItemVariationsForItemOptionValues is set.
 * 2. Only 1 type specifc query can be set at a time.
 * 3. Only one of the followings can exist
 * (a) set one type specific query
 * (b) set any combinations of 'text', 'prefix', 'exact', 'range' together
 * (c) set 'set' query
 * 4. The rest of filters are logically AND together.s
 */
export type CatalogObjectFilter = {
  /** An exact query expression to return objects with attribute name and value matching the specified attribute name and value exactly. Value matching is case insensitive. */
  exact?: InputMaybe<CatalogAttributeBasicStringFilter>;
  /** The object IDs of any type of catalog objects to be retrieved. If the value is nil, it will return all catalog objects. */
  id?: InputMaybe<BasicIdFilter>;
  /**
   * Specifies whether or not to include the `path_to_root` list for each returned category instance. The `path_to_root` list consists
   * of `CategoryPathToRootNode` objects and specifies the path that starts with the immediate parent category of the returned category
   * and ends with its root category. If the returned category is a top-level category, the `path_to_root` list is empty and is not returned
   * in the response payload.
   */
  includeCategoryPathToRoot?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, deleted objects will be included in the results. Deleted objects will have their isDeleted field set to true. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** A query expression to return CatalogItemVariations that contain all of the specified CatalogItemOption IDs. */
  itemVariationsForItemOptionValue?: InputMaybe<BasicIdFilter>;
  /** A query expression to return CatalogItems that contains the specified CatalogItemOption IDs. */
  itemsForItemOption?: InputMaybe<BasicIdFilter>;
  /** A query expression to return CatalogItems that have any of the CatalogModifierLists IDs enabled. */
  itemsForModifierList?: InputMaybe<BasicIdFilter>;
  /** A query expression to return CatalogItems that have any of the CatalogTax IDs enabled. */
  itemsForTax?: InputMaybe<BasicIdFilter>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** A prefix query expression to return objects with attribute values that have a prefix matching the specified string value. Value maching is case insensitive. */
  prefix?: InputMaybe<CatalogAttributeBasicStringFilter>;
  /** A range query expression to return objects with numberic values that lie in the specified range. */
  range?: InputMaybe<CatalogAttributeRangeFilter>;
  /** A set query expression to return objects with attribute name and value matching the specified attribute name and any of the specified attribute values exactly. Value matching is case insensitive. */
  set?: InputMaybe<CatalogAttributeStringSetFilter>;
  /** A query expression to sort/filter returned query result by the given attribute. */
  sortedAttributes?: InputMaybe<Array<CatalogAttributeSort>>;
  /**
   * A text query expression to return objects whose searchable attributes contain all of the given keywords, irrespective of their order.
   * For example, if a CatalogItem contains custom attribute values of {"name": "t-shirt"} and {"description": "Small, Purple"},
   * the query filter of {"keywords": ["shirt", "sma", "purp"]} returns this item. It supports up to 3 values that are at least 3 charater long.
   */
  text?: InputMaybe<CatalogStringSetFilter>;
  /** A list of object types to retrieve. If the value is nil, it will return all types. */
  type?: InputMaybe<CatalogObjectTypeFilter>;
};

/**
 * A reference to a Catalog object at a specific version.In general this is
 * used as an entry point into a graph of catalog objects, where the objects exist
 * at a specific version.
 * Permissions: LOYALTY_READ
 */
export type CatalogObjectReference = {
  __typename?: 'CatalogObjectReference';
  /** The version of the object. */
  catalogVersion?: Maybe<Scalars['String']['output']>;
  /** The ID of the referenced object. */
  objectId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Possible types of CatalogObjects returned from the catalog, each
 * containing type-specific properties in the `*_data` field corresponding to the specified object type.
 */
export enum CatalogObjectType {
  /**
   * The `CatalogObject` instance is of the [CatalogAvailabilityPeriod](entity:CatalogAvailabilityPeriod) type and represents an availability period.
   * The availability period specific data must be stored on the `availability_period_data` field.
   */
  AvailabilityPeriod = 'AVAILABILITY_PERIOD',
  /**
   * The `CatalogObject` instance is of the [CatalogCategory](entity:CatalogCategory) type and represents a category. The category-specific data
   * must be set on the `category_data` field.
   */
  Category = 'CATEGORY',
  /**
   * The `CatalogObject` instance is of the [CatalogCustomAttributeDefinition](entity:CatalogCustomAttributeDefinition) type and represents the definition of a custom attribute.
   * The custom-attribute-definition-specific data must be set on the `custom_attribute_definition_data` field.
   */
  CustomAttributeDefinition = 'CUSTOM_ATTRIBUTE_DEFINITION',
  /**
   * The `CatalogObject` instance is of the [CatalogDiscount](entity:CatalogDiscount) type and represents a discount. The discount-specific data
   * must be set on the `discount_data` field.
   */
  Discount = 'DISCOUNT',
  /**
   * The `CatalogObject` instance is of the [CatalogImage](entity:CatalogImage) type and represents an image. The image-specific data
   * must be set on the `image_data` field.
   */
  Image = 'IMAGE',
  /**
   * The `CatalogObject` instance is of the [CatalogItem](entity:CatalogItem) type and represents an item. The item-specific data
   * must be set on the `item_data` field.
   */
  Item = 'ITEM',
  /**
   * The `CatalogObject` instance is of the [CatalogItemOption](entity:CatalogItemOption) type and represents a list of options (such as a color or size of a T-shirt)
   * that can be assigned to item variations. The item-option-specific data must be on the `item_option_data` field.
   */
  ItemOption = 'ITEM_OPTION',
  /**
   * The `CatalogObject` instance is of the [CatalogItemOptionValue](entity:CatalogItemOptionValue) type and represents a value associated with one or more item options.
   * For example, an item option of "Size" may have item option values such as "Small" or "Medium".
   * The item-option-value-specific data must be on the `item_option_value_data` field.
   */
  ItemOptionVal = 'ITEM_OPTION_VAL',
  /**
   * The `CatalogObject` instance is of the  [CatalogItemVariation](entity:CatalogItemVariation) type and represents an item variation, also referred to as variation.
   * The item variation-specific data must be set on the `item_variation_data` field.
   */
  ItemVariation = 'ITEM_VARIATION',
  /**
   * The `CatalogObject` instance is of the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit) type and represents a measurement unit specifying the unit of
   * measure and precision in which an item variation is sold. The measurement-unit-specific data must set on the `measurement_unit_data` field.
   */
  MeasurementUnit = 'MEASUREMENT_UNIT',
  /**
   * The `CatalogObject` instance is of the [CatalogModifier](entity:CatalogModifier) type and represents a modifier. The modifier-specific data
   * must be set on the `modifier_data` field.
   */
  Modifier = 'MODIFIER',
  /**
   * The `CatalogObject` instance is of the [CatalogModifierList](entity:CatalogModifierList) type and represents a modifier list.
   * The modifier-list-specific data must be set on the `modifier_list_data` field.
   */
  ModifierList = 'MODIFIER_LIST',
  /**
   * The `CatalogObject` instance is of the [CatalogPricingRule](entity:CatalogPricingRule) type and represents a pricing rule. The pricing-rule-specific data
   * must be set on the `pricing_rule_data` field.
   */
  PricingRule = 'PRICING_RULE',
  /**
   * The `CatalogObject` instance is of the [CatalogProductSet](entity:CatalogProductSet) type and represents a product set.
   * The product-set-specific data will be stored in the `product_set_data` field.
   */
  ProductSet = 'PRODUCT_SET',
  /**
   * The `CatalogObject` instance is of the [CatalogQuickAmountsSettings](entity:CatalogQuickAmountsSettings) type and represents settings to configure preset charges for quick payments at each location.
   * For example, a location may have a list of both AUTO and MANUAL quick amounts that are set to DISABLED.
   * The quick-amounts-settings-specific data must be set on the `quick_amounts_settings_data` field.
   */
  QuickAmountsSettings = 'QUICK_AMOUNTS_SETTINGS',
  /**
   * The `CatalogObject` instance is of the [CatalogSubscriptionPlan](entity:CatalogSubscriptionPlan) type and represents a subscription plan.
   * The subscription plan specific data must be stored on the `subscription_plan_data` field.
   */
  SubscriptionPlan = 'SUBSCRIPTION_PLAN',
  /**
   * The `CatalogObject` instance is of the [CatalogSubscriptionPlan](entity:CatalogSubscriptionPlan) type and represents a subscription plan.
   * The subscription-plan-specific data must be stored on the `subscription_plan_data` field.
   */
  SubscriptionPlanVariation = 'SUBSCRIPTION_PLAN_VARIATION',
  /**
   * The `CatalogObject` instance is of the [CatalogTax](entity:CatalogTax) type and represents a tax. The tax-specific data
   * must be set on the `tax_data` field.
   */
  Tax = 'TAX',
  /**
   * The `CatalogObject` instance is of the [CatalogTimePeriod](entity:CatalogTimePeriod) type and represents a time period.
   * The time-period-specific data must be set on the `time_period_data` field.
   */
  TimePeriod = 'TIME_PERIOD'
}

/** CatalogObjectTypeFilter is used for filtering a query with CatalogObjectType */
export type CatalogObjectTypeFilter = {
  /** Used for filtering a query with CatalogObjectType */
  equalToAnyOf?: InputMaybe<Array<CatalogObjectType>>;
};

/**
 * Defines how discounts are automatically applied to a set of items that match the pricing rule
 * during the active time period.
 * Permissions: ITEMS_READ
 */
export type CatalogPricingRule = CatalogObject & {
  __typename?: 'CatalogPricingRule';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * __Deprecated__: Please use the `exclude_products_id` field to apply
   * an exclude set instead. Exclude sets allow better control over quantity
   * ranges and offer more flexibility for which matched items receive a discount.
   *
   * `CatalogProductSet` to apply the pricing to.
   * An apply rule matches within the subset of the cart that fits the match rules (the match set).
   * An apply rule can only match once in the match set.
   * If not supplied, the pricing will be applied to all products in the match set.
   * Other products retain their base price, or a price generated by other rules.
   */
  applyProducts?: Maybe<CatalogProductSet>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * A list of IDs of customer groups, the members of which are eligible for discounts specified in this pricing rule.
   * Notice that a group ID is generated by the Customers API.
   * If this field is not set, the specified discount applies to matched products sold to anyone whether the buyer
   * has a customer profile created or not. If this `customer_group_ids_any` field is set, the specified discount
   * applies only to matched products sold to customers belonging to the specified customer groups.
   */
  customerGroupIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * Unique ID for the `CatalogDiscount` to take off
   * the price of all matched items.
   */
  discount?: Maybe<CatalogDiscount>;
  /**
   * `CatalogProductSet` to exclude from the pricing rule.
   * An exclude rule matches within the subset of the cart that fits the match rules (the match set).
   * An exclude rule can only match once in the match set.
   * If not supplied, the pricing will be applied to all products in the match set.
   * Other products retain their base price, or a price generated by other rules.
   */
  excludeProducts?: Maybe<CatalogProductSet>;
  /**
   * If an `exclude_products_id` was given, controls which subset of matched
   * products is excluded from any discounts.
   *
   * Default value: `LEAST_EXPENSIVE`
   */
  excludeStrategy?: Maybe<ExcludeStrategy>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Unique ID for the `CatalogProductSet` that will be matched by this rule. A match rule
   * matches within the entire cart, and can match multiple times. This field will always be set.
   */
  matchProducts?: Maybe<CatalogProductSet>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The minimum order subtotal (before discounts or taxes are applied)
   * that must be met before this rule may be applied.
   */
  minimumOrderSubtotalMoney?: Maybe<Money>;
  /**
   * User-defined name for the pricing rule. For example, "Buy one get one
   * free" or "10% off".
   */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A list of unique IDs for the catalog time periods when
   * this pricing rule is in effect. If left unset, the pricing rule is always
   * in effect.
   */
  timePeriods?: Maybe<Array<Maybe<CatalogTimePeriod>>>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Represents the date the Pricing Rule is valid from. Represented in RFC 3339 full-date format (YYYY-MM-DD). */
  validFromDate?: Maybe<Scalars['String']['output']>;
  /**
   * Represents the local time the pricing rule should be valid from. Represented in RFC 3339 partial-time format
   * (HH:MM:SS). Partial seconds will be truncated.
   */
  validFromLocalTime?: Maybe<Scalars['String']['output']>;
  /** Represents the date the Pricing Rule is valid until. Represented in RFC 3339 full-date format (YYYY-MM-DD). */
  validUntilDate?: Maybe<Scalars['String']['output']>;
  /**
   * Represents the local time the pricing rule should be valid until. Represented in RFC 3339 partial-time format
   * (HH:MM:SS). Partial seconds will be truncated.
   */
  validUntilLocalTime?: Maybe<Scalars['String']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. */
export enum CatalogPricingType {
  /** The catalog item variation's price is fixed. */
  FixedPricing = 'FIXED_PRICING',
  /** The catalog item variation's price is entered at the time of sale. */
  VariablePricing = 'VARIABLE_PRICING'
}

/**
 * Represents a collection of catalog objects for the purpose of applying a
 * `PricingRule`.Including a catalog object will include all of its subtypes.
 * For example, including a category in a product set will include all of its
 * items and associated item variations in the product set. Including an item in
 * a product set will also include its item variations.
 * Permissions: ITEMS_READ
 */
export type CatalogProductSet = CatalogObject & {
  __typename?: 'CatalogProductSet';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * If set to `true`, the product set will include every item in the catalog.
   * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
   */
  allProducts?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Unique IDs for any `CatalogObject` included in this product set.
   * All objects in this set must be included in an order for a pricing rule to apply.
   *
   * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
   *
   * Max: 500 catalog object IDs.
   */
  allSetProducts?: Maybe<Array<Maybe<CatalogObject>>>;
  /**
   *  Unique IDs for any `CatalogObject` included in this product set. Any
   * number of these catalog objects can be in an order for a pricing rule to apply.
   *
   * This can be used with `product_ids_all` in a parent `CatalogProductSet` to
   * match groups of products for a bulk discount, such as a discount for an
   * entree and side combo.
   *
   * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
   *
   * Max: 500 catalog object IDs.
   */
  anySetProducts?: Maybe<Array<Maybe<CatalogObject>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * User-defined name for the product set. For example, "Clearance Items"
   * or "Winter Sale Items".
   */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * If set, there must be exactly this many items from `products_any` or `products_all`
   * in the cart for the discount to apply.
   *
   * Cannot be combined with either `quantity_min` or `quantity_max`.
   */
  quantityExact?: Maybe<Scalars['Int']['output']>;
  /**
   * If set, the pricing rule will apply to a maximum of this many items from
   * `products_any` or `products_all`.
   */
  quantityMax?: Maybe<Scalars['Int']['output']>;
  /**
   * If set, there must be at least this many items from `products_any` or `products_all`
   * in a cart for the discount to apply. See `quantity_exact`. Defaults to 0 if
   * `quantity_exact`, `quantity_min` and `quantity_max` are all unspecified.
   */
  quantityMin?: Maybe<Scalars['Int']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a Quick Amount in the Catalog.
 * Permissions: ITEMS_READ
 */
export type CatalogQuickAmount = {
  __typename?: 'CatalogQuickAmount';
  /** Represents the actual amount of the Quick Amount with Money type. */
  amount?: Maybe<Money>;
  /** The order in which this Quick Amount should be displayed. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /**
   * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100].
   * MANUAL type amount will always have score = 100.
   */
  score?: Maybe<Scalars['Int']['output']>;
  /** Represents the type of the Quick Amount. */
  type?: Maybe<CatalogQuickAmountType>;
};

/** Determines the type of a specific Quick Amount. */
export enum CatalogQuickAmountType {
  /** Quick Amount is generated automatically by machine learning algorithms. */
  QuickAmountTypeAuto = 'QUICK_AMOUNT_TYPE_AUTO',
  /** Quick Amount is created manually by the seller. */
  QuickAmountTypeManual = 'QUICK_AMOUNT_TYPE_MANUAL'
}

/**
 * A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
 * Permissions: ITEMS_READ
 */
export type CatalogQuickAmountsSettings = CatalogObject & {
  __typename?: 'CatalogQuickAmountsSettings';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** Represents a set of Quick Amounts at this location. */
  amounts?: Maybe<Array<Maybe<CatalogQuickAmount>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * Represents location's eligibility for auto amounts
   * The boolean should be consistent with whether there are AUTO amounts in the `amounts`.
   */
  eligibleForAutoAmounts?: Maybe<Scalars['Boolean']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** Represents the option seller currently uses on Quick Amounts. */
  option?: Maybe<CatalogQuickAmountsSettingsOption>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Determines a seller's option on Quick Amounts feature. */
export enum CatalogQuickAmountsSettingsOption {
  /** Option for seller to choose automatically created Quick Amounts. */
  Auto = 'AUTO',
  /** Option for seller to disable Quick Amounts. */
  Disabled = 'DISABLED',
  /** Option for seller to choose manually created Quick Amounts. */
  Manual = 'MANUAL'
}

/**
 * Catalog service charge
 *
 * Permissions:ORDERS_READ
 */
export type CatalogServiceCharge = {
  __typename?: 'CatalogServiceCharge';
  /** ID belonging to the service charge. */
  id: Scalars['ID']['output'];
};

/** CatalogSort is used for sorting the result for items query */
export enum CatalogSort {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/**
 * Represents the rule of conversion between a stockable CatalogItemVariation
 * and a non-stockable sell-by or receive-by `CatalogItemVariation` that
 * share the same underlying stock.
 * Permissions: ITEMS_READ
 */
export type CatalogStockConversion = {
  __typename?: 'CatalogStockConversion';
  /**
   * The converted equivalent quantity of the non-stockable CatalogItemVariation
   * in its measurement unit. The `stockable_quantity` value and this `nonstockable_quantity` value together
   * define the conversion ratio between stockable item variation and the non-stockable item variation.
   * It accepts a decimal number in a string format that can take up to 10 digits before the decimal point
   * and up to 5 digits after the decimal point.
   */
  nonstockableQuantity?: Maybe<Scalars['String']['output']>;
  /**
   * References to the stockable CatalogItemVariation
   * for this stock conversion. Selling, receiving or recounting the non-stockable `CatalogItemVariation`
   * defined with a stock conversion results in adjustments of this stockable `CatalogItemVariation`.
   * This immutable field must reference a stockable `CatalogItemVariation`
   * that shares the parent CatalogItem of the converted `CatalogItemVariation.`
   */
  stockableItemVariation?: Maybe<CatalogItemVariation>;
  /**
   * The quantity of the stockable item variation (as identified by `stockable_item_variation_id`)
   * equivalent to the non-stockable item variation quantity (as specified in `nonstockable_quantity`)
   * as defined by this stock conversion.  It accepts a decimal number in a string format that can take
   * up to 10 digits before the decimal point and up to 5 digits after the decimal point.
   */
  stockableQuantity?: Maybe<Scalars['String']['output']>;
};

/** Defines supported stock levels of the item inventory. */
export enum CatalogStockLevel {
  /** The item inventory is low. */
  Low = 'LOW',
  /** The item inventory is empty. */
  Out = 'OUT'
}

/** CatalogStringSetFilter is used for filtering a query with a string set or arrays */
export type CatalogStringSetFilter = {
  /** The values belonging to the query text filter. */
  value: Array<Scalars['String']['input']>;
};

/**
 * Describes a subscription plan.A subscription plan represents what you want to sell in a subscription model, and includes references to each of the associated subscription plan variations.
 * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 * Permissions: ITEMS_READ
 */
export type CatalogSubscriptionPlan = CatalogObject & {
  __typename?: 'CatalogSubscriptionPlan';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, all items in the merchant's catalog are subscribable by this SubscriptionPlan. */
  allItems?: Maybe<Scalars['Boolean']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** The list of IDs of `CatalogCategory` that are eligible for subscription by this SubscriptionPlan's variations. */
  eligibleCategories?: Maybe<Array<Maybe<CatalogCategory>>>;
  /** The list of IDs of `CatalogItems` that are eligible for subscription by this SubscriptionPlan's variations. */
  eligibleItems?: Maybe<Array<Maybe<CatalogItem>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The name of the plan. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * A list of SubscriptionPhase containing the SubscriptionPhase for this plan.
   * This field it required. Not including this field will throw a REQUIRED_FIELD_MISSING error
   */
  phases?: Maybe<Array<Maybe<SubscriptionPhase>>>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The list of subscription plan variations available for this product */
  subscriptionPlanVariations?: Maybe<Array<Maybe<CatalogSubscriptionPlanVariation>>>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Describes a subscription plan variation.A subscription plan variation represents how the subscription for a product or service is sold.
 * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 * Permissions: ITEMS_READ
 */
export type CatalogSubscriptionPlanVariation = CatalogObject & {
  __typename?: 'CatalogSubscriptionPlanVariation';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** Whether bills for this plan variation can be split for proration. */
  canProrate?: Maybe<Scalars['Boolean']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The day of the month the billing period starts. */
  monthlyBillingAnchorDate?: Maybe<Scalars['Int']['output']>;
  /** The name of the plan variation. */
  name?: Maybe<Scalars['String']['output']>;
  /** A list containing each SubscriptionPhase for this plan variation. */
  phases?: Maybe<Array<Maybe<SubscriptionPhase>>>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The id of the subscription plan, if there is one. */
  subscriptionPlan?: Maybe<CatalogSubscriptionPlan>;
  /**
   * The ID of a "successor" plan variation to this one. If the field is set, and this object is disabled at all
   * locations, it indicates that this variation is deprecated and the object identified by the successor ID be used in
   * its stead.
   */
  successorPlanVariation?: Maybe<CatalogSubscriptionPlanVariation>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A tax applicable to an item.
 * Permissions: ITEMS_READ
 */
export type CatalogTax = CatalogObject & {
  __typename?: 'CatalogTax';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
   * app that are not associated with a particular `CatalogItem`.
   */
  appliesToCustomAmounts?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of a `CatalogProductSet` object. If set, the tax is applicable to all products in the product set. */
  appliesToProductSet?: Maybe<CatalogProductSet>;
  /** Whether the tax is calculated based on a payment's subtotal or total. */
  calculationPhase?: Maybe<TaxCalculationPhase>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** Whether the tax is `ADDITIVE` or `INCLUSIVE`. */
  inclusionType?: Maybe<TaxInclusionType>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
   * A value of `7.5` corresponds to 7.5%. For a location-specific tax rate, contact the tax authority of the location or a tax consultant.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a time period - either a single period or a repeating period.
 * Permissions: ITEMS_READ
 */
export type CatalogTimePeriod = CatalogObject & {
  __typename?: 'CatalogTimePeriod';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An iCalendar (RFC 5545) [event](https://tools.ietf.org/html/rfc5545#section-3.6.1), which
   * specifies the name, timing, duration and recurrence of this time period.
   *
   * Example:
   *
   * ```
   * DTSTART:20190707T180000
   * DURATION:P2H
   * RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR
   * ```
   *
   * Only `SUMMARY`, `DTSTART`, `DURATION` and `RRULE` fields are supported.
   * `DTSTART` must be in local (unzoned) time format. Note that while `BEGIN:VEVENT`
   * and `END:VEVENT` is not required in the request. The response will always
   * include them.
   */
  event?: Maybe<Scalars['iCalendarEvent']['output']>;
  /** An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a '#' character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object. */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A node in the path from a retrieved category to its root node.
 * Permissions: ITEMS_READ
 */
export type CategoryPathToRootNode = {
  __typename?: 'CategoryPathToRootNode';
  /** The category's ID. */
  category?: Maybe<CatalogCategory>;
  /** The category's name. */
  categoryName?: Maybe<Scalars['String']['output']>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of credit card payment captures.
 */
export type ChargeDetails = {
  __typename?: 'ChargeDetails';
  /** ID of the payment for the charge. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ChargeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ChargeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment for the charge.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about Clearpay payments.
 */
export type ClearpayPaymentDetails = {
  __typename?: 'ClearpayPaymentDetails';
  /** Email address on the buyer's Clearpay account. */
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
};

/**
 * Input type used to specify filters on `ClearpayPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ClearpayPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `emailAddress` field:
   *
   * > Email address on the buyer's Clearpay account.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  emailAddress?: InputMaybe<EmailAddressFilterInput>;
};

/**
 * Indicates the country associated with another entity, such as a business.
 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export enum Country {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antartica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos Islands */
  Cc = 'CC',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Federated States of Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Democratic People's Republic of Korea */
  Kp = 'KP',
  /** Republic of Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/**
 * Indicates the country associated with another entity, such as a business.
 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export enum CountryCode {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antartica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos Islands */
  Cc = 'CC',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Federated States of Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Democratic People's Republic of Korea */
  Kp = 'KP',
  /** Republic of Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Test country. */
  Xt = 'XT',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/**
 * Input type used to specify filters on `CountryCode` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CountryCodeFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CountryCodeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CountryCodeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CountryCodeFilterInput>;
};

/**
 * Indicates the country associated with another entity, such as a business.
 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export enum CountryCodeInput {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antartica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos Islands */
  Cc = 'CC',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Federated States of Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Democratic People's Republic of Korea */
  Kp = 'KP',
  /** Republic of Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Test country. */
  Xt = 'XT',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/**
 * Input type used to specify filters on `Country` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CountryFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CountryFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CountryInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CountryFilterInput>;
};

/**
 * Indicates the country associated with another entity, such as a business.
 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export enum CountryInput {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antartica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos Islands */
  Cc = 'CC',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Federated States of Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Democratic People's Republic of Korea */
  Kp = 'KP',
  /** Republic of Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/**
 * Input type used to specify filters on elements of a `[Country]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CountryListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CountryListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CountryListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CountryListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<CountryInput>>;
};

/**
 * Input type used to specify filters on `[Country]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CountryListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CountryListFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CountryListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CountryListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<CountryListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CountryListFilterInput>;
};

/**
 * Indicates the associated currency for an amount of money.Values correspond
 * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
 */
export enum Currency {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byr = 'BYR',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Chinese yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de Valor Real */
  Cou = 'COU',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verdean escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Lithuanian litas */
  Ltl = 'LTL',
  /** Latvian lats */
  Lvl = 'LVL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mro = 'MRO',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican Unidad de Inversion */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean first leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Std = 'STD',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikstani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan pa'anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** Unknown currency */
  UnknownCurrency = 'UNKNOWN_CURRENCY',
  /** United States dollar */
  Usd = 'USD',
  /** United States dollar (next day) */
  Usn = 'USN',
  /** United States dollar (same day) */
  Uss = 'USS',
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi = 'UYI',
  /** Uruguyan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Vef = 'VEF',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** Special drawing rights (International Monetary Fund) */
  Xdr = 'XDR',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Code reserved for testing */
  Xts = 'XTS',
  /** USD Coin */
  Xus = 'XUS',
  /** No currency */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmk = 'ZMK',
  /** Zambian kwacha */
  Zmw = 'ZMW'
}

/**
 * Indicates the associated currency for an amount of money.Values correspond
 * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byr = 'BYR',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Chinese yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de Valor Real */
  Cou = 'COU',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verdean escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Lithuanian litas */
  Ltl = 'LTL',
  /** Latvian lats */
  Lvl = 'LVL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mro = 'MRO',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican Unidad de Inversion */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean first leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Std = 'STD',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikstani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan pa'anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** United States dollar (next day) */
  Usn = 'USN',
  /** United States dollar (same day) */
  Uss = 'USS',
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi = 'UYI',
  /** Uruguyan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Vef = 'VEF',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** Special drawing rights (International Monetary Fund) */
  Xdr = 'XDR',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Code reserved for testing */
  Xts = 'XTS',
  /** USD Coin */
  Xus = 'XUS',
  /** No currency */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmk = 'ZMK',
  /** Zambian kwacha */
  Zmw = 'ZMW'
}

/**
 * Input type used to specify filters on `CurrencyCode` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CurrencyCodeFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyCodeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CurrencyCodeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CurrencyCodeFilterInput>;
};

/**
 * Indicates the associated currency for an amount of money. Values correspond to
 * [ISO 4217](https://wikipedia.org/wiki/ISO_4217), with the exception of BTC (Bitcoin).
 */
export enum CurrencyCodeInput {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byr = 'BYR',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Chinese yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de Valor Real */
  Cou = 'COU',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verdean escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Lithuanian litas */
  Ltl = 'LTL',
  /** Latvian lats */
  Lvl = 'LVL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mro = 'MRO',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican Unidad de Inversion */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Std = 'STD',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikstani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan pa'anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** United States dollar (next day) */
  Usn = 'USN',
  /** United States dollar (same day) */
  Uss = 'USS',
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi = 'UYI',
  /** Uruguyan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Vef = 'VEF',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** Special drawing rights (International Monetary Fund) */
  Xdr = 'XDR',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Code reserved for testing */
  Xts = 'XTS',
  /** USD Coin */
  Xus = 'XUS',
  /** No currency */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmk = 'ZMK',
  /** Zambian kwacha */
  Zmw = 'ZMW'
}

/**
 * Input type used to specify filters on elements of a `[CurrencyCode]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CurrencyCodeListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CurrencyCodeListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CurrencyCodeListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyCodeListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<CurrencyCodeInput>>;
};

/**
 * Input type used to specify filters on `[CurrencyCode]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CurrencyCodeListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CurrencyCodeListFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CurrencyCodeListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyCodeListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<CurrencyCodeListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CurrencyCodeListFilterInput>;
};

/**
 * Input type used to specify filters on `Currency` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type CurrencyFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Currency>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<CurrencyFilter>;
};

/**
 * Indicates the associated currency for an amount of money.
 *
 * Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
 */
export enum CurrencyInput {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byr = 'BYR',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Chinese yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de Valor Real */
  Cou = 'COU',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verdean escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Lithuanian litas */
  Ltl = 'LTL',
  /** Latvian lats */
  Lvl = 'LVL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mro = 'MRO',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican Unidad de Inversion */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Std = 'STD',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikstani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan pa'anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** Unknown currency */
  UnknownCurrency = 'UNKNOWN_CURRENCY',
  /** United States dollar */
  Usd = 'USD',
  /** United States dollar (next day) */
  Usn = 'USN',
  /** United States dollar (same day) */
  Uss = 'USS',
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi = 'UYI',
  /** Uruguyan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Vef = 'VEF',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** Special drawing rights (International Monetary Fund) */
  Xdr = 'XDR',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Code reserved for testing */
  Xts = 'XTS',
  /** USD Coin */
  Xus = 'XUS',
  /** No currency */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmk = 'ZMK',
  /** Zambian kwacha */
  Zmw = 'ZMW'
}

/**
 * Input type used to specify filters on elements of a `[Currency]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CurrencyListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CurrencyListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CurrencyListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Currency>>;
};

/**
 * Input type used to specify filters on `[Currency]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type CurrencyListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `CurrencyListFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<CurrencyListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<CurrencyListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<CurrencyListFilterInput>;
};

/** The filtering criteria for the query for CustomerCustomAttributeDefinitions. */
export type CustomAttributeDefinitionFilterInput = {
  /**
   * The key of the custom attribute definition to retrieve.
   * If the requesting application is not the definition owner, you must use the qualified key.
   */
  key?: InputMaybe<Scalars['String']['input']>;
  /** A filter to select customers by their owning merchant. */
  merchantId: BasicIdFilter;
};

/**
 * The level of permission that a seller or other applications requires to
 * view this custom attribute definition.The `Visibility` field controls who can read and write the custom attribute values
 * and custom attribute definition.
 */
export enum CustomAttributeDefinitionVisibility {
  /**
   * The custom attribute definition and values are hidden from the seller (except on export
   * of all seller data) and other developers.
   */
  VisibilityHidden = 'VISIBILITY_HIDDEN',
  /**
   * The seller and other developers can read the custom attribute definition and values
   * on resources.
   */
  VisibilityReadOnly = 'VISIBILITY_READ_ONLY',
  /**
   * The seller and other developers can read the custom attribute definition,
   * and can read and write values on resources. A custom attribute definition
   * can only be edited or deleted by the application that created it.
   */
  VisibilityReadWriteValues = 'VISIBILITY_READ_WRITE_VALUES'
}

/**
 * References to Customers subgraph entities
 *
 * Permissions:CUSTOMERS_READ
 */
export type Customer = {
  __typename?: 'Customer';
  /** The physical address associated with the customer profile. */
  address?: Maybe<Address>;
  /**
   * The birthday associated with the customer profile, in `YYYY-MM-DD` format. For example, `1998-09-21`
   * represents September 21, 1998, and `0000-09-21` represents September 21 (without a birth year).
   */
  birthday?: Maybe<Scalars['String']['output']>;
  /** A business name associated with the customer profile. */
  companyName?: Maybe<Scalars['String']['output']>;
  /**
   * The timestamp when the customer profile was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The method used to create the customer profile. */
  creationSource?: Maybe<CustomerCreationSource>;
  /** A list of custom attributes associated with the customer. */
  customAttributes?: Maybe<Array<Maybe<CustomerCustomAttribute>>>;
  /** The email address associated with the customer profile. */
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
  /** The family name (that is, the last name) associated with the customer profile. */
  familyName?: Maybe<Scalars['String']['output']>;
  /** The given name (that is, the first name) associated with the customer profile. */
  givenName?: Maybe<Scalars['String']['output']>;
  /** The IDs of customer groups the customer belongs to. */
  groupIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The Square-issued ID of the customer. */
  id: Scalars['ID']['output'];
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A nickname for the customer profile. */
  nickname?: Maybe<Scalars['String']['output']>;
  /** A custom note associated with the customer profile. */
  note?: Maybe<Scalars['String']['output']>;
  /** The phone number associated with the customer profile. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Represents general customer preferences. */
  preferences?: Maybe<CustomerPreferences>;
  /**
   * An optional second ID used to associate the customer profile with an
   * entity in another system.
   */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** The IDs of customer segments the customer belongs to. */
  segmentIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The tax ID associated with the customer profile. This field is present only for customers of sellers in EU countries or the United Kingdom.
   * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: Maybe<CustomerTaxIds>;
  /**
   * The timestamp when the customer profile was last updated, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file. */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * A list of Customer.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** List of Customer. */
  nodes: Array<Customer>;
  /** Provides pagination-related information. */
  pageInfo?: Maybe<PageInfo>;
};

/** Indicates the method used to create the customer profile. */
export enum CustomerCreationSource {
  /**
   * The customer profile was created automatically when an appointment
   * was scheduled.
   */
  Appointments = 'APPOINTMENTS',
  /**
   * The customer profile was created automatically when a coupon was issued
   * using Square Point of Sale.
   */
  Coupon = 'COUPON',
  /**
   * The customer profile was restored through Square's deletion recovery
   * process.
   */
  DeletionRecovery = 'DELETION_RECOVERY',
  /**
   * The customer profile was created manually through Square Seller Dashboard or the
   * Point of Sale application.
   */
  Directory = 'DIRECTORY',
  /**
   * The customer profile was created automatically when a gift card was
   * issued using Square Point of Sale. Customer profiles are created for
   * both the buyer and the recipient of the gift card.
   */
  Egifting = 'EGIFTING',
  /**
   * The customer profile was created through Square Point of Sale when
   * signing up for marketing emails during checkout.
   */
  EmailCollection = 'EMAIL_COLLECTION',
  /**
   * The customer profile was created automatically when providing feedback
   * through a digital receipt.
   */
  Feedback = 'FEEDBACK',
  /**
   * The customer profile was created automatically when importing customer
   * data through Square Seller Dashboard.
   */
  Import = 'IMPORT',
  /**
   * The customer profile was created automatically as the result of a successful
   * transaction that did not explicitly link to an existing customer profile.
   */
  InstantProfile = 'INSTANT_PROFILE',
  /** The customer profile was created automatically during an invoice payment. */
  Invoices = 'INVOICES',
  /**
   * The customer profile was created automatically when customers provide a
   * phone number for loyalty reward programs during checkout.
   */
  Loyalty = 'LOYALTY',
  /**
   * The customer profile was created as the result of a campaign managed
   * through Square’s Facebook integration.
   */
  Marketing = 'MARKETING',
  /**
   * The customer profile was created as the result of explicitly merging
   * multiple customer profiles through the Square Seller Dashboard or the Point of
   * Sale application.
   */
  Merge = 'MERGE',
  /**
   * The customer profile was created through Square's Online Store solution
   * (legacy service).
   */
  OnlineStore = 'ONLINE_STORE',
  /**
   * The default creation source. This source is typically used for backward/future
   * compatibility when the original source of a customer profile is
   * unrecognized. For example, when older clients do not support newer
   * source types.
   */
  Other = 'OTHER',
  /** The customer profile was created through Square's Virtual Terminal. */
  Terminal = 'TERMINAL',
  /** The customer profile was created through a Square API call. */
  ThirdParty = 'THIRD_PARTY',
  /**
   * The customer profile was created by a third-party product and imported
   * through an official integration.
   */
  ThirdPartyImport = 'THIRD_PARTY_IMPORT',
  /**
   * The customer profile was restored through Square's unmerge recovery
   * process.
   */
  UnmergeRecovery = 'UNMERGE_RECOVERY'
}

/**
 * A custom attribute value.Each custom attribute value has a corresponding
 * `CustomAttributeDefinition` object.
 * Permissions: CUSTOMERS_READ
 */
export type CustomerCustomAttribute = {
  __typename?: 'CustomerCustomAttribute';
  /**
   * The timestamp that indicates when the custom attribute was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['String']['output']>;
  /**
   * A copy of the associated custom attribute definition object. This field is only set when
   * the optional field is specified on the request.
   */
  definition?: Maybe<CustomerCustomAttributeDefinition>;
  /**
   * The identifier
   * of the custom attribute definition and its corresponding custom attributes. This value
   * can be a simple key, which is the key that is provided when the custom attribute definition
   * is created, or a qualified key, if the requesting
   * application is not the definition owner. The qualified key consists of the application ID
   * of the custom attribute definition owner
   * followed by the simple key that was provided when the definition was created. It has the
   * format application_id:simple key.
   *
   * The value for a simple key can contain up to 60 alphanumeric characters, periods (.),
   * underscores (_), and hyphens (-).
   */
  key?: Maybe<Scalars['String']['output']>;
  /**
   * The timestamp that indicates when the custom attribute was created or was most recently
   * updated, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /**
   * The value assigned to the custom attribute. It is validated against the custom
   * attribute definition's schema on write operations. For more information about custom
   * attribute values,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview).
   */
  value?: Maybe<CustomerCustomAttributeValueUnion>;
  /**
   * Read only. The current version of the custom attribute. This field is incremented when the custom attribute is changed.
   * When updating an existing custom attribute value, you can provide this field
   * and specify the current version of the custom attribute to enable
   * [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency).
   * This field can also be used to enforce strong consistency for reads. For more information about strong consistency for reads,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview).
   */
  version?: Maybe<Scalars['Int']['output']>;
  /** A copy of the `visibility` field value for the associated custom attribute definition. */
  visibility?: Maybe<CustomAttributeDefinitionVisibility>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is Address.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeAddress = {
  __typename?: 'CustomerCustomAttributeAddress';
  /** An Address object as defined by [Square's Connect API](https://developer.squareup.com/reference/square_2021-07-21/objects/Address) */
  value?: Maybe<Scalars['JSON']['output']>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is Boolean.
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeBoolean = {
  __typename?: 'CustomerCustomAttributeBoolean';
  /** A true or false value. */
  value?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is Date.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeDate = {
  __typename?: 'CustomerCustomAttributeDate';
  /** Contains A date in the ISO 8601 format. */
  value?: Maybe<Scalars['Date']['output']>;
};

/**
 * Represents a definition for custom attribute values.A custom attribute definition
 * specifies the key, visibility, schema, and other properties for a custom attribute.
 * Permissions: CUSTOMERS_READ
 */
export type CustomerCustomAttributeDefinition = {
  __typename?: 'CustomerCustomAttributeDefinition';
  /**
   * The timestamp that indicates when the custom attribute definition was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['String']['output']>;
  /**
   * Seller-oriented description of the custom attribute definition, including any constraints
   * that the seller should observe. May be displayed as a tooltip in Square UIs. This field is
   * required if the `visibility` field is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The identifier
   * of the custom attribute definition and its corresponding custom attributes. This value
   * can be a simple key, which is the key that is provided when the custom attribute definition
   * is created, or a qualified key, if the requesting
   * application is not the definition owner. The qualified key consists of the application ID
   * of the custom attribute definition owner
   * followed by the simple key that was provided when the definition was created. It has the
   * format application_id:simple key.
   *
   * The value for a simple key can contain up to 60 alphanumeric characters, periods (.),
   * underscores (_), and hyphens (-).
   *
   * This field can not be changed
   * after the custom attribute definition is created. This field is required when creating
   * a definition and must be unique per application, seller, and resource type.
   */
  key?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the custom attribute definition for API and seller-facing UI purposes. The name must
   * be unique within the seller and application pair. This field is required if the
   * `visibility` field is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The JSON schema for the custom attribute definition, which determines the data type of the corresponding custom attributes. For more information,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview). This field is required when creating a definition.
   */
  schema?: Maybe<Scalars['JSON']['output']>;
  /**
   * The timestamp that indicates when the custom attribute definition was created or most recently updated,
   * in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /**
   * Read only. The current version of the custom attribute definition.
   * The value is incremented each time the custom attribute definition is updated.
   * When updating a custom attribute definition, you can provide this field
   * and specify the current version of the custom attribute definition to enable
   * [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency).
   *
   * On writes, this field must be set to the latest version. Stale writes are rejected.
   *
   * This field can also be used to enforce strong consistency for reads. For more information about strong consistency for reads,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview).
   */
  version?: Maybe<Scalars['Int']['output']>;
  /**
   * Specifies how the custom attribute definition and its values should be shared with
   * the seller and other applications. If no value is specified, the value defaults to `VISIBILITY_HIDDEN`.
   */
  visibility?: Maybe<CustomAttributeDefinitionVisibility>;
};

/**
 * Lists the customer custom attributes definitions that belong to a Square seller account.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeDefinitionConnection = {
  __typename?: 'CustomerCustomAttributeDefinitionConnection';
  /** List of CustomAttributeDefinition. */
  nodes: Array<CustomerCustomAttributeDefinition>;
  /** Provides pagination-related information. */
  pageInfo?: Maybe<PageInfo>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is EmailAddress.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeEmailAddress = {
  __typename?: 'CustomerCustomAttributeEmailAddress';
  /** Contains An email address. Emails must use ascii characters and match the [HTML5 Email RegEx](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation). */
  value?: Maybe<Scalars['EmailAddress']['output']>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is Number.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeNumber = {
  __typename?: 'CustomerCustomAttributeNumber';
  /** Contains a string representation of a decimal number, using a . as the decimal separator. */
  value?: Maybe<Scalars['Decimal']['output']>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is PhoneNumber.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributePhoneNumber = {
  __typename?: 'CustomerCustomAttributePhoneNumber';
  /** Contains a phone number in the standard E.164 format. */
  value?: Maybe<Scalars['PhoneNumber']['output']>;
};

/**
 * Provides information when CustomerCustomAttributeValue.value is Selection.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeSelection = {
  __typename?: 'CustomerCustomAttributeSelection';
  /** One or more choices from allowed_selections. */
  value?: Maybe<Scalars['JSON']['output']>;
};

/**
 * An instance of a custom attribute.
 *
 * Permissions:CUSTOMERS_READ
 */
export type CustomerCustomAttributeString = {
  __typename?: 'CustomerCustomAttributeString';
  /** The string value of the custom attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Provides information for CatalogCustomAttributeValue.value. */
export type CustomerCustomAttributeValueUnion = CustomerCustomAttributeAddress | CustomerCustomAttributeBoolean | CustomerCustomAttributeDate | CustomerCustomAttributeEmailAddress | CustomerCustomAttributeNumber | CustomerCustomAttributePhoneNumber | CustomerCustomAttributeSelection | CustomerCustomAttributeString;

/**
 * The filtering criteria for the query. A query can contain multiple filters in any combination.
 * Multiple filters are combined as `AND` statements.
 *
 * Note: Combining multiple filters as `OR` statements is not supported. Instead, send multiple single-filter
 * searches and join the result sets.
 */
export type CustomerFilter = {
  /** A filter to select customers based on when they were created. */
  createdAt?: InputMaybe<TimeRangeFilter>;
  /** A filter to select customers by their email address visible to the seller. This filter is case-insensitive. */
  email?: InputMaybe<CustomerTextFilter>;
  /**
   * This filter cannot be used in conjunction with email or createdAt filters.
   * The number of customer_ids passed through this filter must be lower than 20.
   */
  id?: InputMaybe<BasicIdFilter>;
  /** A filter to select customers by their owning merchant. */
  merchantId: BasicIdFilter;
  /** A full text search query to apply to the search. This could contain names, emails, and phones */
  text?: InputMaybe<BasicTextFilter>;
};

/**
 * Represents communication preferences for the customer profile.
 * Permissions: CUSTOMERS_READ
 */
export type CustomerPreferences = {
  __typename?: 'CustomerPreferences';
  /** Indicates whether the customer has unsubscribed from marketing campaign emails. A value of `true` means that the customer chose to opt out of email marketing from the current Square seller or from all Square sellers. This value is read-only from the Customers API. */
  emailUnsubscribed?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Represents the tax ID associated with a customer profile.The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.
 * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
 * Permissions: CUSTOMERS_READ
 */
export type CustomerTaxIds = {
  __typename?: 'CustomerTaxIds';
  /** The EU VAT identification number for the customer. For example, `IE3426675K`. The ID can contain alphanumeric characters only. */
  euVat?: Maybe<Scalars['String']['output']>;
};

/**
 * A filter to select customers based on exact matching of customer attributes
 * against a specified query.
 */
export type CustomerTextFilter = {
  /** Use the exact filter to select customers whose attributes match exactly the specified query. */
  exact?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Input type used to specify filters on `Date` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DateFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DateFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<DateFilterInput>;
};

/**
 * Input type offered when grouping on `Date` fields, representing the amount of offset
 * (positive or negative) to shift the `Date` boundaries of each grouping bucket.
 *
 * For example, when grouping by `WEEK`, you can shift by 1 day to change
 * what day-of-week weeks are considered to start on.
 */
export type DateGroupingOffsetInput = {
  /** Number (positive or negative) of the given `unit` to offset the boundaries of the `Date` groupings. */
  amount: Scalars['Int']['input'];
  /** Unit of offsetting to apply to the boundaries of the `Date` groupings. */
  unit: DateUnitInput;
};

/** Enumerates the supported truncation units of a `Date`. */
export enum DateGroupingTruncationUnitInput {
  /** The exact day of a `Date`. */
  Day = 'DAY',
  /** The month a `Date` falls in. */
  Month = 'MONTH',
  /** The quarter a `Date` falls in. */
  Quarter = 'QUARTER',
  /** The week, beginning on Monday, a `Date` falls in. */
  Week = 'WEEK',
  /** The year a `Date` falls in. */
  Year = 'YEAR'
}

/** Input type used to specify filters on DateRange. */
export type DateRangeFilter = {
  /** A string in YYYY-MM-DD format, such as 2017-10-31, per the ISO 8601 extended format for calendar dates. The end of a date range (inclusive). */
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** A string in YYYY-MM-DD format, such as 2017-10-31, per the ISO 8601 extended format for calendar dates. The beginning of a date range (inclusive). */
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

/** A return type used from aggregations to provided aggregated values over `DateTime` fields. */
export type DateTimeAggregatedValues = {
  __typename?: 'DateTimeAggregatedValues';
  /**
   * The average (mean) of the field values within this grouping.
   * The returned value will be rounded to the nearest `DateTime` value.
   */
  approximateAvg?: Maybe<Scalars['DateTime']['output']>;
  /**
   * An approximation of the number of unique values for this field within this grouping.
   *
   * The approximation uses the HyperLogLog++ algorithm from the [HyperLogLog in
   * Practice](https://research.google.com/pubs/archive/40671.pdf)
   * paper. The accuracy of the returned value varies based on the specific dataset, but
   * it usually differs from the true distinct value count by less than 7%.
   */
  approximateDistinctValueCount?: Maybe<Scalars['JsonSafeLong']['output']>;
  /**
   * The maximum of the field values within this grouping.
   *
   * So long as the grouping contains at least one non-null value for the
   * underlying indexed field, this will return an exact non-null value.
   */
  exactMax?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The minimum of the field values within this grouping.
   *
   * So long as the grouping contains at least one non-null value for the
   * underlying indexed field, this will return an exact non-null value.
   */
  exactMin?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Input type used to specify filters on `DateTime` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DateTimeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DateTimeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<DateTimeFilter>;
  /** Matches records based on the time-of-day of the `DateTime` values. */
  timeOfDay?: InputMaybe<DateTimeTimeOfDayFilter>;
};

/**
 * Input type used to specify filters on `DateTime` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DateTimeFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DateTimeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<DateTimeFilterInput>;
  /** Matches records based on the time-of-day of the `DateTime` values. */
  timeOfDay?: InputMaybe<DateTimeTimeOfDayFilterInput>;
};

/** Allows for grouping `DateTime` values based on the desired return type. */
export type DateTimeGroupedBy = {
  __typename?: 'DateTimeGroupedBy';
  /** An alternative to `asDateTime` for when grouping on just the date is desired. */
  asDate?: Maybe<Scalars['Date']['output']>;
  /** Used when grouping on the full `DateTime` value. */
  asDateTime?: Maybe<Scalars['DateTime']['output']>;
  /** An alternative to `asDateTime` for when grouping on the day-of-week is desired. */
  asDayOfWeek?: Maybe<DayOfWeek>;
  /** An alternative to `asDateTime` for when grouping on just the time-of-day is desired. */
  asTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
};


/** Allows for grouping `DateTime` values based on the desired return type. */
export type DateTimeGroupedByAsDateArgs = {
  offset?: InputMaybe<DateGroupingOffsetInput>;
  timeZone?: Scalars['TimeZone']['input'];
  truncationUnit: DateGroupingTruncationUnitInput;
};


/** Allows for grouping `DateTime` values based on the desired return type. */
export type DateTimeGroupedByAsDateTimeArgs = {
  offset?: InputMaybe<DateTimeGroupingOffsetInput>;
  timeZone?: Scalars['TimeZone']['input'];
  truncationUnit: DateTimeGroupingTruncationUnitInput;
};


/** Allows for grouping `DateTime` values based on the desired return type. */
export type DateTimeGroupedByAsDayOfWeekArgs = {
  offset?: InputMaybe<DayOfWeekGroupingOffsetInput>;
  timeZone?: Scalars['TimeZone']['input'];
};


/** Allows for grouping `DateTime` values based on the desired return type. */
export type DateTimeGroupedByAsTimeOfDayArgs = {
  offset?: InputMaybe<LocalTimeGroupingOffsetInput>;
  timeZone?: Scalars['TimeZone']['input'];
  truncationUnit: LocalTimeGroupingTruncationUnitInput;
};

/**
 * Input type offered when grouping on `DateTime` fields, representing the amount of offset
 * (positive or negative) to shift the `DateTime` boundaries of each grouping bucket.
 *
 * For example, when grouping by `WEEK`, you can shift by 24 hours to change
 * what day-of-week weeks are considered to start on.
 */
export type DateTimeGroupingOffset = {
  /** Number (positive or negative) of the given `unit` to offset the boundaries of the `DateTime` groupings. */
  amount: Scalars['Int']['input'];
  /** Unit of offsetting to apply to the boundaries of the `DateTime` groupings. */
  unit: DateTimeUnit;
};

/**
 * Input type offered when grouping on `DateTime` fields, representing the amount of offset
 * (positive or negative) to shift the `DateTime` boundaries of each grouping bucket.
 *
 * For example, when grouping by `WEEK`, you can shift by 1 day to change
 * what day-of-week weeks are considered to start on.
 */
export type DateTimeGroupingOffsetInput = {
  /** Number (positive or negative) of the given `unit` to offset the boundaries of the `DateTime` groupings. */
  amount: Scalars['Int']['input'];
  /** Unit of offsetting to apply to the boundaries of the `DateTime` groupings. */
  unit: DateTimeUnit;
};

/** Enumerates the supported truncation units of a `DateTime`. */
export enum DateTimeGroupingTruncationUnitInput {
  /** The day a `DateTime` falls in. */
  Day = 'DAY',
  /** The hour a `DateTime` falls in. */
  Hour = 'HOUR',
  /** The minute a `DateTime` falls in. */
  Minute = 'MINUTE',
  /** The month a `DateTime` falls in. */
  Month = 'MONTH',
  /** The quarter a `DateTime` falls in. */
  Quarter = 'QUARTER',
  /** The second a `DateTime` falls in. */
  Second = 'SECOND',
  /** The week, beginning on Monday, a `DateTime` falls in. */
  Week = 'WEEK',
  /** The year a `DateTime` falls in. */
  Year = 'YEAR'
}

/**
 * Input type used to specify filters on elements of a `[DateTime]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type DateTimeListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `DateTimeListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<DateTimeListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<DateTimeListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records based on the time-of-day of the `DateTime` values.
   *
   * When `null` is passed, matches all documents.
   */
  timeOfDay?: InputMaybe<DateTimeTimeOfDayFilter>;
};

/**
 * Input type used to specify filters on `[DateTime]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type DateTimeListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `DateTimeListFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<DateTimeListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<DateTimeListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<DateTimeListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<DateTimeListFilterInput>;
};

/**
 * Input type used to specify filters on the time-of-day of `DateTime` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DateTimeTimeOfDayFilter = {
  /**
   * Matches records where the time of day of the `DateTime` field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['LocalTime']['input']>>;
  /**
   * Matches records where the time of day of the `DateTime` field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['LocalTime']['input']>;
  /** TimeZone to use when comparing the `DateTime` values against the provided `LocalTime` values. */
  timeZone?: Scalars['TimeZone']['input'];
};

/**
 * Input type used to specify filters on the time-of-day of `DateTime` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DateTimeTimeOfDayFilterInput = {
  /**
   * Matches records where the time of day of the `DateTime` field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['LocalTime']['input']>>;
  /**
   * Matches records where the time of day of the `DateTime` field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['LocalTime']['input']>;
  /** TimeZone to use when comparing the `DateTime` values against the provided `LocalTime` values. */
  timeZone?: Scalars['TimeZone']['input'];
};

/** Enumeration of `DateTime` units. */
export enum DateTimeUnit {
  /** The time period of a full rotation of the Earth with respect to the Sun. */
  Day = 'DAY',
  /** 1/24th of a day. */
  Hour = 'HOUR',
  /** 1/1000th of a second. */
  Millisecond = 'MILLISECOND',
  /** 1/60th of an hour. */
  Minute = 'MINUTE',
  /** 1/60th of a minute. */
  Second = 'SECOND'
}

/** Enumeration of `Date` units. */
export enum DateUnitInput {
  /** The time period of a full rotation of the Earth with respect to the Sun. */
  Day = 'DAY'
}

/** Indicates the specific day of the week. */
export enum DayOfWeek {
  /** Friday. */
  Fri = 'FRI',
  /** Monday. */
  Mon = 'MON',
  /** Saturday. */
  Sat = 'SAT',
  /** Sunday. */
  Sun = 'SUN',
  /** Thursday. */
  Thu = 'THU',
  /** Tuesday. */
  Tue = 'TUE',
  /** Wednesday. */
  Wed = 'WED'
}

/**
 * Input type offered when grouping on `DayOfWeek` fields, representing the amount of offset
 * (positive or negative) to shift the `DayOfWeek` boundaries of each grouping bucket.
 *
 * For example, you can apply an offset of -2 hours to shift `DateTime` values to the prior `DayOfWeek`
 * when they fall between midnight and 2 AM.
 */
export type DayOfWeekGroupingOffsetInput = {
  /** Number (positive or negative) of the given `unit` to offset the boundaries of the `DayOfWeek` groupings. */
  amount: Scalars['Int']['input'];
  /** Unit of offsetting to apply to the boundaries of the `DayOfWeek` groupings. */
  unit: DateTimeUnit;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any fees involved with deposits such as for instant deposits.
 */
export type DepositFeeDetails = {
  __typename?: 'DepositFeeDetails';
  /** ID of the payout associated with the deposit fee. */
  payoutId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `DepositFeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DepositFeeDetailsFilterInput = {
  /**
   * Used to filter on the `payoutId` field:
   *
   * > ID of the payout associated with the deposit fee.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  payoutId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any reversal or refund of fees involved with deposits such as for instant deposits.
 */
export type DepositFeeReversedDetails = {
  __typename?: 'DepositFeeReversedDetails';
  /** ID of the payout associated with the reversed deposit fee. */
  payoutId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `DepositFeeReversedDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DepositFeeReversedDetailsFilterInput = {
  /**
   * Used to filter on the `payoutId` field:
   *
   * > ID of the payout associated with the reversed deposit fee.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  payoutId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Information about the banking destination (such as a bank account, Square
 * checking account, or debit card) against which the payout was made.
 */
export type Destination = {
  __typename?: 'Destination';
  /** Square issued unique ID (also known as the instrument ID) associated with this destination. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Type of the destination such as a bank account or debit card. */
  type?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `Destination` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DestinationFilterInput = {
  /**
   * Used to filter on the `id` field:
   *
   * > Square issued unique ID (also known as the instrument ID) associated with this destination.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  id?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `type` field:
   *
   * > Type of the destination such as a bank account or debit card.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<StringFilterInput>;
};

/** The brand used for a `WALLET` payment. */
export enum DigitalWalletPaymentBrand {
  Alipay = 'ALIPAY',
  AuPay = 'AU_PAY',
  CashApp = 'CASH_APP',
  DBarai = 'D_BARAI',
  Merpay = 'MERPAY',
  Paypay = 'PAYPAY',
  RakutenPay = 'RAKUTEN_PAY',
  Unknown = 'UNKNOWN',
  WechatPay = 'WECHAT_PAY'
}

/**
 * Input type used to specify filters on `DigitalWalletPaymentBrand` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type DigitalWalletPaymentBrandFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `DigitalWalletPaymentBrandFilterInput` input because
   * of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<DigitalWalletPaymentBrandFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<DigitalWalletPaymentBrandFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<DigitalWalletPaymentBrandInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<DigitalWalletPaymentBrandFilterInput>;
};

/** The brand used for a `WALLET` payment. */
export enum DigitalWalletPaymentBrandInput {
  Alipay = 'ALIPAY',
  AuPay = 'AU_PAY',
  CashApp = 'CASH_APP',
  DBarai = 'D_BARAI',
  Merpay = 'MERPAY',
  Paypay = 'PAYPAY',
  RakutenPay = 'RAKUTEN_PAY',
  Unknown = 'UNKNOWN',
  WechatPay = 'WECHAT_PAY'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about `WALLET` type payments. Contains only non-confidential information.
 */
export type DigitalWalletPaymentDetails = {
  __typename?: 'DigitalWalletPaymentDetails';
  /** The brand used for the `WALLET` payment. */
  brand?: Maybe<DigitalWalletPaymentBrand>;
  /** Brand-specific details for payments with the `brand` of `CASH_APP`. */
  cashAppDetails?: Maybe<CashAppPaymentDetails>;
  /** The status of the `WALLET` payment. */
  status?: Maybe<DigitalWalletPaymentStatus>;
};

/**
 * Input type used to specify filters on `DigitalWalletPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type DigitalWalletPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `brand` field:
   *
   * > The brand used for the `WALLET` payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  brand?: InputMaybe<DigitalWalletPaymentBrandFilterInput>;
  /**
   * Used to filter on the `cashAppDetails` field:
   *
   * > Brand-specific details for payments with the `brand` of `CASH_APP`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  cashAppDetails?: InputMaybe<CashAppPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `status` field:
   *
   * > The status of the `WALLET` payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  status?: InputMaybe<DigitalWalletPaymentStatusFilterInput>;
};

/** The status of a `WALLET` payment. */
export enum DigitalWalletPaymentStatus {
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Voided = 'VOIDED'
}

/**
 * Input type used to specify filters on `DigitalWalletPaymentStatus` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type DigitalWalletPaymentStatusFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `DigitalWalletPaymentStatusFilterInput` input because
   * of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<DigitalWalletPaymentStatusFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<DigitalWalletPaymentStatusFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<DigitalWalletPaymentStatusInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<DigitalWalletPaymentStatusFilterInput>;
};

/** The status of a `WALLET` payment. */
export enum DigitalWalletPaymentStatusInput {
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Voided = 'VOIDED'
}

/**
 * Discount code belonging to the order.
 *
 * Permissions:ORDERS_READ
 */
export type DiscountCode = {
  __typename?: 'DiscountCode';
  /** The identifier of the Discount Code. */
  id: Scalars['ID']['output'];
  /** The ID of the pricing rule corresponding to this discount code. */
  pricingRuleId?: Maybe<Scalars['ID']['output']>;
  /** The number of instances of the Discount Code. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any balance change due to a dispute event.
 */
export type DisputeDetails = {
  __typename?: 'DisputeDetails';
  /** ID of the payment involved in the dispute. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `DisputeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type DisputeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment involved in the dispute.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** Enumerates the supported distance units. */
export enum DistanceUnitInput {
  /** A metric system unit equal to 1/100th of a meter. */
  Centimeter = 'CENTIMETER',
  /** A United States customary unit of 12 inches. */
  Foot = 'FOOT',
  /** A United States customary unit equal to 1/12th of a foot. */
  Inch = 'INCH',
  /** A metric system unit equal to 1,000 meters. */
  Kilometer = 'KILOMETER',
  /** The base unit of length in the metric system. */
  Meter = 'METER',
  /** A United States customary unit of 5,280 feet. */
  Mile = 'MILE',
  /** A metric system unit equal to 1/1,000th of a meter. */
  Millimeter = 'MILLIMETER',
  /** An international unit of length used for air, marine, and space navigation. Equivalent to 1,852 meters. */
  NauticalMile = 'NAUTICAL_MILE',
  /** A United States customary unit of 3 feet. */
  Yard = 'YARD'
}

/**
 * Input type used to specify filters on `Duration` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type DurationFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `DurationFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<DurationFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<DurationFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Duration']['input']>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<DurationFilterInput>;
};

/**
 * Input type used to specify filters on `EmailAddress` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type EmailAddressFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<EmailAddressFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<EmailAddressFilterInput>;
};

/**
 * An employee object that is used by the external API.
 *
 * Permissions:EMPLOYEES_READ
 */
export type Employee = {
  __typename?: 'Employee';
  /** The Square-issued ID of the employee. */
  id: Scalars['ID']['output'];
};

/**
 * Represents an error encountered during a request to the Connect API.
 *
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
 */
export type Error = {
  __typename?: 'Error';
  /** The high-level category for the error. */
  category?: Maybe<ErrorCategory>;
  /** The specific code of the error. */
  code?: Maybe<ErrorCode>;
  /** A human-readable description of the error for debugging purposes. */
  detail?: Maybe<Scalars['String']['output']>;
  /** The name of the field provided in the original request (if any) that the error pertains to. */
  field?: Maybe<Scalars['String']['output']>;
};

/** Indicates which high-level category of error has occurred during a request to the Connect API. */
export enum ErrorCategory {
  /** An error occurred with the Connect API itself. */
  ApiError = 'API_ERROR',
  /**
   * An authentication error occurred. Most commonly, the request had a missing,
   * malformed, or otherwise invalid `Authorization` header.
   */
  AuthenticationError = 'AUTHENTICATION_ERROR',
  /** An error that is returned from an external vendor's API. */
  ExternalVendorError = 'EXTERNAL_VENDOR_ERROR',
  /** The request was invalid. Most commonly, a required parameter was missing, or a provided parameter had an invalid value. */
  InvalidRequestError = 'INVALID_REQUEST_ERROR',
  /** An error occurred when checking a merchant subscription status. */
  MerchantSubscriptionError = 'MERCHANT_SUBSCRIPTION_ERROR',
  /**
   * An error occurred while processing a payment method. Most commonly, the
   * details of the payment method were invalid (such as a card's CVV or expiration date).
   */
  PaymentMethodError = 'PAYMENT_METHOD_ERROR',
  /**
   * Your application reached the Square API rate limit. You might receive this
   * error if your application sends a high number of requests
   * to Square APIs in a short period of time.
   *
   * Your application should monitor responses for `429 RATE_LIMITED` errors and
   * use a retry mechanism with an [exponential
   * backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
   * schedule to resend the requests at an increasingly slower rate. It is also a
   * good practice to use a randomized delay (jitter) in your retry schedule.
   */
  RateLimitError = 'RATE_LIMIT_ERROR',
  /** An error occurred while attempting to process a refund. */
  RefundError = 'REFUND_ERROR'
}

/** Indicates which high-level category of error has occurred during a request to the Connect API. */
export enum ErrorCategoryInput {
  /** An error occurred with the Connect API itself. */
  ApiError = 'API_ERROR',
  /**
   * An authentication error occurred. Most commonly, the request had a missing,
   * malformed, or otherwise invalid `Authorization` header.
   */
  AuthenticationError = 'AUTHENTICATION_ERROR',
  /** An error that is returned from an external vendor's API. */
  ExternalVendorError = 'EXTERNAL_VENDOR_ERROR',
  /** The request was invalid. Most commonly, a required parameter was missing, or a provided parameter had an invalid value. */
  InvalidRequestError = 'INVALID_REQUEST_ERROR',
  /** An error occurred when checking a merchant subscription status. */
  MerchantSubscriptionError = 'MERCHANT_SUBSCRIPTION_ERROR',
  /**
   * An error occurred while processing a payment method. Most commonly, the
   * details of the payment method were invalid (such as a card's CVV or expiration date).
   */
  PaymentMethodError = 'PAYMENT_METHOD_ERROR',
  /**
   * Your application reached the Square API rate limit. You might receive this
   * error if your application sends a high number of requests
   * to Square APIs in a short period of time.
   *
   * Your application should monitor responses for `429 RATE_LIMITED` errors and
   * use a retry mechanism with an [exponential
   * backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
   * schedule to resend the requests at an increasingly slower rate. It is also a
   * good practice to use a randomized delay (jitter) in your retry schedule.
   */
  RateLimitError = 'RATE_LIMIT_ERROR',
  /** An error occurred while attempting to process a refund. */
  RefundError = 'REFUND_ERROR'
}

/**
 * Input type used to specify filters on elements of a `[ErrorCategory]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ErrorCategoryListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `ErrorCategoryListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<ErrorCategoryListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<ErrorCategoryListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<ErrorCategoryInput>>;
};

/**
 * Input type used to specify filters on `[ErrorCategory]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ErrorCategoryListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `ErrorCategoryListFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<ErrorCategoryListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<ErrorCategoryListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<ErrorCategoryListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<ErrorCategoryListFilterInput>;
};

/** Indicates the specific error that occurred during a request to a Square API. */
export enum ErrorCode {
  /** The provided access token has expired. */
  AccessTokenExpired = 'ACCESS_TOKEN_EXPIRED',
  /** The provided access token has been revoked. */
  AccessTokenRevoked = 'ACCESS_TOKEN_REVOKED',
  /** The account provided cannot carry out transactions. */
  AccountUnusable = 'ACCOUNT_UNUSABLE',
  /** The card issuer declined the request because the postal code is invalid. */
  AddressVerificationFailure = 'ADDRESS_VERIFICATION_FAILURE',
  /**
   * The card has exhausted its available pin entry retries set by the card issuer.
   * Resolving the error typically requires the card holder to contact the card issuer.
   */
  AllowablePinTriesExceeded = 'ALLOWABLE_PIN_TRIES_EXCEEDED',
  /** The requested payment amount is too high for the provided payment source. */
  AmountTooHigh = 'AMOUNT_TOO_HIGH',
  /** The provided Square-Version is incompatible with the requested action. */
  ApiVersionIncompatible = 'API_VERSION_INCOMPATIBLE',
  /** Square could not find the associated Apple Pay certificate. */
  ApplePaymentProcessingCertificateHashNotFound = 'APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND',
  /**
   * The payment was declined by the card issuer during an Apple Tap to Pay (TTP) transaction with a request for the
   * card's PIN. This code will be returned alongside CARD_DECLINED_VERIFICATION_REQUIRED as a supplemental error,
   * and will include an issuer-provided token in the details field that is needed to initiate the PIN collection
   * flow on the iOS device.
   */
  AppleTtpPinToken = 'APPLE_TTP_PIN_TOKEN',
  /** The calling application was disabled. */
  ApplicationDisabled = 'APPLICATION_DISABLED',
  /** The provided array is empty. */
  ArrayEmpty = 'ARRAY_EMPTY',
  /** The provided array has too many elements. */
  ArrayLengthTooLong = 'ARRAY_LENGTH_TOO_LONG',
  /** The provided array has too few elements. */
  ArrayLengthTooShort = 'ARRAY_LENGTH_TOO_SHORT',
  /** Bad certificate. */
  BadCertificate = 'BAD_CERTIFICATE',
  /** The card expiration date is either missing or incorrectly formatted. */
  BadExpiration = 'BAD_EXPIRATION',
  /** Bad Gateway - a general error occurred. */
  BadGateway = 'BAD_GATEWAY',
  /** A general error occurred with the request. */
  BadRequest = 'BAD_REQUEST',
  /** The card issuer declined the refund. */
  BlockedByBlocklist = 'BLOCKED_BY_BLOCKLIST',
  /** The provided buyer id can't be found */
  BuyerNotFound = 'BUYER_NOT_FOUND',
  /** Bank account rejected or was not authorized for the payment. */
  BuyerRefusedPayment = 'BUYER_REFUSED_PAYMENT',
  /** Fulfillment type is not supported for calculating fulfillment rates. */
  CalculateFulfillmentRatesFulfillmentTypeNotSupported = 'CALCULATE_FULFILLMENT_RATES_FULFILLMENT_TYPE_NOT_SUPPORTED',
  /** No profiles are configured with the requested shipment destination. */
  CalculateFulfillmentRatesInvalidRecipientAddress = 'CALCULATE_FULFILLMENT_RATES_INVALID_RECIPIENT_ADDRESS',
  /** An item in the order is not configured for the shipment destination and no default profile is configured. */
  CalculateFulfillmentRatesItemLevelShipmentDestinationNotConfigured = 'CALCULATE_FULFILLMENT_RATES_ITEM_LEVEL_SHIPMENT_DESTINATION_NOT_CONFIGURED',
  /** No profiles are configured for the fufillment type requested. */
  CalculateFulfillmentRatesNoProfilesConfigured = 'CALCULATE_FULFILLMENT_RATES_NO_PROFILES_CONFIGURED',
  /** No profiles are configured with the requested shipment destination. */
  CalculateFulfillmentRatesShipmentDestinationNotConfigured = 'CALCULATE_FULFILLMENT_RATES_SHIPMENT_DESTINATION_NOT_CONFIGURED',
  /**
   * The card issuer has declined the transaction due to restrictions on where the
   * card can be used.  For example, a gift card is limited to a single merchant.
   */
  CardholderInsufficientPermissions = 'CARDHOLDER_INSUFFICIENT_PERMISSIONS',
  /** The card was declined. */
  CardDeclined = 'CARD_DECLINED',
  /** The payment card was declined with a request for the card holder to call the issuer. */
  CardDeclinedCallIssuer = 'CARD_DECLINED_CALL_ISSUER',
  /** The payment card was declined with a request for additional verification. */
  CardDeclinedVerificationRequired = 'CARD_DECLINED_VERIFICATION_REQUIRED',
  /** The card issuer declined the request because the card is expired. */
  CardExpired = 'CARD_EXPIRED',
  /** The API request references an unsupported source type. */
  CardMismatch = 'CARD_MISMATCH',
  /** The card is not supported either in the geographic region or by the [merchant category code](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code) (MCC). */
  CardNotSupported = 'CARD_NOT_SUPPORTED',
  /** The transaction requires that a card be present. */
  CardPresenceRequired = 'CARD_PRESENCE_REQUIRED',
  /** The location provided in the API call is not enabled for credit card processing. */
  CardProcessingNotEnabled = 'CARD_PROCESSING_NOT_ENABLED',
  /** The provided card token (nonce) has expired. */
  CardTokenExpired = 'CARD_TOKEN_EXPIRED',
  /** The provided card token (nonce) was already used to process the payment or refund. */
  CardTokenUsed = 'CARD_TOKEN_USED',
  /**
   * The carrier integration believes the request is invalid. When this error code is used, the error message
   * will contain more information that should be presented directly to the user.
   */
  CarrierIntegrationError = 'CARRIER_INTEGRATION_ERROR',
  /** The provided checkout URL has expired. */
  CheckoutExpired = 'CHECKOUT_EXPIRED',
  /** The card issuer requires that the card be read using a chip reader. */
  ChipInsertionRequired = 'CHIP_INSERTION_REQUIRED',
  /**
   * External clients are not supposed to see this response code as used to reflect
   * when clients close the connection before we're able to serve a response.
   * This non-standard response code was adopted by nginx.
   */
  ClientClosedRequest = 'CLIENT_CLOSED_REQUEST',
  /** The provided client has been disabled. */
  ClientDisabled = 'CLIENT_DISABLED',
  /** The provided client is not supported. */
  ClientNotSupported = 'CLIENT_NOT_SUPPORTED',
  /** Conflict - a general error occurred. */
  Conflict = 'CONFLICT',
  /** One or more of the request parameters conflict with each other. */
  ConflictingParameters = 'CONFLICTING_PARAMETERS',
  /**
   * The currency associated with the payment is not valid for the provided funding
   * source. For example, a gift card funded in USD cannot be used to process
   * payments in GBP.
   */
  CurrencyMismatch = 'CURRENCY_MISMATCH',
  /** The provided customer does not have a recorded email. */
  CustomerMissingEmail = 'CUSTOMER_MISSING_EMAIL',
  /** The provided customer does not have a recorded name. */
  CustomerMissingName = 'CUSTOMER_MISSING_NAME',
  /** The provided customer id can't be found in the merchant's customers list. */
  CustomerNotFound = 'CUSTOMER_NOT_FOUND',
  /** No value declared for customs for international shipments. */
  CustomsDeclarationNoValue = 'CUSTOMS_DECLARATION_NO_VALUE',
  /** No weight declared for customs for international shipments. */
  CustomsDeclarationNoWeight = 'CUSTOMS_DECLARATION_NO_WEIGHT',
  /** The card issuer declined the request because the CVV value is invalid. */
  CvvFailure = 'CVV_FAILURE',
  /** The application tried to cancel a delayed-capture payment that was already cancelled. */
  DelayedTransactionCanceled = 'DELAYED_TRANSACTION_CANCELED',
  /** The application tried to capture a delayed-capture payment that was already captured. */
  DelayedTransactionCaptured = 'DELAYED_TRANSACTION_CAPTURED',
  /** The application tried to update a delayed-capture payment that has expired. */
  DelayedTransactionExpired = 'DELAYED_TRANSACTION_EXPIRED',
  /** The application tried to update a delayed-capture payment that failed. */
  DelayedTransactionFailed = 'DELAYED_TRANSACTION_FAILED',
  /** Deprecated now means only that the field is listed as such in the API tech ref. This is not an error. */
  DeprecatedFieldSet = 'DEPRECATED_FIELD_SET',
  /** The endpoint expected the provided value to be an array or list. */
  ExpectedArray = 'EXPECTED_ARRAY',
  /** The endpoint expected the provided value to be an array encoded in base64. */
  ExpectedBase64EncodedByteArray = 'EXPECTED_BASE64_ENCODED_BYTE_ARRAY',
  /** The endpoint expected the provided value to be a boolean. */
  ExpectedBoolean = 'EXPECTED_BOOLEAN',
  /** The endpoint expected the provided value to be a float. */
  ExpectedFloat = 'EXPECTED_FLOAT',
  /** The endpoint expected the provided value to be an integer. */
  ExpectedInteger = 'EXPECTED_INTEGER',
  /** The request body is not a JSON object. */
  ExpectedJsonBody = 'EXPECTED_JSON_BODY',
  /** The endpoint expected the provided value to be a map or associative array. */
  ExpectedMap = 'EXPECTED_MAP',
  /** The endpoint expected the provided value to be a JSON object. */
  ExpectedObject = 'EXPECTED_OBJECT',
  /** The endpoint expected the provided value to be a string. */
  ExpectedString = 'EXPECTED_STRING',
  /** The card expiration date is either invalid or indicates that the card is expired. */
  ExpirationFailure = 'EXPIRATION_FAILURE',
  /** A general access error occurred. */
  Forbidden = 'FORBIDDEN',
  /** Unable to re-assign preferences assignment. Preferences assignment is a write-once field. */
  FulfillmentPreferencesAssignmentIsImmutable = 'FULFILLMENT_PREFERENCES_ASSIGNMENT_IS_IMMUTABLE',
  /** An assignment is required for this type of request. */
  FulfillmentPreferencesAssignmentRequired = 'FULFILLMENT_PREFERENCES_ASSIGNMENT_REQUIRED',
  /** The provided preferences assignment types should be consistent within request */
  FulfillmentPreferencesConflictingAssignmentType = 'FULFILLMENT_PREFERENCES_CONFLICTING_ASSIGNMENT_TYPE',
  /** Fulfillment Preferences with fulfillment schedules cannot be assigned to a CATALOG_ITEM */
  FulfillmentPreferencesFulfillmentScheduleNotAllowed = 'FULFILLMENT_PREFERENCES_FULFILLMENT_SCHEDULE_NOT_ALLOWED',
  /** Parameters being used for FulfillmentAvailabilityWindow object are not valid. */
  FulfillmentPreferencesInvalidFulfillmentAvailabilityWindow = 'FULFILLMENT_PREFERENCES_INVALID_FULFILLMENT_AVAILABILITY_WINDOW',
  /** The datetime value is not in the correct format per app business logic. */
  FulfillmentPreferencesInvalidSchedulingDatetime = 'FULFILLMENT_PREFERENCES_INVALID_SCHEDULING_DATETIME',
  /** This restricted date is a duplicate within the list. */
  FulfillmentPreferencesRestrictedDateNotUnique = 'FULFILLMENT_PREFERENCES_RESTRICTED_DATE_NOT_UNIQUE',
  /** A different item level profile has this item id. */
  FulfillmentRateProfileDuplicateItem = 'FULFILLMENT_RATE_PROFILE_DUPLICATE_ITEM',
  /** The item id provided for this profile is invalid. */
  FulfillmentRateProfileInvalidItem = 'FULFILLMENT_RATE_PROFILE_INVALID_ITEM',
  /** Gateway Timeout - a general error occurred. */
  GatewayTimeout = 'GATEWAY_TIMEOUT',
  /**
   * Square received a decline without any additional information.  If the payment
   * information seems correct, the buyer can contact their issuer to ask for more information.
   */
  GenericDecline = 'GENERIC_DECLINE',
  /**
   * When a Gift Card is a payment source, you can allow taking a partial payment
   * by adding the `accept_partial_authorization` parameter in the request.
   * However, taking such a partial payment does not work if your request also includes
   * `tipMoney`, `appFeeMoney`, or both. Square declines such payments and returns
   * the `GIFT_CARD_AVAILABLE_AMOUNT` error.
   * For more information, see
   * [CreatePayment errors (additional information)](https://developer.squareup.com/docs/payments-api/error-codes#createpayment-errors-additional-information).
   */
  GiftCardAvailableAmount = 'GIFT_CARD_AVAILABLE_AMOUNT',
  /** The buyer attempting to add value to the gift card has reached daily purchase limits. */
  GiftCardBuyerDailyLimitReached = 'GIFT_CARD_BUYER_DAILY_LIMIT_REACHED',
  /** The specified gift card amount is zero, negative, in the incorrect currency, or too large. */
  GiftCardInvalidAmount = 'GIFT_CARD_INVALID_AMOUNT',
  /** The gift card's maximum value has been reached. */
  GiftCardMaxValueReached = 'GIFT_CARD_MAX_VALUE_REACHED',
  /** The merchant's maximum total of outstanding gift card balances has been reached. */
  GiftCardMerchantMaxOutstandingBalanceReached = 'GIFT_CARD_MERCHANT_MAX_OUTSTANDING_BALANCE_REACHED',
  /** Attempted to add an amount to a gift card that is beyond its limits. */
  GiftCardValueAdditionLimitReached = 'GIFT_CARD_VALUE_ADDITION_LIMIT_REACHED',
  /** The target resource is no longer available and this condition is likely to be permanent. */
  Gone = 'GONE',
  /** HTTPS only. */
  HttpsOnly = 'HTTPS_ONLY',
  /** The provided idempotency key has already been used. */
  IdempotencyKeyReused = 'IDEMPOTENCY_KEY_REUSED',
  /** The value provided in the request is the wrong type. For example, a string instead of an integer. */
  IncorrectType = 'INCORRECT_TYPE',
  /** The payment method provided does not support preauthorization. Please try again using another form of payment. */
  IneligibleForPreauthorization = 'INELIGIBLE_FOR_PREAUTHORIZATION',
  /** The funding source has insufficient funds to cover the payment. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** The referenced inventory item has insufficient inventory. */
  InsufficientInventory = 'INSUFFICIENT_INVENTORY',
  /**
   * The Square account does not have the permissions to accept this payment. For
   * example, Square may limit which merchants are allowed to receive gift card payments.
   */
  InsufficientPermissions = 'INSUFFICIENT_PERMISSIONS',
  /** The Square account does not have the permissions to process this refund. */
  InsufficientPermissionsForRefund = 'INSUFFICIENT_PERMISSIONS_FOR_REFUND',
  /** The provided access token does not have permission to execute the requested action. */
  InsufficientScopes = 'INSUFFICIENT_SCOPES',
  /** A general server error occurred. */
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  /** The issuer was not able to locate the account on record. */
  InvalidAccount = 'INVALID_ACCOUNT',
  /** One or more objects in the array does not match the array type. */
  InvalidArrayValue = 'INVALID_ARRAY_VALUE',
  /** The credit card cannot be validated based on the provided details. */
  InvalidCard = 'INVALID_CARD',
  /** Generic error - the provided card data is invalid. */
  InvalidCardData = 'INVALID_CARD_DATA',
  /** Invalid content type header. */
  InvalidContentType = 'INVALID_CONTENT_TYPE',
  /** The pagination cursor included in the request is invalid. */
  InvalidCursor = 'INVALID_CURSOR',
  /** The subscription cannot be paused/resumed on the given date. */
  InvalidDate = 'INVALID_DATE',
  /** The provided email address is invalid. */
  InvalidEmailAddress = 'INVALID_EMAIL_ADDRESS',
  /** The encrypted card information is invalid. */
  InvalidEncryptedCard = 'INVALID_ENCRYPTED_CARD',
  /** The provided static string is not valid for the field. */
  InvalidEnumValue = 'INVALID_ENUM_VALUE',
  /** The expiration date for the payment card is invalid. For example, it indicates a date in the past. */
  InvalidExpiration = 'INVALID_EXPIRATION',
  /** The expiration date for the payment card is invalid. For example, it contains invalid characters. */
  InvalidExpirationDate = 'INVALID_EXPIRATION_DATE',
  /**
   * The expiration year for the payment card is invalid. For example, it indicates
   * a year in the past or contains invalid characters.
   */
  InvalidExpirationYear = 'INVALID_EXPIRATION_YEAR',
  /** The app_fee_money on a payment is too high. */
  InvalidFees = 'INVALID_FEES',
  /** Only relevant for applications created prior to 2016-03-30. Indicates there was an error while parsing form values. */
  InvalidFormValue = 'INVALID_FORM_VALUE',
  /**
   * The Square account cannot take payments in the specified region.  A Square
   * account can take payments only from the region where the account was created.
   */
  InvalidLocation = 'INVALID_LOCATION',
  /** The subscription cannot be paused longer than the duration of the current phase. */
  InvalidPauseLength = 'INVALID_PAUSE_LENGTH',
  /** The provided phone number is invalid. */
  InvalidPhoneNumber = 'INVALID_PHONE_NUMBER',
  /** The card issuer declined the request because the PIN is invalid. */
  InvalidPin = 'INVALID_PIN',
  /** The postal code is incorrectly formatted. */
  InvalidPostalCode = 'INVALID_POSTAL_CODE',
  /** The provided sort order is not a valid key.  Currently, sort order must be `ASC` or `DESC`. */
  InvalidSortOrder = 'INVALID_SORT_ORDER',
  /** The provided Square-Version is incorrectly formatted. */
  InvalidSquareVersionFormat = 'INVALID_SQUARE_VERSION_FORMAT',
  /** Formatting for the provided time value is incorrect. */
  InvalidTime = 'INVALID_TIME',
  /** Value is not a valid timezone. */
  InvalidTimezone = 'INVALID_TIMEZONE',
  /** The time range provided in the request is invalid.  For example, the end time is before the start time. */
  InvalidTimeRange = 'INVALID_TIME_RANGE',
  /** The provided API URL is invalid. */
  InvalidUrl = 'INVALID_URL',
  /** The provided value is invalid. For example, including `%` in a phone number. */
  InvalidValue = 'INVALID_VALUE',
  /** The verification code provided is invalid. */
  InvalidVerificationCode = 'INVALID_VERIFICATION_CODE',
  /**
   * The authorization was declined due to an issue related to issuer-based installments. E.g.
   * installments were requested but this card does not support installments.
   */
  IssuerInstallmentError = 'ISSUER_INSTALLMENT_ERROR',
  /** Invalid item encountered during bulk actions. */
  ItemsBulkBulkActionsInvalidItem = 'ITEMS_BULK_BULK_ACTIONS_INVALID_ITEM',
  /** No eligible items found during during the bulk action execution. */
  ItemsBulkBulkActionsNoEligibleItemsFound = 'ITEMS_BULK_BULK_ACTIONS_NO_ELIGIBLE_ITEMS_FOUND',
  /** Invalid amount error encountered during bulk actions. */
  ItemsBulkBulkActionsSalePriceInvalidAmount = 'ITEMS_BULK_BULK_ACTIONS_SALE_PRICE_INVALID_AMOUNT',
  /** Invalid percentage error encountered during bulk actions. */
  ItemsBulkBulkActionsSalePriceInvalidPercentage = 'ITEMS_BULK_BULK_ACTIONS_SALE_PRICE_INVALID_PERCENTAGE',
  /** Completing the request would exceed the limit of custom attribute objects. */
  ItemsCustomAttributeLimitExceeded = 'ITEMS_CUSTOM_ATTRIBUTE_LIMIT_EXCEEDED',
  /** Completing the request would result in duplicate custom attribute objects. */
  ItemsCustomAttributeNotUnique = 'ITEMS_CUSTOM_ATTRIBUTE_NOT_UNIQUE',
  /** A catalog category with a free text donation name has a non-donation item for a canadian seller. */
  ItemsInvalidCanadianFreeTextDonationCategory = 'ITEMS_INVALID_CANADIAN_FREE_TEXT_DONATION_CATEGORY',
  /** There already exists a job template with the given name. */
  JobTemplateNameTaken = 'JOB_TEMPLATE_NAME_TAKEN',
  /** Generic error - the given location does not matching what is expected. */
  LocationMismatch = 'LOCATION_MISMATCH',
  /** The card must be swiped, tapped, or dipped. Payments attempted by manually entering the card number are declined. */
  ManuallyEnteredPaymentNotSupported = 'MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED',
  /** The length of one of the provided keys in the map is too long. */
  MapKeyLengthTooLong = 'MAP_KEY_LENGTH_TOO_LONG',
  /** The length of one of the provided keys in the map is too short. */
  MapKeyLengthTooShort = 'MAP_KEY_LENGTH_TOO_SHORT',
  /** A required subscription was not found for the merchant */
  MerchantSubscriptionNotFound = 'MERCHANT_SUBSCRIPTION_NOT_FOUND',
  /** Method Not Allowed - a general error occurred. */
  MethodNotAllowed = 'METHOD_NOT_ALLOWED',
  /** The payment is missing a required ACCOUNT_TYPE parameter. */
  MissingAccountType = 'MISSING_ACCOUNT_TYPE',
  /** The payment is missing a required PIN. */
  MissingPin = 'MISSING_PIN',
  /** The request is missing a required path, query, or body parameter. */
  MissingRequiredParameter = 'MISSING_REQUIRED_PARAMETER',
  /** Not Acceptable - a general error occurred. */
  NotAcceptable = 'NOT_ACCEPTABLE',
  /** Not Found - a general error occurred. */
  NotFound = 'NOT_FOUND',
  /** Not Implemented - a general error occurred. */
  NotImplemented = 'NOT_IMPLEMENTED',
  /** A general error occurred. */
  NoFieldsSet = 'NO_FIELDS_SET',
  /** A general error occurred. */
  OneInstrumentExpected = 'ONE_INSTRUMENT_EXPECTED',
  /** The order was already used. */
  OrderAlreadyUsed = 'ORDER_ALREADY_USED',
  /** The requested order has expired and cannot be updated. */
  OrderExpired = 'ORDER_EXPIRED',
  /** The creation request contains too many catalog IDs. */
  OrderTooManyCatalogObjects = 'ORDER_TOO_MANY_CATALOG_OBJECTS',
  /** The order attempting to be returned is not yet paid and cannot be returned. */
  OrderUnpaidNotReturnable = 'ORDER_UNPAID_NOT_RETURNABLE',
  /** The specified card number is invalid. For example, it is of incorrect length or is incorrectly formatted. */
  PanFailure = 'PAN_FAILURE',
  /** Delay capture of a partial payment is not supported. */
  PartialPaymentDelayCaptureNotSupported = 'PARTIAL_PAYMENT_DELAY_CAPTURE_NOT_SUPPORTED',
  /**
   * The payment was declined because there was a payment amount mismatch.  The
   * money amount Square was expecting does not match the amount provided.
   */
  PaymentAmountMismatch = 'PAYMENT_AMOUNT_MISMATCH',
  /** Square declined the request because the payment amount exceeded the processing limit for this merchant. */
  PaymentLimitExceeded = 'PAYMENT_LIMIT_EXCEEDED',
  /** The payment is not refundable. For example, the payment has been disputed and is no longer eligible for refunds. */
  PaymentNotRefundable = 'PAYMENT_NOT_REFUNDABLE',
  /** The payment is not refundable because it has been disputed. */
  PaymentNotRefundableDueToDispute = 'PAYMENT_NOT_REFUNDABLE_DUE_TO_DISPUTE',
  /** Generic plaid error. */
  PlaidError = 'PLAID_ERROR',
  /** Plaid error - ITEM_LOGIN_REQUIRED. */
  PlaidErrorItemLoginRequired = 'PLAID_ERROR_ITEM_LOGIN_REQUIRED',
  /** Plaid error - RATE_LIMIT. */
  PlaidErrorRateLimit = 'PLAID_ERROR_RATE_LIMIT',
  /** There is a price mismatch. */
  PriceMismatch = 'PRICE_MISMATCH',
  /** Rate Limited - a general error occurred. */
  RateLimited = 'RATE_LIMITED',
  /** The Square Card Reader declined the payment for an unknown reason. */
  ReaderDeclined = 'READER_DECLINED',
  /**
   * The Square Card Reader used is not supported because there is no EMV capable
   * reader connected (but is otherwise supported in the region if there were one connected).
   */
  ReaderNotSupportedDueToNoEmvReader = 'READER_NOT_SUPPORTED_DUE_TO_NO_EMV_READER',
  /** The Square Card Reader used is not supported anymore due to end of life. */
  ReaderNotSupportedEndOfLife = 'READER_NOT_SUPPORTED_END_OF_LIFE',
  /** The Square Card Reader used is not supported in the geographic region. */
  ReaderNotSupportedForCountry = 'READER_NOT_SUPPORTED_FOR_COUNTRY',
  /** The payment already has a pending refund. */
  RefundAlreadyPending = 'REFUND_ALREADY_PENDING',
  /** The requested refund amount exceeds the amount available to refund. */
  RefundAmountInvalid = 'REFUND_AMOUNT_INVALID',
  /** Request failed - The card issuer declined the refund. */
  RefundDeclined = 'REFUND_DECLINED',
  /** The payment is not refundable because the payment is approved and needs to be completed first before the refund is issued. */
  RefundErrorPaymentNeedsCompletion = 'REFUND_ERROR_PAYMENT_NEEDS_COMPLETION',
  /** Request Entity Too Large - a general error occurred. */
  RequestEntityTooLarge = 'REQUEST_ENTITY_TOO_LARGE',
  /** Request Timeout - a general error occurred. */
  RequestTimeout = 'REQUEST_TIMEOUT',
  /** The card issuer declined the refund. */
  ReservationDeclined = 'RESERVATION_DECLINED',
  /** The fields are not accessible at the request api version. Use API_VERSION_INCOMPATIBLE instead. */
  RetiredFieldSet = 'RETIRED_FIELD_SET',
  /** The API request is not supported in sandbox. */
  SandboxNotSupported = 'SANDBOX_NOT_SUPPORTED',
  /**
   * In the context of schedule updates, there can't be more than one update schedule for
   * execution for the same object and property type.
   */
  ScheduleUpdatesDuplicateExecuteAt = 'SCHEDULE_UPDATES_DUPLICATE_EXECUTE_AT',
  /**
   * In the context of schedule updates, to create a schedule transaction, the execute at time
   * must be in the future.
   */
  ScheduleUpdatesPastExecuteAt = 'SCHEDULE_UPDATES_PAST_EXECUTE_AT',
  /** Service Unavailable - a general error occurred. */
  ServiceUnavailable = 'SERVICE_UNAVAILABLE',
  /** A session associated with the payment has expired. */
  SessionExpired = 'SESSION_EXPIRED',
  /** The provided source id has expired. */
  SourceExpired = 'SOURCE_EXPIRED',
  /** The provided source id was already used to create a card. */
  SourceUsed = 'SOURCE_USED',
  /** A temporary internal error occurred. You can safely retry your call using the same idempotency key. */
  TemporaryError = 'TEMPORARY_ERROR',
  /** Too many entries in the map field. */
  TooManyMapEntries = 'TOO_MANY_MAP_ENTRIES',
  /**
   * The card issuer has determined the payment amount is either too high or too low.
   * The API returns the error code mostly for credit cards (for example, the card reached
   * the credit limit). However, sometimes the issuer bank can indicate the error for debit
   * or prepaid cards (for example, card has insufficient funds).
   */
  TransactionLimit = 'TRANSACTION_LIMIT',
  /** A general authorization error occurred. */
  Unauthorized = 'UNAUTHORIZED',
  /** General error - the value provided was unexpected. */
  UnexpectedValue = 'UNEXPECTED_VALUE',
  /** The body parameter is not recognized by the requested endpoint. */
  UnknownBodyParameter = 'UNKNOWN_BODY_PARAMETER',
  /** The query parameters provided is invalid for the requested endpoint. */
  UnknownQueryParameter = 'UNKNOWN_QUERY_PARAMETER',
  /** Unprocessable Entity - a general error occurred. */
  UnprocessableEntity = 'UNPROCESSABLE_ENTITY',
  /** The provided URL is unreachable. */
  UnreachableUrl = 'UNREACHABLE_URL',
  /** The credit card provided is not from a supported issuer. */
  UnsupportedCardBrand = 'UNSUPPORTED_CARD_BRAND',
  /** The API request references an unsupported country. */
  UnsupportedCountry = 'UNSUPPORTED_COUNTRY',
  /** The API request references an unsupported currency. */
  UnsupportedCurrency = 'UNSUPPORTED_CURRENCY',
  /** The entry method for the credit card (swipe, dip, tap) is not supported. */
  UnsupportedEntryMethod = 'UNSUPPORTED_ENTRY_METHOD',
  /** The API request references an unsupported instrument type/ */
  UnsupportedInstrumentType = 'UNSUPPORTED_INSTRUMENT_TYPE',
  /**
   * The referenced loyalty program reward tier is not supported.  This could
   * happen if the reward tier created in a first party application is incompatible
   * with the Loyalty API.
   */
  UnsupportedLoyaltyRewardTier = 'UNSUPPORTED_LOYALTY_REWARD_TIER',
  /** Unsupported Media Type - a general error occurred. */
  UnsupportedMediaType = 'UNSUPPORTED_MEDIA_TYPE',
  /** The API request references an unsupported source type. */
  UnsupportedSourceType = 'UNSUPPORTED_SOURCE_TYPE',
  /**
   * The calling application is using an access token created prior to 2016-03-30
   * and is not compatible with v2 Square API calls.
   */
  V1AccessToken = 'V1_ACCESS_TOKEN',
  /** The calling application was created prior to 2016-03-30 and is not compatible with v2 Square API calls. */
  V1Application = 'V1_APPLICATION',
  /** The provided value has a default (empty) value such as a blank string. */
  ValueEmpty = 'VALUE_EMPTY',
  /** The provided value does not match an expected regular expression. */
  ValueRegexMismatch = 'VALUE_REGEX_MISMATCH',
  /** The provided value is greater than the supported maximum. */
  ValueTooHigh = 'VALUE_TOO_HIGH',
  /** The provided string value is longer than the maximum length allowed. */
  ValueTooLong = 'VALUE_TOO_LONG',
  /** The provided value is less than the supported minimum. */
  ValueTooLow = 'VALUE_TOO_LOW',
  /** The provided string value is shorter than the minimum length allowed. */
  ValueTooShort = 'VALUE_TOO_SHORT',
  /** The AVS could not be verified. */
  VerifyAvsFailure = 'VERIFY_AVS_FAILURE',
  /** The CVV could not be verified. */
  VerifyCvvFailure = 'VERIFY_CVV_FAILURE',
  /** The provided object version does not match the expected value. */
  VersionMismatch = 'VERSION_MISMATCH',
  /** The card issuer declined the request because the issuer requires voice authorization from the cardholder. */
  VoiceFailure = 'VOICE_FAILURE'
}

/** Indicates the specific error that occurred during a request to a Square API. */
export enum ErrorCodeInput {
  /** The provided access token has expired. */
  AccessTokenExpired = 'ACCESS_TOKEN_EXPIRED',
  /** The provided access token has been revoked. */
  AccessTokenRevoked = 'ACCESS_TOKEN_REVOKED',
  /** The account provided cannot carry out transactions. */
  AccountUnusable = 'ACCOUNT_UNUSABLE',
  /** The card issuer declined the request because the postal code is invalid. */
  AddressVerificationFailure = 'ADDRESS_VERIFICATION_FAILURE',
  /**
   * The card has exhausted its available pin entry retries set by the card issuer.
   * Resolving the error typically requires the card holder to contact the card issuer.
   */
  AllowablePinTriesExceeded = 'ALLOWABLE_PIN_TRIES_EXCEEDED',
  /** The requested payment amount is too high for the provided payment source. */
  AmountTooHigh = 'AMOUNT_TOO_HIGH',
  /** The provided Square-Version is incompatible with the requested action. */
  ApiVersionIncompatible = 'API_VERSION_INCOMPATIBLE',
  /** Square could not find the associated Apple Pay certificate. */
  ApplePaymentProcessingCertificateHashNotFound = 'APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND',
  /**
   * The payment was declined by the card issuer during an Apple Tap to Pay (TTP) transaction with a request for the
   * card's PIN. This code will be returned alongside CARD_DECLINED_VERIFICATION_REQUIRED as a supplemental error,
   * and will include an issuer-provided token in the details field that is needed to initiate the PIN collection
   * flow on the iOS device.
   */
  AppleTtpPinToken = 'APPLE_TTP_PIN_TOKEN',
  /** The calling application was disabled. */
  ApplicationDisabled = 'APPLICATION_DISABLED',
  /** The provided array is empty. */
  ArrayEmpty = 'ARRAY_EMPTY',
  /** The provided array has too many elements. */
  ArrayLengthTooLong = 'ARRAY_LENGTH_TOO_LONG',
  /** The provided array has too few elements. */
  ArrayLengthTooShort = 'ARRAY_LENGTH_TOO_SHORT',
  /** Bad certificate. */
  BadCertificate = 'BAD_CERTIFICATE',
  /** The card expiration date is either missing or incorrectly formatted. */
  BadExpiration = 'BAD_EXPIRATION',
  /** Bad Gateway - a general error occurred. */
  BadGateway = 'BAD_GATEWAY',
  /** A general error occurred with the request. */
  BadRequest = 'BAD_REQUEST',
  /** The card issuer declined the refund. */
  BlockedByBlocklist = 'BLOCKED_BY_BLOCKLIST',
  /** The provided buyer id can't be found */
  BuyerNotFound = 'BUYER_NOT_FOUND',
  /** Bank account rejected or was not authorized for the payment. */
  BuyerRefusedPayment = 'BUYER_REFUSED_PAYMENT',
  /** Fulfillment type is not supported for calculating fulfillment rates. */
  CalculateFulfillmentRatesFulfillmentTypeNotSupported = 'CALCULATE_FULFILLMENT_RATES_FULFILLMENT_TYPE_NOT_SUPPORTED',
  /** No profiles are configured with the requested shipment destination. */
  CalculateFulfillmentRatesInvalidRecipientAddress = 'CALCULATE_FULFILLMENT_RATES_INVALID_RECIPIENT_ADDRESS',
  /** An item in the order is not configured for the shipment destination and no default profile is configured. */
  CalculateFulfillmentRatesItemLevelShipmentDestinationNotConfigured = 'CALCULATE_FULFILLMENT_RATES_ITEM_LEVEL_SHIPMENT_DESTINATION_NOT_CONFIGURED',
  /** No profiles are configured for the fufillment type requested. */
  CalculateFulfillmentRatesNoProfilesConfigured = 'CALCULATE_FULFILLMENT_RATES_NO_PROFILES_CONFIGURED',
  /** No profiles are configured with the requested shipment destination. */
  CalculateFulfillmentRatesShipmentDestinationNotConfigured = 'CALCULATE_FULFILLMENT_RATES_SHIPMENT_DESTINATION_NOT_CONFIGURED',
  /**
   * The card issuer has declined the transaction due to restrictions on where the
   * card can be used.  For example, a gift card is limited to a single merchant.
   */
  CardholderInsufficientPermissions = 'CARDHOLDER_INSUFFICIENT_PERMISSIONS',
  /** The card was declined. */
  CardDeclined = 'CARD_DECLINED',
  /** The payment card was declined with a request for the card holder to call the issuer. */
  CardDeclinedCallIssuer = 'CARD_DECLINED_CALL_ISSUER',
  /** The payment card was declined with a request for additional verification. */
  CardDeclinedVerificationRequired = 'CARD_DECLINED_VERIFICATION_REQUIRED',
  /** The card issuer declined the request because the card is expired. */
  CardExpired = 'CARD_EXPIRED',
  /** The API request references an unsupported source type. */
  CardMismatch = 'CARD_MISMATCH',
  /** The card is not supported either in the geographic region or by the [merchant category code](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code) (MCC). */
  CardNotSupported = 'CARD_NOT_SUPPORTED',
  /** The transaction requires that a card be present. */
  CardPresenceRequired = 'CARD_PRESENCE_REQUIRED',
  /** The location provided in the API call is not enabled for credit card processing. */
  CardProcessingNotEnabled = 'CARD_PROCESSING_NOT_ENABLED',
  /** The provided card token (nonce) has expired. */
  CardTokenExpired = 'CARD_TOKEN_EXPIRED',
  /** The provided card token (nonce) was already used to process the payment or refund. */
  CardTokenUsed = 'CARD_TOKEN_USED',
  /**
   * The carrier integration believes the request is invalid. When this error code is used, the error message
   * will contain more information that should be presented directly to the user.
   */
  CarrierIntegrationError = 'CARRIER_INTEGRATION_ERROR',
  /** The provided checkout URL has expired. */
  CheckoutExpired = 'CHECKOUT_EXPIRED',
  /** The card issuer requires that the card be read using a chip reader. */
  ChipInsertionRequired = 'CHIP_INSERTION_REQUIRED',
  /**
   * External clients are not supposed to see this response code as used to reflect
   * when clients close the connection before we're able to serve a response.
   * This non-standard response code was adopted by nginx.
   */
  ClientClosedRequest = 'CLIENT_CLOSED_REQUEST',
  /** The provided client has been disabled. */
  ClientDisabled = 'CLIENT_DISABLED',
  /** The provided client is not supported. */
  ClientNotSupported = 'CLIENT_NOT_SUPPORTED',
  /** Conflict - a general error occurred. */
  Conflict = 'CONFLICT',
  /** One or more of the request parameters conflict with each other. */
  ConflictingParameters = 'CONFLICTING_PARAMETERS',
  /**
   * The currency associated with the payment is not valid for the provided funding
   * source. For example, a gift card funded in USD cannot be used to process
   * payments in GBP.
   */
  CurrencyMismatch = 'CURRENCY_MISMATCH',
  /** The provided customer does not have a recorded email. */
  CustomerMissingEmail = 'CUSTOMER_MISSING_EMAIL',
  /** The provided customer does not have a recorded name. */
  CustomerMissingName = 'CUSTOMER_MISSING_NAME',
  /** The provided customer id can't be found in the merchant's customers list. */
  CustomerNotFound = 'CUSTOMER_NOT_FOUND',
  /** No value declared for customs for international shipments. */
  CustomsDeclarationNoValue = 'CUSTOMS_DECLARATION_NO_VALUE',
  /** No weight declared for customs for international shipments. */
  CustomsDeclarationNoWeight = 'CUSTOMS_DECLARATION_NO_WEIGHT',
  /** The card issuer declined the request because the CVV value is invalid. */
  CvvFailure = 'CVV_FAILURE',
  /** The application tried to cancel a delayed-capture payment that was already cancelled. */
  DelayedTransactionCanceled = 'DELAYED_TRANSACTION_CANCELED',
  /** The application tried to capture a delayed-capture payment that was already captured. */
  DelayedTransactionCaptured = 'DELAYED_TRANSACTION_CAPTURED',
  /** The application tried to update a delayed-capture payment that has expired. */
  DelayedTransactionExpired = 'DELAYED_TRANSACTION_EXPIRED',
  /** The application tried to update a delayed-capture payment that failed. */
  DelayedTransactionFailed = 'DELAYED_TRANSACTION_FAILED',
  /** Deprecated now means only that the field is listed as such in the API tech ref. This is not an error. */
  DeprecatedFieldSet = 'DEPRECATED_FIELD_SET',
  /** The endpoint expected the provided value to be an array or list. */
  ExpectedArray = 'EXPECTED_ARRAY',
  /** The endpoint expected the provided value to be an array encoded in base64. */
  ExpectedBase64EncodedByteArray = 'EXPECTED_BASE64_ENCODED_BYTE_ARRAY',
  /** The endpoint expected the provided value to be a boolean. */
  ExpectedBoolean = 'EXPECTED_BOOLEAN',
  /** The endpoint expected the provided value to be a float. */
  ExpectedFloat = 'EXPECTED_FLOAT',
  /** The endpoint expected the provided value to be an integer. */
  ExpectedInteger = 'EXPECTED_INTEGER',
  /** The request body is not a JSON object. */
  ExpectedJsonBody = 'EXPECTED_JSON_BODY',
  /** The endpoint expected the provided value to be a map or associative array. */
  ExpectedMap = 'EXPECTED_MAP',
  /** The endpoint expected the provided value to be a JSON object. */
  ExpectedObject = 'EXPECTED_OBJECT',
  /** The endpoint expected the provided value to be a string. */
  ExpectedString = 'EXPECTED_STRING',
  /** The card expiration date is either invalid or indicates that the card is expired. */
  ExpirationFailure = 'EXPIRATION_FAILURE',
  /** A general access error occurred. */
  Forbidden = 'FORBIDDEN',
  /** Unable to re-assign preferences assignment. Preferences assignment is a write-once field. */
  FulfillmentPreferencesAssignmentIsImmutable = 'FULFILLMENT_PREFERENCES_ASSIGNMENT_IS_IMMUTABLE',
  /** An assignment is required for this type of request. */
  FulfillmentPreferencesAssignmentRequired = 'FULFILLMENT_PREFERENCES_ASSIGNMENT_REQUIRED',
  /** The provided preferences assignment types should be consistent within request */
  FulfillmentPreferencesConflictingAssignmentType = 'FULFILLMENT_PREFERENCES_CONFLICTING_ASSIGNMENT_TYPE',
  /** Fulfillment Preferences with fulfillment schedules cannot be assigned to a CATALOG_ITEM */
  FulfillmentPreferencesFulfillmentScheduleNotAllowed = 'FULFILLMENT_PREFERENCES_FULFILLMENT_SCHEDULE_NOT_ALLOWED',
  /** Parameters being used for FulfillmentAvailabilityWindow object are not valid. */
  FulfillmentPreferencesInvalidFulfillmentAvailabilityWindow = 'FULFILLMENT_PREFERENCES_INVALID_FULFILLMENT_AVAILABILITY_WINDOW',
  /** The datetime value is not in the correct format per app business logic. */
  FulfillmentPreferencesInvalidSchedulingDatetime = 'FULFILLMENT_PREFERENCES_INVALID_SCHEDULING_DATETIME',
  /** This restricted date is a duplicate within the list. */
  FulfillmentPreferencesRestrictedDateNotUnique = 'FULFILLMENT_PREFERENCES_RESTRICTED_DATE_NOT_UNIQUE',
  /** A different item level profile has this item id. */
  FulfillmentRateProfileDuplicateItem = 'FULFILLMENT_RATE_PROFILE_DUPLICATE_ITEM',
  /** The item id provided for this profile is invalid. */
  FulfillmentRateProfileInvalidItem = 'FULFILLMENT_RATE_PROFILE_INVALID_ITEM',
  /** Gateway Timeout - a general error occurred. */
  GatewayTimeout = 'GATEWAY_TIMEOUT',
  /**
   * Square received a decline without any additional information.  If the payment
   * information seems correct, the buyer can contact their issuer to ask for more information.
   */
  GenericDecline = 'GENERIC_DECLINE',
  /**
   * When a Gift Card is a payment source, you can allow taking a partial payment
   * by adding the `accept_partial_authorization` parameter in the request.
   * However, taking such a partial payment does not work if your request also includes
   * `tipMoney`, `appFeeMoney`, or both. Square declines such payments and returns
   * the `GIFT_CARD_AVAILABLE_AMOUNT` error.
   * For more information, see
   * [CreatePayment errors (additional information)](https://developer.squareup.com/docs/payments-api/error-codes#createpayment-errors-additional-information).
   */
  GiftCardAvailableAmount = 'GIFT_CARD_AVAILABLE_AMOUNT',
  /** The buyer attempting to add value to the gift card has reached daily purchase limits. */
  GiftCardBuyerDailyLimitReached = 'GIFT_CARD_BUYER_DAILY_LIMIT_REACHED',
  /** The specified gift card amount is zero, negative, in the incorrect currency, or too large. */
  GiftCardInvalidAmount = 'GIFT_CARD_INVALID_AMOUNT',
  /** The gift card's maximum value has been reached. */
  GiftCardMaxValueReached = 'GIFT_CARD_MAX_VALUE_REACHED',
  /** The merchant's maximum total of outstanding gift card balances has been reached. */
  GiftCardMerchantMaxOutstandingBalanceReached = 'GIFT_CARD_MERCHANT_MAX_OUTSTANDING_BALANCE_REACHED',
  /** Attempted to add an amount to a gift card that is beyond its limits. */
  GiftCardValueAdditionLimitReached = 'GIFT_CARD_VALUE_ADDITION_LIMIT_REACHED',
  /** The target resource is no longer available and this condition is likely to be permanent. */
  Gone = 'GONE',
  /** HTTPS only. */
  HttpsOnly = 'HTTPS_ONLY',
  /** The provided idempotency key has already been used. */
  IdempotencyKeyReused = 'IDEMPOTENCY_KEY_REUSED',
  /** The value provided in the request is the wrong type. For example, a string instead of an integer. */
  IncorrectType = 'INCORRECT_TYPE',
  /** The payment method provided does not support preauthorization. Please try again using another form of payment. */
  IneligibleForPreauthorization = 'INELIGIBLE_FOR_PREAUTHORIZATION',
  /** The funding source has insufficient funds to cover the payment. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** The referenced inventory item has insufficient inventory. */
  InsufficientInventory = 'INSUFFICIENT_INVENTORY',
  /**
   * The Square account does not have the permissions to accept this payment. For
   * example, Square may limit which merchants are allowed to receive gift card payments.
   */
  InsufficientPermissions = 'INSUFFICIENT_PERMISSIONS',
  /** The Square account does not have the permissions to process this refund. */
  InsufficientPermissionsForRefund = 'INSUFFICIENT_PERMISSIONS_FOR_REFUND',
  /** The provided access token does not have permission to execute the requested action. */
  InsufficientScopes = 'INSUFFICIENT_SCOPES',
  /** A general server error occurred. */
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  /** The issuer was not able to locate the account on record. */
  InvalidAccount = 'INVALID_ACCOUNT',
  /** One or more objects in the array does not match the array type. */
  InvalidArrayValue = 'INVALID_ARRAY_VALUE',
  /** The credit card cannot be validated based on the provided details. */
  InvalidCard = 'INVALID_CARD',
  /** Generic error - the provided card data is invalid. */
  InvalidCardData = 'INVALID_CARD_DATA',
  /** Invalid content type header. */
  InvalidContentType = 'INVALID_CONTENT_TYPE',
  /** The pagination cursor included in the request is invalid. */
  InvalidCursor = 'INVALID_CURSOR',
  /** The subscription cannot be paused/resumed on the given date. */
  InvalidDate = 'INVALID_DATE',
  /** The provided email address is invalid. */
  InvalidEmailAddress = 'INVALID_EMAIL_ADDRESS',
  /** The encrypted card information is invalid. */
  InvalidEncryptedCard = 'INVALID_ENCRYPTED_CARD',
  /** The provided static string is not valid for the field. */
  InvalidEnumValue = 'INVALID_ENUM_VALUE',
  /** The expiration date for the payment card is invalid. For example, it indicates a date in the past. */
  InvalidExpiration = 'INVALID_EXPIRATION',
  /** The expiration date for the payment card is invalid. For example, it contains invalid characters. */
  InvalidExpirationDate = 'INVALID_EXPIRATION_DATE',
  /**
   * The expiration year for the payment card is invalid. For example, it indicates
   * a year in the past or contains invalid characters.
   */
  InvalidExpirationYear = 'INVALID_EXPIRATION_YEAR',
  /** The app_fee_money on a payment is too high. */
  InvalidFees = 'INVALID_FEES',
  /** Only relevant for applications created prior to 2016-03-30. Indicates there was an error while parsing form values. */
  InvalidFormValue = 'INVALID_FORM_VALUE',
  /**
   * The Square account cannot take payments in the specified region.  A Square
   * account can take payments only from the region where the account was created.
   */
  InvalidLocation = 'INVALID_LOCATION',
  /** The subscription cannot be paused longer than the duration of the current phase. */
  InvalidPauseLength = 'INVALID_PAUSE_LENGTH',
  /** The provided phone number is invalid. */
  InvalidPhoneNumber = 'INVALID_PHONE_NUMBER',
  /** The card issuer declined the request because the PIN is invalid. */
  InvalidPin = 'INVALID_PIN',
  /** The postal code is incorrectly formatted. */
  InvalidPostalCode = 'INVALID_POSTAL_CODE',
  /** The provided sort order is not a valid key.  Currently, sort order must be `ASC` or `DESC`. */
  InvalidSortOrder = 'INVALID_SORT_ORDER',
  /** The provided Square-Version is incorrectly formatted. */
  InvalidSquareVersionFormat = 'INVALID_SQUARE_VERSION_FORMAT',
  /** Formatting for the provided time value is incorrect. */
  InvalidTime = 'INVALID_TIME',
  /** Value is not a valid timezone. */
  InvalidTimezone = 'INVALID_TIMEZONE',
  /** The time range provided in the request is invalid.  For example, the end time is before the start time. */
  InvalidTimeRange = 'INVALID_TIME_RANGE',
  /** The provided API URL is invalid. */
  InvalidUrl = 'INVALID_URL',
  /** The provided value is invalid. For example, including `%` in a phone number. */
  InvalidValue = 'INVALID_VALUE',
  /** The verification code provided is invalid. */
  InvalidVerificationCode = 'INVALID_VERIFICATION_CODE',
  /**
   * The authorization was declined due to an issue related to issuer-based installments. E.g.
   * installments were requested but this card does not support installments.
   */
  IssuerInstallmentError = 'ISSUER_INSTALLMENT_ERROR',
  /** Invalid item encountered during bulk actions. */
  ItemsBulkBulkActionsInvalidItem = 'ITEMS_BULK_BULK_ACTIONS_INVALID_ITEM',
  /** No eligible items found during during the bulk action execution. */
  ItemsBulkBulkActionsNoEligibleItemsFound = 'ITEMS_BULK_BULK_ACTIONS_NO_ELIGIBLE_ITEMS_FOUND',
  /** Invalid amount error encountered during bulk actions. */
  ItemsBulkBulkActionsSalePriceInvalidAmount = 'ITEMS_BULK_BULK_ACTIONS_SALE_PRICE_INVALID_AMOUNT',
  /** Invalid percentage error encountered during bulk actions. */
  ItemsBulkBulkActionsSalePriceInvalidPercentage = 'ITEMS_BULK_BULK_ACTIONS_SALE_PRICE_INVALID_PERCENTAGE',
  /** Completing the request would exceed the limit of custom attribute objects. */
  ItemsCustomAttributeLimitExceeded = 'ITEMS_CUSTOM_ATTRIBUTE_LIMIT_EXCEEDED',
  /** Completing the request would result in duplicate custom attribute objects. */
  ItemsCustomAttributeNotUnique = 'ITEMS_CUSTOM_ATTRIBUTE_NOT_UNIQUE',
  /** A catalog category with a free text donation name has a non-donation item for a canadian seller. */
  ItemsInvalidCanadianFreeTextDonationCategory = 'ITEMS_INVALID_CANADIAN_FREE_TEXT_DONATION_CATEGORY',
  /** There already exists a job template with the given name. */
  JobTemplateNameTaken = 'JOB_TEMPLATE_NAME_TAKEN',
  /** Generic error - the given location does not matching what is expected. */
  LocationMismatch = 'LOCATION_MISMATCH',
  /** The card must be swiped, tapped, or dipped. Payments attempted by manually entering the card number are declined. */
  ManuallyEnteredPaymentNotSupported = 'MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED',
  /** The length of one of the provided keys in the map is too long. */
  MapKeyLengthTooLong = 'MAP_KEY_LENGTH_TOO_LONG',
  /** The length of one of the provided keys in the map is too short. */
  MapKeyLengthTooShort = 'MAP_KEY_LENGTH_TOO_SHORT',
  /** A required subscription was not found for the merchant */
  MerchantSubscriptionNotFound = 'MERCHANT_SUBSCRIPTION_NOT_FOUND',
  /** Method Not Allowed - a general error occurred. */
  MethodNotAllowed = 'METHOD_NOT_ALLOWED',
  /** The payment is missing a required ACCOUNT_TYPE parameter. */
  MissingAccountType = 'MISSING_ACCOUNT_TYPE',
  /** The payment is missing a required PIN. */
  MissingPin = 'MISSING_PIN',
  /** The request is missing a required path, query, or body parameter. */
  MissingRequiredParameter = 'MISSING_REQUIRED_PARAMETER',
  /** Not Acceptable - a general error occurred. */
  NotAcceptable = 'NOT_ACCEPTABLE',
  /** Not Found - a general error occurred. */
  NotFound = 'NOT_FOUND',
  /** Not Implemented - a general error occurred. */
  NotImplemented = 'NOT_IMPLEMENTED',
  /** A general error occurred. */
  NoFieldsSet = 'NO_FIELDS_SET',
  /** A general error occurred. */
  OneInstrumentExpected = 'ONE_INSTRUMENT_EXPECTED',
  /** The order was already used. */
  OrderAlreadyUsed = 'ORDER_ALREADY_USED',
  /** The requested order has expired and cannot be updated. */
  OrderExpired = 'ORDER_EXPIRED',
  /** The creation request contains too many catalog IDs. */
  OrderTooManyCatalogObjects = 'ORDER_TOO_MANY_CATALOG_OBJECTS',
  /** The order attempting to be returned is not yet paid and cannot be returned. */
  OrderUnpaidNotReturnable = 'ORDER_UNPAID_NOT_RETURNABLE',
  /** The specified card number is invalid. For example, it is of incorrect length or is incorrectly formatted. */
  PanFailure = 'PAN_FAILURE',
  /** Delay capture of a partial payment is not supported. */
  PartialPaymentDelayCaptureNotSupported = 'PARTIAL_PAYMENT_DELAY_CAPTURE_NOT_SUPPORTED',
  /**
   * The payment was declined because there was a payment amount mismatch.  The
   * money amount Square was expecting does not match the amount provided.
   */
  PaymentAmountMismatch = 'PAYMENT_AMOUNT_MISMATCH',
  /** Square declined the request because the payment amount exceeded the processing limit for this merchant. */
  PaymentLimitExceeded = 'PAYMENT_LIMIT_EXCEEDED',
  /** The payment is not refundable. For example, the payment has been disputed and is no longer eligible for refunds. */
  PaymentNotRefundable = 'PAYMENT_NOT_REFUNDABLE',
  /** The payment is not refundable because it has been disputed. */
  PaymentNotRefundableDueToDispute = 'PAYMENT_NOT_REFUNDABLE_DUE_TO_DISPUTE',
  /** Generic plaid error. */
  PlaidError = 'PLAID_ERROR',
  /** Plaid error - ITEM_LOGIN_REQUIRED. */
  PlaidErrorItemLoginRequired = 'PLAID_ERROR_ITEM_LOGIN_REQUIRED',
  /** Plaid error - RATE_LIMIT. */
  PlaidErrorRateLimit = 'PLAID_ERROR_RATE_LIMIT',
  /** There is a price mismatch. */
  PriceMismatch = 'PRICE_MISMATCH',
  /** Rate Limited - a general error occurred. */
  RateLimited = 'RATE_LIMITED',
  /** The Square Card Reader declined the payment for an unknown reason. */
  ReaderDeclined = 'READER_DECLINED',
  /**
   * The Square Card Reader used is not supported because there is no EMV capable
   * reader connected (but is otherwise supported in the region if there were one connected).
   */
  ReaderNotSupportedDueToNoEmvReader = 'READER_NOT_SUPPORTED_DUE_TO_NO_EMV_READER',
  /** The Square Card Reader used is not supported anymore due to end of life. */
  ReaderNotSupportedEndOfLife = 'READER_NOT_SUPPORTED_END_OF_LIFE',
  /** The Square Card Reader used is not supported in the geographic region. */
  ReaderNotSupportedForCountry = 'READER_NOT_SUPPORTED_FOR_COUNTRY',
  /** The payment already has a pending refund. */
  RefundAlreadyPending = 'REFUND_ALREADY_PENDING',
  /** The requested refund amount exceeds the amount available to refund. */
  RefundAmountInvalid = 'REFUND_AMOUNT_INVALID',
  /** Request failed - The card issuer declined the refund. */
  RefundDeclined = 'REFUND_DECLINED',
  /** The payment is not refundable because the payment is approved and needs to be completed first before the refund is issued. */
  RefundErrorPaymentNeedsCompletion = 'REFUND_ERROR_PAYMENT_NEEDS_COMPLETION',
  /** Request Entity Too Large - a general error occurred. */
  RequestEntityTooLarge = 'REQUEST_ENTITY_TOO_LARGE',
  /** Request Timeout - a general error occurred. */
  RequestTimeout = 'REQUEST_TIMEOUT',
  /** The card issuer declined the refund. */
  ReservationDeclined = 'RESERVATION_DECLINED',
  /** The fields are not accessible at the request api version. Use API_VERSION_INCOMPATIBLE instead. */
  RetiredFieldSet = 'RETIRED_FIELD_SET',
  /** The API request is not supported in sandbox. */
  SandboxNotSupported = 'SANDBOX_NOT_SUPPORTED',
  /**
   * In the context of schedule updates, there can't be more than one update schedule for
   * execution for the same object and property type.
   */
  ScheduleUpdatesDuplicateExecuteAt = 'SCHEDULE_UPDATES_DUPLICATE_EXECUTE_AT',
  /**
   * In the context of schedule updates, to create a schedule transaction, the execute at time
   * must be in the future.
   */
  ScheduleUpdatesPastExecuteAt = 'SCHEDULE_UPDATES_PAST_EXECUTE_AT',
  /** Service Unavailable - a general error occurred. */
  ServiceUnavailable = 'SERVICE_UNAVAILABLE',
  /** A session associated with the payment has expired. */
  SessionExpired = 'SESSION_EXPIRED',
  /** The provided source id has expired. */
  SourceExpired = 'SOURCE_EXPIRED',
  /** The provided source id was already used to create a card. */
  SourceUsed = 'SOURCE_USED',
  /** A temporary internal error occurred. You can safely retry your call using the same idempotency key. */
  TemporaryError = 'TEMPORARY_ERROR',
  /** Too many entries in the map field. */
  TooManyMapEntries = 'TOO_MANY_MAP_ENTRIES',
  /**
   * The card issuer has determined the payment amount is either too high or too low.
   * The API returns the error code mostly for credit cards (for example, the card reached
   * the credit limit). However, sometimes the issuer bank can indicate the error for debit
   * or prepaid cards (for example, card has insufficient funds).
   */
  TransactionLimit = 'TRANSACTION_LIMIT',
  /** A general authorization error occurred. */
  Unauthorized = 'UNAUTHORIZED',
  /** General error - the value provided was unexpected. */
  UnexpectedValue = 'UNEXPECTED_VALUE',
  /** The body parameter is not recognized by the requested endpoint. */
  UnknownBodyParameter = 'UNKNOWN_BODY_PARAMETER',
  /** The query parameters provided is invalid for the requested endpoint. */
  UnknownQueryParameter = 'UNKNOWN_QUERY_PARAMETER',
  /** Unprocessable Entity - a general error occurred. */
  UnprocessableEntity = 'UNPROCESSABLE_ENTITY',
  /** The provided URL is unreachable. */
  UnreachableUrl = 'UNREACHABLE_URL',
  /** The credit card provided is not from a supported issuer. */
  UnsupportedCardBrand = 'UNSUPPORTED_CARD_BRAND',
  /** The API request references an unsupported country. */
  UnsupportedCountry = 'UNSUPPORTED_COUNTRY',
  /** The API request references an unsupported currency. */
  UnsupportedCurrency = 'UNSUPPORTED_CURRENCY',
  /** The entry method for the credit card (swipe, dip, tap) is not supported. */
  UnsupportedEntryMethod = 'UNSUPPORTED_ENTRY_METHOD',
  /** The API request references an unsupported instrument type/ */
  UnsupportedInstrumentType = 'UNSUPPORTED_INSTRUMENT_TYPE',
  /**
   * The referenced loyalty program reward tier is not supported.  This could
   * happen if the reward tier created in a first party application is incompatible
   * with the Loyalty API.
   */
  UnsupportedLoyaltyRewardTier = 'UNSUPPORTED_LOYALTY_REWARD_TIER',
  /** Unsupported Media Type - a general error occurred. */
  UnsupportedMediaType = 'UNSUPPORTED_MEDIA_TYPE',
  /** The API request references an unsupported source type. */
  UnsupportedSourceType = 'UNSUPPORTED_SOURCE_TYPE',
  /**
   * The calling application is using an access token created prior to 2016-03-30
   * and is not compatible with v2 Square API calls.
   */
  V1AccessToken = 'V1_ACCESS_TOKEN',
  /** The calling application was created prior to 2016-03-30 and is not compatible with v2 Square API calls. */
  V1Application = 'V1_APPLICATION',
  /** The provided value has a default (empty) value such as a blank string. */
  ValueEmpty = 'VALUE_EMPTY',
  /** The provided value does not match an expected regular expression. */
  ValueRegexMismatch = 'VALUE_REGEX_MISMATCH',
  /** The provided value is greater than the supported maximum. */
  ValueTooHigh = 'VALUE_TOO_HIGH',
  /** The provided string value is longer than the maximum length allowed. */
  ValueTooLong = 'VALUE_TOO_LONG',
  /** The provided value is less than the supported minimum. */
  ValueTooLow = 'VALUE_TOO_LOW',
  /** The provided string value is shorter than the minimum length allowed. */
  ValueTooShort = 'VALUE_TOO_SHORT',
  /** The AVS could not be verified. */
  VerifyAvsFailure = 'VERIFY_AVS_FAILURE',
  /** The CVV could not be verified. */
  VerifyCvvFailure = 'VERIFY_CVV_FAILURE',
  /** The provided object version does not match the expected value. */
  VersionMismatch = 'VERSION_MISMATCH',
  /** The card issuer declined the request because the issuer requires voice authorization from the cardholder. */
  VoiceFailure = 'VOICE_FAILURE'
}

/**
 * Input type used to specify filters on elements of a `[ErrorCode]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ErrorCodeListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `ErrorCodeListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<ErrorCodeListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<ErrorCodeListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<ErrorCodeInput>>;
};

/**
 * Input type used to specify filters on `[ErrorCode]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ErrorCodeListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `ErrorCodeListFilterInput` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<ErrorCodeListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<ErrorCodeListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<ErrorCodeListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<ErrorCodeListFilterInput>;
};

/**
 * Input type used to specify filters on a `Error` object referenced directly
 * or transitively from a list field that has been configured to index each leaf field as
 * its own flattened list of values.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ErrorFieldsListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `ErrorFieldsListFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<ErrorFieldsListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<ErrorFieldsListFilterInput>>;
  /**
   * Used to filter on the `category` field:
   *
   * > The high-level category for the error.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  category?: InputMaybe<ErrorCategoryListFilterInput>;
  /**
   * Used to filter on the `code` field:
   *
   * > The specific code of the error.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  code?: InputMaybe<ErrorCodeListFilterInput>;
  /**
   * Used to filter on the number of non-null elements in this list field.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  count?: InputMaybe<IntFilterInput>;
  /**
   * Used to filter on the `detail` field:
   *
   * > A human-readable description of the error for debugging purposes.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  detail?: InputMaybe<StringListFilterInput>;
  /**
   * Used to filter on the `field` field:
   *
   * > The name of the field provided in the original request (if any) that the error pertains to.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  field?: InputMaybe<StringListFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<ErrorFieldsListFilterInput>;
};

/**
 * Indicates which products matched by a CatalogPricingRule
 * will be excluded if the pricing rule uses an exclude set.
 */
export enum ExcludeStrategy {
  /**
   * The least expensive matched products are excluded from the pricing. If
   * the pricing rule is set to exclude one product and multiple products in the
   * match set qualify as least expensive, then one will be excluded at random.
   *
   * Excluding the least expensive product gives the best discount value to the buyer.
   */
  LeastExpensive = 'LEAST_EXPENSIVE',
  /**
   * The most expensive matched product is excluded from the pricing rule.
   * If multiple products have the same price and all qualify as least expensive,
   * one will be excluded at random.
   *
   * This guarantees that the most expensive product is purchased at full price.
   */
  MostExpensive = 'MOST_EXPENSIVE'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Stores details about an external payment. Contains only non-confidential information.
 * For more information, see
 * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
 */
export type ExternalPaymentDetails = {
  __typename?: 'ExternalPaymentDetails';
  /** A description of the external payment source. For example, "Food Delivery Service". */
  source?: Maybe<Scalars['String']['output']>;
  /** The fees paid to the source. The `amountMoney` minus this field is the net amount seller receives. */
  sourceFeeMoney?: Maybe<Money>;
  /** An ID to associate the payment to its originating source. */
  sourceId?: Maybe<Scalars['ID']['output']>;
  /** The type of external payment the seller received. */
  type?: Maybe<ExternalPaymentType>;
};

/**
 * Input type used to specify filters on `ExternalPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ExternalPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `source` field:
   *
   * > A description of the external payment source. For example, "Food Delivery Service".
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  source?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `sourceFeeMoney` field:
   *
   * > The fees paid to the source. The `amountMoney` minus this field is the net amount seller receives.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  sourceFeeMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `sourceId` field:
   *
   * > An ID to associate the payment to its originating source.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  sourceId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `type` field:
   *
   * > The type of external payment the seller received.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  type?: InputMaybe<ExternalPaymentTypeFilterInput>;
};

/** The type of external payment the seller received. */
export enum ExternalPaymentType {
  /** Paid using external bank transfer. */
  BankTransfer = 'BANK_TRANSFER',
  /** A credit or debit card that Square does not support. */
  Card = 'CARD',
  /** Paid using a physical check. */
  Check = 'CHECK',
  /** Paid using a crypto currency. */
  Crypto = 'CRYPTO',
  /** Paid using an E-money provider. */
  Emoney = 'EMONEY',
  /** A third-party application gathered this payment outside of Square. */
  External = 'EXTERNAL',
  /** Restaurant voucher provided by employers to employees to pay for meals. */
  FoodVoucher = 'FOOD_VOUCHER',
  /** A type not listed here. */
  Other = 'OTHER',
  /** Paid using a non-Square gift card. */
  OtherGiftCard = 'OTHER_GIFT_CARD',
  /** Paid using peer-to-peer payment applications. */
  Social = 'SOCIAL',
  /** Paid using Square Cash App. */
  SquareCash = 'SQUARE_CASH',
  /** Use for house accounts, store credit, and so forth. */
  StoredBalance = 'STORED_BALANCE'
}

/**
 * Input type used to specify filters on `ExternalPaymentType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type ExternalPaymentTypeFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<ExternalPaymentTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<ExternalPaymentTypeInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<ExternalPaymentTypeFilterInput>;
};

/** The type of external payment the seller received. */
export enum ExternalPaymentTypeInput {
  /** Paid using external bank transfer. */
  BankTransfer = 'BANK_TRANSFER',
  /** A credit or debit card that Square does not support. */
  Card = 'CARD',
  /** Paid using a physical check. */
  Check = 'CHECK',
  /** Paid using a crypto currency. */
  Crypto = 'CRYPTO',
  /** Paid using an E-money provider. */
  Emoney = 'EMONEY',
  /** A third-party application gathered this payment outside of Square. */
  External = 'EXTERNAL',
  /** Restaurant voucher provided by employers to employees to pay for meals. */
  FoodVoucher = 'FOOD_VOUCHER',
  /** A type not listed here. */
  Other = 'OTHER',
  /** Paid using a non-Square gift card. */
  OtherGiftCard = 'OTHER_GIFT_CARD',
  /** Paid using peer-to-peer payment applications. */
  Social = 'SOCIAL',
  /** Paid using Square Cash App. */
  SquareCash = 'SQUARE_CASH',
  /** Use for house accounts, store credit, and so forth. */
  StoredBalance = 'STORED_BALANCE'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of adjustments due to the Square processing fee.
 */
export type FeeDetails = {
  __typename?: 'FeeDetails';
  /** Unique ID for the payment related to the fee. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `FeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type FeeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to the fee.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * A filter to select resources based on an exact field value.For any given
 * value, the value can only be in one property. Depending on the field, either
 * all properties can be set or only a subset will be available.
 *
 * Refer to the documentation of the field.
 */
export type FilterValue = {
  /** A list of terms that must be present on the field of the resource. */
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * A list of terms where at least one of them must be present on the
   * field of the resource.
   */
  any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of terms that must not be present on the field the resource */
  none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any credit to the merchant for the purposes of Free Processing.
 */
export type FreeProcessingDetails = {
  __typename?: 'FreeProcessingDetails';
  /** Unique ID for the payment related to free processing. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `FreeProcessingDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type FreeProcessingDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to free processing.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** Latitude and longitude coordinates. */
export type GeoCoordinates = {
  __typename?: 'GeoCoordinates';
  /** The latitude of the coordinate expressed in degrees. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The longitude of the coordinate expressed in degrees. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** Geographic coordinates representing a location on the Earth's surface. */
export type GeoLocation = {
  __typename?: 'GeoLocation';
  /** Angular distance north or south of the Earth's equator, measured in degrees from -90 to +90. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Angular distance east or west of the Prime Meridian at Greenwich, UK, measured in degrees from -180 to +180. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** Input type used to specify distance filtering parameters on `GeoLocation` fields. */
export type GeoLocationDistanceFilterInput = {
  /** Angular distance north or south of the Earth's equator, measured in degrees from -90 to +90. */
  latitude: Scalars['Float']['input'];
  /** Angular distance east or west of the Prime Meridian at Greenwich, UK, measured in degrees from -180 to +180. */
  longitude: Scalars['Float']['input'];
  /**
   * Maximum distance (of the provided `unit`) to consider "near" the location identified
   * by `latitude` and `longitude`.
   */
  maxDistance: Scalars['Float']['input'];
  /** Determines the unit of the specified `maxDistance`. */
  unit: DistanceUnitInput;
};

/**
 * Input type used to specify filters on `GeoLocation` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type GeoLocationFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<GeoLocationFilterInput>>;
  /**
   * Matches records where the field's geographic location is within a specified distance from the
   * location identified by `latitude` and `longitude`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  near?: InputMaybe<GeoLocationDistanceFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<GeoLocationFilterInput>;
};

/**
 * Represents an action performed on a gift card that affects its state or balance.A gift card activity contains information about a specific activity type. For example, a `REDEEM` activity
 * includes a `redeem_activity_details` field that contains information about the redemption.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivity = {
  __typename?: 'GiftCardActivity';
  /**
   * Additional details about an `ACTIVATE` activity, which is used to activate a gift card with
   * an initial balance.
   */
  activateActivityDetails?: Maybe<GiftCardActivityActivate>;
  /**
   * Additional details about an `ADJUST_DECREMENT` activity, which is used to deduct money from a gift
   * card outside of a typical `REDEEM` activity flow.
   */
  adjustDecrementActivityDetails?: Maybe<GiftCardActivityAdjustDecrement>;
  /**
   * Additional details about an `ADJUST_INCREMENT` activity, which is used to add money to a gift card
   * outside of a typical `ACTIVATE`, `LOAD`, or `REFUND` activity flow.
   */
  adjustIncrementActivityDetails?: Maybe<GiftCardActivityAdjustIncrement>;
  /** Additional details about a `BLOCK` activity, which Square uses to temporarily block a gift card. */
  blockActivityDetails?: Maybe<GiftCardActivityBlock>;
  /** Additional details about a `CLEAR_BALANCE` activity, which is used to set the balance of a gift card to zero. */
  clearBalanceActivityDetails?: Maybe<GiftCardActivityClearBalance>;
  /**
   * The timestamp when the gift card activity was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Additional details about a `DEACTIVATE` activity, which is used to deactivate a gift card. */
  deactivateActivityDetails?: Maybe<GiftCardActivityDeactivate>;
  /**
   * The gift card ID. When creating a gift card activity, `gift_card_id` is not required if
   * `gift_card_gan` is specified.
   */
  giftCard?: Maybe<SquareGiftCard>;
  /** The final balance on the gift card after the action is completed. */
  giftCardBalanceMoney?: Maybe<Money>;
  /**
   * The gift card account number (GAN). When creating a gift card activity, `gift_card_gan`
   * is not required if `gift_card_id` is specified.
   */
  giftCardGan?: Maybe<Scalars['String']['output']>;
  /** The Square-assigned ID of the gift card activity. */
  id: Scalars['ID']['output'];
  /**
   * Additional details about an `IMPORT` activity, which Square uses to import a third-party
   * gift card with a balance.
   */
  importActivityDetails?: Maybe<GiftCardActivityImport>;
  /**
   * Additional details about an `IMPORT_REVERSAL` activity, which Square uses to reverse the
   * import of a third-party gift card.
   */
  importReversalActivityDetails?: Maybe<GiftCardActivityImportReversal>;
  /** Additional details about a `LOAD` activity, which is used to reload money onto a gift card. */
  loadActivityDetails?: Maybe<GiftCardActivityLoad>;
  /** The ID of the business location where the activity occurred. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * Additional details about a `REDEEM` activity, which is used to redeem a gift card for a purchase.
   *
   * For applications that process payments using the Square Payments API, Square creates a `REDEEM` activity that
   * updates the gift card balance after the corresponding [CreatePayment](api-endpoint:Payments-CreatePayment)
   * request is completed. Applications that use a custom payment processing system must call
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) to create the `REDEEM` activity.
   */
  redeemActivityDetails?: Maybe<GiftCardActivityRedeem>;
  /**
   * Additional details about a `REFUND` activity, which is used to add money to a gift card when
   * refunding a payment.
   *
   * For applications that refund payments to a gift card using the Square Refunds API, Square automatically
   * creates a `REFUND` activity that updates the gift card balance after a [RefundPayment](api-endpoint:Refunds-RefundPayment)
   * request is completed. Applications that use a custom processing system must call
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) to create the `REFUND` activity.
   */
  refundActivityDetails?: Maybe<GiftCardActivityRefund>;
  /**
   * Additional details about a `TRANSFER_BALANCE_FROM` activity, which Square uses to deduct money from
   * a gift as the result of a transfer to another gift card.
   */
  transferBalanceFromActivityDetails?: Maybe<GiftCardActivityTransferBalanceFrom>;
  /**
   * Additional details about a `TRANSFER_BALANCE_TO` activity, which Square uses to add money to
   * a gift card as the result of a transfer from another gift card.
   */
  transferBalanceToActivityDetails?: Maybe<GiftCardActivityTransferBalanceTo>;
  /** The type of gift card activity. */
  type?: Maybe<GiftCardActivityType>;
  /** Additional details about an `UNBLOCK` activity, which Square uses to unblock a gift card. */
  unblockActivityDetails?: Maybe<GiftCardActivityUnblock>;
  /**
   * Additional details about an `UNLINKED_ACTIVITY_REFUND` activity. This activity is used to add money
   * to a gift card when refunding a payment that was processed using a custom payment processing system
   * and not linked to the gift card.
   */
  unlinkedActivityRefundActivityDetails?: Maybe<GiftCardActivityUnlinkedActivityRefund>;
};

/**
 * Represents details about an `ACTIVATE` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityActivate = {
  __typename?: 'GiftCardActivityActivate';
  /**
   * The amount added to the gift card. This value is a positive integer.
   *
   * Applications that use a custom order processing system must specify this amount in the
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  amount?: Maybe<Money>;
  /**
   * The payment instrument IDs used to process the gift card purchase, such as a credit card ID
   * or bank account ID.
   *
   * Applications that use a custom order processing system must specify payment instrument IDs in
   * the [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   * Square uses this information to perform compliance checks.
   *
   * For applications that use the Square Orders API to process payments, Square has the necessary
   * instrument IDs to perform compliance checks.
   *
   * Each buyer payment instrument ID can contain a maximum of 255 characters.
   */
  buyerPaymentInstrumentIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The UID of the `GIFT_CARD` line item in the order that represents the gift card purchase.
   *
   * Applications that use the Square Orders API to process orders must specify the line item UID
   * in the [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  lineItemUid?: Maybe<Scalars['UID']['output']>;
  /**
   * The ID of the order that contains the `GIFT_CARD` line item.
   *
   * Applications that use the Square Orders API to process orders must specify the order ID
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  order?: Maybe<Order>;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   *
   * Applications that use a custom order processing system can use this field to track information
   * related to an order or payment.
   */
  referenceId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Represents details about an `ADJUST_DECREMENT` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityAdjustDecrement = {
  __typename?: 'GiftCardActivityAdjustDecrement';
  /** The amount deducted from the gift card balance. This value is a positive integer. */
  amount?: Maybe<Money>;
  /** The reason the gift card balance was adjusted. */
  reason?: Maybe<GiftCardActivityAdjustDecrementReason>;
};

/** Indicates the reason for deducting money from a gift card. */
export enum GiftCardActivityAdjustDecrementReason {
  /** The balance was decreased to reverse an unintentional balance increase. */
  BalanceAccidentallyIncreased = 'BALANCE_ACCIDENTALLY_INCREASED',
  /**
   * The balance was decreased because the order used to purchase or reload the
   * gift card was refunded.
   */
  PurchaseWasRefunded = 'PURCHASE_WAS_REFUNDED',
  /** The balance was decreased to accommodate support issues. */
  SupportIssue = 'SUPPORT_ISSUE',
  /**
   * The balance was decreased because the seller detected suspicious or fraudulent activity
   * on the gift card.
   */
  SuspiciousActivity = 'SUSPICIOUS_ACTIVITY'
}

/**
 * Represents details about an `ADJUST_INCREMENT` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityAdjustIncrement = {
  __typename?: 'GiftCardActivityAdjustIncrement';
  /** The amount added to the gift card balance. This value is a positive integer. */
  amount?: Maybe<Money>;
  /** The reason the gift card balance was adjusted. */
  reason?: Maybe<GiftCardActivityAdjustIncrementReason>;
};

/** Indicates the reason for adding money to a gift card. */
export enum GiftCardActivityAdjustIncrementReason {
  /** The seller gifted a complimentary gift card balance increase. */
  Complimentary = 'COMPLIMENTARY',
  /**
   * The seller increased the gift card balance
   * to accommodate support issues.
   */
  SupportIssue = 'SUPPORT_ISSUE',
  /** The transaction is voided. */
  TransactionVoided = 'TRANSACTION_VOIDED'
}

/**
 * Represents details about a `BLOCK` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityBlock = {
  __typename?: 'GiftCardActivityBlock';
  /** The reason the gift card was blocked. */
  reason?: Maybe<GiftCardActivityBlockReason>;
};

/** Indicates the reason for blocking a gift card. */
export enum GiftCardActivityBlockReason {
  /** The gift card is blocked because the buyer initiated a chargeback on the gift card purchase. */
  ChargebackBlock = 'CHARGEBACK_BLOCK'
}

/**
 * Represents details about a `CLEAR_BALANCE` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityClearBalance = {
  __typename?: 'GiftCardActivityClearBalance';
  /** The reason the gift card balance was cleared. */
  reason?: Maybe<GiftCardActivityClearBalanceReason>;
};

/** Indicates the reason for clearing the balance of a gift card. */
export enum GiftCardActivityClearBalanceReason {
  /** The seller cleared the balance to reuse the gift card. */
  ReuseGiftcard = 'REUSE_GIFTCARD',
  /** The seller suspects suspicious activity. */
  SuspiciousActivity = 'SUSPICIOUS_ACTIVITY',
  /**
   * The gift card balance was cleared for an unknown reason.
   *
   * This reason is read-only and cannot be used to create a `CLEAR_BALANCE` activity using the Gift Card Activities API.
   */
  UnknownReason = 'UNKNOWN_REASON'
}

/**
 * A list of GiftCardActivities.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityConnection = {
  __typename?: 'GiftCardActivityConnection';
  /** List of Gift Card Activity. */
  nodes?: Maybe<Array<GiftCardActivity>>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Represents details about a `DEACTIVATE` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityDeactivate = {
  __typename?: 'GiftCardActivityDeactivate';
  /** The reason the gift card was deactivated. */
  reason?: Maybe<GiftCardActivityDeactivateReason>;
};

/** Indicates the reason for deactivating a gift card. */
export enum GiftCardActivityDeactivateReason {
  /**
   * A chargeback on the gift card purchase (or the gift card load) was ruled in favor of the buyer.
   *
   * This reason is read-only and cannot be used to create a `DEACTIVATE` activity using the Gift Card Activities API.
   */
  ChargebackDeactivate = 'CHARGEBACK_DEACTIVATE',
  /** The seller suspects suspicious activity. */
  SuspiciousActivity = 'SUSPICIOUS_ACTIVITY',
  /**
   * The gift card was deactivated for an unknown reason.
   *
   * This reason is read-only and cannot be used to create a `DEACTIVATE` activity using the Gift Card Activities API.
   */
  UnknownReason = 'UNKNOWN_REASON'
}

/**
 * Input type used to specify filters on `GiftCardActivity` fields.
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type GiftCardActivityFilter = {
  /**
   * The timestamp for the beginning of the reporting period, in RFC 3339 format.
   * This start time is inclusive. The default value is the current time minus one year.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  beginTime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The timestamp for the end of the reporting period, in RFC 3339 format.
   * This end time is inclusive. The default value is the current time.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Used to filter on the `giftCardId` field:
   * Will be ignored if `null` or an empty object is passed.
   */
  giftCardId?: InputMaybe<BasicIdFilter>;
  /**
   * Used to filter on the `locationId` field:
   * Will be ignored if `null` or an empty object is passed.
   */
  locationId?: InputMaybe<BasicIdFilter>;
  /**
   * Used to filter on the `merchantId` field:
   * > The ID of the merchant associated with the giftCard.
   * Will be ignored if `null` or an empty object is passed.
   */
  merchantId?: InputMaybe<BasicIdFilter>;
  /**
   * Used to filter on the `type` field:
   * > The gift cad type.
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<GiftCardActivityTypeFilter>;
};

/**
 * Represents details about an `IMPORT` gift card activity type.This activity type is used when Square imports a third-party gift card, in which case the
 * `gan_source` of the gift card is set to `OTHER`.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityImport = {
  __typename?: 'GiftCardActivityImport';
  /** The balance amount on the imported gift card. */
  amount?: Maybe<Money>;
};

/**
 * Represents details about an `IMPORT_REVERSAL` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityImportReversal = {
  __typename?: 'GiftCardActivityImportReversal';
  /**
   * The amount of money cleared from the third-party gift card when
   * the import was reversed.
   */
  amount?: Maybe<Money>;
};

/**
 * Represents details about a `LOAD` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityLoad = {
  __typename?: 'GiftCardActivityLoad';
  /**
   * The amount added to the gift card. This value is a positive integer.
   *
   * Applications that use a custom order processing system must specify this amount in the
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  amount?: Maybe<Money>;
  /**
   * The payment instrument IDs used to process the order for the additional funds, such as a credit card ID
   * or bank account ID.
   *
   * Applications that use a custom order processing system must specify payment instrument IDs in
   * the [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   * Square uses this information to perform compliance checks.
   *
   * For applications that use the Square Orders API to process payments, Square has the necessary
   * instrument IDs to perform compliance checks.
   *
   * Each buyer payment instrument ID can contain a maximum of 255 characters.
   */
  buyerPaymentInstrumentIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The UID of the `GIFT_CARD` line item in the order that represents the additional funds for the gift card.
   *
   * Applications that use the Square Orders API to process orders must specify the line item UID
   * in the [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  lineItemUid?: Maybe<Scalars['UID']['output']>;
  /**
   * The ID of the order that contains the `GIFT_CARD` line item.
   *
   * Applications that use the Square Orders API to process orders must specify the order ID in the
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  order?: Maybe<Order>;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   *
   * Applications that use a custom order processing system can use this field to track information related to
   * an order or payment.
   */
  referenceId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Represents details about a `REDEEM` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityRedeem = {
  __typename?: 'GiftCardActivityRedeem';
  /**
   * The amount deducted from the gift card for the redemption. This value is a positive integer.
   *
   * Applications that use a custom payment processing system must specify this amount in the
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  amount?: Maybe<Money>;
  /**
   * The ID of the payment that represents the gift card redemption. Square populates this field
   * if the payment was processed by Square.
   */
  payment?: Maybe<Payment>;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   *
   * Applications that use a custom payment processing system can use this field to track information
   * related to an order or payment.
   */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /**
   * The status of the gift card redemption. Gift cards redeemed from Square Point of Sale or the
   * Square Seller Dashboard use a two-state process: `PENDING`
   * to `COMPLETED` or `PENDING` to  `CANCELED`. Gift cards redeemed using the Gift Card Activities API
   * always have a `COMPLETED` status.
   */
  status?: Maybe<GiftCardActivityRedeemStatus>;
};

/**
 * Indicates the status of a gift card redemption.This status is relevant only for
 * redemptions made from Square products (such as Square Point of Sale) because Square products use a
 * two-state process. Gift cards redeemed using the Gift Card Activities API always have a `COMPLETED` status.
 */
export enum GiftCardActivityRedeemStatus {
  /**
   * The gift card redemption is canceled. A redemption is canceled if the authorization
   * on the gift card is voided.
   */
  Canceled = 'CANCELED',
  /** The gift card redemption is completed. */
  Completed = 'COMPLETED',
  /**
   * The gift card redemption is pending. `PENDING` is a temporary status that applies when a
   * gift card is redeemed from Square Point of Sale or another Square product. A `PENDING` status is updated to
   * `COMPLETED` if the payment is captured or `CANCELED` if the authorization is voided.
   */
  Pending = 'PENDING'
}

/**
 * Represents details about a `REFUND` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityRefund = {
  __typename?: 'GiftCardActivityRefund';
  /**
   * The amount added to the gift card for the refund. This value is a positive integer.
   *
   * This field is required when creating a `REFUND` activity. The amount can represent a full or partial refund.
   */
  amount?: Maybe<Money>;
  /**
   * The ID of the refunded payment. Square populates this field if the refund is for a
   * payment processed by Square. This field matches the `payment_id` in the corresponding
   * [RefundPayment](api-endpoint:Refunds-RefundPayment) request.
   */
  payment?: Maybe<Payment>;
  /**
   * The ID of the refunded `REDEEM` gift card activity. Square populates this field if the
   * `payment_id` in the corresponding [RefundPayment](api-endpoint:Refunds-RefundPayment) request
   * represents a gift card redemption.
   *
   * For applications that use a custom payment processing system, this field is required when creating
   * a `REFUND` activity. The provided `REDEEM` activity ID must be linked to the same gift card.
   */
  redeemActivityId?: Maybe<Scalars['ID']['output']>;
  /** A client-specified ID that associates the gift card activity with an entity in another system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Represents details about a `TRANSFER_BALANCE_FROM` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityTransferBalanceFrom = {
  __typename?: 'GiftCardActivityTransferBalanceFrom';
  /** The amount deducted from the gift card for the transfer. This value is a positive integer. */
  amount?: Maybe<Money>;
  /** The ID of the gift card to which the specified amount was transferred. */
  transferToGiftCardId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Represents details about a `TRANSFER_BALANCE_TO` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityTransferBalanceTo = {
  __typename?: 'GiftCardActivityTransferBalanceTo';
  /** The amount added to the gift card balance for the transfer. This value is a positive integer. */
  amount?: Maybe<Money>;
  /** The ID of the gift card from which the specified amount was transferred. */
  giftCard?: Maybe<SquareGiftCard>;
};

/** Indicates the type of gift card activity. */
export enum GiftCardActivityType {
  /**
   * Activated a gift card with a balance. When a gift card is activated, Square changes
   * the gift card state from `PENDING` to `ACTIVE`. A gift card must be in the `ACTIVE` state
   * to be used for other balance-changing activities.
   */
  Activate = 'ACTIVATE',
  /** Deducted money from a gift card outside of a typical `REDEEM` activity flow. */
  AdjustDecrement = 'ADJUST_DECREMENT',
  /** Added money to a gift card outside of a typical `ACTIVATE`, `LOAD`, or `REFUND` activity flow. */
  AdjustIncrement = 'ADJUST_INCREMENT',
  /**
   * Temporarily blocked a gift card from balance-changing activities. `BLOCK` activities
   * are managed by Square and cannot be created using the Gift Card Activities API.
   */
  Block = 'BLOCK',
  /** Set the balance of a gift card to zero. */
  ClearBalance = 'CLEAR_BALANCE',
  /** Permanently blocked a gift card from balance-changing activities. */
  Deactivate = 'DEACTIVATE',
  /**
   * Imported a third-party gift card with a balance. `IMPORT` activities are managed
   * by Square and cannot be created using the Gift Card Activities API.
   */
  Import = 'IMPORT',
  /**
   * Reversed the import of a third-party gift card, which sets the gift card state to
   * `PENDING` and clears the balance. `IMPORT_REVERSAL` activities are managed by Square and
   * cannot be created using the Gift Card Activities API.
   */
  ImportReversal = 'IMPORT_REVERSAL',
  /** Loaded a gift card with additional funds. */
  Load = 'LOAD',
  /** Redeemed a gift card for a purchase. */
  Redeem = 'REDEEM',
  /**
   * Added money to a gift card from a refunded transaction. A `REFUND` activity might be linked to
   * a Square payment, depending on how the payment and refund are processed. For example:
   * - A payment processed by Square can be refunded to a `PENDING` or `ACTIVE` gift card using the Square
   * Seller Dashboard, Square Point of Sale, or Refunds API.
   * - A payment processed using a custom processing system can be refunded to the same gift card.
   */
  Refund = 'REFUND',
  /**
   * Deducted money from a gift card as the result of a transfer to the balance of another gift card.
   * `TRANSFER_BALANCE_FROM` activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  TransferBalanceFrom = 'TRANSFER_BALANCE_FROM',
  /**
   * Added money to a gift card as the result of a transfer from the balance of another gift card.
   * `TRANSFER_BALANCE_TO` activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  TransferBalanceTo = 'TRANSFER_BALANCE_TO',
  /**
   * Unblocked a gift card, which enables it to resume balance-changing activities. `UNBLOCK`
   * activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  Unblock = 'UNBLOCK',
  /**
   * Added money to a gift card from a refunded transaction that was processed using a custom payment
   * processing system and not linked to the gift card.
   */
  UnlinkedActivityRefund = 'UNLINKED_ACTIVITY_REFUND'
}

/** GiftCardActivityTypeFilter is used for filtering a query with GiftCardActivityType */
export type GiftCardActivityTypeFilter = {
  /** Used for filtering a query with GiftCardActivity */
  equalToAnyOf?: InputMaybe<Array<GiftCardActivityTypeInput>>;
};

/** Indicates the type of gift card activity. */
export enum GiftCardActivityTypeInput {
  /**
   * Activated a gift card with a balance. When a gift card is activated, Square changes
   * the gift card state from `PENDING` to `ACTIVE`. A gift card must be in the `ACTIVE` state
   * to be used for other balance-changing activities.
   */
  Activate = 'ACTIVATE',
  /** Deducted money from a gift card outside of a typical `REDEEM` activity flow. */
  AdjustDecrement = 'ADJUST_DECREMENT',
  /** Added money to a gift card outside of a typical `ACTIVATE`, `LOAD`, or `REFUND` activity flow. */
  AdjustIncrement = 'ADJUST_INCREMENT',
  /**
   * Temporarily blocked a gift card from balance-changing activities. `BLOCK` activities
   * are managed by Square and cannot be created using the Gift Card Activities API.
   */
  Block = 'BLOCK',
  /** Set the balance of a gift card to zero. */
  ClearBalance = 'CLEAR_BALANCE',
  /** Permanently blocked a gift card from balance-changing activities. */
  Deactivate = 'DEACTIVATE',
  /**
   * Imported a third-party gift card with a balance. `IMPORT` activities are managed
   * by Square and cannot be created using the Gift Card Activities API.
   */
  Import = 'IMPORT',
  /**
   * Reversed the import of a third-party gift card, which sets the gift card state to
   * `PENDING` and clears the balance. `IMPORT_REVERSAL` activities are managed by Square and
   * cannot be created using the Gift Card Activities API.
   */
  ImportReversal = 'IMPORT_REVERSAL',
  /** Loaded a gift card with additional funds. */
  Load = 'LOAD',
  /** Redeemed a gift card for a purchase. */
  Redeem = 'REDEEM',
  /**
   * Added money to a gift card from a refunded transaction. A `REFUND` activity might be linked to
   * a Square payment, depending on how the payment and refund are processed. For example:
   * - A gift card payment processed by Square can be refunded to the same gift card using Square Point of Sale,
   * the Square Seller Dashboard, or the Refunds API.
   * - A cross-tender payment processed by Square can be refunded to a gift card using Square Point of Sale or the
   * Square Seller Dashboard. The payment source might be a credit card or different gift card.
   * - A payment processed using a custom payment processing system can be refunded to the same gift card.
   */
  Refund = 'REFUND',
  /**
   * Deducted money from a gift card as the result of a transfer to the balance of another gift card.
   * `TRANSFER_BALANCE_FROM` activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  TransferBalanceFrom = 'TRANSFER_BALANCE_FROM',
  /**
   * Added money to a gift card as the result of a transfer from the balance of another gift card.
   * `TRANSFER_BALANCE_TO` activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  TransferBalanceTo = 'TRANSFER_BALANCE_TO',
  /**
   * Unblocked a gift card, which enables it to resume balance-changing activities. `UNBLOCK`
   * activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  Unblock = 'UNBLOCK',
  /**
   * Added money to a gift card from a refunded transaction that was processed using a custom payment
   * processing system and not linked to the gift card.
   */
  UnlinkedActivityRefund = 'UNLINKED_ACTIVITY_REFUND'
}

/**
 * Represents details about an `UNBLOCK` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityUnblock = {
  __typename?: 'GiftCardActivityUnblock';
  /** The reason the gift card was unblocked. */
  reason?: Maybe<GiftCardActivityUnblockReason>;
};

/** Indicates the reason for unblocking a gift card. */
export enum GiftCardActivityUnblockReason {
  /** The gift card is unblocked because a chargeback was ruled in favor of the seller. */
  ChargebackUnblock = 'CHARGEBACK_UNBLOCK'
}

/**
 * Represents details about an `UNLINKED_ACTIVITY_REFUND` gift card activity type.
 * Permissions: GIFTCARDS_READ
 */
export type GiftCardActivityUnlinkedActivityRefund = {
  __typename?: 'GiftCardActivityUnlinkedActivityRefund';
  /** The amount added to the gift card for the refund. This value is a positive integer. */
  amount?: Maybe<Money>;
  /** The ID of the refunded payment. This field is not used starting in Square version 2022-06-16. */
  payment?: Maybe<Payment>;
  /** A client-specified ID that associates the gift card activity with an entity in another system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input type used to specify filters on `SquareGiftCard` fields. The individual fields will determine
 * how the Gift Card is retrieved. E.g. If id is pass in it is mutually exclusive with retrieving using
 * GAN or nonce or a any combination of customerId, state, and type together.
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type GiftCardFilter = {
  /**
   * Used to filter on the `customerId` field:
   * > The id of the customer profile to whom this gift card is linked.
   * Will be ignored if `null` or an empty object is passed.
   */
  customerId?: InputMaybe<BasicIdFilter>;
  /**
   * The gift card account number (GAN) of the gift card to retrieve. The maximum length of a GAN is
   * 255 digits to account for third-party GANs that have been imported. Square-issued gift cards have 16-digit GANs.
   * Min Length
   * 1
   * Max Length
   * 255
   */
  gan?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the gift card to retrieve. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Used to filter on the `merchantId` field:
   * > The ID of the merchant associated with the giftCard.
   * Will be ignored if `null` or an empty object is passed.
   */
  merchantId: BasicIdFilter;
  /** The payment token of the gift card to retrieve. Payment tokens are generated by the Web Payments SDK or In-App Payments SDK. */
  nonce?: InputMaybe<Scalars['String']['input']>;
  /**
   * Used to filter on the `state` field:
   * > The current gift card state.
   * Will be ignored if `null` or an empty object is passed.
   */
  state?: InputMaybe<GiftCardStatusFilter>;
  /**
   * Used to filter on the `type` field:
   * > The gift cad type.
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<GiftCardTypeFilter>;
};

/**
 * Indicates the source that generated the gift card
 * account number (GAN).
 */
export enum GiftCardGanSource {
  /**
   * The GAN is provided by a non-Square system. For more information, see
   * [Custom GANs](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#custom-gans) or
   * [Third-party gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#third-party-gift-cards).
   */
  Other = 'OTHER',
  /** The GAN is generated by Square. */
  Square = 'SQUARE'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of the fee collected during the sale or reload of a gift card. This fee,
 * which is a portion of the amount loaded on the gift card, is deducted from the
 * merchant's payment balance. The fee is recorded as a new payout entry, not part
 * of the CHARGE payout entry.
 */
export type GiftCardLoadFeeDetails = {
  __typename?: 'GiftCardLoadFeeDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `GiftCardLoadFeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type GiftCardLoadFeeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a refund for the fee charged during the sale or reload of a gift card.
 */
export type GiftCardLoadFeeRefundDetails = {
  __typename?: 'GiftCardLoadFeeRefundDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `GiftCardLoadFeeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type GiftCardLoadFeeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a transfer of gift card funds to a central gift card pool account. In
 * franchises, when gift cards are loaded or reloaded at any location, the money
 * transfers to the franchisor's account.
 */
export type GiftCardPoolTransferDetails = {
  __typename?: 'GiftCardPoolTransferDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `GiftCardPoolTransferDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type GiftCardPoolTransferDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a reversal of transfer of gift card funds from a central gift card
 * pool account. In franchises, when gift cards are loaded or reloaded at any
 * location, the money transfers to the franchisor's account.
 */
export type GiftCardPoolTransferReversedDetails = {
  __typename?: 'GiftCardPoolTransferReversedDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `GiftCardPoolTransferReversedDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type GiftCardPoolTransferReversedDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** Indicates the gift card state. */
export enum GiftCardStatus {
  /** The gift card is active and can be used as a payment source. */
  Active = 'ACTIVE',
  /** Any activity that changes the gift card balance is temporarily forbidden. */
  Blocked = 'BLOCKED',
  /** Any activity that changes the gift card balance is permanently forbidden. */
  Deactivated = 'DEACTIVATED',
  /**
   * The gift card is pending activation.
   * This is the initial state when a gift card is created. Typically, you'll call
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) to create an
   * `ACTIVATE` activity that activates the gift card with an initial balance before first use.
   */
  Pending = 'PENDING'
}

/** GiftCardStatusFilter is used for filtering a query with GiftCardStatus */
export type GiftCardStatusFilter = {
  /** Used for filtering a query with GiftCardStatus */
  equalToAnyOf?: InputMaybe<Array<GiftCardStatusInput>>;
};

/** Indicates the gift card state. */
export enum GiftCardStatusInput {
  /** The gift card is active and can be used as a payment source. */
  Active = 'ACTIVE',
  /** Any activity that changes the gift card balance is temporarily forbidden. */
  Blocked = 'BLOCKED',
  /** Any activity that changes the gift card balance is permanently forbidden. */
  Deactivated = 'DEACTIVATED',
  /**
   * The gift card is pending activation.
   * This is the initial state when a gift card is created. You must activate the gift card
   * before it can be used.
   */
  Pending = 'PENDING'
}

/** Indicates the gift card type. */
export enum GiftCardType {
  /** A digital gift card. */
  Digital = 'DIGITAL',
  /** A plastic gift card. */
  Physical = 'PHYSICAL'
}

/** GiftCardTypeFilter is used for filtering a query with GiftCardType */
export type GiftCardTypeFilter = {
  /** Used for filtering a query with GiftCard */
  equalToAnyOf?: InputMaybe<Array<GiftCardTypeInput>>;
};

/** Indicates the gift card type. */
export enum GiftCardTypeInput {
  /** A digital gift card. */
  Digital = 'DIGITAL',
  /** A plastic gift card. */
  Physical = 'PHYSICAL'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any adjustment related to the holding or releasing of a payment.
 */
export type HoldAdjustmentDetails = {
  __typename?: 'HoldAdjustmentDetails';
  /** Unique ID for the payment related to the hold adjustment. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `HoldAdjustmentDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type HoldAdjustmentDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to the hold adjustment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Input type used to specify filters on `ID` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type IdFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<IdFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<IdFilterInput>;
};

/**
 * Input type used to specify filters on elements of a `[ID]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type IdListElementFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<IdListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Input type used to specify filters on `[ID]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type IdListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `IDListFilterInput` input because of collisions
   * between key names. For example, if you want to provide
   * multiple `anySatisfy: ...` filters, you could do `allOf: [{anySatisfy: ...}, {anySatisfy: ...}]`.
   *
   * Will be ignored when `null` is passed or an empty list is passed.
   */
  allOf?: InputMaybe<Array<IdListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<IdListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<IdListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<IdListFilterInput>;
};

/**
 * Input type used to specify filters on `Int` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type IntFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<IntFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<IntFilterInput>;
};

/**
 * Represents a change in state or quantity of product inventory at a
 * particular time and location.
 * Permissions: INVENTORY_READ
 */
export type InventoryAdjustment = InventoryChange & {
  __typename?: 'InventoryAdjustment';
  /** An adjustment group bundling the related adjustments of item variations through stock conversions in a single inventory event. */
  adjustmentGroup?: Maybe<InventoryAdjustmentGroup>;
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /** An RFC 3339-formatted timestamp that indicates when the physical count is received. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /**
   * The inventory state of the related quantity
   * of items before the adjustment.
   */
  fromState?: Maybe<InventoryState>;
  /**
   * The Square-generated ID of the goods receipt that caused the
   * adjustment. Only relevant for state transitions from the Square for Retail
   * app.
   */
  goodsReceiptId?: Maybe<Scalars['ID']['output']>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /**
   * The Square-generated ID of the Location where the related
   * quantity of items is being tracked.
   */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined.  For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The Square-generated ID of the purchase order that caused the
   * adjustment. Only relevant for state transitions from the Square for Retail
   * app.
   */
  purchaseOrderId?: Maybe<Scalars['ID']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /**
   * The Square-generated ID of the Refund that
   * caused the adjustment. Only relevant for refund-related state
   * transitions.
   */
  refundId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /**
   * The inventory state of the related quantity
   * of items after the adjustment.
   */
  toState?: Maybe<InventoryState>;
  /**
   * The total price paid for goods associated with the
   * adjustment. Present if and only if `to_state` is `SOLD`. Always
   * non-negative.
   */
  totalPriceMoney?: Maybe<Money>;
  /**
   * The Square-generated ID of the Transaction that
   * caused the adjustment. Only relevant for payment-related state
   * transitions.
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /**
   * Indicates how the inventory change is applied. See
   * [InventoryChangeType](entity:InventoryChangeType) for all possible values.
   * See [InventoryChangeType](#type-inventorychangetype) for possible values
   */
  type?: Maybe<InventoryChangeType>;
};

/** Permissions: INVENTORY_READ */
export type InventoryAdjustmentGroup = {
  __typename?: 'InventoryAdjustmentGroup';
  /**
   * Representative `from_state` for adjustments within the group. For example, for a group adjustment from `IN_STOCK` to `SOLD`,
   * there can be two component adjustments in the group: one from `IN_STOCK`to `COMPOSED` and the other one from `COMPOSED` to `SOLD`.
   * Here, the representative `from_state` for the `InventoryAdjustmentGroup` is `IN_STOCK`.
   */
  fromState?: Maybe<InventoryState>;
  /**
   * A unique ID generated by Square for the
   * `InventoryAdjustmentGroup`.
   */
  id: Scalars['ID']['output'];
  /** The inventory adjustment of the composed variation. */
  rootAdjustmentId?: Maybe<Scalars['ID']['output']>;
  /**
   * Representative `to_state` for adjustments within group. For example, for a group adjustment from `IN_STOCK` to `SOLD`,
   * the two component adjustments in the group can be from `IN_STOCK` to `COMPOSED` and from `COMPOSED` to `SOLD`.
   * Here, the representative `to_state` of the `InventoryAdjustmentGroup` is `SOLD`.
   */
  toState?: Maybe<InventoryState>;
};

/**
 * Inventory alert definition's associated values.
 *
 * Permissions:ITEMS_READ
 */
export type InventoryAlert = {
  __typename?: 'InventoryAlert';
  /**
   * If the inventory quantity for the variation is less than or equal to this value and type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard.
   * This value is always an integer.
   */
  threshold?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its threshold. */
  type?: Maybe<InventoryAlertType>;
};

/** Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. */
export enum InventoryAlertType {
  /** The variation generates an alert when its quantity is low. */
  LowQuantity = 'LOW_QUANTITY',
  /** The variation does not display an alert. */
  None = 'NONE'
}

/**
 * Represents a single physical count, inventory, adjustment, or transfer
 * that is part of the history of inventory changes for a particular
 * [CatalogObject](entity:CatalogObject) instance.
 * Permissions:INVENTORY_READ
 */
export type InventoryChange = {
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /** An RFC 3339-formatted timestamp that indicates when the physical count is received. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /** The Square-issued ID of the merchant. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined.  For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /**
   * Indicates how the inventory change is applied. See
   * [InventoryChangeType](entity:InventoryChangeType) for all possible values.
   * See [InventoryChangeType](#type-inventorychangetype) for possible values
   */
  type?: Maybe<InventoryChangeType>;
};

/**
 * Contains information of InventoryChange result.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryChangeConnection = {
  __typename?: 'InventoryChangeConnection';
  /** List of InventoryChange */
  nodes: Array<InventoryChange>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Used for filtering query inventoryChanges. */
export type InventoryChangeFilter = {
  /** The object IDs of any type of catalog objects to be retrieved. If the value is nil, it will return all catalog objects. */
  catalog?: InputMaybe<BasicIdFilter>;
  /** ID of the InventoryChange to retrieve. */
  id?: InputMaybe<BasicIdFilter>;
  /** The filter to return results by Location ID. */
  location?: InputMaybe<BasicIdFilter>;
  /** The merchant IDs associated with the InventoryChanges. */
  merchantId: BasicIdFilter;
  /** The filter to return ADJUSTMENT query results by InventoryState. */
  state?: InputMaybe<InventoryStateFilter>;
  /** The filter to return results by InventoryChangeType values other than TRANSFER. The default value is [PHYSICAL_COUNT, ADJUSTMENT]. */
  type?: InputMaybe<InventoryChangeTypeFilter>;
  /**
   * The filter to return results with their calculated_at value after the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of (1970-01-01T00:00:00Z).
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The filter to return results with their created_at or calculated_at value strictly before the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of (1970-01-01T00:00:00Z).
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedBefore?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Indicates how the inventory change was applied to a tracked product quantity. */
export enum InventoryChangeType {
  /**
   * The change occurred as part of the normal lifecycle of goods
   * (e.g., as an inventory adjustment).
   */
  Adjustment = 'ADJUSTMENT',
  /** The change occurred as part of a physical count update. */
  PhysicalCount = 'PHYSICAL_COUNT',
  /** The change occurred as part of an inventory transfer. */
  Transfer = 'TRANSFER'
}

/** Used for filtering with InventoryChangeType. */
export type InventoryChangeTypeFilter = {
  /** Indicates how the inventory change was applied to a tracked product quantity. */
  equalToAnyOf?: InputMaybe<Array<InventoryChangeType>>;
};

/**
 * Represents Square-estimated quantity of items in a particular state at a
 * particular seller location based on the known history of physical counts and
 * inventory adjustments.
 * Permissions: INVENTORY_READ
 */
export type InventoryCount = {
  __typename?: 'InventoryCount';
  /**
   * An RFC 3339-formatted timestamp that indicates when the most recent physical count or adjustment affecting
   * the estimated count is received.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  calculatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The Square-generated ID of the
   * CatalogObject being tracked.
   */
  catalog?: Maybe<CatalogObject>;
  /**
   * Whether the inventory count is for composed variation (TRUE) or not (FALSE). If true, the inventory count will not be present in the response of
   * any of these endpoints: [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory),
   * [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges),
   * [BatchRetrieveInventoryCounts](api-endpoint:Inventory-BatchRetrieveInventoryCounts), and
   * [RetrieveInventoryChanges](api-endpoint:Inventory-RetrieveInventoryChanges).
   */
  isEstimated?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The Square-generated ID of the Location where the related
   * quantity of items is being tracked.
   */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /**
   * The number of items affected by the estimated count as a decimal string.
   * Can support up to 5 digits after the decimal point.
   */
  quantity?: Maybe<Scalars['String']['output']>;
  /**
   * The current inventory state for the related
   * quantity of items.
   */
  state?: Maybe<InventoryState>;
};

/**
 * Contains information of InventoryCount result.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryCountConnection = {
  __typename?: 'InventoryCountConnection';
  /** List of InventoryCount */
  nodes: Array<InventoryCount>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Used for filtering query inventoryCounts. */
export type InventoryCountFilter = {
  /** The object IDs of any type of catalog objects to be retrieved. If the value is nil, it will return all catalog objects. */
  catalog?: InputMaybe<BasicIdFilter>;
  /** The filter to return results by Location ID. */
  location?: InputMaybe<BasicIdFilter>;
  /** The merchant IDs associated with the InventoryCounts. */
  merchantId: BasicIdFilter;
  /** The filter to return INVENTORY COUNT query results by InventoryState. */
  state?: InputMaybe<InventoryStateFilter>;
  /**
   * The filter to return results with their calculated_at value after the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of (1970-01-01T00:00:00Z).
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAfter?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Represents the quantity of an item variation that is physically present
 * at a specific location, verified by a seller or a seller's employee.For example,
 * a physical count might come from an employee counting the item variations on
 * hand or from syncing with an external system.
 * Permissions: INVENTORY_READ
 */
export type InventoryPhysicalCount = InventoryChange & {
  __typename?: 'InventoryPhysicalCount';
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /** An RFC 3339-formatted timestamp that indicates when the physical count is received. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /**
   * The Square-generated ID of the Location where the related
   * quantity of items is being tracked.
   */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined.  For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /**
   * The current inventory state for the related
   * quantity of items.
   */
  state?: Maybe<InventoryState>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /**
   * Indicates how the inventory change is applied. See
   * [InventoryChangeType](entity:InventoryChangeType) for all possible values.
   * See [InventoryChangeType](#type-inventorychangetype) for possible values
   */
  type?: Maybe<InventoryChangeType>;
};

/** Indicates the state of a tracked item quantity in the lifecycle of goods. */
export enum InventoryState {
  /** The related quantity of items that are part of a composition consisting one or more components. */
  Composed = 'COMPOSED',
  /**
   * The related quantity of items are in a custom state. **READ-ONLY**:
   * the Inventory API cannot move quantities to or from this state.
   */
  Custom = 'CUSTOM',
  /** The related quantity of items that are part of a component. */
  Decomposed = 'DECOMPOSED',
  /** The related quantity of items are on hand and available for sale. */
  InStock = 'IN_STOCK',
  /** The related quantity of items are in transit between locations. **READ-ONLY:** the Inventory API cannot currently be used to move quantities to or from this inventory state. */
  InTransit = 'IN_TRANSIT',
  /**
   * Replaced by `IN_TRANSIT` to represent quantities
   * of items that are in transit between locations.
   */
  InTransitTo = 'IN_TRANSIT_TO',
  /**
   * A placeholder indicating that the related quantity of items are not
   * currently tracked in Square. Transferring quantities from the `NONE` state
   * to a tracked state (e.g., `IN_STOCK`) introduces stock into the system.
   */
  None = 'NONE',
  /**
   * The related quantity of items were ordered from a vendor but not yet
   * received. **READ-ONLY**: the Inventory API cannot move quantities to or
   * from this state.
   */
  OrderedFromVendor = 'ORDERED_FROM_VENDOR',
  /**
   * The related quantity of items were received from a vendor but are
   * not yet available for sale. **READ-ONLY**: the Inventory API cannot move
   * quantities to or from this state.
   */
  ReceivedFromVendor = 'RECEIVED_FROM_VENDOR',
  /**
   * The related quantity of items are on hand, but not currently
   * available for sale. **READ-ONLY**: the Inventory API cannot move
   * quantities to or from this state.
   */
  ReservedForSale = 'RESERVED_FOR_SALE',
  /**
   * The related quantity of items were returned through the Square Point
   * of Sale application, but are not yet available for sale. **READ-ONLY**:
   * the Inventory API cannot move quantities to or from this state.
   */
  ReturnedByCustomer = 'RETURNED_BY_CUSTOMER',
  /**
   * The related quantity of items were sold as part of an itemized
   * transaction. Quantities in the `SOLD` state are no longer tracked.
   */
  Sold = 'SOLD',
  /**
   * The related quantity of items were sold online. **READ-ONLY**: the
   * Inventory API cannot move quantities to or from this state.
   */
  SoldOnline = 'SOLD_ONLINE',
  /** This state is not supported by this version of the Square API. We recommend that you upgrade the client to use the appropriate version of the Square API supporting this state. */
  SupportedByNewerVersion = 'SUPPORTED_BY_NEWER_VERSION',
  /**
   * The related quantity of items were returned but not linked to a
   * previous transaction. Unlinked returns are not tracked in Square.
   * Transferring a quantity from `UNLINKED_RETURN` to a tracked state (e.g.,
   * `IN_STOCK`) introduces new stock into the system.
   */
  UnlinkedReturn = 'UNLINKED_RETURN',
  /**
   * The related quantity of items are lost or damaged and cannot be
   * sold.
   */
  Waste = 'WASTE'
}

/** Used for filtering with InventoryState. */
export type InventoryStateFilter = {
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  equalToAnyOf?: InputMaybe<Array<InventoryState>>;
};

/**
 * Represents the transfer of a quantity of product inventory at a
 * particular time from one location to another.
 * Permissions: INVENTORY_READ
 */
export type InventoryTransfer = InventoryChange & {
  __typename?: 'InventoryTransfer';
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /** An RFC 3339-formatted timestamp that indicates when the physical count is received. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /**
   * The Square-generated ID of the Location where the related
   * quantity of items was tracked before the transfer.
   */
  fromLocation?: Maybe<Location>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /** The Square-issued ID of the merchant. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined.  For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00 */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /**
   * The inventory state for the quantity of
   * items being transferred.
   */
  state?: Maybe<InventoryState>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /**
   * The Square-generated ID of the Location where the related
   * quantity of items was tracked after the transfer.
   */
  toLocation?: Maybe<Location>;
  /**
   * Indicates how the inventory change is applied. See
   * [InventoryChangeType](entity:InventoryChangeType) for all possible values.
   * See [InventoryChangeType](#type-inventorychangetype) for possible values
   */
  type?: Maybe<InventoryChangeType>;
};

/**
 * Input type used to specify filters on `JsonSafeLong` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type JsonSafeLongFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<JsonSafeLongFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['JsonSafeLong']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<JsonSafeLongFilterInput>;
};

/**
 * Input type used to specify filters on elements of a `[JsonSafeLong]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type JsonSafeLongListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `JsonSafeLongListElementFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<JsonSafeLongListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<JsonSafeLongListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['JsonSafeLong']['input']>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
};

/**
 * Input type used to specify filters on `[JsonSafeLong]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type JsonSafeLongListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `JsonSafeLongListFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<JsonSafeLongListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<JsonSafeLongListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<JsonSafeLongListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<JsonSafeLongListFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a cashback amount given by a Square Local Offers seller to their customer for a purchase.
 */
export type LocalOffersCashbackDetails = {
  __typename?: 'LocalOffersCashbackDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `LocalOffersCashbackDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type LocalOffersCashbackDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a commission fee paid by a Square Local Offers seller to Square for a
 * purchase discovered through Square Local Offers.
 */
export type LocalOffersFeeDetails = {
  __typename?: 'LocalOffersFeeDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `LocalOffersFeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type LocalOffersFeeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Input type offered when grouping on `LocalTime` fields, representing the amount of offset
 * (positive or negative) to shift the `LocalTime` boundaries of each grouping bucket.
 *
 * For example, when grouping by `HOUR`, you can shift by 30 minutes to change
 * what minute-of-hour hours are considered to start on.
 */
export type LocalTimeGroupingOffsetInput = {
  /** Number (positive or negative) of the given `unit` to offset the boundaries of the `LocalTime` groupings. */
  amount: Scalars['Int']['input'];
  /** Unit of offsetting to apply to the boundaries of the `LocalTime` groupings. */
  unit: LocalTimeUnitInput;
};

/** Enumerates the supported truncation units of a `LocalTime`. */
export enum LocalTimeGroupingTruncationUnitInput {
  /** The hour a `LocalTime` falls in. */
  Hour = 'HOUR',
  /** The minute a `LocalTime` falls in. */
  Minute = 'MINUTE',
  /** The second a `LocalTime` falls in. */
  Second = 'SECOND'
}

/** Enumeration of `LocalTime` units. */
export enum LocalTimeUnitInput {
  /** 1/24th of a day. */
  Hour = 'HOUR',
  /** 1/1000th of a second. */
  Millisecond = 'MILLISECOND',
  /** 1/60th of an hour. */
  Minute = 'MINUTE',
  /** 1/60th of a minute. */
  Second = 'SECOND'
}

/**
 * A location for a Merchant. The location may be a physical location, such as a storefront, or it may be an abstract
 * location, such as an online store, facebook/instagram property, etc.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type Location = {
  __typename?: 'Location';
  /** The physical address of the location. */
  address?: Maybe<Address>;
  /** The email of the location. This email is visible to the customers of the location. For example, the email appears on customer receipts */
  businessEmail?: Maybe<Scalars['EmailAddress']['output']>;
  /** The hours of operation for the location. */
  businessHours?: Maybe<BusinessHours>;
  /** The business name of the location This is the name visible to the customers of the location. For example, this name appears on customer receipts. */
  businessName?: Maybe<Scalars['String']['output']>;
  /** The Square features that are enabled for the location. */
  capabilities?: Maybe<Array<Maybe<LocationCapability>>>;
  /** The physical coordinates (latitude and longitude) of the location. */
  coordinates?: Maybe<GeoCoordinates>;
  /** The country of the location. */
  country?: Maybe<Country>;
  /** The time when the location was created, in RFC 3339 format. For more information, see Working with Dates. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The currency used for all transactions at this location. */
  currency?: Maybe<Currency>;
  /** The description of the location. */
  description?: Maybe<Scalars['String']['output']>;
  /** The Facebook profile URL of the location. The URL's domain should be 'facebook.com'. */
  facebookUrl?: Maybe<Scalars['Url']['output']>;
  /** The Square-issued ID of the location. */
  id: Scalars['ID']['output'];
  /** The Instagram username of the location without the '@' symbol. */
  instagramUsername?: Maybe<Scalars['String']['output']>;
  /** The language associated with the location. */
  language?: Maybe<Scalars['LanguageCode']['output']>;
  /** The URL of the logo image for the location. */
  logoUrl?: Maybe<Scalars['Url']['output']>;
  /**
   * A four-digit number that describes the kind of goods or services sold at the location.
   * The merchant category code (MCC) of the location as standardized by ISO 18245.
   * For example, 5045, for a location that sells computer goods and software.
   */
  mcc?: Maybe<Scalars['String']['output']>;
  /** The merchant of the location. */
  merchant?: Maybe<Merchant>;
  /** The name of the location. This information appears in the Seller Dashboard as the nickname. A location name must be unique within a seller account. */
  name?: Maybe<Scalars['String']['output']>;
  /** The phone number of the location. */
  phoneNumber?: Maybe<Scalars['PhoneNumber']['output']>;
  /** The URL of the Point of Sal background image for the location. */
  posBackgroundUrl?: Maybe<Scalars['Url']['output']>;
  /** The status of the location, e.g. whether a location is active or inactive. */
  status?: Maybe<LocationStatus>;
  /** The timezone of the location. */
  timezone?: Maybe<Scalars['TimeZone']['output']>;
  /** The Twitter username of the location without the '@' symbol. */
  twitterUsername?: Maybe<Scalars['String']['output']>;
  /** The type of the location. */
  type?: Maybe<LocationType>;
  /** The website URL of the location. */
  websiteUrl?: Maybe<Scalars['Url']['output']>;
};

/**
 * The booking profile of a seller's location, including the location's ID and whether the location is enabled for online booking.
 * Permissions: APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type LocationBookingProfile = {
  __typename?: 'LocationBookingProfile';
  /** Url for the online booking site for this location. */
  bookingSiteUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the location. */
  location?: Maybe<Location>;
  /** Indicates whether the location is enabled for online booking. */
  onlineBookingEnabled?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * A list of location booking profiles of a seller.
 * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type LocationBookingProfileConnection = {
  __typename?: 'LocationBookingProfileConnection';
  /** Lists location booking profiles of a seller. */
  nodes: Array<LocationBookingProfile>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted location booking profiles
 * returned
 * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type LocationBookingProfileFilter = {
  /** The location for which to retrieve bookings. If this is not set, all locations' bookings are retrieved. */
  locationId?: InputMaybe<Scalars['ID']['input']>;
  /** The Square-assigned ID of the merchant. */
  merchantId: BasicIdFilter;
};

/** The capabilities a location might have. */
export enum LocationCapability {
  /** The capability to receive automatic transfers from Square. */
  AutomaticTransfers = 'AUTOMATIC_TRANSFERS',
  /** The capability to process credit card transactions with Square. */
  CreditCardProcessing = 'CREDIT_CARD_PROCESSING',
  /** The capability to process unlinked refunds with Square. */
  UnlinkedRefunds = 'UNLINKED_REFUNDS'
}

/**
 * A list of Location.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** A list of Location. */
  nodes: Array<Location>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/**
 * Input type used to specify filters on `Location` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type LocationRefFilterInput = {
  /**
   * Used to filter on the `id` field:
   *
   * > The Square-issued ID of the location.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  id?: InputMaybe<IdFilterInput>;
};

/** A location's status. */
export enum LocationStatus {
  /** A location that is active for business. */
  Active = 'ACTIVE',
  /**
   * A location that is not active for business. Inactive locations provide historical information.
   * Hide inactive locations unless the user has requested to see them.
   */
  Inactive = 'INACTIVE'
}

/** A location's type. */
export enum LocationType {
  Mobile = 'MOBILE',
  Physical = 'PHYSICAL'
}

/**
 * Input type used to specify filters on `LongString` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type LongStringFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<LongStringFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['LongString']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gt?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  gte?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lt?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * When `null` is passed, matches all documents.
   */
  lte?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<LongStringFilterInput>;
};

/**
 * Describes a loyalty account in a loyalty program.For more information, see
 * [Create and Retrieve Loyalty Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyAccount = {
  __typename?: 'LoyaltyAccount';
  /**
   * The available point balance in the loyalty account. If points are scheduled to expire, they are listed in the `expiring_point_deadlines` field.
   *
   * Your application should be able to handle loyalty accounts that have a negative point balance (`balance` is less than 0). This might occur if a seller makes a manual adjustment or as a result of a refund or exchange.
   */
  balance?: Maybe<Scalars['Int']['output']>;
  /**
   * The timestamp when the loyalty account was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Square-assigned ID of the customer that is associated with the account. */
  customer?: Maybe<Customer>;
  /**
   * The timestamp when the buyer joined the loyalty program, in RFC 3339 format. This field is used to display the **Enrolled On** or **Member Since** date in first-party Square products.
   *
   * If this field is not set in a `CreateLoyaltyAccount` request, Square populates it after the buyer's first action on their account
   * (when `AccumulateLoyaltyPoints` or `CreateLoyaltyReward` is called). In first-party flows, Square populates the field when the buyer agrees to the terms of service in Square Point of Sale.
   *
   * This field is typically specified in a `CreateLoyaltyAccount` request when creating a loyalty account for a buyer who already interacted with their account.
   * For example, you would set this field when migrating accounts from an external system. The timestamp in the request can represent a current or previous date and time, but it cannot be set for the future.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  enrolledAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The schedule for when points expire in the loyalty account balance. This field is present only if the account has points that are scheduled to expire.
   *
   * The total number of points in this field equals the number of points in the `balance` field.
   */
  expiringPointDeadlines?: Maybe<Array<Maybe<LoyaltyAccountExpiringPointDeadline>>>;
  /** The Square-assigned ID of the loyalty account. */
  id: Scalars['ID']['output'];
  /** The total points accrued during the lifetime of the account. */
  lifetimePoints?: Maybe<Scalars['Int']['output']>;
  /**
   * The mapping that associates the loyalty account with a buyer. Currently,
   * a loyalty account can only be mapped to a buyer by phone number.
   *
   * To create a loyalty account, you must specify the `mapping` field, with the buyer's phone number
   * in the `phone_number` field.
   */
  mapping?: Maybe<LoyaltyAccountMapping>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The Square-assigned ID of the loyalty program to which the account belongs. */
  program?: Maybe<LoyaltyProgram>;
  /**
   * The timestamp when the loyalty account was last updated, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * A list of Loyalty Account.
 * Permissions:LOYALTY_READ
 */
export type LoyaltyAccountConnection = {
  __typename?: 'LoyaltyAccountConnection';
  /** List of Loyalty Account. */
  nodes: Array<LoyaltyAccount>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Represents a set of points for a loyalty account that are scheduled to expire on a specific date.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyAccountExpiringPointDeadline = {
  __typename?: 'LoyaltyAccountExpiringPointDeadline';
  /**
   * The timestamp of when the points are scheduled to expire, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of points scheduled to expire at the `expires_at` timestamp. */
  points?: Maybe<Scalars['Int']['output']>;
};

/** The search criteria for the loyalty accounts. */
export type LoyaltyAccountFilter = {
  /** The ID of the loyalty account to retrieve. */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The set of customer IDs to use in the loyalty account search.
   *
   * This cannot be combined with `mappings`.
   *
   * Max: 30 customer IDs
   */
  customerIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The set of mappings to use in the loyalty account search.
   *
   * This cannot be combined with `customer_ids`.
   *
   * Max: 30 mappings
   */
  mappings?: InputMaybe<Array<InputMaybe<LoyaltyAccountMappingInput>>>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
};

/**
 * Represents the mapping that associates a loyalty account with a buyer.Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
 * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyAccountMapping = {
  __typename?: 'LoyaltyAccountMapping';
  /**
   * The timestamp when the mapping was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Square-assigned ID of the mapping. */
  id: Scalars['ID']['output'];
  /** The phone number of the buyer, in E.164 format. For example, "+14155551111". */
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents the mapping that associates a loyalty account with a buyer.Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
 * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyAccountMappingInput = {
  /**
   * The timestamp when the mapping was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The Square-assigned ID of the mapping. */
  id: Scalars['ID']['input'];
  /** The phone number of the buyer, in E.164 format. For example, "+14155551111". */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** The type of mapping. */
export enum LoyaltyAccountMappingType {
  /** The loyalty account is mapped by phone. */
  Phone = 'PHONE'
}

/**
 * Provides information about a loyalty event.For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEvent = {
  __typename?: 'LoyaltyEvent';
  /** Provides metadata when the event `type` is `ACCUMULATE_POINTS`. */
  accumulatePoints?: Maybe<LoyaltyEventAccumulatePoints>;
  /** Provides metadata when the event `type` is `ACCUMULATE_PROMOTION_POINTS`. */
  accumulatePromotionPoints?: Maybe<LoyaltyEventAccumulatePromotionPoints>;
  /** Provides metadata when the event `type` is `ADJUST_POINTS`. */
  adjustPoints?: Maybe<LoyaltyEventAdjustPoints>;
  /** Provides metadata when the event `type` is `CREATE_REWARD`. */
  createReward?: Maybe<LoyaltyEventCreateReward>;
  /**
   * The timestamp when the event was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Provides metadata when the event `type` is `DELETE_REWARD`. */
  deleteReward?: Maybe<LoyaltyEventDeleteReward>;
  /** Provides metadata when the event `type` is `EXPIRE_POINTS`. */
  expirePoints?: Maybe<LoyaltyEventExpirePoints>;
  /** The Square-assigned ID of the loyalty event. */
  id: Scalars['ID']['output'];
  /** The ID of the location where the event occurred. */
  location?: Maybe<Location>;
  /** The ID of the loyalty account associated with the event. */
  loyaltyAccount?: Maybe<LoyaltyAccount>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** Provides metadata when the event `type` is `OTHER`. */
  otherEvent?: Maybe<LoyaltyEventOther>;
  /** Provides metadata when the event `type` is `REDEEM_REWARD`. */
  redeemReward?: Maybe<LoyaltyEventRedeemReward>;
  /** Defines whether the event was generated by the Square Point of Sale. */
  source?: Maybe<LoyaltyEventSource>;
  /** The type of the loyalty event. */
  type?: Maybe<LoyaltyEventType>;
};

/**
 * Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventAccumulatePoints = {
  __typename?: 'LoyaltyEventAccumulatePoints';
  /** The ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /**
   * The ID of the order for which the buyer accumulated the points.
   * This field is returned only if the Orders API is used to process orders.
   */
  order?: Maybe<Order>;
  /** The number of points accumulated by the event. */
  points?: Maybe<Scalars['Int']['output']>;
};

/**
 * Provides metadata when the event `type` is `ACCUMULATE_PROMOTION_POINTS`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventAccumulatePromotionPoints = {
  __typename?: 'LoyaltyEventAccumulatePromotionPoints';
  /** The Square-assigned ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The Square-assigned ID of the loyalty promotion. */
  loyaltyPromotion?: Maybe<LoyaltyPromotion>;
  /**
   * The ID of the order for which the buyer earned the promotion points.
   * Only applications that use the Orders API to process orders can trigger this event.
   */
  order?: Maybe<Order>;
  /** The number of points earned by the event. */
  points?: Maybe<Scalars['Int']['output']>;
};

/**
 * Provides metadata when the event `type` is `ADJUST_POINTS`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventAdjustPoints = {
  __typename?: 'LoyaltyEventAdjustPoints';
  /** The Square-assigned ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The number of points added or removed. */
  points?: Maybe<Scalars['Int']['output']>;
  /** The reason for the adjustment of points. */
  reason?: Maybe<Scalars['String']['output']>;
};

/**
 * A list of Loyalty Event.
 * Permissions:LOYALTY_READ
 */
export type LoyaltyEventConnection = {
  __typename?: 'LoyaltyEventConnection';
  /** List of Loyalty Event. */
  nodes: Array<LoyaltyEvent>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Provides metadata when the event `type` is `CREATE_REWARD`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventCreateReward = {
  __typename?: 'LoyaltyEventCreateReward';
  /** The ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The loyalty points used to create the reward. */
  points?: Maybe<Scalars['Int']['output']>;
  /**
   * The Square-assigned ID of the created loyalty reward.
   * This field is returned only if the event source is `LOYALTY_API`.
   */
  reward?: Maybe<LoyaltyReward>;
};

/** Filter events by date time range. */
export type LoyaltyEventDateTimeFilter = {
  /** The `created_at` date time range used to filter the result. */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Provides metadata when the event `type` is `DELETE_REWARD`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventDeleteReward = {
  __typename?: 'LoyaltyEventDeleteReward';
  /** The ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The number of points returned to the loyalty account. */
  points?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID of the deleted loyalty reward.
   * This field is returned only if the event source is `LOYALTY_API`.
   */
  reward?: Maybe<LoyaltyReward>;
};

/**
 * Provides metadata when the event `type` is `EXPIRE_POINTS`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventExpirePoints = {
  __typename?: 'LoyaltyEventExpirePoints';
  /** The Square-assigned ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The number of points expired. */
  points?: Maybe<Scalars['Int']['output']>;
};

/**
 * The filtering criteria.If the request specifies multiple filters,
 * the endpoint uses a logical AND to evaluate them.
 */
export type LoyaltyEventFilter = {
  /**
   * Filter events by date time range.
   * For each range, the start time is inclusive and the end time
   * is exclusive.
   */
  dateTimeFilter?: InputMaybe<LoyaltyEventDateTimeFilter>;
  /** Filter events by location. */
  locationFilter?: InputMaybe<LoyaltyEventLocationFilter>;
  /** Filter events by loyalty account. */
  loyaltyAccountFilter?: InputMaybe<LoyaltyEventLoyaltyAccountFilter>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** Filter events by the order associated with the event. */
  orderFilter?: InputMaybe<LoyaltyEventOrderFilter>;
  /** Filter events by event type. */
  typeFilter?: InputMaybe<LoyaltyEventTypeFilter>;
};

/** Filter events by location. */
export type LoyaltyEventLocationFilter = {
  /**
   * The location IDs for loyalty events to query.
   * If multiple values are specified, the endpoint uses
   * a logical OR to combine them.
   */
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Filter events by loyalty account. */
export type LoyaltyEventLoyaltyAccountFilter = {
  /** The ID of the loyalty account associated with loyalty events. */
  loyaltyAccountId?: InputMaybe<Scalars['String']['input']>;
};

/** Filter events by the order associated with the event. */
export type LoyaltyEventOrderFilter = {
  /** The ID of the order associated with the event. */
  orderId?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Provides metadata when the event `type` is `OTHER`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventOther = {
  __typename?: 'LoyaltyEventOther';
  /** The Square-assigned ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The number of points added or removed. */
  points?: Maybe<Scalars['Int']['output']>;
};

/**
 * Provides metadata when the event `type` is `REDEEM_REWARD`.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyEventRedeemReward = {
  __typename?: 'LoyaltyEventRedeemReward';
  /** The ID of the loyalty program. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /**
   * The ID of the order that redeemed the reward.
   * This field is returned only if the Orders API is used to process orders.
   */
  order?: Maybe<Order>;
  /**
   * The ID of the redeemed loyalty reward.
   * This field is returned only if the event source is `LOYALTY_API`.
   */
  reward?: Maybe<LoyaltyReward>;
};

/** Defines whether the event was generated by the Square Point of Sale. */
export enum LoyaltyEventSource {
  /** The event is generated by something other than the Square Point of Sale that used the Loyalty API. */
  LoyaltyApi = 'LOYALTY_API',
  /** The event is generated by the Square Point of Sale (POS). */
  Square = 'SQUARE'
}

/** The type of the loyalty event. */
export enum LoyaltyEventType {
  /**
   * Points are added to a loyalty account for a purchase that
   * qualified for points based on an [accrual rule](entity:LoyaltyProgramAccrualRule).
   */
  AccumulatePoints = 'ACCUMULATE_POINTS',
  /**
   *  Points are added to a loyalty account for a purchase that
   * qualified for a [loyalty promotion](entity:LoyaltyPromotion).
   */
  AccumulatePromotionPoints = 'ACCUMULATE_PROMOTION_POINTS',
  /** Loyalty points are manually adjusted. */
  AdjustPoints = 'ADJUST_POINTS',
  /** A [loyalty reward](entity:LoyaltyReward) is created. */
  CreateReward = 'CREATE_REWARD',
  /** A loyalty reward is deleted. */
  DeleteReward = 'DELETE_REWARD',
  /**
   * Loyalty points are expired according to the
   * expiration policy of the loyalty program.
   */
  ExpirePoints = 'EXPIRE_POINTS',
  /** Some other loyalty event occurred. */
  Other = 'OTHER',
  /** A loyalty reward is redeemed. */
  RedeemReward = 'REDEEM_REWARD'
}

/** Filter events by event type. */
export type LoyaltyEventTypeFilter = {
  /**
   * The loyalty event types used to filter the result.
   * If multiple values are specified, the endpoint uses a
   * logical OR to combine them.
   */
  types?: InputMaybe<Array<InputMaybe<LoyaltyEventType>>>;
};

/**
 * Represents a Square loyalty program.Loyalty programs define how buyers can earn points and redeem points for rewards.
 * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
 * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgram = {
  __typename?: 'LoyaltyProgram';
  /**
   * Defines how buyers can earn loyalty points from the base loyalty program.
   * To check for associated loyalty promotions that enable
   * buyers to earn extra points, call [ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions).
   */
  accrualRules?: Maybe<Array<Maybe<LoyaltyProgramAccrualRule>>>;
  /**
   * The timestamp when the program was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** If present, details for how points expire. */
  expirationPolicy?: Maybe<LoyaltyProgramExpirationPolicy>;
  /**
   * The Square-assigned ID of the loyalty program. Updates to
   * the loyalty program do not modify the identifier.
   */
  id: Scalars['ID']['output'];
  /** The locations at which the program is active. */
  locationIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The list of rewards for buyers, sorted by ascending points. */
  rewardTiers?: Maybe<Array<Maybe<LoyaltyProgramRewardTier>>>;
  /** Whether the program is currently active. */
  status?: Maybe<LoyaltyProgramStatus>;
  /** A cosmetic name for the “points” currency. */
  terminology?: Maybe<LoyaltyProgramTerminology>;
  /**
   * The timestamp when the reward was last updated, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Represents an accrual rule, which defines how buyers can earn points from the base loyalty program.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramAccrualRule = {
  __typename?: 'LoyaltyProgramAccrualRule';
  /** The type of the accrual rule that defines how buyers can earn points. */
  accrualType?: Maybe<LoyaltyProgramAccrualRuleType>;
  /** Additional data for rules with the `CATEGORY` accrual type. */
  categoryData?: Maybe<LoyaltyProgramAccrualRuleCategoryData>;
  /** Additional data for rules with the `ITEM_VARIATION` accrual type. */
  itemVariationData?: Maybe<LoyaltyProgramAccrualRuleItemVariationData>;
  /**
   * The number of points that
   * buyers earn based on the `accrual_type`.
   */
  points?: Maybe<Scalars['Int']['output']>;
  /** Additional data for rules with the `SPEND` accrual type. */
  spendData?: Maybe<LoyaltyProgramAccrualRuleSpendData>;
  /** Additional data for rules with the `VISIT` accrual type. */
  visitData?: Maybe<LoyaltyProgramAccrualRuleVisitData>;
};

/**
 * Represents additional data for rules with the `CATEGORY` accrual type.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramAccrualRuleCategoryData = {
  __typename?: 'LoyaltyProgramAccrualRuleCategoryData';
  /**
   * The ID of the `CATEGORY` catalog object that buyers can purchase to earn
   * points.
   */
  category?: Maybe<CatalogCategory>;
};

/**
 * Represents additional data for rules with the `ITEM_VARIATION` accrual type.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramAccrualRuleItemVariationData = {
  __typename?: 'LoyaltyProgramAccrualRuleItemVariationData';
  /**
   * The ID of the `ITEM_VARIATION` catalog object that buyers can purchase to earn
   * points.
   */
  itemVariation?: Maybe<CatalogItemVariation>;
};

/**
 * Represents additional data for rules with the `SPEND` accrual type.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramAccrualRuleSpendData = {
  __typename?: 'LoyaltyProgramAccrualRuleSpendData';
  /**
   * The amount that buyers must spend to earn points.
   * For example, given an "Earn 1 point for every $10 spent" accrual rule, a buyer who spends $105 earns 10 points.
   */
  amount?: Maybe<Money>;
  /**
   * The IDs of any `CATEGORY` catalog objects that are excluded from points accrual.
   *
   * You can use the [BatchRetrieveCatalogObjects](api-endpoint:Catalog-BatchRetrieveCatalogObjects)
   * endpoint to retrieve information about the excluded categories.
   */
  excludedCategoryIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The IDs of any `ITEM_VARIATION` catalog objects that are excluded from points accrual.
   *
   * You can use the [BatchRetrieveCatalogObjects](api-endpoint:Catalog-BatchRetrieveCatalogObjects)
   * endpoint to retrieve information about the excluded item variations.
   */
  excludedItemVariationIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** Indicates how taxes should be treated when calculating the purchase amount used for points accrual. */
  taxMode?: Maybe<LoyaltyProgramAccrualRuleTaxMode>;
};

/** Indicates how taxes should be treated when calculating the purchase amount used for loyalty points accrual.This setting applies only to `SPEND` accrual rules or `VISIT` accrual rules that have a minimum spend requirement. */
export enum LoyaltyProgramAccrualRuleTaxMode {
  /** Include taxes in the purchase amount used for loyalty points accrual. */
  AfterTax = 'AFTER_TAX',
  /** Exclude taxes from the purchase amount used for loyalty points accrual. */
  BeforeTax = 'BEFORE_TAX'
}

/** The type of the accrual rule that defines how buyers can earn points. */
export enum LoyaltyProgramAccrualRuleType {
  /**
   * An accrual rule based on an item category. For example, accrue points
   * for purchasing any item in the "hot drink" category: coffee, tea, or hot cocoa.
   */
  Category = 'CATEGORY',
  /**
   * An accrual rule based on an item variation. For example, accrue
   * points for purchasing a coffee.
   */
  ItemVariation = 'ITEM_VARIATION',
  /**
   * A spend-based accrual rule. A buyer earns points based on the amount
   * spent.
   */
  Spend = 'SPEND',
  /**
   * A visit-based accrual rule. A buyer earns points for each visit.
   * You can specify the minimum purchase required.
   */
  Visit = 'VISIT'
}

/**
 * Represents additional data for rules with the `VISIT` accrual type.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramAccrualRuleVisitData = {
  __typename?: 'LoyaltyProgramAccrualRuleVisitData';
  /** The minimum purchase required during the visit to quality for points. */
  minimumAmountMoney?: Maybe<Money>;
  /**
   * Indicates how taxes should be treated when calculating the purchase amount to determine whether the visit qualifies for points.
   * This setting applies only if `minimum_amount_money` is specified.
   */
  taxMode?: Maybe<LoyaltyProgramAccrualRuleTaxMode>;
};

/**
 * A list of Loyalty Program.
 * Permissions:LOYALTY_READ
 */
export type LoyaltyProgramConnection = {
  __typename?: 'LoyaltyProgramConnection';
  /** List of Loyalty Program. */
  nodes: Array<LoyaltyProgram>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Describes when the loyalty program expires.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramExpirationPolicy = {
  __typename?: 'LoyaltyProgramExpirationPolicy';
  /**
   * The number of months before points expire, in `P[n]M` RFC 3339 duration format. For example, a value of `P12M` represents a duration of 12 months.
   * Points are valid through the last day of the month in which they are scheduled to expire. For example, with a  `P12M` duration, points earned on July 6, 2020 expire on August 1, 2021.
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  expirationDuration?: Maybe<Scalars['String']['output']>;
};

/** Input used to help filter on the Loyalty program */
export type LoyaltyProgramFilter = {
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** The ID of the loyalty program or the keyword main. Either value can be used to retrieve the single loyalty program that belongs to the seller. */
  programId: Scalars['ID']['input'];
};

/**
 * Provides details about the reward tier discount.DEPRECATED at version 2020-12-16. Discount details
 * are now defined using a catalog pricing rule and other catalog objects. For more information, see
 * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramRewardDefinition = {
  __typename?: 'LoyaltyProgramRewardDefinition';
  /**
   * The list of catalog objects to which this reward can be applied. They are either all item-variation ids or category ids, depending on the `type` field.
   * DEPRECATED at version 2020-12-16. You can find this information in the `product_set_data.product_ids_any` field
   * of the `PRODUCT_SET` catalog object referenced by the pricing rule.
   */
  catalogObjectIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The type of discount the reward tier offers. DEPRECATED at version 2020-12-16. You can find this information
   * in the `discount_data.discount_type` field of the `DISCOUNT` catalog object referenced by the pricing rule.
   */
  discountType?: Maybe<LoyaltyProgramRewardDefinitionType>;
  /**
   * The amount of the discount. Present if `discount_type` is `FIXED_AMOUNT`. For example, $5 off.
   * DEPRECATED at version 2020-12-16. You can find this information in the `discount_data.amount_money` field of the
   * `DISCOUNT` catalog object referenced by the pricing rule.
   */
  fixedDiscountMoney?: Maybe<Money>;
  /**
   * When `discount_type` is `FIXED_PERCENTAGE`, the maximum discount amount that can be applied.
   * DEPRECATED at version 2020-12-16. You can find this information in the `discount_data.maximum_amount_money` field
   * of the `DISCOUNT` catalog object referenced by the the pricing rule.
   */
  maxDiscountMoney?: Maybe<Money>;
  /**
   * The fixed percentage of the discount. Present if `discount_type` is `FIXED_PERCENTAGE`.
   * For example, a 7.25% off discount will be represented as "7.25". DEPRECATED at version 2020-12-16. You can find this
   * information in the `discount_data.percentage` field of the `DISCOUNT` catalog object referenced by the pricing rule.
   */
  percentageDiscount?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the scope of the reward tier. DEPRECATED at version 2020-12-16. You can find this information in the
   * `product_set_data` field of the `PRODUCT_SET` catalog object referenced by the pricing rule. For `ORDER` scopes,
   * `all_products` is true. For `ITEM_VARIATION` or `CATEGORY` scopes, `product_ids_any` is a list of
   * catalog object IDs of the given type.
   */
  scope?: Maybe<LoyaltyProgramRewardDefinitionScope>;
};

/**
 * Indicates the scope of the reward tier.DEPRECATED at version 2020-12-16. Discount details
 * are now defined using a catalog pricing rule and other catalog objects. For more information, see
 * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
 */
export enum LoyaltyProgramRewardDefinitionScope {
  /** The discount applies only to items in the given categories. */
  Category = 'CATEGORY',
  /** The discount applies only to specific item variations. */
  ItemVariation = 'ITEM_VARIATION',
  /** The discount applies to the entire order. */
  Order = 'ORDER'
}

/**
 * The type of discount the reward tier offers.DEPRECATED at version 2020-12-16. Discount details
 * are now defined using a catalog pricing rule and other catalog objects. For more information, see
 * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
 */
export enum LoyaltyProgramRewardDefinitionType {
  /** The fixed amount discounted. */
  FixedAmount = 'FIXED_AMOUNT',
  /** The fixed percentage discounted. */
  FixedPercentage = 'FIXED_PERCENTAGE'
}

/**
 * Represents a reward tier in a loyalty program.A reward tier defines how buyers can redeem points for a reward, such as the number of points required and the value and scope of the discount. A loyalty program can offer multiple reward tiers.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramRewardTier = {
  __typename?: 'LoyaltyProgramRewardTier';
  /**
   * The timestamp when the reward tier was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Provides details about the reward tier definition.
   * DEPRECATED at version 2020-12-16. Replaced by the `pricing_rule_reference` field.
   */
  definition?: Maybe<LoyaltyProgramRewardDefinition>;
  /** The Square-assigned ID of the reward tier. */
  id: Scalars['ID']['output'];
  /** The name of the reward tier. */
  name?: Maybe<Scalars['String']['output']>;
  /** The points exchanged for the reward tier. */
  points?: Maybe<Scalars['Int']['output']>;
  /**
   * A reference to the specific version of a `PRICING_RULE` catalog object that contains information about the reward tier discount.
   *
   * Use `object_id` and `catalog_version` with the [RetrieveCatalogObject](api-endpoint:Catalog-RetrieveCatalogObject) endpoint
   * to get discount details. Make sure to set `include_related_objects` to true in the request to retrieve all catalog objects
   * that define the discount. For more information, see [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
   */
  pricingRuleReference?: Maybe<CatalogObjectReference>;
};

/** Indicates whether the program is currently active. */
export enum LoyaltyProgramStatus {
  /** The program is fully functional. The program has an active subscription. */
  Active = 'ACTIVE',
  /**
   * The loyalty program does not have an active subscription.
   * Loyalty API requests fail.
   */
  Inactive = 'INACTIVE'
}

/**
 * Represents the naming used for loyalty points.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyProgramTerminology = {
  __typename?: 'LoyaltyProgramTerminology';
  /** A singular unit for a point (for example, 1 point is called 1 star). */
  one?: Maybe<Scalars['String']['output']>;
  /** A plural unit for point (for example, 10 points is called 10 stars). */
  other?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a promotion for a loyalty program.Loyalty promotions enable buyers
 * to earn extra points on top of those earned from the base program.
 *
 * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyPromotion = {
  __typename?: 'LoyaltyPromotion';
  /** The scheduling information that defines when purchases can qualify to earn points from an `ACTIVE` promotion. */
  availableTime?: Maybe<LoyaltyPromotionAvailableTimeData>;
  /**
   * The timestamp of when the promotion was canceled, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The timestamp of when the promotion was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Square-assigned ID of the promotion. */
  id: Scalars['ID']['output'];
  /**
   * The points incentive for the promotion. This field defines whether promotion points
   * are earned by multiplying base program points or by adding a specified number of points.
   */
  incentive?: Maybe<LoyaltyPromotionIncentive>;
  /** The ID of the loyalty program associated with the promotion. */
  loyaltyProgram?: Maybe<LoyaltyProgram>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The minimum purchase amount required to earn promotion points. If specified, this amount is positive. */
  minimumSpendAmountMoney?: Maybe<Money>;
  /** The name of the promotion. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The IDs of any qualifying `CATEGORY` catalog objects. If specified,
   * the purchase must include at least one item from one of these categories to qualify for the promotion.
   *
   * This option is valid only if the base loyalty program uses a `VISIT` or `SPEND` accrual rule.
   * With `SPEND` accrual rules, make sure that qualifying promotional items are not excluded.
   *
   * You can specify `qualifying_category_ids` or `qualifying_item_variation_ids` for a promotion, but not both.
   */
  qualifyingCategoryIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * The IDs of any qualifying `ITEM_VARIATION` catalog objects. If specified,
   * the purchase must include at least one of these items to qualify for the promotion.
   *
   * This option is valid only if the base loyalty program uses a `VISIT` or `SPEND` accrual rule.
   * With `SPEND` accrual rules, make sure that qualifying promotional items are not excluded.
   *
   * You can specify `qualifying_item_variation_ids` or `qualifying_category_ids` for a given promotion, but not both.
   */
  qualifyingItemVariationIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The current status of the promotion. */
  status?: Maybe<LoyaltyPromotionStatus>;
  /**
   * The number of times a buyer can earn promotion points during a specified interval.
   * If not specified, buyers can trigger the promotion an unlimited number of times.
   */
  triggerLimit?: Maybe<LoyaltyPromotionTriggerLimit>;
  /**
   * The timestamp when the promotion was last updated, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Represents scheduling information that determines when purchases can qualify to earn points
 * from a loyalty promotion.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyPromotionAvailableTimeData = {
  __typename?: 'LoyaltyPromotionAvailableTimeData';
  /**
   * The date that the promotion ends, in `YYYY-MM-DD` format. Square populates this field
   * based on the provided `time_periods`. If an end date is not specified, an `ACTIVE` promotion
   * remains available until it is canceled.
   */
  endDate?: Maybe<Scalars['String']['output']>;
  /**
   * The date that the promotion starts, in `YYYY-MM-DD` format. Square populates this field
   * based on the provided `time_periods`.
   */
  startDate?: Maybe<Scalars['String']['output']>;
  /**
   * A list of [iCalendar (RFC 5545) events](https://tools.ietf.org/html/rfc5545#section-3.6.1)
   * (`VEVENT`). Each event represents an available time period per day or days of the week.
   * A day can have a maximum of one available time period.
   *
   * Only `DTSTART`, `DURATION`, and `RRULE` are supported. `DTSTART` and `DURATION` are required and
   * timestamps must be in local (unzoned) time format. Include `RRULE` to specify recurring promotions,
   * an end date (using the `UNTIL` keyword), or both. For more information, see
   * [Available time](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#available-time).
   *
   * Note that `BEGIN:VEVENT` and `END:VEVENT` are optional in a `CreateLoyaltyPromotion` request
   * but are always included in the response.
   */
  timePeriods?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/**
 * A list of Loyalty Promotion.
 * Permissions:LOYALTY_READ
 */
export type LoyaltyPromotionConnection = {
  __typename?: 'LoyaltyPromotionConnection';
  /** List of Loyalty Promotion. */
  nodes: Array<LoyaltyPromotion>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Input used to help filter on the Loyalty Promotion */
export type LoyaltyPromotionFilter = {
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** The ID of the loyalty program or the keyword main. Either value can be used to retrieve the single loyalty program that belongs to the seller. */
  programId: Scalars['ID']['input'];
  /** The ID of the loyalty promotion to retrieve. */
  promotionId?: InputMaybe<Scalars['ID']['input']>;
  /** The status to filter the results by. If a status is provided, only loyalty promotions with the specified status are returned. Otherwise, all loyalty promotions associated with the loyalty program are returned. */
  status?: InputMaybe<LoyaltyPromotionStatus>;
};

/**
 * Represents how points for a loyalty promotion are calculated,
 * either by multiplying the points earned from the base program or by adding a specified number
 * of points to the points earned from the base program.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyPromotionIncentive = {
  __typename?: 'LoyaltyPromotionIncentive';
  /** Additional data for a `POINTS_ADDITION` incentive type. */
  pointsAdditionData?: Maybe<LoyaltyPromotionIncentivePointsAdditionData>;
  /** Additional data for a `POINTS_MULTIPLIER` incentive type. */
  pointsMultiplierData?: Maybe<LoyaltyPromotionIncentivePointsMultiplierData>;
  /** The type of points incentive. */
  type?: Maybe<LoyaltyPromotionIncentiveType>;
};

/**
 * Represents the metadata for a `POINTS_ADDITION` type of loyalty promotion incentive.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyPromotionIncentivePointsAdditionData = {
  __typename?: 'LoyaltyPromotionIncentivePointsAdditionData';
  /**
   * The number of additional points to earn each time the promotion is triggered. For example,
   * suppose a purchase qualifies for 5 points from the base loyalty program. If the purchase also
   * qualifies for a `POINTS_ADDITION` promotion incentive with a `points_addition` of 3, the buyer
   * earns a total of 8 points (5 program points + 3 promotion points = 8 points).
   */
  pointsAddition?: Maybe<Scalars['Int']['output']>;
};

/**
 * Represents the metadata for a `POINTS_MULTIPLIER` type of loyalty promotion incentive.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyPromotionIncentivePointsMultiplierData = {
  __typename?: 'LoyaltyPromotionIncentivePointsMultiplierData';
  /**
   * The multiplier used to calculate the number of points earned each time the promotion is triggered,
   * specified as a string representation of a decimal. Square supports multipliers up to 10x, with three
   * point precision for decimal multipliers. For example, suppose a purchase qualifies for 4 points from the
   * base loyalty program. If the purchase also qualifies for a `POINTS_MULTIPLIER` promotion incentive with a
   * `multiplier` of "1.5", the buyer earns a total of 6 points (4 program points x 1.5 promotion multiplier = 6 points).
   * Fractional points are dropped.
   *
   * One of the following is required when specifying a points multiplier:
   * - (Recommended) This `multiplier` field.
   * - The deprecated `points_multiplier` field. If provided in the request, Square also returns `multiplier`
   * with the equivalent value.
   */
  multiplier?: Maybe<Scalars['String']['output']>;
  /**
   * The multiplier used to calculate the number of points earned each time the promotion
   * is triggered. For example, suppose a purchase qualifies for 5 points from the base loyalty program.
   * If the purchase also qualifies for a `POINTS_MULTIPLIER` promotion incentive with a `points_multiplier`
   * of 3, the buyer earns a total of 15 points (5 program points x 3 promotion multiplier = 15 points).
   *
   * DEPRECATED at version 2023-08-16. Replaced by the `multiplier` field.
   *
   * One of the following is required when specifying a points multiplier:
   * - (Recommended) The `multiplier` field.
   * - This deprecated `points_multiplier` field. If provided in the request, Square also returns `multiplier`
   * with the equivalent value.
   */
  pointsMultiplier?: Maybe<Scalars['Int']['output']>;
};

/**
 * Indicates the type of points incentive for a loyalty promotion,
 * which is used to determine how buyers can earn points from the promotion.
 */
export enum LoyaltyPromotionIncentiveType {
  /**
   * Add a specified number of points to those earned from the base loyalty program.
   * For example, "Earn 10 additional points."
   */
  PointsAddition = 'POINTS_ADDITION',
  /**
   * Multiply the number of points earned from the base loyalty program.
   * For example, "Earn double points."
   */
  PointsMultiplier = 'POINTS_MULTIPLIER'
}

/** Indicates the status of a loyalty promotion. */
export enum LoyaltyPromotionStatus {
  /**
   * The loyalty promotion is currently active. Buyers can earn points for purchases
   * that meet the promotion conditions, such as the promotion's `available_time`.
   */
  Active = 'ACTIVE',
  /** The loyalty promotion was canceled. `CANCELED` is a terminal status. */
  Canceled = 'CANCELED',
  /**
   * The loyalty promotion has ended because the specified `end_date` was reached.
   * `ENDED` is a terminal status.
   */
  Ended = 'ENDED',
  /**
   * The loyalty promotion is scheduled to start in the future. Square changes the
   * promotion status to `ACTIVE` when the `start_date` is reached.
   */
  Scheduled = 'SCHEDULED'
}

/**
 * Represents the number of times a buyer can earn points during a loyalty promotion.If this field is not set, buyers can trigger the promotion an unlimited number of times to earn points during
 * the time that the promotion is available.
 *
 * A purchase that is disqualified from earning points because of this limit might qualify for another active promotion.
 * Permissions: LOYALTY_READ
 */
export type LoyaltyPromotionTriggerLimit = {
  __typename?: 'LoyaltyPromotionTriggerLimit';
  /** The time period the limit applies to. */
  interval?: Maybe<LoyaltyPromotionTriggerLimitInterval>;
  /** The maximum number of times a buyer can trigger the promotion during the specified `interval`. */
  times?: Maybe<Scalars['Int']['output']>;
};

/**
 * Indicates the time period that the trigger limit applies to,
 * which is used to determine the number of times a buyer can earn points for a loyalty promotion.
 */
export enum LoyaltyPromotionTriggerLimitInterval {
  /**
   * The limit applies to the entire time that the promotion is active. For example, if `times`
   * is set to 1 and `time_period` is set to `ALL_TIME`, a buyer can earn promotion points a maximum
   * of one time during the promotion.
   */
  AllTime = 'ALL_TIME',
  /**
   * The limit applies per day, according to the `available_time` schedule specified for the promotion.
   * For example, if the `times` field of the trigger limit is set to 1, a buyer can trigger the promotion
   * a maximum of once per day.
   */
  Day = 'DAY'
}

/**
 * Represents a contract to redeem loyalty points for a reward tier discount.Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.
 * For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
 * Permissions: LOYALTY_READ
 */
export type LoyaltyReward = {
  __typename?: 'LoyaltyReward';
  /**
   * The timestamp when the reward was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Square-assigned ID of the loyalty reward. */
  id: Scalars['ID']['output'];
  /** The Square-assigned ID of the loyalty account to which the reward belongs. */
  loyaltyAccount?: Maybe<LoyaltyAccount>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The Square-assigned ID of the order to which the reward is attached. */
  order?: Maybe<Order>;
  /** The number of loyalty points used for the reward. */
  points?: Maybe<Scalars['Int']['output']>;
  /**
   * The timestamp when the reward was redeemed, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  redeemedAt?: Maybe<Scalars['String']['output']>;
  /** The Square-assigned ID of the reward tier used to create the reward. */
  rewardTier?: Maybe<LoyaltyProgramRewardTier>;
  /** The status of a loyalty reward. */
  status?: Maybe<LoyaltyRewardStatus>;
  /**
   * The timestamp when the reward was last updated, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * A list of Loyalty Reward.
 * Permissions:LOYALTY_READ
 */
export type LoyaltyRewardConnection = {
  __typename?: 'LoyaltyRewardConnection';
  /** List of Loyalty Reward. */
  nodes: Array<LoyaltyReward>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** The set of search requirements. */
export type LoyaltyRewardFilter = {
  /** The ID of the loyalty reward to retrieve. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The ID of the loyalty account to which the loyalty reward belongs. */
  loyaltyAccountId?: InputMaybe<Scalars['String']['input']>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** The status of the loyalty reward. */
  status?: InputMaybe<LoyaltyRewardStatus>;
};

/** The status of the loyalty reward. */
export enum LoyaltyRewardStatus {
  /** The reward is deleted. */
  Deleted = 'DELETED',
  /** The reward is issued. */
  Issued = 'ISSUED',
  /** The reward is redeemed. */
  Redeemed = 'REDEEMED'
}

/** Represents a unit of measurement to use with a quantity, such as ounces or inches. */
export type MeasurementUnit = MeasurementUnitAreaValue | MeasurementUnitCustom | MeasurementUnitGenericValue | MeasurementUnitLengthValue | MeasurementUnitTimeValue | MeasurementUnitVolumeValue | MeasurementUnitWeightValue;

/** Unit of area used to measure a quantity. */
export enum MeasurementUnitArea {
  /** The area is measured in acres. */
  ImperialAcre = 'IMPERIAL_ACRE',
  /** The area is measured in square feet. */
  ImperialSquareFoot = 'IMPERIAL_SQUARE_FOOT',
  /** The area is measured in square inches. */
  ImperialSquareInch = 'IMPERIAL_SQUARE_INCH',
  /** The area is measured in square miles. */
  ImperialSquareMile = 'IMPERIAL_SQUARE_MILE',
  /** The area is measured in square yards. */
  ImperialSquareYard = 'IMPERIAL_SQUARE_YARD',
  /** The area is measured in square centimeters. */
  MetricSquareCentimeter = 'METRIC_SQUARE_CENTIMETER',
  /** The area is measured in square kilometers. */
  MetricSquareKilometer = 'METRIC_SQUARE_KILOMETER',
  /** The area is measured in square meters. */
  MetricSquareMeter = 'METRIC_SQUARE_METER'
}

/**
 * MeasurementUnitAreaValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitAreaValue = {
  __typename?: 'MeasurementUnitAreaValue';
  /** Represents a standard area unit. */
  value?: Maybe<MeasurementUnitArea>;
};

/**
 * The information needed to define a custom unit, provided by the seller.
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitCustom = {
  __typename?: 'MeasurementUnitCustom';
  /** The abbreviation of the custom unit, such as bsh (bushel). This appears in the cart for the Point of Sale app, and in reports. */
  abbreviation?: Maybe<Scalars['String']['output']>;
  /** The name of the custom unit, for example bushel */
  name?: Maybe<Scalars['String']['output']>;
};

/** The generic unit. */
export enum MeasurementUnitGeneric {
  /** The generic unit. */
  Unit = 'UNIT'
}

/**
 * MeasurementUnitGenericValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitGenericValue = {
  __typename?: 'MeasurementUnitGenericValue';
  /** Reserved for API integrations that lack the ability to specify a real measurement unit */
  value?: Maybe<MeasurementUnitGeneric>;
};

/** The unit of length used to measure a quantity. */
export enum MeasurementUnitLength {
  /** The length is measured in feet. */
  ImperialFoot = 'IMPERIAL_FOOT',
  /** The length is measured in inches. */
  ImperialInch = 'IMPERIAL_INCH',
  /** The length is measured in miles. */
  ImperialMile = 'IMPERIAL_MILE',
  /** The length is measured in yards. */
  ImperialYard = 'IMPERIAL_YARD',
  /** The length is measured in centimeters. */
  MetricCentimeter = 'METRIC_CENTIMETER',
  /** The length is measured in kilometers. */
  MetricKilometer = 'METRIC_KILOMETER',
  /** The length is measured in meters. */
  MetricMeter = 'METRIC_METER',
  /** The length is measured in millimeters. */
  MetricMillimeter = 'METRIC_MILLIMETER'
}

/**
 * MeasurementUnitLengthValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitLengthValue = {
  __typename?: 'MeasurementUnitLengthValue';
  /** Represents a standard length unit. */
  value?: Maybe<MeasurementUnitLength>;
};

/** Unit of time used to measure a quantity (a duration). */
export enum MeasurementUnitTime {
  /** The time is measured in days. */
  GenericDay = 'GENERIC_DAY',
  /** The time is measured in hours. */
  GenericHour = 'GENERIC_HOUR',
  /** The time is measured in milliseconds. */
  GenericMillisecond = 'GENERIC_MILLISECOND',
  /** The time is measured in minutes. */
  GenericMinute = 'GENERIC_MINUTE',
  /** The time is measured in seconds. */
  GenericSecond = 'GENERIC_SECOND'
}

/**
 * MeasurementUnitTimeValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitTimeValue = {
  __typename?: 'MeasurementUnitTimeValue';
  /** Represents a standard unit of time. */
  value?: Maybe<MeasurementUnitTime>;
};

/** Describes the type of this unit and indicates which field contains the unit information.This is an ‘open’ enum. */
export enum MeasurementUnitUnitType {
  /** The unit details are contained in the area_unit field. */
  TypeArea = 'TYPE_AREA',
  /** The unit details are contained in the custom_unit field. */
  TypeCustom = 'TYPE_CUSTOM',
  /** The unit details are contained in the generic_unit field. */
  TypeGeneric = 'TYPE_GENERIC',
  /** The unit details are contained in the length_unit field. */
  TypeLength = 'TYPE_LENGTH',
  /** The unit details are contained in the volume_unit field. */
  TypeVolume = 'TYPE_VOLUME',
  /** The unit details are contained in the weight_unit field. */
  TypeWeight = 'TYPE_WEIGHT'
}

/** The unit of volume used to measure a quantity. */
export enum MeasurementUnitVolume {
  /** The volume is measured in cups. */
  GenericCup = 'GENERIC_CUP',
  /** The volume is measured in ounces. */
  GenericFluidOunce = 'GENERIC_FLUID_OUNCE',
  /** The volume is measured in gallons. */
  GenericGallon = 'GENERIC_GALLON',
  /** The volume is measured in pints. */
  GenericPint = 'GENERIC_PINT',
  /** The volume is measured in quarts. */
  GenericQuart = 'GENERIC_QUART',
  /** The volume is measured in shots. */
  GenericShot = 'GENERIC_SHOT',
  /** The volume is measured in cubic feet. */
  ImperialCubicFoot = 'IMPERIAL_CUBIC_FOOT',
  /** The volume is measured in cubic inches. */
  ImperialCubicInch = 'IMPERIAL_CUBIC_INCH',
  /** The volume is measured in cubic yards. */
  ImperialCubicYard = 'IMPERIAL_CUBIC_YARD',
  /** The volume is measured in metric liters. */
  MetricLiter = 'METRIC_LITER',
  /** The volume is measured in metric milliliters. */
  MetricMilliliter = 'METRIC_MILLILITER'
}

/**
 * MeasurementUnitVolumeValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitVolumeValue = {
  __typename?: 'MeasurementUnitVolumeValue';
  /** Represents a standard volume unit. */
  value?: Maybe<MeasurementUnitVolume>;
};

/** Unit of weight used to measure a quantity. */
export enum MeasurementUnitWeight {
  /** The weight is measured in pounds. */
  ImperialPound = 'IMPERIAL_POUND',
  /** The weight is measured in stones. */
  ImperialStone = 'IMPERIAL_STONE',
  /** The weight is measured in ounces. */
  ImperialWeightOunce = 'IMPERIAL_WEIGHT_OUNCE',
  /** The weight is measured in grams. */
  MetricGram = 'METRIC_GRAM',
  /** The weight is measured in kilograms. */
  MetricKilogram = 'METRIC_KILOGRAM',
  /** The weight is measured in milligrams. */
  MetricMilligram = 'METRIC_MILLIGRAM'
}

/**
 * MeasurementUnitWeightValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitWeightValue = {
  __typename?: 'MeasurementUnitWeightValue';
  /** Represents a standard unit of weight or mass. */
  value?: Maybe<MeasurementUnitWeight>;
};

/**
 * A Square seller.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type Merchant = {
  __typename?: 'Merchant';
  /** The business name of the merchant. */
  businessName?: Maybe<Scalars['String']['output']>;
  /** The country associated with the merchant. */
  country?: Maybe<Country>;
  /** The time when the merchant was created, in RFC 3339 format. For more information, see Working with Dates. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The currency associated with the merchant. */
  currency?: Maybe<Currency>;
  /** The Square-issued ID of the merchant. */
  id: Scalars['ID']['output'];
  /** The language associated with the merchant account. */
  language?: Maybe<Scalars['LanguageCode']['output']>;
  /** The locations for the merchant. */
  locations?: Maybe<LocationConnection>;
  /** The main location of the merchant. */
  mainLocation?: Maybe<Location>;
  /** The merchant's status. */
  status?: Maybe<MerchantStatus>;
};

/**
 * List of Merchant.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type MerchantConnection = {
  __typename?: 'MerchantConnection';
  /** A list of Merchant. */
  nodes: Array<Merchant>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** The Merchant ID to filter with. */
export type MerchantFilterInput = {
  /** The ID of the Merchant. */
  id: BasicIdFilterInput;
};

/** The public capabilities a merchant might have. */
export enum MerchantPublicCapability {
  IsSandbox = 'IS_SANDBOX',
  IsTestMerchant = 'IS_TEST_MERCHANT',
  PointOfSale = 'POINT_OF_SALE',
  SellCannabis = 'SELL_CANNABIS',
  UnknownCapability = 'UNKNOWN_CAPABILITY'
}

/**
 * Input type used to specify filters on `Merchant` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type MerchantRefFilterInput = {
  /**
   * Used to filter on the `id` field:
   *
   * > The Square-issued ID of the merchant.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  id?: InputMaybe<IdFilterInput>;
};

/** Merchant status. */
export enum MerchantStatus {
  /** A fully operational merchant account. The merchant can interact with Square products and APIs. */
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  /** A functionally limited merchant account. The merchant can only have limited interaction via Square APIs. The merchant cannot log in or access the seller dashboard. */
  Inactive = 'INACTIVE'
}

/**
 * Application-defined data attached to an object. Metadata fields are intended to store descriptive references or
 * associations with an entity in another system or store brief information about the object. Square does not process
 * this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive
 * information (personally identifiable information, card details, etc.).
 *
 * Keys written by applications must be 60 characters or less and must be in the character set [a-zA-Z0-9_-]. Entries
 * may also include metadata generated by Square. These keys are prefixed with a namespace, separated from the key with
 * a ':' character.
 *
 * Values have a max length of 255 characters.
 *
 * An application may have up to 10 entries per metadata field.
 *
 * Entries written by applications are private and can only be read or modified by the same application.
 *
 * See [Metadata](https://developer.squareup.com/docs/orders-api/metadata) for more information.
 */
export type Metadata = {
  __typename?: 'Metadata';
  /** A list of entries. */
  entries?: Maybe<Array<Maybe<MetadataEntry>>>;
};

/** A key-value pair for Metadata. */
export type MetadataEntry = {
  __typename?: 'MetadataEntry';
  /** The key of the Metadata entry */
  key?: Maybe<Scalars['String']['output']>;
  /** The value of the Metadata entry */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Location-specific overrides for specified properties of a `CatalogModifier` object.
 * Permissions: ITEMS_READ
 */
export type ModifierLocationOverride = {
  __typename?: 'ModifierLocationOverride';
  /** The ID of the `Location` object representing the location. This can include a deactivated location. */
  location?: Maybe<Location>;
  /**
   * The overridden price at the specified location. If this is unspecified, the modifier price is not overridden.
   * The modifier becomes free of charge at the specified location, when this `price_money` field is set to 0.
   */
  priceMoney?: Maybe<Money>;
  /**
   * Indicates whether the modifier is sold out at the specified location or not. As an example, for cheese (modifier) burger (item), when the modifier is sold out, it is the cheese, but not the burger, that is sold out.
   * The seller can manually set this sold out status. Attempts by an application to set this attribute are ignored.
   */
  soldOut?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Represents an amount of money.
 *
 * Money fields can be signed or unsigned. Fields that do not explicitly define whether they are signed or unsigned are
 * considered unsigned and can only hold positive amounts. For signed fields, the sign of the value indicates the purpose
 * of the money transfer. See
 * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
 * more information.
 */
export type Money = {
  __typename?: 'Money';
  /**
   * The amount of money, in the smallest denomination of the currency indicated by currency. For example, when currency
   * is USD, amount is in cents. Monetary amounts can be positive or negative. See the specific field description to
   * determine the meaning of the sign in a particular case.
   */
  amount: Scalars['JsonSafeLong']['output'];
  /** The type of currency in currency code. */
  currency?: Maybe<Currency>;
};

/**
 * Input type used to specify filters on a `Money` object referenced directly
 * or transitively from a list field that has been configured to index each leaf field as
 * its own flattened list of values.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type MoneyFieldsListFilterInput = {
  /**
   * Used to filter on the `amount` field:
   *
   * > The amount of money, in the smallest denomination of the currency
   * > indicated by `currency`. For example, when `currency` is `USD`, `amount` is
   * > in cents. Monetary amounts can be positive or negative. See the specific
   * > field description to determine the meaning of the sign in a particular case.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  amount?: InputMaybe<JsonSafeLongListFilterInput>;
  /**
   * Used to filter on the `currency` field:
   *
   * > The type of currency, in __ISO 4217 format__. For example, the currency
   * > code for US dollars is `USD`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  currency?: InputMaybe<CurrencyListFilterInput>;
};

/**
 * Input type used to specify filters on `Money` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type MoneyFilterInput = {
  /**
   * Used to filter on the `amount` field:
   *
   * > The amount of money, in the smallest denomination of the currency
   * > indicated by `currency`. For example, when `currency` is `USD`, `amount` is
   * > in cents. Monetary amounts can be positive or negative. See the specific
   * > field description to determine the meaning of the sign in a particular case.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  amount?: InputMaybe<JsonSafeLongFilterInput>;
  /**
   * Used to filter on the `currency` field:
   *
   * > The type of currency, in __ISO 4217 format__. For example, the currency
   * > code for US dollars is `USD`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  currency?: InputMaybe<CurrencyFilter>;
};

/** A return type used from aggregations to provided aggregated values over non-numeric fields. */
export type NonNumericAggregatedValues = {
  __typename?: 'NonNumericAggregatedValues';
  /**
   * An approximation of the number of unique values for this field within this grouping.
   *
   * The approximation uses the HyperLogLog++ algorithm from the [HyperLogLog in
   * Practice](https://research.google.com/pubs/archive/40671.pdf)
   * paper. The accuracy of the returned value varies based on the specific dataset, but
   * it usually differs from the true distinct value count by less than 7%.
   */
  approximateDistinctValueCount?: Maybe<Scalars['JsonSafeLong']['output']>;
};

/** OAuth scopes */
export enum OAuthScope {
  AppointmentsAllRead = 'APPOINTMENTS_ALL_READ',
  AppointmentsBusinessSettingsRead = 'APPOINTMENTS_BUSINESS_SETTINGS_READ',
  AppointmentsRead = 'APPOINTMENTS_READ',
  BankAccountsRead = 'BANK_ACCOUNTS_READ',
  CashDrawerRead = 'CASH_DRAWER_READ',
  CustomersRead = 'CUSTOMERS_READ',
  DevicesRead = 'DEVICES_READ',
  DisputesRead = 'DISPUTES_READ',
  EmployeesRead = 'EMPLOYEES_READ',
  GiftcardsRead = 'GIFTCARDS_READ',
  InventoryRead = 'INVENTORY_READ',
  InvoicesRead = 'INVOICES_READ',
  ItemsRead = 'ITEMS_READ',
  LoyaltyRead = 'LOYALTY_READ',
  MerchantProfileRead = 'MERCHANT_PROFILE_READ',
  None = 'NONE',
  OnlineStoreSiteRead = 'ONLINE_STORE_SITE_READ',
  OnlineStoreSnippetsRead = 'ONLINE_STORE_SNIPPETS_READ',
  OrdersRead = 'ORDERS_READ',
  PaymentsRead = 'PAYMENTS_READ',
  PayoutsRead = 'PAYOUTS_READ',
  SettlementsRead = 'SETTLEMENTS_READ',
  SubscriptionsRead = 'SUBSCRIPTIONS_READ',
  TimecardsRead = 'TIMECARDS_READ',
  TimecardsSettingsRead = 'TIMECARDS_SETTINGS_READ',
  VendorRead = 'VENDOR_READ'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any open disputes.
 */
export type OpenDisputeDetails = {
  __typename?: 'OpenDisputeDetails';
  /** Unique ID for the payment involved in the open dispute. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `OpenDisputeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type OpenDisputeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment involved in the open dispute.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * References to Orders subgraph entities
 *
 * Permissions:ORDERS_READ
 */
export type Order = {
  __typename?: 'Order';
  /**
   * The timestamp for when the order reached a terminal state, in RFC 3339 format (for example "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The timestamp for when the order was created, at server side, in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The ID of the customer associated with the order.
   *
   * You should specify a `customer_id` on the order (or the payment) to ensure that transactions
   * are reliably linked to customers. Omitting this field might result in the creation of new
   * [instant profiles](https://developer.squareup.com/docs/customers-api/what-it-does#instant-profiles).
   */
  customer?: Maybe<Customer>;
  /**
   * The list of all discounts associated with the order.
   *
   * Discounts can be scoped to either `ORDER` or `LINE_ITEM`. For discounts scoped to `LINE_ITEM`,
   * an `OrderLineItemAppliedDiscount` must be added to each line item that the discount applies to.
   * For discounts with `ORDER` scope, the server generates an `OrderLineItemAppliedDiscount`
   * for every line item.
   *
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any discounts in this field, using the deprecated
   * `line_items.discounts` field results in an error. Use `line_items.applied_discounts`
   * instead.
   */
  discounts?: Maybe<Array<Maybe<OrderLineItemDiscount>>>;
  /**
   * Details about order fulfillment.
   *
   * Orders can only be created with at most one fulfillment. However, orders returned
   * by the API might contain multiple fulfillments.
   */
  fulfillments?: Maybe<Array<Maybe<OrderFulfillment>>>;
  /** The Square-issued ID of the Order. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The line items included in the order. */
  lineItems?: Maybe<Array<Maybe<OrderLineItem>>>;
  /** The ID of the seller location that this order is associated with. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * Application-defined data attached to this order. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see  [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /**
   * The net amount of money due on the order.
   * @deprecated Use `netAmountDueMoney` instead.
   */
  netAmountDue?: Maybe<Money>;
  /** The net amount of money due on the order. */
  netAmountDueMoney?: Maybe<Money>;
  /** The net money amounts (sale money - return money). */
  netAmounts?: Maybe<OrderMoneyAmounts>;
  /**
   * Pricing options for an order. The options affect how the order's price is calculated.
   * They can be used, for example, to apply automatic price adjustments that are based on
   * preconfigured pricing rules.
   */
  pricingOptions?: Maybe<OrderPricingOptions>;
  /**
   * A client-specified ID to associate an entity in another system
   * with this order.
   */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** The refunds that are part of this order. */
  refunds?: Maybe<Array<Maybe<Refund>>>;
  /** The rollup of the returned money amounts. */
  returnAmounts?: Maybe<OrderMoneyAmounts>;
  /**
   * A collection of items from sale orders being returned in this one. Normally part of an
   * itemized return or exchange. There is exactly one `Return` object per sale `Order` being
   * referenced.
   */
  returns?: Maybe<Array<Maybe<OrderReturn>>>;
  /** A set-like list of Rewards that have been added to the Order. */
  rewards?: Maybe<Array<Maybe<Reward>>>;
  /**
   * A positive rounding adjustment to the total of the order. This adjustment is commonly
   * used to apply cash rounding when the minimum unit of account is smaller than the lowest physical
   * denomination of the currency.
   */
  roundingAdjustment?: Maybe<OrderRoundingAdjustment>;
  /** A list of service charges applied to the order. */
  serviceCharges?: Maybe<Array<Maybe<OrderServiceCharge>>>;
  /** The origination details of the order. */
  source?: Maybe<OrderSource>;
  /** The current state of the order. */
  state?: Maybe<OrderState>;
  /**
   * The list of all taxes associated with the order.
   *
   * Taxes can be scoped to either `ORDER` or `LINE_ITEM`. For taxes with `LINE_ITEM` scope, an
   * `OrderLineItemAppliedTax` must be added to each line item that the tax applies to. For taxes
   * with `ORDER` scope, the server generates an `OrderLineItemAppliedTax` for every line item.
   *
   * On reads, each tax in the list includes the total amount of that tax applied to the order.
   *
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any taxes in this field, using the deprecated
   * `line_items.taxes` field results in an error. Use `line_items.applied_taxes`
   * instead.
   */
  taxes?: Maybe<Array<Maybe<OrderLineItemTax>>>;
  /** The tenders that were used to pay for the order. */
  tenders?: Maybe<Array<Maybe<OrderTender>>>;
  /**
   * A short-term identifier for the order (such as a customer first name,
   * table number, or auto-generated order number that resets daily).
   */
  ticketName?: Maybe<Scalars['String']['output']>;
  /**
   * The total amount of discount money to collect for the order.
   * @deprecated Use `totalDiscountMoney` instead.
   */
  totalDiscount?: Maybe<Money>;
  /** The total amount of discount money to collect for the order. */
  totalDiscountMoney?: Maybe<Money>;
  /** The total amount of money to collect for the order. */
  totalMoney?: Maybe<Money>;
  /**
   * The total amount of money collected in service charges for the order.
   * @deprecated Use `totalServiceChargeMoney` instead.
   */
  totalServiceCharge?: Maybe<Money>;
  /**
   * The total amount of money collected in service charges for the order.
   *
   * Note: `total_service_charge_money` is the sum of `applied_money` fields for each individual
   * service charge. Therefore, `total_service_charge_money` only includes inclusive tax amounts,
   * not additive tax amounts.
   */
  totalServiceChargeMoney?: Maybe<Money>;
  /**
   * The total amount of tax money to collect for the order.
   * @deprecated Use `totalTaxMoney` instead.
   */
  totalTax?: Maybe<Money>;
  /** The total amount of tax money to collect for the order. */
  totalTaxMoney?: Maybe<Money>;
  /**
   * The total amount of tip money to collect for the order.
   * @deprecated Use `totalTipMoney` instead.
   */
  totalTip?: Maybe<Money>;
  /** The total amount of tip money to collect for the order. */
  totalTipMoney?: Maybe<Money>;
  /**
   * The timestamp for when the order was last updated, at server side, in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The version number, which is incremented each time an update is committed to the order.
   * Orders not created through the API do not include a version number and
   * therefore cannot be updated.
   *
   * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders).
   */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * Represents the details of a tender with `type` `BANK_ACCOUNT`.See BankAccountPaymentDetails
 * for more exposed details of a bank account payment.
 * Permissions: ORDERS_READ
 */
export type OrderBankAccountTender = OrderTender & {
  __typename?: 'OrderBankAccountTender';
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /** The bank account payment's current state. */
  status?: Maybe<OrderBankAccountTenderStatus>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/** Indicates the bank account payment's current status. */
export enum OrderBankAccountTenderStatus {
  /** The bank account payment has been completed. */
  Completed = 'COMPLETED',
  /** The bank account payment failed. */
  Failed = 'FAILED',
  /** The bank account payment is in progress. */
  Pending = 'PENDING'
}

/**
 * Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`.
 * Permissions: ORDERS_READ
 */
export type OrderBuyNowPayLaterTender = OrderTender & {
  __typename?: 'OrderBuyNowPayLaterTender';
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /** The Buy Now Pay Later brand. */
  buyNowPayLaterBrand?: Maybe<OrderBuyNowPayLaterTenderBrand>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /**
   * The buy now pay later payment's current state (such as `AUTHORIZED` or
   * `CAPTURED`). See TenderBuyNowPayLaterDetailsStatus
   * for possible values.
   */
  status?: Maybe<OrderBuyNowPayLaterTenderStatus>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/** Orders buy now pay later tender brands enum. */
export enum OrderBuyNowPayLaterTenderBrand {
  Afterpay = 'AFTERPAY',
  OtherBrand = 'OTHER_BRAND'
}

/** Orders buy now pay later detail status enum. */
export enum OrderBuyNowPayLaterTenderStatus {
  /** The buy now pay later payment has been authorized but not yet captured. */
  Authorized = 'AUTHORIZED',
  /** The buy now pay later payment was authorized and subsequently captured (i.e., completed). */
  Captured = 'CAPTURED',
  /** The buy now pay later payment failed. */
  Failed = 'FAILED',
  /** The buy now pay later payment was authorized and subsequently voided (i.e., canceled). */
  Voided = 'VOIDED'
}

/**
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
 * Permissions: ORDERS_READ
 */
export type OrderCardTender = OrderTender & {
  __typename?: 'OrderCardTender';
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /** The credit card's non-confidential details. */
  card?: Maybe<Card>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The method used to enter the card's details for the transaction. */
  entryMethod?: Maybe<OrderCardTenderEntryMethod>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /**
   * The credit card payment's current state (such as `AUTHORIZED` or
   * `CAPTURED`). See TenderCardDetailsStatus
   * for possible values.
   */
  status?: Maybe<OrderCardTenderStatus>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/** Indicates the method used to enter the card's details. */
export enum OrderCardTenderEntryMethod {
  /**
   * The card was processed via a contactless (i.e., NFC) transaction
   * with a Square reader.
   */
  Contactless = 'CONTACTLESS',
  /** The card was processed via EMV with a Square reader. */
  Emv = 'EMV',
  /**
   * The card information was keyed manually into Square Point of Sale or a
   * Square-hosted web form.
   */
  Keyed = 'KEYED',
  /** The buyer's card details were already on file with Square. */
  OnFile = 'ON_FILE',
  /** The card was swiped through a Square reader or Square stand. */
  Swiped = 'SWIPED'
}

/** Indicates the card transaction's current status. */
export enum OrderCardTenderStatus {
  /** The card transaction has been authorized but not yet captured. */
  Authorized = 'AUTHORIZED',
  /** The card transaction was authorized and subsequently captured (i.e., completed). */
  Captured = 'CAPTURED',
  /** The card transaction failed. */
  Failed = 'FAILED',
  /** The card transaction was authorized and subsequently voided (i.e., canceled). */
  Voided = 'VOIDED'
}

/**
 * Represents the details of a tender with `type` `CASH`.
 * Permissions: ORDERS_READ
 */
export type OrderCashTender = OrderTender & {
  __typename?: 'OrderCashTender';
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /** The total amount of cash provided by the buyer, before change is given. */
  buyerTenderedMoney?: Maybe<Money>;
  /** The amount of change returned to the buyer. */
  changeBackMoney?: Maybe<Money>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/**
 * A list of Orders.
 *
 * Permissions:ORDERS_READ
 */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** List of Order. */
  nodes: Array<Order>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Specific details for curbside pickup.
 * Permissions: ORDERS_READ
 */
export type OrderCurbsidePickup = {
  __typename?: 'OrderCurbsidePickup';
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  buyerArrivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Specific details for curbside pickup, such as parking number and vehicle model. */
  curbsideDetails?: Maybe<Scalars['String']['output']>;
};

/**
 * Describes delivery details of an order fulfillment.
 * Permissions: ORDERS_READ
 */
export type OrderDelivery = {
  __typename?: 'OrderDelivery';
  /** The delivery cancellation reason. Max length: 100 characters. */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was canceled. This field is automatically
   * set when the fulfillment `state` changes to `CANCELED`.
   *
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicates when the seller completed the fulfillment.
   * This field is automatically set when  fulfillment `state` changes to `COMPLETED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when an order can be picked up by the courier for delivery.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  courierPickupAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The time period after `courier_pickup_at` in which the courier should pick up the order.
   * The duration must be in RFC 3339 format (for example, "P1W3D").
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  courierPickupWindowDuration?: Maybe<Scalars['Duration']['output']>;
  /** The name of the courier provider. */
  courierProviderName?: Maybe<Scalars['String']['output']>;
  /** The support phone number of the courier. */
  courierSupportPhoneNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * that represents the start of the delivery period.
   * When the fulfillment `schedule_type` is `ASAP`, the field is automatically
   * set to the current time plus the `prep_time_duration`.
   * Otherwise, the application can set this field while the fulfillment `state` is
   * `PROPOSED`, `RESERVED`, or `PREPARED` (any time before the
   * terminal state such as `COMPLETED`, `CANCELED`, and `FAILED`).
   *
   * The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  deliverAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was delivered to the recipient.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  deliveredAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The time period after `deliver_at` in which to deliver the order.
   * Applications can set this field when the fulfillment `state` is
   * `PROPOSED`, `RESERVED`, or `PREPARED` (any time before the terminal state
   * such as `COMPLETED`, `CANCELED`, and `FAILED`).
   *
   * The duration must be in RFC 3339 format (for example, "P1W3D").
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  deliveryWindowDuration?: Maybe<Scalars['Duration']['output']>;
  /** A note to provide additional instructions about how to deliver the order. */
  dropoffNotes?: Maybe<Scalars['String']['output']>;
  /** The identifier for the delivery created by the third-party courier service. */
  externalDeliveryId?: Maybe<Scalars['ID']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicates when the seller started processing the fulfillment.
   * This field is automatically set when the fulfillment `state` changes to `RESERVED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  inProgressAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the delivery is preferred to be no contact. */
  isNoContactDelivery?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The flag to indicate the delivery is managed by a third party (ie DoorDash), which means
   * we may not receive all recipient information for PII purposes.
   */
  managedDelivery?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Provides additional instructions about the delivery fulfillment.
   * It is displayed in the Square Point of Sale application and set by the API.
   */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was placed.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  placedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The duration of time it takes to prepare and deliver this fulfillment.
   * The duration must be in RFC 3339 format (for example, "P1W3D").
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  prepTimeDuration?: Maybe<Scalars['Duration']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the seller marked the fulfillment as ready for
   * courier pickup. This field is automatically set when the fulfillment `state` changes
   * to PREPARED.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  readyAt?: Maybe<Scalars['DateTime']['output']>;
  /** The contact information for the person to receive the fulfillment. */
  recipient?: Maybe<OrderFulfillmentRecipient>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was rejected. This field is
   * automatically set when the fulfillment `state` changes to `FAILED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Indicates the fulfillment delivery schedule type. If `SCHEDULED`, then
   * `deliver_at` is required. If `ASAP`, then `prep_time_duration` is required. The default is `SCHEDULED`.
   */
  scheduleType?: Maybe<OrderDeliveryScheduleType>;
  /** The identifier for the delivery created by Square. */
  squareDeliveryId?: Maybe<Scalars['ID']['output']>;
};

/** The schedule type of the delivery fulfillment. */
export enum OrderDeliveryScheduleType {
  /**
   * Indicates that the fulfillment to deliver as soon as possible and should be prepared
   * immediately.
   */
  Asap = 'ASAP',
  /** Indicates the fulfillment to deliver at a scheduled deliver time. */
  Scheduled = 'SCHEDULED'
}

/** OrderFilter is used for filtering a query with Order */
export type OrderFilter = {
  /** Time range for filtering on the closedAt timestamp. If you use this value, you must also set the orderBy of the query to closedAt. */
  closedAt?: InputMaybe<TimeRangeFilter>;
  /** Time range for filtering on the createdAt timestamp. If you use this value, you must also set the orderBy of the query to createdAt. */
  createdAt?: InputMaybe<TimeRangeFilter>;
  /** Filter by customers associated with the order. */
  customer?: InputMaybe<BasicIdFilter>;
  /** List of fulfillment states to filter for. Will return orders if any of its fulfillments match any of the fulfillment states listed in this field. */
  fulfillmentState?: InputMaybe<OrderFulfillmentStateFilter>;
  /** List of fulfillment types to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. */
  fulfillmentType?: InputMaybe<OrderFulfillmentTypeFilter>;
  /** The order IDs to filter with. */
  id?: InputMaybe<BasicIdFilter>;
  /** The location IDs for the orders to query. All locations must belong to the same merchant. */
  location?: InputMaybe<BasicIdFilter>;
  /** The merchant IDs for the orders to query. */
  merchantId: BasicIdFilter;
  /** Filters by Source name. Will return any orders with with a source.name that matches any of the listed source names. */
  sourceName?: InputMaybe<BasicStringFilter>;
  /** States to filter for. */
  state?: InputMaybe<OrderStateFilter>;
  /** Time range for filtering on the updatedAt timestamp. If you use this value, you must also set the orderBy of the query to updatedAt. */
  updatedAt?: InputMaybe<TimeRangeFilter>;
};

/**
 * Contains details about how to fulfill this order.Orders can only be created with at most one fulfillment using the API.
 * However, orders returned by the Orders API might contain multiple fulfillments because sellers can create multiple fulfillments using Square products such as Square Online.
 * Permissions: ORDERS_READ
 */
export type OrderFulfillment = {
  __typename?: 'OrderFulfillment';
  /** Describes delivery details of an order fulfillment. */
  delivery?: Maybe<OrderDelivery>;
  /**
   * A list of entries pertaining to the fulfillment of an order. Each entry must reference
   * a valid `uid` for an order line item in the `line_item_uid` field, as well as a `quantity` to
   * fulfill.
   *
   * Multiple entries can reference the same line item `uid`, as long as the total quantity among
   * all fulfillment entries referencing a single line item does not exceed the quantity of the
   * order's line item itself.
   *
   * An order cannot be marked as `COMPLETED` before all fulfillments are `COMPLETED`,
   * `CANCELED`, or `FAILED`. Fulfillments can be created and completed independently
   * before order completion.
   */
  entries?: Maybe<Array<Maybe<OrderFulfillmentFulfillmentEntry>>>;
  /**
   * Describes what order line items this fulfillment applies to.
   * It can be `ALL` or `ENTRY_LIST` with a supplied list of fulfillment entries.
   */
  lineItemApplication?: Maybe<OrderFulfillmentLineItemApplication>;
  /**
   * Application-defined data attached to this fulfillment. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /**
   * Contains details for a pickup fulfillment. These details are required when the fulfillment
   * type is `PICKUP`.
   */
  pickup?: Maybe<OrderPickup>;
  /**
   * Contains details for a shipment fulfillment. These details are required when the fulfillment type
   * is `SHIPMENT`.
   *
   * A shipment fulfillment's relationship to fulfillment `state`:
   * `PROPOSED`: A shipment is requested.
   * `RESERVED`: Fulfillment in progress. Shipment processing.
   * `PREPARED`: Shipment packaged. Shipping label created.
   * `COMPLETED`: Package has been shipped.
   * `CANCELED`: Shipment has been canceled.
   * `FAILED`: Shipment has failed.
   */
  shipment?: Maybe<OrderShipment>;
  /** The state of the fulfillment. */
  state?: Maybe<OrderFulfillmentState>;
  /** The type of the fulfillment. */
  type?: Maybe<OrderFulfillmentType>;
  /** A unique ID that identifies the fulfillment only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Links an order line item to a fulfillment.Each entry must reference
 * a valid `uid` for an order line item in the `line_item_uid` field, as well as a `quantity` to
 * fulfill.
 * Permissions: ORDERS_READ
 */
export type OrderFulfillmentFulfillmentEntry = {
  __typename?: 'OrderFulfillmentFulfillmentEntry';
  /** The `uid` from the order line item. */
  lineItemUid?: Maybe<Scalars['UID']['output']>;
  /**
   * Application-defined data attached to this fulfillment entry. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /**
   * The quantity of the line item being fulfilled, formatted as a decimal number.
   * For example, `"3"`.
   *
   * Fulfillments for line items with a `quantity_unit` can have non-integer quantities.
   * For example, `"1.70000"`.
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /** A unique ID that identifies the fulfillment entry only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * The `line_item_application` describes what order line items this fulfillment applies
 * to.It can be `ALL` or `ENTRY_LIST` with a supplied list of fulfillment entries.
 */
export enum OrderFulfillmentLineItemApplication {
  /** If `ALL`, `entries` must be unset. */
  All = 'ALL',
  /** If `ENTRY_LIST`, supply a list of `entries`. */
  EntryList = 'ENTRY_LIST'
}

/**
 * Information about the fulfillment recipient.
 * Permissions: ORDERS_READ
 */
export type OrderFulfillmentRecipient = {
  __typename?: 'OrderFulfillmentRecipient';
  /**
   * The address of the fulfillment recipient. This field is required.
   *
   * If provided, the address overrides the corresponding customer profile value
   * indicated by `customer_id`.
   */
  address?: Maybe<Address>;
  /**
   * The ID of the customer associated with the fulfillment.
   *
   * If `customer_id` is provided, the fulfillment recipient's `display_name`,
   * `email_address`, and `phone_number` are automatically populated from the
   * targeted customer profile. If these fields are set in the request, the request
   * values override the information from the customer profile. If the
   * targeted customer profile does not contain the necessary information and
   * these fields are left unset, the request results in an error.
   */
  customer?: Maybe<Customer>;
  /**
   * The display name of the fulfillment recipient. This field is required.
   *
   * If provided, the display name overrides the corresponding customer profile value
   * indicated by `customer_id`.
   */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * The email address of the fulfillment recipient.
   *
   * If provided, the email address overrides the corresponding customer profile value
   * indicated by `customer_id`.
   */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The phone number of the fulfillment recipient. This field is required.
   *
   * If provided, the phone number overrides the corresponding customer profile value
   * indicated by `customer_id`.
   */
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** The current state of this fulfillment. */
export enum OrderFulfillmentState {
  /** Indicates that the fulfillment was canceled. */
  Canceled = 'CANCELED',
  /** Indicates that the fulfillment was successfully completed. */
  Completed = 'COMPLETED',
  /**
   * Indicates that the fulfillment failed to be completed, but was not explicitly
   * canceled.
   */
  Failed = 'FAILED',
  /** Indicates that the fulfillment has been prepared. */
  Prepared = 'PREPARED',
  /** Indicates that the fulfillment has been proposed. */
  Proposed = 'PROPOSED',
  /** Indicates that the fulfillment has been reserved. */
  Reserved = 'RESERVED'
}

/** OrderFulfillmentStateFilter is used for filtering a query with OrderFulfillmentState */
export type OrderFulfillmentStateFilter = {
  /** Used for filtering a query with OrderFulfillmentState */
  equalToAnyOf?: InputMaybe<Array<OrderFulfillmentState>>;
};

/** The type of fulfillment. */
export enum OrderFulfillmentType {
  /** A courier to deliver the fulfillment. */
  Delivery = 'DELIVERY',
  /** A digital fulfillment. */
  Digital = 'DIGITAL',
  /** A recipient to pick up the fulfillment from a physical [location](entity:Location). */
  Pickup = 'PICKUP',
  /** A shipping carrier to ship the fulfillment. */
  Shipment = 'SHIPMENT'
}

/** OrderFulfillmentTypeFilter is used for filtering a query with OrderFulfillmentType */
export type OrderFulfillmentTypeFilter = {
  /** Used for filtering a query with OrderFulfillmentType */
  equalToAnyOf?: InputMaybe<Array<OrderFulfillmentType>>;
};

/**
 * Represents a line item in an order.Each line item describes a different
 * product to purchase, with its own quantity and price details.
 * Permissions: ORDERS_READ
 */
export type OrderLineItem = {
  __typename?: 'OrderLineItem';
  /**
   * The list of references to discounts applied to this line item. Each
   * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
   * `OrderLineItemDiscounts` applied to the line item. On reads, the amount
   * applied is populated.
   *
   * An `OrderLineItemAppliedDiscount` is automatically created on every line item for all
   * `ORDER` scoped discounts that are added to the order. `OrderLineItemAppliedDiscount` records
   * for `LINE_ITEM` scoped discounts must be added in requests for the discount to apply to any
   * line items.
   *
   * To change the amount of a discount, modify the referenced top-level discount.
   */
  appliedDiscounts?: Maybe<Array<Maybe<OrderLineItemAppliedDiscount>>>;
  /**
   * The list of references to service charges applied to this line item. Each
   * `OrderLineItemAppliedServiceCharge` has a `service_charge_id` that references the `uid` of a
   * top-level `OrderServiceCharge` applied to the line item. On reads, the amount applied is
   * populated.
   *
   * To change the amount of a service charge, modify the referenced top-level service charge.
   */
  appliedServiceCharges?: Maybe<Array<Maybe<OrderLineItemAppliedServiceCharge>>>;
  /**
   * The list of references to taxes applied to this line item. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a
   * top-level `OrderLineItemTax` applied to the line item. On reads, the
   * amount applied is populated.
   *
   * An `OrderLineItemAppliedTax` is automatically created on every line
   * item for all `ORDER` scoped taxes added to the order. `OrderLineItemAppliedTax`
   * records for `LINE_ITEM` scoped taxes must be added in requests for the tax
   * to apply to any line items.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /**
   * The base price for a single unit of the line item.
   * @deprecated Use `basePriceMoney` instead.
   */
  basePrice?: Maybe<Money>;
  /** The base price for a single unit of the line item. */
  basePriceMoney?: Maybe<Money>;
  /**
   * The amount of money made in gross sales for this line item.
   * @deprecated Use `grossSalesMoney` instead.
   */
  grossSales?: Maybe<Money>;
  /**
   * The amount of money made in gross sales for this line item.
   * The amount is calculated as the sum of the variation's total price and each modifier's total price.
   * For inclusive tax items in the US, Canada, and Japan, tax is deducted from `gross_sales_money`. For Europe and
   * Australia, inclusive tax remains as part of the gross sale calculation.
   */
  grossSalesMoney?: Maybe<Money>;
  /**
   * The type of line item: an itemized sale, a non-itemized sale (custom amount), or the
   * activation or reloading of a gift card.
   */
  itemType?: Maybe<OrderLineItemItemType>;
  /** The CatalogItemVariation ID applied to this line item. */
  itemVariation?: Maybe<CatalogItemVariation>;
  /**
   * Application-defined data attached to this line item. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /** The CatalogModifiers applied to this line item. */
  modifiers?: Maybe<Array<Maybe<OrderLineItemModifier>>>;
  /** The name of the line item. */
  name?: Maybe<Scalars['String']['output']>;
  /** An optional note associated with the line item. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * Describes pricing adjustments that are blocked from automatic
   * application to a line item. For more information, see
   * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
   */
  pricingBlocklists?: Maybe<OrderLineItemPricingBlocklists>;
  /**
   * The count, or measurement, of a line item being purchased:
   *
   * If `quantity` is a whole number, and `quantity_unit` is not specified, then `quantity` denotes an item count.  For example: `3` apples.
   *
   * If `quantity` is a whole or decimal number, and `quantity_unit` is also specified, then `quantity` denotes a measurement.  For example: `2.25` pounds of broccoli.
   *
   * For more information, see [Specify item quantity and measurement unit](https://developer.squareup.com/docs/orders-api/create-orders#specify-item-quantity-and-measurement-unit).
   *
   * Line items with a quantity of `0` are automatically removed
   * when paying for or otherwise completing the order.
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /** The measurement unit and decimal precision that this line item's quantity is measured in. */
  quantityUnit?: Maybe<OrderQuantityUnit>;
  /**
   * The total amount of discount money to collect for the line item.
   * @deprecated Use `totalDiscountMoney` instead.
   */
  totalDiscount?: Maybe<Money>;
  /** The total amount of discount money to collect for the line item. */
  totalDiscountMoney?: Maybe<Money>;
  /** The total amount of money to collect for this line item. */
  totalMoney?: Maybe<Money>;
  /**
   * The total amount of apportioned service charge money to collect for the line item.
   * @deprecated Use `totalServiceChargeMoney` instead.
   */
  totalServiceCharge?: Maybe<Money>;
  /** The total amount of apportioned service charge money to collect for the line item. */
  totalServiceChargeMoney?: Maybe<Money>;
  /**
   * The total amount of tax money to collect for the line item.
   * @deprecated Use `totalTaxMoney` instead.
   */
  totalTax?: Maybe<Money>;
  /** The total amount of tax money to collect for the line item. */
  totalTaxMoney?: Maybe<Money>;
  /** A unique ID that identifies the line item only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
  /**
   * The total price of all item variations sold in this line item.
   * @deprecated Use `variationTotalPriceMoney` instead.
   */
  variationTotalPrice?: Maybe<Money>;
  /**
   * The total price of all item variations sold in this line item.
   * The price is calculated as `base_price_money` multiplied by `quantity`.
   * It does not include modifiers.
   */
  variationTotalPriceMoney?: Maybe<Money>;
};

/**
 * Represents an applied portion of a discount to a line item in an order.Order scoped discounts have automatically applied discounts present for each line item.
 * Line-item scoped discounts must have applied discounts added manually for any applicable line
 * items. The corresponding applied money is automatically computed based on participating
 * line items.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemAppliedDiscount = {
  __typename?: 'OrderLineItemAppliedDiscount';
  /** The amount of money applied by the discount to the line item. */
  appliedMoney?: Maybe<Money>;
  /**
   * The `uid` of the discount that the applied discount represents. It must
   * reference a discount present in the `order.discounts` field.
   *
   * This field is immutable. To change which discounts apply to a line item,
   * you must delete the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
   */
  discountUid?: Maybe<Scalars['UID']['output']>;
  /** A unique ID that identifies the applied discount only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/** Permissions: ORDERS_READ */
export type OrderLineItemAppliedServiceCharge = {
  __typename?: 'OrderLineItemAppliedServiceCharge';
  /** The amount of money applied by the service charge to the line item. */
  appliedMoney?: Maybe<Money>;
  /**
   * The `uid` of the service charge that the applied service charge represents. It must
   * reference a service charge present in the `order.service_charges` field.
   *
   * This field is immutable. To change which service charges apply to a line item,
   * delete and add a new `OrderLineItemAppliedServiceCharge`.
   */
  serviceChargeUid?: Maybe<Scalars['UID']['output']>;
  /** A unique ID that identifies the applied service charge only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents an applied portion of a tax to a line item in an order.Order-scoped taxes automatically include the applied taxes in each line item.
 * Line item taxes must be referenced from any applicable line items.
 * The corresponding applied money is automatically computed, based on the
 * set of participating line items.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemAppliedTax = {
  __typename?: 'OrderLineItemAppliedTax';
  /** The amount of money applied by the tax to the line item. */
  appliedMoney?: Maybe<Money>;
  /**
   * The `uid` of the tax for which this applied tax represents. It must reference
   * a tax present in the `order.taxes` field.
   *
   * This field is immutable. To change which taxes apply to a line item, delete and add a new
   * `OrderLineItemAppliedTax`.
   */
  taxUid?: Maybe<Scalars['UID']['output']>;
  /** A unique ID that identifies the applied tax only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a discount that applies to one or more line items in an
 * order.Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the
 * amount contributed by the item to the order subtotal.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemDiscount = {
  __typename?: 'OrderLineItemDiscount';
  /**
   * The total declared monetary amount of the discount.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total declared monetary amount of the discount.
   *
   * `amount_money` is not set for percentage-based discounts.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount of discount actually applied to the line item.
   *
   * The amount represents the amount of money applied as a line-item scoped discount.
   * When an amount-based discount is scoped to the entire order, the value
   * of `applied_money` is different than `amount_money` because the total
   * amount of the discount is distributed across all line items.
   */
  appliedMoney?: Maybe<Money>;
  /** The catalog object ID referencing CatalogDiscount. */
  discount?: Maybe<CatalogDiscount>;
  /** The discount code IDs corresponding to this discount. */
  discountCodeIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * Application-defined data attached to this discount. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /** The discount's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the discount, as a string representation of a decimal number.
   * A value of `7.25` corresponds to a percentage of 7.25%.
   *
   * `percentage` is not set for amount-based discounts.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * The object ID of a pricing rule to be applied
   * automatically to this discount. The specification and application of the discounts, to
   * which a `pricing_rule_id` is assigned, are completely controlled by the corresponding
   * pricing rule.
   */
  pricingRule?: Maybe<CatalogPricingRule>;
  /**
   * The reward IDs corresponding to this discount. The application and
   * specification of discounts that have `reward_ids` are completely controlled by the backing
   * criteria corresponding to the reward tiers of the rewards that are added to the order
   * through the Loyalty API. To manually unapply discounts that are the result of added rewards,
   * the rewards must be removed from the order through the Loyalty API.
   */
  rewards?: Maybe<Array<Maybe<Reward>>>;
  /**
   * Indicates the level at which the discount applies. For `ORDER` scoped discounts,
   * Square generates references in `applied_discounts` on all order line items that do
   * not have them. For `LINE_ITEM` scoped discounts, the discount only applies to line items
   * with a discount reference in their `applied_discounts` field.
   *
   * This field is immutable. To change the scope of a discount, you must delete
   * the discount and re-add it as a new discount.
   */
  scope?: Maybe<OrderLineItemDiscountScope>;
  /**
   * The type of the discount.
   *
   * Discounts that do not reference a catalog object ID must have a type of
   * `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
   */
  type?: Maybe<OrderLineItemDiscountType>;
  /** A unique ID that identifies the discount only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/** Indicates whether this is a line-item or order-level discount. */
export enum OrderLineItemDiscountScope {
  /**
   * The discount should be applied to only line items specified by
   * `OrderLineItemAppliedDiscount` reference records.
   */
  LineItem = 'LINE_ITEM',
  /** The discount should be applied to the entire order. */
  Order = 'ORDER',
  /**
   * Used for reporting only.
   * The original transaction discount scope is currently not supported by the API.
   */
  OtherDiscountScope = 'OTHER_DISCOUNT_SCOPE'
}

/** Indicates how the discount is applied to the associated line item or order. */
export enum OrderLineItemDiscountType {
  /** Apply the discount as a fixed monetary value (such as $1.00) off the item price. */
  FixedAmount = 'FIXED_AMOUNT',
  /** Apply the discount as a fixed percentage (such as 5%) off the item price. */
  FixedPercentage = 'FIXED_PERCENTAGE',
  /**
   * Used for reporting only.
   * The original transaction discount type is currently not supported by the API.
   */
  UnknownDiscount = 'UNKNOWN_DISCOUNT',
  /**
   * Apply the discount as a variable amount based on the item price.
   *
   * The specific discount amount of a `VARIABLE_AMOUNT` discount
   * is assigned at the time of the purchase.
   */
  VariableAmount = 'VARIABLE_AMOUNT',
  /**
   * Apply the discount as a variable percentage based on the item
   * price.
   *
   * The specific discount percentage of a `VARIABLE_PERCENTAGE` discount
   * is assigned at the time of the purchase.
   */
  VariablePercentage = 'VARIABLE_PERCENTAGE'
}

/** Represents the line item type. */
export enum OrderLineItemItemType {
  /** Indicates that the line item is a non-itemized sale. */
  CustomAmount = 'CUSTOM_AMOUNT',
  /**
   * Indicates that the line item is a gift card sale. Gift cards sold through
   * the Orders API are sold in an unactivated state and can be activated through the
   * Gift Cards API using the line item `uid`.
   */
  GiftCard = 'GIFT_CARD',
  /** Indicates that the line item is an itemized sale. */
  Item = 'ITEM'
}

/**
 * A CatalogModifier.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemModifier = {
  __typename?: 'OrderLineItemModifier';
  /**
   * The base price for the modifier.
   * @deprecated Use `basePriceMoney` instead.
   */
  basePrice?: Maybe<Money>;
  /**
   * Application-defined data attached to this order. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see  [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /**
   * The catalog object ID referencing CatalogModifier.
   * @deprecated Use `catalogObject` instead.
   */
  modifier?: Maybe<CatalogModifier>;
  /** The name of the item modifier. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The quantity of the line item modifier. The modifier quantity can be 0 or more.
   * For example, suppose a restaurant offers a cheeseburger on the menu. When a buyer orders
   * this item, the restaurant records the purchase by creating an `Order` object with a line item
   * for a burger. The line item includes a line item modifier: the name is cheese and the quantity
   * is 1. The buyer has the option to order extra cheese (or no cheese). If the buyer chooses
   * the extra cheese option, the modifier quantity increases to 2. If the buyer does not want
   * any cheese, the modifier quantity is set to 0.
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /**
   * The total price of the item modifier for its line item.
   * @deprecated Use `totalPriceMoney` instead.
   */
  totalPrice?: Maybe<Money>;
  /** A unique ID that identifies the modifier only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Describes pricing adjustments that are blocked from automatic
 * application to a line item.For more information, see
 * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
 * Permissions: ORDERS_READ
 */
export type OrderLineItemPricingBlocklists = {
  __typename?: 'OrderLineItemPricingBlocklists';
  /**
   * A list of discounts blocked from applying to the line item.
   * Discounts can be blocked by the `discount_uid` (for ad hoc discounts) or
   * the `discount_catalog_object_id` (for catalog discounts).
   */
  blockedDiscounts?: Maybe<Array<Maybe<OrderLineItemPricingBlocklistsBlockedDiscount>>>;
  /**
   * A list of taxes blocked from applying to the line item.
   * Taxes can be blocked by the `tax_uid` (for ad hoc taxes) or
   * the `tax_catalog_object_id` (for catalog taxes).
   */
  blockedTaxes?: Maybe<Array<Maybe<OrderLineItemPricingBlocklistsBlockedTax>>>;
};

/**
 * A discount to block from applying to a line item.The discount must be
 * identified by either `discount_uid` or `discount_catalog_object_id`, but not both.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemPricingBlocklistsBlockedDiscount = {
  __typename?: 'OrderLineItemPricingBlocklistsBlockedDiscount';
  /**
   * The `catalog_object_id` of the discount that should be blocked.
   * Use this field to block catalog discounts. For ad hoc discounts, use the
   * `discount_uid` field.
   */
  discountCatalogObjectId?: Maybe<Scalars['ID']['output']>;
  /**
   * The `uid` of the discount that should be blocked. Use this field to block
   * ad hoc discounts. For catalog discounts, use the `discount_catalog_object_id` field.
   */
  discountUid?: Maybe<Scalars['UID']['output']>;
  /** A unique ID of the `BlockedDiscount` within the order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A tax to block from applying to a line item.The tax must be
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemPricingBlocklistsBlockedTax = {
  __typename?: 'OrderLineItemPricingBlocklistsBlockedTax';
  /**
   * The `catalog_object_id` of the tax that should be blocked.
   * Use this field to block catalog taxes. For ad hoc taxes, use the
   * `tax_uid` field.
   */
  taxCatalogObjectId?: Maybe<Scalars['ID']['output']>;
  /**
   * The `uid` of the tax that should be blocked. Use this field to block
   * ad hoc taxes. For catalog, taxes use the `tax_catalog_object_id` field.
   */
  taxUid?: Maybe<Scalars['UID']['output']>;
  /** A unique ID of the `BlockedTax` within the order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a tax that applies to one or more line item in the order.Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the amount the item
 * contributes to the order subtotal.
 * Permissions: ORDERS_READ
 */
export type OrderLineItemTax = {
  __typename?: 'OrderLineItemTax';
  /**
   * The amount of money applied to the order by the tax.
   *
   * - For percentage-based taxes, `applied_money` is the money
   * calculated using the percentage.
   */
  appliedMoney?: Maybe<Money>;
  /**
   * Determines whether the tax was automatically applied to the order based on
   * the catalog configuration. For an example, see
   * [Automatically Apply Taxes to an Order](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes).
   */
  autoApplied?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Application-defined data attached to this tax. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /** The tax's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax, as a string representation of a decimal
   * number. For example, a value of `"7.25"` corresponds to a percentage of
   * 7.25%.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates the level at which the tax applies. For `ORDER` scoped taxes,
   * Square generates references in `applied_taxes` on all order line items that do
   * not have them. For `LINE_ITEM` scoped taxes, the tax only applies to line items
   * with references in their `applied_taxes` field.
   *
   * This field is immutable. To change the scope, you must delete the tax and
   * re-add it as a new tax.
   */
  scope?: Maybe<OrderLineItemTaxScope>;
  /** The catalog object ID referencing CatalogTax. */
  tax?: Maybe<CatalogTax>;
  /** Indicates the calculation method used to apply the tax. */
  type?: Maybe<OrderLineItemTaxType>;
  /** A unique ID that identifies the tax only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/** Indicates whether this is a line-item or order-level tax. */
export enum OrderLineItemTaxScope {
  /**
   * The tax should be applied only to line items specified by
   * the `OrderLineItemAppliedTax` reference records.
   */
  LineItem = 'LINE_ITEM',
  /** The tax should be applied to the entire order. */
  Order = 'ORDER',
  /**
   * Used for reporting only.
   * The original transaction tax scope is currently not supported by the API.
   */
  OtherTaxScope = 'OTHER_TAX_SCOPE'
}

/** Indicates how the tax is applied to the associated line item or order. */
export enum OrderLineItemTaxType {
  /**
   * The tax is an additive tax. The tax amount is added on top of the price.
   * For example, an item with a cost of 1.00 USD and a 10% additive tax has a total
   * cost to the buyer of 1.10 USD.
   */
  Additive = 'ADDITIVE',
  /**
   * The tax is an inclusive tax. Inclusive taxes are already included
   * in the line item price or order total. For example, an item with a cost of
   * 1.00 USD and a 10% inclusive tax has a pretax cost of 0.91 USD
   * (91 cents) and a 0.09 (9 cents) tax for a total cost of 1.00 USD to
   * the buyer.
   */
  Inclusive = 'INCLUSIVE',
  /**
   * Used for reporting only.
   * The original transaction tax type is currently not supported by the API.
   */
  UnknownTax = 'UNKNOWN_TAX'
}

/**
 * A collection of various money amounts.
 * Permissions: ORDERS_READ
 */
export type OrderMoneyAmounts = {
  __typename?: 'OrderMoneyAmounts';
  /**
   * The money associated with discounts.
   * @deprecated Use `discountMoney` instead.
   */
  discount?: Maybe<Money>;
  /**
   * The money associated with service charges.
   * @deprecated Use `serviceChargeMoney` instead.
   */
  serviceCharge?: Maybe<Money>;
  /**
   * The money associated with taxes.
   * @deprecated Use `taxMoney` instead.
   */
  tax?: Maybe<Money>;
  /**
   * The money associated with tips.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The total money. */
  totalMoney?: Maybe<Money>;
};

/** Permissions: ORDERS_READ */
export type OrderOtherTender = OrderTender & {
  __typename?: 'OrderOtherTender';
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/**
 * Contains details necessary to fulfill a pickup order.
 * Permissions: ORDERS_READ
 */
export type OrderPickup = {
  __typename?: 'OrderPickup';
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was marked in progress. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The duration of time after which an in progress pickup fulfillment is automatically moved
   * to the `COMPLETED` state. The duration must be in RFC 3339 format (for example, "P1W3D").
   *
   * If not set, this pickup fulfillment remains in progress until it is canceled or completed.
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  autoCompleteDuration?: Maybe<Scalars['Duration']['output']>;
  /** A description of why the pickup was canceled. The maximum length: 100 characters. */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Specific details for curbside pickup. These details can only be populated if `is_curbside_pickup` is set to `true`. */
  curbsidePickup?: Maybe<OrderCurbsidePickup>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment expires if it is not marked in progress. The timestamp must be
   * in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set
   * up to 7 days in the future. If `expires_at` is not set, any new payments attached to the order
   * are automatically completed.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup. */
  isCurbsidePickup?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A note to provide additional instructions about the pickup
   * fulfillment displayed in the Square Point of Sale application and set by the API.
   */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  pickedUpAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
   * "2016-09-04T23:59:33.123Z".
   *
   * For fulfillments with the schedule type `ASAP`, this is automatically set
   * to the current time plus the expected duration to prepare the fulfillment.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  pickupAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The window of time in which the order should be picked up after the `pickup_at` timestamp.
   * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
   * informational guideline for merchants.
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  pickupWindowDuration?: Maybe<Scalars['Duration']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  placedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The duration of time it takes to prepare this fulfillment.
   * The duration must be in RFC 3339 format (for example, "P1W3D").
   *
   * Example for 2 days, 12 hours, 30 minutes, and 15 seconds: P2DT12H30M15S
   */
  prepTimeDuration?: Maybe<Scalars['Duration']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  readyAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Information about the person to pick up this fulfillment from a physical
   * location.
   */
  recipient?: Maybe<OrderFulfillmentRecipient>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The schedule type of the pickup fulfillment. Defaults to `SCHEDULED`. */
  scheduleType?: Maybe<OrderPickupScheduleType>;
};

/** The schedule type of the pickup fulfillment. */
export enum OrderPickupScheduleType {
  /**
   * Indicates that the fulfillment will be picked up as soon as possible and
   * should be prepared immediately.
   */
  Asap = 'ASAP',
  /** Indicates that the fulfillment will be picked up at a scheduled pickup time. */
  Scheduled = 'SCHEDULED'
}

/**
 * Pricing options for an order.The options affect how the order's price is calculated.
 * They can be used, for example, to apply automatic price adjustments that are based on preconfigured
 * pricing rules.
 * Permissions: ORDERS_READ
 */
export type OrderPricingOptions = {
  __typename?: 'OrderPricingOptions';
  /**
   * The option to determine whether pricing rule-based
   * discounts are automatically applied to an order.
   */
  autoApplyDiscounts?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The option to determine whether rule-based taxes are automatically
   * applied to an order when the criteria of the corresponding rules are met.
   */
  autoApplyTaxes?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Contains the measurement unit for a quantity and a precision that
 * specifies the number of digits after the decimal point for decimal quantities.
 * Permissions: ORDERS_READ
 */
export type OrderQuantityUnit = {
  __typename?: 'OrderQuantityUnit';
  /**
   * The catalog object ID referencing the
   * CatalogMeasurementUnit.
   *
   * This field is set when this is a catalog-backed measurement unit.
   */
  catalogObjectId?: Maybe<Scalars['ID']['output']>;
  /**
   * A MeasurementUnit that represents the
   * unit of measure for the quantity.
   */
  measurementUnit?: Maybe<MeasurementUnit>;
  /**
   * For non-integer quantities, represents the number of digits after the decimal point that are
   * recorded for this quantity.
   *
   * For example, a precision of 1 allows quantities such as `"1.0"` and `"1.1"`, but not `"1.01"`.
   *
   * Min: 0. Max: 5.
   */
  precision?: Maybe<Scalars['Int']['output']>;
};

/**
 * The set of line items, service charges, taxes, discounts, tips, and other items being returned in an order.
 * Permissions: ORDERS_READ
 */
export type OrderReturn = {
  __typename?: 'OrderReturn';
  /** An aggregate monetary value being returned by this return entry. */
  amounts?: Maybe<OrderMoneyAmounts>;
  /**
   * A collection of references to discounts being returned for an order, including the total
   * applied discount amount to be returned. The discounts must reference a top-level discount ID
   * from the source order.
   */
  discounts?: Maybe<Array<Maybe<OrderReturnDiscount>>>;
  /** A collection of line items that are being returned. */
  lineItems?: Maybe<Array<Maybe<OrderReturnLineItem>>>;
  /** A collection of references to tips being returned for an order. */
  returnTips?: Maybe<Array<Maybe<OrderReturnTip>>>;
  /**
   * A positive or negative rounding adjustment to the total value being returned. Adjustments are commonly
   * used to apply cash rounding when the minimum unit of the account is smaller than the lowest
   * physical denomination of the currency.
   */
  roundingAdjustment?: Maybe<OrderRoundingAdjustment>;
  /** A collection of service charges that are being returned. */
  serviceCharges?: Maybe<Array<Maybe<OrderReturnServiceCharge>>>;
  /**
   * An order that contains the original sale of these return line items. This is unset
   * for unlinked returns.
   */
  source?: Maybe<Order>;
  /**
   * A collection of references to taxes being returned for an order, including the total
   * applied tax amount to be returned. The taxes must reference a top-level tax ID from the source
   * order.
   */
  taxes?: Maybe<Array<Maybe<OrderReturnTax>>>;
  /** A unique ID that identifies the return only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a discount being returned that applies to one or more return line items in an
 * order.Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 * Permissions: ORDERS_READ
 */
export type OrderReturnDiscount = {
  __typename?: 'OrderReturnDiscount';
  /**
   * The total declared monetary amount of the discount.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total declared monetary amount of the discount.
   *
   * `amount_money` is not set for percentage-based discounts.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount of discount actually applied to this line item. When an amount-based
   * discount is at the order level, this value is different from `amount_money` because the discount
   * is distributed across the line items.
   */
  appliedMoney?: Maybe<Money>;
  /** The catalog object ID referencing CatalogDiscount. */
  discount?: Maybe<CatalogDiscount>;
  /** The discount's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax, as a string representation of a decimal number.
   * A value of `"7.25"` corresponds to a percentage of 7.25%.
   *
   * `percentage` is not set for amount-based discounts.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates the level at which the `OrderReturnDiscount` applies. For `ORDER` scoped
   * discounts, the server generates references in `applied_discounts` on all
   * `OrderReturnLineItem`s. For `LINE_ITEM` scoped discounts, the discount is only applied to
   * `OrderReturnLineItem`s with references in their `applied_discounts` field.
   */
  scope?: Maybe<OrderLineItemDiscountScope>;
  /** The discount `uid` from the order that contains the original application of this discount. */
  sourceDiscountUid?: Maybe<Scalars['UID']['output']>;
  /**
   * The type of the discount. If it is created by the API, it is `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
   *
   * Discounts that do not reference a catalog object ID must have a type of
   * `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
   */
  type?: Maybe<OrderLineItemDiscountType>;
  /** A unique ID that identifies the returned discount only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * The line item being returned in an order.
 * Permissions: ORDERS_READ
 */
export type OrderReturnLineItem = {
  __typename?: 'OrderReturnLineItem';
  /**
   * The list of references to `OrderReturnDiscount` entities applied to the return line item. Each
   * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
   * `OrderReturnDiscount` applied to the return line item. On reads, the applied amount
   * is populated.
   */
  appliedDiscounts?: Maybe<Array<Maybe<OrderLineItemAppliedDiscount>>>;
  /**
   * The list of references to `OrderReturnServiceCharge` entities applied to the return
   * line item. Each `OrderLineItemAppliedServiceCharge` has a `service_charge_uid` that
   * references the `uid` of a top-level `OrderReturnServiceCharge` applied to the return line
   * item. On reads, the applied amount is populated.
   */
  appliedServiceCharges?: Maybe<Array<Maybe<OrderLineItemAppliedServiceCharge>>>;
  /**
   * The list of references to `OrderReturnTax` entities applied to the return line item. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderReturnTax` applied to the return line item. On reads, the applied amount
   * is populated.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /**
   * The base price for a single unit of the line item.
   * @deprecated Use `basePriceMoney` instead.
   */
  basePrice?: Maybe<Money>;
  /** The base price for a single unit of the line item. */
  basePriceMoney?: Maybe<Money>;
  /**
   * The gross return amount of money calculated as (item base price + modifiers price) * quantity.
   * @deprecated Use `grossReturnMoney` instead.
   */
  grossReturn?: Maybe<Money>;
  /** The gross return amount of money calculated as (item base price + modifiers price) * quantity. */
  grossReturnMoney?: Maybe<Money>;
  /** The CatalogItemVariation ID applied to this return line item. */
  itemVariation?: Maybe<CatalogItemVariation>;
  /** The CatalogModifiers applied to this line item. */
  modifiers?: Maybe<Array<Maybe<OrderReturnLineItemModifier>>>;
  /** The name of the line item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The note of the return line item. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The quantity returned, formatted as a decimal number.
   * For example, `"3"`.
   *
   * Line items with a `quantity_unit` can have non-integer quantities.
   * For example, `"1.70000"`.
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /** The unit and precision that this return line item's quantity is measured in. */
  quantityUnit?: Maybe<OrderQuantityUnit>;
  /** The `uid` of the line item in the original sale order. */
  sourceLineItemUid?: Maybe<Scalars['UID']['output']>;
  /**
   * The total amount of discount money to return for the line item.
   * @deprecated Use `totalDiscountMoney` instead.
   */
  totalDiscount?: Maybe<Money>;
  /** The total amount of discount money to return for the line item. */
  totalDiscountMoney?: Maybe<Money>;
  /** The total amount of money to return for this line item. */
  totalMoney?: Maybe<Money>;
  /**
   * The total amount of apportioned service charge money to return for the line item.
   * @deprecated Use `totalServiceChargeMoney` instead.
   */
  totalServiceCharge?: Maybe<Money>;
  /** The total amount of apportioned service charge money to return for the line item. */
  totalServiceChargeMoney?: Maybe<Money>;
  /**
   * The total amount of tax money to return for the line item.
   * @deprecated Use `totalTaxMoney` instead.
   */
  totalTax?: Maybe<Money>;
  /** The total amount of tax money to return for the line item. */
  totalTaxMoney?: Maybe<Money>;
  /** A unique ID for this return line-item entry. */
  uid?: Maybe<Scalars['UID']['output']>;
  /** The name of the variation applied to this return line item. */
  variationName?: Maybe<Scalars['String']['output']>;
  /**
   * The total price of all item variations returned in this line item.
   * @deprecated Use `variationTotalPriceMoney` instead.
   */
  variationTotalPrice?: Maybe<Money>;
  /**
   * The total price of all item variations returned in this line item.
   * The price is calculated as `base_price_money` multiplied by `quantity` and
   * does not include modifiers.
   */
  variationTotalPriceMoney?: Maybe<Money>;
};

/**
 * A line item modifier being returned.
 * Permissions: ORDERS_READ
 */
export type OrderReturnLineItemModifier = {
  __typename?: 'OrderReturnLineItemModifier';
  /**
   * The base price for the modifier.
   * @deprecated Use `basePriceMoney` instead.
   */
  basePrice?: Maybe<Money>;
  /**
   * The catalog object ID referencing CatalogModifier.
   * @deprecated Use `catalogObject` instead.
   */
  modifier?: Maybe<CatalogModifier>;
  /** The name of the item modifier. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The quantity of the line item modifier. The modifier quantity can be 0 or more.
   * For example, suppose a restaurant offers a cheeseburger on the menu. When a buyer orders
   * this item, the restaurant records the purchase by creating an `Order` object with a line item
   * for a burger. The line item includes a line item modifier: the name is cheese and the quantity
   * is 1. The buyer has the option to order extra cheese (or no cheese). If the buyer chooses
   * the extra cheese option, the modifier quantity increases to 2. If the buyer does not want
   * any cheese, the modifier quantity is set to 0.
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /**
   * The modifier `uid` from the order's line item that contains the
   * original sale of this line item modifier.
   */
  sourceModifierUid?: Maybe<Scalars['UID']['output']>;
  /**
   * The total price of the item modifier for its line item.
   * @deprecated Use `totalPriceMoney` instead.
   */
  totalPrice?: Maybe<Money>;
  /** A unique ID that identifies the return modifier only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents the service charge applied to the original order.
 * Permissions: ORDERS_READ
 */
export type OrderReturnServiceCharge = {
  __typename?: 'OrderReturnServiceCharge';
  /**
   * The amount of a non-percentage-based service charge.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The amount of a non-percentage-based service charge.
   *
   * Either `percentage` or `amount_money` should be set, but not both.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount of money applied to the order by the service charge, including
   * any inclusive tax amounts, as calculated by Square.
   *
   * - For fixed-amount service charges, `applied_money` is equal to `amount_money`.
   * - For percentage-based service charges, `applied_money` is the money calculated using the percentage.
   */
  appliedMoney?: Maybe<Money>;
  /**
   * The list of references to `OrderReturnTax` entities applied to the
   * `OrderReturnServiceCharge`. Each `OrderLineItemAppliedTax` has a `tax_uid`
   * that references the `uid` of a top-level `OrderReturnTax` that is being
   * applied to the `OrderReturnServiceCharge`. On reads, the applied amount is
   * populated.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /** The calculation phase after which to apply the service charge. */
  calculationPhase?: Maybe<OrderServiceChargeCalculationPhase>;
  /** The name of the service charge. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the service charge, as a string representation of
   * a decimal number. For example, a value of `"7.25"` corresponds to a
   * percentage of 7.25%.
   *
   * Either `percentage` or `amount_money` should be set, but not both.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates the level at which the apportioned service charge applies. For `ORDER`
   * scoped service charges, Square generates references in `applied_service_charges` on
   * all order line items that do not have them. For `LINE_ITEM` scoped service charges,
   * the service charge only applies to line items with a service charge reference in their
   * `applied_service_charges` field.
   *
   * This field is immutable. To change the scope of an apportioned service charge, you must delete
   * the apportioned service charge and re-add it as a new apportioned service charge.
   */
  scope?: Maybe<OrderServiceChargeScope>;
  /** The catalog object ID of the associated OrderServiceCharge. */
  serviceCharge?: Maybe<CatalogServiceCharge>;
  /**
   * The service charge `uid` from the order containing the original
   * service charge. `source_service_charge_uid` is `null` for
   * unlinked returns.
   */
  sourceServiceChargeUid?: Maybe<Scalars['UID']['output']>;
  /**
   * Indicates whether the surcharge can be taxed. Service charges
   * calculated in the `TOTAL_PHASE` cannot be marked as taxable.
   */
  taxable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The total amount of money to collect for the service charge.
   *
   * __NOTE__: If an inclusive tax is applied to the service charge, `total_money`
   * does not equal `applied_money` plus `total_tax_money` because the inclusive
   * tax amount is already included in both `applied_money` and `total_tax_money`.
   */
  totalMoney?: Maybe<Money>;
  /**
   * The total amount of tax money to collect for the service charge.
   * @deprecated Use `totalTaxMoney` instead.
   */
  totalTax?: Maybe<Money>;
  /** The total amount of tax money to collect for the service charge. */
  totalTaxMoney?: Maybe<Money>;
  /** The treatment type of the service charge. */
  treatmentType?: Maybe<OrderServiceChargeTreatmentType>;
  /** A unique ID that identifies the return service charge only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a tax being returned that applies to one or more return line items in an order.Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 * Permissions: ORDERS_READ
 */
export type OrderReturnTax = {
  __typename?: 'OrderReturnTax';
  /** The amount of money applied by the tax in an order. */
  appliedMoney?: Maybe<Money>;
  /** The tax's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax, as a string representation of a decimal number.
   * For example, a value of `"7.25"` corresponds to a percentage of 7.25%.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates the level at which the `OrderReturnTax` applies. For `ORDER` scoped
   * taxes, Square generates references in `applied_taxes` on all
   * `OrderReturnLineItem`s. For `LINE_ITEM` scoped taxes, the tax is only applied to
   * `OrderReturnLineItem`s with references in their `applied_discounts` field.
   */
  scope?: Maybe<OrderLineItemTaxScope>;
  /** The tax `uid` from the order that contains the original tax charge. */
  sourceTaxUid?: Maybe<Scalars['UID']['output']>;
  /** The catalog object ID referencing CatalogTax. */
  tax?: Maybe<CatalogTax>;
  /** Indicates the calculation method used to apply the tax. */
  type?: Maybe<OrderLineItemTaxType>;
  /** A unique ID that identifies the returned tax only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A tip being returned.
 * Permissions: ORDERS_READ
 */
export type OrderReturnTip = {
  __typename?: 'OrderReturnTip';
  /**
   * The amount of tip being returned
   * --
   */
  appliedMoney?: Maybe<Money>;
  /** The tender `id` from the order that contains the original application of this tip. */
  sourceTenderId?: Maybe<Scalars['ID']['output']>;
  /** The tender `uid` from the order that contains the original application of this tip. */
  sourceTenderUid?: Maybe<Scalars['UID']['output']>;
  /** A unique ID that identifies the tip only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A rounding adjustment of the money being returned.Commonly used to apply cash rounding
 * when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
 * Permissions: ORDERS_READ
 */
export type OrderRoundingAdjustment = {
  __typename?: 'OrderRoundingAdjustment';
  /**
   * The actual rounding adjustment amount.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /** The actual rounding adjustment amount. */
  amountMoney?: Maybe<Money>;
  /** The name of the rounding adjustment from the original sale order. */
  name?: Maybe<Scalars['String']['output']>;
  /** A unique ID that identifies the rounding adjustment only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a service charge applied to an order.
 * Permissions: ORDERS_READ
 */
export type OrderServiceCharge = {
  __typename?: 'OrderServiceCharge';
  /**
   * The amount of a non-percentage-based service charge.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The amount of a non-percentage-based service charge.
   *
   * Exactly one of `percentage` or `amount_money` should be set.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount of money applied to the order by the service charge,
   * including any inclusive tax amounts, as calculated by Square.
   *
   * - For fixed-amount service charges, `applied_money` is equal to `amount_money`.
   * - For percentage-based service charges, `applied_money` is the money
   * calculated using the percentage.
   */
  appliedMoney?: Maybe<Money>;
  /**
   * The list of references to the taxes applied to this service charge. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderLineItemTax` that is being applied to this service charge. On reads, the amount applied
   * is populated.
   *
   * An `OrderLineItemAppliedTax` is automatically created on every taxable service charge
   * for all `ORDER` scoped taxes that are added to the order. `OrderLineItemAppliedTax` records
   * for `LINE_ITEM` scoped taxes must be added in requests for the tax to apply to any taxable
   * service charge. Taxable service charges have the `taxable` field set to `true` and calculated
   * in the `SUBTOTAL_PHASE`.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /** The calculation phase at which to apply the service charge. */
  calculationPhase?: Maybe<OrderServiceChargeCalculationPhase>;
  /**
   * Application-defined data attached to this service charge. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Maybe<Metadata>;
  /** The name of the service charge. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The service charge percentage as a string representation of a
   * decimal number. For example, `"7.25"` indicates a service charge of 7.25%.
   *
   * Exactly 1 of `percentage` or `amount_money` should be set.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates the level at which the apportioned service charge applies. For `ORDER`
   * scoped service charges, Square generates references in `applied_service_charges` on
   * all order line items that do not have them. For `LINE_ITEM` scoped service charges,
   * the service charge only applies to line items with a service charge reference in their
   * `applied_service_charges` field.
   *
   * This field is immutable. To change the scope of an apportioned service charge, you must delete
   * the apportioned service charge and re-add it as a new apportioned service charge.
   */
  scope?: Maybe<OrderServiceChargeScope>;
  /** The catalog object ID referencing the service charge CatalogObject. */
  serviceCharge?: Maybe<CatalogServiceCharge>;
  /**
   * Indicates whether the service charge can be taxed. If set to `true`,
   * order-level taxes automatically apply to the service charge. Note that
   * service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
   */
  taxable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The total amount of money to collect for the service charge.
   *
   * __Note__: If an inclusive tax is applied to the service charge,
   * `total_money` does not equal `applied_money` plus `total_tax_money`
   * because the inclusive tax amount is already included in both
   * `applied_money` and `total_tax_money`.
   */
  totalMoney?: Maybe<Money>;
  /**
   * The total amount of money to collect for the service charge.
   * @deprecated Use `totalTaxMoney` instead.
   */
  totalTax?: Maybe<Money>;
  /** The total amount of tax money to collect for the service charge. */
  totalTaxMoney?: Maybe<Money>;
  /** The treatment type of the service charge. */
  treatmentType?: Maybe<OrderServiceChargeTreatmentType>;
  /** The type of the service charge. */
  type?: Maybe<OrderServiceChargeType>;
  /** A unique ID that identifies the service charge only within this order. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a phase in the process of calculating order totals.Service charges are applied after the indicated phase.
 *
 * [Read more about how order totals are calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
 */
export enum OrderServiceChargeCalculationPhase {
  /**
   * The service charge is calculated as a compounding adjustment
   * after any discounts and percentage based apportioned service charges,
   * but before any tax considerations.
   */
  ApportionedAmountPhase = 'APPORTIONED_AMOUNT_PHASE',
  /**
   * The service charge is calculated as a compounding adjustment
   * after any discounts, but before amount based apportioned service charges
   * and any tax considerations.
   */
  ApportionedPercentagePhase = 'APPORTIONED_PERCENTAGE_PHASE',
  /**
   * The service charge is applied after discounts, but before
   * taxes.
   */
  SubtotalPhase = 'SUBTOTAL_PHASE',
  /**
   * The service charge is applied after all discounts and taxes
   * are applied.
   */
  TotalPhase = 'TOTAL_PHASE'
}

/**
 * Indicates whether this is a line-item or order-level apportioned
 * service charge.
 */
export enum OrderServiceChargeScope {
  /**
   * The service charge should be applied to only line items specified by
   * `OrderLineItemAppliedServiceCharge` reference records.
   */
  LineItem = 'LINE_ITEM',
  /** The service charge should be applied to the entire order. */
  Order = 'ORDER',
  /**
   * Used for reporting only.
   * The original transaction service charge scope is currently not supported by the API.
   */
  OtherServiceChargeScope = 'OTHER_SERVICE_CHARGE_SCOPE'
}

/**
 * Indicates whether the service charge will be treated as a value-holding line item or
 * apportioned toward a line item.
 */
export enum OrderServiceChargeTreatmentType {
  ApportionedTreatment = 'APPORTIONED_TREATMENT',
  LineItemTreatment = 'LINE_ITEM_TREATMENT'
}

/** Orders service charge type enum. */
export enum OrderServiceChargeType {
  /** The service charge is an automatic gratuity. */
  AutoGratuity = 'AUTO_GRATUITY',
  /** The service charge is a custom amount. */
  Custom = 'CUSTOM'
}

/**
 * Contains the details necessary to fulfill a shipment order.
 * Permissions: ORDERS_READ
 */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** A description of why the shipment was canceled. */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating the shipment was canceled.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The shipping carrier being used to ship this fulfillment (such as UPS, FedEx, or USPS). */
  carrier?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the shipment is expected to be delivered to the shipping carrier.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  expectedShippedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the shipment failed to be completed. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A description of why the shipment failed to be completed. */
  failureReason?: Maybe<Scalars['String']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment was moved to the `RESERVED` state, which  indicates that preparation
   * of this shipment has begun. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  inProgressAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment was moved to the `PREPARED` state, which indicates that the
   * fulfillment is packaged. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  packagedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the shipment was requested. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  placedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Information about the person to receive this shipment fulfillment. */
  recipient?: Maybe<OrderFulfillmentRecipient>;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment was moved to the `COMPLETED` state, which indicates that
   * the fulfillment has been given to the shipping carrier. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  shippedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A note with additional information for the shipping carrier. */
  shippingNote?: Maybe<Scalars['String']['output']>;
  /**
   * A description of the type of shipping product purchased from the carrier
   * (such as First Class, Priority, or Express).
   */
  shippingType?: Maybe<Scalars['String']['output']>;
  /** The reference number provided by the carrier to track the shipment's progress. */
  trackingNumber?: Maybe<Scalars['String']['output']>;
  /** A link to the tracking webpage on the carrier's website. */
  trackingUrl?: Maybe<Scalars['Url']['output']>;
};

/**
 * Criteria to sort results by. The chronological order in which results are returned. Defaults to createdAt_DESC.
 *
 * When using a BasicDateTimeFilter, OrderSort must match the timestamp field that the BasicDateTimeFilter uses to filter. For example, If you set your sort_field to closedAt and you use a BasicDateTimeFilter,
 * your BasicDateTimeFilter must filter for orders by their closedAt date. If this field does not match the timestamp field in BasicDateTimeFilter, it will return an error.
 */
export enum OrderSort {
  ClosedAtAsc = 'closedAt_ASC',
  ClosedAtDesc = 'closedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/**
 * Represents the origination details of an order.
 * Permissions: ORDERS_READ
 */
export type OrderSource = {
  __typename?: 'OrderSource';
  /**
   * The name used to identify the place (physical or digital) that an order originates.
   * If unset, the name defaults to the name of the application that created the order.
   */
  name?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents the details of a tender with `type` `SQUARE_ACCOUNT`.
 * Permissions: ORDERS_READ
 */
export type OrderSquareAccountTender = OrderTender & {
  __typename?: 'OrderSquareAccountTender';
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /**
   * The Square Account payment's current state (such as `AUTHORIZED` or
   * `CAPTURED`). See TenderSquareAccountDetailsStatus
   * for possible values.
   */
  status?: Maybe<OrderSquareAccountTenderStatus>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/** Orders tender square account detail status enum. */
export enum OrderSquareAccountTenderStatus {
  /** The Square Account payment has been authorized but not yet captured. */
  Authorized = 'AUTHORIZED',
  /** The Square Account payment was authorized and subsequently captured (i.e., completed). */
  Captured = 'CAPTURED',
  /** The Square Account payment failed. */
  Failed = 'FAILED',
  /** The Square Account payment was authorized and subsequently voided (i.e., canceled). */
  Voided = 'VOIDED'
}

/** The state of the order. */
export enum OrderState {
  /** Indicates that the order is canceled. Canceled orders are not paid. This is a terminal state. */
  Canceled = 'CANCELED',
  /** Indicates that the order is completed. Completed orders are fully paid. This is a terminal state. */
  Completed = 'COMPLETED',
  /**
   * Indicates that the order is in a draft state. Draft orders can be updated,
   * but cannot be paid or fulfilled.
   * For more information, see [Create Orders](https://developer.squareup.com/docs/orders-api/create-orders).
   */
  Draft = 'DRAFT',
  /** Indicates that the order is open. Open orders can be updated. */
  Open = 'OPEN'
}

/** OrderStateFilter is used for filtering a query with OrderState */
export type OrderStateFilter = {
  /** Used for filtering a query with OrderState */
  equalToAnyOf?: InputMaybe<Array<OrderState>>;
};

/** Represents a tender (i.e., a method of payment) used in a Square transaction. Permissions:ORDERS_READ */
export type OrderTender = {
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of the corresponding Payment will be equal to the `amount_money` of the tender.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /**
   * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`,
   * the `total_money` of the corresponding Payment will be equal to the
   * `amount_money` of the tender.
   */
  amountMoney?: Maybe<Money>;
  /**
   * The timestamp for when the tender was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. It is the associated payment ID. */
  id: Scalars['ID']['output'];
  /** The ID of the transaction's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the Payment that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created.
   * It is usually available after about ten seconds.
   */
  processingFeeMoney?: Maybe<Money>;
  /**
   * The tip's amount of the tender.
   * @deprecated Use `tipMoney` instead.
   */
  tip?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tipMoney?: Maybe<Money>;
  /** The ID of the tender's associated transaction. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as `CARD` or `CASH`. */
  type?: Maybe<OrderTenderType>;
};

/** Indicates a tender's type. */
export enum OrderTenderType {
  /** A bank account payment. */
  BankAccount = 'BANK_ACCOUNT',
  /** A Buy Now Pay Later payment. */
  BuyNowPayLater = 'BUY_NOW_PAY_LATER',
  /** A credit card. */
  Card = 'CARD',
  /** Cash. */
  Cash = 'CASH',
  /** This tender represents the register being opened for a "no sale" event. */
  NoSale = 'NO_SALE',
  /** A form of tender that does not match any other value. */
  Other = 'OTHER',
  /** A Square House Account payment. */
  SquareAccount = 'SQUARE_ACCOUNT',
  /** A Square gift card. */
  SquareGiftCard = 'SQUARE_GIFT_CARD',
  /**
   * A credit card processed with a card processor other than Square.
   *
   * This value applies only to merchants in countries where Square does not
   * yet provide card processing.
   */
  ThirdPartyCard = 'THIRD_PARTY_CARD',
  /**
   * A payment from a digital wallet, e.g. Cash App, Paypay, Rakuten Pay,
   * Au Pay, D Barai, Merpay, Wechat Pay, Alipay.
   *
   * Note: Some "digital wallets", including Google Pay and Apple Pay, facilitate
   * card payments.  Those payments have the `CARD` type.
   */
  Wallet = 'WALLET'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any other type of adjustments that don't fall under existing types.
 */
export type OtherAdjustmentDetails = {
  __typename?: 'OtherAdjustmentDetails';
  /** Unique ID for the payment related to other adjustments. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `OtherAdjustmentDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type OtherAdjustmentDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to other adjustments.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of any other type that does not belong in the rest of the types.
 */
export type OtherDetails = {
  __typename?: 'OtherDetails';
  /** Unique ID for the payment related to other details. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `OtherDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type OtherDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to other details.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** Provides pagination-related information. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**
   * The `Cursor` of the last edge of the current page. This can be passed in the next query as
   * a `after` argument to paginate forwards.
   */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** Indicates if there is another page of results available after the current one. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates if there is another page of results available before the current one. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /**
   * The `Cursor` of the first edge of the current page. This can be passed in the next query as
   * a `before` argument to paginate backwards.
   */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** Permissions:PAYMENTS_READ */
export type Payment = {
  __typename?: 'Payment';
  /**
   * The amount processed for this payment, not including `tipMoney`.
   *
   * The amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount the developer is taking as a fee for facilitating the payment on behalf
   * of the seller. This amount is specified in the smallest denomination of the applicable currency
   * (for example, US dollar amounts are specified in cents). For more information,
   * see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
   *
   * The amount cannot be more than 90% of the `total_money` value.
   *
   * To set this field, `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required.
   * For more information, see [Permissions](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees#permissions).
   */
  appFeeMoney?: Maybe<Money>;
  /** Details about the application that took the payment. */
  applicationDetails?: Maybe<PaymentApplicationDetails>;
  /** The initial amount of money approved for this payment. */
  approvedMoney?: Maybe<Money>;
  /** Details about a bank account payment. These details are only populated if the `sourceType` is `BANK_ACCOUNT`. */
  bankAccountDetails?: Maybe<BankAccountPaymentDetails>;
  /** The buyer's billing address. */
  billingAddress?: Maybe<Address>;
  /**
   * Details about a Buy Now Pay Later payment. The details are only populated
   * if the `source_type` is `BUY_NOW_PAY_LATER`. For more information, see
   * [Afterpay Payments](https://developer.squareup.com/docs/payments-api/take-payments/afterpay-payments).
   */
  buyNowPayLaterDetails?: Maybe<BuyNowPayLaterPaymentDetails>;
  /** The buyer's email address. */
  buyerEmailAddress?: Maybe<Scalars['String']['output']>;
  /** Actions that can be performed on this payment. */
  capabilities: Array<PaymentCapability>;
  /** Details about a card payment. These details are only populated if the `sourceType` is CARD. */
  cardDetails?: Maybe<CardPaymentDetails>;
  /** Details about a cash payment. These details are only populated if the `sourceType` is `CASH`. */
  cashDetails?: Maybe<CashPaymentDetails>;
  /** The timestamp of when the payment was created, in RFC 3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [Customer](https://developer.squareup.com/reference/square/payments-api/list-payments#type-customer)
   * ID of the customer associated with the payment.
   */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** The action to be applied to the payment when the `delay_duration` has elapsed. */
  delayAction?: Maybe<PaymentDelayAction>;
  /**
   * The duration of time after the payment's creation when Square automatically applies the
   * `delayAction` to the payment. This automatic `delayAction` applies only to payments that
   * don't reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delayDuration`
   * time period.
   *
   * This field is specified as a time duration, in RFC 3339 format.
   *
   * Notes:
   * This feature is only supported for card payments.
   *
   * Default:
   *
   *   - Card Present payments: "PT36H" (36 hours) from the creation time.
   *   - Card Not Present payments: "P7D" (7 days) from the creation time.
   */
  delayDuration?: Maybe<Scalars['Duration']['output']>;
  /**
   * The read-only timestamp of when the `delay_action` is automatically applied,
   * in RFC 3339 format.
   *
   * Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
   * fields. The `created_at` field is generated by Square and might not exactly match the
   * time on your local machine.
   */
  delayedUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Details about the device that took the payment. */
  deviceDetails?: Maybe<PaymentDeviceDetails>;
  /** Details about an external payment. The details are only populated if the `sourceType` is `EXTERNAL`. */
  externalDetails?: Maybe<ExternalPaymentDetails>;
  /** Unique ID for the payment. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The ID of the location associated with the payment. */
  locationId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the merchant associated with the payment. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** An optional note to include when creating a payment. */
  note?: Maybe<Scalars['String']['output']>;
  /** The ID of the order associated with the payment. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** The processing fees and fee adjustments assessed by Square for this payment. */
  processingFees: Array<PaymentProcessingFee>;
  /**
   * The payment's receipt number.
   * The field will be missing if a payment is canceled.
   */
  receiptNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The URL for the payment's receipt.
   * The field is only populated for COMPLETED payments.
   */
  receiptUrl?: Maybe<Scalars['Url']['output']>;
  /** An optional ID that associates this payment with an entity in another system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /**
   * The total amount of the payment refunded to date.
   *
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents).
   */
  refundedMoney?: Maybe<Money>;
  /** The refunds for this payment. */
  refunds?: Maybe<PaymentRefundConnection>;
  /**
   * Provides information about the risk associated with this payment, as determined by Square.
   * This field will be present for payments to sellers that have opted in to receive risk
   * evaluations.
   */
  riskEvaluation?: Maybe<PaymentRiskEvaluation>;
  /** The buyer's shipping address. */
  shippingAddress?: Maybe<Address>;
  /**
   * The source type for the payment.
   *
   * For information about these payment source types,
   * see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
   */
  sourceType?: Maybe<PaymentSourceType>;
  /**
   * Additional payment information that gets added on the customer's card statement
   * as part of the statement description.
   *
   * Note that the `statementDescriptionIdentifier` may get truncated on the statement description
   * to fit the required information including the Square identifier (SQ *) and name of the
   * seller taking the payment.
   */
  statementDescriptionIdentifier?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED. */
  status?: Maybe<PaymentStatus>;
  /** An optional ID of the TeamMember associated with taking the payment. */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
  /**
   * The amount designated as a tip.
   *
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  tipMoney?: Maybe<Money>;
  /**
   * The total amount for the payment, including `amountMoney` and `tipMoney`.
   *
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  totalMoney?: Maybe<Money>;
  /** The timestamp of when the payment was last updated, in RFC 3339 format. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Details about an wallet payment. The details are only populated if the `sourceType` is `WALLET`. */
  walletDetails?: Maybe<DigitalWalletPaymentDetails>;
};


/** Permissions:PAYMENTS_READ */
export type PaymentRefundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentRefundFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRefundSortOrder>>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents an application processing fee.
 */
export type PaymentAppProcessingFee = {
  __typename?: 'PaymentAppProcessingFee';
  /** The exact fee amount assessed based on the payment fee rate. */
  amountMoney?: Maybe<Money>;
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The platform account token for this payment fee.
   * For a capture, this is the recipient of funds. For a refund, this is the source of funds.
   */
  partyAccountId?: Maybe<Scalars['ID']['output']>;
  /** The price selector IDs of the payment fee being applied. */
  priceSelectors: Array<Scalars['ID']['output']>;
  /** The type of payment fee being applied (for example, `THIRD_PARTY_PAYMENT_FEE` or `THIRD_PARTY_REFUND_FEE`). */
  type?: Maybe<PaymentAppProcessingFeeType>;
};

/**
 * Input type used to specify filters on a `PaymentAppProcessingFee` object referenced directly
 * or transitively from a list field that has been configured to index each leaf field as
 * its own flattened list of values.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentAppProcessingFeeFieldsListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentAppProcessingFeeFieldsListFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentAppProcessingFeeFieldsListFilterInput>>;
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The exact fee amount assessed based on the payment fee rate.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  amountMoney?: InputMaybe<MoneyFieldsListFilterInput>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentAppProcessingFeeFieldsListFilterInput>>;
  /**
   * Used to filter on the number of non-null elements in this list field.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  count?: InputMaybe<IntFilterInput>;
  /**
   * Used to filter on the `effectiveAt` field:
   *
   * > The timestamp of when the fee takes effect, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  effectiveAt?: InputMaybe<DateTimeListFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentAppProcessingFeeFieldsListFilterInput>;
  /**
   * Used to filter on the `partyAccountId` field:
   *
   * > The platform account token for this payment fee.
   * > For a capture, this is the recipient of funds. For a refund, this is the source of funds.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  partyAccountId?: InputMaybe<IdListFilterInput>;
  /**
   * Used to filter on the `priceSelectors` field:
   *
   * > The price selector IDs of the payment fee being applied.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  priceSelectors?: InputMaybe<IdListFilterInput>;
  /**
   * Used to filter on the `type` field:
   *
   * > The type of payment fee being applied (for example, `THIRD_PARTY_PAYMENT_FEE` or `THIRD_PARTY_REFUND_FEE`).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  type?: InputMaybe<PaymentAppProcessingFeeTypeListFilterInput>;
};

/** The type of payment fee being applied. */
export enum PaymentAppProcessingFeeType {
  ThirdPartyPaymentFee = 'THIRD_PARTY_PAYMENT_FEE',
  ThirdPartyRefundFee = 'THIRD_PARTY_REFUND_FEE'
}

/** The type of payment fee being applied. */
export enum PaymentAppProcessingFeeTypeInput {
  ThirdPartyPaymentFee = 'THIRD_PARTY_PAYMENT_FEE',
  ThirdPartyRefundFee = 'THIRD_PARTY_REFUND_FEE'
}

/**
 * Input type used to specify filters on elements of a `[PaymentAppProcessingFeeType]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentAppProcessingFeeTypeListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentAppProcessingFeeTypeListElementFilterInput`
   * input because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentAppProcessingFeeTypeListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentAppProcessingFeeTypeListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<PaymentAppProcessingFeeTypeInput>>;
};

/**
 * Input type used to specify filters on `[PaymentAppProcessingFeeType]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentAppProcessingFeeTypeListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentAppProcessingFeeTypeListFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentAppProcessingFeeTypeListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentAppProcessingFeeTypeListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<PaymentAppProcessingFeeTypeListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentAppProcessingFeeTypeListFilterInput>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Details about the application that took the payment.
 */
export type PaymentApplicationDetails = {
  __typename?: 'PaymentApplicationDetails';
  /**
   * The Square ID assigned to the application used to take the payment.
   * Application developers can use this information to identify payments that
   * their application processed.
   * For example, if a developer uses a custom application to process payments,
   * this field contains the application ID from the Developer Dashboard.
   * If a seller uses a [Square App Marketplace](https://developer.squareup.com/docs/app-marketplace)
   * application to process payments, the field contains the corresponding application ID.
   */
  applicationId?: Maybe<Scalars['ID']['output']>;
  /** The Square product, such as Square Point of Sale (POS), Square Invoices, or Square Virtual Terminal. */
  squareProduct?: Maybe<PaymentApplicationDetailsExternalSquareProduct>;
};

/** A list of products to return to external callers. */
export enum PaymentApplicationDetailsExternalSquareProduct {
  Appointments = 'APPOINTMENTS',
  EcommerceApi = 'ECOMMERCE_API',
  Invoices = 'INVOICES',
  OnlineStore = 'ONLINE_STORE',
  Other = 'OTHER',
  Restaurants = 'RESTAURANTS',
  Retail = 'RETAIL',
  SquarePos = 'SQUARE_POS',
  TerminalApi = 'TERMINAL_API',
  VirtualTerminal = 'VIRTUAL_TERMINAL'
}

/**
 * Input type used to specify filters on `PaymentApplicationDetailsExternalSquareProduct` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentApplicationDetailsExternalSquareProductFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single
   * `PaymentApplicationDetailsExternalSquareProductFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentApplicationDetailsExternalSquareProductFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentApplicationDetailsExternalSquareProductFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentApplicationDetailsExternalSquareProductInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentApplicationDetailsExternalSquareProductFilterInput>;
};

/** A list of products to return to external callers. */
export enum PaymentApplicationDetailsExternalSquareProductInput {
  Appointments = 'APPOINTMENTS',
  EcommerceApi = 'ECOMMERCE_API',
  Invoices = 'INVOICES',
  OnlineStore = 'ONLINE_STORE',
  Other = 'OTHER',
  Restaurants = 'RESTAURANTS',
  Retail = 'RETAIL',
  SquarePos = 'SQUARE_POS',
  TerminalApi = 'TERMINAL_API',
  VirtualTerminal = 'VIRTUAL_TERMINAL'
}

/**
 * Input type used to specify filters on `PaymentApplicationDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentApplicationDetailsFilterInput = {
  /**
   * Used to filter on the `applicationId` field:
   *
   * > The Square ID assigned to the application used to take the payment.
   * > Application developers can use this information to identify payments that
   * > their application processed.
   * > For example, if a developer uses a custom application to process payments,
   * > this field contains the application ID from the Developer Dashboard.
   * > If a seller uses a [Square App Marketplace](https://developer.squareup.com/docs/app-marketplace)
   * > application to process payments, the field contains the corresponding application ID.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  applicationId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `squareProduct` field:
   *
   * > The Square product, such as Square Point of Sale (POS), Square Invoices, or Square Virtual Terminal.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  squareProduct?: InputMaybe<PaymentApplicationDetailsExternalSquareProductFilterInput>;
};

/** Actions that can be performed on a payment. */
export enum PaymentCapability {
  /** The payment amount can be edited down. */
  EditAmountDown = 'EDIT_AMOUNT_DOWN',
  /** The payment amount can be edited up. */
  EditAmountUp = 'EDIT_AMOUNT_UP',
  /** The delay action can be edited. */
  EditDelayAction = 'EDIT_DELAY_ACTION',
  /** The tip amount can be edited down. */
  EditTipAmountDown = 'EDIT_TIP_AMOUNT_DOWN',
  /** The tip amount can be edited up. */
  EditTipAmountUp = 'EDIT_TIP_AMOUNT_UP'
}

/** Actions that can be performed on a payment. */
export enum PaymentCapabilityInput {
  /** @deprecated Use `EDIT_AMOUNT_UP` and `EDIT_AMOUNT_DOWN` instead. */
  EditAmount = 'EDIT_AMOUNT',
  /** The payment amount can be edited down. */
  EditAmountDown = 'EDIT_AMOUNT_DOWN',
  /** The payment amount can be edited up. */
  EditAmountUp = 'EDIT_AMOUNT_UP',
  /** The delay action can be edited. */
  EditDelayAction = 'EDIT_DELAY_ACTION',
  /** The delay action can be edited via the payment order. */
  EditDelayActionViaPayOrder = 'EDIT_DELAY_ACTION_VIA_PAY_ORDER',
  /** @deprecated Use `EDIT_TIP_AMOUNT_UP` and `EDIT_TIP_AMOUNT_DOWN` instead. */
  EditTipAmount = 'EDIT_TIP_AMOUNT',
  /** The tip amount can be edited down. */
  EditTipAmountDown = 'EDIT_TIP_AMOUNT_DOWN',
  /** The tip amount can be edited up. */
  EditTipAmountUp = 'EDIT_TIP_AMOUNT_UP'
}

/**
 * Input type used to specify filters on elements of a `[PaymentCapability]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentCapabilityListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentCapabilityListElementFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentCapabilityListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentCapabilityListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<PaymentCapabilityInput>>;
};

/**
 * Input type used to specify filters on `[PaymentCapability]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentCapabilityListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentCapabilityListFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentCapabilityListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentCapabilityListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<PaymentCapabilityListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentCapabilityListFilterInput>;
};

/**
 * Represents a paginated collection of `Payment` results.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** Wraps a specific `Payment` to pair it with its pagination cursor. */
  edges: Array<PaymentEdge>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/** The action to be applied to the payment when the `delayDuration` has elapsed. */
export enum PaymentDelayAction {
  Cancel = 'CANCEL',
  Complete = 'COMPLETE'
}

/**
 * Input type used to specify filters on `PaymentDelayAction` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentDelayActionFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentDelayActionFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentDelayActionFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentDelayActionFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentDelayActionInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentDelayActionFilterInput>;
};

/** The action to be applied to the payment when the `delayDuration` has elapsed. */
export enum PaymentDelayActionInput {
  Cancel = 'CANCEL',
  Complete = 'COMPLETE'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Details about the device that took the payment.
 */
export type PaymentDeviceDetails = {
  __typename?: 'PaymentDeviceDetails';
  /** Square-issued ID of the device. */
  deviceId?: Maybe<Scalars['ID']['output']>;
  /** Square-issued installation ID for the device. */
  deviceInstallationId?: Maybe<Scalars['ID']['output']>;
  /** The name of the device set by the seller. */
  deviceName?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `PaymentDeviceDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentDeviceDetailsFilterInput = {
  /**
   * Used to filter on the `deviceId` field:
   *
   * > Square-issued ID of the device.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  deviceId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `deviceInstallationId` field:
   *
   * > Square-issued installation ID for the device.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  deviceInstallationId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `deviceName` field:
   *
   * > The name of the device set by the seller.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  deviceName?: InputMaybe<StringFilterInput>;
};

/**
 * Represents a specific `Payment` in the context of a `PaymentConnection`,
 * providing access to both the `Payment` and a pagination `Cursor`.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /**
   * The `Cursor` of this `Payment`. This can be passed in the next query as
   * a `before` or `after` argument to continue paginating from this `Payment`.
   */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Payment` of this edge. */
  node?: Maybe<Payment>;
};

/**
 * Input type used to specify filters on `Payment` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentFilter = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The amount processed for this payment, not including `tipMoney`.
   * >
   * > The amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  amountMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `appFeeMoney` field:
   *
   * > The amount the developer is taking as a fee for facilitating the payment on behalf
   * > of the seller. This amount is specified in the smallest denomination of the applicable currency
   * > (for example, US dollar amounts are specified in cents). For more information,
   * > see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
   * >
   * > The amount cannot be more than 90% of the `total_money` value.
   * >
   * > To set this field, `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required.
   * > For more information, see [Permissions](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees#permissions).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  appFeeMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `applicationDetails` field:
   *
   * > Details about the application that took the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  applicationDetails?: InputMaybe<PaymentApplicationDetailsFilterInput>;
  /**
   * Used to filter on the `approvedMoney` field:
   *
   * > The initial amount of money approved for this payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  approvedMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `bankAccountDetails` field:
   *
   * > Details about a bank account payment. These details are only populated if the `sourceType` is `BANK_ACCOUNT`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  bankAccountDetails?: InputMaybe<BankAccountPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `billingAddress` field:
   *
   * > The buyer's billing address.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  billingAddress?: InputMaybe<AddressFilterInput>;
  /**
   * Used to filter on the `buyNowPayLaterDetails` field:
   *
   * > Details about a Buy Now Pay Later payment. The details are only populated
   * > if the `source_type` is `BUY_NOW_PAY_LATER`. For more information, see
   * > [Afterpay Payments](https://developer.squareup.com/docs/payments-api/take-payments/afterpay-payments).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  buyNowPayLaterDetails?: InputMaybe<BuyNowPayLaterPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `buyerEmailAddress` field:
   *
   * > The buyer's email address.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  buyerEmailAddress?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `capabilities` field:
   *
   * > Actions that can be performed on this payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  capabilities?: InputMaybe<PaymentCapabilityListFilterInput>;
  /**
   * Used to filter on the `cardDetails` field:
   *
   * > Details about a card payment. These details are only populated if the `sourceType` is CARD.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  cardDetails?: InputMaybe<CardPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `cashDetails` field:
   *
   * > Details about a cash payment. These details are only populated if the `sourceType` is `CASH`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  cashDetails?: InputMaybe<CashPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp of when the payment was created, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  createdAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `customerId` field:
   *
   * > The [Customer](https://developer.squareup.com/reference/square/payments-api/list-payments#type-customer)
   * > ID of the customer associated with the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  customerId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `delayAction` field:
   *
   * > The action to be applied to the payment when the `delay_duration` has elapsed.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  delayAction?: InputMaybe<PaymentDelayActionFilterInput>;
  /**
   * Used to filter on the `delayDuration` field:
   *
   * > The duration of time after the payment's creation when Square automatically applies the
   * > `delayAction` to the payment. This automatic `delayAction` applies only to payments that
   * > don't reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delayDuration`
   * > time period.
   * >
   * > This field is specified as a time duration, in RFC 3339 format.
   * >
   * > Notes:
   * > This feature is only supported for card payments.
   * >
   * > Default:
   * >
   * >   - Card Present payments: "PT36H" (36 hours) from the creation time.
   * >   - Card Not Present payments: "P7D" (7 days) from the creation time.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  delayDuration?: InputMaybe<DurationFilterInput>;
  /**
   * Used to filter on the `delayedUntil` field:
   *
   * > The read-only timestamp of when the `delay_action` is automatically applied,
   * > in RFC 3339 format.
   * >
   * > Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
   * > fields. The `created_at` field is generated by Square and might not exactly match the
   * > time on your local machine.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  delayedUntil?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `deviceDetails` field:
   *
   * > Details about the device that took the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  deviceDetails?: InputMaybe<PaymentDeviceDetailsFilterInput>;
  /**
   * Used to filter on the `externalDetails` field:
   *
   * > Details about an external payment. The details are only populated if the `sourceType` is `EXTERNAL`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  externalDetails?: InputMaybe<ExternalPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `id` field:
   *
   * > Unique ID for the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  id?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `locationId` field:
   *
   * > The ID of the location associated with the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  locationId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `merchantId` field:
   *
   * > The ID of the merchant associated with the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  merchantId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `note` field:
   *
   * > An optional note to include when creating a payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  note?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `orderId` field:
   *
   * > The ID of the order associated with the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  orderId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `processingFees` field:
   *
   * > The processing fees and fee adjustments assessed by Square for this payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  processingFees?: InputMaybe<PaymentProcessingFeeFieldsListFilterInput>;
  /**
   * Used to filter on the `receiptNumber` field:
   *
   * > The payment's receipt number.
   * > The field will be missing if a payment is canceled.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  receiptNumber?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `receiptUrl` field:
   *
   * > The URL for the payment's receipt.
   * > The field is only populated for COMPLETED payments.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  receiptUrl?: InputMaybe<UrlFilterInput>;
  /**
   * Used to filter on the `referenceId` field:
   *
   * > An optional ID that associates this payment with an entity in another system.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  referenceId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `refundedMoney` field:
   *
   * > The total amount of the payment refunded to date.
   * >
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  refundedMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `riskEvaluation` field:
   *
   * > Provides information about the risk associated with this payment, as determined by Square.
   * > This field will be present for payments to sellers that have opted in to receive risk
   * > evaluations.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  riskEvaluation?: InputMaybe<PaymentRiskEvaluationFilterInput>;
  /**
   * Used to filter on the `shippingAddress` field:
   *
   * > The buyer's shipping address.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  shippingAddress?: InputMaybe<AddressFilterInput>;
  /**
   * Used to filter on the `sourceType` field:
   *
   * > The source type for the payment.
   * >
   * > For information about these payment source types,
   * > see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  sourceType?: InputMaybe<PaymentSourceTypeFilterInput>;
  /**
   * Used to filter on the `statementDescriptionIdentifier` field:
   *
   * > Additional payment information that gets added on the customer's card statement
   * > as part of the statement description.
   * >
   * > Note that the `statementDescriptionIdentifier` may get truncated on the statement description
   * > to fit the required information including the Square identifier (SQ *) and name of the
   * > seller taking the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  statementDescriptionIdentifier?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `status` field:
   *
   * > Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  status?: InputMaybe<PaymentStatusFilter>;
  /**
   * Used to filter on the `teamMemberId` field:
   *
   * > An optional ID of the TeamMember associated with taking the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  teamMemberId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `tipMoney` field:
   *
   * > The amount designated as a tip.
   * >
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  tipMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `totalMoney` field:
   *
   * > The total amount for the payment, including `amountMoney` and `tipMoney`.
   * >
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  totalMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `updatedAt` field:
   *
   * > The timestamp of when the payment was last updated, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  updatedAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `walletDetails` field:
   *
   * > Details about an wallet payment. The details are only populated if the `sourceType` is `WALLET`.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  walletDetails?: InputMaybe<DigitalWalletPaymentDetailsFilterInput>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents the Square processing fee.
 */
export type PaymentProcessingFee = {
  __typename?: 'PaymentProcessingFee';
  /**
   * The fee amount, which might be negative, that is assessed or adjusted by Square.
   *
   * Positive values represent funds being assessed, while negative values represent funds being returned.
   */
  amountMoney?: Maybe<Money>;
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: Maybe<Scalars['String']['output']>;
  /** The type of fee assessed or adjusted. */
  type?: Maybe<PaymentProcessingFeeType>;
};

/**
 * Input type used to specify filters on a `PaymentProcessingFee` object referenced directly
 * or transitively from a list field that has been configured to index each leaf field as
 * its own flattened list of values.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentProcessingFeeFieldsListFilterInput = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The fee amount, which might be negative, that is assessed or adjusted by Square.
   * >
   * > Positive values represent funds being assessed, while negative values represent funds being returned.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  amountMoney?: InputMaybe<MoneyFieldsListFilterInput>;
  /**
   * Used to filter on the `effectiveAt` field:
   *
   * > The timestamp of when the fee takes effect, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  effectiveAt?: InputMaybe<StringListFilterInput>;
  /**
   * Used to filter on the `type` field:
   *
   * > The type of fee assessed or adjusted.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  type?: InputMaybe<PaymentProcessingFeeTypeListFilterInput>;
};

/** The type of fee assessed or adjusted. */
export enum PaymentProcessingFeeType {
  /** Type used for an adjustment to the initial processing fee. */
  Adjustment = 'ADJUSTMENT',
  /** Type used on the initial processing fee. */
  Initial = 'INITIAL'
}

/** The type of fee assessed or adjusted. */
export enum PaymentProcessingFeeTypeInput {
  /** Type used for an adjustment to the initial processing fee. */
  Adjustment = 'ADJUSTMENT',
  /** Type used on the initial processing fee. */
  Initial = 'INITIAL'
}

/**
 * Input type used to specify filters on elements of a `[PaymentProcessingFeeType]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentProcessingFeeTypeListElementFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentProcessingFeeTypeListElementFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentProcessingFeeTypeListElementFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentProcessingFeeTypeListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<PaymentProcessingFeeTypeInput>>;
};

/**
 * Input type used to specify filters on `[PaymentProcessingFeeType]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentProcessingFeeTypeListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentProcessingFeeTypeListFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentProcessingFeeTypeListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentProcessingFeeTypeListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<PaymentProcessingFeeTypeListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentProcessingFeeTypeListFilterInput>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents a refund of a payment made using Square. Contains information about
 * the original payment and the amount of money refunded.
 *
 *
 * For more performant queries on this type, please filter on `merchantId` if possible.
 */
export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  /**
   * The amount of money refunded. This amount is specified in the smallest denomination
   * of the applicable currency (for example, US dollar amounts are specified in cents).
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount of money the application developer contributed to help cover the refunded amount.
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  appFeeMoney?: Maybe<Money>;
  /** The timestamp of when the refund was created, in RFC 3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /** The unique ID for this refund, generated by Square. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The location ID associated with the payment this refund is attached to. */
  locationId?: Maybe<Scalars['ID']['output']>;
  /** The merchant ID associated with the payment this refund is attached to. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the order associated with the refund. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** The payment this refund belongs to. */
  payment?: Maybe<Payment>;
  /** The ID of the payment associated with this refund. */
  paymentId?: Maybe<Scalars['ID']['output']>;
  /** Processing fees and fee adjustments assessed by Square for this refund. */
  processingFees: Array<PaymentProcessingFee>;
  /** The reason for the refund. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The refund's status. */
  status?: Maybe<PaymentRefundStatus>;
  /** An optional ID of the team member associated with taking the payment. */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
  /** The timestamp of when the refund was last updated, in RFC 3339 format. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Represents a paginated collection of `PaymentRefund` results.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentRefundConnection = {
  __typename?: 'PaymentRefundConnection';
  /** Wraps a specific `PaymentRefund` to pair it with its pagination cursor. */
  edges: Array<PaymentRefundEdge>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a specific `PaymentRefund` in the context of a `PaymentRefundConnection`,
 * providing access to both the `PaymentRefund` and a pagination `Cursor`.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentRefundEdge = {
  __typename?: 'PaymentRefundEdge';
  /**
   * The `Cursor` of this `PaymentRefund`. This can be passed in the next query as
   * a `before` or `after` argument to continue paginating from this `PaymentRefund`.
   */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PaymentRefund` of this edge. */
  node?: Maybe<PaymentRefund>;
};

/**
 * Input type used to specify filters on `PaymentRefund` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentRefundFilter = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The amount of money refunded. This amount is specified in the smallest denomination
   * > of the applicable currency (for example, US dollar amounts are specified in cents).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  amountMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `appFeeMoney` field:
   *
   * > The amount of money the application developer contributed to help cover the refunded amount.
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  appFeeMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp of when the refund was created, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  createdAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `errors` field:
   *
   * > Information about errors encountered during the request.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  errors?: InputMaybe<ErrorFieldsListFilterInput>;
  /**
   * Used to filter on the `id` field:
   *
   * > The unique ID for this refund, generated by Square.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  id?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `locationId` field:
   *
   * > The location ID associated with the payment this refund is attached to.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  locationId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `merchantId` field:
   *
   * > The merchant ID associated with the payment this refund is attached to.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  merchantId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `orderId` field:
   *
   * > The ID of the order associated with the refund.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  orderId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `paymentId` field:
   *
   * > The ID of the payment associated with this refund.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  paymentId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `processingFees` field:
   *
   * > Processing fees and fee adjustments assessed by Square for this refund.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  processingFees?: InputMaybe<PaymentProcessingFeeFieldsListFilterInput>;
  /**
   * Used to filter on the `reason` field:
   *
   * > The reason for the refund.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  reason?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `status` field:
   *
   * > The refund's status.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  status?: InputMaybe<PaymentRefundStatusFilter>;
  /**
   * Used to filter on the `teamMemberId` field:
   *
   * > An optional ID of the team member associated with taking the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  teamMemberId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `updatedAt` field:
   *
   * > The timestamp of when the refund was last updated, in RFC 3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Enumerates the ways `PaymentRefund`s can be sorted. */
export enum PaymentRefundSortOrder {
  /** Sorts ascending by the `amountMoney.amount` field. */
  AmountMoneyAmountAsc = 'amountMoney_amount_ASC',
  /** Sorts descending by the `amountMoney.amount` field. */
  AmountMoneyAmountDesc = 'amountMoney_amount_DESC',
  /** Sorts ascending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyAsc = 'amountMoney_currency_ASC',
  /** Sorts descending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyDesc = 'amountMoney_currency_DESC',
  /** Sorts ascending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountAsc = 'appFeeMoney_amount_ASC',
  /** Sorts descending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountDesc = 'appFeeMoney_amount_DESC',
  /** Sorts ascending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyAsc = 'appFeeMoney_currency_ASC',
  /** Sorts descending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyDesc = 'appFeeMoney_currency_DESC',
  /** Sorts ascending by the `createdAt` field. */
  CreatedAtAsc = 'createdAt_ASC',
  /** Sorts descending by the `createdAt` field. */
  CreatedAtDesc = 'createdAt_DESC',
  /** Sorts ascending by the `id` field. */
  IdAsc = 'id_ASC',
  /** Sorts descending by the `id` field. */
  IdDesc = 'id_DESC',
  /** Sorts ascending by the `locationId` field. */
  LocationIdAsc = 'locationId_ASC',
  /** Sorts descending by the `locationId` field. */
  LocationIdDesc = 'locationId_DESC',
  /** Sorts ascending by the `merchantId` field. */
  MerchantIdAsc = 'merchantId_ASC',
  /** Sorts descending by the `merchantId` field. */
  MerchantIdDesc = 'merchantId_DESC',
  /** Sorts ascending by the `orderId` field. */
  OrderIdAsc = 'orderId_ASC',
  /** Sorts descending by the `orderId` field. */
  OrderIdDesc = 'orderId_DESC',
  /** Sorts ascending by the `paymentId` field. */
  PaymentIdAsc = 'paymentId_ASC',
  /** Sorts descending by the `paymentId` field. */
  PaymentIdDesc = 'paymentId_DESC',
  /** Sorts ascending by the `reason` field. */
  ReasonAsc = 'reason_ASC',
  /** Sorts descending by the `reason` field. */
  ReasonDesc = 'reason_DESC',
  /** Sorts ascending by the `status` field. */
  StatusAsc = 'status_ASC',
  /** Sorts descending by the `status` field. */
  StatusDesc = 'status_DESC',
  /** Sorts ascending by the `teamMemberId` field. */
  TeamMemberIdAsc = 'teamMemberId_ASC',
  /** Sorts descending by the `teamMemberId` field. */
  TeamMemberIdDesc = 'teamMemberId_DESC',
  /** Sorts ascending by the `updatedAt` field. */
  UpdatedAtAsc = 'updatedAt_ASC',
  /** Sorts descending by the `updatedAt` field. */
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Indicates the current status of a `PaymentRefund` object. */
export enum PaymentRefundStatus {
  /** Successfully completed. */
  Completed = 'COMPLETED',
  /** An error occurred. */
  Failed = 'FAILED',
  /** Awaiting approval. */
  Pending = 'PENDING',
  /** The refund was rejected. */
  Rejected = 'REJECTED'
}

/**
 * Input type used to specify filters on `PaymentRefundStatus` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentRefundStatusFilter = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentRefundStatusFilter` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentRefundStatusFilter>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentRefundStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentRefundStatus>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentRefundStatusFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents fraud risk information for the associated payment.
 *
 * When you take a payment through Square's Payments API (using the `CreatePayment`
 * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
 * can use this information to determine the course of action (for example,
 * provide the goods/services or refund the payment).
 */
export type PaymentRiskEvaluation = {
  __typename?: 'PaymentRiskEvaluation';
  /** The timestamp when payment risk was evaluated, in RFC3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The risk level associated with the payment. */
  riskLevel?: Maybe<PaymentRiskEvaluationRiskLevel>;
};

/**
 * Input type used to specify filters on `PaymentRiskEvaluation` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentRiskEvaluationFilterInput = {
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp when payment risk was evaluated, in RFC3339 format.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  createdAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `riskLevel` field:
   *
   * > The risk level associated with the payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  riskLevel?: InputMaybe<PaymentRiskEvaluationRiskLevelFilterInput>;
};

/** Represents a risk level produced by evaluating a payment. */
export enum PaymentRiskEvaluationRiskLevel {
  /** Indicates significantly elevated risk level with the payment. */
  High = 'HIGH',
  /** Indicates elevated risk level associated with the payment. */
  Moderate = 'MODERATE',
  /** Indicates payment risk is within the normal range. */
  Normal = 'NORMAL',
  /** Indicates Square is still evaluating the payment. */
  Pending = 'PENDING'
}

/**
 * Input type used to specify filters on `PaymentRiskEvaluationRiskLevel` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentRiskEvaluationRiskLevelFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentRiskEvaluationRiskLevelFilterInput` input
   * because of collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentRiskEvaluationRiskLevelFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentRiskEvaluationRiskLevelFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentRiskEvaluationRiskLevelInput>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentRiskEvaluationRiskLevelFilterInput>;
};

/** Represents a risk level produced by evaluating a payment. */
export enum PaymentRiskEvaluationRiskLevelInput {
  /** Indicates significantly elevated risk level with the payment. */
  High = 'HIGH',
  /** Indicates elevated risk level associated with the payment. */
  Moderate = 'MODERATE',
  /** Indicates payment risk is within the normal range. */
  Normal = 'NORMAL',
  /** Indicates Square is still evaluating the payment. */
  Pending = 'PENDING'
}

/** Enumerates the ways `Payment`s can be sorted. */
export enum PaymentSortOrder {
  /** Sorts ascending by the `amountMoney.amount` field. */
  AmountMoneyAmountAsc = 'amountMoney_amount_ASC',
  /** Sorts descending by the `amountMoney.amount` field. */
  AmountMoneyAmountDesc = 'amountMoney_amount_DESC',
  /** Sorts ascending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyAsc = 'amountMoney_currency_ASC',
  /** Sorts descending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyDesc = 'amountMoney_currency_DESC',
  /** Sorts ascending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountAsc = 'appFeeMoney_amount_ASC',
  /** Sorts descending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountDesc = 'appFeeMoney_amount_DESC',
  /** Sorts ascending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyAsc = 'appFeeMoney_currency_ASC',
  /** Sorts descending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyDesc = 'appFeeMoney_currency_DESC',
  /** Sorts ascending by the `applicationDetails.applicationId` field. */
  ApplicationDetailsApplicationIdAsc = 'applicationDetails_applicationId_ASC',
  /** Sorts descending by the `applicationDetails.applicationId` field. */
  ApplicationDetailsApplicationIdDesc = 'applicationDetails_applicationId_DESC',
  /** Sorts ascending by the `applicationDetails.squareProduct` field. */
  ApplicationDetailsSquareProductAsc = 'applicationDetails_squareProduct_ASC',
  /** Sorts descending by the `applicationDetails.squareProduct` field. */
  ApplicationDetailsSquareProductDesc = 'applicationDetails_squareProduct_DESC',
  /** Sorts ascending by the `approvedMoney.amount` field. */
  ApprovedMoneyAmountAsc = 'approvedMoney_amount_ASC',
  /** Sorts descending by the `approvedMoney.amount` field. */
  ApprovedMoneyAmountDesc = 'approvedMoney_amount_DESC',
  /** Sorts ascending by the `approvedMoney.currency` field. */
  ApprovedMoneyCurrencyAsc = 'approvedMoney_currency_ASC',
  /** Sorts descending by the `approvedMoney.currency` field. */
  ApprovedMoneyCurrencyDesc = 'approvedMoney_currency_DESC',
  /** Sorts ascending by the `bankAccountDetails.accountOwnershipType` field. */
  BankAccountDetailsAccountOwnershipTypeAsc = 'bankAccountDetails_accountOwnershipType_ASC',
  /** Sorts descending by the `bankAccountDetails.accountOwnershipType` field. */
  BankAccountDetailsAccountOwnershipTypeDesc = 'bankAccountDetails_accountOwnershipType_DESC',
  /** Sorts ascending by the `bankAccountDetails.bankName` field. */
  BankAccountDetailsBankNameAsc = 'bankAccountDetails_bankName_ASC',
  /** Sorts descending by the `bankAccountDetails.bankName` field. */
  BankAccountDetailsBankNameDesc = 'bankAccountDetails_bankName_DESC',
  /** Sorts ascending by the `bankAccountDetails.country` field. */
  BankAccountDetailsCountryAsc = 'bankAccountDetails_country_ASC',
  /** Sorts descending by the `bankAccountDetails.country` field. */
  BankAccountDetailsCountryDesc = 'bankAccountDetails_country_DESC',
  /** Sorts ascending by the `bankAccountDetails.fingerprint` field. */
  BankAccountDetailsFingerprintAsc = 'bankAccountDetails_fingerprint_ASC',
  /** Sorts descending by the `bankAccountDetails.fingerprint` field. */
  BankAccountDetailsFingerprintDesc = 'bankAccountDetails_fingerprint_DESC',
  /** Sorts ascending by the `bankAccountDetails.statementDescription` field. */
  BankAccountDetailsStatementDescriptionAsc = 'bankAccountDetails_statementDescription_ASC',
  /** Sorts descending by the `bankAccountDetails.statementDescription` field. */
  BankAccountDetailsStatementDescriptionDesc = 'bankAccountDetails_statementDescription_DESC',
  /** Sorts ascending by the `bankAccountDetails.transferType` field. */
  BankAccountDetailsTransferTypeAsc = 'bankAccountDetails_transferType_ASC',
  /** Sorts descending by the `bankAccountDetails.transferType` field. */
  BankAccountDetailsTransferTypeDesc = 'bankAccountDetails_transferType_DESC',
  /** Sorts ascending by the `buyNowPayLaterDetails.afterpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsAfterpayDetailsEmailAddressAsc = 'buyNowPayLaterDetails_afterpayDetails_emailAddress_ASC',
  /** Sorts descending by the `buyNowPayLaterDetails.afterpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsAfterpayDetailsEmailAddressDesc = 'buyNowPayLaterDetails_afterpayDetails_emailAddress_DESC',
  /** Sorts ascending by the `buyNowPayLaterDetails.brand` field. */
  BuyNowPayLaterDetailsBrandAsc = 'buyNowPayLaterDetails_brand_ASC',
  /** Sorts descending by the `buyNowPayLaterDetails.brand` field. */
  BuyNowPayLaterDetailsBrandDesc = 'buyNowPayLaterDetails_brand_DESC',
  /** Sorts ascending by the `buyNowPayLaterDetails.clearpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsClearpayDetailsEmailAddressAsc = 'buyNowPayLaterDetails_clearpayDetails_emailAddress_ASC',
  /** Sorts descending by the `buyNowPayLaterDetails.clearpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsClearpayDetailsEmailAddressDesc = 'buyNowPayLaterDetails_clearpayDetails_emailAddress_DESC',
  /** Sorts ascending by the `buyerEmailAddress` field. */
  BuyerEmailAddressAsc = 'buyerEmailAddress_ASC',
  /** Sorts descending by the `buyerEmailAddress` field. */
  BuyerEmailAddressDesc = 'buyerEmailAddress_DESC',
  /** Sorts ascending by the `cardDetails.applicationCryptogram` field. */
  CardDetailsApplicationCryptogramAsc = 'cardDetails_applicationCryptogram_ASC',
  /** Sorts descending by the `cardDetails.applicationCryptogram` field. */
  CardDetailsApplicationCryptogramDesc = 'cardDetails_applicationCryptogram_DESC',
  /** Sorts ascending by the `cardDetails.applicationIdentifier` field. */
  CardDetailsApplicationIdentifierAsc = 'cardDetails_applicationIdentifier_ASC',
  /** Sorts descending by the `cardDetails.applicationIdentifier` field. */
  CardDetailsApplicationIdentifierDesc = 'cardDetails_applicationIdentifier_DESC',
  /** Sorts ascending by the `cardDetails.applicationName` field. */
  CardDetailsApplicationNameAsc = 'cardDetails_applicationName_ASC',
  /** Sorts descending by the `cardDetails.applicationName` field. */
  CardDetailsApplicationNameDesc = 'cardDetails_applicationName_DESC',
  /** Sorts ascending by the `cardDetails.authResultCode` field. */
  CardDetailsAuthResultCodeAsc = 'cardDetails_authResultCode_ASC',
  /** Sorts descending by the `cardDetails.authResultCode` field. */
  CardDetailsAuthResultCodeDesc = 'cardDetails_authResultCode_DESC',
  /** Sorts ascending by the `cardDetails.avsStatus` field. */
  CardDetailsAvsStatusAsc = 'cardDetails_avsStatus_ASC',
  /** Sorts descending by the `cardDetails.avsStatus` field. */
  CardDetailsAvsStatusDesc = 'cardDetails_avsStatus_DESC',
  /** Sorts ascending by the `cardDetails.cardPaymentTimeline.authorizedAt` field. */
  CardDetailsCardPaymentTimelineAuthorizedAtAsc = 'cardDetails_cardPaymentTimeline_authorizedAt_ASC',
  /** Sorts descending by the `cardDetails.cardPaymentTimeline.authorizedAt` field. */
  CardDetailsCardPaymentTimelineAuthorizedAtDesc = 'cardDetails_cardPaymentTimeline_authorizedAt_DESC',
  /** Sorts ascending by the `cardDetails.cardPaymentTimeline.capturedAt` field. */
  CardDetailsCardPaymentTimelineCapturedAtAsc = 'cardDetails_cardPaymentTimeline_capturedAt_ASC',
  /** Sorts descending by the `cardDetails.cardPaymentTimeline.capturedAt` field. */
  CardDetailsCardPaymentTimelineCapturedAtDesc = 'cardDetails_cardPaymentTimeline_capturedAt_DESC',
  /** Sorts ascending by the `cardDetails.cardPaymentTimeline.voidedAt` field. */
  CardDetailsCardPaymentTimelineVoidedAtAsc = 'cardDetails_cardPaymentTimeline_voidedAt_ASC',
  /** Sorts descending by the `cardDetails.cardPaymentTimeline.voidedAt` field. */
  CardDetailsCardPaymentTimelineVoidedAtDesc = 'cardDetails_cardPaymentTimeline_voidedAt_DESC',
  /** Sorts ascending by the `cardDetails.card.bin` field. */
  CardDetailsCardBinAsc = 'cardDetails_card_bin_ASC',
  /** Sorts descending by the `cardDetails.card.bin` field. */
  CardDetailsCardBinDesc = 'cardDetails_card_bin_DESC',
  /** Sorts ascending by the `cardDetails.card.cardBrand` field. */
  CardDetailsCardCardBrandAsc = 'cardDetails_card_cardBrand_ASC',
  /** Sorts descending by the `cardDetails.card.cardBrand` field. */
  CardDetailsCardCardBrandDesc = 'cardDetails_card_cardBrand_DESC',
  /** Sorts ascending by the `cardDetails.card.cardCoBrand` field. */
  CardDetailsCardCardCoBrandAsc = 'cardDetails_card_cardCoBrand_ASC',
  /** Sorts descending by the `cardDetails.card.cardCoBrand` field. */
  CardDetailsCardCardCoBrandDesc = 'cardDetails_card_cardCoBrand_DESC',
  /** Sorts ascending by the `cardDetails.card.cardType` field. */
  CardDetailsCardCardTypeAsc = 'cardDetails_card_cardType_ASC',
  /** Sorts descending by the `cardDetails.card.cardType` field. */
  CardDetailsCardCardTypeDesc = 'cardDetails_card_cardType_DESC',
  /** Sorts ascending by the `cardDetails.card.cardholderName` field. */
  CardDetailsCardCardholderNameAsc = 'cardDetails_card_cardholderName_ASC',
  /** Sorts descending by the `cardDetails.card.cardholderName` field. */
  CardDetailsCardCardholderNameDesc = 'cardDetails_card_cardholderName_DESC',
  /** Sorts ascending by the `cardDetails.card.expMonth` field. */
  CardDetailsCardExpMonthAsc = 'cardDetails_card_expMonth_ASC',
  /** Sorts descending by the `cardDetails.card.expMonth` field. */
  CardDetailsCardExpMonthDesc = 'cardDetails_card_expMonth_DESC',
  /** Sorts ascending by the `cardDetails.card.expYear` field. */
  CardDetailsCardExpYearAsc = 'cardDetails_card_expYear_ASC',
  /** Sorts descending by the `cardDetails.card.expYear` field. */
  CardDetailsCardExpYearDesc = 'cardDetails_card_expYear_DESC',
  /** Sorts ascending by the `cardDetails.card.fingerprint` field. */
  CardDetailsCardFingerprintAsc = 'cardDetails_card_fingerprint_ASC',
  /** Sorts descending by the `cardDetails.card.fingerprint` field. */
  CardDetailsCardFingerprintDesc = 'cardDetails_card_fingerprint_DESC',
  /** Sorts ascending by the `cardDetails.card.last4` field. */
  CardDetailsCardLast4Asc = 'cardDetails_card_last4_ASC',
  /** Sorts descending by the `cardDetails.card.last4` field. */
  CardDetailsCardLast4Desc = 'cardDetails_card_last4_DESC',
  /** Sorts ascending by the `cardDetails.card.prepaidType` field. */
  CardDetailsCardPrepaidTypeAsc = 'cardDetails_card_prepaidType_ASC',
  /** Sorts descending by the `cardDetails.card.prepaidType` field. */
  CardDetailsCardPrepaidTypeDesc = 'cardDetails_card_prepaidType_DESC',
  /** Sorts ascending by the `cardDetails.cvvStatus` field. */
  CardDetailsCvvStatusAsc = 'cardDetails_cvvStatus_ASC',
  /** Sorts descending by the `cardDetails.cvvStatus` field. */
  CardDetailsCvvStatusDesc = 'cardDetails_cvvStatus_DESC',
  /** Sorts ascending by the `cardDetails.entryMethod` field. */
  CardDetailsEntryMethodAsc = 'cardDetails_entryMethod_ASC',
  /** Sorts descending by the `cardDetails.entryMethod` field. */
  CardDetailsEntryMethodDesc = 'cardDetails_entryMethod_DESC',
  /** Sorts ascending by the `cardDetails.statementDescription` field. */
  CardDetailsStatementDescriptionAsc = 'cardDetails_statementDescription_ASC',
  /** Sorts descending by the `cardDetails.statementDescription` field. */
  CardDetailsStatementDescriptionDesc = 'cardDetails_statementDescription_DESC',
  /** Sorts ascending by the `cardDetails.status` field. */
  CardDetailsStatusAsc = 'cardDetails_status_ASC',
  /** Sorts descending by the `cardDetails.status` field. */
  CardDetailsStatusDesc = 'cardDetails_status_DESC',
  /** Sorts ascending by the `cardDetails.verificationMethod` field. */
  CardDetailsVerificationMethodAsc = 'cardDetails_verificationMethod_ASC',
  /** Sorts descending by the `cardDetails.verificationMethod` field. */
  CardDetailsVerificationMethodDesc = 'cardDetails_verificationMethod_DESC',
  /** Sorts ascending by the `cardDetails.verificationResults` field. */
  CardDetailsVerificationResultsAsc = 'cardDetails_verificationResults_ASC',
  /** Sorts descending by the `cardDetails.verificationResults` field. */
  CardDetailsVerificationResultsDesc = 'cardDetails_verificationResults_DESC',
  /** Sorts ascending by the `cashDetails.buyerSuppliedMoney.amount` field. */
  CashDetailsBuyerSuppliedMoneyAmountAsc = 'cashDetails_buyerSuppliedMoney_amount_ASC',
  /** Sorts descending by the `cashDetails.buyerSuppliedMoney.amount` field. */
  CashDetailsBuyerSuppliedMoneyAmountDesc = 'cashDetails_buyerSuppliedMoney_amount_DESC',
  /** Sorts ascending by the `cashDetails.buyerSuppliedMoney.currency` field. */
  CashDetailsBuyerSuppliedMoneyCurrencyAsc = 'cashDetails_buyerSuppliedMoney_currency_ASC',
  /** Sorts descending by the `cashDetails.buyerSuppliedMoney.currency` field. */
  CashDetailsBuyerSuppliedMoneyCurrencyDesc = 'cashDetails_buyerSuppliedMoney_currency_DESC',
  /** Sorts ascending by the `cashDetails.changeBackMoney.amount` field. */
  CashDetailsChangeBackMoneyAmountAsc = 'cashDetails_changeBackMoney_amount_ASC',
  /** Sorts descending by the `cashDetails.changeBackMoney.amount` field. */
  CashDetailsChangeBackMoneyAmountDesc = 'cashDetails_changeBackMoney_amount_DESC',
  /** Sorts ascending by the `cashDetails.changeBackMoney.currency` field. */
  CashDetailsChangeBackMoneyCurrencyAsc = 'cashDetails_changeBackMoney_currency_ASC',
  /** Sorts descending by the `cashDetails.changeBackMoney.currency` field. */
  CashDetailsChangeBackMoneyCurrencyDesc = 'cashDetails_changeBackMoney_currency_DESC',
  /** Sorts ascending by the `createdAt` field. */
  CreatedAtAsc = 'createdAt_ASC',
  /** Sorts descending by the `createdAt` field. */
  CreatedAtDesc = 'createdAt_DESC',
  /** Sorts ascending by the `customerId` field. */
  CustomerIdAsc = 'customerId_ASC',
  /** Sorts descending by the `customerId` field. */
  CustomerIdDesc = 'customerId_DESC',
  /** Sorts ascending by the `delayAction` field. */
  DelayActionAsc = 'delayAction_ASC',
  /** Sorts descending by the `delayAction` field. */
  DelayActionDesc = 'delayAction_DESC',
  /** Sorts ascending by the `delayDuration` field. */
  DelayDurationAsc = 'delayDuration_ASC',
  /** Sorts descending by the `delayDuration` field. */
  DelayDurationDesc = 'delayDuration_DESC',
  /** Sorts ascending by the `delayedUntil` field. */
  DelayedUntilAsc = 'delayedUntil_ASC',
  /** Sorts descending by the `delayedUntil` field. */
  DelayedUntilDesc = 'delayedUntil_DESC',
  /** Sorts ascending by the `deviceDetails.deviceId` field. */
  DeviceDetailsDeviceIdAsc = 'deviceDetails_deviceId_ASC',
  /** Sorts descending by the `deviceDetails.deviceId` field. */
  DeviceDetailsDeviceIdDesc = 'deviceDetails_deviceId_DESC',
  /** Sorts ascending by the `deviceDetails.deviceInstallationId` field. */
  DeviceDetailsDeviceInstallationIdAsc = 'deviceDetails_deviceInstallationId_ASC',
  /** Sorts descending by the `deviceDetails.deviceInstallationId` field. */
  DeviceDetailsDeviceInstallationIdDesc = 'deviceDetails_deviceInstallationId_DESC',
  /** Sorts ascending by the `deviceDetails.deviceName` field. */
  DeviceDetailsDeviceNameAsc = 'deviceDetails_deviceName_ASC',
  /** Sorts descending by the `deviceDetails.deviceName` field. */
  DeviceDetailsDeviceNameDesc = 'deviceDetails_deviceName_DESC',
  /** Sorts ascending by the `externalDetails.sourceFeeMoney.amount` field. */
  ExternalDetailsSourceFeeMoneyAmountAsc = 'externalDetails_sourceFeeMoney_amount_ASC',
  /** Sorts descending by the `externalDetails.sourceFeeMoney.amount` field. */
  ExternalDetailsSourceFeeMoneyAmountDesc = 'externalDetails_sourceFeeMoney_amount_DESC',
  /** Sorts ascending by the `externalDetails.sourceFeeMoney.currency` field. */
  ExternalDetailsSourceFeeMoneyCurrencyAsc = 'externalDetails_sourceFeeMoney_currency_ASC',
  /** Sorts descending by the `externalDetails.sourceFeeMoney.currency` field. */
  ExternalDetailsSourceFeeMoneyCurrencyDesc = 'externalDetails_sourceFeeMoney_currency_DESC',
  /** Sorts ascending by the `externalDetails.sourceId` field. */
  ExternalDetailsSourceIdAsc = 'externalDetails_sourceId_ASC',
  /** Sorts descending by the `externalDetails.sourceId` field. */
  ExternalDetailsSourceIdDesc = 'externalDetails_sourceId_DESC',
  /** Sorts ascending by the `externalDetails.source` field. */
  ExternalDetailsSourceAsc = 'externalDetails_source_ASC',
  /** Sorts descending by the `externalDetails.source` field. */
  ExternalDetailsSourceDesc = 'externalDetails_source_DESC',
  /** Sorts ascending by the `externalDetails.type` field. */
  ExternalDetailsTypeAsc = 'externalDetails_type_ASC',
  /** Sorts descending by the `externalDetails.type` field. */
  ExternalDetailsTypeDesc = 'externalDetails_type_DESC',
  /** Sorts ascending by the `id` field. */
  IdAsc = 'id_ASC',
  /** Sorts descending by the `id` field. */
  IdDesc = 'id_DESC',
  /** Sorts ascending by the `locationId` field. */
  LocationIdAsc = 'locationId_ASC',
  /** Sorts descending by the `locationId` field. */
  LocationIdDesc = 'locationId_DESC',
  /** Sorts ascending by the `merchantId` field. */
  MerchantIdAsc = 'merchantId_ASC',
  /** Sorts descending by the `merchantId` field. */
  MerchantIdDesc = 'merchantId_DESC',
  /** Sorts ascending by the `note` field. */
  NoteAsc = 'note_ASC',
  /** Sorts descending by the `note` field. */
  NoteDesc = 'note_DESC',
  /** Sorts ascending by the `orderId` field. */
  OrderIdAsc = 'orderId_ASC',
  /** Sorts descending by the `orderId` field. */
  OrderIdDesc = 'orderId_DESC',
  /** Sorts ascending by the `receiptNumber` field. */
  ReceiptNumberAsc = 'receiptNumber_ASC',
  /** Sorts descending by the `receiptNumber` field. */
  ReceiptNumberDesc = 'receiptNumber_DESC',
  /** Sorts ascending by the `receiptUrl` field. */
  ReceiptUrlAsc = 'receiptUrl_ASC',
  /** Sorts descending by the `receiptUrl` field. */
  ReceiptUrlDesc = 'receiptUrl_DESC',
  /** Sorts ascending by the `referenceId` field. */
  ReferenceIdAsc = 'referenceId_ASC',
  /** Sorts descending by the `referenceId` field. */
  ReferenceIdDesc = 'referenceId_DESC',
  /** Sorts ascending by the `refundedMoney.amount` field. */
  RefundedMoneyAmountAsc = 'refundedMoney_amount_ASC',
  /** Sorts descending by the `refundedMoney.amount` field. */
  RefundedMoneyAmountDesc = 'refundedMoney_amount_DESC',
  /** Sorts ascending by the `refundedMoney.currency` field. */
  RefundedMoneyCurrencyAsc = 'refundedMoney_currency_ASC',
  /** Sorts descending by the `refundedMoney.currency` field. */
  RefundedMoneyCurrencyDesc = 'refundedMoney_currency_DESC',
  /** Sorts ascending by the `riskEvaluation.createdAt` field. */
  RiskEvaluationCreatedAtAsc = 'riskEvaluation_createdAt_ASC',
  /** Sorts descending by the `riskEvaluation.createdAt` field. */
  RiskEvaluationCreatedAtDesc = 'riskEvaluation_createdAt_DESC',
  /** Sorts ascending by the `riskEvaluation.riskLevel` field. */
  RiskEvaluationRiskLevelAsc = 'riskEvaluation_riskLevel_ASC',
  /** Sorts descending by the `riskEvaluation.riskLevel` field. */
  RiskEvaluationRiskLevelDesc = 'riskEvaluation_riskLevel_DESC',
  /** Sorts ascending by the `sourceType` field. */
  SourceTypeAsc = 'sourceType_ASC',
  /** Sorts descending by the `sourceType` field. */
  SourceTypeDesc = 'sourceType_DESC',
  /** Sorts ascending by the `statementDescriptionIdentifier` field. */
  StatementDescriptionIdentifierAsc = 'statementDescriptionIdentifier_ASC',
  /** Sorts descending by the `statementDescriptionIdentifier` field. */
  StatementDescriptionIdentifierDesc = 'statementDescriptionIdentifier_DESC',
  /** Sorts ascending by the `status` field. */
  StatusAsc = 'status_ASC',
  /** Sorts descending by the `status` field. */
  StatusDesc = 'status_DESC',
  /** Sorts ascending by the `teamMemberId` field. */
  TeamMemberIdAsc = 'teamMemberId_ASC',
  /** Sorts descending by the `teamMemberId` field. */
  TeamMemberIdDesc = 'teamMemberId_DESC',
  /** Sorts ascending by the `tipMoney.amount` field. */
  TipMoneyAmountAsc = 'tipMoney_amount_ASC',
  /** Sorts descending by the `tipMoney.amount` field. */
  TipMoneyAmountDesc = 'tipMoney_amount_DESC',
  /** Sorts ascending by the `tipMoney.currency` field. */
  TipMoneyCurrencyAsc = 'tipMoney_currency_ASC',
  /** Sorts descending by the `tipMoney.currency` field. */
  TipMoneyCurrencyDesc = 'tipMoney_currency_DESC',
  /** Sorts ascending by the `totalMoney.amount` field. */
  TotalMoneyAmountAsc = 'totalMoney_amount_ASC',
  /** Sorts descending by the `totalMoney.amount` field. */
  TotalMoneyAmountDesc = 'totalMoney_amount_DESC',
  /** Sorts ascending by the `totalMoney.currency` field. */
  TotalMoneyCurrencyAsc = 'totalMoney_currency_ASC',
  /** Sorts descending by the `totalMoney.currency` field. */
  TotalMoneyCurrencyDesc = 'totalMoney_currency_DESC',
  /** Sorts ascending by the `updatedAt` field. */
  UpdatedAtAsc = 'updatedAt_ASC',
  /** Sorts descending by the `updatedAt` field. */
  UpdatedAtDesc = 'updatedAt_DESC',
  /** Sorts ascending by the `walletDetails.brand` field. */
  WalletDetailsBrandAsc = 'walletDetails_brand_ASC',
  /** Sorts descending by the `walletDetails.brand` field. */
  WalletDetailsBrandDesc = 'walletDetails_brand_DESC',
  /** Sorts ascending by the `walletDetails.cashAppDetails.buyerCashtag` field. */
  WalletDetailsCashAppDetailsBuyerCashtagAsc = 'walletDetails_cashAppDetails_buyerCashtag_ASC',
  /** Sorts descending by the `walletDetails.cashAppDetails.buyerCashtag` field. */
  WalletDetailsCashAppDetailsBuyerCashtagDesc = 'walletDetails_cashAppDetails_buyerCashtag_DESC',
  /** Sorts ascending by the `walletDetails.cashAppDetails.buyerCountryCode` field. */
  WalletDetailsCashAppDetailsBuyerCountryCodeAsc = 'walletDetails_cashAppDetails_buyerCountryCode_ASC',
  /** Sorts descending by the `walletDetails.cashAppDetails.buyerCountryCode` field. */
  WalletDetailsCashAppDetailsBuyerCountryCodeDesc = 'walletDetails_cashAppDetails_buyerCountryCode_DESC',
  /** Sorts ascending by the `walletDetails.cashAppDetails.buyerFullName` field. */
  WalletDetailsCashAppDetailsBuyerFullNameAsc = 'walletDetails_cashAppDetails_buyerFullName_ASC',
  /** Sorts descending by the `walletDetails.cashAppDetails.buyerFullName` field. */
  WalletDetailsCashAppDetailsBuyerFullNameDesc = 'walletDetails_cashAppDetails_buyerFullName_DESC',
  /** Sorts ascending by the `walletDetails.status` field. */
  WalletDetailsStatusAsc = 'walletDetails_status_ASC',
  /** Sorts descending by the `walletDetails.status` field. */
  WalletDetailsStatusDesc = 'walletDetails_status_DESC'
}

/**
 * The source type for a payment.
 *
 * For information about these payment source types,
 * see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
 */
export enum PaymentSourceType {
  BankAccount = 'BANK_ACCOUNT',
  BuyNowPayLater = 'BUY_NOW_PAY_LATER',
  Card = 'CARD',
  Cash = 'CASH',
  External = 'EXTERNAL',
  SquareAccount = 'SQUARE_ACCOUNT',
  TrustedPartner = 'TRUSTED_PARTNER',
  Wallet = 'WALLET'
}

/**
 * Input type used to specify filters on `PaymentSourceType` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentSourceTypeFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentSourceTypeFilterInput` input because of
   * collisions between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentSourceTypeFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentSourceTypeFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentSourceType>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentSourceTypeFilterInput>;
};

/** Indicates the current status of a `Payment` object. */
export enum PaymentStatus {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

/**
 * Input type used to specify filters on `PaymentStatus` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type PaymentStatusFilter = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `PaymentStatusFilter` input because of collisions
   * between key names. For example, if you want to AND multiple
   * OR'd sub-filters (the equivalent of (A OR B) AND (C OR D)), you could do allOf: [{anyOf: [...]}, {anyOf: [...]}].
   *
   * When `null` or an empty list is passed, matches all documents.
   */
  allOf?: InputMaybe<Array<PaymentStatusFilter>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<PaymentStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentStatus>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<PaymentStatusFilter>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Represents a specific payout (a money transfer) from a Square account to a seller's bank account.
 *
 *
 * For more performant queries on this type, please filter on `merchant.id` if possible.
 */
export type Payout = {
  __typename?: 'Payout';
  /**
   * The amount of money involved in the payout. A positive amount indicates a
   * deposit, and a negative amount indicates a withdrawal. This amount is never zero.
   */
  amountMoney?: Maybe<Money>;
  /** The calendar date, in ISO 8601 format (YYYY-MM-DD), when the payout is due to arrive in the seller’s banking destination. */
  arrivalDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The timestamp of when the payout was created and submitted for deposit to the
   * seller's banking destination, in RFC 3339 format.
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Information about the banking destination (such as a bank account, Square
   * checking account, or debit card) against which the payout was made.
   */
  destination?: Maybe<Destination>;
  /** A unique ID for each Payout object that might also appear on the seller’s bank statement. */
  endToEndId?: Maybe<Scalars['ID']['output']>;
  /** A unique ID for the payout. */
  id: Scalars['ID']['output'];
  /** The ID of the location associated with the payout. */
  location?: Maybe<Location>;
  /** Indicates the payout status. */
  status?: Maybe<Scalars['String']['output']>;
  /** Indicates the payout type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The timestamp of when the payout was last updated, in RFC 3339 format. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version number, which is incremented each time an update is made to this payout record. */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * Represents a paginated collection of `Payout` results.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types) for more info.
 *
 * Permissions: PAYOUTS_READ.
 */
export type PayoutConnection = {
  __typename?: 'PayoutConnection';
  /** Wraps a specific `Payout` to pair it with its pagination cursor. */
  edges: Array<PayoutEdge>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a specific `Payout` in the context of a `PayoutConnection`,
 * providing access to both the `Payout` and a pagination `Cursor`.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types) for more info.
 *
 * Permissions: PAYOUTS_READ.
 */
export type PayoutEdge = {
  __typename?: 'PayoutEdge';
  /**
   * The `Cursor` of this `Payout`. This can be passed in the next query as
   * a `before` or `after` argument to continue paginating from this `Payout`.
   */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Payout` of this edge. */
  node?: Maybe<Payout>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Payout entries for a specific payout.
 *
 *
 * For more performant queries on this type, please filter on `payoutId` if possible.
 */
export type PayoutEntry = {
  __typename?: 'PayoutEntry';
  /** The timestamp of when the payout entry affected the balance, in RFC 3339 format. */
  effectiveAt?: Maybe<Scalars['DateTime']['output']>;
  /** The amount of Square fees associated with this payout entry. */
  feeAmountMoney?: Maybe<Money>;
  /** The amount of money involved in this payout entry. */
  grossAmountMoney?: Maybe<Money>;
  /** A unique ID for the payout entry. Min Length 1. */
  id: Scalars['ID']['output'];
  /** The net proceeds from this transaction after any fees. */
  netAmountMoney?: Maybe<Money>;
  /** The ID of the payout entries’ associated payout. Min Length 1. */
  payoutId?: Maybe<Scalars['ID']['output']>;
  /** The type of activity associated with this payout entry. */
  type?: Maybe<Scalars['String']['output']>;
  /** Details of a refund for an application fee on a payment. */
  typeAppFeeRefundDetails?: Maybe<AppFeeRefundDetails>;
  /** Revenue generated from an application fee on a payment. */
  typeAppFeeRevenueDetails?: Maybe<AppFeeRevenueDetails>;
  /** Details of any automatic transfer from the payment processing balance to the Square Savings account. */
  typeAutomaticSavingsDetails?: Maybe<AutomaticSavingsDetails>;
  /** Details of any automatic transfer from the Square Savings account back to the processing balance. */
  typeAutomaticSavingsReversedDetails?: Maybe<AutomaticSavingsReversedDetails>;
  /**
   * Details of a transfer of funds to a banking folder. In the United States, the
   * folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.'
   */
  typeBalanceFoldersTransferDetails?: Maybe<BalanceFoldersTransferDetails>;
  /**
   * Details of a transfer of funds from a banking folder. In the United States,
   * the folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.'
   */
  typeBalanceFoldersTransferReversedDetails?: Maybe<BalanceFoldersTransferReversedDetails>;
  /** Details of credit card payment captures. */
  typeChargeDetails?: Maybe<ChargeDetails>;
  /** Details of any fees involved with deposits such as for instant deposits. */
  typeDepositFeeDetails?: Maybe<DepositFeeDetails>;
  /** Details of any reversal or refund of fees involved with deposits such as for instant deposits. */
  typeDepositFeeReversedDetails?: Maybe<DepositFeeReversedDetails>;
  /** Details of any balance change due to a dispute event. */
  typeDisputeDetails?: Maybe<DisputeDetails>;
  /** Details of adjustments due to the Square processing fee. */
  typeFeeDetails?: Maybe<FeeDetails>;
  /** Details of any credit to the merchant for the purposes of Free Processing. */
  typeFreeProcessingDetails?: Maybe<FreeProcessingDetails>;
  /**
   * Details of the fee collected during the sale or reload of a gift card. This
   * fee, which is a portion of the amount loaded on the gift card, is deducted
   * from the merchant's payment balance. The fee is recorded as a new payout
   * entry, not part of the CHARGE payout entry.
   */
  typeGiftCardLoadFeeDetails?: Maybe<GiftCardLoadFeeDetails>;
  /** Details of a refund for the fee charged during the sale or reload of a gift card. */
  typeGiftCardLoadFeeRefundDetails?: Maybe<GiftCardLoadFeeRefundDetails>;
  /**
   * Details of a reversal of transfer of gift card funds from a central gift card
   * pool account. In franchises, when gift cards are loaded or reloaded at any
   * location, the money transfers to the franchisor's account.
   */
  typeGiftCardPoolTransferDetails?: Maybe<GiftCardPoolTransferDetails>;
  /** Details of a refund for the fee charged during the sale or reload of a gift card. */
  typeGiftCardPoolTransferReversedDetails?: Maybe<GiftCardPoolTransferReversedDetails>;
  /** Details of any adjustment related to the holding or releasing of a payment. */
  typeHoldAdjustmentDetails?: Maybe<HoldAdjustmentDetails>;
  /** Details of a cashback amount given by a Square Local Offers seller to their customer for a purchase. */
  typeLocalOffersCashbackDetails?: Maybe<LocalOffersCashbackDetails>;
  /**
   * Details of a commission fee paid by a Square Local Offers seller to Square for
   * a purchase discovered through Square Local Offers.
   */
  typeLocalOffersFeeDetails?: Maybe<LocalOffersFeeDetails>;
  /** Details of any open disputes. */
  typeOpenDisputeDetails?: Maybe<OpenDisputeDetails>;
  /** Details of any other type of adjustments that don't fall under existing types. */
  typeOtherAdjustmentDetails?: Maybe<OtherAdjustmentDetails>;
  /** Details of any other type that does not belong in the rest of the types. */
  typeOtherDetails?: Maybe<OtherDetails>;
  /**
   * Details of withheld funds from a payment to cover a negative balance. It's an
   * installment to repay the amount from a dispute that had been offset during
   * Percentage Processing enrollment.
   */
  typePercentageProcessingRepaymentDetails?: Maybe<PercentageProcessingRepaymentDetails>;
  /**
   * Details of the reversal of a percentage processing repayment that happens for
   * example when a refund is issued for a payment.
   */
  typePercentageProcessingRepaymentReversedDetails?: Maybe<PercentageProcessingRepaymentReversedDetails>;
  /**
   * Details of the processing fee for a payment. If sellers opt for Gross
   * Settlement, i.e., direct bank withdrawal instead of deducting fees from daily
   * sales, the processing fee is recorded separately as a new payout entry, not
   * part of the CHARGE payout entry.
   */
  typeProcessingFeeDetails?: Maybe<ProcessingFeeDetails>;
  /**
   * Details of the processing fee for a payment refund issued by sellers enrolled
   * in Gross Settlement. The refunded processing fee is recorded separately as a
   * new payout entry, not part of the REFUND payout entry.
   */
  typeProcessingFeeRefundDetails?: Maybe<ProcessingFeeRefundDetails>;
  /** Details of a refund for an existing card payment. */
  typeRefundDetails?: Maybe<TypeRefundDetails>;
  /** Details of fees released for adjustments. */
  typeReleaseAdjustmentDetails?: Maybe<ReleaseAdjustmentDetails>;
  /** Details of fees paid for funding risk reserve. */
  typeReserveHoldDetails?: Maybe<ReserveHoldDetails>;
  /** Details of fees released from risk reserve. */
  typeReserveReleaseDetails?: Maybe<ReserveReleaseDetails>;
  /** Details of capital merchant cash advance (MCA) assessments. */
  typeSquareCapitalPaymentDetails?: Maybe<SquareCapitalPaymentDetails>;
  /** Details of capital merchant cash advance (MCA) assessment refunds. */
  typeSquareCapitalReversedPaymentDetails?: Maybe<SquareCapitalReversedPaymentDetails>;
  /** Details of a payroll payment that was transferred to a team member’s bank account. */
  typeSquarePayrollTransferDetails?: Maybe<SquarePayrollTransferDetails>;
  /** Details of a payroll payment to a team member’s bank account that was deposited back to the seller’s account by Square. */
  typeSquarePayrollTransferReversedDetails?: Maybe<SquarePayrollTransferReversedDetails>;
  /** Details of tax paid on fee amounts. */
  typeTaxOnFeeDetails?: Maybe<TaxOnFeeDetails>;
  /** Details of fees collected by a third-party platform. */
  typeThirdPartyFeeDetails?: Maybe<ThirdPartyFeeDetails>;
  /** Details of refunded fees from a third-party platform. */
  typeThirdPartyFeeRefundDetails?: Maybe<ThirdPartyFeeRefundDetails>;
  /** Details of a reversed refund for a fee charged during the sale or reload of a gift card. */
  typeUndoGiftCardLoadFeeRefundDetails?: Maybe<UndoGiftCardLoadFeeRefundDetails>;
  /** Details of a reversed processing fee for a payment refund in a Gross Settlement payment. */
  typeUndoProcessingFeeRefundDetails?: Maybe<UndoProcessingFeeRefundDetails>;
};

/**
 * Represents a paginated collection of `PayoutEntry` results.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types) for more info.
 *
 * Permissions: PAYOUTS_READ.
 */
export type PayoutEntryConnection = {
  __typename?: 'PayoutEntryConnection';
  /** Wraps a specific `PayoutEntry` to pair it with its pagination cursor. */
  edges: Array<PayoutEntryEdge>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a specific `PayoutEntry` in the context of a `PayoutEntryConnection`,
 * providing access to both the `PayoutEntry` and a pagination `Cursor`.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types) for more info.
 *
 * Permissions: PAYOUTS_READ.
 */
export type PayoutEntryEdge = {
  __typename?: 'PayoutEntryEdge';
  /**
   * The `Cursor` of this `PayoutEntry`. This can be passed in the next query as
   * a `before` or `after` argument to continue paginating from this `PayoutEntry`.
   */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PayoutEntry` of this edge. */
  node?: Maybe<PayoutEntry>;
};

/**
 * Input type used to specify filters on `PayoutEntry` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type PayoutEntryFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PayoutEntryFilterInput>>;
  /**
   * Used to filter on the `effectiveAt` field:
   *
   * > The timestamp of when the payout entry affected the balance, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  effectiveAt?: InputMaybe<DateTimeFilterInput>;
  /**
   * Used to filter on the `feeAmountMoney` field:
   *
   * > The amount of Square fees associated with this payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  feeAmountMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `grossAmountMoney` field:
   *
   * > The amount of money involved in this payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  grossAmountMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Used to filter on the `id` field:
   *
   * > A unique ID for the payout entry. Min Length 1.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  id?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `merchant` field:
   *
   * > The merchant that owns this payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  merchant?: InputMaybe<MerchantRefFilterInput>;
  /**
   * Used to filter on the `netAmountMoney` field:
   *
   * > The net proceeds from this transaction after any fees.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  netAmountMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<PayoutEntryFilterInput>;
  /**
   * Used to filter on the `payoutId` field:
   *
   * > The ID of the payout entries’ associated payout. Min Length 1.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  payoutId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `type` field:
   *
   * > The type of activity associated with this payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `typeAppFeeRefundDetails` field:
   *
   * > Details of a refund for an application fee on a payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeAppFeeRefundDetails?: InputMaybe<AppFeeRefundDetailsFilterInput>;
  /**
   * Used to filter on the `typeAppFeeRevenueDetails` field:
   *
   * > Revenue generated from an application fee on a payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeAppFeeRevenueDetails?: InputMaybe<AppFeeRevenueDetailsFilterInput>;
  /**
   * Used to filter on the `typeAutomaticSavingsDetails` field:
   *
   * > Details of any automatic transfer from the payment processing balance to the Square Savings account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeAutomaticSavingsDetails?: InputMaybe<AutomaticSavingsDetailsFilterInput>;
  /**
   * Used to filter on the `typeAutomaticSavingsReversedDetails` field:
   *
   * > Details of any automatic transfer from the Square Savings account back to the processing balance.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeAutomaticSavingsReversedDetails?: InputMaybe<AutomaticSavingsReversedDetailsFilterInput>;
  /**
   * Used to filter on the `typeBalanceFoldersTransferDetails` field:
   *
   * > Details of a transfer of funds to a banking folder. In the United States,
   * the folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.'
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeBalanceFoldersTransferDetails?: InputMaybe<BalanceFoldersTransferDetailsFilterInput>;
  /**
   * Used to filter on the `typeBalanceFoldersTransferReversedDetails` field:
   *
   * > Details of a transfer of funds from a banking folder. In the United States,
   * the folder name is 'Checking Folder'; in Canada, it's 'Balance Folder.'
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeBalanceFoldersTransferReversedDetails?: InputMaybe<BalanceFoldersTransferReversedDetailsFilterInput>;
  /**
   * Used to filter on the `typeChargeDetails` field:
   *
   * > Details of credit card payment captures.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeChargeDetails?: InputMaybe<ChargeDetailsFilterInput>;
  /**
   * Used to filter on the `typeDepositFeeDetails` field:
   *
   * > Details of any fees involved with deposits such as for instant deposits.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeDepositFeeDetails?: InputMaybe<DepositFeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeDepositFeeReversedDetails` field:
   *
   * > Details of any reversal or refund of fees involved with deposits such as for instant deposits.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeDepositFeeReversedDetails?: InputMaybe<DepositFeeReversedDetailsFilterInput>;
  /**
   * Used to filter on the `typeDisputeDetails` field:
   *
   * > Details of any balance change due to a dispute event.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeDisputeDetails?: InputMaybe<DisputeDetailsFilterInput>;
  /**
   * Used to filter on the `typeFeeDetails` field:
   *
   * > Details of adjustments due to the Square processing fee.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeFeeDetails?: InputMaybe<FeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeFreeProcessingDetails` field:
   *
   * > Details of any credit to the merchant for the purposes of Free Processing.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeFreeProcessingDetails?: InputMaybe<FreeProcessingDetailsFilterInput>;
  /**
   * Used to filter on the `typeGiftCardLoadFeeDetails` field:
   *
   * > Details of the fee collected during the sale or reload of a gift card. This
   * fee, which is a portion of the amount loaded on the gift card, is deducted
   * from the merchant's payment balance. The fee is recorded as a new payout
   * entry, not part of the CHARGE payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeGiftCardLoadFeeDetails?: InputMaybe<GiftCardLoadFeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeGiftCardLoadFeeRefundDetails` field:
   *
   * > Details of a refund for the fee charged during the sale or reload of a gift card.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeGiftCardLoadFeeRefundDetails?: InputMaybe<GiftCardLoadFeeRefundDetailsFilterInput>;
  /**
   * Used to filter on the `typeGiftCardPoolTransferDetails` field:
   *
   * > Details of a reversal of transfer of gift card funds from a central gift
   * card pool account. In franchises, when gift cards are loaded or reloaded at
   * any location, the money transfers to the franchisor's account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeGiftCardPoolTransferDetails?: InputMaybe<GiftCardPoolTransferDetailsFilterInput>;
  /**
   * Used to filter on the `typeGiftCardPoolTransferReversedDetails` field:
   *
   * > Details of a refund for the fee charged during the sale or reload of a gift card.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeGiftCardPoolTransferReversedDetails?: InputMaybe<GiftCardPoolTransferReversedDetailsFilterInput>;
  /**
   * Used to filter on the `typeHoldAdjustmentDetails` field:
   *
   * > Details of any adjustment related to the holding or releasing of a payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeHoldAdjustmentDetails?: InputMaybe<HoldAdjustmentDetailsFilterInput>;
  /**
   * Used to filter on the `typeLocalOffersCashbackDetails` field:
   *
   * > Details of a cashback amount given by a Square Local Offers seller to their customer for a purchase.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeLocalOffersCashbackDetails?: InputMaybe<LocalOffersCashbackDetailsFilterInput>;
  /**
   * Used to filter on the `typeLocalOffersFeeDetails` field:
   *
   * > Details of a commission fee paid by a Square Local Offers seller to Square
   * for a purchase discovered through Square Local Offers.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeLocalOffersFeeDetails?: InputMaybe<LocalOffersFeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeOpenDisputeDetails` field:
   *
   * > Details of any open disputes.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeOpenDisputeDetails?: InputMaybe<OpenDisputeDetailsFilterInput>;
  /**
   * Used to filter on the `typeOtherAdjustmentDetails` field:
   *
   * > Details of any other type of adjustments that don't fall under existing types.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeOtherAdjustmentDetails?: InputMaybe<OtherAdjustmentDetailsFilterInput>;
  /**
   * Used to filter on the `typeOtherDetails` field:
   *
   * > Details of any other type that does not belong in the rest of the types.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeOtherDetails?: InputMaybe<OtherDetailsFilterInput>;
  /**
   * Used to filter on the `typePercentageProcessingRepaymentDetails` field:
   *
   * > Details of withheld funds from a payment to cover a negative balance. It's
   * an installment to repay the amount from a dispute that had been offset during
   * Percentage Processing enrollment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typePercentageProcessingRepaymentDetails?: InputMaybe<PercentageProcessingRepaymentDetailsFilterInput>;
  /**
   * Used to filter on the `typePercentageProcessingRepaymentReversedDetails` field:
   *
   * > Details of the reversal of a percentage processing repayment that happens
   * for example when a refund is issued for a payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typePercentageProcessingRepaymentReversedDetails?: InputMaybe<PercentageProcessingRepaymentReversedDetailsFilterInput>;
  /**
   * Used to filter on the `typeProcessingFeeDetails` field:
   *
   * > Details of the processing fee for a payment. If sellers opt for Gross
   * Settlement, i.e., direct bank withdrawal instead of deducting fees from daily
   * sales, the processing fee is recorded separately as a new payout entry, not
   * part of the CHARGE payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeProcessingFeeDetails?: InputMaybe<ProcessingFeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeProcessingFeeRefundDetails` field:
   *
   * > Details of the processing fee for a payment refund issued by sellers
   * enrolled in Gross Settlement. The refunded processing fee is recorded
   * separately as a new payout entry, not part of the REFUND payout entry.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeProcessingFeeRefundDetails?: InputMaybe<ProcessingFeeRefundDetailsFilterInput>;
  /**
   * Used to filter on the `typeRefundDetails` field:
   *
   * > Details of a refund for an existing card payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeRefundDetails?: InputMaybe<TypeRefundDetailsFilterInput>;
  /**
   * Used to filter on the `typeReleaseAdjustmentDetails` field:
   *
   * > Details of fees released for adjustments.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeReleaseAdjustmentDetails?: InputMaybe<ReleaseAdjustmentDetailsFilterInput>;
  /**
   * Used to filter on the `typeReserveHoldDetails` field:
   *
   * > Details of fees paid for funding risk reserve.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeReserveHoldDetails?: InputMaybe<ReserveHoldDetailsFilterInput>;
  /**
   * Used to filter on the `typeReserveReleaseDetails` field:
   *
   * > Details of fees released from risk reserve.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeReserveReleaseDetails?: InputMaybe<ReserveReleaseDetailsFilterInput>;
  /**
   * Used to filter on the `typeSquareCapitalPaymentDetails` field:
   *
   * > Details of capital merchant cash advance (MCA) assessments.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeSquareCapitalPaymentDetails?: InputMaybe<SquareCapitalPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `typeSquareCapitalReversedPaymentDetails` field:
   *
   * > Details of capital merchant cash advance (MCA) assessment refunds.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeSquareCapitalReversedPaymentDetails?: InputMaybe<SquareCapitalReversedPaymentDetailsFilterInput>;
  /**
   * Used to filter on the `typeSquarePayrollTransferDetails` field:
   *
   * > Details of a payroll payment that was transferred to a team member’s bank account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeSquarePayrollTransferDetails?: InputMaybe<SquarePayrollTransferDetailsFilterInput>;
  /**
   * Used to filter on the `typeSquarePayrollTransferReversedDetails` field:
   *
   * > Details of a payroll payment to a team member’s bank account that was deposited back to the seller’s account by Square.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeSquarePayrollTransferReversedDetails?: InputMaybe<SquarePayrollTransferReversedDetailsFilterInput>;
  /**
   * Used to filter on the `typeTaxOnFeeDetails` field:
   *
   * > Details of tax paid on fee amounts.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeTaxOnFeeDetails?: InputMaybe<TaxOnFeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeThirdPartyFeeDetails` field:
   *
   * > Details of fees collected by a third-party platform.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeThirdPartyFeeDetails?: InputMaybe<ThirdPartyFeeDetailsFilterInput>;
  /**
   * Used to filter on the `typeThirdPartyFeeRefundDetails` field:
   *
   * > Details of refunded fees from a third-party platform.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeThirdPartyFeeRefundDetails?: InputMaybe<ThirdPartyFeeRefundDetailsFilterInput>;
  /**
   * Used to filter on the `typeUndoGiftCardLoadFeeRefundDetails` field:
   *
   * > Details of a reversed refund for a fee charged during the sale or reload of a gift card.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeUndoGiftCardLoadFeeRefundDetails?: InputMaybe<UndoGiftCardLoadFeeRefundDetailsFilterInput>;
  /**
   * Used to filter on the `typeUndoProcessingFeeRefundDetails` field:
   *
   * > Details of a reversed processing fee for a payment refund in a Gross Settlement payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  typeUndoProcessingFeeRefundDetails?: InputMaybe<UndoProcessingFeeRefundDetailsFilterInput>;
};

/** Enumerates the ways `PayoutEntry`s can be sorted. */
export enum PayoutEntrySortOrderInput {
  /** Sorts ascending by the `effectiveAt` field. */
  EffectiveAtAsc = 'effectiveAt_ASC',
  /** Sorts descending by the `effectiveAt` field. */
  EffectiveAtDesc = 'effectiveAt_DESC',
  /** Sorts ascending by the `feeAmountMoney.amount` field. */
  FeeAmountMoneyAmountAsc = 'feeAmountMoney_amount_ASC',
  /** Sorts descending by the `feeAmountMoney.amount` field. */
  FeeAmountMoneyAmountDesc = 'feeAmountMoney_amount_DESC',
  /** Sorts ascending by the `feeAmountMoney.currencyCode` field. */
  FeeAmountMoneyCurrencyCodeAsc = 'feeAmountMoney_currencyCode_ASC',
  /** Sorts descending by the `feeAmountMoney.currencyCode` field. */
  FeeAmountMoneyCurrencyCodeDesc = 'feeAmountMoney_currencyCode_DESC',
  /** Sorts ascending by the `feeAmountMoney.currency` field. */
  FeeAmountMoneyCurrencyAsc = 'feeAmountMoney_currency_ASC',
  /** Sorts descending by the `feeAmountMoney.currency` field. */
  FeeAmountMoneyCurrencyDesc = 'feeAmountMoney_currency_DESC',
  /** Sorts ascending by the `grossAmountMoney.amount` field. */
  GrossAmountMoneyAmountAsc = 'grossAmountMoney_amount_ASC',
  /** Sorts descending by the `grossAmountMoney.amount` field. */
  GrossAmountMoneyAmountDesc = 'grossAmountMoney_amount_DESC',
  /** Sorts ascending by the `grossAmountMoney.currencyCode` field. */
  GrossAmountMoneyCurrencyCodeAsc = 'grossAmountMoney_currencyCode_ASC',
  /** Sorts descending by the `grossAmountMoney.currencyCode` field. */
  GrossAmountMoneyCurrencyCodeDesc = 'grossAmountMoney_currencyCode_DESC',
  /** Sorts ascending by the `grossAmountMoney.currency` field. */
  GrossAmountMoneyCurrencyAsc = 'grossAmountMoney_currency_ASC',
  /** Sorts descending by the `grossAmountMoney.currency` field. */
  GrossAmountMoneyCurrencyDesc = 'grossAmountMoney_currency_DESC',
  /** Sorts ascending by the `id` field. */
  IdAsc = 'id_ASC',
  /** Sorts descending by the `id` field. */
  IdDesc = 'id_DESC',
  /** Sorts ascending by the `merchant.id` field. */
  MerchantIdAsc = 'merchant_id_ASC',
  /** Sorts descending by the `merchant.id` field. */
  MerchantIdDesc = 'merchant_id_DESC',
  /** Sorts ascending by the `netAmountMoney.amount` field. */
  NetAmountMoneyAmountAsc = 'netAmountMoney_amount_ASC',
  /** Sorts descending by the `netAmountMoney.amount` field. */
  NetAmountMoneyAmountDesc = 'netAmountMoney_amount_DESC',
  /** Sorts ascending by the `netAmountMoney.currencyCode` field. */
  NetAmountMoneyCurrencyCodeAsc = 'netAmountMoney_currencyCode_ASC',
  /** Sorts descending by the `netAmountMoney.currencyCode` field. */
  NetAmountMoneyCurrencyCodeDesc = 'netAmountMoney_currencyCode_DESC',
  /** Sorts ascending by the `netAmountMoney.currency` field. */
  NetAmountMoneyCurrencyAsc = 'netAmountMoney_currency_ASC',
  /** Sorts descending by the `netAmountMoney.currency` field. */
  NetAmountMoneyCurrencyDesc = 'netAmountMoney_currency_DESC',
  /** Sorts ascending by the `payoutId` field. */
  PayoutIdAsc = 'payoutId_ASC',
  /** Sorts descending by the `payoutId` field. */
  PayoutIdDesc = 'payoutId_DESC',
  /** Sorts ascending by the `typeAppFeeRefundDetails.locationId` field. */
  TypeAppFeeRefundDetailsLocationIdAsc = 'typeAppFeeRefundDetails_locationId_ASC',
  /** Sorts descending by the `typeAppFeeRefundDetails.locationId` field. */
  TypeAppFeeRefundDetailsLocationIdDesc = 'typeAppFeeRefundDetails_locationId_DESC',
  /** Sorts ascending by the `typeAppFeeRefundDetails.paymentId` field. */
  TypeAppFeeRefundDetailsPaymentIdAsc = 'typeAppFeeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeAppFeeRefundDetails.paymentId` field. */
  TypeAppFeeRefundDetailsPaymentIdDesc = 'typeAppFeeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `typeAppFeeRevenueDetails.locationId` field. */
  TypeAppFeeRevenueDetailsLocationIdAsc = 'typeAppFeeRevenueDetails_locationId_ASC',
  /** Sorts descending by the `typeAppFeeRevenueDetails.locationId` field. */
  TypeAppFeeRevenueDetailsLocationIdDesc = 'typeAppFeeRevenueDetails_locationId_DESC',
  /** Sorts ascending by the `typeAppFeeRevenueDetails.paymentId` field. */
  TypeAppFeeRevenueDetailsPaymentIdAsc = 'typeAppFeeRevenueDetails_paymentId_ASC',
  /** Sorts descending by the `typeAppFeeRevenueDetails.paymentId` field. */
  TypeAppFeeRevenueDetailsPaymentIdDesc = 'typeAppFeeRevenueDetails_paymentId_DESC',
  /** Sorts ascending by the `typeAutomaticSavingsDetails.paymentId` field. */
  TypeAutomaticSavingsDetailsPaymentIdAsc = 'typeAutomaticSavingsDetails_paymentId_ASC',
  /** Sorts descending by the `typeAutomaticSavingsDetails.paymentId` field. */
  TypeAutomaticSavingsDetailsPaymentIdDesc = 'typeAutomaticSavingsDetails_paymentId_DESC',
  /** Sorts ascending by the `typeAutomaticSavingsDetails.payoutId` field. */
  TypeAutomaticSavingsDetailsPayoutIdAsc = 'typeAutomaticSavingsDetails_payoutId_ASC',
  /** Sorts descending by the `typeAutomaticSavingsDetails.payoutId` field. */
  TypeAutomaticSavingsDetailsPayoutIdDesc = 'typeAutomaticSavingsDetails_payoutId_DESC',
  /** Sorts ascending by the `typeAutomaticSavingsReversedDetails.paymentId` field. */
  TypeAutomaticSavingsReversedDetailsPaymentIdAsc = 'typeAutomaticSavingsReversedDetails_paymentId_ASC',
  /** Sorts descending by the `typeAutomaticSavingsReversedDetails.paymentId` field. */
  TypeAutomaticSavingsReversedDetailsPaymentIdDesc = 'typeAutomaticSavingsReversedDetails_paymentId_DESC',
  /** Sorts ascending by the `typeAutomaticSavingsReversedDetails.payoutId` field. */
  TypeAutomaticSavingsReversedDetailsPayoutIdAsc = 'typeAutomaticSavingsReversedDetails_payoutId_ASC',
  /** Sorts descending by the `typeAutomaticSavingsReversedDetails.payoutId` field. */
  TypeAutomaticSavingsReversedDetailsPayoutIdDesc = 'typeAutomaticSavingsReversedDetails_payoutId_DESC',
  /** Sorts ascending by the `typeBalanceFoldersTransferDetails.paymentId` field. */
  TypeBalanceFoldersTransferDetailsPaymentIdAsc = 'typeBalanceFoldersTransferDetails_paymentId_ASC',
  /** Sorts descending by the `typeBalanceFoldersTransferDetails.paymentId` field. */
  TypeBalanceFoldersTransferDetailsPaymentIdDesc = 'typeBalanceFoldersTransferDetails_paymentId_DESC',
  /** Sorts ascending by the `typeBalanceFoldersTransferReversedDetails.paymentId` field. */
  TypeBalanceFoldersTransferReversedDetailsPaymentIdAsc = 'typeBalanceFoldersTransferReversedDetails_paymentId_ASC',
  /** Sorts descending by the `typeBalanceFoldersTransferReversedDetails.paymentId` field. */
  TypeBalanceFoldersTransferReversedDetailsPaymentIdDesc = 'typeBalanceFoldersTransferReversedDetails_paymentId_DESC',
  /** Sorts ascending by the `typeChargeDetails.paymentId` field. */
  TypeChargeDetailsPaymentIdAsc = 'typeChargeDetails_paymentId_ASC',
  /** Sorts descending by the `typeChargeDetails.paymentId` field. */
  TypeChargeDetailsPaymentIdDesc = 'typeChargeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeDepositFeeDetails.payoutId` field. */
  TypeDepositFeeDetailsPayoutIdAsc = 'typeDepositFeeDetails_payoutId_ASC',
  /** Sorts descending by the `typeDepositFeeDetails.payoutId` field. */
  TypeDepositFeeDetailsPayoutIdDesc = 'typeDepositFeeDetails_payoutId_DESC',
  /** Sorts ascending by the `typeDepositFeeReversedDetails.payoutId` field. */
  TypeDepositFeeReversedDetailsPayoutIdAsc = 'typeDepositFeeReversedDetails_payoutId_ASC',
  /** Sorts descending by the `typeDepositFeeReversedDetails.payoutId` field. */
  TypeDepositFeeReversedDetailsPayoutIdDesc = 'typeDepositFeeReversedDetails_payoutId_DESC',
  /** Sorts ascending by the `typeDisputeDetails.paymentId` field. */
  TypeDisputeDetailsPaymentIdAsc = 'typeDisputeDetails_paymentId_ASC',
  /** Sorts descending by the `typeDisputeDetails.paymentId` field. */
  TypeDisputeDetailsPaymentIdDesc = 'typeDisputeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeFeeDetails.paymentId` field. */
  TypeFeeDetailsPaymentIdAsc = 'typeFeeDetails_paymentId_ASC',
  /** Sorts descending by the `typeFeeDetails.paymentId` field. */
  TypeFeeDetailsPaymentIdDesc = 'typeFeeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeFreeProcessingDetails.paymentId` field. */
  TypeFreeProcessingDetailsPaymentIdAsc = 'typeFreeProcessingDetails_paymentId_ASC',
  /** Sorts descending by the `typeFreeProcessingDetails.paymentId` field. */
  TypeFreeProcessingDetailsPaymentIdDesc = 'typeFreeProcessingDetails_paymentId_DESC',
  /** Sorts ascending by the `typeGiftCardLoadFeeDetails.paymentId` field. */
  TypeGiftCardLoadFeeDetailsPaymentIdAsc = 'typeGiftCardLoadFeeDetails_paymentId_ASC',
  /** Sorts descending by the `typeGiftCardLoadFeeDetails.paymentId` field. */
  TypeGiftCardLoadFeeDetailsPaymentIdDesc = 'typeGiftCardLoadFeeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeGiftCardLoadFeeRefundDetails.paymentId` field. */
  TypeGiftCardLoadFeeRefundDetailsPaymentIdAsc = 'typeGiftCardLoadFeeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeGiftCardLoadFeeRefundDetails.paymentId` field. */
  TypeGiftCardLoadFeeRefundDetailsPaymentIdDesc = 'typeGiftCardLoadFeeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `typeGiftCardPoolTransferDetails.paymentId` field. */
  TypeGiftCardPoolTransferDetailsPaymentIdAsc = 'typeGiftCardPoolTransferDetails_paymentId_ASC',
  /** Sorts descending by the `typeGiftCardPoolTransferDetails.paymentId` field. */
  TypeGiftCardPoolTransferDetailsPaymentIdDesc = 'typeGiftCardPoolTransferDetails_paymentId_DESC',
  /** Sorts ascending by the `typeGiftCardPoolTransferReversedDetails.paymentId` field. */
  TypeGiftCardPoolTransferReversedDetailsPaymentIdAsc = 'typeGiftCardPoolTransferReversedDetails_paymentId_ASC',
  /** Sorts descending by the `typeGiftCardPoolTransferReversedDetails.paymentId` field. */
  TypeGiftCardPoolTransferReversedDetailsPaymentIdDesc = 'typeGiftCardPoolTransferReversedDetails_paymentId_DESC',
  /** Sorts ascending by the `typeHoldAdjustmentDetails.paymentId` field. */
  TypeHoldAdjustmentDetailsPaymentIdAsc = 'typeHoldAdjustmentDetails_paymentId_ASC',
  /** Sorts descending by the `typeHoldAdjustmentDetails.paymentId` field. */
  TypeHoldAdjustmentDetailsPaymentIdDesc = 'typeHoldAdjustmentDetails_paymentId_DESC',
  /** Sorts ascending by the `typeLocalOffersCashbackDetails.paymentId` field. */
  TypeLocalOffersCashbackDetailsPaymentIdAsc = 'typeLocalOffersCashbackDetails_paymentId_ASC',
  /** Sorts descending by the `typeLocalOffersCashbackDetails.paymentId` field. */
  TypeLocalOffersCashbackDetailsPaymentIdDesc = 'typeLocalOffersCashbackDetails_paymentId_DESC',
  /** Sorts ascending by the `typeLocalOffersFeeDetails.paymentId` field. */
  TypeLocalOffersFeeDetailsPaymentIdAsc = 'typeLocalOffersFeeDetails_paymentId_ASC',
  /** Sorts descending by the `typeLocalOffersFeeDetails.paymentId` field. */
  TypeLocalOffersFeeDetailsPaymentIdDesc = 'typeLocalOffersFeeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeOpenDisputeDetails.paymentId` field. */
  TypeOpenDisputeDetailsPaymentIdAsc = 'typeOpenDisputeDetails_paymentId_ASC',
  /** Sorts descending by the `typeOpenDisputeDetails.paymentId` field. */
  TypeOpenDisputeDetailsPaymentIdDesc = 'typeOpenDisputeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeOtherAdjustmentDetails.paymentId` field. */
  TypeOtherAdjustmentDetailsPaymentIdAsc = 'typeOtherAdjustmentDetails_paymentId_ASC',
  /** Sorts descending by the `typeOtherAdjustmentDetails.paymentId` field. */
  TypeOtherAdjustmentDetailsPaymentIdDesc = 'typeOtherAdjustmentDetails_paymentId_DESC',
  /** Sorts ascending by the `typeOtherDetails.paymentId` field. */
  TypeOtherDetailsPaymentIdAsc = 'typeOtherDetails_paymentId_ASC',
  /** Sorts descending by the `typeOtherDetails.paymentId` field. */
  TypeOtherDetailsPaymentIdDesc = 'typeOtherDetails_paymentId_DESC',
  /** Sorts ascending by the `typePercentageProcessingRepaymentDetails.paymentId` field. */
  TypePercentageProcessingRepaymentDetailsPaymentIdAsc = 'typePercentageProcessingRepaymentDetails_paymentId_ASC',
  /** Sorts descending by the `typePercentageProcessingRepaymentDetails.paymentId` field. */
  TypePercentageProcessingRepaymentDetailsPaymentIdDesc = 'typePercentageProcessingRepaymentDetails_paymentId_DESC',
  /** Sorts ascending by the `typePercentageProcessingRepaymentReversedDetails.paymentId` field. */
  TypePercentageProcessingRepaymentReversedDetailsPaymentIdAsc = 'typePercentageProcessingRepaymentReversedDetails_paymentId_ASC',
  /** Sorts descending by the `typePercentageProcessingRepaymentReversedDetails.paymentId` field. */
  TypePercentageProcessingRepaymentReversedDetailsPaymentIdDesc = 'typePercentageProcessingRepaymentReversedDetails_paymentId_DESC',
  /** Sorts ascending by the `typeProcessingFeeDetails.paymentId` field. */
  TypeProcessingFeeDetailsPaymentIdAsc = 'typeProcessingFeeDetails_paymentId_ASC',
  /** Sorts descending by the `typeProcessingFeeDetails.paymentId` field. */
  TypeProcessingFeeDetailsPaymentIdDesc = 'typeProcessingFeeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeProcessingFeeRefundDetails.paymentId` field. */
  TypeProcessingFeeRefundDetailsPaymentIdAsc = 'typeProcessingFeeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeProcessingFeeRefundDetails.paymentId` field. */
  TypeProcessingFeeRefundDetailsPaymentIdDesc = 'typeProcessingFeeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `typeRefundDetails.paymentId` field. */
  TypeRefundDetailsPaymentIdAsc = 'typeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeRefundDetails.paymentId` field. */
  TypeRefundDetailsPaymentIdDesc = 'typeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `typeRefundDetails.refundId` field. */
  TypeRefundDetailsRefundIdAsc = 'typeRefundDetails_refundId_ASC',
  /** Sorts descending by the `typeRefundDetails.refundId` field. */
  TypeRefundDetailsRefundIdDesc = 'typeRefundDetails_refundId_DESC',
  /** Sorts ascending by the `typeReleaseAdjustmentDetails.paymentId` field. */
  TypeReleaseAdjustmentDetailsPaymentIdAsc = 'typeReleaseAdjustmentDetails_paymentId_ASC',
  /** Sorts descending by the `typeReleaseAdjustmentDetails.paymentId` field. */
  TypeReleaseAdjustmentDetailsPaymentIdDesc = 'typeReleaseAdjustmentDetails_paymentId_DESC',
  /** Sorts ascending by the `typeReserveHoldDetails.paymentId` field. */
  TypeReserveHoldDetailsPaymentIdAsc = 'typeReserveHoldDetails_paymentId_ASC',
  /** Sorts descending by the `typeReserveHoldDetails.paymentId` field. */
  TypeReserveHoldDetailsPaymentIdDesc = 'typeReserveHoldDetails_paymentId_DESC',
  /** Sorts ascending by the `typeReserveReleaseDetails.paymentId` field. */
  TypeReserveReleaseDetailsPaymentIdAsc = 'typeReserveReleaseDetails_paymentId_ASC',
  /** Sorts descending by the `typeReserveReleaseDetails.paymentId` field. */
  TypeReserveReleaseDetailsPaymentIdDesc = 'typeReserveReleaseDetails_paymentId_DESC',
  /** Sorts ascending by the `typeSquareCapitalPaymentDetails.paymentId` field. */
  TypeSquareCapitalPaymentDetailsPaymentIdAsc = 'typeSquareCapitalPaymentDetails_paymentId_ASC',
  /** Sorts descending by the `typeSquareCapitalPaymentDetails.paymentId` field. */
  TypeSquareCapitalPaymentDetailsPaymentIdDesc = 'typeSquareCapitalPaymentDetails_paymentId_DESC',
  /** Sorts ascending by the `typeSquareCapitalReversedPaymentDetails.paymentId` field. */
  TypeSquareCapitalReversedPaymentDetailsPaymentIdAsc = 'typeSquareCapitalReversedPaymentDetails_paymentId_ASC',
  /** Sorts descending by the `typeSquareCapitalReversedPaymentDetails.paymentId` field. */
  TypeSquareCapitalReversedPaymentDetailsPaymentIdDesc = 'typeSquareCapitalReversedPaymentDetails_paymentId_DESC',
  /** Sorts ascending by the `typeSquarePayrollTransferDetails.paymentId` field. */
  TypeSquarePayrollTransferDetailsPaymentIdAsc = 'typeSquarePayrollTransferDetails_paymentId_ASC',
  /** Sorts descending by the `typeSquarePayrollTransferDetails.paymentId` field. */
  TypeSquarePayrollTransferDetailsPaymentIdDesc = 'typeSquarePayrollTransferDetails_paymentId_DESC',
  /** Sorts ascending by the `typeSquarePayrollTransferReversedDetails.paymentId` field. */
  TypeSquarePayrollTransferReversedDetailsPaymentIdAsc = 'typeSquarePayrollTransferReversedDetails_paymentId_ASC',
  /** Sorts descending by the `typeSquarePayrollTransferReversedDetails.paymentId` field. */
  TypeSquarePayrollTransferReversedDetailsPaymentIdDesc = 'typeSquarePayrollTransferReversedDetails_paymentId_DESC',
  /** Sorts ascending by the `typeTaxOnFeeDetails.paymentId` field. */
  TypeTaxOnFeeDetailsPaymentIdAsc = 'typeTaxOnFeeDetails_paymentId_ASC',
  /** Sorts descending by the `typeTaxOnFeeDetails.paymentId` field. */
  TypeTaxOnFeeDetailsPaymentIdDesc = 'typeTaxOnFeeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeThirdPartyFeeDetails.paymentId` field. */
  TypeThirdPartyFeeDetailsPaymentIdAsc = 'typeThirdPartyFeeDetails_paymentId_ASC',
  /** Sorts descending by the `typeThirdPartyFeeDetails.paymentId` field. */
  TypeThirdPartyFeeDetailsPaymentIdDesc = 'typeThirdPartyFeeDetails_paymentId_DESC',
  /** Sorts ascending by the `typeThirdPartyFeeRefundDetails.paymentId` field. */
  TypeThirdPartyFeeRefundDetailsPaymentIdAsc = 'typeThirdPartyFeeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeThirdPartyFeeRefundDetails.paymentId` field. */
  TypeThirdPartyFeeRefundDetailsPaymentIdDesc = 'typeThirdPartyFeeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `typeUndoGiftCardLoadFeeRefundDetails.paymentId` field. */
  TypeUndoGiftCardLoadFeeRefundDetailsPaymentIdAsc = 'typeUndoGiftCardLoadFeeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeUndoGiftCardLoadFeeRefundDetails.paymentId` field. */
  TypeUndoGiftCardLoadFeeRefundDetailsPaymentIdDesc = 'typeUndoGiftCardLoadFeeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `typeUndoProcessingFeeRefundDetails.paymentId` field. */
  TypeUndoProcessingFeeRefundDetailsPaymentIdAsc = 'typeUndoProcessingFeeRefundDetails_paymentId_ASC',
  /** Sorts descending by the `typeUndoProcessingFeeRefundDetails.paymentId` field. */
  TypeUndoProcessingFeeRefundDetailsPaymentIdDesc = 'typeUndoProcessingFeeRefundDetails_paymentId_DESC',
  /** Sorts ascending by the `type` field. */
  TypeAsc = 'type_ASC',
  /** Sorts descending by the `type` field. */
  TypeDesc = 'type_DESC'
}

/**
 * Input type used to specify filters on `Payout` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type PayoutFilterInput = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The amount of money involved in the payout. A positive amount indicates a
   * deposit, and a negative amount indicates a withdrawal. This amount is never zero.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  amountMoney?: InputMaybe<MoneyFilterInput>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PayoutFilterInput>>;
  /**
   * Used to filter on the `arrivalDate` field:
   *
   * > The calendar date, in ISO 8601 format (YYYY-MM-DD), when the payout is due
   * to arrive in the seller’s banking destination.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  arrivalDate?: InputMaybe<DateFilterInput>;
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp of when the payout was created and submitted for deposit to
   * the seller's banking destination, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /**
   * Used to filter on the `destination` field:
   *
   * > Information about the banking destination (such as a bank account, Square
   * checking account, or debit card) against which the payout was made.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  destination?: InputMaybe<DestinationFilterInput>;
  /**
   * Used to filter on the `endToEndId` field:
   *
   * > A unique ID for each Payout object that might also appear on the seller’s bank statement.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  endToEndId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `id` field:
   *
   * > A unique ID for the payout.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  id?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `location` field:
   *
   * > The ID of the location associated with the payout.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  location?: InputMaybe<LocationRefFilterInput>;
  /**
   * Used to filter on the `merchant` field:
   *
   * > The merchant that owns this payout.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  merchant?: InputMaybe<MerchantRefFilterInput>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<PayoutFilterInput>;
  /**
   * Used to filter on the `status` field:
   *
   * > Indicates the payout status.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  status?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `type` field:
   *
   * > Indicates the payout type.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<StringFilterInput>;
  /**
   * Used to filter on the `updatedAt` field:
   *
   * > The timestamp of when the payout was last updated, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  /**
   * Used to filter on the `version` field:
   *
   * > The version number, which is incremented each time an update is made to this payout record.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  version?: InputMaybe<IntFilterInput>;
};

/** Enumerates the ways `Payout`s can be sorted. */
export enum PayoutSortOrderInput {
  /** Sorts ascending by the `amountMoney.amount` field. */
  AmountMoneyAmountAsc = 'amountMoney_amount_ASC',
  /** Sorts descending by the `amountMoney.amount` field. */
  AmountMoneyAmountDesc = 'amountMoney_amount_DESC',
  /** Sorts ascending by the `amountMoney.currencyCode` field. */
  AmountMoneyCurrencyCodeAsc = 'amountMoney_currencyCode_ASC',
  /** Sorts descending by the `amountMoney.currencyCode` field. */
  AmountMoneyCurrencyCodeDesc = 'amountMoney_currencyCode_DESC',
  /** Sorts ascending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyAsc = 'amountMoney_currency_ASC',
  /** Sorts descending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyDesc = 'amountMoney_currency_DESC',
  /** Sorts ascending by the `arrivalDate` field. */
  ArrivalDateAsc = 'arrivalDate_ASC',
  /** Sorts descending by the `arrivalDate` field. */
  ArrivalDateDesc = 'arrivalDate_DESC',
  /** Sorts ascending by the `createdAt` field. */
  CreatedAtAsc = 'createdAt_ASC',
  /** Sorts descending by the `createdAt` field. */
  CreatedAtDesc = 'createdAt_DESC',
  /** Sorts ascending by the `destination.id` field. */
  DestinationIdAsc = 'destination_id_ASC',
  /** Sorts descending by the `destination.id` field. */
  DestinationIdDesc = 'destination_id_DESC',
  /** Sorts ascending by the `destination.type` field. */
  DestinationTypeAsc = 'destination_type_ASC',
  /** Sorts descending by the `destination.type` field. */
  DestinationTypeDesc = 'destination_type_DESC',
  /** Sorts ascending by the `endToEndId` field. */
  EndToEndIdAsc = 'endToEndId_ASC',
  /** Sorts descending by the `endToEndId` field. */
  EndToEndIdDesc = 'endToEndId_DESC',
  /** Sorts ascending by the `id` field. */
  IdAsc = 'id_ASC',
  /** Sorts descending by the `id` field. */
  IdDesc = 'id_DESC',
  /** Sorts ascending by the `location.id` field. */
  LocationIdAsc = 'location_id_ASC',
  /** Sorts descending by the `location.id` field. */
  LocationIdDesc = 'location_id_DESC',
  /** Sorts ascending by the `merchant.id` field. */
  MerchantIdAsc = 'merchant_id_ASC',
  /** Sorts descending by the `merchant.id` field. */
  MerchantIdDesc = 'merchant_id_DESC',
  /** Sorts ascending by the `status` field. */
  StatusAsc = 'status_ASC',
  /** Sorts descending by the `status` field. */
  StatusDesc = 'status_DESC',
  /** Sorts ascending by the `type` field. */
  TypeAsc = 'type_ASC',
  /** Sorts descending by the `type` field. */
  TypeDesc = 'type_DESC',
  /** Sorts ascending by the `updatedAt` field. */
  UpdatedAtAsc = 'updatedAt_ASC',
  /** Sorts descending by the `updatedAt` field. */
  UpdatedAtDesc = 'updatedAt_DESC',
  /** Sorts ascending by the `version` field. */
  VersionAsc = 'version_ASC',
  /** Sorts descending by the `version` field. */
  VersionDesc = 'version_DESC'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of withheld funds from a payment to cover a negative balance. It's an
 * installment to repay the amount from a dispute that had been offset during
 * Percentage Processing enrollment.
 */
export type PercentageProcessingRepaymentDetails = {
  __typename?: 'PercentageProcessingRepaymentDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `PercentageProcessingRepaymentDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type PercentageProcessingRepaymentDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of the reversal of a percentage processing repayment that happens for example when a refund is issued for a payment.
 */
export type PercentageProcessingRepaymentReversedDetails = {
  __typename?: 'PercentageProcessingRepaymentReversedDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `PercentageProcessingRepaymentReversedDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type PercentageProcessingRepaymentReversedDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Represents a phase, which can override subscription phases as defined by plan_id
 * Permissions: SUBSCRIPTIONS_READ
 */
export type Phase = {
  __typename?: 'Phase';
  /** id of order to be used in billing */
  order?: Maybe<Order>;
  /** index of phase in total subscription plan */
  ordinal?: Maybe<Scalars['Int']['output']>;
  /** the uid from the plan's phase in catalog */
  planPhaseUid?: Maybe<Scalars['UID']['output']>;
  /** id of subscription phase */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of the processing fee for a payment. If sellers opt for Gross
 * Settlement, i.e., direct bank withdrawal instead of deducting fees from daily
 * sales, the processing fee is recorded separately as a new payout entry, not part
 * of the CHARGE payout entry.
 */
export type ProcessingFeeDetails = {
  __typename?: 'ProcessingFeeDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ProcessingFeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ProcessingFeeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of the processing fee for a payment refund issued by sellers enrolled in
 * Gross Settlement. The refunded processing fee is recorded separately as a new
 * payout entry, not part of the REFUND payout entry.
 */
export type ProcessingFeeRefundDetails = {
  __typename?: 'ProcessingFeeRefundDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ProcessingFeeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ProcessingFeeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** Indicates the Square product used to generate a change. */
export enum Product {
  /** Square Appointments. */
  Appointments = 'APPOINTMENTS',
  /** A Square subscription (various products). */
  Billing = 'BILLING',
  /** Square Dashboard. */
  Dashboard = 'DASHBOARD',
  /** Square Connect APIs (for example, Orders API or Checkout API). */
  ExternalApi = 'EXTERNAL_API',
  /** Square Invoices. */
  Invoices = 'INVOICES',
  /** Item Library Import. */
  ItemLibraryImport = 'ITEM_LIBRARY_IMPORT',
  /** Square Online Store. */
  OnlineStore = 'ONLINE_STORE',
  /** A Square product that does not match any other value. */
  Other = 'OTHER',
  /** Square Payroll. */
  Payroll = 'PAYROLL',
  /** Square Point of Sale application. */
  SquarePos = 'SQUARE_POS'
}

/** The query entry point for the entire schema. */
export type Query = {
  __typename?: 'Query';
  /**
   * Returns booking availability by the specified filter.
   * Permissions:APPOINTMENTS_READ
   */
  bookingAvailability?: Maybe<BookingAvailabilityConnection>;
  /**
   * Returns booking(s) by the specified filter.
   * Permissions:APPOINTMENTS_READ
   */
  bookings?: Maybe<BookingConnection>;
  /**
   * Returns BreakTypes by its filter.
   *
   * Permissions:TIMECARDS_SETTINGS_READ
   */
  breakTypes?: Maybe<BreakTypeConnection>;
  /**
   * Returns booking(s) by the specified filter.
   * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
   */
  businessBookingProfile?: Maybe<BusinessBookingProfileConnection>;
  /**
   * Retrieves a list of cards owned by the merchant. A max of 25 cards will be returned.
   *
   * Permissions:PAYMENTS_READ
   */
  cardsOnFile?: Maybe<CardOnFileConnection>;
  /** Returns CashDrawerShiftEvents by its filter. */
  cashDrawerShiftEvents?: Maybe<CashDrawerShiftEventConnection>;
  /** Returns CashDrawerShifts by its filter. */
  cashDrawerShifts?: Maybe<CashDrawerShiftConnection>;
  /**
   * Query for catalog
   *
   * Permissions:ITEMS_READ
   */
  catalog?: Maybe<CatalogObjectConnection>;
  /**
   * Query for CatalogItems
   *
   * Permissions:ITEMS_READ
   */
  catalogItems?: Maybe<CatalogItemConnection>;
  /** Returns the Merchant the access token is granted permission to view */
  currentMerchant?: Maybe<Merchant>;
  /**
   * A list of CustomAttributeDefinitions.
   *
   * Permissions:CUSTOMERS_READ
   */
  customerCustomAttributeDefinitions?: Maybe<CustomerCustomAttributeDefinitionConnection>;
  /**
   * A list of Customer.
   *
   * Permissions:CUSTOMERS_READ
   */
  customers?: Maybe<CustomerConnection>;
  /**
   * Returns Gift Card activities by the specified filter.
   * Permissions:GIFTCARDS_READ
   */
  giftCardActivities?: Maybe<GiftCardActivityConnection>;
  /**
   * Returns Gift Cards by the specified filter.
   * Permissions:GIFTCARDS_READ
   */
  giftCards?: Maybe<SquareGiftCardConnection>;
  /**
   * Retrieve InventoryChanges by the specified filter
   *
   * Permissions:INVENTORY_READ
   */
  inventoryChanges?: Maybe<InventoryChangeConnection>;
  /**
   * Retrieve InventoryCounts by the specified filter
   *
   * Permissions:INVENTORY_READ
   */
  inventoryCounts?: Maybe<InventoryCountConnection>;
  /**
   * Returns booking(s) by the specified filter.
   * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
   */
  locationBookingProfiles?: Maybe<LocationBookingProfileConnection>;
  /**
   * Returns Loyalty Accounts by the specified filter.
   * Permissions:LOYALTY_READ
   */
  loyaltyAccounts?: Maybe<LoyaltyAccountConnection>;
  /**
   * Returns Loyalty Events by the specified filter.
   * Permissions:LOYALTY_READ
   */
  loyaltyEvents?: Maybe<LoyaltyEventConnection>;
  /**
   * Returns Loyalty Program by the specified filter.
   * Permissions:LOYALTY_READ
   */
  loyaltyProgram?: Maybe<LoyaltyProgramConnection>;
  /**
   * Returns Loyalty Promotions by the specified filter.
   * Permissions:LOYALTY_READ
   */
  loyaltyPromotions?: Maybe<LoyaltyPromotionConnection>;
  /**
   * Returns Loyalty Rewards by the specified filter.
   * Permissions:LOYALTY_READ
   */
  loyaltyRewards?: Maybe<LoyaltyRewardConnection>;
  /**
   * Returns Merchants by IDs. Order is not guaranteed.
   *
   * Permissions:MERCHANT_PROFILE_READ
   */
  merchants?: Maybe<MerchantConnection>;
  /**
   * Returns Orders by the specified filter.
   *
   * Permissions:ORDERS_READ
   */
  orders?: Maybe<OrderConnection>;
  /** Fetches `PaymentRefund`s based on the provided arguments. */
  paymentRefunds?: Maybe<PaymentRefundConnection>;
  /** Fetches `Payment`s based on the provided arguments. */
  payments?: Maybe<PaymentConnection>;
  /** Fetches `PayoutEntry`s based on the provided arguments. */
  payoutEntries?: Maybe<PayoutEntryConnection>;
  /** Fetches `Payout`s based on the provided arguments. */
  payouts?: Maybe<PayoutConnection>;
  /**
   * Returns Shifts by its filter.
   *
   * Permissions:TIMECARDS_READ
   */
  shifts?: Maybe<ShiftConnection>;
  /**
   * Returns subscription events by the specified filter.
   * Permissions:SUBSCRIPTIONS_READ
   */
  subscriptionEvents?: Maybe<SubscriptionEventConnection>;
  /**
   * Returns subscription(s) by the specified filter.
   * Permissions:SUBSCRIPTIONS_READ
   */
  subscriptions?: Maybe<SubscriptionConnection>;
  /**
   * Returns booking(s) by the specified filter.
   * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
   */
  teamMemberBookingProfiles?: Maybe<TeamMemberBookingProfileConnection>;
  /**
   * Returns TeamMemberWages by its filter.
   *
   * Permissions:EMPLOYEES_READ
   */
  teamMemberWages?: Maybe<TeamMemberWageConnection>;
  /**
   * Returns WorkweekConfigs by its filter.
   *
   * Permissions:TIMECARDS_SETTINGS_READ
   */
  workweekConfigs?: Maybe<WorkweekConfigConnection>;
};


/** The query entry point for the entire schema. */
export type QueryBookingAvailabilityArgs = {
  filter: AvailabilityFilter;
};


/** The query entry point for the entire schema. */
export type QueryBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: BookingFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryBreakTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BreakTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryBusinessBookingProfileArgs = {
  filter: BusinessBookingProfileFilter;
};


/** The query entry point for the entire schema. */
export type QueryCardsOnFileArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: CardOnFileFilter;
  orderBy?: InputMaybe<Array<SortOrder>>;
};


/** The query entry point for the entire schema. */
export type QueryCashDrawerShiftEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CashDrawerShiftEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryCashDrawerShiftsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CashDrawerShiftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SortOrder>>>;
};


/** The query entry point for the entire schema. */
export type QueryCatalogArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CatalogObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryCatalogItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CatalogItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CatalogSort>>;
};


/** The query entry point for the entire schema. */
export type QueryCustomerCustomAttributeDefinitionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: CustomAttributeDefinitionFilterInput;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: CustomerFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryGiftCardActivitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: GiftCardActivityFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SortOrder>>;
};


/** The query entry point for the entire schema. */
export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: GiftCardFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryInventoryChangesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: InventoryChangeFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryInventoryCountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: InventoryCountFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryLocationBookingProfilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: LocationBookingProfileFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryLoyaltyAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: LoyaltyAccountFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryLoyaltyEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: LoyaltyEventFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryLoyaltyProgramArgs = {
  filter: LoyaltyProgramFilter;
};


/** The query entry point for the entire schema. */
export type QueryLoyaltyPromotionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: LoyaltyPromotionFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryLoyaltyRewardsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: LoyaltyRewardFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryMerchantsArgs = {
  filter: MerchantFilterInput;
};


/** The query entry point for the entire schema. */
export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: OrderFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderSort>>;
};


/** The query entry point for the entire schema. */
export type QueryPaymentRefundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentRefundFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRefundSortOrder>>;
};


/** The query entry point for the entire schema. */
export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentSortOrder>>;
};


/** The query entry point for the entire schema. */
export type QueryPayoutEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PayoutEntryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PayoutEntrySortOrderInput>>;
};


/** The query entry point for the entire schema. */
export type QueryPayoutsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PayoutFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PayoutSortOrderInput>>;
};


/** The query entry point for the entire schema. */
export type QueryShiftsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ShiftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ShiftSort>>>;
};


/** The query entry point for the entire schema. */
export type QuerySubscriptionEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: SubscriptionEventFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QuerySubscriptionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: SubscriptionFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryTeamMemberBookingProfilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: TeamMemberBookingProfileFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryTeamMemberWagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TeamMemberWageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The query entry point for the entire schema. */
export type QueryWorkweekConfigsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkweekConfigFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Represents a refund processed for a Square transaction.
 * Permissions: ORDERS_READ
 */
export type Refund = {
  __typename?: 'Refund';
  /**
   * The amount of money refunded to the buyer.
   * @deprecated Use `amountMoney` instead.
   */
  amount?: Maybe<Money>;
  /** The amount of money refunded to the buyer. */
  amountMoney?: Maybe<Money>;
  /**
   * The timestamp for when the refund was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The refund's unique ID. */
  id: Scalars['ID']['output'];
  /** The ID of the refund's associated location. */
  location?: Maybe<Location>;
  /**
   * The amount of Square processing fee money refunded to the *merchant*.
   * @deprecated Use `processingFeeMoney` instead.
   */
  processingFee?: Maybe<Money>;
  /** The amount of Square processing fee money refunded to the *merchant*. */
  processingFeeMoney?: Maybe<Money>;
  /** The reason for the refund being issued. */
  reason?: Maybe<Scalars['String']['output']>;
  /**
   * The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`,
   * or `FAILED`).
   */
  status?: Maybe<RefundStatus>;
  /** The ID of the refunded tender. */
  tender?: Maybe<OrderTender>;
  /** The ID of the transaction that the refunded tender is part of. */
  transactionId?: Maybe<Scalars['ID']['output']>;
};

/** Indicates a refund's current status. */
export enum RefundStatus {
  /** The refund has been approved by Square. */
  Approved = 'APPROVED',
  /** The refund failed. */
  Failed = 'FAILED',
  /** The refund is pending. */
  Pending = 'PENDING',
  /** The refund has been rejected by Square. */
  Rejected = 'REJECTED'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of fees released for adjustments.
 */
export type ReleaseAdjustmentDetails = {
  __typename?: 'ReleaseAdjustmentDetails';
  /** ID of the payment associated with the release adjustment. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ReleaseAdjustmentDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ReleaseAdjustmentDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with the release adjustment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of fees paid for funding risk reserve.
 */
export type ReserveHoldDetails = {
  __typename?: 'ReserveHoldDetails';
  /** Unique ID for the payment related to the reserve hold. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ReserveHoldDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ReserveHoldDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to the reserve hold.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of fees released from risk reserve.
 */
export type ReserveReleaseDetails = {
  __typename?: 'ReserveReleaseDetails';
  /** Unique ID for the payment related to the reserve release. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ReserveReleaseDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ReserveReleaseDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to the reserve release.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * A loyalty reward.
 *
 * Loyalty rewards are not currently fully represented in graphql, and their details must be retrieved through the
 * REST API.
 *
 * Permissions:LOYALTY_READ
 */
export type Reward = {
  __typename?: 'Reward';
  /** The Square-assigned ID of the loyalty reward. */
  id: Scalars['ID']['output'];
  /** The reward tier used to create the reward. */
  tier?: Maybe<RewardTier>;
};

/**
 * A loyalty program reward tier.
 *
 * Loyalty reward tiers are not currently fully represented in graphql, and their details must be retrieved through the
 * REST API.
 *
 * Permissions:LOYALTY_READ
 */
export type RewardTier = {
  __typename?: 'RewardTier';
  /** The Square-assigned ID of the reward tier. */
  id: Scalars['ID']['output'];
};

/** The query used to search for buyer-accessible availabilities of bookings. */
export type SearchAvailabilityQuery = {
  /** The query filter to search for buyer-accessible availabilities of existing bookings. */
  filter?: InputMaybe<AvailabilityFilter>;
};

/** Specifies which timestamp to use to sort `SearchOrder` results. */
export enum SearchOrdersSortField {
  /**
   * The time when the order was closed, in RFC-3339 format. If you use this
   * value, you must also set a `StateFilter` with closed states. If you are also
   * filtering for a time range in this query, you must set the `CLOSED_AT`
   * field in your `DateTimeFilter`.
   */
  ClosedAt = 'CLOSED_AT',
  /**
   * The time when the order was created, in RFC-3339 format. If you are also
   * filtering for a time range in this query, you must set the `CREATED_AT`
   * field in your `DateTimeFilter`.
   */
  CreatedAt = 'CREATED_AT',
  /**
   * The time when the order last updated, in RFC-3339 format. If you are also
   * filtering for a time range in this query, you must set the `UPDATED_AT`
   * field in your `DateTimeFilter`.
   */
  UpdatedAt = 'UPDATED_AT'
}

/** A query filter to search for buyer-accessible appointment segments by. */
export type SegmentFilter = {
  /** The ID of the CatalogItemVariation object representing the service booked in this segment. */
  serviceVariationId: Scalars['ID']['input'];
  /**
   * A query filter to search for buyer-accessible appointment segments with service-providing team members matching the specified list of team member IDs.  Supported query expressions are
   * - `ANY`: return the appointment segments with team members whose IDs match any member in this list.
   * - `NONE`: return the appointment segments with team members whose IDs are not in this list.
   * - `ALL`: not supported.
   *
   * When no expression is specified, any service-providing team member is eligible to fulfill the Booking.
   */
  teamMemberIdFilter?: InputMaybe<FilterValue>;
};

/**
 * A record of the hourly rate, start, and end times for a single work shift
 * for an employee.This might include a record of the start and end times for breaks
 * taken during the shift.
 * Permissions: TIMECARDS_READ
 */
export type Shift = {
  __typename?: 'Shift';
  /** A list of all the paid or unpaid breaks that were taken during this shift. */
  breaks?: Maybe<Array<Maybe<Break>>>;
  /**
   * A read-only timestamp in RFC 3339 format; presented in UTC.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The tips declared by the team member for the shift. */
  declaredCashTipMoney?: Maybe<Money>;
  /**
   * RFC 3339; shifted to the timezone + offset. Precision up to the minute is
   * respected; seconds are truncated.
   */
  endAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UUID for this object. */
  id: Scalars['ID']['output'];
  /**
   * The ID of the location this shift occurred at. The location should be based on
   * where the employee clocked in.
   */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * RFC 3339; shifted to the location timezone + offset. Precision up to the
   * minute is respected; seconds are truncated.
   */
  startAt?: Maybe<Scalars['DateTime']['output']>;
  /** Describes the working state of the current `Shift`. */
  status?: Maybe<ShiftStatus>;
  /** The ID of the team member this shift belongs to. Replaced `employee_id` at version "2020-08-26". */
  teamMember?: Maybe<TeamMember>;
  /**
   * The read-only convenience value that is calculated from the location based
   * on the `location_id`. Format: the IANA timezone database identifier for the
   * location timezone.
   */
  timezone?: Maybe<Scalars['String']['output']>;
  /**
   * A read-only timestamp in RFC 3339 format; presented in UTC.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If not provided,
   * Square executes a blind write; potentially overwriting data from another
   * write.
   */
  version?: Maybe<Scalars['JsonSafeLong']['output']>;
  /**
   * Job and pay related information. If the wage is not set on create, it defaults to a wage
   * of zero. If the title is not set on create, it defaults to the name of the role the employee
   * is assigned to, if any.
   */
  wage?: Maybe<ShiftWage>;
};

/**
 * A list of Shifts.
 *
 * Permissions:TIMECARDS_READ
 */
export type ShiftConnection = {
  __typename?: 'ShiftConnection';
  /** List of shifts */
  nodes: Array<Shift>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Defines a filter used in a search for `Shift` records.`AND` logic is
 * used by Square's servers to apply each filter property specified.
 * Permissions: TIMECARDS_SETTINGS_READ
 */
export type ShiftFilter = {
  /** Fetch the `Shift` instances that end in the time range - Inclusive. */
  endAt?: InputMaybe<TimeRangeFilter>;
  /** Fetch shifts for the specified ids. */
  id?: InputMaybe<BasicIdFilter>;
  /** Fetch shifts for the specified location. */
  locationId?: InputMaybe<BasicIdFilter>;
  /** Fetch shifts for the specified merchant. */
  merchantId: BasicIdFilter;
  /** Fetch `Shift` instances that start in the time range - Inclusive. */
  startAt?: InputMaybe<TimeRangeFilter>;
  /** Fetch a `Shift` instance by `Shift.status`. */
  status?: InputMaybe<ShiftStatusInput>;
  /** Fetch shifts for the specified team members. Replaced `employee_ids` at version "2020-08-26". */
  teamMemberId?: InputMaybe<BasicIdFilter>;
  /** Fetch the `Shift` instances based on the workday date range. */
  workday?: InputMaybe<ShiftWorkdayFilter>;
};

export enum ShiftSort {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EndAtAsc = 'endAt_ASC',
  EndAtDesc = 'endAt_DESC',
  StartAtAsc = 'startAt_ASC',
  StartAtDesc = 'startAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Enumerates the possible status of a `Shift`. */
export enum ShiftStatus {
  /** Employee started and ended a work shift. */
  Closed = 'CLOSED',
  /** Employee started a work shift and the shift is not complete */
  Open = 'OPEN'
}

/** Specifies the `status` of `Shift` records to be returned. */
export enum ShiftStatusInput {
  /** Shifts that have been started and ended. */
  Closed = 'CLOSED',
  /** Shifts that have been started and not ended. */
  Open = 'OPEN'
}

/**
 * The hourly wage rate used to compensate an employee for this shift.
 * Permissions: TIMECARDS_SETTINGS_READ
 */
export type ShiftWage = {
  __typename?: 'ShiftWage';
  /**
   * Can be a custom-set hourly wage or the calculated effective hourly
   * wage based on the annual wage and hours worked per week.
   */
  hourlyRate?: Maybe<Money>;
  /**
   * The id of the job performed during this shift. Square
   * labor-reporting UIs might group shifts together by id. This cannot be used to retrieve the job.
   */
  jobId?: Maybe<Scalars['ID']['output']>;
  /** Whether team members are eligible for tips when working this job. */
  tipEligible?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the job performed during this shift. */
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * A `Shift` search query filter parameter that sets a range of days that
 * a `Shift` must start or end in before passing the filter condition.
 * Permissions: TIMECARDS_SETTINGS_READ
 */
export type ShiftWorkdayFilter = {
  /** Dates for fetching the shifts. */
  dateRange?: InputMaybe<DateRangeFilter>;
  /**
   * Location-specific timezones convert workdays to datetime filters.
   * Every location included in the query must have a timezone or this field
   * must be provided as a fallback. Format: the IANA timezone database
   * identifier for the relevant timezone.
   */
  defaultTimezone?: InputMaybe<Scalars['TimeZone']['input']>;
  /** The strategy on which the dates are applied. */
  matchShiftsBy?: InputMaybe<ShiftWorkdayMatcherInput>;
};

/** Defines the logic used to apply a workday filter. */
export enum ShiftWorkdayMatcherInput {
  /** All shifts that end on or before the specified workday */
  EndAt = 'END_AT',
  /** All shifts that start between the start and end workdays (inclusive) */
  Intersection = 'INTERSECTION',
  /** All shifts that start on or after the specified workday */
  StartAt = 'START_AT'
}

/** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
export enum SortOrder {
  /** The results are returned in ascending (e.g., oldest-first or A-Z) order. */
  Asc = 'ASC',
  /** The results are returned in descending (e.g., newest-first or Z-A) order. */
  Desc = 'DESC'
}

/**
 * Represents information about the application used to generate a change.
 * Permissions: ITEMS_READ
 */
export type SourceApplication = {
  __typename?: 'SourceApplication';
  /**
   * __Read only__ The Square-assigned ID of the application. This field is used only if the
   * product type is `EXTERNAL_API`.
   */
  applicationId?: Maybe<Scalars['ID']['output']>;
  /**
   * __Read only__ The display name of the application
   * (for example, `"Custom Application"` or `"Square POS 4.74 for Android"`).
   */
  name?: Maybe<Scalars['String']['output']>;
  /** __Read only__ The product type of the application. */
  product?: Maybe<Product>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about Square Account payments.
 */
export type SquareAccountPaymentDetails = {
  __typename?: 'SquareAccountPaymentDetails';
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /** Unique identifier for the payment source used for this payment. */
  paymentSourceToken?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input type used to specify filters on `SquareAccountPaymentDetails` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type SquareAccountPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `errors` field:
   *
   * > Information about errors encountered during the request.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  errors?: InputMaybe<ErrorFieldsListFilterInput>;
  /**
   * Used to filter on the `paymentSourceToken` field:
   *
   * > Unique identifier for the payment source used for this payment.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  paymentSourceToken?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of capital merchant cash advance (MCA) assessments.
 */
export type SquareCapitalPaymentDetails = {
  __typename?: 'SquareCapitalPaymentDetails';
  /** ID of the payment associated with the MCA assessment. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `SquareCapitalPaymentDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type SquareCapitalPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with the MCA assessment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of capital merchant cash advance (MCA) assessment refunds.
 */
export type SquareCapitalReversedPaymentDetails = {
  __typename?: 'SquareCapitalReversedPaymentDetails';
  /** ID of the payment associated with the MCA assessment refund. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `SquareCapitalReversedPaymentDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type SquareCapitalReversedPaymentDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with the MCA assessment refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Represents a Square gift card.
 * Permissions: GIFTCARDS_READ
 */
export type SquareGiftCard = {
  __typename?: 'SquareGiftCard';
  /** The current gift card balance. This balance is always greater than or equal to zero. */
  balanceMoney?: Maybe<Money>;
  /**
   * The timestamp when the gift card was created, in RFC 3339 format.
   * In the case of a digital gift card, it is the time when you create a card
   * (using the Square Point of Sale application, Seller Dashboard, or Gift Cards API).
   * In the case of a plastic gift card, it is the time when Square associates the card with the
   * seller at the time of activation.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The IDs of the customer profiles to whom this gift card is linked. */
  customers?: Maybe<Array<Maybe<Customer>>>;
  /**
   * The gift card account number (GAN). Buyers can use the GAN to make purchases or check
   * the gift card balance.
   */
  gan?: Maybe<Scalars['String']['output']>;
  /** The source that generated the gift card account number (GAN). The default value is `SQUARE`. */
  ganSource?: Maybe<GiftCardGanSource>;
  /** The Square-assigned ID of the gift card. */
  id: Scalars['ID']['output'];
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The current gift card state. */
  state?: Maybe<GiftCardStatus>;
  /** The gift card type. */
  type?: Maybe<GiftCardType>;
};

/**
 * A list of GiftCards.
 * Permissions: GIFTCARDS_READ
 */
export type SquareGiftCardConnection = {
  __typename?: 'SquareGiftCardConnection';
  /** List of Gift Card. */
  nodes?: Maybe<Array<SquareGiftCard>>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a payroll payment that was transferred to a team member’s bank account.
 */
export type SquarePayrollTransferDetails = {
  __typename?: 'SquarePayrollTransferDetails';
  /** The ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `SquarePayrollTransferDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type SquarePayrollTransferDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > The ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a payroll payment to a team member’s bank account that was deposited back to the seller’s account by Square.
 */
export type SquarePayrollTransferReversedDetails = {
  __typename?: 'SquarePayrollTransferReversedDetails';
  /** The ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `SquarePayrollTransferReversedDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type SquarePayrollTransferReversedDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > The ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** An enumeration of Square products. */
export enum SquareProduct {
  BuyerDashboard = 'BUYER_DASHBOARD',
  ConnectApi = 'CONNECT_API',
  Dashboard = 'DASHBOARD',
  GiftCard = 'GIFT_CARD',
  Invoices = 'INVOICES',
  ReaderSdk = 'READER_SDK',
  RegisterClient = 'REGISTER_CLIENT',
  SquareLocal = 'SQUARE_LOCAL',
  SquareProfile = 'SQUARE_PROFILE',
  UnknownSquareProduct = 'UNKNOWN_SQUARE_PRODUCT',
  VirtualTerminal = 'VIRTUAL_TERMINAL',
  Web = 'WEB'
}

/**
 * Represents a subscription purchased by a customer.For more information, see
 * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
 * Permissions: SUBSCRIPTIONS_READ
 */
export type SquareSubscription = {
  __typename?: 'SquareSubscription';
  /**
   * The list of scheduled actions on this subscription. It is set only in the response from
   * [RetrieveSubscription](api-endpoint:Subscriptions-RetrieveSubscription) with the query parameter
   * of `include=actions` or from
   * [SearchSubscriptions](api-endpoint:Subscriptions-SearchSubscriptions) with the input parameter
   * of `include:["actions"]`.
   */
  actions?: Maybe<Array<Maybe<SubscriptionAction>>>;
  /**
   * The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) to cancel the subscription,
   * when the subscription status changes to `CANCELED` and the subscription billing stops.
   *
   * If this field is not set, the subscription ends according its subscription plan.
   *
   * This field cannot be updated, other than being cleared.
   */
  canceledDate?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the [subscriber's](entity:Customer) card
   * used to charge for the subscription.
   */
  card?: Maybe<CardOnFile>;
  /**
   * The `YYYY-MM-DD`-formatted date up to when the subscriber is invoiced for the
   * subscription.
   *
   * After the invoice is sent for a given billing period,
   * this date will be the last day of the billing period.
   * For example,
   * suppose for the month of May a subscriber gets an invoice
   * (or charged the card) on May 1. For the monthly billing scenario,
   * this date is then set to May 31.
   */
  chargedThroughDate?: Maybe<Scalars['String']['output']>;
  /**
   * The timestamp when the subscription was created, in RFC 3339 format.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the subscribing customer profile. */
  customer?: Maybe<Customer>;
  /** The Square-assigned ID of the subscription. */
  id: Scalars['ID']['output'];
  /**
   * The IDs of the invoices created for the
   * subscription, listed in order when the invoices were created
   * (newest invoices appear first).
   */
  invoiceIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The ID of the location associated with the subscription. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The day of the month on which the subscription will issue invoices and publish orders. */
  monthlyBillingAnchorDate?: Maybe<Scalars['Int']['output']>;
  /** array of phases for this subscription */
  phases?: Maybe<Array<Maybe<Phase>>>;
  /** The ID of the subscribed-to subscription plan variation. */
  planVariationId?: Maybe<Scalars['ID']['output']>;
  /**
   * A custom price which overrides the cost of a subscription plan variation with `STATIC` pricing.
   * This field does not affect itemized subscriptions with `RELATIVE` pricing. Instead,
   * you should edit the Subscription's [order template](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions#phases-and-order-templates).
   */
  priceOverrideMoney?: Maybe<Money>;
  /** The origination details of the subscription. */
  source?: Maybe<SubscriptionSource>;
  /** The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) to start the subscription. */
  startDate?: Maybe<Scalars['String']['output']>;
  /** The current status of the subscription. */
  status?: Maybe<SubscriptionStatus>;
  /**
   * The tax amount applied when billing the subscription. The
   * percentage is expressed in decimal form, using a `'.'` as the decimal
   * separator and without a `'%'` sign. For example, a value of `7.5`
   * corresponds to 7.5%.
   */
  taxPercentage?: Maybe<Scalars['String']['output']>;
  /**
   * Timezone that will be used in date calculations for the subscription.
   * Defaults to the timezone of the location based on `location_id`.
   * Format: the IANA Timezone Database identifier for the location timezone (for example, `America/Los_Angeles`).
   */
  timezone?: Maybe<Scalars['String']['output']>;
  /**
   * The version of the object. When updating an object, the version
   * supplied must match the version in the database, otherwise the write will
   * be rejected as conflicting.
   */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * Input type used to specify filters on `String` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type StringFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<StringFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` or an empty object is passed.
   */
  not?: InputMaybe<StringFilterInput>;
};

/**
 * Input type used to specify filters on elements of a `[String]` field.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type StringListElementFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<StringListElementFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Input type used to specify filters on `[String]` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type StringListFilterInput = {
  /**
   * Matches records where all of the provided sub-filters evaluate to true. This works just like an AND operator in SQL.
   *
   * Note: multiple filters are automatically ANDed together. This is only needed when you have multiple filters that can't
   * be provided on a single `StringListFilterInput` input because of collisions
   * between key names. For example, if you want to provide
   * multiple `anySatisfy: ...` filters, you could do `allOf: [{anySatisfy: ...}, {anySatisfy: ...}]`.
   *
   * Will be ignored when `null` is passed or an empty list is passed.
   */
  allOf?: InputMaybe<Array<StringListFilterInput>>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<StringListFilterInput>>;
  /**
   * Matches records where any of the list elements match the provided sub-filter.
   *
   * When `null` or an empty object is passed, matches all documents.
   */
  anySatisfy?: InputMaybe<StringListElementFilterInput>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<StringListFilterInput>;
};

/**
 * Represents an action as a pending change to a subscription.
 * Permissions: SUBSCRIPTIONS_READ
 */
export type SubscriptionAction = {
  __typename?: 'SubscriptionAction';
  /** The `YYYY-MM-DD`-formatted date when the action occurs on the subscription. */
  effectiveDate?: Maybe<Scalars['String']['output']>;
  /** The ID of an action scoped to a subscription. */
  id: Scalars['ID']['output'];
  /** The new billing anchor day value, for a `CHANGE_BILLING_ANCHOR_DATE` action. */
  monthlyBillingAnchorDate?: Maybe<Scalars['Int']['output']>;
  /** The target subscription plan variation that a subscription switches to, for a `SWAP_PLAN` action. */
  newPlanVariationId?: Maybe<Scalars['ID']['output']>;
  /** A list of Phases, to pass phase-specific information used in the swap. */
  phases?: Maybe<Array<Maybe<Phase>>>;
  /** The type of the action. */
  type?: Maybe<SubscriptionActionType>;
};

/** Supported types of an action as a pending change to a subscription. */
export enum SubscriptionActionType {
  /** The action to execute a scheduled cancellation of a subscription. */
  Cancel = 'CANCEL',
  /** A billing anchor date change action. */
  ChangeBillingAnchorDate = 'CHANGE_BILLING_ANCHOR_DATE',
  /** The action to execute a scheduled pause of a subscription. */
  Pause = 'PAUSE',
  /** The action to execute a scheduled resumption of a subscription. */
  Resume = 'RESUME',
  /** The action to execute a scheduled swap of a subscription plan in a subscription. */
  SwapPlan = 'SWAP_PLAN'
}

/** Determines the billing cadence of a Subscription */
export enum SubscriptionCadence {
  /** Once per year */
  Annual = 'ANNUAL',
  /** Once per day */
  Daily = 'DAILY',
  /** Once every four months */
  EveryFourMonths = 'EVERY_FOUR_MONTHS',
  /** Once every six months */
  EverySixMonths = 'EVERY_SIX_MONTHS',
  /** Once every two months */
  EveryTwoMonths = 'EVERY_TWO_MONTHS',
  /** Every two weeks */
  EveryTwoWeeks = 'EVERY_TWO_WEEKS',
  /** Once every two years */
  EveryTwoYears = 'EVERY_TWO_YEARS',
  /** Once per month */
  Monthly = 'MONTHLY',
  /** Once every 90 days */
  NinetyDays = 'NINETY_DAYS',
  /** Once every three months */
  Quarterly = 'QUARTERLY',
  /** Once every 60 days */
  SixtyDays = 'SIXTY_DAYS',
  /** Once every 30 days */
  ThirtyDays = 'THIRTY_DAYS',
  /** Once per week */
  Weekly = 'WEEKLY'
}

/**
 * A list of Subscription.
 * Permissions:SUBSCRIPTIONS_READ
 */
export type SubscriptionConnection = {
  __typename?: 'SubscriptionConnection';
  /** List of Subscription Event. */
  nodes: Array<SquareSubscription>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Describes changes to a subscription and the subscription status.
 * Permissions: SUBSCRIPTIONS_READ
 */
export type SubscriptionEvent = {
  __typename?: 'SubscriptionEvent';
  /** The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) when the subscription event occurred. */
  effectiveDate?: Maybe<Scalars['String']['output']>;
  /** The ID of the subscription event. */
  id: Scalars['ID']['output'];
  /** Additional information about the subscription event. */
  info?: Maybe<SubscriptionEventInfo>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The day-of-the-month the billing anchor date was changed to, if applicable. */
  monthlyBillingAnchorDate?: Maybe<Scalars['Int']['output']>;
  /** A list of Phases, to pass phase-specific information used in the swap. */
  phases?: Maybe<Array<Maybe<Phase>>>;
  /** The ID of the subscription plan variation associated with the subscription. */
  planVariationId?: Maybe<Scalars['ID']['output']>;
  /** Type of the subscription event. */
  subscriptionEventType?: Maybe<SubscriptionEventSubscriptionEventType>;
};

/**
 * A list of Subscription Event.
 * Permissions:SUBSCRIPTIONS_READ
 */
export type SubscriptionEventConnection = {
  __typename?: 'SubscriptionEventConnection';
  /** List of Subscription event. */
  nodes: Array<SubscriptionEvent>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted subscription events
 * returned
 * Permissions:SUBSCRIPTIONS_READ
 */
export type SubscriptionEventFilter = {
  /** The Square-assigned ID of the merchant. */
  merchantId: BasicIdFilter;
  /** The ID of the subscription events belong to. */
  subscriptionId: Scalars['ID']['input'];
};

/**
 * Provides information about the subscription event.
 * Permissions: SUBSCRIPTIONS_READ
 */
export type SubscriptionEventInfo = {
  __typename?: 'SubscriptionEventInfo';
  /** An info code indicating the subscription event that occurred. */
  code?: Maybe<SubscriptionEventInfoCode>;
  /** A human-readable explanation for the event. */
  detail?: Maybe<Scalars['String']['output']>;
};

/** Supported info codes of a subscription event. */
export enum SubscriptionEventInfoCode {
  /** The subscribing customer profile has been deleted. */
  CustomerDeleted = 'CUSTOMER_DELETED',
  /** The subscribing customer does not have an email. */
  CustomerNoEmail = 'CUSTOMER_NO_EMAIL',
  /** The subscribing customer does not have a name. */
  CustomerNoName = 'CUSTOMER_NO_NAME',
  /** The location cannot accept payments. */
  LocationCannotAcceptPayment = 'LOCATION_CANNOT_ACCEPT_PAYMENT',
  /** The location is not active. */
  LocationNotActive = 'LOCATION_NOT_ACTIVE',
  /** User-provided detail. */
  UserProvided = 'USER_PROVIDED'
}

/** Supported types of an event occurred to a subscription. */
export enum SubscriptionEventSubscriptionEventType {
  /** The billing anchor date was changed. */
  BillingAnchorDateChanged = 'BILLING_ANCHOR_DATE_CHANGED',
  /** The subscription was deactivated */
  DeactivateSubscription = 'DEACTIVATE_SUBSCRIPTION',
  /** The subscription was paused. */
  PauseSubscription = 'PAUSE_SUBSCRIPTION',
  /** The subscription plan was changed. */
  PlanChange = 'PLAN_CHANGE',
  /** The subscription was resumed. */
  ResumeSubscription = 'RESUME_SUBSCRIPTION',
  /** The subscription was started. */
  StartSubscription = 'START_SUBSCRIPTION',
  /** The subscription was stopped. */
  StopSubscription = 'STOP_SUBSCRIPTION'
}

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions returned by
 * the [SearchSubscriptions](api-endpoint:Subscriptions-SearchSubscriptions) endpoint.
 */
export type SubscriptionFilter = {
  /** A filter to select subscriptions based on the subscribing customer IDs. */
  customerId?: InputMaybe<BasicIdFilter>;
  /** A filter to select subscriptions based on the location. */
  locationId?: InputMaybe<BasicIdFilter>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** A filter to select subscriptions based on the source application. */
  sourceName?: InputMaybe<BasicStringFilter>;
  /** The ID of the subscription to retrieve. */
  subscriptionId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Describes a phase in a subscription plan variation.For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 * Permissions: ITEMS_READ
 */
export type SubscriptionPhase = {
  __typename?: 'SubscriptionPhase';
  /** The billing cadence of the phase. For example, weekly or monthly. This field cannot be changed after a `SubscriptionPhase` is created. */
  cadence?: Maybe<SubscriptionCadence>;
  /** The position this phase appears in the sequence of phases defined for the plan, indexed from 0. This field cannot be changed after a `SubscriptionPhase` is created. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** The number of `cadence`s the phase lasts. If not set, the phase never ends. Only the last phase can be indefinite. This field cannot be changed after a `SubscriptionPhase` is created. */
  periods?: Maybe<Scalars['Int']['output']>;
  /** The subscription pricing. */
  pricing?: Maybe<SubscriptionPricing>;
  /** The amount to bill for each `cadence`. Failure to specify this field results in a `MISSING_REQUIRED_PARAMETER` error at runtime. */
  recurringPriceMoney?: Maybe<Money>;
  /** The Square-assigned ID of the subscription phase. This field cannot be changed after a `SubscriptionPhase` is created. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Describes the pricing for the subscription.
 * Permissions: ITEMS_READ
 */
export type SubscriptionPricing = {
  __typename?: 'SubscriptionPricing';
  /** The ids of the discount catalog objects */
  discountIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The price of the subscription, if STATIC */
  priceMoney?: Maybe<Money>;
  /** RELATIVE or STATIC */
  type?: Maybe<SubscriptionPricingType>;
};

/** Determines the pricing of a Subscription */
export enum SubscriptionPricingType {
  /** Relative pricing */
  Relative = 'RELATIVE',
  /** Static pricing */
  Static = 'STATIC'
}

/**
 * The origination details of the subscription.
 * Permissions: SUBSCRIPTIONS_READ
 */
export type SubscriptionSource = {
  __typename?: 'SubscriptionSource';
  /**
   * The name used to identify the place (physical or digital) that
   * a subscription originates. If unset, the name defaults to the name
   * of the application that created the subscription.
   */
  name?: Maybe<Scalars['String']['output']>;
};

/** Supported subscription statuses. */
export enum SubscriptionStatus {
  /** The subscription is active. */
  Active = 'ACTIVE',
  /** The subscription is canceled. */
  Canceled = 'CANCELED',
  /** The subscription is deactivated. */
  Deactivated = 'DEACTIVATED',
  /** The subscription is paused. */
  Paused = 'PAUSED',
  /** The subscription is pending to start in the future. */
  Pending = 'PENDING'
}

/** When to calculate the taxes due on a cart. */
export enum TaxCalculationPhase {
  /** The fee is calculated based on the payment's subtotal. */
  TaxSubtotalPhase = 'TAX_SUBTOTAL_PHASE',
  /** The fee is calculated based on the payment's total. */
  TaxTotalPhase = 'TAX_TOTAL_PHASE'
}

/** Whether to the tax amount should be additional to or included in the CatalogItem price. */
export enum TaxInclusionType {
  /**
   * The tax is an additive tax. The tax amount is added on top of the
   * CatalogItemVariation price. For example, a $1.00 item with a 10% additive
   * tax would have a total cost to the buyer of $1.10.
   */
  Additive = 'ADDITIVE',
  /**
   * The tax is an inclusive tax. The tax amount is included in the
   * CatalogItemVariation price. For example, a $1.00 item with a 10% inclusive
   * tax would have a total cost to the buyer of $1.00, with $0.91 (91 cents) of
   * that total being the cost of the item and $0.09 (9 cents) being tax.
   */
  Inclusive = 'INCLUSIVE'
}

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of tax paid on fee amounts.
 */
export type TaxOnFeeDetails = {
  __typename?: 'TaxOnFeeDetails';
  /** ID of the payment on which the tax is applied. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `TaxOnFeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type TaxOnFeeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment on which the tax is applied.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * A record representing an individual team member for a business.
 *
 * Permissions:EMPLOYEES_READ
 */
export type TeamMember = {
  __typename?: 'TeamMember';
  /** The Square-issued ID of the team member. */
  id: Scalars['ID']['output'];
};

/**
 * The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider.
 * Permissions: APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type TeamMemberBookingProfile = {
  __typename?: 'TeamMemberBookingProfile';
  /** The description of the team member. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display name of the team member. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the team member can be booked through the Bookings API or the seller's online booking channel or site (`true`) or not (`false`). */
  isBookable?: Maybe<Scalars['Boolean']['output']>;
  /** The URL of the team member's image for the bookings profile. */
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the TeamMember object for the team member associated with the booking profile. */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Lists booking profiles for team members.
 * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type TeamMemberBookingProfileConnection = {
  __typename?: 'TeamMemberBookingProfileConnection';
  /** Lists booking profiles for team members. */
  nodes: Array<TeamMemberBookingProfile>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted team member
 * booking profile returned
 * Permissions:APPOINTMENTS_BUSINESS_SETTINGS_READ
 */
export type TeamMemberBookingProfileFilter = {
  /** Indicates whether to include only bookable team members in the returned result (true) or not (false). */
  bookableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** The location for which to retrieve bookings. If this is not set, all locations' bookings are retrieved. */
  locationId?: InputMaybe<Scalars['ID']['input']>;
  /** The Square-assigned ID of the merchant. */
  merchantId: BasicIdFilter;
  /**
   * A non-empty list of IDs of team members whose booking profiles you want to retrieve.
   *
   * Min Length 1 Max Length 10
   */
  teamMemberId?: InputMaybe<BasicIdFilter>;
};

/**
 * The hourly wage rate that a team member earns on a `Shift` for doing the job
 * specified by the `title` property of this object.
 * Permissions: EMPLOYEES_READ
 */
export type TeamMemberWage = {
  __typename?: 'TeamMemberWage';
  /**
   * Can be a custom-set hourly wage or the calculated effective hourly
   * wage based on the annual wage and hours worked per week.
   */
  hourlyRate?: Maybe<Money>;
  /** The UUID for this object. */
  id: Scalars['ID']['output'];
  /**
   * An identifier for the job that this wage relates to. This cannot be
   * used to retrieve the job.
   */
  jobId?: Maybe<Scalars['ID']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The `TeamMember` that this wage is assigned to. */
  teamMember?: Maybe<TeamMember>;
  /** Whether team members are eligible for tips when working this job. */
  tipEligible?: Maybe<Scalars['Boolean']['output']>;
  /** The job title that this wage relates to. */
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * A list of TeamMemberWages.
 *
 * Permissions:EMPLOYEES_READ
 */
export type TeamMemberWageConnection = {
  __typename?: 'TeamMemberWageConnection';
  /** List of shifts */
  nodes: Array<TeamMemberWage>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** TeamMemberWageFilter is used for filtering a query with TeamMemberWage */
export type TeamMemberWageFilter = {
  /** Fetch TeamMemberWages for the specified ids. */
  id?: InputMaybe<BasicIdFilter>;
  /** Fetch TeamMemberWages for the specified merchant. */
  merchantId: BasicIdFilter;
  /** Fetch TeamMemberWages for the specified team member. */
  teamMemberId?: InputMaybe<BasicIdFilter>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of fees collected by a third-party platform.
 */
export type ThirdPartyFeeDetails = {
  __typename?: 'ThirdPartyFeeDetails';
  /** ID of the payment related to the third-party fee. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ThirdPartyFeeDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ThirdPartyFeeDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment related to the third-party fee.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of refunded fees from a third-party platform.
 */
export type ThirdPartyFeeRefundDetails = {
  __typename?: 'ThirdPartyFeeRefundDetails';
  /** Unique ID for the payment related to the third-party fee refund. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `ThirdPartyFeeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type ThirdPartyFeeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment related to the third-party fee refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/** Input type used to specify filters on TimeRange. */
export type TimeRangeFilter = {
  /** A datetime value in RFC 3339 format indicating when the time range ends. */
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** A datetime value in RFC 3339 format indicating when the time range starts. */
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a refund for an existing card payment.
 */
export type TypeRefundDetails = {
  __typename?: 'TypeRefundDetails';
  /** Unique ID for the payment. */
  paymentId: Scalars['ID']['output'];
  /** Unique ID for the refund. */
  refundId?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input type used to specify filters on `TypeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type TypeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > Unique ID for the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
  /**
   * Used to filter on the `refundId` field:
   *
   * > Unique ID for the refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  refundId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a reversed refund for a fee charged during the sale or reload of a gift card.
 */
export type UndoGiftCardLoadFeeRefundDetails = {
  __typename?: 'UndoGiftCardLoadFeeRefundDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `UndoGiftCardLoadFeeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type UndoGiftCardLoadFeeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Permissions: PAYOUTS_READ
 *
 * Details of a reversed processing fee for a payment refund in a Gross Settlement payment.
 */
export type UndoProcessingFeeRefundDetails = {
  __typename?: 'UndoProcessingFeeRefundDetails';
  /** ID of the payment associated with this activity. */
  paymentId: Scalars['ID']['output'];
};

/**
 * Input type used to specify filters on `UndoProcessingFeeRefundDetails` fields.
 *
 * Will be ignored if passed as an empty object (or as `null`).
 */
export type UndoProcessingFeeRefundDetailsFilterInput = {
  /**
   * Used to filter on the `paymentId` field:
   *
   * > ID of the payment associated with this activity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilterInput>;
};

/**
 * Input type used to specify filters on `Url` fields.
 *
 * Will match all documents if passed as an empty object (or as `null`).
 */
export type UrlFilterInput = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * When `null` is passed, matches all documents.
   * When an empty list is passed, this part of the filter matches no documents.
   */
  anyOf?: InputMaybe<Array<UrlFilterInput>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * When `null` is passed, matches all documents. When an empty list is passed,
   * this part of the filter matches no documents. When `null` is passed in the
   * list, this part of the filter matches records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Url']['input']>>>;
  /**
   * Matches records where the provided sub-filter evaluates to false.
   * This works just like a NOT operator in SQL.
   *
   * When `null` or an empty object is passed, matches no documents.
   */
  not?: InputMaybe<UrlFilterInput>;
};

/** The days of the week. */
export enum Weekday {
  /** Friday */
  Fri = 'FRI',
  /** Monday */
  Mon = 'MON',
  /** Saturday */
  Sat = 'SAT',
  /** Sunday */
  Sun = 'SUN',
  /** Thursday */
  Thu = 'THU',
  /** Tuesday */
  Tue = 'TUE',
  /** Wednesday */
  Wed = 'WED'
}

/**
 * Sets the day of the week and hour of the day that a business starts a
 * workweek.This is used to calculate overtime pay.
 * Permissions: TIMECARDS_SETTINGS_READ
 */
export type WorkweekConfig = {
  __typename?: 'WorkweekConfig';
  /**
   * A read-only timestamp in RFC 3339 format; presented in UTC.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UUID for this object. */
  id: Scalars['ID']['output'];
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The local time at which a business week starts. Represented as a
   * string in `HH:MM` format (`HH:MM:SS` is also accepted, but seconds are
   * truncated).
   */
  startOfDayLocalTime?: Maybe<Scalars['String']['output']>;
  /**
   * The day of the week on which a business week starts for
   * compensation purposes.
   */
  startOfWeek?: Maybe<Weekday>;
  /**
   * A read-only timestamp in RFC 3339 format; presented in UTC.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC:  2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset:  2020-01-25T18:25:34-08:00
   */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If not provided,
   * Square executes a blind write; potentially overwriting data from another
   * write.
   */
  version?: Maybe<Scalars['JsonSafeLong']['output']>;
};

/**
 * A list of WorkweekConfigs.
 *
 * Permissions:TIMECARDS_SETTINGS_READ
 */
export type WorkweekConfigConnection = {
  __typename?: 'WorkweekConfigConnection';
  /** List of shifts */
  nodes: Array<WorkweekConfig>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** WorkweekConfigFilter is used for filtering a query with WorkweekConfig */
export type WorkweekConfigFilter = {
  /** Fetch WorkweekConfig for the specified ids. */
  id?: InputMaybe<BasicIdFilter>;
  /** Fetch WorkweekConfig for the specified merchant. */
  merchantId: BasicIdFilter;
};

export type OrdersQueryVariables = Exact<{
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  locationID: Scalars['ID']['input'];
  merchantID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrderConnection', nodes: Array<{ __typename?: 'Order', id?: string | null, closedAt?: any | null, lineItems?: Array<{ __typename?: 'OrderLineItem', uid?: any | null, name?: string | null, quantity?: any | null, itemVariation?: { __typename?: 'CatalogItemVariation', item?: { __typename?: 'CatalogItem', id: string, images?: Array<{ __typename?: 'CatalogImage', url?: any | null } | null> | null, categories?: Array<{ __typename?: 'CatalogObjectCategory', category?: { __typename?: 'CatalogCategory', id: string, name?: string | null, images?: Array<{ __typename?: 'CatalogImage', url?: any | null } | null> | null } | null } | null> | null, modifierListInfos?: Array<{ __typename?: 'CatalogItemModifierListInfo', modifierList?: { __typename?: 'CatalogModifierList', ordinal?: any | null, id: string, name?: string | null, modifiers?: Array<{ __typename?: 'CatalogModifier', ordinal?: any | null, id: string, name?: string | null, modifierList?: { __typename?: 'CatalogModifierList', id: string, name?: string | null } | null } | null> | null } | null } | null> | null } | null } | null, modifiers?: Array<{ __typename?: 'OrderLineItemModifier', uid?: any | null, name?: string | null } | null> | null, appliedDiscounts?: Array<{ __typename?: 'OrderLineItemAppliedDiscount', uid?: any | null, discountUid?: any | null, appliedMoney?: { __typename?: 'Money', amount: any } | null } | null> | null, grossSalesMoney?: { __typename?: 'Money', amount: any } | null, totalDiscountMoney?: { __typename?: 'Money', amount: any } | null, totalMoney?: { __typename?: 'Money', amount: any } | null } | null> | null, discounts?: Array<{ __typename?: 'OrderLineItemDiscount', uid?: any | null, name?: string | null } | null> | null, returns?: Array<{ __typename?: 'OrderReturn', lineItems?: Array<{ __typename?: 'OrderReturnLineItem', name?: string | null, quantity?: any | null, sourceLineItemUid?: any | null, uid?: any | null, itemVariation?: { __typename?: 'CatalogItemVariation', item?: { __typename?: 'CatalogItem', id: string, images?: Array<{ __typename?: 'CatalogImage', url?: any | null } | null> | null, categories?: Array<{ __typename?: 'CatalogObjectCategory', category?: { __typename?: 'CatalogCategory', id: string, name?: string | null } | null } | null> | null } | null } | null } | null> | null } | null> | null, refunds?: Array<{ __typename?: 'Refund', id: string, transactionId?: string | null, reason?: string | null, processingFeeMoney?: { __typename?: 'Money', amount: any } | null, amountMoney?: { __typename?: 'Money', amount: any } | null } | null> | null, tenders?: Array<{ __typename?: 'OrderBankAccountTender', id: string, type?: OrderTenderType | null, amountMoney?: { __typename?: 'Money', amount: any } | null, payment?: { __typename?: 'Payment', processingFees: Array<{ __typename?: 'PaymentProcessingFee', amountMoney?: { __typename?: 'Money', amount: any } | null }> } | null } | { __typename?: 'OrderBuyNowPayLaterTender', id: string, type?: OrderTenderType | null, amountMoney?: { __typename?: 'Money', amount: any } | null, payment?: { __typename?: 'Payment', processingFees: Array<{ __typename?: 'PaymentProcessingFee', amountMoney?: { __typename?: 'Money', amount: any } | null }> } | null } | { __typename?: 'OrderCardTender', id: string, type?: OrderTenderType | null, amountMoney?: { __typename?: 'Money', amount: any } | null, payment?: { __typename?: 'Payment', processingFees: Array<{ __typename?: 'PaymentProcessingFee', amountMoney?: { __typename?: 'Money', amount: any } | null }> } | null } | { __typename?: 'OrderCashTender', id: string, type?: OrderTenderType | null, amountMoney?: { __typename?: 'Money', amount: any } | null, payment?: { __typename?: 'Payment', processingFees: Array<{ __typename?: 'PaymentProcessingFee', amountMoney?: { __typename?: 'Money', amount: any } | null }> } | null } | { __typename?: 'OrderOtherTender', id: string, type?: OrderTenderType | null, amountMoney?: { __typename?: 'Money', amount: any } | null, payment?: { __typename?: 'Payment', processingFees: Array<{ __typename?: 'PaymentProcessingFee', amountMoney?: { __typename?: 'Money', amount: any } | null }> } | null } | { __typename?: 'OrderSquareAccountTender', id: string, type?: OrderTenderType | null, amountMoney?: { __typename?: 'Money', amount: any } | null, payment?: { __typename?: 'Payment', processingFees: Array<{ __typename?: 'PaymentProcessingFee', amountMoney?: { __typename?: 'Money', amount: any } | null }> } | null } | null> | null, totalDiscountMoney?: { __typename?: 'Money', amount: any } | null, totalMoney?: { __typename?: 'Money', amount: any } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: any | null } } | null };


export const OrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Orders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalToAnyOf"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"merchantID"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalToAnyOf"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationID"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalToAnyOf"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"COMPLETED"}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"closedAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"itemVariation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifierListInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifierList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ordinal"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"modifiers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ordinal"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"modifierList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifiers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appliedDiscounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"discountUid"}},{"kind":"Field","name":{"kind":"Name","value":"appliedMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grossSalesMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDiscountMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"returns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sourceLineItemUid"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"itemVariation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"processingFeeMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amountMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tenders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amountMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processingFees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amountMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDiscountMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalMoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;