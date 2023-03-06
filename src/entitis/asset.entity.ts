import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('ch_asset')
export class AssetData {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ nullable: false, default: '' })
  name!: string;

  @Column({ nullable: false, default: '' })
  dia!: string;
}