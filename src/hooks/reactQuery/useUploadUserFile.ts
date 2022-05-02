import { useMutation } from 'react-query';
import { postUserFile } from '../../services/file.service';

export const useUploadUserFile = () => useMutation('upload-user-file', postUserFile);
