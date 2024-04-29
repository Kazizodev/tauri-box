import { toast } from 'sonner'
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Ledge } from '@/types/types'
import { deleteLedge } from '@/database/ledges'
import { Button } from '@/components/ui/button'
import AlertModal from '@/components/ui/alert-modal'
import { useLedgeStore } from '@/zustand/ledges-store'

const CellActions = ({ data }: { data: Ledge }) => {
    const { setLedges } = useLedgeStore()
    const [loading, setLoading] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    const onDelete = async () => {
        try {
            setLoading(true)

            const response = await deleteLedge(data.id)
            setDeleteModalOpen(false)
            setLedges(response.data as Ledge[])

            toast.success('Ledge deleted!')
        } catch (error: any) {
            toast.error(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <AlertModal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} onConfirm={onDelete} loading={loading} />

            <div className="flex gap-2 items-center justify-end h-full">
                <Button variant="ghost" size="icon" className="size-5" asChild>
                    <Trash2 className="text-destructive cursor-pointer size-5" onClick={() => setDeleteModalOpen(true)} />
                </Button>
            </div>
        </>
    )
}

export default CellActions
