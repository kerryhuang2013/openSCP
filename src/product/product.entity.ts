import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('prod_mstr')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  number: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created: Date;
}
