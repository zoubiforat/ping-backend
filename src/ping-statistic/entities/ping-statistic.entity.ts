import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PingStatistic {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    host: string;
  
    @Column()
    count: number;

}
