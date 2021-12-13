import { storage } from './index.js'

const uploadFirebase = (image) => {
    return new Promise((resolve, reject) => {
        const uploadTask = storage.ref(`images/${image.nameImage}`).put(image)
        // let urlImages = null
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log("okokloi: ", error)
                reject(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(image.nameImage)
                    .getDownloadURL()
                    .then(url => {
                        resolve(url)
                    })
            }
        )
    })
    // console.log("okokchay",urlImages)
    // if(urlImages)
    // return urlImages
    // else return null



}
export default uploadFirebase;