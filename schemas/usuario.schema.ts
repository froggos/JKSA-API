import { Schema } from "mongoose";

export const usuarioSchema: Schema = new Schema ({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profilename: { type: String, required: true },
    profile_picture: { type: String },
    medals: [],
    elo: { type: Number },
    ranking: { type: Boolean, required: true },
    settingstring: { type: String, required: true },
}, {
    collection: 'usuario',
    versionKey: false,
});