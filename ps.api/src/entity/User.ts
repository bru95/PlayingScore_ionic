import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'User' })
export class User extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 40 })
    nick: string;
    
    @Column({ type: 'varchar', length: 100, nullable: true })
    photo: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    nick_instagram: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    nick_facebook: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    whatsapp: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;

}

