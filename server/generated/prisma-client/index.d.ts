// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  comment: (where?: CommentWhereInput) => Promise<boolean>;
  message: (where?: MessageWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  comment: (where: CommentWhereUniqueInput) => CommentNullablePromise;
  comments: (args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Comment>;
  commentsConnection: (args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CommentConnectionPromise;
  message: (where: MessageWhereUniqueInput) => MessageNullablePromise;
  messages: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Message>;
  messagesConnection: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MessageConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createComment: (data: CommentCreateInput) => CommentPromise;
  updateComment: (args: {
    data: CommentUpdateInput;
    where: CommentWhereUniqueInput;
  }) => CommentPromise;
  updateManyComments: (args: {
    data: CommentUpdateManyMutationInput;
    where?: CommentWhereInput;
  }) => BatchPayloadPromise;
  upsertComment: (args: {
    where: CommentWhereUniqueInput;
    create: CommentCreateInput;
    update: CommentUpdateInput;
  }) => CommentPromise;
  deleteComment: (where: CommentWhereUniqueInput) => CommentPromise;
  deleteManyComments: (where?: CommentWhereInput) => BatchPayloadPromise;
  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateMessage: (args: {
    data: MessageUpdateInput;
    where: MessageWhereUniqueInput;
  }) => MessagePromise;
  updateManyMessages: (args: {
    data: MessageUpdateManyMutationInput;
    where?: MessageWhereInput;
  }) => BatchPayloadPromise;
  upsertMessage: (args: {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
  }) => MessagePromise;
  deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  comment: (
    where?: CommentSubscriptionWhereInput
  ) => CommentSubscriptionPayloadSubscription;
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CommentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "comment_ASC"
  | "comment_DESC"
  | "author_ASC"
  | "author_DESC"
  | "dislikes_ASC"
  | "dislikes_DESC"
  | "date_ASC"
  | "date_DESC";

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "message_ASC"
  | "message_DESC"
  | "author_ASC"
  | "author_DESC"
  | "dislikes_ASC"
  | "dislikes_DESC"
  | "date_ASC"
  | "date_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CommentUpdateInput {
  comment?: Maybe<String>;
  author?: Maybe<String>;
  dislikes?: Maybe<Int>;
  date?: Maybe<String>;
}

export type CommentWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput;
  update: CommentUpdateDataInput;
  create: CommentCreateInput;
}

export interface MessageCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  message: String;
  author: String;
  dislikes: Int;
  comments?: Maybe<CommentCreateManyInput>;
  date?: Maybe<String>;
}

export interface CommentUpdateDataInput {
  comment?: Maybe<String>;
  author?: Maybe<String>;
  dislikes?: Maybe<Int>;
  date?: Maybe<String>;
}

export interface CommentWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  comment?: Maybe<String>;
  comment_not?: Maybe<String>;
  comment_in?: Maybe<String[] | String>;
  comment_not_in?: Maybe<String[] | String>;
  comment_lt?: Maybe<String>;
  comment_lte?: Maybe<String>;
  comment_gt?: Maybe<String>;
  comment_gte?: Maybe<String>;
  comment_contains?: Maybe<String>;
  comment_not_contains?: Maybe<String>;
  comment_starts_with?: Maybe<String>;
  comment_not_starts_with?: Maybe<String>;
  comment_ends_with?: Maybe<String>;
  comment_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  dislikes?: Maybe<Int>;
  dislikes_not?: Maybe<Int>;
  dislikes_in?: Maybe<Int[] | Int>;
  dislikes_not_in?: Maybe<Int[] | Int>;
  dislikes_lt?: Maybe<Int>;
  dislikes_lte?: Maybe<Int>;
  dislikes_gt?: Maybe<Int>;
  dislikes_gte?: Maybe<Int>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  AND?: Maybe<CommentWhereInput[] | CommentWhereInput>;
  OR?: Maybe<CommentWhereInput[] | CommentWhereInput>;
  NOT?: Maybe<CommentWhereInput[] | CommentWhereInput>;
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput;
  data: CommentUpdateDataInput;
}

export interface CommentSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CommentWhereInput>;
  AND?: Maybe<CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput>;
  OR?: Maybe<CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput>;
  NOT?: Maybe<CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput>;
}

