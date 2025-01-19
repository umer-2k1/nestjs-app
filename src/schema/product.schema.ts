import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  category: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  // category: Category //import Schema here
  @Prop()
  images: string[];

  @Prop()
  qty: number;

  @Prop()
  price: number;

  @Prop()
  ratings: number;

  @Prop()
  brand: string;

  @Prop()
  tags: string[];

  @Prop()
  active: boolean;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
