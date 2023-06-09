const { Schema, model } = require('mongoose');


const messageSchema = new Schema({
    from: {
        type: String,
        ref: 'User',
        required: [true, 'Enter a valid sender']
    },
    to: {
        type: String,
        ref: 'User',
        required: [true, 'Enter a valid recipient']
    },
    content: {
        type: String,
        required: [true, 'Enter a valid message']
    },
    type: {
        type: String,
        enum: ['text', 'image'],
        default: 'text'
    },
    isSeen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = model('Message', messageSchema);

