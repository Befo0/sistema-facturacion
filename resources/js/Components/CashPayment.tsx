import PrimaryButton from "./PrimaryButton"
import Modal from "./Modal"
import SecondaryButton from "./SecondaryButton"
import { payCart } from "@/utils/payCart"

export default function CashPayment() {

    const { isModalOpen, openModal, closeModal, startTransaction } = payCart()

    return (
        <>
            <PrimaryButton onClick={openModal}>
                Pago en efectivo
            </PrimaryButton>
            <Modal show={isModalOpen} onClose={closeModal}>
                <section className="p-4 sm:p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                    <div className="flex-1">
                        <div className="flex items-center flex-col gap-y-4">
                            <p className="text-gray-600 text-xl px-6">
                                Pago esta siendo Procesado...
                            </p>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            <SecondaryButton onClick={startTransaction}>
                                Finaliza pago
                            </SecondaryButton>
                        </div>
                    </div>
                </section>
            </Modal>
        </>
    )
}
