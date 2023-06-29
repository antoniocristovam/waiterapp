import { model, Schema } from "mongoose";

export const Order = model(
    "Order",
    new Schema({
        table: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["WAITING", "IN_PRODUCTION", "DONE"],
            default: "WHAITING",
        },
        createAt: {
            type: Date,
            default: Date.now,
        },
        products: {
            require: true,
            type: [
                {
                    product: {
                        type: Schema.Types.ObjectId,
                        required: true,
                        ref: "Product",
                    },
                    quatily: {
                        type: Number,
                        default: 1,
                    },
                },
            ],
        },
    })
);
