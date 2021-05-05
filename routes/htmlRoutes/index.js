const path = require("path");
const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes.js");
const zookeeperRoutes = require("../zookeeperRoutes/zookeeperRoutes.js");
router.use(require("./zookeeperRoutes"));

router.use(animalRoutes);
router.use(zookeeperRoutes);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
