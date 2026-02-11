const express = require("express");
const cors = require("cors");
require("dotenv").config();

const adminAuthRoutes = require("./routes/adminAuthRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminAuthRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const adminRoutes = require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);
