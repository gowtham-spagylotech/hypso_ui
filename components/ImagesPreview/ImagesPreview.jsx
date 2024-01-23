import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { callAPI, useStore, useUser } from "../../Utils/utils";
// import Logo from "../Logo/Logo";
// import '../../ImageSelector.css';


const ImagesPreview = ({ acceptMultipleFiles, savedImages, style, featuredImage, userProfile, onOpen, selectedImageInfo, onRemoveImageIds, deleteDisable, config, handleDragEndImages , title}) => {

    var { id } = useParams();
    // const { user, setUser } = useUser();
    const [selectedImages, setSelectedImages] = useState([]); //all images that are selected/ticked - array of objects
    const [storeName, setStoreName] = useState();
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();
   

    //set selected images when savedImages changes
    useEffect(() => {
        // console.log("saved images -" + JSON.stringify(savedImages))
        setSelectedImages(savedImages)
    }, [savedImages])


    // get store name
    useEffect(() => {

        //  remove store i need to get user info

        // if (store_id) {
        //     callAPI(`/admin/stores/${store_id}`,
        //         {
        //             method: 'POST',
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json',
        //                 'token': user?.auth_token
        //             },

        //         }, navigate, setLoading)

        //         .then(res => {
        //             // console.log("api response " + JSON.stringify(res))
        //             if (res.success == true) {
        //                 setStoreName(res?.record?.store_name)
        //             } else {
        //                 // console.log('Error occurred. Please try again.')

        //             }
        //         })
        // }

    }, [])

    useEffect(() => {

        if (selectedImageInfo) {

            //get selected image image_id, path,name store object
            var selectedImage = {
                "image_id": selectedImageInfo?.image_id,
                "path": selectedImageInfo?.path,
                "name": selectedImageInfo?.name
            }

            // if accepting multiple files is false if able to select a single image 
            if (acceptMultipleFiles == false) {
                if (selectedImage?.image_id) {
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
            else if (acceptMultipleFiles) {
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
    }, [selectedImageInfo])


    // remove the image from the stored state
    const onRemoveImage = (image_id) => {
        setSelectedImages([])
        if (image_id) {

            onRemoveImageIds(image_id)
            var selectedImage = {
                "image_id": image_id,
            }
            // console.log("selectedImage",selectedImage)

            var remainingSelectedImages = []

            // if accepting multiple files is false if able to preview a single image 
            if (acceptMultipleFiles == false) {

                if (image_id) {
                    //if image is already selected
                    if (selectedImages?.find((image) => image?.image_id == selectedImage?.image_id)) {
                        setSelectedImages([])

                    } else { //image is not selected. Add image to selected images list
                        remainingSelectedImages = () => [image_id]
                        setSelectedImages(remainingSelectedImages)
                    }
                }
            }
            // if accepting multiple files is false if able to multiple a single images
            else if (acceptMultipleFiles == true) {

                if (image_id) {
                    //if image is already selected
                    if (selectedImages?.find((image) => image?.image_id == selectedImage?.image_id)) {

                        //remove selected image
                        remainingSelectedImages = selectedImages?.filter(function (image) {
                            return image?.image_id !== selectedImage?.image_id
                        });
                        setSelectedImages(remainingSelectedImages)

                    } else { //image is not selected. Add image to selected images list
                        remainingSelectedImages = (existingImages) => [...existingImages, image_id]
                        setSelectedImages(remainingSelectedImages)
                    }
                }
            }
        }
    }

    const onClickOpenImageSelector = () => {
        var image_selector_config = {
            "acceptMultipleFiles": acceptMultipleFiles,
            "savedImages": selectedImages,
            "ImageSelector": true,
            "featuredImage": featuredImage
        };

        if (config) {
            image_selector_config = { ...image_selector_config, ...config };
        }

        onOpen(image_selector_config);
    };

    var store_name_as_logo = "store_name_as_logo"

    var popup_open

    // if (checkLocation[2] == "stores" && checkLocation[2] == "store") {
    //     if (savedImages?.length == 0) {
    //         popup_open = true
    //     }
    // }
    // else if (checkLocation[2] == "storeprofile" && checkLocation[3] != "edit") {
    //     if (savedImages?.length == 0) {
    //         popup_open = true
    //     }
    // }

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedImages = Array.from(selectedImages);
        const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
        reorderedImages.splice(result.destination.index, 0, reorderedImage);
        
        if (acceptMultipleFiles) {
            setSelectedImages(reorderedImages);
            handleDragEndImages(reorderedImages)
        }
    };

    // console.log("selectedImages",selectedImages)
    return (
        <div className={` ${acceptMultipleFiles ? "bg-white border border-gray-300 p-4 rounded shadow" : ""}`}>

            <div className="mt-6 mb-4 text-xl font-medium" style={{ display: acceptMultipleFiles ? "block" : "hidden" }}>
                <h2>{title}</h2>
            </div>

            {/* check to accept multiple files as true or false and show the block based on that */}
            {acceptMultipleFiles == true ?
                //acceptMultipleFiles is true show the block 
                <div className={`${acceptMultipleFiles ? "border-dashed border-2 border-gray-400 rounded-lg m-5" : ""}`} >
                    {/* onclick to add file  */}
                    <div className={`pl-3 pr-3  flex items-center ${selectedImages ? "pt-3 " : ""}`}>
                        {/* acceptMultipleFiles show the block */}
                        <div className="flex flex-wrap overflow-auto">
                            {/* show the selected images */}
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="imageList" direction="horizontal">
                                    {(provided) => (
                                        <div
                                            className="flex flex-wrap" // Adjust class based on your needs
                                            ref={provided.innerRef}
                                            {...provided?.droppableProps}
                                        >
                                            {selectedImages && selectedImages?.map((image, index) => (
                                                <Draggable key={image.image_id} draggableId={image?.image_id?.toString()} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            className="relative block h-60 border border-solid border-gray-300 rounded-lg w-60 p-5 mr-5 mb-1"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <img className="h-full w-full object-contain rounded-lg" src={image.path} alt={image.name} />
                                                            <div className="absolute top-5 h-60 w-60 border-radius-10 opacity-80 cursor-pointer hover:top-5 hover:h-50 hover:w-50 hover:bg-blue-100 hover:rounded-lg hover:opacity-90 hover:transition duration-300 ease-in-out transform hover:scale-105">
                                                                <div className="opacity-0 w-[80px] text-white flex justify-between items-center p-5 cursor-pointer">
                                                                    <i className="mdi mdi-window-close" onClick={() => onRemoveImage(image?.image_id)}></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>

                        </div>
                    </div>
                    <div className="h-100 flex flex-col justify-center items-center w-full" >
                        <div className="h-[70px] w-[96px] flex justify-center items-center rounded-lg cursor-pointer" onClick={() => onClickOpenImageSelector()}>
                            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="style=fill">
                                    <g id="add-circle">
                                        <path id="Subtract" fillRule="evenodd" clipRule="evenodd"
                                            d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.00738C12.4142 7.00739 12.75 7.34317 12.75 7.75739L12.75 11.25L16.25 11.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75L12.75 12.75L12.75 16.2426C12.75 16.6568 12.4142 16.9926 12 16.9926C11.5857 16.9926 11.25 16.6568 11.25 16.2426L11.25 12.75L7.76476 12.75C7.35055 12.75 7.01476 12.4142 7.01476 12C7.01477 11.5857 7.35055 11.25 7.76477 11.25L11.25 11.25L11.25 7.75738C11.25 7.34317 11.5858 7.00738 12 7.00738Z"
                                            fill="#d5d5d5" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                :
                //acceptMultipleFiles is false show the block 
                <div className={`${acceptMultipleFiles == false && featuredImage == true ? "border-dashed border border-solid border-gray-300 rounded-lg m-0 flex justify-center items-center h-[260px]" : "border-dashed border border-solid border-gray-300 rounded-lg"}`} style={style}>
                    {/* onclick to add file  */}
                    <div style={{ display: selectedImages?.length > 0 ? "none" : "block" }}>

                        {userProfile ?
                            <div className="h-100 w-100 flex flex-col justify-center relative" >
                                {popup_open ? <Logo name={storeName} className={store_name_as_logo} /> :
                                    <>
                                        <Logo name={storeName} className={store_name_as_logo} />
                                        <i className="mdi mdi-plus-circle-outline circleAddIconInProfile" onClick={() => onClickOpenImageSelector()} />
                                    </>
                                }
                            </div>
                            :
                            <div className="h-100 w-full flex flex-col justify-center items-center">
                                <div className=" h-[70px] w-[96%] flex justify-center items-center rounded-lg cursor-pointer border-0" onClick={() => onClickOpenImageSelector()}>
                                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="style=fill">
                                            <g id="add-circle">
                                                <path id="Subtract" fillRule="evenodd" clipRule="evenodd"
                                                    d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.00738C12.4142 7.00739 12.75 7.34317 12.75 7.75739L12.75 11.25L16.25 11.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75L12.75 12.75L12.75 16.2426C12.75 16.6568 12.4142 16.9926 12 16.9926C11.5857 16.9926 11.25 16.6568 11.25 16.2426L11.25 12.75L7.76476 12.75C7.35055 12.75 7.01476 12.4142 7.01476 12C7.01477 11.5857 7.35055 11.25 7.76477 11.25L11.25 11.25L11.25 7.75738C11.25 7.34317 11.5858 7.00738 12 7.00738Z"
                                                    fill="#d5d5d5" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        }
                    </div>
                    {/* acceptMultipleFiles is false hide the block */}
                    <div className={`${style ? "" : "flex justify-center items-center flex-row flex-wrap"}`} >
                        {/* show the selected images */}
                        {selectedImages && selectedImages?.map((image, index) => {
                            // console.log("selectedImages",selectedImages)
                            return (
                                <div className="relative" key={index} >
                                    <div className={`${featuredImage == true ? "relative block h-[250px] w-[250px] p-5" : "relative block h-[100px] w-[107px] p-5"}`}>
                                        <img src={image?.path} alt={image?.name} />
                                        {deleteDisable &&
                                            <div className={`${featuredImage == true ? "absolute top-5 h-250 rounded-lg opacity-80 hover:top-5 hover:h-240 hover:w-240 hover:bg-blue-100 hover:rounded-lg hover:opacity-90 hover:transition duration-300 ease-in-out transform hover:scale-105" : "absolute top-5 h-100 w-100 rounded-lg opacity-80 hover:top-5 hover:h-90 hover:w-88 hover:bg-blue-100 hover:rounded-lg hover:opacity-90 hover:transition duration-300 ease-in-out transform hover:scale-105"}`} >
                                                <div className="opacity-0 h-240 w-240 text-white flex justify-between items-center p-5 cursor-pointer">
                                                    <i className="mdi mdi-window-close" onClick={() => onRemoveImage(image?.image_id)}></i>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            }
        </div >
    )
}
export default ImagesPreview;