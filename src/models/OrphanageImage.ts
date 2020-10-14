import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('orphanage_images')
export default class OrphanageImage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.orphanage_images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;

}