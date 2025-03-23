import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/book/entity/book.entity';
import { Repository } from 'typeorm';
import { BookModel } from './models/book.model';

@Injectable()
export class BookService {
    constructor(@InjectRepository(BookEntity) private booksRepository: Repository<BookEntity>) { }

    async getAllBooks(): Promise<BookEntity[]> {
        return await this.booksRepository.find();
    }

    async findBookById(id: number): Promise<BookModel | null> {
        const book = await this.booksRepository.findOneBy({ id: id });
        return book ? book : null;
    }

    async getCountOfAllBooks(): Promise<number> {
        return await this.booksRepository.count();
    }


    async addNewBook(bookName: string, publishDate: string): Promise<BookModel> {
        try {
          const newBook = this.booksRepository.create({ bookName, publishDate });
          return await this.booksRepository.save(newBook);
        } catch (error) {
          throw new Error('Failed to add new book');
        }
      }
      

}