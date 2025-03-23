import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookModel } from './models/book.model';
import { BookService } from './book.service';

@Resolver(() => BookModel)
export class BookResolver {

    constructor(private readonly bookService: BookService) { }

    @Query(() => [BookModel])
    async books() {
        return await this.bookService.getAllBooks();
    }

    @Query(() => BookModel)
    async findBookById(@Args('id', { type: () => Int }) id: number) {
        const book = await this.bookService.findBookById(id);
        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }
        return book;
    }

    @Query(() => Int)
    async getCountOfBooks(): Promise<number> {
        return await this.bookService.getCountOfAllBooks();
    }

    @Mutation(() => BookModel)
    async addNewBook(
        @Args('bookName', { type: () => String }) bookName: string,
        @Args('publishDate', { type: () => String }) publishDate: string
    ): Promise<BookModel> {
        return await this.bookService.addNewBook(bookName, publishDate);
    }

}