import multer from "multer";
import fs from "fs";

function videoUp() {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync("media/")) {
        fs.mkdirSync("media/");
      }

      if (!fs.existsSync("media/videos")) {
        fs.mkdirSync("media/videos");
      }

      cb(null, "media/videos");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

  return multer({ storage: storage }).fields([{ name: "videos", maxCount: 5 }]);
}

export default videoUp;
