export interface UploadFilePropsInterface {
  onSubmit: (filesBase64: string, path?: string) => void;
  isLoading: boolean;
  text?: string;
}
