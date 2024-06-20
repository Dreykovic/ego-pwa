import React from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/shared/components/header/header-slice';

// Define the types for props
interface ConfirmationModalBodyProps {
  extraObject: {
    message: string;
    type: string;
    _id: string;
    index: number;
  };
  closeModal: () => void;
}

const ConfirmationModalBody: React.FC<ConfirmationModalBodyProps> = ({
  extraObject,
  closeModal,
}) => {
  const dispatch = useDispatch();

  const { message } = extraObject;

  const proceedWithYes = async () => {
    dispatch(
      showNotification({ message: "Success de l'opération", status: 1 }),
    );

    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">{message}</p>

      <div className="modal-action mt-12">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36" onClick={proceedWithYes}>
          Yes
        </button>
      </div>
    </>
  );
};

export default ConfirmationModalBody;
