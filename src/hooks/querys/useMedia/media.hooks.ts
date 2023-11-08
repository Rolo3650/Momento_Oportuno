import { useMutation } from 'react-query';
import { MediaMutationsKeys } from './media.keys';
import { MediaServices } from '../../../api/Media';

const useAppendMedia = () => {
  return useMutation({
    mutationKey: MediaMutationsKeys.appendMedia,
    mutationFn: MediaServices.uploadMediasToResource,
  });
};

export { useAppendMedia };
