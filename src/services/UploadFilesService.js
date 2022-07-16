import http from "./http-common";
class UploadFilesService {
  upload(file) {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/v1/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  getFiles() {
    return http.get("/v1/files");
  }
}
export default new UploadFilesService();
