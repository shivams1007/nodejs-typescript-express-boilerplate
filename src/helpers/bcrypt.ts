import bcrypt from 'bcrypt';
import { MASTER_PASSWORD } from './config';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, receivedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, receivedPassword);
};

export const isMasterPassword = async (receivedPassword: string): Promise<boolean> => {
  const salt = await bcrypt.genSalt(10);
  const encrypted_password = await bcrypt.hash(MASTER_PASSWORD, salt);
  return await bcrypt.compare(encrypted_password, receivedPassword);
};
