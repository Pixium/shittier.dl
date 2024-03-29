import crypto from "node:crypto";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

export function generateID(length: number) {
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";

    for (let i = 0; i < length; i++)
        id += charset.charAt(Math.floor(crypto.randomBytes(1)[0] % charset.length));

    return id;
}

export function createDataDirectory() {
    const directoryPath = path.join(__dirname, "../data/");
    if (!existsSync(directoryPath)) {
        mkdirSync(directoryPath);
    }
}
