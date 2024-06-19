//upload image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "../client/src/components/HomePage/assets/images";
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    console.error("Error saving image to database:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/get-image", async (req, res) => {
  try {
    const data = await Images.find({});
    res.json({ status: "ok", data: data });
  } catch (error) {
    console.error("Error fetching images from database:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});