const Client = require("./client/model");
const Card = require("./credit-card/model");
const moment = require("moment");
const data = require("./challenge.json");

async function jsonToDB() {
  const dataWithCorrectDates = data.map((client) => {
    if (
      client.date_of_birth &&
      moment(client.date_of_birth).format("YYYY-MM-DD") !== "Invalid date"
    ) {
      const newDateOfBirth = moment(client.date_of_birth).format("YYYY-MM-DD");
      const updatedClientData = { ...client, date_of_birth: newDateOfBirth };
      return updatedClientData;
    }
    return client;
  });

  const filteredClients = dataWithCorrectDates.filter((client) => {
    if (
      moment().diff(client.date_of_birth, "years") >= 18 &&
      moment().diff(client.date_of_birth, "years") <= 65
    ) {
      return client;
    } else if (!client.date_of_birth) {
      return client;
    }
  });
  const allClients = await Client.findAll();

  updateClientInformation = async () => {
    filteredClients.forEach((newClient) => {
      if (allClients.length === 0) {
        Client.create({
          name: newClient.name,
          address: newClient.address,
          checked: newClient.checked,
          description: newClient.description,
          interest: newClient.interest,
          date_of_birth: newClient.date_of_birth,
          email: newClient.email,
          account: newClient.account,
        });
      } else {
        allClients.forEach((client) => {
          if (client.dataValues.account !== newClient.account) {
            Client.create({
              name: newClient.name,
              address: newClient.address,
              checked: newClient.checked,
              description: newClient.description,
              interest: newClient.interest,
              date_of_birth: newClient.date_of_birth,
              email: newClient.email,
              account: newClient.account,
            });
          }
        });
      }
    });
  };

  updateCardInformation = async () => {
    const updatedClientsList = await Client.findAll();

    updatedClientsList.forEach((client) => {
      filteredClients.forEach((newClient) => {
        if (client.dataValues.account === newClient.account) {
          Card.create({
            type: newClient.credit_card.type,
            number: newClient.credit_card.number,
            name: newClient.credit_card.name,
            expirationDate: newClient.credit_card.expirationDate,
            clientId: client.dataValues.id,
          });
        }
      });
    });
  };
  setTimeout(updateClientInformation, 60000);
  setTimeout(updateCardInformation, 120000);
}

jsonToDB();
