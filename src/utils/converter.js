export function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + " B";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes < 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  } else {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  }
}

export function truncateFilename(filename) {
  if (filename?.length > 20) {
    const extensionIndex = filename.lastIndexOf(".");
    const extension = filename.substring(extensionIndex);
    const truncatedName = filename.substring(0, 20 - extension.length - 4);
    return truncatedName + "..." + extension;
  }
  return filename;
}
