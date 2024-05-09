import JSZip from "jszip";

const Download = () => {
  const files = [
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/PDF/1714114593543-screencapture-thapatechnical-shop-blogs-host-a-mern-stack-app-on-a-vps-2024-04-15-16_21_21.pdf",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/PDF/1714114593543-screencapture-thapatechnical-shop-blogs-host-a-mern-stack-app-on-a-vps-2024-04-15-16_21_21.pdf",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/1714112835734-file_example_MP3_700KB.mp3",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/1714113719415-instagram+(1)+(1).png",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/Frame+27.jpg",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/Frame+27.svg",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/invoice.pdf",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/Satoshi-Variable.ttf",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/Satoshi-VariableItalic.ttf",
    "https://socreative.s3.ap-southeast-2.amazonaws.com/assets/assets/screencapture-thapatechnical-shop-blogs-host-a-mern-stack-app-on-a-vps-2024-04-15-16_21_21.pdf",
  ];

  const handleDownloadAllAsZip = (urls) => {
    const zip = new JSZip();
    const promises = [];

    urls.forEach((url, index) => {
      const filename = url.substring(url.lastIndexOf("/") + 1);
      const promise = fetch(url)
        .then((response) => response.blob())
        .then((blob) => zip.file(`${index}_${filename}`, blob))
        .catch((error) =>
          console.error(`Error fetching file ${filename}:`, error)
        );

      promises.push(promise);
    });

    Promise.all(promises)
      .then(() => {
        zip
          .generateAsync({ type: "blob" })
          .then((content) => {
            const url = window.URL.createObjectURL(content);
            const link = document.createElement("a");
            link.href = url;
            link.download = "downloaded-files.zip";
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => console.error("Error generating zip file:", error));
      })
      .catch((error) => console.error("Error fetching files:", error));
  };

  const handleDownload = (url) => {
    // Extract filename from URL
    const filename = url.substring(url.lastIndexOf("/") + 1);

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");

        // Try to extract extension from filename
        const extension = filename.split(".").pop();
        const downloadFilename = extension ? `${filename}` : "downloaded-file";

        link.href = url;
        link.download = downloadFilename;
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div>
      <button
        onClick={() => handleDownloadAllAsZip(files)}
        className="border p-3 rounded-md"
      >
        Download All
      </button>

      {files.map((i, index) => {
        const parts = i.split(".");
        const extention = parts[parts.length - 1];

        return (
          <div key={index} className="mt-5 space-x-3">
            <span className="border p-2 inline-block rounded-full">
              {extention}
            </span>

            <button
              onClick={() => handleDownload(i)}
              className="border p-3 rounded-md"
            >
              Download
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Download;
