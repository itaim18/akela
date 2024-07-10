import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ enum: ['ready', 'active', 'done'], default: 'ready' })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
