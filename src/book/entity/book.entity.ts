import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @Column()
  publishDate: string;
}