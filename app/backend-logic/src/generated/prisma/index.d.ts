
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model prediction_logs
 * 
 */
export type prediction_logs = $Result.DefaultSelection<Prisma.$prediction_logsPayload>
/**
 * Model prediction_inaccuracies
 * 
 */
export type prediction_inaccuracies = $Result.DefaultSelection<Prisma.$prediction_inaccuraciesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prediction_logs
 * const prediction_logs = await prisma.prediction_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Prediction_logs
   * const prediction_logs = await prisma.prediction_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.prediction_logs`: Exposes CRUD operations for the **prediction_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prediction_logs
    * const prediction_logs = await prisma.prediction_logs.findMany()
    * ```
    */
  get prediction_logs(): Prisma.prediction_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediction_inaccuracies`: Exposes CRUD operations for the **prediction_inaccuracies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prediction_inaccuracies
    * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findMany()
    * ```
    */
  get prediction_inaccuracies(): Prisma.prediction_inaccuraciesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    prediction_logs: 'prediction_logs',
    prediction_inaccuracies: 'prediction_inaccuracies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "prediction_logs" | "prediction_inaccuracies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      prediction_logs: {
        payload: Prisma.$prediction_logsPayload<ExtArgs>
        fields: Prisma.prediction_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prediction_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prediction_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>
          }
          findFirst: {
            args: Prisma.prediction_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prediction_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>
          }
          findMany: {
            args: Prisma.prediction_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>[]
          }
          create: {
            args: Prisma.prediction_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>
          }
          createMany: {
            args: Prisma.prediction_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prediction_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>[]
          }
          delete: {
            args: Prisma.prediction_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>
          }
          update: {
            args: Prisma.prediction_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>
          }
          deleteMany: {
            args: Prisma.prediction_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prediction_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prediction_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>[]
          }
          upsert: {
            args: Prisma.prediction_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_logsPayload>
          }
          aggregate: {
            args: Prisma.Prediction_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction_logs>
          }
          groupBy: {
            args: Prisma.prediction_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prediction_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.prediction_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Prediction_logsCountAggregateOutputType> | number
          }
        }
      }
      prediction_inaccuracies: {
        payload: Prisma.$prediction_inaccuraciesPayload<ExtArgs>
        fields: Prisma.prediction_inaccuraciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prediction_inaccuraciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prediction_inaccuraciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>
          }
          findFirst: {
            args: Prisma.prediction_inaccuraciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prediction_inaccuraciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>
          }
          findMany: {
            args: Prisma.prediction_inaccuraciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>[]
          }
          create: {
            args: Prisma.prediction_inaccuraciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>
          }
          createMany: {
            args: Prisma.prediction_inaccuraciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prediction_inaccuraciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>[]
          }
          delete: {
            args: Prisma.prediction_inaccuraciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>
          }
          update: {
            args: Prisma.prediction_inaccuraciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>
          }
          deleteMany: {
            args: Prisma.prediction_inaccuraciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prediction_inaccuraciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prediction_inaccuraciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>[]
          }
          upsert: {
            args: Prisma.prediction_inaccuraciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prediction_inaccuraciesPayload>
          }
          aggregate: {
            args: Prisma.Prediction_inaccuraciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction_inaccuracies>
          }
          groupBy: {
            args: Prisma.prediction_inaccuraciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prediction_inaccuraciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.prediction_inaccuraciesCountArgs<ExtArgs>
            result: $Utils.Optional<Prediction_inaccuraciesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    prediction_logs?: prediction_logsOmit
    prediction_inaccuracies?: prediction_inaccuraciesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model prediction_logs
   */

  export type AggregatePrediction_logs = {
    _count: Prediction_logsCountAggregateOutputType | null
    _avg: Prediction_logsAvgAggregateOutputType | null
    _sum: Prediction_logsSumAggregateOutputType | null
    _min: Prediction_logsMinAggregateOutputType | null
    _max: Prediction_logsMaxAggregateOutputType | null
  }

  export type Prediction_logsAvgAggregateOutputType = {
    prediction_log_visibility: number | null
    prediction_log_wind_speed: number | null
    prediction_log_wind_gust: number | null
    prediction_log_wind_direction: number | null
    prediction_log_headwind: number | null
    prediction_log_crosswind: number | null
    prediction_log_ceiling: number | null
    prediction_log_ils_label: number | null
    prediction_log_rnav_label: number | null
    prediction_log_rnp_label: number | null
    prediction_log_visual_label: number | null
  }

  export type Prediction_logsSumAggregateOutputType = {
    prediction_log_visibility: number | null
    prediction_log_wind_speed: number | null
    prediction_log_wind_gust: number | null
    prediction_log_wind_direction: number | null
    prediction_log_headwind: number | null
    prediction_log_crosswind: number | null
    prediction_log_ceiling: number | null
    prediction_log_ils_label: number | null
    prediction_log_rnav_label: number | null
    prediction_log_rnp_label: number | null
    prediction_log_visual_label: number | null
  }

  export type Prediction_logsMinAggregateOutputType = {
    prediction_log_id: string | null
    prediction_log_airport_icao: string | null
    prediction_log_visibility: number | null
    prediction_log_wind_speed: number | null
    prediction_log_wind_gust: number | null
    prediction_log_wind_direction: number | null
    prediction_log_rvr: string | null
    prediction_log_runway_designator_number: string | null
    prediction_log_runway_designator_side: string | null
    prediction_log_runway_ils_category: string | null
    prediction_log_headwind: number | null
    prediction_log_crosswind: number | null
    prediction_log_ceiling: number | null
    prediction_log_weather_phenomenon: string | null
    prediction_log_ils_label: number | null
    prediction_log_rnav_label: number | null
    prediction_log_rnp_label: number | null
    prediction_log_visual_label: number | null
  }

  export type Prediction_logsMaxAggregateOutputType = {
    prediction_log_id: string | null
    prediction_log_airport_icao: string | null
    prediction_log_visibility: number | null
    prediction_log_wind_speed: number | null
    prediction_log_wind_gust: number | null
    prediction_log_wind_direction: number | null
    prediction_log_rvr: string | null
    prediction_log_runway_designator_number: string | null
    prediction_log_runway_designator_side: string | null
    prediction_log_runway_ils_category: string | null
    prediction_log_headwind: number | null
    prediction_log_crosswind: number | null
    prediction_log_ceiling: number | null
    prediction_log_weather_phenomenon: string | null
    prediction_log_ils_label: number | null
    prediction_log_rnav_label: number | null
    prediction_log_rnp_label: number | null
    prediction_log_visual_label: number | null
  }

  export type Prediction_logsCountAggregateOutputType = {
    prediction_log_id: number
    prediction_log_airport_icao: number
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: number
    prediction_log_runway_designator_number: number
    prediction_log_runway_designator_side: number
    prediction_log_runway_ils_category: number
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: number
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
    _all: number
  }


  export type Prediction_logsAvgAggregateInputType = {
    prediction_log_visibility?: true
    prediction_log_wind_speed?: true
    prediction_log_wind_gust?: true
    prediction_log_wind_direction?: true
    prediction_log_headwind?: true
    prediction_log_crosswind?: true
    prediction_log_ceiling?: true
    prediction_log_ils_label?: true
    prediction_log_rnav_label?: true
    prediction_log_rnp_label?: true
    prediction_log_visual_label?: true
  }

  export type Prediction_logsSumAggregateInputType = {
    prediction_log_visibility?: true
    prediction_log_wind_speed?: true
    prediction_log_wind_gust?: true
    prediction_log_wind_direction?: true
    prediction_log_headwind?: true
    prediction_log_crosswind?: true
    prediction_log_ceiling?: true
    prediction_log_ils_label?: true
    prediction_log_rnav_label?: true
    prediction_log_rnp_label?: true
    prediction_log_visual_label?: true
  }

  export type Prediction_logsMinAggregateInputType = {
    prediction_log_id?: true
    prediction_log_airport_icao?: true
    prediction_log_visibility?: true
    prediction_log_wind_speed?: true
    prediction_log_wind_gust?: true
    prediction_log_wind_direction?: true
    prediction_log_rvr?: true
    prediction_log_runway_designator_number?: true
    prediction_log_runway_designator_side?: true
    prediction_log_runway_ils_category?: true
    prediction_log_headwind?: true
    prediction_log_crosswind?: true
    prediction_log_ceiling?: true
    prediction_log_weather_phenomenon?: true
    prediction_log_ils_label?: true
    prediction_log_rnav_label?: true
    prediction_log_rnp_label?: true
    prediction_log_visual_label?: true
  }

  export type Prediction_logsMaxAggregateInputType = {
    prediction_log_id?: true
    prediction_log_airport_icao?: true
    prediction_log_visibility?: true
    prediction_log_wind_speed?: true
    prediction_log_wind_gust?: true
    prediction_log_wind_direction?: true
    prediction_log_rvr?: true
    prediction_log_runway_designator_number?: true
    prediction_log_runway_designator_side?: true
    prediction_log_runway_ils_category?: true
    prediction_log_headwind?: true
    prediction_log_crosswind?: true
    prediction_log_ceiling?: true
    prediction_log_weather_phenomenon?: true
    prediction_log_ils_label?: true
    prediction_log_rnav_label?: true
    prediction_log_rnp_label?: true
    prediction_log_visual_label?: true
  }

  export type Prediction_logsCountAggregateInputType = {
    prediction_log_id?: true
    prediction_log_airport_icao?: true
    prediction_log_visibility?: true
    prediction_log_wind_speed?: true
    prediction_log_wind_gust?: true
    prediction_log_wind_direction?: true
    prediction_log_rvr?: true
    prediction_log_runway_designator_number?: true
    prediction_log_runway_designator_side?: true
    prediction_log_runway_ils_category?: true
    prediction_log_headwind?: true
    prediction_log_crosswind?: true
    prediction_log_ceiling?: true
    prediction_log_weather_phenomenon?: true
    prediction_log_ils_label?: true
    prediction_log_rnav_label?: true
    prediction_log_rnp_label?: true
    prediction_log_visual_label?: true
    _all?: true
  }

  export type Prediction_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prediction_logs to aggregate.
     */
    where?: prediction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_logs to fetch.
     */
    orderBy?: prediction_logsOrderByWithRelationInput | prediction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prediction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prediction_logs
    **/
    _count?: true | Prediction_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prediction_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prediction_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prediction_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prediction_logsMaxAggregateInputType
  }

  export type GetPrediction_logsAggregateType<T extends Prediction_logsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction_logs[P]>
      : GetScalarType<T[P], AggregatePrediction_logs[P]>
  }




  export type prediction_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prediction_logsWhereInput
    orderBy?: prediction_logsOrderByWithAggregationInput | prediction_logsOrderByWithAggregationInput[]
    by: Prediction_logsScalarFieldEnum[] | Prediction_logsScalarFieldEnum
    having?: prediction_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prediction_logsCountAggregateInputType | true
    _avg?: Prediction_logsAvgAggregateInputType
    _sum?: Prediction_logsSumAggregateInputType
    _min?: Prediction_logsMinAggregateInputType
    _max?: Prediction_logsMaxAggregateInputType
  }

  export type Prediction_logsGroupByOutputType = {
    prediction_log_id: string
    prediction_log_airport_icao: string | null
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: string
    prediction_log_runway_designator_number: string | null
    prediction_log_runway_designator_side: string | null
    prediction_log_runway_ils_category: string | null
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: string
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
    _count: Prediction_logsCountAggregateOutputType | null
    _avg: Prediction_logsAvgAggregateOutputType | null
    _sum: Prediction_logsSumAggregateOutputType | null
    _min: Prediction_logsMinAggregateOutputType | null
    _max: Prediction_logsMaxAggregateOutputType | null
  }

  type GetPrediction_logsGroupByPayload<T extends prediction_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prediction_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prediction_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prediction_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Prediction_logsGroupByOutputType[P]>
        }
      >
    >


  export type prediction_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_log_id?: boolean
    prediction_log_airport_icao?: boolean
    prediction_log_visibility?: boolean
    prediction_log_wind_speed?: boolean
    prediction_log_wind_gust?: boolean
    prediction_log_wind_direction?: boolean
    prediction_log_rvr?: boolean
    prediction_log_runway_designator_number?: boolean
    prediction_log_runway_designator_side?: boolean
    prediction_log_runway_ils_category?: boolean
    prediction_log_headwind?: boolean
    prediction_log_crosswind?: boolean
    prediction_log_ceiling?: boolean
    prediction_log_weather_phenomenon?: boolean
    prediction_log_ils_label?: boolean
    prediction_log_rnav_label?: boolean
    prediction_log_rnp_label?: boolean
    prediction_log_visual_label?: boolean
    prediction_inaccuracies?: boolean | prediction_logs$prediction_inaccuraciesArgs<ExtArgs>
  }, ExtArgs["result"]["prediction_logs"]>

  export type prediction_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_log_id?: boolean
    prediction_log_airport_icao?: boolean
    prediction_log_visibility?: boolean
    prediction_log_wind_speed?: boolean
    prediction_log_wind_gust?: boolean
    prediction_log_wind_direction?: boolean
    prediction_log_rvr?: boolean
    prediction_log_runway_designator_number?: boolean
    prediction_log_runway_designator_side?: boolean
    prediction_log_runway_ils_category?: boolean
    prediction_log_headwind?: boolean
    prediction_log_crosswind?: boolean
    prediction_log_ceiling?: boolean
    prediction_log_weather_phenomenon?: boolean
    prediction_log_ils_label?: boolean
    prediction_log_rnav_label?: boolean
    prediction_log_rnp_label?: boolean
    prediction_log_visual_label?: boolean
  }, ExtArgs["result"]["prediction_logs"]>

  export type prediction_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_log_id?: boolean
    prediction_log_airport_icao?: boolean
    prediction_log_visibility?: boolean
    prediction_log_wind_speed?: boolean
    prediction_log_wind_gust?: boolean
    prediction_log_wind_direction?: boolean
    prediction_log_rvr?: boolean
    prediction_log_runway_designator_number?: boolean
    prediction_log_runway_designator_side?: boolean
    prediction_log_runway_ils_category?: boolean
    prediction_log_headwind?: boolean
    prediction_log_crosswind?: boolean
    prediction_log_ceiling?: boolean
    prediction_log_weather_phenomenon?: boolean
    prediction_log_ils_label?: boolean
    prediction_log_rnav_label?: boolean
    prediction_log_rnp_label?: boolean
    prediction_log_visual_label?: boolean
  }, ExtArgs["result"]["prediction_logs"]>

  export type prediction_logsSelectScalar = {
    prediction_log_id?: boolean
    prediction_log_airport_icao?: boolean
    prediction_log_visibility?: boolean
    prediction_log_wind_speed?: boolean
    prediction_log_wind_gust?: boolean
    prediction_log_wind_direction?: boolean
    prediction_log_rvr?: boolean
    prediction_log_runway_designator_number?: boolean
    prediction_log_runway_designator_side?: boolean
    prediction_log_runway_ils_category?: boolean
    prediction_log_headwind?: boolean
    prediction_log_crosswind?: boolean
    prediction_log_ceiling?: boolean
    prediction_log_weather_phenomenon?: boolean
    prediction_log_ils_label?: boolean
    prediction_log_rnav_label?: boolean
    prediction_log_rnp_label?: boolean
    prediction_log_visual_label?: boolean
  }

  export type prediction_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_log_id" | "prediction_log_airport_icao" | "prediction_log_visibility" | "prediction_log_wind_speed" | "prediction_log_wind_gust" | "prediction_log_wind_direction" | "prediction_log_rvr" | "prediction_log_runway_designator_number" | "prediction_log_runway_designator_side" | "prediction_log_runway_ils_category" | "prediction_log_headwind" | "prediction_log_crosswind" | "prediction_log_ceiling" | "prediction_log_weather_phenomenon" | "prediction_log_ils_label" | "prediction_log_rnav_label" | "prediction_log_rnp_label" | "prediction_log_visual_label", ExtArgs["result"]["prediction_logs"]>
  export type prediction_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction_inaccuracies?: boolean | prediction_logs$prediction_inaccuraciesArgs<ExtArgs>
  }
  export type prediction_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type prediction_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $prediction_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prediction_logs"
    objects: {
      prediction_inaccuracies: Prisma.$prediction_inaccuraciesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_log_id: string
      prediction_log_airport_icao: string | null
      prediction_log_visibility: number
      prediction_log_wind_speed: number
      prediction_log_wind_gust: number
      prediction_log_wind_direction: number
      prediction_log_rvr: string
      prediction_log_runway_designator_number: string | null
      prediction_log_runway_designator_side: string | null
      prediction_log_runway_ils_category: string | null
      prediction_log_headwind: number
      prediction_log_crosswind: number
      prediction_log_ceiling: number
      prediction_log_weather_phenomenon: string
      prediction_log_ils_label: number
      prediction_log_rnav_label: number
      prediction_log_rnp_label: number
      prediction_log_visual_label: number
    }, ExtArgs["result"]["prediction_logs"]>
    composites: {}
  }

  type prediction_logsGetPayload<S extends boolean | null | undefined | prediction_logsDefaultArgs> = $Result.GetResult<Prisma.$prediction_logsPayload, S>

  type prediction_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prediction_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prediction_logsCountAggregateInputType | true
    }

  export interface prediction_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prediction_logs'], meta: { name: 'prediction_logs' } }
    /**
     * Find zero or one Prediction_logs that matches the filter.
     * @param {prediction_logsFindUniqueArgs} args - Arguments to find a Prediction_logs
     * @example
     * // Get one Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prediction_logsFindUniqueArgs>(args: SelectSubset<T, prediction_logsFindUniqueArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prediction_logsFindUniqueOrThrowArgs} args - Arguments to find a Prediction_logs
     * @example
     * // Get one Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prediction_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, prediction_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_logsFindFirstArgs} args - Arguments to find a Prediction_logs
     * @example
     * // Get one Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prediction_logsFindFirstArgs>(args?: SelectSubset<T, prediction_logsFindFirstArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_logsFindFirstOrThrowArgs} args - Arguments to find a Prediction_logs
     * @example
     * // Get one Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prediction_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, prediction_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prediction_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.findMany()
     * 
     * // Get first 10 Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.findMany({ take: 10 })
     * 
     * // Only select the `prediction_log_id`
     * const prediction_logsWithPrediction_log_idOnly = await prisma.prediction_logs.findMany({ select: { prediction_log_id: true } })
     * 
     */
    findMany<T extends prediction_logsFindManyArgs>(args?: SelectSubset<T, prediction_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction_logs.
     * @param {prediction_logsCreateArgs} args - Arguments to create a Prediction_logs.
     * @example
     * // Create one Prediction_logs
     * const Prediction_logs = await prisma.prediction_logs.create({
     *   data: {
     *     // ... data to create a Prediction_logs
     *   }
     * })
     * 
     */
    create<T extends prediction_logsCreateArgs>(args: SelectSubset<T, prediction_logsCreateArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prediction_logs.
     * @param {prediction_logsCreateManyArgs} args - Arguments to create many Prediction_logs.
     * @example
     * // Create many Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prediction_logsCreateManyArgs>(args?: SelectSubset<T, prediction_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prediction_logs and returns the data saved in the database.
     * @param {prediction_logsCreateManyAndReturnArgs} args - Arguments to create many Prediction_logs.
     * @example
     * // Create many Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prediction_logs and only return the `prediction_log_id`
     * const prediction_logsWithPrediction_log_idOnly = await prisma.prediction_logs.createManyAndReturn({
     *   select: { prediction_log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prediction_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, prediction_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prediction_logs.
     * @param {prediction_logsDeleteArgs} args - Arguments to delete one Prediction_logs.
     * @example
     * // Delete one Prediction_logs
     * const Prediction_logs = await prisma.prediction_logs.delete({
     *   where: {
     *     // ... filter to delete one Prediction_logs
     *   }
     * })
     * 
     */
    delete<T extends prediction_logsDeleteArgs>(args: SelectSubset<T, prediction_logsDeleteArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction_logs.
     * @param {prediction_logsUpdateArgs} args - Arguments to update one Prediction_logs.
     * @example
     * // Update one Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prediction_logsUpdateArgs>(args: SelectSubset<T, prediction_logsUpdateArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prediction_logs.
     * @param {prediction_logsDeleteManyArgs} args - Arguments to filter Prediction_logs to delete.
     * @example
     * // Delete a few Prediction_logs
     * const { count } = await prisma.prediction_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prediction_logsDeleteManyArgs>(args?: SelectSubset<T, prediction_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prediction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prediction_logsUpdateManyArgs>(args: SelectSubset<T, prediction_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prediction_logs and returns the data updated in the database.
     * @param {prediction_logsUpdateManyAndReturnArgs} args - Arguments to update many Prediction_logs.
     * @example
     * // Update many Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prediction_logs and only return the `prediction_log_id`
     * const prediction_logsWithPrediction_log_idOnly = await prisma.prediction_logs.updateManyAndReturn({
     *   select: { prediction_log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prediction_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, prediction_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prediction_logs.
     * @param {prediction_logsUpsertArgs} args - Arguments to update or create a Prediction_logs.
     * @example
     * // Update or create a Prediction_logs
     * const prediction_logs = await prisma.prediction_logs.upsert({
     *   create: {
     *     // ... data to create a Prediction_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction_logs we want to update
     *   }
     * })
     */
    upsert<T extends prediction_logsUpsertArgs>(args: SelectSubset<T, prediction_logsUpsertArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prediction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_logsCountArgs} args - Arguments to filter Prediction_logs to count.
     * @example
     * // Count the number of Prediction_logs
     * const count = await prisma.prediction_logs.count({
     *   where: {
     *     // ... the filter for the Prediction_logs we want to count
     *   }
     * })
    **/
    count<T extends prediction_logsCountArgs>(
      args?: Subset<T, prediction_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prediction_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prediction_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prediction_logsAggregateArgs>(args: Subset<T, Prediction_logsAggregateArgs>): Prisma.PrismaPromise<GetPrediction_logsAggregateType<T>>

    /**
     * Group by Prediction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prediction_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prediction_logsGroupByArgs['orderBy'] }
        : { orderBy?: prediction_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prediction_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrediction_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prediction_logs model
   */
  readonly fields: prediction_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prediction_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prediction_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prediction_inaccuracies<T extends prediction_logs$prediction_inaccuraciesArgs<ExtArgs> = {}>(args?: Subset<T, prediction_logs$prediction_inaccuraciesArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prediction_logs model
   */
  interface prediction_logsFieldRefs {
    readonly prediction_log_id: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_airport_icao: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_visibility: FieldRef<"prediction_logs", 'Float'>
    readonly prediction_log_wind_speed: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_wind_gust: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_wind_direction: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_rvr: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_runway_designator_number: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_runway_designator_side: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_runway_ils_category: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_headwind: FieldRef<"prediction_logs", 'Float'>
    readonly prediction_log_crosswind: FieldRef<"prediction_logs", 'Float'>
    readonly prediction_log_ceiling: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_weather_phenomenon: FieldRef<"prediction_logs", 'String'>
    readonly prediction_log_ils_label: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_rnav_label: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_rnp_label: FieldRef<"prediction_logs", 'Int'>
    readonly prediction_log_visual_label: FieldRef<"prediction_logs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prediction_logs findUnique
   */
  export type prediction_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * Filter, which prediction_logs to fetch.
     */
    where: prediction_logsWhereUniqueInput
  }

  /**
   * prediction_logs findUniqueOrThrow
   */
  export type prediction_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * Filter, which prediction_logs to fetch.
     */
    where: prediction_logsWhereUniqueInput
  }

  /**
   * prediction_logs findFirst
   */
  export type prediction_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * Filter, which prediction_logs to fetch.
     */
    where?: prediction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_logs to fetch.
     */
    orderBy?: prediction_logsOrderByWithRelationInput | prediction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prediction_logs.
     */
    cursor?: prediction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prediction_logs.
     */
    distinct?: Prediction_logsScalarFieldEnum | Prediction_logsScalarFieldEnum[]
  }

  /**
   * prediction_logs findFirstOrThrow
   */
  export type prediction_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * Filter, which prediction_logs to fetch.
     */
    where?: prediction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_logs to fetch.
     */
    orderBy?: prediction_logsOrderByWithRelationInput | prediction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prediction_logs.
     */
    cursor?: prediction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prediction_logs.
     */
    distinct?: Prediction_logsScalarFieldEnum | Prediction_logsScalarFieldEnum[]
  }

  /**
   * prediction_logs findMany
   */
  export type prediction_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * Filter, which prediction_logs to fetch.
     */
    where?: prediction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_logs to fetch.
     */
    orderBy?: prediction_logsOrderByWithRelationInput | prediction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prediction_logs.
     */
    cursor?: prediction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_logs.
     */
    skip?: number
    distinct?: Prediction_logsScalarFieldEnum | Prediction_logsScalarFieldEnum[]
  }

  /**
   * prediction_logs create
   */
  export type prediction_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a prediction_logs.
     */
    data: XOR<prediction_logsCreateInput, prediction_logsUncheckedCreateInput>
  }

  /**
   * prediction_logs createMany
   */
  export type prediction_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prediction_logs.
     */
    data: prediction_logsCreateManyInput | prediction_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prediction_logs createManyAndReturn
   */
  export type prediction_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * The data used to create many prediction_logs.
     */
    data: prediction_logsCreateManyInput | prediction_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prediction_logs update
   */
  export type prediction_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a prediction_logs.
     */
    data: XOR<prediction_logsUpdateInput, prediction_logsUncheckedUpdateInput>
    /**
     * Choose, which prediction_logs to update.
     */
    where: prediction_logsWhereUniqueInput
  }

  /**
   * prediction_logs updateMany
   */
  export type prediction_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prediction_logs.
     */
    data: XOR<prediction_logsUpdateManyMutationInput, prediction_logsUncheckedUpdateManyInput>
    /**
     * Filter which prediction_logs to update
     */
    where?: prediction_logsWhereInput
    /**
     * Limit how many prediction_logs to update.
     */
    limit?: number
  }

  /**
   * prediction_logs updateManyAndReturn
   */
  export type prediction_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * The data used to update prediction_logs.
     */
    data: XOR<prediction_logsUpdateManyMutationInput, prediction_logsUncheckedUpdateManyInput>
    /**
     * Filter which prediction_logs to update
     */
    where?: prediction_logsWhereInput
    /**
     * Limit how many prediction_logs to update.
     */
    limit?: number
  }

  /**
   * prediction_logs upsert
   */
  export type prediction_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the prediction_logs to update in case it exists.
     */
    where: prediction_logsWhereUniqueInput
    /**
     * In case the prediction_logs found by the `where` argument doesn't exist, create a new prediction_logs with this data.
     */
    create: XOR<prediction_logsCreateInput, prediction_logsUncheckedCreateInput>
    /**
     * In case the prediction_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prediction_logsUpdateInput, prediction_logsUncheckedUpdateInput>
  }

  /**
   * prediction_logs delete
   */
  export type prediction_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
    /**
     * Filter which prediction_logs to delete.
     */
    where: prediction_logsWhereUniqueInput
  }

  /**
   * prediction_logs deleteMany
   */
  export type prediction_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prediction_logs to delete
     */
    where?: prediction_logsWhereInput
    /**
     * Limit how many prediction_logs to delete.
     */
    limit?: number
  }

  /**
   * prediction_logs.prediction_inaccuracies
   */
  export type prediction_logs$prediction_inaccuraciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    where?: prediction_inaccuraciesWhereInput
  }

  /**
   * prediction_logs without action
   */
  export type prediction_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_logs
     */
    select?: prediction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_logs
     */
    omit?: prediction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_logsInclude<ExtArgs> | null
  }


  /**
   * Model prediction_inaccuracies
   */

  export type AggregatePrediction_inaccuracies = {
    _count: Prediction_inaccuraciesCountAggregateOutputType | null
    _avg: Prediction_inaccuraciesAvgAggregateOutputType | null
    _sum: Prediction_inaccuraciesSumAggregateOutputType | null
    _min: Prediction_inaccuraciesMinAggregateOutputType | null
    _max: Prediction_inaccuraciesMaxAggregateOutputType | null
  }

  export type Prediction_inaccuraciesAvgAggregateOutputType = {
    prediction_inaccuracy_supposed_ils_label: number | null
    prediction_inaccuracy_supposed_rnav_label: number | null
    prediction_inaccuracy_supposed_rnp_label: number | null
    prediction_inaccuracy_supposed_visual_label: number | null
  }

  export type Prediction_inaccuraciesSumAggregateOutputType = {
    prediction_inaccuracy_supposed_ils_label: number | null
    prediction_inaccuracy_supposed_rnav_label: number | null
    prediction_inaccuracy_supposed_rnp_label: number | null
    prediction_inaccuracy_supposed_visual_label: number | null
  }

  export type Prediction_inaccuraciesMinAggregateOutputType = {
    prediction_inaccuracy_id: string | null
    prediction_log_id: string | null
    prediction_inaccuracy_supposed_ils_label: number | null
    prediction_inaccuracy_supposed_rnav_label: number | null
    prediction_inaccuracy_supposed_rnp_label: number | null
    prediction_inaccuracy_supposed_visual_label: number | null
    prediction_inaccuracy_additional_comments: string | null
  }

  export type Prediction_inaccuraciesMaxAggregateOutputType = {
    prediction_inaccuracy_id: string | null
    prediction_log_id: string | null
    prediction_inaccuracy_supposed_ils_label: number | null
    prediction_inaccuracy_supposed_rnav_label: number | null
    prediction_inaccuracy_supposed_rnp_label: number | null
    prediction_inaccuracy_supposed_visual_label: number | null
    prediction_inaccuracy_additional_comments: string | null
  }

  export type Prediction_inaccuraciesCountAggregateOutputType = {
    prediction_inaccuracy_id: number
    prediction_log_id: number
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments: number
    _all: number
  }


  export type Prediction_inaccuraciesAvgAggregateInputType = {
    prediction_inaccuracy_supposed_ils_label?: true
    prediction_inaccuracy_supposed_rnav_label?: true
    prediction_inaccuracy_supposed_rnp_label?: true
    prediction_inaccuracy_supposed_visual_label?: true
  }

  export type Prediction_inaccuraciesSumAggregateInputType = {
    prediction_inaccuracy_supposed_ils_label?: true
    prediction_inaccuracy_supposed_rnav_label?: true
    prediction_inaccuracy_supposed_rnp_label?: true
    prediction_inaccuracy_supposed_visual_label?: true
  }

  export type Prediction_inaccuraciesMinAggregateInputType = {
    prediction_inaccuracy_id?: true
    prediction_log_id?: true
    prediction_inaccuracy_supposed_ils_label?: true
    prediction_inaccuracy_supposed_rnav_label?: true
    prediction_inaccuracy_supposed_rnp_label?: true
    prediction_inaccuracy_supposed_visual_label?: true
    prediction_inaccuracy_additional_comments?: true
  }

  export type Prediction_inaccuraciesMaxAggregateInputType = {
    prediction_inaccuracy_id?: true
    prediction_log_id?: true
    prediction_inaccuracy_supposed_ils_label?: true
    prediction_inaccuracy_supposed_rnav_label?: true
    prediction_inaccuracy_supposed_rnp_label?: true
    prediction_inaccuracy_supposed_visual_label?: true
    prediction_inaccuracy_additional_comments?: true
  }

  export type Prediction_inaccuraciesCountAggregateInputType = {
    prediction_inaccuracy_id?: true
    prediction_log_id?: true
    prediction_inaccuracy_supposed_ils_label?: true
    prediction_inaccuracy_supposed_rnav_label?: true
    prediction_inaccuracy_supposed_rnp_label?: true
    prediction_inaccuracy_supposed_visual_label?: true
    prediction_inaccuracy_additional_comments?: true
    _all?: true
  }

  export type Prediction_inaccuraciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prediction_inaccuracies to aggregate.
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_inaccuracies to fetch.
     */
    orderBy?: prediction_inaccuraciesOrderByWithRelationInput | prediction_inaccuraciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prediction_inaccuraciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_inaccuracies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_inaccuracies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prediction_inaccuracies
    **/
    _count?: true | Prediction_inaccuraciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prediction_inaccuraciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prediction_inaccuraciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prediction_inaccuraciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prediction_inaccuraciesMaxAggregateInputType
  }

  export type GetPrediction_inaccuraciesAggregateType<T extends Prediction_inaccuraciesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction_inaccuracies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction_inaccuracies[P]>
      : GetScalarType<T[P], AggregatePrediction_inaccuracies[P]>
  }




  export type prediction_inaccuraciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prediction_inaccuraciesWhereInput
    orderBy?: prediction_inaccuraciesOrderByWithAggregationInput | prediction_inaccuraciesOrderByWithAggregationInput[]
    by: Prediction_inaccuraciesScalarFieldEnum[] | Prediction_inaccuraciesScalarFieldEnum
    having?: prediction_inaccuraciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prediction_inaccuraciesCountAggregateInputType | true
    _avg?: Prediction_inaccuraciesAvgAggregateInputType
    _sum?: Prediction_inaccuraciesSumAggregateInputType
    _min?: Prediction_inaccuraciesMinAggregateInputType
    _max?: Prediction_inaccuraciesMaxAggregateInputType
  }

  export type Prediction_inaccuraciesGroupByOutputType = {
    prediction_inaccuracy_id: string
    prediction_log_id: string
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments: string | null
    _count: Prediction_inaccuraciesCountAggregateOutputType | null
    _avg: Prediction_inaccuraciesAvgAggregateOutputType | null
    _sum: Prediction_inaccuraciesSumAggregateOutputType | null
    _min: Prediction_inaccuraciesMinAggregateOutputType | null
    _max: Prediction_inaccuraciesMaxAggregateOutputType | null
  }

  type GetPrediction_inaccuraciesGroupByPayload<T extends prediction_inaccuraciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prediction_inaccuraciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prediction_inaccuraciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prediction_inaccuraciesGroupByOutputType[P]>
            : GetScalarType<T[P], Prediction_inaccuraciesGroupByOutputType[P]>
        }
      >
    >


  export type prediction_inaccuraciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_inaccuracy_id?: boolean
    prediction_log_id?: boolean
    prediction_inaccuracy_supposed_ils_label?: boolean
    prediction_inaccuracy_supposed_rnav_label?: boolean
    prediction_inaccuracy_supposed_rnp_label?: boolean
    prediction_inaccuracy_supposed_visual_label?: boolean
    prediction_inaccuracy_additional_comments?: boolean
    prediction_log?: boolean | prediction_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction_inaccuracies"]>

  export type prediction_inaccuraciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_inaccuracy_id?: boolean
    prediction_log_id?: boolean
    prediction_inaccuracy_supposed_ils_label?: boolean
    prediction_inaccuracy_supposed_rnav_label?: boolean
    prediction_inaccuracy_supposed_rnp_label?: boolean
    prediction_inaccuracy_supposed_visual_label?: boolean
    prediction_inaccuracy_additional_comments?: boolean
    prediction_log?: boolean | prediction_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction_inaccuracies"]>

  export type prediction_inaccuraciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_inaccuracy_id?: boolean
    prediction_log_id?: boolean
    prediction_inaccuracy_supposed_ils_label?: boolean
    prediction_inaccuracy_supposed_rnav_label?: boolean
    prediction_inaccuracy_supposed_rnp_label?: boolean
    prediction_inaccuracy_supposed_visual_label?: boolean
    prediction_inaccuracy_additional_comments?: boolean
    prediction_log?: boolean | prediction_logsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction_inaccuracies"]>

  export type prediction_inaccuraciesSelectScalar = {
    prediction_inaccuracy_id?: boolean
    prediction_log_id?: boolean
    prediction_inaccuracy_supposed_ils_label?: boolean
    prediction_inaccuracy_supposed_rnav_label?: boolean
    prediction_inaccuracy_supposed_rnp_label?: boolean
    prediction_inaccuracy_supposed_visual_label?: boolean
    prediction_inaccuracy_additional_comments?: boolean
  }

  export type prediction_inaccuraciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_inaccuracy_id" | "prediction_log_id" | "prediction_inaccuracy_supposed_ils_label" | "prediction_inaccuracy_supposed_rnav_label" | "prediction_inaccuracy_supposed_rnp_label" | "prediction_inaccuracy_supposed_visual_label" | "prediction_inaccuracy_additional_comments", ExtArgs["result"]["prediction_inaccuracies"]>
  export type prediction_inaccuraciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction_log?: boolean | prediction_logsDefaultArgs<ExtArgs>
  }
  export type prediction_inaccuraciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction_log?: boolean | prediction_logsDefaultArgs<ExtArgs>
  }
  export type prediction_inaccuraciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction_log?: boolean | prediction_logsDefaultArgs<ExtArgs>
  }

  export type $prediction_inaccuraciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prediction_inaccuracies"
    objects: {
      prediction_log: Prisma.$prediction_logsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_inaccuracy_id: string
      prediction_log_id: string
      prediction_inaccuracy_supposed_ils_label: number
      prediction_inaccuracy_supposed_rnav_label: number
      prediction_inaccuracy_supposed_rnp_label: number
      prediction_inaccuracy_supposed_visual_label: number
      prediction_inaccuracy_additional_comments: string | null
    }, ExtArgs["result"]["prediction_inaccuracies"]>
    composites: {}
  }

  type prediction_inaccuraciesGetPayload<S extends boolean | null | undefined | prediction_inaccuraciesDefaultArgs> = $Result.GetResult<Prisma.$prediction_inaccuraciesPayload, S>

  type prediction_inaccuraciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prediction_inaccuraciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prediction_inaccuraciesCountAggregateInputType | true
    }

  export interface prediction_inaccuraciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prediction_inaccuracies'], meta: { name: 'prediction_inaccuracies' } }
    /**
     * Find zero or one Prediction_inaccuracies that matches the filter.
     * @param {prediction_inaccuraciesFindUniqueArgs} args - Arguments to find a Prediction_inaccuracies
     * @example
     * // Get one Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prediction_inaccuraciesFindUniqueArgs>(args: SelectSubset<T, prediction_inaccuraciesFindUniqueArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction_inaccuracies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prediction_inaccuraciesFindUniqueOrThrowArgs} args - Arguments to find a Prediction_inaccuracies
     * @example
     * // Get one Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prediction_inaccuraciesFindUniqueOrThrowArgs>(args: SelectSubset<T, prediction_inaccuraciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction_inaccuracies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_inaccuraciesFindFirstArgs} args - Arguments to find a Prediction_inaccuracies
     * @example
     * // Get one Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prediction_inaccuraciesFindFirstArgs>(args?: SelectSubset<T, prediction_inaccuraciesFindFirstArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction_inaccuracies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_inaccuraciesFindFirstOrThrowArgs} args - Arguments to find a Prediction_inaccuracies
     * @example
     * // Get one Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prediction_inaccuraciesFindFirstOrThrowArgs>(args?: SelectSubset<T, prediction_inaccuraciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prediction_inaccuracies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_inaccuraciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findMany()
     * 
     * // Get first 10 Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.findMany({ take: 10 })
     * 
     * // Only select the `prediction_inaccuracy_id`
     * const prediction_inaccuraciesWithPrediction_inaccuracy_idOnly = await prisma.prediction_inaccuracies.findMany({ select: { prediction_inaccuracy_id: true } })
     * 
     */
    findMany<T extends prediction_inaccuraciesFindManyArgs>(args?: SelectSubset<T, prediction_inaccuraciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction_inaccuracies.
     * @param {prediction_inaccuraciesCreateArgs} args - Arguments to create a Prediction_inaccuracies.
     * @example
     * // Create one Prediction_inaccuracies
     * const Prediction_inaccuracies = await prisma.prediction_inaccuracies.create({
     *   data: {
     *     // ... data to create a Prediction_inaccuracies
     *   }
     * })
     * 
     */
    create<T extends prediction_inaccuraciesCreateArgs>(args: SelectSubset<T, prediction_inaccuraciesCreateArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prediction_inaccuracies.
     * @param {prediction_inaccuraciesCreateManyArgs} args - Arguments to create many Prediction_inaccuracies.
     * @example
     * // Create many Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prediction_inaccuraciesCreateManyArgs>(args?: SelectSubset<T, prediction_inaccuraciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prediction_inaccuracies and returns the data saved in the database.
     * @param {prediction_inaccuraciesCreateManyAndReturnArgs} args - Arguments to create many Prediction_inaccuracies.
     * @example
     * // Create many Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prediction_inaccuracies and only return the `prediction_inaccuracy_id`
     * const prediction_inaccuraciesWithPrediction_inaccuracy_idOnly = await prisma.prediction_inaccuracies.createManyAndReturn({
     *   select: { prediction_inaccuracy_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prediction_inaccuraciesCreateManyAndReturnArgs>(args?: SelectSubset<T, prediction_inaccuraciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prediction_inaccuracies.
     * @param {prediction_inaccuraciesDeleteArgs} args - Arguments to delete one Prediction_inaccuracies.
     * @example
     * // Delete one Prediction_inaccuracies
     * const Prediction_inaccuracies = await prisma.prediction_inaccuracies.delete({
     *   where: {
     *     // ... filter to delete one Prediction_inaccuracies
     *   }
     * })
     * 
     */
    delete<T extends prediction_inaccuraciesDeleteArgs>(args: SelectSubset<T, prediction_inaccuraciesDeleteArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction_inaccuracies.
     * @param {prediction_inaccuraciesUpdateArgs} args - Arguments to update one Prediction_inaccuracies.
     * @example
     * // Update one Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prediction_inaccuraciesUpdateArgs>(args: SelectSubset<T, prediction_inaccuraciesUpdateArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prediction_inaccuracies.
     * @param {prediction_inaccuraciesDeleteManyArgs} args - Arguments to filter Prediction_inaccuracies to delete.
     * @example
     * // Delete a few Prediction_inaccuracies
     * const { count } = await prisma.prediction_inaccuracies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prediction_inaccuraciesDeleteManyArgs>(args?: SelectSubset<T, prediction_inaccuraciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prediction_inaccuracies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_inaccuraciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prediction_inaccuraciesUpdateManyArgs>(args: SelectSubset<T, prediction_inaccuraciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prediction_inaccuracies and returns the data updated in the database.
     * @param {prediction_inaccuraciesUpdateManyAndReturnArgs} args - Arguments to update many Prediction_inaccuracies.
     * @example
     * // Update many Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prediction_inaccuracies and only return the `prediction_inaccuracy_id`
     * const prediction_inaccuraciesWithPrediction_inaccuracy_idOnly = await prisma.prediction_inaccuracies.updateManyAndReturn({
     *   select: { prediction_inaccuracy_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prediction_inaccuraciesUpdateManyAndReturnArgs>(args: SelectSubset<T, prediction_inaccuraciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prediction_inaccuracies.
     * @param {prediction_inaccuraciesUpsertArgs} args - Arguments to update or create a Prediction_inaccuracies.
     * @example
     * // Update or create a Prediction_inaccuracies
     * const prediction_inaccuracies = await prisma.prediction_inaccuracies.upsert({
     *   create: {
     *     // ... data to create a Prediction_inaccuracies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction_inaccuracies we want to update
     *   }
     * })
     */
    upsert<T extends prediction_inaccuraciesUpsertArgs>(args: SelectSubset<T, prediction_inaccuraciesUpsertArgs<ExtArgs>>): Prisma__prediction_inaccuraciesClient<$Result.GetResult<Prisma.$prediction_inaccuraciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prediction_inaccuracies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_inaccuraciesCountArgs} args - Arguments to filter Prediction_inaccuracies to count.
     * @example
     * // Count the number of Prediction_inaccuracies
     * const count = await prisma.prediction_inaccuracies.count({
     *   where: {
     *     // ... the filter for the Prediction_inaccuracies we want to count
     *   }
     * })
    **/
    count<T extends prediction_inaccuraciesCountArgs>(
      args?: Subset<T, prediction_inaccuraciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prediction_inaccuraciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction_inaccuracies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prediction_inaccuraciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prediction_inaccuraciesAggregateArgs>(args: Subset<T, Prediction_inaccuraciesAggregateArgs>): Prisma.PrismaPromise<GetPrediction_inaccuraciesAggregateType<T>>

    /**
     * Group by Prediction_inaccuracies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prediction_inaccuraciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prediction_inaccuraciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prediction_inaccuraciesGroupByArgs['orderBy'] }
        : { orderBy?: prediction_inaccuraciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prediction_inaccuraciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrediction_inaccuraciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prediction_inaccuracies model
   */
  readonly fields: prediction_inaccuraciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prediction_inaccuracies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prediction_inaccuraciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prediction_log<T extends prediction_logsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prediction_logsDefaultArgs<ExtArgs>>): Prisma__prediction_logsClient<$Result.GetResult<Prisma.$prediction_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prediction_inaccuracies model
   */
  interface prediction_inaccuraciesFieldRefs {
    readonly prediction_inaccuracy_id: FieldRef<"prediction_inaccuracies", 'String'>
    readonly prediction_log_id: FieldRef<"prediction_inaccuracies", 'String'>
    readonly prediction_inaccuracy_supposed_ils_label: FieldRef<"prediction_inaccuracies", 'Int'>
    readonly prediction_inaccuracy_supposed_rnav_label: FieldRef<"prediction_inaccuracies", 'Int'>
    readonly prediction_inaccuracy_supposed_rnp_label: FieldRef<"prediction_inaccuracies", 'Int'>
    readonly prediction_inaccuracy_supposed_visual_label: FieldRef<"prediction_inaccuracies", 'Int'>
    readonly prediction_inaccuracy_additional_comments: FieldRef<"prediction_inaccuracies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prediction_inaccuracies findUnique
   */
  export type prediction_inaccuraciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * Filter, which prediction_inaccuracies to fetch.
     */
    where: prediction_inaccuraciesWhereUniqueInput
  }

  /**
   * prediction_inaccuracies findUniqueOrThrow
   */
  export type prediction_inaccuraciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * Filter, which prediction_inaccuracies to fetch.
     */
    where: prediction_inaccuraciesWhereUniqueInput
  }

  /**
   * prediction_inaccuracies findFirst
   */
  export type prediction_inaccuraciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * Filter, which prediction_inaccuracies to fetch.
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_inaccuracies to fetch.
     */
    orderBy?: prediction_inaccuraciesOrderByWithRelationInput | prediction_inaccuraciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prediction_inaccuracies.
     */
    cursor?: prediction_inaccuraciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_inaccuracies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_inaccuracies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prediction_inaccuracies.
     */
    distinct?: Prediction_inaccuraciesScalarFieldEnum | Prediction_inaccuraciesScalarFieldEnum[]
  }

  /**
   * prediction_inaccuracies findFirstOrThrow
   */
  export type prediction_inaccuraciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * Filter, which prediction_inaccuracies to fetch.
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_inaccuracies to fetch.
     */
    orderBy?: prediction_inaccuraciesOrderByWithRelationInput | prediction_inaccuraciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prediction_inaccuracies.
     */
    cursor?: prediction_inaccuraciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_inaccuracies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_inaccuracies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prediction_inaccuracies.
     */
    distinct?: Prediction_inaccuraciesScalarFieldEnum | Prediction_inaccuraciesScalarFieldEnum[]
  }

  /**
   * prediction_inaccuracies findMany
   */
  export type prediction_inaccuraciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * Filter, which prediction_inaccuracies to fetch.
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prediction_inaccuracies to fetch.
     */
    orderBy?: prediction_inaccuraciesOrderByWithRelationInput | prediction_inaccuraciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prediction_inaccuracies.
     */
    cursor?: prediction_inaccuraciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prediction_inaccuracies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prediction_inaccuracies.
     */
    skip?: number
    distinct?: Prediction_inaccuraciesScalarFieldEnum | Prediction_inaccuraciesScalarFieldEnum[]
  }

  /**
   * prediction_inaccuracies create
   */
  export type prediction_inaccuraciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * The data needed to create a prediction_inaccuracies.
     */
    data: XOR<prediction_inaccuraciesCreateInput, prediction_inaccuraciesUncheckedCreateInput>
  }

  /**
   * prediction_inaccuracies createMany
   */
  export type prediction_inaccuraciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prediction_inaccuracies.
     */
    data: prediction_inaccuraciesCreateManyInput | prediction_inaccuraciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prediction_inaccuracies createManyAndReturn
   */
  export type prediction_inaccuraciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * The data used to create many prediction_inaccuracies.
     */
    data: prediction_inaccuraciesCreateManyInput | prediction_inaccuraciesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prediction_inaccuracies update
   */
  export type prediction_inaccuraciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * The data needed to update a prediction_inaccuracies.
     */
    data: XOR<prediction_inaccuraciesUpdateInput, prediction_inaccuraciesUncheckedUpdateInput>
    /**
     * Choose, which prediction_inaccuracies to update.
     */
    where: prediction_inaccuraciesWhereUniqueInput
  }

  /**
   * prediction_inaccuracies updateMany
   */
  export type prediction_inaccuraciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prediction_inaccuracies.
     */
    data: XOR<prediction_inaccuraciesUpdateManyMutationInput, prediction_inaccuraciesUncheckedUpdateManyInput>
    /**
     * Filter which prediction_inaccuracies to update
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * Limit how many prediction_inaccuracies to update.
     */
    limit?: number
  }

  /**
   * prediction_inaccuracies updateManyAndReturn
   */
  export type prediction_inaccuraciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * The data used to update prediction_inaccuracies.
     */
    data: XOR<prediction_inaccuraciesUpdateManyMutationInput, prediction_inaccuraciesUncheckedUpdateManyInput>
    /**
     * Filter which prediction_inaccuracies to update
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * Limit how many prediction_inaccuracies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prediction_inaccuracies upsert
   */
  export type prediction_inaccuraciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * The filter to search for the prediction_inaccuracies to update in case it exists.
     */
    where: prediction_inaccuraciesWhereUniqueInput
    /**
     * In case the prediction_inaccuracies found by the `where` argument doesn't exist, create a new prediction_inaccuracies with this data.
     */
    create: XOR<prediction_inaccuraciesCreateInput, prediction_inaccuraciesUncheckedCreateInput>
    /**
     * In case the prediction_inaccuracies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prediction_inaccuraciesUpdateInput, prediction_inaccuraciesUncheckedUpdateInput>
  }

  /**
   * prediction_inaccuracies delete
   */
  export type prediction_inaccuraciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
    /**
     * Filter which prediction_inaccuracies to delete.
     */
    where: prediction_inaccuraciesWhereUniqueInput
  }

  /**
   * prediction_inaccuracies deleteMany
   */
  export type prediction_inaccuraciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prediction_inaccuracies to delete
     */
    where?: prediction_inaccuraciesWhereInput
    /**
     * Limit how many prediction_inaccuracies to delete.
     */
    limit?: number
  }

  /**
   * prediction_inaccuracies without action
   */
  export type prediction_inaccuraciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prediction_inaccuracies
     */
    select?: prediction_inaccuraciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prediction_inaccuracies
     */
    omit?: prediction_inaccuraciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prediction_inaccuraciesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Prediction_logsScalarFieldEnum: {
    prediction_log_id: 'prediction_log_id',
    prediction_log_airport_icao: 'prediction_log_airport_icao',
    prediction_log_visibility: 'prediction_log_visibility',
    prediction_log_wind_speed: 'prediction_log_wind_speed',
    prediction_log_wind_gust: 'prediction_log_wind_gust',
    prediction_log_wind_direction: 'prediction_log_wind_direction',
    prediction_log_rvr: 'prediction_log_rvr',
    prediction_log_runway_designator_number: 'prediction_log_runway_designator_number',
    prediction_log_runway_designator_side: 'prediction_log_runway_designator_side',
    prediction_log_runway_ils_category: 'prediction_log_runway_ils_category',
    prediction_log_headwind: 'prediction_log_headwind',
    prediction_log_crosswind: 'prediction_log_crosswind',
    prediction_log_ceiling: 'prediction_log_ceiling',
    prediction_log_weather_phenomenon: 'prediction_log_weather_phenomenon',
    prediction_log_ils_label: 'prediction_log_ils_label',
    prediction_log_rnav_label: 'prediction_log_rnav_label',
    prediction_log_rnp_label: 'prediction_log_rnp_label',
    prediction_log_visual_label: 'prediction_log_visual_label'
  };

  export type Prediction_logsScalarFieldEnum = (typeof Prediction_logsScalarFieldEnum)[keyof typeof Prediction_logsScalarFieldEnum]


  export const Prediction_inaccuraciesScalarFieldEnum: {
    prediction_inaccuracy_id: 'prediction_inaccuracy_id',
    prediction_log_id: 'prediction_log_id',
    prediction_inaccuracy_supposed_ils_label: 'prediction_inaccuracy_supposed_ils_label',
    prediction_inaccuracy_supposed_rnav_label: 'prediction_inaccuracy_supposed_rnav_label',
    prediction_inaccuracy_supposed_rnp_label: 'prediction_inaccuracy_supposed_rnp_label',
    prediction_inaccuracy_supposed_visual_label: 'prediction_inaccuracy_supposed_visual_label',
    prediction_inaccuracy_additional_comments: 'prediction_inaccuracy_additional_comments'
  };

  export type Prediction_inaccuraciesScalarFieldEnum = (typeof Prediction_inaccuraciesScalarFieldEnum)[keyof typeof Prediction_inaccuraciesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type prediction_logsWhereInput = {
    AND?: prediction_logsWhereInput | prediction_logsWhereInput[]
    OR?: prediction_logsWhereInput[]
    NOT?: prediction_logsWhereInput | prediction_logsWhereInput[]
    prediction_log_id?: StringFilter<"prediction_logs"> | string
    prediction_log_airport_icao?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_visibility?: FloatFilter<"prediction_logs"> | number
    prediction_log_wind_speed?: IntFilter<"prediction_logs"> | number
    prediction_log_wind_gust?: IntFilter<"prediction_logs"> | number
    prediction_log_wind_direction?: IntFilter<"prediction_logs"> | number
    prediction_log_rvr?: StringFilter<"prediction_logs"> | string
    prediction_log_runway_designator_number?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_runway_designator_side?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_runway_ils_category?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_headwind?: FloatFilter<"prediction_logs"> | number
    prediction_log_crosswind?: FloatFilter<"prediction_logs"> | number
    prediction_log_ceiling?: IntFilter<"prediction_logs"> | number
    prediction_log_weather_phenomenon?: StringFilter<"prediction_logs"> | string
    prediction_log_ils_label?: IntFilter<"prediction_logs"> | number
    prediction_log_rnav_label?: IntFilter<"prediction_logs"> | number
    prediction_log_rnp_label?: IntFilter<"prediction_logs"> | number
    prediction_log_visual_label?: IntFilter<"prediction_logs"> | number
    prediction_inaccuracies?: XOR<Prediction_inaccuraciesNullableScalarRelationFilter, prediction_inaccuraciesWhereInput> | null
  }

  export type prediction_logsOrderByWithRelationInput = {
    prediction_log_id?: SortOrder
    prediction_log_airport_icao?: SortOrderInput | SortOrder
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_rvr?: SortOrder
    prediction_log_runway_designator_number?: SortOrderInput | SortOrder
    prediction_log_runway_designator_side?: SortOrderInput | SortOrder
    prediction_log_runway_ils_category?: SortOrderInput | SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_weather_phenomenon?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
    prediction_inaccuracies?: prediction_inaccuraciesOrderByWithRelationInput
  }

  export type prediction_logsWhereUniqueInput = Prisma.AtLeast<{
    prediction_log_id?: string
    AND?: prediction_logsWhereInput | prediction_logsWhereInput[]
    OR?: prediction_logsWhereInput[]
    NOT?: prediction_logsWhereInput | prediction_logsWhereInput[]
    prediction_log_airport_icao?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_visibility?: FloatFilter<"prediction_logs"> | number
    prediction_log_wind_speed?: IntFilter<"prediction_logs"> | number
    prediction_log_wind_gust?: IntFilter<"prediction_logs"> | number
    prediction_log_wind_direction?: IntFilter<"prediction_logs"> | number
    prediction_log_rvr?: StringFilter<"prediction_logs"> | string
    prediction_log_runway_designator_number?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_runway_designator_side?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_runway_ils_category?: StringNullableFilter<"prediction_logs"> | string | null
    prediction_log_headwind?: FloatFilter<"prediction_logs"> | number
    prediction_log_crosswind?: FloatFilter<"prediction_logs"> | number
    prediction_log_ceiling?: IntFilter<"prediction_logs"> | number
    prediction_log_weather_phenomenon?: StringFilter<"prediction_logs"> | string
    prediction_log_ils_label?: IntFilter<"prediction_logs"> | number
    prediction_log_rnav_label?: IntFilter<"prediction_logs"> | number
    prediction_log_rnp_label?: IntFilter<"prediction_logs"> | number
    prediction_log_visual_label?: IntFilter<"prediction_logs"> | number
    prediction_inaccuracies?: XOR<Prediction_inaccuraciesNullableScalarRelationFilter, prediction_inaccuraciesWhereInput> | null
  }, "prediction_log_id">

  export type prediction_logsOrderByWithAggregationInput = {
    prediction_log_id?: SortOrder
    prediction_log_airport_icao?: SortOrderInput | SortOrder
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_rvr?: SortOrder
    prediction_log_runway_designator_number?: SortOrderInput | SortOrder
    prediction_log_runway_designator_side?: SortOrderInput | SortOrder
    prediction_log_runway_ils_category?: SortOrderInput | SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_weather_phenomenon?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
    _count?: prediction_logsCountOrderByAggregateInput
    _avg?: prediction_logsAvgOrderByAggregateInput
    _max?: prediction_logsMaxOrderByAggregateInput
    _min?: prediction_logsMinOrderByAggregateInput
    _sum?: prediction_logsSumOrderByAggregateInput
  }

  export type prediction_logsScalarWhereWithAggregatesInput = {
    AND?: prediction_logsScalarWhereWithAggregatesInput | prediction_logsScalarWhereWithAggregatesInput[]
    OR?: prediction_logsScalarWhereWithAggregatesInput[]
    NOT?: prediction_logsScalarWhereWithAggregatesInput | prediction_logsScalarWhereWithAggregatesInput[]
    prediction_log_id?: StringWithAggregatesFilter<"prediction_logs"> | string
    prediction_log_airport_icao?: StringNullableWithAggregatesFilter<"prediction_logs"> | string | null
    prediction_log_visibility?: FloatWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_wind_speed?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_wind_gust?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_wind_direction?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_rvr?: StringWithAggregatesFilter<"prediction_logs"> | string
    prediction_log_runway_designator_number?: StringNullableWithAggregatesFilter<"prediction_logs"> | string | null
    prediction_log_runway_designator_side?: StringNullableWithAggregatesFilter<"prediction_logs"> | string | null
    prediction_log_runway_ils_category?: StringNullableWithAggregatesFilter<"prediction_logs"> | string | null
    prediction_log_headwind?: FloatWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_crosswind?: FloatWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_ceiling?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_weather_phenomenon?: StringWithAggregatesFilter<"prediction_logs"> | string
    prediction_log_ils_label?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_rnav_label?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_rnp_label?: IntWithAggregatesFilter<"prediction_logs"> | number
    prediction_log_visual_label?: IntWithAggregatesFilter<"prediction_logs"> | number
  }

  export type prediction_inaccuraciesWhereInput = {
    AND?: prediction_inaccuraciesWhereInput | prediction_inaccuraciesWhereInput[]
    OR?: prediction_inaccuraciesWhereInput[]
    NOT?: prediction_inaccuraciesWhereInput | prediction_inaccuraciesWhereInput[]
    prediction_inaccuracy_id?: StringFilter<"prediction_inaccuracies"> | string
    prediction_log_id?: StringFilter<"prediction_inaccuracies"> | string
    prediction_inaccuracy_supposed_ils_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_rnav_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_rnp_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_visual_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_additional_comments?: StringNullableFilter<"prediction_inaccuracies"> | string | null
    prediction_log?: XOR<Prediction_logsScalarRelationFilter, prediction_logsWhereInput>
  }

  export type prediction_inaccuraciesOrderByWithRelationInput = {
    prediction_inaccuracy_id?: SortOrder
    prediction_log_id?: SortOrder
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
    prediction_inaccuracy_additional_comments?: SortOrderInput | SortOrder
    prediction_log?: prediction_logsOrderByWithRelationInput
  }

  export type prediction_inaccuraciesWhereUniqueInput = Prisma.AtLeast<{
    prediction_inaccuracy_id?: string
    prediction_log_id?: string
    AND?: prediction_inaccuraciesWhereInput | prediction_inaccuraciesWhereInput[]
    OR?: prediction_inaccuraciesWhereInput[]
    NOT?: prediction_inaccuraciesWhereInput | prediction_inaccuraciesWhereInput[]
    prediction_inaccuracy_supposed_ils_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_rnav_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_rnp_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_visual_label?: IntFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_additional_comments?: StringNullableFilter<"prediction_inaccuracies"> | string | null
    prediction_log?: XOR<Prediction_logsScalarRelationFilter, prediction_logsWhereInput>
  }, "prediction_inaccuracy_id" | "prediction_log_id">

  export type prediction_inaccuraciesOrderByWithAggregationInput = {
    prediction_inaccuracy_id?: SortOrder
    prediction_log_id?: SortOrder
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
    prediction_inaccuracy_additional_comments?: SortOrderInput | SortOrder
    _count?: prediction_inaccuraciesCountOrderByAggregateInput
    _avg?: prediction_inaccuraciesAvgOrderByAggregateInput
    _max?: prediction_inaccuraciesMaxOrderByAggregateInput
    _min?: prediction_inaccuraciesMinOrderByAggregateInput
    _sum?: prediction_inaccuraciesSumOrderByAggregateInput
  }

  export type prediction_inaccuraciesScalarWhereWithAggregatesInput = {
    AND?: prediction_inaccuraciesScalarWhereWithAggregatesInput | prediction_inaccuraciesScalarWhereWithAggregatesInput[]
    OR?: prediction_inaccuraciesScalarWhereWithAggregatesInput[]
    NOT?: prediction_inaccuraciesScalarWhereWithAggregatesInput | prediction_inaccuraciesScalarWhereWithAggregatesInput[]
    prediction_inaccuracy_id?: StringWithAggregatesFilter<"prediction_inaccuracies"> | string
    prediction_log_id?: StringWithAggregatesFilter<"prediction_inaccuracies"> | string
    prediction_inaccuracy_supposed_ils_label?: IntWithAggregatesFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_rnav_label?: IntWithAggregatesFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_rnp_label?: IntWithAggregatesFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_supposed_visual_label?: IntWithAggregatesFilter<"prediction_inaccuracies"> | number
    prediction_inaccuracy_additional_comments?: StringNullableWithAggregatesFilter<"prediction_inaccuracies"> | string | null
  }

  export type prediction_logsCreateInput = {
    prediction_log_id?: string
    prediction_log_airport_icao?: string | null
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: string
    prediction_log_runway_designator_number?: string | null
    prediction_log_runway_designator_side?: string | null
    prediction_log_runway_ils_category?: string | null
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: string
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
    prediction_inaccuracies?: prediction_inaccuraciesCreateNestedOneWithoutPrediction_logInput
  }

  export type prediction_logsUncheckedCreateInput = {
    prediction_log_id?: string
    prediction_log_airport_icao?: string | null
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: string
    prediction_log_runway_designator_number?: string | null
    prediction_log_runway_designator_side?: string | null
    prediction_log_runway_ils_category?: string | null
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: string
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
    prediction_inaccuracies?: prediction_inaccuraciesUncheckedCreateNestedOneWithoutPrediction_logInput
  }

  export type prediction_logsUpdateInput = {
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_log_airport_icao?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_visibility?: FloatFieldUpdateOperationsInput | number
    prediction_log_wind_speed?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_gust?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_direction?: IntFieldUpdateOperationsInput | number
    prediction_log_rvr?: StringFieldUpdateOperationsInput | string
    prediction_log_runway_designator_number?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_designator_side?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_ils_category?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_headwind?: FloatFieldUpdateOperationsInput | number
    prediction_log_crosswind?: FloatFieldUpdateOperationsInput | number
    prediction_log_ceiling?: IntFieldUpdateOperationsInput | number
    prediction_log_weather_phenomenon?: StringFieldUpdateOperationsInput | string
    prediction_log_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_log_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracies?: prediction_inaccuraciesUpdateOneWithoutPrediction_logNestedInput
  }

  export type prediction_logsUncheckedUpdateInput = {
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_log_airport_icao?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_visibility?: FloatFieldUpdateOperationsInput | number
    prediction_log_wind_speed?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_gust?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_direction?: IntFieldUpdateOperationsInput | number
    prediction_log_rvr?: StringFieldUpdateOperationsInput | string
    prediction_log_runway_designator_number?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_designator_side?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_ils_category?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_headwind?: FloatFieldUpdateOperationsInput | number
    prediction_log_crosswind?: FloatFieldUpdateOperationsInput | number
    prediction_log_ceiling?: IntFieldUpdateOperationsInput | number
    prediction_log_weather_phenomenon?: StringFieldUpdateOperationsInput | string
    prediction_log_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_log_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracies?: prediction_inaccuraciesUncheckedUpdateOneWithoutPrediction_logNestedInput
  }

  export type prediction_logsCreateManyInput = {
    prediction_log_id?: string
    prediction_log_airport_icao?: string | null
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: string
    prediction_log_runway_designator_number?: string | null
    prediction_log_runway_designator_side?: string | null
    prediction_log_runway_ils_category?: string | null
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: string
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
  }

  export type prediction_logsUpdateManyMutationInput = {
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_log_airport_icao?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_visibility?: FloatFieldUpdateOperationsInput | number
    prediction_log_wind_speed?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_gust?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_direction?: IntFieldUpdateOperationsInput | number
    prediction_log_rvr?: StringFieldUpdateOperationsInput | string
    prediction_log_runway_designator_number?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_designator_side?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_ils_category?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_headwind?: FloatFieldUpdateOperationsInput | number
    prediction_log_crosswind?: FloatFieldUpdateOperationsInput | number
    prediction_log_ceiling?: IntFieldUpdateOperationsInput | number
    prediction_log_weather_phenomenon?: StringFieldUpdateOperationsInput | string
    prediction_log_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_log_visual_label?: IntFieldUpdateOperationsInput | number
  }

  export type prediction_logsUncheckedUpdateManyInput = {
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_log_airport_icao?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_visibility?: FloatFieldUpdateOperationsInput | number
    prediction_log_wind_speed?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_gust?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_direction?: IntFieldUpdateOperationsInput | number
    prediction_log_rvr?: StringFieldUpdateOperationsInput | string
    prediction_log_runway_designator_number?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_designator_side?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_ils_category?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_headwind?: FloatFieldUpdateOperationsInput | number
    prediction_log_crosswind?: FloatFieldUpdateOperationsInput | number
    prediction_log_ceiling?: IntFieldUpdateOperationsInput | number
    prediction_log_weather_phenomenon?: StringFieldUpdateOperationsInput | string
    prediction_log_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_log_visual_label?: IntFieldUpdateOperationsInput | number
  }

  export type prediction_inaccuraciesCreateInput = {
    prediction_inaccuracy_id?: string
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments?: string | null
    prediction_log: prediction_logsCreateNestedOneWithoutPrediction_inaccuraciesInput
  }

  export type prediction_inaccuraciesUncheckedCreateInput = {
    prediction_inaccuracy_id?: string
    prediction_log_id: string
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments?: string | null
  }

  export type prediction_inaccuraciesUpdateInput = {
    prediction_inaccuracy_id?: StringFieldUpdateOperationsInput | string
    prediction_inaccuracy_supposed_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_additional_comments?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log?: prediction_logsUpdateOneRequiredWithoutPrediction_inaccuraciesNestedInput
  }

  export type prediction_inaccuraciesUncheckedUpdateInput = {
    prediction_inaccuracy_id?: StringFieldUpdateOperationsInput | string
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_inaccuracy_supposed_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_additional_comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prediction_inaccuraciesCreateManyInput = {
    prediction_inaccuracy_id?: string
    prediction_log_id: string
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments?: string | null
  }

  export type prediction_inaccuraciesUpdateManyMutationInput = {
    prediction_inaccuracy_id?: StringFieldUpdateOperationsInput | string
    prediction_inaccuracy_supposed_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_additional_comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prediction_inaccuraciesUncheckedUpdateManyInput = {
    prediction_inaccuracy_id?: StringFieldUpdateOperationsInput | string
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_inaccuracy_supposed_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_additional_comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Prediction_inaccuraciesNullableScalarRelationFilter = {
    is?: prediction_inaccuraciesWhereInput | null
    isNot?: prediction_inaccuraciesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type prediction_logsCountOrderByAggregateInput = {
    prediction_log_id?: SortOrder
    prediction_log_airport_icao?: SortOrder
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_rvr?: SortOrder
    prediction_log_runway_designator_number?: SortOrder
    prediction_log_runway_designator_side?: SortOrder
    prediction_log_runway_ils_category?: SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_weather_phenomenon?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
  }

  export type prediction_logsAvgOrderByAggregateInput = {
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
  }

  export type prediction_logsMaxOrderByAggregateInput = {
    prediction_log_id?: SortOrder
    prediction_log_airport_icao?: SortOrder
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_rvr?: SortOrder
    prediction_log_runway_designator_number?: SortOrder
    prediction_log_runway_designator_side?: SortOrder
    prediction_log_runway_ils_category?: SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_weather_phenomenon?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
  }

  export type prediction_logsMinOrderByAggregateInput = {
    prediction_log_id?: SortOrder
    prediction_log_airport_icao?: SortOrder
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_rvr?: SortOrder
    prediction_log_runway_designator_number?: SortOrder
    prediction_log_runway_designator_side?: SortOrder
    prediction_log_runway_ils_category?: SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_weather_phenomenon?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
  }

  export type prediction_logsSumOrderByAggregateInput = {
    prediction_log_visibility?: SortOrder
    prediction_log_wind_speed?: SortOrder
    prediction_log_wind_gust?: SortOrder
    prediction_log_wind_direction?: SortOrder
    prediction_log_headwind?: SortOrder
    prediction_log_crosswind?: SortOrder
    prediction_log_ceiling?: SortOrder
    prediction_log_ils_label?: SortOrder
    prediction_log_rnav_label?: SortOrder
    prediction_log_rnp_label?: SortOrder
    prediction_log_visual_label?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Prediction_logsScalarRelationFilter = {
    is?: prediction_logsWhereInput
    isNot?: prediction_logsWhereInput
  }

  export type prediction_inaccuraciesCountOrderByAggregateInput = {
    prediction_inaccuracy_id?: SortOrder
    prediction_log_id?: SortOrder
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
    prediction_inaccuracy_additional_comments?: SortOrder
  }

  export type prediction_inaccuraciesAvgOrderByAggregateInput = {
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
  }

  export type prediction_inaccuraciesMaxOrderByAggregateInput = {
    prediction_inaccuracy_id?: SortOrder
    prediction_log_id?: SortOrder
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
    prediction_inaccuracy_additional_comments?: SortOrder
  }

  export type prediction_inaccuraciesMinOrderByAggregateInput = {
    prediction_inaccuracy_id?: SortOrder
    prediction_log_id?: SortOrder
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
    prediction_inaccuracy_additional_comments?: SortOrder
  }

  export type prediction_inaccuraciesSumOrderByAggregateInput = {
    prediction_inaccuracy_supposed_ils_label?: SortOrder
    prediction_inaccuracy_supposed_rnav_label?: SortOrder
    prediction_inaccuracy_supposed_rnp_label?: SortOrder
    prediction_inaccuracy_supposed_visual_label?: SortOrder
  }

  export type prediction_inaccuraciesCreateNestedOneWithoutPrediction_logInput = {
    create?: XOR<prediction_inaccuraciesCreateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput>
    connectOrCreate?: prediction_inaccuraciesCreateOrConnectWithoutPrediction_logInput
    connect?: prediction_inaccuraciesWhereUniqueInput
  }

  export type prediction_inaccuraciesUncheckedCreateNestedOneWithoutPrediction_logInput = {
    create?: XOR<prediction_inaccuraciesCreateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput>
    connectOrCreate?: prediction_inaccuraciesCreateOrConnectWithoutPrediction_logInput
    connect?: prediction_inaccuraciesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type prediction_inaccuraciesUpdateOneWithoutPrediction_logNestedInput = {
    create?: XOR<prediction_inaccuraciesCreateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput>
    connectOrCreate?: prediction_inaccuraciesCreateOrConnectWithoutPrediction_logInput
    upsert?: prediction_inaccuraciesUpsertWithoutPrediction_logInput
    disconnect?: prediction_inaccuraciesWhereInput | boolean
    delete?: prediction_inaccuraciesWhereInput | boolean
    connect?: prediction_inaccuraciesWhereUniqueInput
    update?: XOR<XOR<prediction_inaccuraciesUpdateToOneWithWhereWithoutPrediction_logInput, prediction_inaccuraciesUpdateWithoutPrediction_logInput>, prediction_inaccuraciesUncheckedUpdateWithoutPrediction_logInput>
  }

  export type prediction_inaccuraciesUncheckedUpdateOneWithoutPrediction_logNestedInput = {
    create?: XOR<prediction_inaccuraciesCreateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput>
    connectOrCreate?: prediction_inaccuraciesCreateOrConnectWithoutPrediction_logInput
    upsert?: prediction_inaccuraciesUpsertWithoutPrediction_logInput
    disconnect?: prediction_inaccuraciesWhereInput | boolean
    delete?: prediction_inaccuraciesWhereInput | boolean
    connect?: prediction_inaccuraciesWhereUniqueInput
    update?: XOR<XOR<prediction_inaccuraciesUpdateToOneWithWhereWithoutPrediction_logInput, prediction_inaccuraciesUpdateWithoutPrediction_logInput>, prediction_inaccuraciesUncheckedUpdateWithoutPrediction_logInput>
  }

  export type prediction_logsCreateNestedOneWithoutPrediction_inaccuraciesInput = {
    create?: XOR<prediction_logsCreateWithoutPrediction_inaccuraciesInput, prediction_logsUncheckedCreateWithoutPrediction_inaccuraciesInput>
    connectOrCreate?: prediction_logsCreateOrConnectWithoutPrediction_inaccuraciesInput
    connect?: prediction_logsWhereUniqueInput
  }

  export type prediction_logsUpdateOneRequiredWithoutPrediction_inaccuraciesNestedInput = {
    create?: XOR<prediction_logsCreateWithoutPrediction_inaccuraciesInput, prediction_logsUncheckedCreateWithoutPrediction_inaccuraciesInput>
    connectOrCreate?: prediction_logsCreateOrConnectWithoutPrediction_inaccuraciesInput
    upsert?: prediction_logsUpsertWithoutPrediction_inaccuraciesInput
    connect?: prediction_logsWhereUniqueInput
    update?: XOR<XOR<prediction_logsUpdateToOneWithWhereWithoutPrediction_inaccuraciesInput, prediction_logsUpdateWithoutPrediction_inaccuraciesInput>, prediction_logsUncheckedUpdateWithoutPrediction_inaccuraciesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type prediction_inaccuraciesCreateWithoutPrediction_logInput = {
    prediction_inaccuracy_id?: string
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments?: string | null
  }

  export type prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput = {
    prediction_inaccuracy_id?: string
    prediction_inaccuracy_supposed_ils_label: number
    prediction_inaccuracy_supposed_rnav_label: number
    prediction_inaccuracy_supposed_rnp_label: number
    prediction_inaccuracy_supposed_visual_label: number
    prediction_inaccuracy_additional_comments?: string | null
  }

  export type prediction_inaccuraciesCreateOrConnectWithoutPrediction_logInput = {
    where: prediction_inaccuraciesWhereUniqueInput
    create: XOR<prediction_inaccuraciesCreateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput>
  }

  export type prediction_inaccuraciesUpsertWithoutPrediction_logInput = {
    update: XOR<prediction_inaccuraciesUpdateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedUpdateWithoutPrediction_logInput>
    create: XOR<prediction_inaccuraciesCreateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedCreateWithoutPrediction_logInput>
    where?: prediction_inaccuraciesWhereInput
  }

  export type prediction_inaccuraciesUpdateToOneWithWhereWithoutPrediction_logInput = {
    where?: prediction_inaccuraciesWhereInput
    data: XOR<prediction_inaccuraciesUpdateWithoutPrediction_logInput, prediction_inaccuraciesUncheckedUpdateWithoutPrediction_logInput>
  }

  export type prediction_inaccuraciesUpdateWithoutPrediction_logInput = {
    prediction_inaccuracy_id?: StringFieldUpdateOperationsInput | string
    prediction_inaccuracy_supposed_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_additional_comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prediction_inaccuraciesUncheckedUpdateWithoutPrediction_logInput = {
    prediction_inaccuracy_id?: StringFieldUpdateOperationsInput | string
    prediction_inaccuracy_supposed_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_supposed_visual_label?: IntFieldUpdateOperationsInput | number
    prediction_inaccuracy_additional_comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prediction_logsCreateWithoutPrediction_inaccuraciesInput = {
    prediction_log_id?: string
    prediction_log_airport_icao?: string | null
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: string
    prediction_log_runway_designator_number?: string | null
    prediction_log_runway_designator_side?: string | null
    prediction_log_runway_ils_category?: string | null
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: string
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
  }

  export type prediction_logsUncheckedCreateWithoutPrediction_inaccuraciesInput = {
    prediction_log_id?: string
    prediction_log_airport_icao?: string | null
    prediction_log_visibility: number
    prediction_log_wind_speed: number
    prediction_log_wind_gust: number
    prediction_log_wind_direction: number
    prediction_log_rvr: string
    prediction_log_runway_designator_number?: string | null
    prediction_log_runway_designator_side?: string | null
    prediction_log_runway_ils_category?: string | null
    prediction_log_headwind: number
    prediction_log_crosswind: number
    prediction_log_ceiling: number
    prediction_log_weather_phenomenon: string
    prediction_log_ils_label: number
    prediction_log_rnav_label: number
    prediction_log_rnp_label: number
    prediction_log_visual_label: number
  }

  export type prediction_logsCreateOrConnectWithoutPrediction_inaccuraciesInput = {
    where: prediction_logsWhereUniqueInput
    create: XOR<prediction_logsCreateWithoutPrediction_inaccuraciesInput, prediction_logsUncheckedCreateWithoutPrediction_inaccuraciesInput>
  }

  export type prediction_logsUpsertWithoutPrediction_inaccuraciesInput = {
    update: XOR<prediction_logsUpdateWithoutPrediction_inaccuraciesInput, prediction_logsUncheckedUpdateWithoutPrediction_inaccuraciesInput>
    create: XOR<prediction_logsCreateWithoutPrediction_inaccuraciesInput, prediction_logsUncheckedCreateWithoutPrediction_inaccuraciesInput>
    where?: prediction_logsWhereInput
  }

  export type prediction_logsUpdateToOneWithWhereWithoutPrediction_inaccuraciesInput = {
    where?: prediction_logsWhereInput
    data: XOR<prediction_logsUpdateWithoutPrediction_inaccuraciesInput, prediction_logsUncheckedUpdateWithoutPrediction_inaccuraciesInput>
  }

  export type prediction_logsUpdateWithoutPrediction_inaccuraciesInput = {
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_log_airport_icao?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_visibility?: FloatFieldUpdateOperationsInput | number
    prediction_log_wind_speed?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_gust?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_direction?: IntFieldUpdateOperationsInput | number
    prediction_log_rvr?: StringFieldUpdateOperationsInput | string
    prediction_log_runway_designator_number?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_designator_side?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_ils_category?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_headwind?: FloatFieldUpdateOperationsInput | number
    prediction_log_crosswind?: FloatFieldUpdateOperationsInput | number
    prediction_log_ceiling?: IntFieldUpdateOperationsInput | number
    prediction_log_weather_phenomenon?: StringFieldUpdateOperationsInput | string
    prediction_log_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_log_visual_label?: IntFieldUpdateOperationsInput | number
  }

  export type prediction_logsUncheckedUpdateWithoutPrediction_inaccuraciesInput = {
    prediction_log_id?: StringFieldUpdateOperationsInput | string
    prediction_log_airport_icao?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_visibility?: FloatFieldUpdateOperationsInput | number
    prediction_log_wind_speed?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_gust?: IntFieldUpdateOperationsInput | number
    prediction_log_wind_direction?: IntFieldUpdateOperationsInput | number
    prediction_log_rvr?: StringFieldUpdateOperationsInput | string
    prediction_log_runway_designator_number?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_designator_side?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_runway_ils_category?: NullableStringFieldUpdateOperationsInput | string | null
    prediction_log_headwind?: FloatFieldUpdateOperationsInput | number
    prediction_log_crosswind?: FloatFieldUpdateOperationsInput | number
    prediction_log_ceiling?: IntFieldUpdateOperationsInput | number
    prediction_log_weather_phenomenon?: StringFieldUpdateOperationsInput | string
    prediction_log_ils_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnav_label?: IntFieldUpdateOperationsInput | number
    prediction_log_rnp_label?: IntFieldUpdateOperationsInput | number
    prediction_log_visual_label?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}