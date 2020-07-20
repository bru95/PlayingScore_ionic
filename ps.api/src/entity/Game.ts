import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity({ name: 'Game' })
export default class Game extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 500 })
    description: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    link_rules: string;
    
    @Column()
    teams_limit: number;

    @Column()
    players_per_team_limit: number;

}


