import "./Modal.css"

type Props = {
    children: React.ReactNode
}

const closeModal = (e: React.MouseEvent):void => {
  const modal = document.querySelector("#modal");
  modal!.classList.add("hide");
}

const Modal = ({ children }: Props) => {
  return (
    <div id="modal" className="hide">
      <div className="fade" onClick={ closeModal }>
      </div>
      <div className="modal">
        <h2>Texto Modal</h2>
        { children }
      </div>
    </div>
  )
}

export default Modal