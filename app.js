const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios')
const cors = require('cors');


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, world!',
    })
})

app.post('/email', async (req, res) => {
    const { email } = req.body;
    if (!email) res.status(404).json({ message: "email not found" });

    const url = 'https://script.google.com/macros/s/AKfycbxPuy_ac_qHpQb6-DrtPZJyeO8i6kPjI2YUkM9mY5rBwV9zwsfSYwMIOlKn7m718K9Y3Q/exec'
    const r = await axios.post(url, {
        secret: "zxcvbnm_makeitworksomehow_9q87w4uirqkeores789",
        email: email
    })

    res.json({ message: 'succcess' });
})

app.post('/feedback', async (req, res) => {
    const { name, email, feedback } = req.body;
    if (!email || !name || !feedback) res.status(404).json({ message: "name, email or feedback not found" });

    const url = 'https://script.google.com/macros/s/AKfycby3sfxKzgFmz1qzEhDEQ-tAtYhavCnWRcS7oqih3CeGqHEn64r54RoRAFqQocJwO-3r/exec'
    const r = await axios.post(url, {
        secret: "zxcvbnm_makeitworksomehow_9q87w4uirqkeores789",
        name: name,
        email: email,
        feedback: feedback
    })

    res.json({ message: 'succcess' });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
