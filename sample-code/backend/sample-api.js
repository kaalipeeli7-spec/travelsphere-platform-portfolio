const express = require('express');
const app = express();

// Dummy API
app.get('/api/enquiry', (req, res) => {
    res.json({
        id: 'ENQ123',
        destination: 'Dubai',
        status: 'Pending'
    });
});

app.listen(4000, () => console.log('Sample backend running'));
