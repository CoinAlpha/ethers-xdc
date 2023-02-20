"use strict";

import { AbiCoder, checkResultErrors, ConstructorFragment, defaultAbiCoder, ErrorFragment, EventFragment, FormatTypes, Fragment, FunctionFragment, Indexed, Interface, LogDescription, ParamType, Result, TransactionDescription }from "@ethersproject-xdc/abi";
import { getAddress, getCreate2Address, getContractAddress, getIcapAddress, isAddress } from "@ethersproject-xdc/address";
import * as base64 from "@ethersproject-xdc/base64";
import { Base58 as base58 } from "@ethersproject-xdc/basex";
import { arrayify, concat, hexConcat, hexDataSlice, hexDataLength, hexlify, hexStripZeros, hexValue, hexZeroPad, isBytes, isBytesLike, isHexString, joinSignature, zeroPad, splitSignature, stripZeros } from "@ethersproject-xdc/bytes";
import { _TypedDataEncoder, dnsEncode, hashMessage, id, isValidName, namehash } from "@ethersproject-xdc/hash";
import { defaultPath, entropyToMnemonic, getAccountPath, HDNode, isValidMnemonic, mnemonicToEntropy, mnemonicToSeed } from "@ethersproject-xdc/hdnode";
import { getJsonWalletAddress } from "@ethersproject-xdc/json-wallets";
import { keccak256 } from "@ethersproject-xdc/keccak256";
import { Logger } from "@ethersproject-xdc/logger";
import { computeHmac, ripemd160, sha256, sha512 } from "@ethersproject-xdc/sha2";
import { keccak256 as solidityKeccak256, pack as solidityPack, sha256 as soliditySha256 } from "@ethersproject-xdc/solidity";
import { randomBytes, shuffled } from "@ethersproject-xdc/random";
import { checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy } from "@ethersproject-xdc/properties";
import * as RLP from "@ethersproject-xdc/rlp";
import { computePublicKey, recoverPublicKey, SigningKey } from "@ethersproject-xdc/signing-key";
import { formatBytes32String, nameprep, parseBytes32String, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs } from "@ethersproject-xdc/strings";
import { accessListify, computeAddress, parse as parseTransaction, recoverAddress, serialize as serializeTransaction, TransactionTypes } from "@ethersproject-xdc/transactions";
import { commify, formatEther, parseEther, formatUnits, parseUnits } from "@ethersproject-xdc/units";
import { verifyMessage, verifyTypedData } from "@ethersproject-xdc/wallet";
import { _fetchData, fetchJson, poll } from "@ethersproject-xdc/web";

////////////////////////
// Enums

import { SupportedAlgorithm } from "@ethersproject-xdc/sha2";
import { UnicodeNormalizationForm, Utf8ErrorReason } from "@ethersproject-xdc/strings";
import { UnsignedTransaction } from "@ethersproject-xdc/transactions";

////////////////////////
// Types and Interfaces

import { CoerceFunc } from "@ethersproject-xdc/abi";
import { Bytes, BytesLike, Hexable } from "@ethersproject-xdc/bytes"
import { Mnemonic } from "@ethersproject-xdc/hdnode";
import { EncryptOptions, ProgressCallback } from "@ethersproject-xdc/json-wallets";
import { Deferrable } from "@ethersproject-xdc/properties";
import { Utf8ErrorFunc } from "@ethersproject-xdc/strings";
import { AccessList, AccessListish } from "@ethersproject-xdc/transactions";
import { ConnectionInfo, FetchJsonResponse, OnceBlockable, OncePollable, PollOptions } from "@ethersproject-xdc/web";

////////////////////////
// Exports

export {
    AbiCoder,
    defaultAbiCoder,

    Fragment,
    ConstructorFragment,
    ErrorFragment,
    EventFragment,
    FunctionFragment,
    ParamType,
    FormatTypes,

    checkResultErrors,
    Result,

    Logger,

    RLP,

    _fetchData,
    fetchJson,
    poll,

    checkProperties,
    deepCopy,
    defineReadOnly,
    getStatic,
    resolveProperties,
    shallowCopy,

    arrayify,

    concat,
    stripZeros,
    zeroPad,

    isBytes,
    isBytesLike,

    defaultPath,
    HDNode,
    SigningKey,

    Interface,

    LogDescription,
    TransactionDescription,

    base58,
    base64,

    hexlify,
    isHexString,
    hexConcat,
    hexStripZeros,
    hexValue,
    hexZeroPad,
    hexDataLength,
    hexDataSlice,

    nameprep,
    _toEscapedUtf8String,
    toUtf8Bytes,
    toUtf8CodePoints,
    toUtf8String,
    Utf8ErrorFuncs,

    formatBytes32String,
    parseBytes32String,

    dnsEncode,
    hashMessage,
    namehash,
    isValidName,
    id,

    _TypedDataEncoder,

    getAddress,
    getIcapAddress,
    getContractAddress,
    getCreate2Address,
    isAddress,

    formatEther,
    parseEther,

    formatUnits,
    parseUnits,

    commify,

    computeHmac,
    keccak256,
    ripemd160,
    sha256,
    sha512,

    randomBytes,
    shuffled,

    solidityPack,
    solidityKeccak256,
    soliditySha256,

    splitSignature,
    joinSignature,

    accessListify,
    parseTransaction,
    serializeTransaction,
    TransactionTypes,

    getJsonWalletAddress,

    computeAddress,
    recoverAddress,

    computePublicKey,
    recoverPublicKey,

    verifyMessage,
    verifyTypedData,

    getAccountPath,
    mnemonicToEntropy,
    entropyToMnemonic,
    isValidMnemonic,
    mnemonicToSeed,


    ////////////////////////
    // Enums

    SupportedAlgorithm,

    UnicodeNormalizationForm,
    Utf8ErrorReason,

    ////////////////////////
    // Types

    Bytes,
    BytesLike,
    Hexable,

    AccessList,
    AccessListish,
    UnsignedTransaction,

    CoerceFunc,

    Indexed,

    Mnemonic,

    Deferrable,

    Utf8ErrorFunc,

    ConnectionInfo,
    OnceBlockable,
    OncePollable,
    PollOptions,
    FetchJsonResponse,

    EncryptOptions,
    ProgressCallback
}

