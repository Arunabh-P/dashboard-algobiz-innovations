import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { User } from "@/types/user";
import { memo } from "react";
interface UserViewModalProps {
    user: User;
    open: boolean
    handleClose: () => void;
}
interface Props {
    label: string;
    value?: string | number;
}

const InfoRow = ({ label, value }: Props) => {
    return (
        <p>
            <strong>{label}:</strong> {value || "-"}
        </p>
    );
};

const UserViewModal = memo(({ user, open, handleClose }: UserViewModalProps) => {
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 p-1 rounded-full overflow-hidden border shrink-0 bg-gray-100">
                        {user?.image && (
                            <img
                                src={user.image}
                                alt={user.firstName}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    <div>
                        <p className="font-semibold">
                            {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                            {user.company.title}
                        </p>
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <InfoRow label="Name" value={`${user.firstName} ${user.lastName}`} />
                    <InfoRow label="Email" value={user.email} />
                    <InfoRow label="Phone" value={user.phone} />
                    <InfoRow label="Username" value={user.username} />
                    <InfoRow label="Age" value={user.age} />
                    <InfoRow label="Gender" value={user.gender} />
                    <InfoRow label="Address" value={`${user.address?.address}, ${user.address?.city}, ${user.address.state}, ${user.address.country} - ${user.address.postalCode}`} />
                </div>
            </DialogContent>
        </Dialog>
    )
})

export default UserViewModal