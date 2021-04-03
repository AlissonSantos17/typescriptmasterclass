import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Alisson', email: 'alisson.wiin@gmail.com'}
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(re: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Alisson Santos',
        email: 'alisson.wiin@gmail.com'
      },
      message: { 
        subject: 'Bem vindo ao sistema', 
        body: 'Seja bem vindo!' 
      }
    });

    return res.send();
  }
};