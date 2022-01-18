use portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        name: "Tesla Inc",
        symbol: "TSLA",
        purchaseDate: "25/11/2021",
        numberOfShares: 2,
        avgPurchasePrice: 1031.56
    },
    {
        name: "Amazon.com Inc",
        symbol: "AMZN",
        purchaseDate: "01/02/2021",
        numberOfShares: 5,
        avgPurchasePrice: 3224.28
    },
    {
        name: "BP plc",
        symbol: "BP",
        purchaseDate: "31/03/2021",
        numberOfShares: 2,
        avgPurchasePrice: 389.95
    },
    {
        name: "Lloyds Banking Group plc",
        symbol: "LLOY",
        purchaseDate: "05/01/2022",
        numberOfShares: 10,
        avgPurchasePrice: 54.55
    }
])