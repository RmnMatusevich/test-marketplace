// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get ownerCutPerMillion(): BigInt {
    let value = this.get("ownerCutPerMillion");
    return value.toBigInt();
  }

  set ownerCutPerMillion(value: BigInt) {
    this.set("ownerCutPerMillion", Value.fromBigInt(value));
  }
}

export class Count extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Count entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Count entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Count", id.toString(), this);
  }

  static load(id: string): Count | null {
    return store.get("Count", id) as Count | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orderTotal(): i32 {
    let value = this.get("orderTotal");
    return value.toI32();
  }

  set orderTotal(value: i32) {
    this.set("orderTotal", Value.fromI32(value));
  }

  get orderParcel(): i32 {
    let value = this.get("orderParcel");
    return value.toI32();
  }

  set orderParcel(value: i32) {
    this.set("orderParcel", Value.fromI32(value));
  }

  get orderEstate(): i32 {
    let value = this.get("orderEstate");
    return value.toI32();
  }

  set orderEstate(value: i32) {
    this.set("orderEstate", Value.fromI32(value));
  }

  get orderWearable(): i32 {
    let value = this.get("orderWearable");
    return value.toI32();
  }

  set orderWearable(value: i32) {
    this.set("orderWearable", Value.fromI32(value));
  }

  get orderENS(): i32 {
    let value = this.get("orderENS");
    return value.toI32();
  }

  set orderENS(value: i32) {
    this.set("orderENS", Value.fromI32(value));
  }

  get parcelTotal(): i32 {
    let value = this.get("parcelTotal");
    return value.toI32();
  }

  set parcelTotal(value: i32) {
    this.set("parcelTotal", Value.fromI32(value));
  }

  get estateTotal(): i32 {
    let value = this.get("estateTotal");
    return value.toI32();
  }

  set estateTotal(value: i32) {
    this.set("estateTotal", Value.fromI32(value));
  }

  get wearableTotal(): i32 {
    let value = this.get("wearableTotal");
    return value.toI32();
  }

  set wearableTotal(value: i32) {
    this.set("wearableTotal", Value.fromI32(value));
  }

  get ensTotal(): i32 {
    let value = this.get("ensTotal");
    return value.toI32();
  }

  set ensTotal(value: i32) {
    this.set("ensTotal", Value.fromI32(value));
  }

  get started(): i32 {
    let value = this.get("started");
    return value.toI32();
  }

  set started(value: i32) {
    this.set("started", Value.fromI32(value));
  }
}

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Order entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Order entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Order", id.toString(), this);
  }

  static load(id: string): Order | null {
    return store.get("Order", id) as Order | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get nft(): string | null {
    let value = this.get("nft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nft(value: string | null) {
    if (value === null) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromString(value as string));
    }
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get buyer(): Bytes | null {
    let value = this.get("buyer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromBytes(value as Bytes));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get expiresAt(): BigInt {
    let value = this.get("expiresAt");
    return value.toBigInt();
  }

  set expiresAt(value: BigInt) {
    this.set("expiresAt", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bid", id.toString(), this);
  }

  static load(id: string): Bid | null {
    return store.get("Bid", id) as Bid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get nft(): string | null {
    let value = this.get("nft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nft(value: string | null) {
    if (value === null) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromString(value as string));
    }
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get bidder(): Bytes | null {
    let value = this.get("bidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set bidder(value: Bytes | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromBytes(value as Bytes));
    }
  }

  get seller(): Bytes | null {
    let value = this.get("seller");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromBytes(value as Bytes));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get fingerprint(): Bytes | null {
    let value = this.get("fingerprint");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set fingerprint(value: Bytes | null) {
    if (value === null) {
      this.unset("fingerprint");
    } else {
      this.set("fingerprint", Value.fromBytes(value as Bytes));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get blockchainId(): string {
    let value = this.get("blockchainId");
    return value.toString();
  }

  set blockchainId(value: string) {
    this.set("blockchainId", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get expiresAt(): BigInt {
    let value = this.get("expiresAt");
    return value.toBigInt();
  }

  set expiresAt(value: BigInt) {
    this.set("expiresAt", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class Parcel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Parcel entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Parcel entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Parcel", id.toString(), this);
  }

  static load(id: string): Parcel | null {
    return store.get("Parcel", id) as Parcel | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get x(): BigInt {
    let value = this.get("x");
    return value.toBigInt();
  }

  set x(value: BigInt) {
    this.set("x", Value.fromBigInt(value));
  }

  get y(): BigInt {
    let value = this.get("y");
    return value.toBigInt();
  }

  set y(value: BigInt) {
    this.set("y", Value.fromBigInt(value));
  }

  get estate(): string | null {
    let value = this.get("estate");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set estate(value: string | null) {
    if (value === null) {
      this.unset("estate");
    } else {
      this.set("estate", Value.fromString(value as string));
    }
  }

  get data(): string | null {
    let value = this.get("data");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set data(value: string | null) {
    if (value === null) {
      this.unset("data");
    } else {
      this.set("data", Value.fromString(value as string));
    }
  }

  get rawData(): string | null {
    let value = this.get("rawData");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rawData(value: string | null) {
    if (value === null) {
      this.unset("rawData");
    } else {
      this.set("rawData", Value.fromString(value as string));
    }
  }

  get nft(): string | null {
    let value = this.get("nft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nft(value: string | null) {
    if (value === null) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromString(value as string));
    }
  }
}

export class Estate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Estate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Estate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Estate", id.toString(), this);
  }

  static load(id: string): Estate | null {
    return store.get("Estate", id) as Estate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get parcels(): Array<string> | null {
    let value = this.get("parcels");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set parcels(value: Array<string> | null) {
    if (value === null) {
      this.unset("parcels");
    } else {
      this.set("parcels", Value.fromStringArray(value as Array<string>));
    }
  }

  get size(): i32 {
    let value = this.get("size");
    return value.toI32();
  }

  set size(value: i32) {
    this.set("size", Value.fromI32(value));
  }

  get data(): string | null {
    let value = this.get("data");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set data(value: string | null) {
    if (value === null) {
      this.unset("data");
    } else {
      this.set("data", Value.fromString(value as string));
    }
  }

  get rawData(): string | null {
    let value = this.get("rawData");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rawData(value: string | null) {
    if (value === null) {
      this.unset("rawData");
    } else {
      this.set("rawData", Value.fromString(value as string));
    }
  }

  get nft(): string | null {
    let value = this.get("nft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nft(value: string | null) {
    if (value === null) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromString(value as string));
    }
  }
}

export class Data extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Data entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Data entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Data", id.toString(), this);
  }

  static load(id: string): Data | null {
    return store.get("Data", id) as Data | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get parcel(): string | null {
    let value = this.get("parcel");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set parcel(value: string | null) {
    if (value === null) {
      this.unset("parcel");
    } else {
      this.set("parcel", Value.fromString(value as string));
    }
  }

  get estate(): string | null {
    let value = this.get("estate");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set estate(value: string | null) {
    if (value === null) {
      this.unset("estate");
    } else {
      this.set("estate", Value.fromString(value as string));
    }
  }

  get version(): string {
    let value = this.get("version");
    return value.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get ipns(): string | null {
    let value = this.get("ipns");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipns(value: string | null) {
    if (value === null) {
      this.unset("ipns");
    } else {
      this.set("ipns", Value.fromString(value as string));
    }
  }
}

export class Wearable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Wearable entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Wearable entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Wearable", id.toString(), this);
  }

  static load(id: string): Wearable | null {
    return store.get("Wearable", id) as Wearable | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get representationId(): string {
    let value = this.get("representationId");
    return value.toString();
  }

  set representationId(value: string) {
    this.set("representationId", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get rarity(): string {
    let value = this.get("rarity");
    return value.toString();
  }

  set rarity(value: string) {
    this.set("rarity", Value.fromString(value));
  }

  get bodyShapes(): Array<string> | null {
    let value = this.get("bodyShapes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bodyShapes(value: Array<string> | null) {
    if (value === null) {
      this.unset("bodyShapes");
    } else {
      this.set("bodyShapes", Value.fromStringArray(value as Array<string>));
    }
  }

  get nft(): string | null {
    let value = this.get("nft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nft(value: string | null) {
    if (value === null) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromString(value as string));
    }
  }
}

export class ENS extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ENS entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ENS entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ENS", id.toString(), this);
  }

  static load(id: string): ENS | null {
    return store.get("ENS", id) as ENS | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get caller(): Bytes | null {
    let value = this.get("caller");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set caller(value: Bytes | null) {
    if (value === null) {
      this.unset("caller");
    } else {
      this.set("caller", Value.fromBytes(value as Bytes));
    }
  }

  get beneficiary(): Bytes | null {
    let value = this.get("beneficiary");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set beneficiary(value: Bytes | null) {
    if (value === null) {
      this.unset("beneficiary");
    } else {
      this.set("beneficiary", Value.fromBytes(value as Bytes));
    }
  }

  get labelHash(): Bytes | null {
    let value = this.get("labelHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set labelHash(value: Bytes | null) {
    if (value === null) {
      this.unset("labelHash");
    } else {
      this.set("labelHash", Value.fromBytes(value as Bytes));
    }
  }

  get subdomain(): string | null {
    let value = this.get("subdomain");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set subdomain(value: string | null) {
    if (value === null) {
      this.unset("subdomain");
    } else {
      this.set("subdomain", Value.fromString(value as string));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(value as BigInt));
    }
  }

  get nft(): string | null {
    let value = this.get("nft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nft(value: string | null) {
    if (value === null) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromString(value as string));
    }
  }
}

export class NFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NFT entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NFT entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NFT", id.toString(), this);
  }

  static load(id: string): NFT | null {
    return store.get("NFT", id) as NFT | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get tokenURI(): string | null {
    let value = this.get("tokenURI");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string | null) {
    if (value === null) {
      this.unset("tokenURI");
    } else {
      this.set("tokenURI", Value.fromString(value as string));
    }
  }

  get orders(): Array<string> | null {
    let value = this.get("orders");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set orders(value: Array<string> | null) {
    if (value === null) {
      this.unset("orders");
    } else {
      this.set("orders", Value.fromStringArray(value as Array<string>));
    }
  }

  get bids(): Array<string> | null {
    let value = this.get("bids");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bids(value: Array<string> | null) {
    if (value === null) {
      this.unset("bids");
    } else {
      this.set("bids", Value.fromStringArray(value as Array<string>));
    }
  }

  get activeOrder(): string | null {
    let value = this.get("activeOrder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set activeOrder(value: string | null) {
    if (value === null) {
      this.unset("activeOrder");
    } else {
      this.set("activeOrder", Value.fromString(value as string));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (value === null) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(value as string));
    }
  }

  get parcel(): string | null {
    let value = this.get("parcel");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set parcel(value: string | null) {
    if (value === null) {
      this.unset("parcel");
    } else {
      this.set("parcel", Value.fromString(value as string));
    }
  }

  get estate(): string | null {
    let value = this.get("estate");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set estate(value: string | null) {
    if (value === null) {
      this.unset("estate");
    } else {
      this.set("estate", Value.fromString(value as string));
    }
  }

  get wearable(): string | null {
    let value = this.get("wearable");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set wearable(value: string | null) {
    if (value === null) {
      this.unset("wearable");
    } else {
      this.set("wearable", Value.fromString(value as string));
    }
  }

  get ens(): string | null {
    let value = this.get("ens");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ens(value: string | null) {
    if (value === null) {
      this.unset("ens");
    } else {
      this.set("ens", Value.fromString(value as string));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get searchOrderStatus(): string | null {
    let value = this.get("searchOrderStatus");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set searchOrderStatus(value: string | null) {
    if (value === null) {
      this.unset("searchOrderStatus");
    } else {
      this.set("searchOrderStatus", Value.fromString(value as string));
    }
  }

  get searchOrderPrice(): BigInt | null {
    let value = this.get("searchOrderPrice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set searchOrderPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("searchOrderPrice");
    } else {
      this.set("searchOrderPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get searchOrderExpiresAt(): BigInt | null {
    let value = this.get("searchOrderExpiresAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set searchOrderExpiresAt(value: BigInt | null) {
    if (value === null) {
      this.unset("searchOrderExpiresAt");
    } else {
      this.set("searchOrderExpiresAt", Value.fromBigInt(value as BigInt));
    }
  }

  get searchOrderCreatedAt(): BigInt | null {
    let value = this.get("searchOrderCreatedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set searchOrderCreatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("searchOrderCreatedAt");
    } else {
      this.set("searchOrderCreatedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get searchIsLand(): boolean {
    let value = this.get("searchIsLand");
    return value.toBoolean();
  }

  set searchIsLand(value: boolean) {
    this.set("searchIsLand", Value.fromBoolean(value));
  }

  get searchText(): string | null {
    let value = this.get("searchText");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set searchText(value: string | null) {
    if (value === null) {
      this.unset("searchText");
    } else {
      this.set("searchText", Value.fromString(value as string));
    }
  }

  get searchParcelIsInBounds(): boolean {
    let value = this.get("searchParcelIsInBounds");
    return value.toBoolean();
  }

  set searchParcelIsInBounds(value: boolean) {
    this.set("searchParcelIsInBounds", Value.fromBoolean(value));
  }

  get searchParcelX(): BigInt | null {
    let value = this.get("searchParcelX");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set searchParcelX(value: BigInt | null) {
    if (value === null) {
      this.unset("searchParcelX");
    } else {
      this.set("searchParcelX", Value.fromBigInt(value as BigInt));
    }
  }

  get searchParcelY(): BigInt | null {
    let value = this.get("searchParcelY");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set searchParcelY(value: BigInt | null) {
    if (value === null) {
      this.unset("searchParcelY");
    } else {
      this.set("searchParcelY", Value.fromBigInt(value as BigInt));
    }
  }

  get searchParcelEstateId(): string | null {
    let value = this.get("searchParcelEstateId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set searchParcelEstateId(value: string | null) {
    if (value === null) {
      this.unset("searchParcelEstateId");
    } else {
      this.set("searchParcelEstateId", Value.fromString(value as string));
    }
  }

  get searchEstateSize(): i32 {
    let value = this.get("searchEstateSize");
    return value.toI32();
  }

  set searchEstateSize(value: i32) {
    this.set("searchEstateSize", Value.fromI32(value));
  }

  get searchIsWearableHead(): boolean {
    let value = this.get("searchIsWearableHead");
    return value.toBoolean();
  }

  set searchIsWearableHead(value: boolean) {
    this.set("searchIsWearableHead", Value.fromBoolean(value));
  }

  get searchIsWearableAccessory(): boolean {
    let value = this.get("searchIsWearableAccessory");
    return value.toBoolean();
  }

  set searchIsWearableAccessory(value: boolean) {
    this.set("searchIsWearableAccessory", Value.fromBoolean(value));
  }

  get searchWearableRarity(): string | null {
    let value = this.get("searchWearableRarity");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set searchWearableRarity(value: string | null) {
    if (value === null) {
      this.unset("searchWearableRarity");
    } else {
      this.set("searchWearableRarity", Value.fromString(value as string));
    }
  }

  get searchWearableCategory(): string | null {
    let value = this.get("searchWearableCategory");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set searchWearableCategory(value: string | null) {
    if (value === null) {
      this.unset("searchWearableCategory");
    } else {
      this.set("searchWearableCategory", Value.fromString(value as string));
    }
  }

  get searchWearableBodyShapes(): Array<string> | null {
    let value = this.get("searchWearableBodyShapes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set searchWearableBodyShapes(value: Array<string> | null) {
    if (value === null) {
      this.unset("searchWearableBodyShapes");
    } else {
      this.set(
        "searchWearableBodyShapes",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get nfts(): Array<string> | null {
    let value = this.get("nfts");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set nfts(value: Array<string> | null) {
    if (value === null) {
      this.unset("nfts");
    } else {
      this.set("nfts", Value.fromStringArray(value as Array<string>));
    }
  }

  get mana(): BigInt | null {
    let value = this.get("mana");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mana(value: BigInt | null) {
    if (value === null) {
      this.unset("mana");
    } else {
      this.set("mana", Value.fromBigInt(value as BigInt));
    }
  }
}
