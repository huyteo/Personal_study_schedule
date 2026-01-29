import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class StudySchedule extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: Object, required: true })
  input: any;

  @Prop({ type: Object, required: true })
  result: any;
}

export const StudyScheduleSchema = SchemaFactory.createForClass(StudySchedule);
