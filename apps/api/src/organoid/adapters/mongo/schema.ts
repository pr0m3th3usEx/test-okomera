import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrganoidDocument = HydratedDocument<Organoid>;

@Schema()
export class Organoid {
  @Prop({ type: mongoose.Types.ObjectId, required: true })
  id: string;

  @Prop({ required: true })
  imageName: string;

  @Prop({ required: true })
  originalImageKey: string;

  @Prop({ required: true })
  segmentationMaskImageKey: string;

  @Prop({ required: true })
  maskSurface: number;
}

export const MongoOrganoidSchema = SchemaFactory.createForClass(Organoid);
