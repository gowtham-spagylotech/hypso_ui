import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
// import { callAPI, useStore, useUser } from "../../../src/Utils/utils";
// import Pagination from "../../Components/Global/Pagination/Pagination";
// import Alert from "../../Components/Alert/Alert";
// import Loader from "../Global/Loader/Loader";
import './ImageSelector.css';

const ImageSelector = ({ Config, onClose, onSelectImageInfo }) => {

    var { id } = useParams();
    // const navigate = useNavigate();
    // const location = useLocation()
    // const { user, setUser } = useUser();
    // const { store, setStore } = useStore();
    const [alert, setAlert] = useState({ text: "", type: "" });
    const [payLoad, setPayLoad] = useState();
    const [imagesToUpload, setImagesToUpload] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [progressPercentage, setProgressPercentage] = useState(5)
    const [message, setMessage] = useState(null);
    const [refreshCount, setRefreshCount] = useState(0);
    const [searchValue, setSearchValue] = useState();
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultInfo, setResultInfo] = useState({
        total_rows: "",
        fetched_rows: "",
        total_pages: "",
        page_size: 0,
        current_page: "",
        success: true,
        errors: ""
    })

    
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // var Currentpath = [location.pathname.split("/")]
    // var checkLocation = Currentpath[0]
    // var store_id
    // if (checkLocation[2] == "stores" || checkLocation[2] == "store") {
    //     store_id = id
    // }
    // else {
    //     store_id = store?.id
    // }

    //set selected images when savedImages changes
    useEffect(() => {
        // console.log("saved images -" + JSON.stringify(savedImages))
        if (Config?.savedImages) {
            setSelectedImages(Config?.savedImages)
        }
        else {
            setSelectedImages([])
        }

    }, [Config])

    //on-page, load get data from the database
    useEffect(() => {

        var initial_payload = {
            // "store_id": store_id,
            "page_size": 10,
            "current_page": currentPage
        }

        var updated_payload = payLoad ? payLoad : initial_payload
        // console.log("updated_payload", updated_payload)
        // callAPI('/admin/images/list',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'token': user?.auth_token
        //         },
        //         body: JSON.stringify(updated_payload)
        //     }, navigate, setLoading)

        //     .then(data => {
        //         // console.log("api response " + JSON.stringify(data))
        //         if (data?.success == true) {
        //             setImages(data?.records)
        //             setProgress({ started: false, pc: 0 })
        //             setMessage("")
        //             setResultInfo({
        //                 total_rows: data.total_rows,
        //                 fetched_rows: data.fetched_rows,
        //                 total_pages: data.total_pages,
        //                 page_size: data.page_size,
        //                 current_page: data.current_page,
        //                 success: data.success,
        //                 errors: data.errors
        //             })

        //         } else {
        //             // console.log("errors" + JSON.stringify(data?.errors))
        //         }
        //     })

    }, [payLoad, currentPage, refreshCount, Config])

    const onPageSelect = (currentPage) => {
        setCurrentPage(currentPage)
        onClickSearchBtn(currentPage)
    }

    const onImageSelect = (event) => {
        const files = event ? Array.from(event.target.files) : []; // Convert FileList to an array
        // console.log("files", files);
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileSize = file.size / (1024 * 1024); // Convert bytes to MB
    
            if (fileSize > 1) {
                setAlert({ text: `File ${file.name} exceeds 1MB.`, type: "error" });
            } else {
                // Modify the file name by replacing spaces with underscores
                const modifiedFileName = file.name.replace(/\s+/g, '_');
    
                // Create a new File object with the modified name and the original file properties
                const modifiedFile = new File([file], modifiedFileName, { type: file.type });
    
                setImagesToUpload(prevImages => [...prevImages, modifiedFile]);
            }
    
        }
    };
    

    useEffect(() => {

        if (imagesToUpload?.length != 0) {
            uploadImage(imagesToUpload[0])
        }

        if (imagesToUpload?.length == 0) {
            setRefreshCount(refreshCount + 1)
            setProgress({ started: true, pc: 100 })
        }

    }, [imagesToUpload?.length])

    // upload an image to the database
    const uploadImage = (image) => {
        // console.log("image", image)
        if (image) {
            var formData = new FormData()
            formData.append('file', image)
            formData.append('area_id', 6)
            setMessage("Uploading...");
            setProgress({ started: true, pc: progressPercentage })
            console.log("formData - " + JSON.stringify(formData))
            fetch(`${apiUrl}/modules/images/upload`, {
                method: 'POST',
                body: formData,

            },)
                .then(data => {
                    // console.log("upload image - received data " + JSON.stringify(data))
                    if (data.success) {
                        // Calculate the percentage increase
                        setCount(count + 1)
                        setMessage("Upload Successfully")
                        setProgress({ started: true, pc: Math.min((count * 100) / 10, 100) })
                        setImagesToUpload(prevImages => prevImages?.filter(prevImage => prevImage != image));
                        onIncreaseProgressPercentage()
                    } else {
                        if (data?.errors?.[0]?.message == "image_name_exists") {
                            setImagesToUpload(prevImages => prevImages?.filter(prevImage => prevImage != image));
                            setAlert({ text: "Image with the name already exists", type: "error" })
                        }
                        else {
                            // unexpected error occurred
                            setAlert({ text: "Something Went Wrong, Please Try Again", type: "error" })
                            setProgress({ started: false, pc: 0 })
                            setImagesToUpload([])
                        }
                        // console.log("data?.errors",data?.errors)
                    }
                }
                )
        }
    }

    // store selected image in state
    const onSelectImage = (image_id, path, name) => {

        onSelectImageInfo({
            "image_id": image_id,
            "path": path,
            "name": name
        })

        //get selected image image_id, path,name store object
        var selectedImage = {
            "image_id": image_id,
            "path": path,
            "name": name
        }

        // if accepting multiple files is false if able to select a single image 
        if (Config?.acceptMultipleFiles == false) {
            if (image_id) {
                //if image is already selected
                if (selectedImages?.find((image) => image?.image_id == selectedImage?.image_id)) {
                    setSelectedImages([])
                } else {
                    //image is not selected. Add image to selected images list
                    setSelectedImages(() => [selectedImage])
                }
            }
        }

        // if accepting multiple files is true  if able to select a multiple images 
        else if (Config?.acceptMultipleFiles == true) {
            if (selectedImage) {
                //if image is already selected
                if (selectedImages?.find((image) => image?.image_id == selectedImage?.image_id)) {
                    // console.log('selectedImages', selectedImages)
                    //remove selected image
                    var newSelectedImages = selectedImages?.filter(function (image) {
                        return image?.image_id != selectedImage?.image_id
                    });
                    setSelectedImages(newSelectedImages)
                }
                else {
                    //image is not selected. Add image to selected images list
                    if (selectedImages?.length > 0) {
                        setSelectedImages((existingImages) => [...existingImages, selectedImage])
                    } else {
                        setSelectedImages([selectedImage])
                    }

                }
            }
        }
    }

    //on enter search the image list
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getImages()
        }
    }

    //during on search icon clicked get the result of image
    const onClickSearchBtn = (current_page) => {
        getImages(current_page)
    }

    // onclick to pass the serach values to the database
    const getImages = (page) => {
        var current_page = page ? page : 1
        var search_value = searchValue == undefined ? "" : searchValue
        var filters = {
            "store_id": store_id,
            "filters": {
                "conditions": [
                    { "field": "name", "operator": "like", "value": search_value, "dataType": "string" }
                ]
            },
            "page_size": 10,
            "current_page": current_page,
        }
        setPayLoad(filters)
    }

    //get search values from the event trigger search values and store them in the state
    const onChangeSearchValue = (event) => {
        // console.log("on search value - ", event.target.value)
        setSearchValue(event.target.value)
        var current_page = 1
        var search_values = {
            "store_id": store_id,
            "filters": {
                "conditions": [
                    { "field": "name", "operator": "like", "value": event.target.value, "dataType": "string" }
                ]
            },
            "page_size": 10,
            "current_page": current_page,
        }

        setPayLoad(search_values)

    }

    //selected images after clicking the done button show in the preview section
    const selectImagesDone = () => {
        setImagesIntoParent(Config?.savedImages, selectedImages)
        setRefreshCount(refreshCount + 1)
    }

    const setImagesIntoParent = (savedImages, selectedImages) => {
        setAlert({ text: "", type: "" })
        let saved_image_ids = savedImages?.map((saved_image) => saved_image.image_id)
        let selected_image_ids = selectedImages?.map((selected_image) => selected_image.image_id)

        // saved images is empty here pass the selected_image_ids
        if (savedImages?.length == 0 || savedImages == null || savedImages == undefined) {
            onClose(selected_image_ids)
        }
        // saved images is not empty compare both and pass  added_images,removed_images
        else if (saved_image_ids || selected_image_ids) {
            const [added_images, removed_images] = getAddedAndRemovedImages(saved_image_ids, selected_image_ids)
            onClose(added_images, removed_images)
        }
        else {
            onClose()
        }
    }

    const getAddedAndRemovedImages = (saved_images, added_images) => {
        // console.log("inside added and removed images")
        const newly_added_images = added_images?.filter(added_image => saved_images?.indexOf(added_image) === -1)
        const removed_images = saved_images?.filter(saved_image => added_images?.indexOf(saved_image) === -1)
        return [newly_added_images, removed_images]
    }

    const handleOpenFileUpload = () => {
        document.getElementById('fileUpload').click();
    };

    const onIncreaseProgressPercentage = () => {
        if (progressPercentage < 100) {
            setProgressPercentage(10 * 2)
        }
        else {
            setProgressPercentage(10)
        }
    }


    return (
        <div className={`${Config ? 'opacity-100  transition-all duration-5000' : 'hidden'}`}>
            <div className="fixed w-[75%] top-[25%] left-[12%] transform translate-x-1/6 translate-y-0 z-50 bg-white p-20 shadow-md bg-white shadow-md p-4 rounded-md p-5" >
                <div className="lg:col-span-12 text-center">
                    <h3> Image Gallery</h3>

                    {/* <button className="btn btn-primary" onClick={button}>Delete</button> */}
                    {/* <div className="flex flex-col justify-center items-center">
                        {progress.started && <progress max="100" value={progress?.pc}></progress>}
                        {message && <span className="text-green-500">{message}</span>}
                    </div> */}
                </div>
                {/* {alert?.text != '' &&
                    <Alert text={alert?.text} type={alert?.type} setAlert={setAlert} style={{ top: '100px', left: "50px" }} />} */}
                <div className="w-[100%] flex justify-between items-center">
                    <div className="lg:col-span-1 ml-auto">
                        <button className="btn btn-primary pt-[5px] pb-[5px]" onClick={() => selectImagesDone()}> Done </button>
                    </div>
                </div>

                <span className="absolute top-[20px] right-[20px] cursor-pointer hover:text-red-500" onClick={() => selectImagesDone()}>X</span>
                <div className="w-[100%] flex">
                    <div className="w-[30%] border-dashed border border-solid border-gray-300 m-[10px] rounded-lg mt-30 flex items-center justify-center hover:bg-gray-200" role="button">
                        <div className="flex flex-col items-center justify-center h-full">
                            <i className={`mdi mdi-cloud-upload-outline text-3xl cursor-pointer relative top-[-45px] left-75`} role="button" />
                            Add images or drag and drop
                            <p className="text-xs">Upload JPG or PNG image (Below 1 MB)</p>
                            <div className={`absolute ${imagesToUpload?.length !== 0 ? 'disabled' : ''}`} role="button">
                                <input
                                    type="file"
                                    name="file"
                                    id="fileUpload"
                                    multiple
                                    onChange={onImageSelect}
                                    className="opacity-0 border-4 border-solid border-gray-300 h-[350px] w-350 p-0 m-0 left-4 top-29 cursor-pointer"
                                    role="button"
                                    disabled={imagesToUpload?.length !== 0}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="w-[60%] h-[350px]">
                        <div className="w-[100%] flex justify-between items-center mt-3 border rounded p-1">
                            <div className="w-[30%]">
                                <p className="text-gray-600 !important p-0 15 !important text-sm"> Selected {selectedImages?.length} Files</p>
                            </div>
                            <div className="relative flex w-[40%]">
                                <input type="text" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 border border-solid border-gray-200 border-t-0 rounded-l-md"
                                    placeholder="Search" onChange={onChangeSearchValue} onKeyDown={handleKeyDown} />
                                <span type="button" name="search" id="search-btn" className="bg-gray-200 w-[40px] rounded-none rounded-r-md cursor-pointer" onClick={() => onClickSearchBtn} >
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_152)">
                                    <rect width="24" height="24" fill="white"/>
                                    <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"/>
                                    <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_15_152">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-200 p-10 text-center border-none p-2 h-[79%]">
                            {/* {loading && <Loader className={"table_loader"} imageSelector={true} />} */}
                            {!loading && (
                                <div className="flex col-lg-12 flex-wrap">
                                    {images?.length == 0 ? (
                                        <p className="flex justify-center items-center w-full">Image Gallery is empty</p>
                                    ) : (
                                        <div className="flex col-lg-12 flex-wrap">
                                            {images?.map((image, index) => {
                                                // console.log("images",images)
                                                return (
                                                    <div className="col-lg-3 relative p-2" key={index}>
                                                        <div className="relative inline-block h-150 w-150">
                                                            <img
                                                                src={image?.path}
                                                                className="h-100 w-full object-contain rounded-lg cursor-pointer transform hover:scale-110"
                                                                onClick={() => onSelectImage(image?.image_id, image?.path, image?.name)}
                                                            />
                                                            <p className="mt-2">{image?.name}</p>
                                                            <div className={` ${selectedImages?.find(selectedImage => selectedImage?.image_id == image?.image_id) ? 'block absolute top-[-5px] right-[-5px] text-2xl bg-green-500 text-white rounded-full h-8 w-8 flex items' : 'hidden'}`}>
                                                                <i className="mdi mdi-check"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
{/* 
                        <div className="image_selector_Pagination">
                            <Pagination totalRows={resultInfo.total_rows} fetchedRows={resultInfo.fetched_rows} totalPages={resultInfo.total_pages} pageSize={resultInfo.page_size} currentPage={resultInfo.current_page} onPageSelect={onPageSelect} label='Images' loader={loading} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div >

    )
}
export default ImageSelector;