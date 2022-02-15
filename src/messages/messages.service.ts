import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
    private messages: Message[] = [
        {
            id: 1,
            text: 'Primeira Mensagem'
         },
         {
            id: 2,
            text: 'Segunda Mensagem'
         },
    ];

    findALL() {
     return this.messages.filter(Boolean);
    }

    async findById(id: number){
        const message = this.messages.find((message ) => message?.id === id);
        
        if (!message) {
            throw Error('Mensagem com o ID ${id} não encontrada.');
        }
        return message;
    }

    create(messageDto: MessageDto) {
        const id = this.messages.length;

        const message: Message = {
            id,
            ...messageDto,
        };

        this.messages.push(message);

        return message;
    }

    async update(id: number, messageDto: MessageDto) {
        const index = this.messages.findIndex((messageDto:MessageDto) => message?.id === id);

        if (index < 0){
            throw Error('Mensagem com o ID ${id} não encontrada.');
        }

        const message: Message = {
            id,
            ...messageDto,
        };

        this.messages[index] = message;

        return message;
    }

    async delete(id: number) {
        const index = this.messages.findIndex((message:Message) => message?.id === id);
        
        if (index < 0){
            throw Error('Mensagem com o ID ${id} não encontrada.');
        }

        delete this.messages[index];

        return true;
    }
}
