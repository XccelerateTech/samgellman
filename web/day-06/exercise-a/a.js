var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

var familyBankValues = {
    familyMembers: {
        Mother: {
            "account number": 8096291,
            accountBalance: 10000000
        },
        Father: {
            "account number": 8096292,
            accountBalance: 9999999
        },

        Sister: {
            "account number": 8096293,
            accountBalance: 10000
        },

        "Step Brother": {
            "account number": 8096292,
            accountBalance: 15000
        }
    }
}

var mumbaiPop = asia.countries.India.Mumbai.population;
var beijingPop = asia.countries.China.Beijing.population;
var hongKongPop = asia.countries.China["Hong Kong"].population;

var motherNumber = familyBankValues.familyMembers.Mother["account number"];
var fatherBalance = familyBankValues.familyMembers.Father.accountBalance;
var stepBrotherFinances = [];

stepBrotherFinances.push(familyBankValues.familyMembers["Step Brother"]["account number"]);
stepBrotherFinances.push(familyBankValues.familyMembers["Step Brother"].accountBalance);



console.log("Mumbai's population is " + mumbaiPop)
console.log("Beijing's population is " + beijingPop)
console.log("Hong Kong's population is " + hongKongPop)

console.log("Mother's number is " + motherNumber);
console.log("father's balance is " + fatherBalance);
console.log(stepBrotherFinances);

