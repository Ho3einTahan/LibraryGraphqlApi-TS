import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    bookName?: string;

    @Field(type => String)
    publishDate?: string;
}
