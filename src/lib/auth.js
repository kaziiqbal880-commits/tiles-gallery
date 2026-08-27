// lib/auth.js
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGO_URI;

function getMongoClient() {
    if (!global._mongoClient) {
        global._mongoClient = new MongoClient(uri, {
            maxIdleTimeMS: 60000, // keep sockets alive longer between invocations
        });
    }
    return global._mongoClient;
}

const client = getMongoClient();
const db = client.db("tiles-app");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    trustedOrigins: [
        "http://localhost:3000",
        "https://tiles-gallery-ikba.vercel.app",
    ],

    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});