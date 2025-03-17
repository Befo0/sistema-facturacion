import PrimaryButton from "./PrimaryButton"
import Modal from "./Modal"
import { payCart } from "@/utils/payCart"


export default function CardPayment() {

    const { isModalOpen, startTransaction, closeModal } = payCart()

    return (
        <>
            <PrimaryButton onClick={startTransaction}>
                Pago con tarjeta
            </PrimaryButton>
            <Modal show={isModalOpen} onClose={closeModal}>
                <section className="p-4 sm:p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                    <div className="flex-1">
                        <div className="flex items-center flex-col gap-y-4">
                            <p className="text-gray-600 text-xl px-6">
                                Pago esta siendo Procesado...
                            </p>
                        </div>
                    </div>
                </section>
            </Modal>
        </>
    )
}
