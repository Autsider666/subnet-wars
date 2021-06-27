import { Document, Model } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface UserAttributes {
  username: string;
  password: string;
}

export interface UserDocument extends UserAttributes, Document {}

const UserSchema = new mongoose.Schema<UserDocument, UserModelInterface>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre<UserDocument>("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

UserSchema.methods.comparePassword = async (
  this: UserDocument,
  password: string
): Promise<boolean> => {
  return await bcrypt.compare(password, this.password);
};

interface UserModelInterface extends mongoose.Model<UserDocument> {
  // build(attributes: UserAttributes): any;

  comparePassword(password: string): Promise<boolean>;
}

export const User = mongoose.model<UserDocument, UserModelInterface>(
  "User",
  UserSchema
);

// UserSchema.methods.build = async (
//   attributes: UserAttributes
// ): Promise<UserDocument> => {
//   return new User(attributes);
// };
