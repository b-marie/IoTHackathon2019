module.exports = function (context, IoTHubMessages) {
  context.log(`JavaScript eventhub trigger function called for message array:`);
  context.log(IoTHubMessages);

  var temperature = 0.0;
  var humidity = 0.0;
  var moisture = 0.0;
  var deviceId = "";
  var timeStamp;

  IoTHubMessages.forEach(message => {
    context.log(`Processed message: ${message}`);
    temperature += message.temperature;
    humidity += message.humidity;
    moisture += message.moisture;
    deviceId = message.deviceId;
    timeStamp = message.timeStamp;
  });

  var output = {
    "deviceId": deviceId,
    "temperature": temperature,
    "humidity": humidity,
    "moisture": moisture,
    "timeStamp": timeStamp
  };

  context.log(output);

  context.bindings.outputDocument = output;

  context.done();
};