const fs = require('fs/promises');
const FileType = require('file-type');

/**
 * 判断文件/目录是否存在
 * @param {String} path
 * @returns {Boolean}
 */
function isExistPath(path) {
  return new Promise((resolve, reject) => {
    fs.access(path)
      .then(() => {
        resolve(true);
      })
      .catch((e) => {
        // TODO: 显示错误信息 e
        resolve(false);
      });
  });
}

const isImage = async (filePath) => {
  const fileInfo = await FileType.fromFile(filePath);
  return fileInfo && /^image\//g.test(fileInfo.mime);
}

module.exports = {
  isExistPath,
  isImage
};
