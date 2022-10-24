import { useDropzone, FileWithPath } from 'react-dropzone';
 interface IProps {
  modal: boolean;
}

export default function FileInput({  modal }: IProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => {
     const pathUrl = URL.createObjectURL(file);
    return (
        <div
        key={file.path}
        className="flex items-center justify-between w-full h-[200px] rounded-lg bg-rh-teal-800  gap-2 mb-4"
      >
        <img src={pathUrl} className='w-full h-full object-cover object-center rounded-lg' />
        {/* <button>
        <i className="ri-close-line"></i>
        </button> */}
      </div>
    )
  });

  const SelectedFiles = () => {
    return (
      <div className="w-full">
        <div className="w-full h-full  overflow-x-hidden overflow-y-auto">{files}</div>
      <form action="">
      <input type="text" className='w-full text-gray-600 mb-3  font-thin font-Poppins dark:text-gray-200 py-3 leading-[30px] tracking-wide border-0 bg-transparent  focus:outline-none border-b duration-none' placeholder='Share your moments...' />
        <button className='my-2 border-none bg-AS-blue-100 text-white font-Poppins tracking-wider rounded-md py-3 px-12'>Share</button>
      </form>
      </div>
    );
  };

  return (
    <div className={`min-w-[600px] w-full overlay-x-10 absolute flex flex-col items-center justify-center dark:bg-AS-dark-200 ${modal ? "block translate-y-[30%] opacity-100" : "hidden opacity-0  translate-y-0"} z-50 min-h-[300px] duration-400  -translate-x-[50%] left-[50%] mx-auto bg-white  rounded-md shadow-xl p-6`}>
    <div className="flex flex-col items-center h-full w-full gap-4">
            {acceptedFiles.length > 0 ? <SelectedFiles /> :    <div
                className="flex flex-col items-center justify-center w-full gap-1 px-6 h-full py-6 bg-white dark:bg-slate-700 border rounded-lg cursor-pointer border-slate-300"
            {...getRootProps()}
        >
            <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col justify-center w-10 h-10 bg-rh-gray-100 border-[6px] rounded-[28px] border-rh-gray-50 items-center">
            <i className="ri-upload-cloud-2-line"></i>
            </div>
            <p className="font-eina01 font-normal text-[14px] leading-[20px] text-rh-gray-500">
                <span className="font-semibold text-rh-teal-700"> Click to upload</span> or drag and drop
            </p>
            </div>
            <p className="text-[12px] leading-[18px] font-eina01 font-normal text-rh-gray-500">
            SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
            <input {...getInputProps({ className: 'hidden' })} />
        </div>}
    </div>
    </div>
  );
}

// 07066093224

function formartSize(size: any) {
  const fileSize =
    size > 1024
      ? size > 1048576
        ? `${Math.round(size / 1048576)}${' '}MB`
        : `${Math.round(size / 1024)}${' '}KB`
      : `${size}${' '}Bytes`;

  return fileSize;
}
