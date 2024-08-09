const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test')

const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: {
        type: String, required: true,
        // 공백을 제거한다.
        trim: true,
        // 유효성 검사
        validate: {
            validator: function (value) {
                // if (!value.includes('@')) throw new Error("This is not an Email");
                // validator 를 이용해 만드는 것
                if (!validator.isEmail(value)) throw new Error("This is not an Email");
            }
        }
    },
    age: { type: Number, default: 0 }
})

// 유저스키마를 가지고 User라는 이름의 User모델을 만든다.
const User = mongoose.model("User", userSchema);

const newUser = new User({ name: "wmg", email: '111@gmail.com', password: '1234', age: 33 });

// newUser.save().then((value) => console.log(value));


User.find({ name: 'wmg' }).select("name -_id").then((value) => console.log(value));