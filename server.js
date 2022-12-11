const express = require('express');
const {google} = require('googleapis');

const app = express();
app.use (express.json())

const authentication = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    const client = await auth.getClient()

    const sheets = google.sheets({
        version: "v4",
        auth: client
    })

    return {sheets}
}


app.listen(8080, () => console.log("Server running on port 8080") );