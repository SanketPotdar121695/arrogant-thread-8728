const cors = require('cors');
const express = require('express');
const { userRouter } = require('./routes/user.routes');
const { PORT, connection } = require('./config/db.js');
const { adminRouter } = require('./routes/admin.routes.js');
const { userAuthRouter } = require('./routes/userAuth.routes');
const { adminUserRouter } = require('./routes/adminUser.routes.js');
const { adminProductRouter } = require('./routes/adminProduct.routes.js');

const app = express();

app.use(cors({ exposedHeaders: 'x-total-count' }));
app.use(express.json());

app.use('/', userRouter);
app.use('/auth', adminRouter);
app.use('/user/auth', userAuthRouter);
app.use('/adminuser', adminUserRouter);
app.use('/adminproduct', adminProductRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  console.log(`Listening to server on port ${PORT}`);
});
