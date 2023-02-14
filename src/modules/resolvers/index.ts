import { GraphQLResolveInfo } from "graphql";
import MergeInfo from 'express-graphql'

export declare type IFieldResolver<TSource, TContext, TArgs = Record<string, any>> = (source: TSource, args: TArgs, context: TContext, info: GraphQLResolveInfo & {
    mergeInfo: MergeInfo;
   }) => any;