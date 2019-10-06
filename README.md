# Compostr
### Mulch Better.

### Team Number 6

### Project Name - Compostr

### Team Members
* Emily Baker
* Mika Cruz
* Brittany Ellich
* Nicole Johnson
* Ming Rutar

### Project Summary

#### Goal
The goal of this project was to bring composting to every home. Composting can be a very complex science. Temperature and moisture require a careful, goldilocks-esque balance of not-too-high and not-too-low. Using a device that can monitor temperature and moisture content of your compost pile can be the difference between a literal dumpster fire and the sweet, nutrient-rich, deep-brown compost that will allow your plants to grow.

We had some issues getting our moisture sensor to work correctly, and thus for our prototype are using the temperature/humidity sensor included with our kit. In the future, ideally we would build out moisture and temperature probes that could be inserted into the compost pile for monitoring.

#### The Project
Our project is broken into the following parts:
* CompostDevice - This is our device code that gathers the temperature and humidity data from our Adafruit Feather Huzzah arduino device and puts it into the IoTHub.
* CompostDataFunction - This is the Azure Function code that takes the data from the IoTHub Events and loads it into a CosmoDB.
* CompostDataApi - This is the backend, .Net Core API that accesses the data in to CosmoDB database for the device. 
* Compostr - This is our frontend application for displaying the compost data for a user to monitor.

As this project is using cloud resources, connection strings and environment variables for this project are stored securely. If you would like access to the launchsettings and connection strings required to run this project locally, please contact any of the project team members.