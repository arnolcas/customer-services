import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import Customer from "../customer/entity";
import Service from "../service/entity";
import Technician from "../technician/entity";

@Entity()
export default class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @ManyToOne(() => Service, (service) => service.id)
    @JoinColumn()
    service: Service;

    @ManyToOne(() => Customer, (customer) => customer.id)
    @JoinColumn()
    customer: Customer;

    @ManyToOne(() => Technician, (technician) => technician.id)
    @JoinColumn()
    technician: Technician;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
