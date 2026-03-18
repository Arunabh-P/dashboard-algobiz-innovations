import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { User } from "@/types/user";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { memo } from "react";

interface UserCardProps {
    user: User;
    handleViewDetails: (user: User) => void;
}

const UserCard = memo(({ user, handleViewDetails }: UserCardProps) => {
    return (
        <Card
            className="cursor-pointer hover:shadow-lg transition-all duration-200 p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => handleViewDetails(user)}
            role="button"
            tabIndex={0}
        >
            <CardHeader className="flex items-center gap-3 p-0">
                <div className="w-10 h-10 md:w-12 md:h-12 p-1 rounded-full overflow-hidden border shrink-0 bg-gray-100">
                    <img
                        src={user.image}
                        alt={user.firstName}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="min-w-0">
                    <CardTitle className="text-base md:text-lg leading-tight">
                        {user.firstName} {user.lastName}
                    </CardTitle>
                    <p className="text-xs md:text-sm text-muted-foreground">
                        {user.company.title}
                    </p>
                </div>
            </CardHeader>

            <CardContent className="mt-3 space-y-2 text-sm text-muted-foreground p-0">
                <div className="flex items-center gap-2">
                    <FiPhoneCall className="shrink-0" />
                    {user.phone}
                </div>

                <div className="flex items-center gap-2">
                    <AiOutlineMail className="shrink-0" />
                    {user.email}
                </div>

                <p>
                    {user.address.address}, {user.address.city}, {user.address.state},{" "}
                    {user.address.country} - {user.address.postalCode}
                </p>
            </CardContent>
        </Card>
    );
});

export default UserCard;