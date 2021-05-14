import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  ci: number;

  @Prop()
  nombres: string;

  @Prop()
  apellidos: string;

  @Prop()
  lugar_de_nacimiento: string;

  @Prop()
  fecha_de_nacimiento: string;

  @Prop()
  carrera: string;
}

export const UserSchema = SchemaFactory.createForClass(User);