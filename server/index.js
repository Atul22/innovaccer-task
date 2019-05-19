const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', auth);

const PORT = process.env.REACT_APP_PORT || 3900;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})