export interface CommentUpdateManyInput {
  create?: Maybe<CommentCreateInput[] | CommentCreateInput>;
  update?: Maybe<
    | CommentUpdateWithWhereUniqueNestedInput[]
    | CommentUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | CommentUpsertWithWhereUniqueNestedInput[]
    | CommentUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<CommentWhereUniqueInput[] | CommentWhereUniqueInput>;
  connect?: Maybe<CommentWhereUniqueInput[] | CommentWhereUniqueInput>;
  set?: Maybe<CommentWhereUniqueInput[] | CommentWhereUniqueInput>;
  disconnect?: Maybe<CommentWhereUniqueInput[] | CommentWhereUniqueInput>;
  deleteMany?: Maybe<CommentScalarWhereInput[] | CommentScalarWhereInput>;
  updateMany?: Maybe<
    | CommentUpdateManyWithWhereNestedInput[]
    | CommentUpdateManyWithWhereNestedInput
  >;
}

export interface CommentUpdateManyDataInput {
  comment?: Maybe<String>;
  author?: Maybe<String>;
  dislikes?: Maybe<Int>;
  date?: Maybe<String>;
}

export type MessageWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MessageWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  message?: Maybe<String>;
  message_not?: Maybe<String>;
  message_in?: Maybe<String[] | String>;
  message_not_in?: Maybe<String[] | String>;
  message_lt?: Maybe<String>;
  message_lte?: Maybe<String>;
  message_gt?: Maybe<String>;
  message_gte?: Maybe<String>;
  message_contains?: Maybe<String>;
  message_not_contains?: Maybe<String>;
  message_starts_with?: Maybe<String>;
  message_not_starts_with?: Maybe<String>;
  message_ends_with?: Maybe<String>;
  message_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  dislikes?: Maybe<Int>;
  dislikes_not?: Maybe<Int>;
  dislikes_in?: Maybe<Int[] | Int>;
  dislikes_not_in?: Maybe<Int[] | Int>;
  dislikes_lt?: Maybe<Int>;
  dislikes_lte?: Maybe<Int>;
  dislikes_gt?: Maybe<Int>;
  dislikes_gte?: Maybe<Int>;
  comments_every?: Maybe<CommentWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
  comments_none?: Maybe<CommentWhereInput>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  AND?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  OR?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  NOT?: Maybe<MessageWhereInput[] | MessageWhereInput>;
}

export interface CommentCreateManyInput {
  create?: Maybe<CommentCreateInput[] | CommentCreateInput>;
  connect?: Maybe<CommentWhereUniqueInput[] | CommentWhereUniqueInput>;
}

export interface CommentUpdateManyMutationInput {
  comment?: Maybe<String>;
  author?: Maybe<String>;
  dislikes?: Maybe<Int>;
  date?: Maybe<String>;
}

export interface MessageUpdateInput {
  title?: Maybe<String>;
  message?: Maybe<String>;
  author?: Maybe<String>;
  dislikes?: Maybe<Int>;
  comments?: Maybe<CommentUpdateManyInput>;
  date?: Maybe<String>;
}

export interface CommentCreateInput {
  id?: Maybe<ID_Input>;
  comment: String;
  author: String;
  dislikes: Int;
  date?: Maybe<String>;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MessageWhereInput>;
  AND?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  OR?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  NOT?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
}

export interface CommentScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  comment?: Maybe<String>;
  comment_not?: Maybe<String>;
  comment_in?: Maybe<String[] | String>;
  comment_not_in?: Maybe<String[] | String>;
  comment_lt?: Maybe<String>;
  comment_lte?: Maybe<String>;
  comment_gt?: Maybe<String>;
  comment_gte?: Maybe<String>;
  comment_contains?: Maybe<String>;
  comment_not_contains?: Maybe<String>;
  comment_starts_with?: Maybe<String>;
  comment_not_starts_with?: Maybe<String>;
  comment_ends_with?: Maybe<String>;
  comment_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  dislikes?: Maybe<Int>;
  dislikes_not?: Maybe<Int>;
  dislikes_in?: Maybe<Int[] | Int>;
  dislikes_not_in?: Maybe<Int[] | Int>;
  dislikes_lt?: Maybe<Int>;
  dislikes_lte?: Maybe<Int>;
  dislikes_gt?: Maybe<Int>;
  dislikes_gte?: Maybe<Int>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  AND?: Maybe<CommentScalarWhereInput[] | CommentScalarWhereInput>;
  OR?: Maybe<CommentScalarWhereInput[] | CommentScalarWhereInput>;
  NOT?: Maybe<CommentScalarWhereInput[] | CommentScalarWhereInput>;
}

