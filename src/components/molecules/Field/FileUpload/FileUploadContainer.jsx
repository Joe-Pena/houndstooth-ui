/* global FileReader encodeURI */
import FileUpload from './FileUpload'
import { compose, withHandlers, withPropsOnChange, withState } from 'recompose'

export default compose(
  withState('previewId', 'setPreviewId', ({ name }) => `upload_${name}_${Date.now()}`),
  withState('previewUrl', 'setPreviewUrl', '/loading.svg'),
  withState('isLoadingFileUrl', 'setIsLoadingFileUrl', false),
  withPropsOnChange(['value'], ({ value, getFileDownloadUrl, setIsLoadingFileUrl, setPreviewUrl }) => {
    console.log('value', value)
    if (value) {
      setIsLoadingFileUrl(true)

      getFileDownloadUrl(value).then(fileUrl => {
        console.log('got file download url', fileUrl)
        setPreviewUrl(fileUrl)
        setIsLoadingFileUrl(false)
      }).catch(err => {
        console.error('failed getting file download url!', err)

        const fileExt = value.split('.')[1]

        if (fileExt === 'pdf') {
          setPreviewUrl('pdf')
        } else if (err['status'] === 403) {
          setPreviewUrl('largeFile')
        }

        setIsLoadingFileUrl(false)
      })
    }
  }),
  withHandlers({
    imagePreview: ({ previewId, setPreviewUrl }) => (file) => {
      if (typeof file === 'object') {
        const reader = new FileReader()
        reader.onload = () => {
          console.log('reader result', file)
          setPreviewUrl(file['type'] === 'application/pdf' ? 'pdf' : reader.result)
        }
        reader.readAsDataURL(file['file'])
      }
    },
    deleteImage: ({ onChange, name }) => () => {
      onChange({ target: { name, value: null } })
    }
  }),
  withHandlers({
    handleFileUpload: ({ onChange, name: fieldKey, setStagedFileUploads, stagedFileUploads, imagePreview }) => (file) => {
      console.log('file', file)

      imagePreview(file)
      const shouldUpdateStaged = stagedFileUploads.some(stagedFile => stagedFile['fieldKey'] === fieldKey)
      const filePath = `upload/${file['type']}/${Date.now()}_${fieldKey}_${file['name']}`
      const updatedFile = Object.assign(file, { fieldKey, name: filePath })

      const newState = shouldUpdateStaged
        ? stagedFileUploads.map(upload => upload['fieldKey'] === updatedFile['fieldKey'] ? updatedFile : upload)
        : [...stagedFileUploads, updatedFile]

      // Add "/" prefix for filePath in form state, but not for path to upload file to github!
      onChange({ target: { value: `/${filePath}` } })
      setStagedFileUploads(newState)
    }
  })
)(FileUpload)
