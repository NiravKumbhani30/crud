import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const Users = models.user || model("user", userSchema);

export default Users;