export interface CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyDataInput;
}

export interface MessageUpdateManyMutationInput {
  title?: Maybe<String>;
  message?: Maybe<String>;
  author?: Maybe<String>;
  dislikes?: Maybe<Int>;
  date?: Maybe<String>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface MessagePreviousValues {
  id: ID_Output;
  title: String;
  message: String;
  author: String;
  dislikes: Int;
  date?: String;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  message: () => Promise<String>;
  author: () => Promise<String>;
  dislikes: () => Promise<Int>;
  date: () => Promise<String>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  message: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  dislikes: () => Promise<AsyncIterator<Int>>;
  date: () => Promise<AsyncIterator<String>>;
}

export interface Message {
  id: ID_Output;
  title: String;
  message: String;
  author: String;
  dislikes: Int;
  date?: String;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  message: () => Promise<String>;
  author: () => Promise<String>;
  dislikes: () => Promise<Int>;
  comments: <T = FragmentableArray<Comment>>(args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  date: () => Promise<String>;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  message: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  dislikes: () => Promise<AsyncIterator<Int>>;
  comments: <T = Promise<AsyncIterator<CommentSubscription>>>(args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  date: () => Promise<AsyncIterator<String>>;
}

export interface MessageNullablePromise
  extends Promise<Message | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  message: () => Promise<String>;
  author: () => Promise<String>;
  dislikes: () => Promise<Int>;
  comments: <T = FragmentableArray<Comment>>(args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  date: () => Promise<String>;
}

export interface CommentSubscriptionPayload {
  mutation: MutationType;
  node: Comment;
  updatedFields: String[];
  previousValues: CommentPreviousValues;
}

export interface CommentSubscriptionPayloadPromise
  extends Promise<CommentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CommentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CommentPreviousValuesPromise>() => T;
}

export interface CommentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CommentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CommentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CommentPreviousValuesSubscription>() => T;
}

export interface AggregateComment {
  count: Int;
}

export interface AggregateCommentPromise
  extends Promise<AggregateComment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCommentSubscription
  extends Promise<AsyncIterator<AggregateComment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CommentEdge {
  node: Comment;
  cursor: String;
}

export interface CommentEdgePromise extends Promise<CommentEdge>, Fragmentable {
  node: <T = CommentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CommentEdgeSubscription
  extends Promise<AsyncIterator<CommentEdge>>,
    Fragmentable {
  node: <T = CommentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Comment {
  id: ID_Output;
  comment: String;
  author: String;
  dislikes: Int;
  date?: String;
}

export interface CommentPromise extends Promise<Comment>, Fragmentable {
  id: () => Promise<ID_Output>;
  comment: () => Promise<String>;
  author: () => Promise<String>;
  dislikes: () => Promise<Int>;
  date: () => Promise<String>;
}

export interface CommentSubscription
  extends Promise<AsyncIterator<Comment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  comment: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  dislikes: () => Promise<AsyncIterator<Int>>;
  date: () => Promise<AsyncIterator<String>>;
}

export interface CommentNullablePromise
  extends Promise<Comment | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  comment: () => Promise<String>;
  author: () => Promise<String>;
  dislikes: () => Promise<Int>;
  date: () => Promise<String>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CommentPreviousValues {
  id: ID_Output;
  comment: String;
  author: String;
  dislikes: Int;
  date?: String;
}

export interface CommentPreviousValuesPromise
  extends Promise<CommentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  comment: () => Promise<String>;
  author: () => Promise<String>;
  dislikes: () => Promise<Int>;
  date: () => Promise<String>;
}

export interface CommentPreviousValuesSubscription
  extends Promise<AsyncIterator<CommentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  comment: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  dislikes: () => Promise<AsyncIterator<Int>>;
  date: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface CommentConnection {
  pageInfo: PageInfo;
  edges: CommentEdge[];
}

export interface CommentConnectionPromise
  extends Promise<CommentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CommentEdge>>() => T;
  aggregate: <T = AggregateCommentPromise>() => T;
}

export interface CommentConnectionSubscription
  extends Promise<AsyncIterator<CommentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CommentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCommentSubscription>() => T;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
