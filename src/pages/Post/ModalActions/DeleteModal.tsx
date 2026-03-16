import Button from '../../../components/Button'


type Props = {
  onCancel: () => void
  onConfirm: () => void
}
const ModalDelete = ({ onCancel, onConfirm }: Props) => {


  return (
    <div className="overlay">
      <div className="modal">
        <h3>Are you sure you want to delete this item?</h3>

        <div className="buttons">
          <Button onClick={onCancel} className="cancel">Cancel</Button>
          <Button onClick={onConfirm} className='delete'>Delete</Button>
        </div>
      </div>
    </div>

  )
}

export default ModalDelete