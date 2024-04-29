import { toast } from 'sonner'
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SightGlassVariants } from '@/types/types'
import AlertModal from '@/components/ui/alert-modal'
import { deleteSightGlassVariant } from '@/database/sightglasses'
import { useSightGlassVariantsStore } from '@/zustand/sightglasses-store'

const CellActions = ({ data }: { data: SightGlassVariants }) => {
    const { setSightGlassVariants } = useSightGlassVariantsStore()
    const [loading, setLoading] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    const onDelete = async () => {
        try {
            setLoading(true)

            const response = await deleteSightGlassVariant(data.id)
            setDeleteModalOpen(false)
            setSightGlassVariants(response.data as SightGlassVariants[])

            toast.success('Sight Glass Variant deleted!')
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