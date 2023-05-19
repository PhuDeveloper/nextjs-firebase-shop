import { FileUploadOutlined, RefreshOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { UploadFilePropsInterface } from "./types";

const UploadFile = (props: UploadFilePropsInterface) => {
  const { onSubmit, isLoading, text } = props;

  const onDrop = useCallback((acceptedFiles: any) => {
    let reader = new FileReader();

    const path = acceptedFiles[0].path;

    if (acceptedFiles[0] instanceof Blob) {
      reader.readAsDataURL(acceptedFiles[0]);
    } else {
      toast.error("Có lỗi xảy ra", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    reader.onload = function () {
      if (typeof reader.result === "string") {
        onSubmit(reader.result, path);
      }
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box {...getRootProps()} sx={{ padding: 2, cursor: "pointer" }}>
      <input
        {...getInputProps()}
        accept="image/*,.pdf,.docx,.xlsx"
        multiple={false}
      />
      {isDragActive ? (
        <Typography>Tải lên hình ảnh</Typography>
      ) : (
        <Box display="flex">
          {isLoading ? (
            <RefreshOutlined sx={{ animation: "spin 2s linear infinite" }} />
          ) : (
            <Box display="flex">
              <FileUploadOutlined />
              {text && <Typography sx={{ marginLeft: 2 }}>{text}</Typography>}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UploadFile;
