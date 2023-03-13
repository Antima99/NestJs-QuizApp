
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = user & Document;

@Schema()
export class user {
  @Prop()
  UserName: string;
  @Prop()
  UserType: string;
}

export const userSchema = SchemaFactory.createForClass(user);
