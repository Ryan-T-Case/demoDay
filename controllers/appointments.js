const { Appointment, Slot } = Model;
const Nexmo = require("nexmo");



const nexmo = new Nexmo ({
    apiKey: "285c3b39",
apiSecret: "wDmJ5xiRYKuy9Nb2"
});

const from = "17203866288"
let to = ""
let msg = "test message";

nexmo.message.sendSms(from, to, msg)