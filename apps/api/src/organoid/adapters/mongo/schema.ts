import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrganoidDocument = HydratedDocument<Organoid>;

@Schema()
export class Organoid {
  @Prop({ type: mongoose.Types.ObjectId, required: true })
  id: string;

  @Prop({ type: String, required: true })
  originalImageKey: string;

  @Prop({ type: String, required: true })
  segmentationMaskImageKey: string;

  @Prop({ type: String, required: true })
  dataset: string;

  @Prop({ type: Number, required: true })
  maskSurface: number;
}

export const MongoOrganoidSchema = SchemaFactory.createForClass(Organoid);
