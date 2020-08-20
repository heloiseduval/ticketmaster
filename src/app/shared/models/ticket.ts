import { Task } from './task';
import { Member } from './member';


export class Ticket {
    id:number;
    task: Task;
    memberList: Member[];
    status: string;
    priority:string;
    creation:number;
    lastChange:number;
    
}
