const express = require('express');
const app = express();

app.locals.title = "BeckyRobison";

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

app.listen(app.get('port'), () => console.log(`${app.locals.title} is now running on port ${app.get('port')}!`));
