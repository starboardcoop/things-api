const express = require('express');
const router = express.Router();
const { authorize, isAuthorized } = require('../index');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUB_ANON_KEY);

router.post('/token', async (req, res) => {
    const token = req.headers['authorization'];

    if (isAuthorized(token)) {
        res.status(200).send();
    }

    const userResponse = await supabase.auth.getUser(token);
    const user = userResponse.data.user;

    if (!user) {
        console.error(`Invalid Token:\t ${userResponse.error}`)
        res.status(401).send();
    }

    authorize(token);
    res.status(200).send();
});

module.exports = router;