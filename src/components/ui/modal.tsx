import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface ModalProps {
    title?: string
    description?: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, description, isOpen, onClose, children }: ModalProps) => {
    const onChange = (open: boolean) => {
        if (!open) onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="pb-2">
                {title && (
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                )}
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
