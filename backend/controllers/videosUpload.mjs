import mediaSchema from "../models/media.mjs";

export const getAll = async (req, res, next) => {
  try {
    const media = await mediaSchema.find();
    res.status(200).json({
      success: true,
      media: media,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error,
    });
  }
};

export const create = async (req, res, next) => {
  const { name } = req.body;
  let videoPath = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      // let videopath = video.path.replace(/\\/g, "/");
      videoPath.push("/" + video.path);
    }
  }
  try {
    const createdMedia = await mediaSchema.create({
      name,
      videos: videoPath,
    });

    res.status(201).json({
      success: true,
      data: createdMedia,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error,
    });
  }
};
