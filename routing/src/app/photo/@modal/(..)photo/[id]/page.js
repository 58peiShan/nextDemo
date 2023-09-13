import Photo from "../../../../photo";
import Modal from "../../../../components/Modal";
import photos from "../../../../photos.js"
export default function PhotoPage({params}) {
    const photo = photos.find(p=>p.id==params.id);
    return(
        <Modal>
           <Photo photo={photo}/>
        </Modal>
    )
}